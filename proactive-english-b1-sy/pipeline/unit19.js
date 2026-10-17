// Proactive English B1 · Syria Edition · Book 2 · Unit 19 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, second band.** From this unit you **name the criterion** before you say anything. Write your partner three sentences, each one opening with the criterion it marks against — _on the one-request rule…_, _on the person named…_, _on the date…_ — and then what you found.';

out.push(h1('Unit 19  Complaints and Resolutions'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**19.1**  state a fault precisely',
  '**19.2**  say what you have already had done about it',
  '**19.3**  ask for information without accusing anybody',
  '**19.4**  make one request, by one date',
  '**19.5**  say that a resolution is not what you asked for',
  '**19.6**  accept a partial resolution, on terms',
  '**19.7**  Review & Mediate: explain a complaints procedure',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**A complaint is a document, not a feeling.** The sequence is always the same: what the fault **does**, how often, what you have already had **done**, the one thing you are **asking** for, and by **when**. Four of those five are missing from almost every complaint anybody in this room has ever sent.',
  '**The hardest cycle is 19.6, and it is not about grammar.** It is about accepting a resolution that is **not** what you asked for, saying so plainly, and accepting it anyway — on terms, in writing, without resentment. Almost nobody does this well, and the people who do it well get answered next time.',
  '**And the peer-review slip changes from this unit.** Until now you wrote your partner three sentences with no stems. From here on you **name the criterion** you are marking against before you say anything — _on the one-request rule_, _on the person named_, _on the date_. You are no longer giving an opinion; you are reviewing against a standard the unit has set.',
  '**Bring one unresolved complaint of your own to 19.1** — something you have asked for and not had, at work or anywhere else. With the dates, and with the name of whoever told you what. Unit 18 taught you why the name matters; this unit cannot be done without it.',
], C.lyellow, C.orange));

// ======================= 19.1 =======================
out.push(pb());
out.push(h2('19.1  What it does, and how often'));
out.push(p('**Function:** stating a fault precisely   ·   **Grammar:** the passive for a fault, with a count   ·   **Pronunciation:** the swallowed _been_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the unresolved complaint you brought, in **one sentence that says what the fault does**. Not what you feel about it and not whose fault it is. Your teacher writes the eleven on the board and then strikes out every word that is an opinion.'));
out.push(board('When you press the back arrow it returns to the first page. Seventeen times out of seventeen.', 'the passive · what it does · how often'));
out.push(p('**b**  Turn each into a sentence about what happens, not about who. **1** _They never fix anything._  **2** _The machine is useless._  **3** _Somebody keeps losing the sheets._  **4** _The office does not care._  **5** _The form is ridiculous._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What exactly does the projector do, and how many times has it done it?   **A** it returns to the first page; seventeen out of seventeen   **B** it will not switch on; four times   **C** it loses the file; twice'));
out.push(p('**b**  Listen again. **1** What does Umm Kinan say her April note did wrong?   **2** What does Ms Huda say the first sentence of a complaint has to contain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.1  Seventeen times out of seventeen', [
  ['Umm Kinan', 'I have brought the thing I have been complaining about since April, and I have realised on the way here that I have never once said what it actually does.'],
  ['Ms Huda', 'Say what it does.'],
  ['Umm Kinan', 'When you press the back arrow on the projector in Room 9, it does not go to the previous page. It goes to the first page of the file. Every time. I have counted since April, because I started writing it down after I wrote the note: seventeen times out of seventeen.'],
  ['Omar', 'That is a fault. That is a real, written-down, repeatable fault.'],
  ['Umm Kinan', 'And what I wrote in April was: "the projector is difficult to use and I would be grateful if somebody could look at it." Eleven words of nothing. I have the carbon.'],
  ['Jad', 'Did anybody answer it?'],
  ['Umm Kinan', 'No, and for seven months I have thought that was because nobody cared about a woman of forty-eight and her blackboard. I think now it was because there was nothing in my note that anybody could do anything about. "Difficult to use" is not a fault. It is a feeling about a machine.'],
  ['Lubna', 'What does it cost you?'],
  ['Umm Kinan', 'That is the second thing I never wrote. If a class does not follow a step, I cannot go back one page. I have to press forward through the whole file to the end and start again, which takes about a minute and forty seconds, and a lesson is forty-five minutes. So I do not go back. So I have used it four times since April and not forty, and I have told myself for seven months that this is because I am slow with the machine.'],
  ['Ms Huda', 'Say that last part again, because it is the most important sentence anybody has said in this room this month.'],
  ['Umm Kinan', 'I decided the fault was in me. For seven months. It is in a back arrow.'],
  ['Ms Huda', 'Now the language, and it is simple and it is exact. The first sentence of a complaint says **what the fault does** — in the passive if you do not know who or what is responsible, and with a **number** on it. _When the back arrow is pressed, the file is returned to its first page: seventeen times out of seventeen since April._ That sentence can be acted on by somebody who has never been in your room. "The projector is difficult to use" cannot be acted on by anybody, including you.'],
  ['Umm Kinan', 'The new note is four lines and it has three numbers in it. I shall put it in on Thursday.'],
]));
out.push(sp());
out.push(box('Language box – saying what a fault does', [
  '**Sentence one is always the same shape: what happens · to what · how often.**',
  table(['instead of', 'write'], [
    ['_The projector is difficult to use._', '_When the back arrow is pressed, the file **is returned** to its first page._'],
    ['_They keep losing the sheets._', '_Three sheets **have been mislaid** since September — 11 Sept, 2 Oct, 19 Nov._'],
    ['_The form is ridiculous._', '_Boxes 4 and 9 **are never completed**, on any copy, by anybody._'],
    ['_It is always late._', '_The round **was finished** late on 26 nights out of 31._'],
  ], [2.2, 2.4]),
  '**Use the passive when you do not know who, or when who does not matter yet** (Unit 5). _The file is returned_ · _the sheets have been mislaid_ · _the round was finished late._ It is not politeness: it is accuracy, and it stops a fault report turning into an accusation before anybody has looked at the machine.',
  '**Put the count in the first sentence, not the last.** _Seventeen times out of seventeen_ · _26 nights out of 31_ · _three sheets, and here are the dates._ A fault with a count is a fault; a fault without one is an impression, and the reader has no way to tell the two apart.',
  '**Then the second sentence, which almost nobody writes: what it costs.** _Going back one page means pressing forward through the whole file, about a minute and forty seconds, in a forty-five-minute lesson — so I do not go back._ The cost is what makes somebody act.',
  '⚠ **Strike out every word that is a feeling.** _Difficult, useless, ridiculous, unacceptable, appalling._ They tell the reader about you and nothing about the machine, and a reader who learns about you stops reading about the machine.',
  '⚠ And watch what you have decided about yourself. _I decided the fault was in me. For seven months. It is in a back arrow._ When a thing is hard and nobody has written down why, the person using it concludes that the difficulty is theirs.',
  '**Useful phrases:** when X is pressed, Y is returned to… · seventeen times out of seventeen · I started writing it down · what it costs is… · "difficult to use" is not a fault, it is a feeling about a machine.',
  '**Practise:** Turn each into a sentence with a passive and a count.  1 a machine at your work  2 a form  3 a journey or a route  4 something that is always late  5 something that goes missing',
  '**Pronunciation.** 🔊 **Track 19.2** In a passive, _been_ almost disappears — /bɪn/, unstressed — and the weight falls on the **participle**: _three sheets have bɪn misLAID._ Students give _been_ full value and the participle none, which is the wrong way round. Listen to eight and write the participle only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and gives the two sentences: what the fault does with a count, and what it costs. B does one thing only — strikes out any word that is a feeling, and says the sentence back without it. Swap cards.'));
out.push(dlg(null, [
  ['A', 'When __________, __________ is __________. __________ times out of __________.'],
  ['A', 'What it costs is __________.'],
  ['B', 'You said __________, which is a feeling. Without it: __________.'],
  ['A', 'And the number I do not have yet is __________.'],
]));
out.push(table(['Card A – the fault', 'Card B – the fault'], [
  ['a machine, a tool or a vehicle', 'a form with boxes nobody fills in'],
  ['something that arrives late', 'something that goes missing between two places'],
  ['a door, a lock, a key or a switch', 'a system that logs you out, or will not save'],
  ['a notice that tells you the wrong thing', 'a telephone number nobody answers'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight counts — and mark the ones the speaker **did not have before today**. In a first run it is six or seven out of eight: almost nobody has counted the thing they have been complaining about, which is why almost nobody has been answered.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the complaint you brought. Say what the fault does, with a count if you have one and an admitted gap if you do not. Then what it costs, in minutes, money or occasions. Then — and say this out loud — what you have decided about yourself because of it.'));
out.push(p('**b**  Swap. Then each of you give your partner **the one number they need to start counting on Monday**, and write it down.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Umm Kinan has brought the thing she has been complaining about since April and realised on the way here that she had never once said what it actually does. When you press the back arrow on the projector in Room 9 it does not go to the previous page, it goes to the first page of the file — every time, and she has counted since April because she started writing it down after she wrote the note: seventeen times out of seventeen. Omar said that is a real, written-down, repeatable fault. And what she wrote in April was: "the projector is difficult to use and I would be grateful if somebody could look at it" — eleven words of nothing, and she has the carbon. Jad asked whether anybody answered it, and she said no, and that for seven months she thought that was because nobody cared about a woman of forty-eight and her blackboard. She thinks now it was because there was nothing in the note that anybody could do anything about: "difficult to use" is not a fault, it is a feeling about a machine. Lubna asked what it costs, and that is the second thing she never wrote: if a class does not follow a step she cannot go back one page, she has to press forward through the whole file to the end and start again, which takes about a minute and forty seconds in a forty-five-minute lesson — so she does not go back, so she has used it four times since April and not forty, and she has told herself for seven months that this is because she is slow with the machine. Then the sentence Ms Huda made her say twice: she decided the fault was in her, for seven months, and it is in a back arrow. The new note is four lines with three numbers in it and it goes in on Thursday._'));
out.push(p('**Listener task:** write one fault from this room, with its count.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Umm Kinan\'s new note. Answer the questions.'));
out.push(model([
  '**FAULT REPORT · PROJECTOR, ROOM 9** · S. Dibo · 28 November · replaces my note of 14 April',
  '**What it does.** When the back arrow is pressed, the file is not returned to the previous page. It is returned to the **first** page of the file.',
  '**How often.** Seventeen times out of seventeen since 14 April. I have written down every occasion since the day I sent the April note, because that note was refused — or rather, it was never answered, which I now understand to be the same thing in a building this size.',
  '**What it is not.** It is not the file, because it happens with all four files I have used, including one made by somebody else. It is not the remote control, because it happens from the buttons on the machine as well. It is not me pressing the wrong arrow: I have had three other people press it, on three different days, and it did it to all three.',
  '**What it costs.** To go back one page I must press forward through the whole file and begin again: about one minute and forty seconds, in a lesson of forty-five minutes. So I do not go back. So I have used the machine four times since April instead of about forty, and the number of times I have decided not to use it rather than lose the ninety seconds is the real figure and I cannot give it to you, because I stopped noticing I was deciding.',
  '**What I wrote in April, and why it was useless.** "The projector is difficult to use and I would be grateful if somebody could look at it." There is nothing in that sentence that anybody can act on. I am not blaming anybody for not answering it.',
  '**And the thing I shall put in this note although it is not about the machine.** For seven months I believed that the difficulty was mine — that I am forty-eight and slow with equipment. It is a back arrow. I should like whoever reads this to consider how many of the six projectors bought in January are being used four times a year by somebody who has concluded the same thing.',
]));
out.push(item('1', 'What three things does she rule out, and how does she rule out each one?'));
out.push(item('2', 'Which figure does she say is the real one, and why can she not give it?'));
out.push(item('3', 'What does she ask the reader to consider, and why does she say it is not about the machine?'));
out.push(writers([
  'A fault report: **what it does** → **how often, with dates** → **what it is not, and how you ruled each one out** → **what it costs, and the figure you cannot give** → **what you wrote before and why it was useless** → **and the thing that is not about the machine**.',
  'Rule things out before anybody asks. _It is not the file · it is not the remote control · it is not me pressing the wrong arrow: I had three other people press it._ Three exclusions take four lines and save a fortnight of being asked whether you have tried turning it off.',
  'Name the figure you cannot produce. _The number of times I decided not to use it rather than lose the ninety seconds is the real figure and I cannot give it to you._ An admitted gap is evidence of care; a missing one looks like carelessness.',
  'Quote your own useless earlier attempt and refuse to blame anybody for ignoring it. That paragraph is what stops the note reading as a grievance about seven months of silence.',
  '⚠ End with the thing that is bigger than your machine, and keep it to one sentence. _How many of the six projectors are being used four times a year by somebody who has concluded the same thing?_',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the fault report (60 words or more).'));
out.push(p('**FAULT REPORT · ______________** · ______________   **What it does.** When ______________, ______________ is ______________.   **How often.** ______ times out of ______ since ______________.   **What it is not.** It is not ______________, because ______________. It is not ______________, because ______________. It is not me, because ______________.   **What it costs.** ______________: about ______________, in ______________. So ______________. And the real figure, which I cannot give you, is ______________.   **What I wrote before, and why it was useless.** "______________." There is nothing in that sentence anybody can act on.   **And the thing that is not about ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A passive and a count in the first two lines',
  'Three things ruled out, each with how',
  'The cost in minutes, money or occasions — and the figure admitted missing',
  'No word that is a feeling anywhere on the page',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the figure they cannot give.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full fault report (140 words or more) for the complaint you brought: what it does with a count, what it is not and how you ruled it out, what it costs and the figure you cannot produce, your own earlier useless version quoted, and the one sentence that is bigger than your own case.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the count**, **the exclusions**, **the absence of feeling-words**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us had decided the fault was in ourselves?** Count, and do not hurry it. A thing that is hard and has no written explanation is concluded to be the user\'s failing — by the user, in silence, and usually for years. That is what the count is for, and it is the reason this unit opens with a machine and not with a letter.'));
out.push(hw('Write the fault report (60+ words) and start counting the one number your partner named. Then find your own earlier attempt at complaining about it — the email, the note, the conversation — and write out what you actually said, word for word.'));

// ======================= 19.2 =======================
out.push(pb());
out.push(h2('19.2  I have had it serviced twice'));
out.push(p('**Function:** saying what you have already had done   ·   **Grammar:** _have / get something done_   ·   **Pronunciation:** the swallowed _had_ before the participle'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: something you have **had done** in the last year — _I have had the lock changed · I have had my eyes tested · we have had the roof looked at._ Your teacher writes the eleven on the board and asks one thing about each: _and what happened after it?_'));
out.push(board('I have had the machine serviced twice this year, and both times the same bearing was found.', 'have + something + past participle'));
out.push(p('**b**  Finish each. **1** _I have had the lock ___ (change) twice._  **2** _We are having the roof ___ (look at) on Thursday._  **3** _I had the guard ___ (refit) in 2019._  **4** _I want to get the second machine ___ (check) before January._  **5** _She has never had the projector ___ (service)._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Bassel had done, how many times, and what was found each time?   **A** serviced twice; the same bearing   **B** replaced once; the belt   **C** inspected three times; nothing'));
out.push(p('**b**  Listen again. **1** What is the question he says he is **not** asking?   **2** What does Ms Huda say the causative does to a complaint?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.3  What did you do in March?', [
  ['Bassel', 'I have a letter to write and I have been writing it in my head for a fortnight, and this unit has given me the first line of it.'],
  ['Ms Huda', 'Say the first line.'],
  ['Bassel', 'I have had the older machine serviced twice this year — on the eleventh of March and the second of September — and on both occasions the engineer found the same bearing starting to go.'],
  ['Nour', 'The same bearing.'],
  ['Bassel', 'The same bearing, in the same housing, six months apart. In March I had it replaced; in September I had it replaced again. Two bearings, two visits, and the machine off the floor for a day and a half each time — and three of my fourteen men are on the ministry order and cannot wait for a machine.'],
  ['Omar', 'What are you going to ask them?'],
  ['Bassel', 'This is the part that took me a fortnight. I am not going to ask them why the bearing goes. I do not know why the bearing goes, they may not know either, and the moment I ask that question the letter becomes a conversation about engineering that I shall lose.'],
  ['Jad', 'So what do you ask?'],
  ['Bassel', 'I am going to ask one question: **what was done to that housing on the eleventh of March?** Not what should have been done. What was done. They have a sheet, the man signed it, and either the housing was dealt with or a bearing was put into it and the cover was put back.'],
  ['Lubna', 'And if they say the housing was dealt with?'],
  ['Bassel', 'Then I have a different and much more interesting letter, and I shall need an engineer of my own. But I shall have an answer in writing from the people who did the work, and at the moment I have nothing in writing from anybody about anything.'],
  ['Ms Huda', 'Now hear what the grammar has done for him, because it is doing the whole job. _I have had it serviced twice_ separates two things that complaints usually mash together: what **you** did, and what **somebody else** did for you. He did not service the machine; he had it serviced — he paid, he gave up the floor, he arranged it. And that means the next sentence can be about what **they** did, with a date, without an accusation anywhere in it.'],
  ['Bassel', 'And it is four lines. In March I wrote three paragraphs about how long I have been a customer.'],
  ['Ms Huda', 'Which told them about you. The sentence that moves a company is the one that tells them about a sheet with their own man\'s signature on it.'],
]));
out.push(sp());
out.push(box('Language box – have / get something done', [
  '**Form: _have_ (or _get_) + the thing + the past participle.** The person who does the work is not named and usually does not need to be.',
  table(['tense', 'example'], [
    ['present perfect', '_I **have had** the machine **serviced** twice this year._'],
    ['past simple', '_I **had** the guard **refitted** in 2019._'],
    ['present continuous', '_We **are having** the roof **looked at** on Thursday._'],
    ['infinitive / future', '_I want to **get** the second machine **checked** before January._'],
    ['negative', '_She **has never had** the projector **serviced**._'],
  ], [1.4, 3.2]),
  '**What it is for in a complaint: it separates what _you_ did from what _they_ did.** _I had it serviced_ says you paid, arranged it and gave up the use of the thing — which leaves the next sentence free to be about **what was done**, on a date, with nobody accused.',
  '**_Get_ is the more informal of the two and is commoner in speech:** _I must get it looked at._ In a letter use _have_.',
  '⚠ ~~I have serviced the machine twice~~ means **you** did the work with your own hands. If you paid somebody, you **had it serviced**. This is not a nicety: the two sentences make different claims, and a service company reading the first one will answer a different letter.',
  '**Then the question to build on it, and it is one question long:** _what was done to that housing on 11 March?_ — not _why does the bearing go_, and not _what should have been done_. A question about **what was done on a date** has a sheet behind it with somebody\'s signature on it; a question about causes is an argument you will lose to whoever employs the engineer.',
  '**Useful phrases:** I have had it serviced twice, on these two dates · I had it replaced, and I had it replaced again · I am not going to ask them why · what was done, not what should have been done · I have nothing in writing from anybody about anything.',
  '**Practise:** Say what you have had done, how many times, and what happened after it.  1 something mended  2 something checked or tested  3 something installed or fitted  4 something cleaned or serviced  5 something looked at that was never put right',
  '**Pronunciation.** 🔊 **Track 19.4** In _have had it serviced_ the first _have_ contracts to /v/ and _had_ to /əd/, and the stress lands on the **participle**: _I\'ve əd it SERviced TWICE._ Listen to eight and write the participle and the number only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and says what they have had done, how many times, with the dates, and what was found each time. B asks the two questions that make it a letter rather than a grumble. Swap cards.'));
out.push(dlg(null, [
  ['A', 'I have had __________ __________ __________ times, on __________ and __________.'],
  ['B', 'And what was found each time?'],
  ['A', '__________. Both times.'],
  ['B', 'What question are you not going to ask?'],
  ['A', 'I am not going to ask __________.'],
  ['B', 'So what is the one question?'],
]));
out.push(table(['Card A – what you have had done', 'Card B – what you have had done'], [
  ['a machine or vehicle serviced or mended', 'something fitted that has come loose again'],
  ['a form processed that came back twice', 'a measurement or test done twice with two results'],
  ['something delivered that arrived wrong twice', 'work done at home that had to be done again'],
  ['a document checked by two people', 'something looked at and never put right'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight one-questions. Then mark the ones that ask about **what was done on a date** rather than about a cause or a fault. In a first run it is two or three out of eight — everybody reaches for _why_, and _why_ is the question the other side is always better equipped to answer than you are.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say what you have had done about the complaint you brought — with dates, costs and what was found. If the answer is nothing, say that: _I have had nothing done, and nobody has looked at it in seven months._'));
out.push(p('**b**  Swap. Then each of you write down your partner\'s **one question**, and say whether it can be answered from a document that already exists.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel has a letter to write and has been writing it in his head for a fortnight, and this unit has given him the first line. He has had the older machine serviced twice this year — on the eleventh of March and the second of September — and on both occasions the engineer found the same bearing starting to go: the same bearing, in the same housing, six months apart. In March he had it replaced; in September he had it replaced again. He has paid for two bearings and two visits and has had the machine off the floor for a day and a half each time, and three of his fourteen men are on the ministry order and cannot wait for a machine. Omar asked what he is going to ask them, and that is the part that took a fortnight: he is not going to ask why the bearing goes. He does not know, they may not know either, and the moment he asks that the letter becomes a conversation about engineering that he will lose. He is going to ask one question — what was done to that housing on the eleventh of March? Not what should have been done; what was done. Their man signed a sheet that day, and either the housing was dealt with or a bearing was put in and the cover was put back. Lubna asked what happens if they say the housing was dealt with, and he said then he has a different and more interesting letter and will need an engineer of his own — but he will have an answer in writing, and at present he has nothing in writing from anybody about anything. Ms Huda said the grammar is doing the whole job: having it serviced separates what he did from what they did, which leaves the next sentence free to be about what they did, with a date and with nobody accused._'));
out.push(p('**Listener task:** write one question from this room that a document already in existence could answer.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Bassel\'s letter. Answer the questions.'));
out.push(model([
  '**TO THE SERVICE MANAGER · press no. 2, serial 41-… · Dar al-Kutub Press, Qassaa** · B. Tahhan · 29 November',
  'I have had the machine serviced twice this year, on 11 March and 2 September, and on both occasions your engineer found the same bearing in the same housing beginning to fail. On 11 March I had the bearing replaced. On 2 September I had it replaced again.',
  '**What I have paid and what it has cost.** Two visits and two bearings. The machine was off the floor for a day and a half on each occasion. Three of my fourteen people are on a ministry order with a weekly proof date, and a day and a half is not a thing I can lose twice in a year.',
  '**The question I am not asking.** I am not asking you why the bearing fails. I do not know, you may not know, and I should lose that conversation to your engineer inside a paragraph.',
  '**The one question I am asking.** What was done to that housing on 11 March? Not what should have been done — what was done. Your man completed a sheet that day and signed it, and the answer is either that the housing itself was dealt with, or that a bearing was fitted into it and the cover was put back.',
  '**Why the answer matters either way.** If the housing was dealt with in March, I have a different problem, I shall engage an engineer of my own, and I shall not blame you for it. If it was not, I have paid twice for the same half of a job.',
  '**What I am asking you to do, and by when.** Send me a copy of the sheet from 11 March, by 20 December. I am not asking for a refund in this letter and I am not asking for an engineer.',
  '**And one sentence about what I did wrong.** I wrote to you in March as well. That letter was three paragraphs about how long I have been your customer, and it told you a great deal about me and nothing about a sheet with your man\'s signature on it. It was answered with a telephone call that I did not write down.',
]));
out.push(item('1', 'What two things does he name as the cost, and why is the day and a half significant?'));
out.push(item('2', 'What is the one question, and what two answers does he say it can have?'));
out.push(item('3', 'What does he say he did wrong in March, and what happened to that letter?'));
out.push(writers([
  'A letter built on what you have had done: **what you have had done, with dates and what was found** → **what it has cost you** → **the question you are not asking** → **the one question you are asking** → **why either answer is useful** → **what you want and by when, and what you are not asking for** → **and one sentence about what you did wrong**.',
  'Say out loud which question you are declining to ask, and why. _I am not asking you why the bearing fails; I should lose that conversation to your engineer inside a paragraph._ It stops the reader answering a question you did not ask.',
  'Build the one question on **a document that already exists**. _Your man completed a sheet that day and signed it._ A question that can be answered by fetching a piece of paper gets answered; a question that requires a judgement gets a telephone call.',
  'Say in advance that either answer is acceptable, and what you will do with each. A reader who cannot be cornered by the answer gives the answer.',
  '⚠ End by owning your own earlier failure — and name what was wrong with it in writing terms, not emotional ones: three paragraphs about yourself, nothing about a sheet, and a telephone reply you did not record.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter about something you have had done twice (60 words or more).'));
out.push(p('**TO ______________** · ______________   I have had ______________ ______________ ______ times, on ______________ and ______________, and on both occasions ______________.   **What it has cost.** ______________. ______________ is not something I can lose twice in a year.   **The question I am not asking.** I am not asking you ______________, because ______________.   **The one question I am asking.** ______________? Not ______________ — ______________.   **Why the answer matters either way.** If ______________, then ______________, and I shall not blame you for it. If ______________, then ______________.   **What I am asking you to do, and by when.** ______________, by ______________. I am not asking for ______________.   **And one sentence about what I did wrong.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_have / had something done_ correct every time — no _I have serviced it_',
  'Dates on both occasions and what was found each time',
  'The declined question named, and the one question answerable from an existing document',
  'Both answers accounted for, and one admitted failure of your own',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the question they are **not** asking.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (140 words or more) about something you have had done and which has recurred: the causative with dates, the cost, the declined question, the one question built on a document, both answers, one request with a date, and your own earlier failure.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the causative**, **the one question**, **the document it rests on**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the one-questions in this room can be answered by fetching a piece of paper?** Count. The ones that cannot are the ones that will be answered with a telephone call and a kind voice, and a telephone call that you do not write down is a thing that did not happen — which is Unit 12 and Unit 18 arriving in the same sentence.'));
out.push(hw('Write the letter (60+ words). Then find out whether the document your one question rests on actually exists, and who holds it. If it does not exist, write the question again so that it rests on one that does.'));

// ======================= 19.3 =======================
out.push(pb());
out.push(h2('19.3  Could you tell me whether…'));
out.push(p('**Function:** asking for information without accusing anybody   ·   **Grammar:** indirect questions   ·   **Pronunciation:** the falling tone on a polite question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: one question you need to ask somebody at work and have not asked. Your teacher writes the eleven on the board as **direct** questions and then the class turns them one at a time into indirect ones, out loud.'));
out.push(board('Could you tell me whether the lot number was recorded? I should like to know who signed it.', 'indirect questions · no inversion'));
out.push(p('**b**  Make each one indirect. **1** _Who signed it?_  **2** _Was the lot number recorded?_  **3** _When did it arrive?_  **4** _Why was it changed?_  **5** _Has anybody checked it?_  **6** _How many were in the batch?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three things does Yara need to find out, and why does she not want to ask them directly?   **A** about a reagent lot; because a direct question would read as an accusation   **B** about a rota; because she is junior   **C** about a result; because she is not sure of her English'));
out.push(p('**b**  Listen again. **1** What does she say the direct version of her second question would do?   **2** What does Ms Huda say an indirect question buys you?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.5  Three things I need to know', [
  ['Yara', 'I have to write to the agent for the analyser reagents and I have been putting it off for eleven days, and it is not the English. I know exactly what I want to know. I do not know how to ask it without it sounding like an accusation.'],
  ['Ms Huda', 'What do you want to know?'],
  ['Yara', 'Three things. Whether the lot that came in on the fourth of November is from the batch recalled in September in Lebanon. Who at their end signed the release note, because the signature is initials and I cannot read them. And why the box says two to eight degrees when the insert says two to twenty-five.'],
  ['Omar', 'Those are three completely reasonable questions.'],
  ['Yara', 'They are. Now hear the second one as I would have written it in April: "Who signed this? I cannot read the signature." That is a reasonable question and it reads as the first line of a complaint about a person. And I do not want a complaint about a person. I want initials.'],
  ['Jad', 'So what do you write?'],
  ['Yara', '"I should be grateful if you could tell me who signed the release note for lot 4471, as the initials are not legible on our copy." Same question. Nobody is on trial. And the word "our copy" does half of it, because it says the problem may be at my end.'],
  ['Nour', 'And the temperature one?'],
  ['Yara', 'That is the one I was most frightened of, because somebody has made a mistake and it might be them and it might be the printer. So: "Could you tell me which of the two storage temperatures on lot 4471 is the correct one? The box gives two to eight and the insert gives two to twenty-five." I have not said that one of them is wrong. I have asked which is right, and whoever reads it will find out which is wrong on my behalf.'],
  ['Ms Huda', 'That is the cycle and I want the words exact. An indirect question buys you **three** things. It takes the accusation out, so the reader is free to find the fault without defending anybody. It lets you ask about a person without asking about a person — _who signed it_ becomes a fact about a document. And it leaves room for the answer to be that **you** are wrong, which about a third of the time it is, and which is the only reason anybody answers these letters at all.'],
  ['Yara', 'And it is longer. Eleven words instead of five.'],
  ['Ms Huda', 'Six extra words. They are the cheapest six words in the language.'],
]));
out.push(sp());
out.push(box('Language box – indirect questions', [
  '**The opener, then the question with no inversion and no _do_:**',
  table(['direct', 'indirect'], [
    ['_Who signed it?_', '_Could you tell me **who signed** it?_'],
    ['_Was the lot recorded?_', '_I should like to know **whether the lot was** recorded._'],
    ['_When did it arrive?_', '_Could you tell me **when it arrived**?_'],
    ['_Has anybody checked it?_', '_I should be grateful if you could tell me **whether anybody has checked** it._'],
  ], [1.9, 2.7]),
  '⚠ **No inversion and no _do_ after the opener.** ~~Could you tell me when did it arrive~~ · ~~I should like to know who did sign it~~ → _when it arrived_, _who signed it_. This is the single error that gives an indirect question away as a translated one.',
  '**Use _whether_ and not _if_ in writing**, and never ~~that~~: _tell me **whether** the lot was recorded._',
  '**The three openers worth owning:** _Could you tell me…_ (neutral, for a fact) · _I should like to know…_ (firmer, for something you are owed) · _I should be grateful if you could tell me…_ (formal, for a first letter to a stranger).',
  '**What the form actually buys you — and this is the cycle, not the grammar:** **1** it takes the accusation out, so the reader can look for the fault without defending anybody; **2** it turns a question about a person into a question about a document; **3** it leaves room for the answer to be that **you** are wrong, which is often the case and is the real reason such letters get answered.',
  '**Two phrases that do the same work:** _on our copy_ and _which of the two is correct_. _The initials are not legible **on our copy**_ allows the fault to be at your end. _Which of the two temperatures is **correct**_ asks for a fact instead of alleging an error — and the reader then finds the error for you.',
  '**Useful phrases:** I know exactly what I want to know, I do not know how to ask it · nobody is on trial, I want initials · I have not said that one of them is wrong · six extra words, and they are the cheapest six words in the language.',
  '**Practise:** Make each indirect, and add _on our copy_ or _which of the two_ where it helps.  1 who authorised it  2 whether it was recorded  3 when it was sent  4 why the two figures differ  5 how many were in the batch',
  '**Pronunciation.** 🔊 **Track 19.6** An indirect question ends on a **falling** tone, because it is a statement in shape: _could you tell me who signed it_ ↘. A rising tone at the end makes it sound anxious, and anxious reads as accusing. Listen to six and mark ↗ or ↘.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and asks the direct question out loud, then the indirect version. B says what the direct version would make the reader do, and whether the indirect one leaves room for A to be wrong. Swap cards.'));
out.push(dlg(null, [
  ['A', 'Direct: __________?'],
  ['A', 'Indirect: Could you tell me __________?'],
  ['B', 'The direct one makes the reader __________.'],
  ['B', 'And does yours leave room for you to be wrong?'],
  ['A', 'Yes, because I have said __________.'],
]));
out.push(table(['Card A – what you need to know', 'Card B – what you need to know'], [
  ['who authorised something', 'whether something was ever recorded'],
  ['why two documents disagree', 'when something was sent, and to whom'],
  ['which of two figures is the correct one', 'whether a decision was ever minuted'],
  ['how many of something there are', 'what happened to something you handed in'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight indirect questions, and mark the ones that **leave room for the asker to be wrong**. In a first run it is three or four — and those are the four most likely to be answered, because a reader who can say _ah, your copy is a bad photocopy_ answers at once and a reader who can only say _we made no mistake_ answers slowly or not at all.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the three things you most need to find out about the complaint you brought. Ask each one directly, then indirectly, and say which of the three you have been avoiding and why.'));
out.push(p('**b**  Swap. Then each of you choose the one of your partner\'s three that should go **first** in a letter, and say why that order matters.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara has to write to the agent for the analyser reagents and has been putting it off for eleven days, and it is not the English: she knows exactly what she wants to know and did not know how to ask it without it sounding like an accusation. Three things. Whether the lot that came in on the fourth of November was from the batch recalled in September in Lebanon. Who at their end signed the release note, because the signature is initials and she cannot read them. And why the storage temperature on the box says two to eight degrees when the insert says two to twenty-five. Omar said those are three reasonable questions, and she agreed — and then read out the second as she would have written it in April: "Who signed this? I cannot read the signature." A reasonable question that reads as the first line of a complaint about a person, and she wants initials, not a complaint about a person. What she has written is: "I should be grateful if you could tell me who signed the release note for lot 4471, as the initials are not legible on our copy." The same question, nobody on trial — and "our copy" does half of it, because it allows the problem to be at her end. The temperature one frightened her most, because somebody has made a mistake and it might be them and it might be the printer: "Could you tell me which of the two storage temperatures on lot 4471 is the correct one?" She has not said either is wrong; she has asked which is right, and whoever reads it will find out which is wrong on her behalf. Ms Huda said an indirect question buys three things — it takes the accusation out, it turns a question about a person into a question about a document, and it leaves room for the answer to be that you are wrong, which is the only reason anybody answers these letters at all._'));
out.push(p('**Listener task:** write one indirect question from this room that leaves room for the asker to be wrong.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Yara\'s letter of enquiry. Answer the questions.'));
out.push(model([
  '**TO THE TECHNICAL OFFICE · reagent lot 4471, received 4 November** · Y. Mansour, hospital laboratory, Suwayda · 30 November',
  'I am writing to ask three questions about one lot. I am not making a complaint and nothing in this letter is a complaint; two of the three questions may well turn out to have answers at my end.',
  '**The first question.** Could you tell me whether lot 4471 is from the production batch that was withdrawn in Lebanon in September? I have the withdrawal notice and the batch prefix on it is the same as ours, but the notice gives six digits and our box gives four, so I cannot tell.',
  '**The second question.** I should be grateful if you could tell me who signed the release note for this lot. The initials are not legible on our copy, which may be our photocopier rather than your pen.',
  '**The third question.** Could you tell me which of the two storage temperatures on lot 4471 is the correct one? The outer box gives 2–8 °C and the insert gives 2–25 °C. We have stored it at 2–8 °C since 4 November, the stricter of the two, so nothing has been lost either way.',
  '**Why I am asking rather than reporting.** I do not know whether anything is wrong. One of the three may be a printing error at a factory, one may be our photocopier, and one may be me reading a withdrawal notice wrongly. I would rather ask now than report something in January that turns out to have been my own mistake.',
  '**What I am asking you to do, and by when.** Answer the third question first, and by 11 December, because it is the only one of the three that changes what we do tomorrow morning. The other two can wait until the new year.',
  '**And one thing I am telling you rather than asking.** We have had no communication from your office about lot 4471 since it was delivered, and we did not ask for any. I am not complaining about that. I am saying it so that your answer does not have to begin by establishing it.',
]));
out.push(item('1', 'Why does she say twice that she is not making a complaint?'));
out.push(item('2', 'What three possible explanations does she offer before anybody else can, and whose are two of them?'));
out.push(item('3', 'Which question does she want answered first, and why that one?'));
out.push(writers([
  'A letter of enquiry: **what you are asking and what you are not** → **three indirect questions, each with the evidence under it** → **why you are asking rather than reporting** → **what you want answered first, and by when** → **and one thing you are telling rather than asking**.',
  'Supply the explanations that put the fault at your end: _which may be our photocopier rather than your pen_. A reader who is given exits answers; a reader given none defends.',
  'Say what you have done in the meantime, and that it was the cautious thing. _We have stored it at 2–8 °C, which is the stricter of the two, so nothing has been lost either way._ It removes the urgency from the reader\'s side and keeps it on yours.',
  'Rank the questions and give the reason. Three unranked questions are answered in the order that suits the reader, which is never yours.',
  '⚠ End with the thing you are stating rather than asking, and say why you are stating it: _so that your answer does not have to begin by establishing it._ It saves the reader a paragraph and saves you a week.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter of enquiry with three indirect questions (60 words or more).'));
out.push(p('**TO ______________** · ______________   I am writing to ask ______ questions about ______________. I am not making a complaint, and ______ of the ______ may turn out to have answers at my end.   **The first question.** Could you tell me whether ______________? ______________.   **The second question.** I should be grateful if you could tell me who ______________. ______________, which may be ______________ rather than ______________.   **The third question.** Could you tell me which of the two ______________ is the correct one? ______________ gives ______________ and ______________ gives ______________.   **Why I am asking rather than reporting.** ______________.   **What I am asking you to do, and by when.** Answer ______________ first, and by ______________, because ______________.   **And one thing I am telling you rather than asking.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No inversion and no _do_ after the opener; _whether_ and not _if_',
  'An exit for the reader under at least two questions',
  'What you have done in the meantime, and that it was the cautious thing',
  'The questions ranked, with the reason for the ranking',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the exit they have left the reader.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter of enquiry (140 words or more) about your own unresolved matter: three indirect questions each with its evidence, the explanations that put the fault at your end, what you have done meanwhile, the ranking with its reason, and the one thing you are stating rather than asking.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **no inversion after the opener**, **the exits left for the reader**, **the ranking**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the questions in this room have been waiting more than a month?** Count the days, not the questions. Then the thing to notice: almost nobody was waiting because of the English. They were waiting because the direct question read like an accusation and they did not know there was another way to write it — which is six words long and is in this Language box.'));
out.push(hw('Write the letter (60+ words) and send it, or carry it to the person. Then write one line: which of your three questions you had been most afraid to ask, and what you now think would actually have happened if you had asked it in April.'));

// ======================= 19.4 =======================
out.push(pb());
out.push(h2('19.4  One request, by one date'));
out.push(p('**Function:** making a single request   ·   **Grammar:** _I should be grateful if you would…_ · _by_ and _within_   ·   **Pronunciation:** the stress on the date'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: the **one** thing you are asking for, in under twelve words, with a date in it. Your teacher writes the eleven on the board and counts the requests in each one. Several will contain three.'));
out.push(board('I am asking for the last forty minutes of each day, unminuted, from January.', 'one request · one date'));
out.push(p('**b**  _By_ or _within_? **1** _Please reply ___ 11 December._  **2** _Please reply ___ ten working days._  **3** The part will be here ___ Thursday._  **4** _Delivery is ___ six weeks of the order._  **5** _I should like an answer ___ the end of the month._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Fares asking for, and what was wrong with his first draft?   **A** forty minutes unminuted; it contained four requests   **B** a second room; it had no date   **C** a change of day; it was too short'));
out.push(p('**b**  Listen again. **1** What happens, he says, when a letter contains four requests?   **2** What does Ms Huda say about the difference between _by_ and _within_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.7  Four things and none of them granted', [
  ['Fares', 'I wrote the letter asking for the forty minutes on Sunday night, and on Monday morning I read it again and threw it away, because I had asked for four things.'],
  ['Ms Huda', 'Name the four.'],
  ['Fares', 'The last forty minutes of each day with the door shut and nothing written down. A second day in January instead of one. The names on the list to be chosen with me rather than for me. And a different room, because the one they have given me has a window on to the corridor.'],
  ['Nour', 'All four of those are reasonable.'],
  ['Fares', 'All four are reasonable and the room is the one I want least, and the room is the one that was going to get answered, because it is the only one of the four that costs somebody nothing and can be said yes to by the person who opens the letter.'],
  ['Omar', 'So the smallest thing wins and the important thing is lost.'],
  ['Fares', 'The smallest thing wins, you are told that your points have been noted, and the forty minutes never gets a sentence of its own anywhere. I have had that letter back from people three times in my life and I have never once understood why.'],
  ['Jad', 'So what is in the new one?'],
  ['Fares', 'One request. The last forty minutes of each training day, with the door shut, not minuted and not reported, from January. Twenty-three words, in a paragraph of its own, with nothing else in that paragraph.'],
  ['Lubna', 'And the other three?'],
  ['Fares', 'Two of them go in a second letter in February, and one of them I am dropping altogether, because thinking about this for a week has told me that the window on to the corridor does not actually matter and I had put it in because it was easy to describe.'],
  ['Ms Huda', 'And the date. Say what you have put and why.'],
  ['Fares', 'I have asked for a reply **by the twentieth of December**, not **within three weeks**. Three weeks from when? From the day I sent it, or the day somebody opened it, or the day it reached the right desk? _By the twentieth of December_ cannot be argued with and it does not need anybody to do arithmetic.'],
  ['Ms Huda', 'Which is the rule for the whole of this unit and most of professional life. **_By_ a date is a point; _within_ a period is a negotiation.** Use _within_ only when you do not know when the clock starts — _within ten working days of receipt_ — and then say what starts it. And one request per letter, in a paragraph of its own, because a letter with four requests is answered with the cheapest of the four and a sentence saying that the others have been noted.'],
]));
out.push(sp());
out.push(box('Language box – one request, by one date', [
  '**The request, in a paragraph of its own, with nothing else in it.** _I am asking for the last forty minutes of each training day, with the door shut, not minuted and not reported, from January._',
  '**Three ways to ask, in rising formality:** _I am asking you to…_ (plain, strong, best when you have a relationship) · _I should be grateful if you would…_ (formal, for a first letter) · _I should like to ask that…_ (formal and slightly distant, for a committee).',
  '⚠ ~~I would be grateful if you can…~~ → _if you **would**_ / _if you **could**_. And ⚠ ~~please to send~~ → _please send_ / _I should be grateful if you would send_.',
  '**_By_ and _within_:**',
  table(['', 'what it means', 'when to use it'], [
    ['_**by** 20 December_', 'a point in time; no arithmetic', 'almost always'],
    ['_**within** ten working days_', 'a period — but from **when**?', 'only when you cannot know the start, and then name it: _within ten working days **of receipt**_'],
  ], [1.4, 1.6, 2.2]),
  '**One request per letter, and the smallest one last.** A letter with four requests is answered with the **cheapest** one and a sentence saying that the others have been noted — and the cheapest is never the one you wanted. Put the other requests in a second letter, with a date of their own.',
  '**And drop the request you put in because it was easy to describe.** Fares dropped the window on to the corridor: a week of thinking told him it did not matter, and it had got into the letter because it was the simplest thing to write a sentence about. Most letters contain one such request and it is always the one that gets granted.',
  '**Say what you are not asking for, in the same letter** (18.5, 19.2). It stops the reader answering a question you did not ask.',
  '**Useful phrases:** I read it again and threw it away, because I had asked for four things · the smallest thing wins · your points have been noted · by the twentieth, not within three weeks · three weeks from when?',
  '**Practise:** Reduce each to one request with a date, and say what you are dropping.  1 something at work you want changed  2 something you want to be told  3 something you want written down  4 something you want somebody else to do  5 something you want to stop doing',
  '**Pronunciation.** 🔊 **Track 19.8** In a request the **date** takes the main stress and the polite opener runs fast and flat underneath it: _I should be grateful if you would reply by the TWENtieth of DeCEMber._ Listen to six and write the date only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names four things they want from one situation. B asks which is the cheapest, and then tells A which one will be granted if all four go in the letter. A then gives the one request, in a sentence, with a date. Swap.'));
out.push(dlg(null, [
  ['A', 'I want __________, and __________, and __________, and __________.'],
  ['B', 'Which of the four costs them least?'],
  ['A', '__________.'],
  ['B', 'Then that is the one you will get, and it is not the one you want.'],
  ['A', 'So the one request is: __________, by __________.'],
]));
out.push(table(['Card A – the situation', 'Card B – the situation'], [
  ['something you have asked for and not had', 'something you have been given half of'],
  ['a change to how your work is arranged', 'a piece of information you are owed'],
  ['something you want in writing', 'something you want stopped'],
  ['a decision you want a date for', 'a person you want named'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write each speaker\'s four wants and mark the cheapest. Then check: in how many cases was the cheapest also the one the speaker cared least about? Nearly always — and that is the mechanism. A letter does not grant what matters; it grants what is easy, and then reports that it has responded.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  List everything you want from the matter you brought. Then strike out all but one, name the date, and say which one you are dropping altogether because it only got on the list because it was easy to describe.'));
out.push(p('**b**  Swap. Then each of you say whether your partner has kept the right one — and whether their date is a _by_ or a _within_, and whether it should be.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fares wrote the letter asking for the forty minutes on Sunday night, read it again on Monday morning and threw it away, because he had asked for four things: the last forty minutes of each day with the door shut and nothing written down; a second day in January instead of one; the names on the list to be chosen with him rather than for him; and a different room, because the one they have given him has a window on to the corridor. Nour said all four are reasonable, and he agreed — and said the room is the one he wants least and the one that was going to be granted, because it is the only one of the four that costs somebody nothing and can be said yes to by the person who opens the letter. Omar said so the smallest thing wins and the important thing is lost, and Fares said yes: the smallest thing wins, you are told that your points have been noted, and the forty minutes never gets a sentence of its own anywhere — and he has had that letter back from people three times in his life and never once understood why. So the new one has one request: the last forty minutes of each training day, with the door shut, not minuted and not reported, from January. Twenty-three words, in a paragraph of its own, with nothing else in that paragraph. Two of the other three go in a second letter in February, and one he is dropping altogether, because a week of thinking has told him the window on to the corridor does not matter and he had put it in because it was easy to describe. And the date: he has asked for a reply by the twentieth of December and not within three weeks — three weeks from when? From the day he sent it, or somebody opened it, or it reached the right desk? Ms Huda said that is the rule for the unit and for most of professional life: by a date is a point and within a period is a negotiation._'));
out.push(p('**Listener task:** write one request from this room that was dropped because it was only easy to describe.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Fares\'s letter. Answer the questions.'));
out.push(model([
  '**TO THE TRAINING MANAGER · the monthly training days** · F. Kayyali · 1 December',
  'This letter contains one request. I wrote a different letter on Sunday with four in it and I have not sent it, for a reason I shall give at the end.',
  '**The request.** I am asking for the last forty minutes of each training day to be held with the door shut, not minuted and not reported, from January.',
  '**Why those forty minutes.** For four years this work was done in car parks, where nothing was written down, and the two representatives who have stopped asking questions since September are the two who asked the most then. The register at the door is the only thing that has changed for them. I am not asking for the register to go; I am asking for forty minutes a month in which there is no record, which is a smaller thing than the register and does the same work.',
  '**What I am not asking for.** I am not asking for a second day, I am not asking to choose the names on the list, and I am not asking for a different room. Two of those will come in February, with a date of their own. The third I have dropped.',
  '**What I should like you to do, and by when.** I should be grateful if you would tell me, by 20 December, whether the forty minutes may be held as described. December is in the letter and not "within three weeks", because three weeks from the day I write is not the same as three weeks from the day somebody reads.',
  '**And why I threw Sunday\'s letter away.** It asked for four things, and one of the four — the room — cost nothing and could have been granted by whoever opened the envelope. That one would have been granted, my points would have been noted, and the forty minutes would never have had a sentence of its own. I have had that answer three times in my working life and I did not understand it until this month.',
]));
out.push(item('1', 'What does he say the forty minutes does, and why is it a smaller thing than the register?'));
out.push(item('2', 'What three things does he say he is not asking for, and what happens to each?'));
out.push(item('3', 'Why did he throw Sunday\'s letter away?'));
out.push(writers([
  'A one-request letter: **say it contains one request** → **the request, in a paragraph of its own** → **why that one** → **what you are not asking for, and when each of those will come** → **what you want done and by when, with the date explained** → **and why you threw the first version away**.',
  'Say in the first line that there is one request. It tells the reader how to read the letter and it stops them searching for the others.',
  'Make the request **smaller** than the thing the reader will be afraid you want. _I am not asking for the register to go; I am asking for forty minutes a month in which there is no record._ A request that is visibly less than the obvious one is granted far more often.',
  'Account for the requests you are not making, with a month against each. It costs two lines and it stops the reader thinking that silence means you have given up on them.',
  '⚠ Explain the date in the letter itself. _Not "within three weeks", because three weeks from the day I write is not the same as three weeks from the day somebody reads._ One sentence, and the date can no longer be renegotiated.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-request letter (60 words or more).'));
out.push(p('**TO ______________** · ______________   This letter contains one request.   **The request.** I am asking for ______________, from ______________.   **Why that one.** ______________. I am not asking for ______________; I am asking for ______________, which is a smaller thing and does the same work.   **What I am not asking for.** I am not asking for ______________, ______________ or ______________. ______ of those will come in ______________, with a date of their own. The other I have dropped.   **What I should like you to do, and by when.** I should be grateful if you would ______________, by ______________. By that date and not within ______________, because ______________.   **And why I threw the first version away.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One request only, in its own paragraph, under twenty-five words',
  'The request smaller than the one the reader fears',
  '_By_ a date, and the date explained',
  'The other requests accounted for, with a month each',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the request they dropped.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full one-request letter (140 words or more): the single request in its own paragraph, why that one, what you are not asking for and when, the date with its explanation, and the account of the version you threw away.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **one request only**, **the date as a point**, **the requests accounted for**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many requests did this room start with, and how many are in the letters now?** Count both. Then the figure that matters: how many people dropped something altogether? Dropping one is the sign that a week of thinking has happened, and a letter written by somebody who has dropped something reads differently from one written by somebody who has merely shortened a list.'));
out.push(hw('Write the one-request letter (60+ words) and put the date of the second letter in your diary now. Then write one line about the request you dropped: why it got on to the list, and what it was standing in for.'));

// ======================= 19.5 =======================
out.push(pb());
out.push(h2('19.5  What I asked for was not this'));
out.push(p('**Function:** saying that a resolution is not what you asked for   ·   **Grammar:** _what_-clauses as subject and object   ·   **Pronunciation:** the stress inside a _what_-clause'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each, beginning _What I asked for was…_ and one beginning _What I was given was…_ Your teacher writes the pairs on the board in two columns and the class looks at the gaps between them.'));
out.push(board('What I asked for was the specification. What they have offered is four handsets.', '_what_-clause as subject · as object'));
out.push(p('**b**  Join each pair with a _what_-clause. **1** _I asked for a date. They sent a leaflet._  **2** _I wanted the reason. I was given an apology._  **3** _I asked who signed it. They told me it was in order._  **4** _I asked for one thing. They answered three._  **5** _I asked for forty minutes. They offered me a room._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Mazen ask for, and what has he been offered?   **A** a specification; four replacement handsets   **B** a refund; a credit note   **C** a name; a leaflet'));
out.push(p('**b**  Listen again. **1** Why does he say the offer is worse than a refusal?   **2** What does Ms Huda say a _what_-clause does that a complaint cannot?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.9  Four handsets and no answer', [
  ['Mazen', 'I have had the reply. Eleven days, which is faster than anything I have ever had from them. And it has made me angrier than the seven months of silence did, and I have spent two days working out why.'],
  ['Ms Huda', 'Read what they have offered.'],
  ['Mazen', '"We are pleased to arrange the replacement of four units as a gesture of goodwill. We trust this resolves the matter."'],
  ['Nour', 'Four new handsets. That is money.'],
  ['Mazen', 'That is money, and it is generous, and it is not what I asked for. What I asked for was one thing: whether the January-to-March batch of that model has a different adhesive specification from the batches before and after it. I said in the letter, twice, that I was not asking them to replace anything.'],
  ['Omar', 'So why is it worse than a refusal?'],
  ['Mazen', 'Because a refusal leaves the question open and this closes it. "We trust this resolves the matter" — the matter is now resolved. If I write again I am a man who was given four handsets and came back for more. And there are fifteen in my book and there will be more in January, and the only thing in the world that would stop that is the answer to the question I asked.'],
  ['Jad', 'Have you worked out why they did it?'],
  ['Mazen', 'I think so, and it is not dishonesty. Four handsets is a thing the man who read my letter can authorise on his own, this week, from a list he already has. The specification question has to go to a factory, through somebody he cannot name, and may come back costing his company a great deal more.'],
  ['Lubna', 'So he answered the question he was able to answer.'],
  ['Mazen', 'He answered the question he was able to answer, which is what everybody does, including me. That is why I am not going to write an angry letter.'],
  ['Ms Huda', 'Then say the sentence you are going to write, because you said it to me before the lesson and it is the cycle.'],
  ['Mazen', '"Thank you — I accept the four units. What I asked for, however, was not a replacement, and the question in my letter of the twenty-fourth is still open."'],
  ['Ms Huda', 'Hear what that does. _What I asked for was not a replacement_ — the **what**-clause puts your own request at the front of the sentence as a fact, before any comparison and before any complaint. It does not say they were wrong; it says what you asked, which nobody can dispute, because it is in a letter with a date on it. And then the open question is a statement and not an accusation. That is the whole of this cycle, and it is the most useful sentence shape in the second half of this book.'],
]));
out.push(sp());
out.push(box('Language box – _what_-clauses', [
  '**A _what_-clause is a noun made out of a question, and it can be the subject or the object of a sentence.**',
  table(['instead of', 'write'], [
    ['_I asked for the specification, not handsets._', '_**What I asked for** was the specification._'],
    ['_They have offered me four units._', '_**What they have offered** is four units._'],
    ['_I do not understand why they did it._', '_**What I do not understand** is why they did it._'],
    ['_The question is still open._', '_**What is still open** is the question in my letter of the 24th._'],
  ], [2.2, 2.4]),
  '⚠ **The verb after a _what_-clause is singular**, even when what follows it is plural: _what they have offered **is** four units._ Students write _are_ and it is the commonest error in the cycle.',
  '⚠ **No _that_ and no inversion inside the clause:** ~~what that I asked for~~ · ~~what did I ask for was~~ → _what I asked for was_.',
  '**Why it is the right shape for this job.** It puts **your own request** at the front of the sentence as a plain fact — and your own request is the one thing in the whole dispute that nobody can argue with, because it is in a letter with a date on it. It therefore says that the answer is wrong **without saying that anybody is wrong**.',
  '**The three sentences, in this order:** _Thank you — I accept X._ · _What I asked for, however, was not X._ · _The question in my letter of the 24th is still open._ **Accept, distinguish, reopen.** Without the first you are ungrateful, without the second vague, without the third the matter is closed.',
  '**And work out why they answered the wrong question, because it is almost never dishonesty.** Four handsets can be authorised this week by the man who opened the letter, from a list he already has. The specification has to go to a factory, through somebody he cannot name, and may cost more than four handsets. _He answered the question he was able to answer, which is what everybody does, including me._',
  '⚠ **Watch for the closing sentence in their reply:** _we trust this resolves the matter_ · _we consider this matter closed_ · _we hope you will find this satisfactory._ That sentence is the thing you are answering, and if you do not answer it, it is true.',
  '**Useful phrases:** it has made me angrier than the seven months of silence did · that is money, and it is generous, and it is not what I asked for · a refusal leaves the question open and this closes it · he answered the question he was able to answer · the question in my letter of the 24th is still open.',
  '**Practise:** Make each a _what_-clause sentence.  1 what you asked for  2 what you were given  3 what you do not understand  4 what is still open  5 what would settle it',
  '**Pronunciation.** 🔊 **Track 19.10** The stress inside the clause falls on the **verb of asking**, and then there is a small pause before the main verb: _what I **ASKED** for ‖ was the specification._ A speaker who stresses _what_ sounds indignant; a speaker who stresses _asked_ sounds exact. Listen to six and mark the stressed word.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and gives the three sentences in order: accept, distinguish, reopen. B then does the harder half — says **why** the other side answered the question they answered, without calling it dishonest. Swap cards.'));
out.push(dlg(null, [
  ['A', 'Thank you — I accept __________.'],
  ['A', 'What I asked for, however, was not __________.'],
  ['A', 'The question in my __________ of the __________ is still open.'],
  ['B', 'They answered that one because __________, and it was not dishonest.'],
]));
out.push(table(['Card A – the offer you have had', 'Card B – the offer you have had'], [
  ['a replacement when you asked for a reason', 'an apology when you asked for a date'],
  ['a leaflet when you asked a question', 'a meeting when you asked for a decision'],
  ['money when you asked for a change', 'a general assurance when you asked who signed it'],
  ['one of your four requests, the cheapest', 'a review "in the new year" when you asked for a rule'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight reasons B gave for why the wrong question got answered. Then look for the one that comes up in most of them: **the answer that was given is the one the reader had the authority to give.** Nearly every unsatisfactory resolution in working life is that, and almost none of it is bad faith.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take any resolution you have been given that was not what you asked for — at work, from a shop, from an office. Give the three sentences, and then say why the person who answered answered what they answered.'));
out.push(p('**b**  Swap. Then each of you say what your partner would have to do to reach the person who **could** answer the real question, and whether it is worth doing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen has had the reply — eleven days, faster than anything he has ever had from them — and it has made him angrier than the seven months of silence did, and he has spent two days working out why. What they have offered: "We are pleased to arrange the replacement of four units as a gesture of goodwill. We trust this resolves the matter." Nour said four new handsets is money, and he agreed: it is money, it is generous, and it is not what he asked for. What he asked for was one thing — whether the January-to-March batch of that model has a different adhesive specification from the batches before and after it — and he said twice in the letter that he was not asking them to replace anything. Omar asked why it is worse than a refusal, and Mazen said because a refusal leaves the question open and this closes it: "we trust this resolves the matter" means it is resolved, and if he writes again he is a man who was given four handsets and came back for more — and there are fifteen in his book and there will be more in January. Jad asked whether he had worked out why they did it, and it is not dishonesty: four handsets can be authorised this week by the man who read the letter, from a list he already has, and the specification question has to go to a factory, through somebody he cannot name, and may come back costing his company a great deal more. So he answered the question he was able to answer, which is what everybody does, including Mazen — and that is why Mazen is not writing an angry letter. What he is going to write is: "Thank you — I accept the four units. What I asked for, however, was not a replacement, and the question in my letter of the twenty-fourth is still open."_'));
out.push(p('**Listener task:** write one closing sentence from a reply in this room — the one that says the matter is resolved.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mazen\'s reply. Answer the questions.'));
out.push(model([
  '**TO THE REGIONAL SALES OFFICE · your letter of 5 December · claim ref. 4471-SH** · M. Hariri · 7 December',
  'Thank you for answering in eleven days. I accept the four replacement units with thanks and I shall collect them from the Mezzeh branch.',
  '**What I asked for, however, was not a replacement.** My letter of 24 November asked one question: whether the January-to-March batch of that model carries an adhesive specification different from the batches before and after it. The letter said twice that I was not asking you to replace anything, and I am not asking now either.',
  '**So the question is still open.** Your letter ends "we trust this resolves the matter". I am writing to say, politely and in writing, that it does not — not because the units are unwelcome, but because they are fifteen units from two shops and there will be more in January, and the only thing that would prevent that is the answer to the question.',
  '**Why I think you answered the question you answered, and I do not think it was unwilling.** Four units can be authorised this week by the person who opened my letter, from a list that already exists. A specification question has to go to a factory and may come back costing your company considerably more. Anybody in that position answers the question they are able to answer. I do the same thing at a counter five days a week.',
  '**What I am asking now, and it is still one thing.** Please pass my letter of 24 November, with this one, to whoever is able to answer a question about an adhesive specification, and tell me that name. By 5 January. You do not have to answer the question yourself and I am not asking you to.',
  '**And what I shall do.** Nothing, until 5 January. If I have the name, I shall write to that person and this correspondence ends. If not, I shall write once more to you, attaching both letters and the fifteen dates.',
]));
out.push(item('1', 'What does he accept, and in which sentence?'));
out.push(item('2', 'Why does he say the four units do not resolve the matter?'));
out.push(item('3', 'What is the new single request, and why is it easier to grant than the old one?'));
out.push(writers([
  'A reply to a resolution that is not what you asked for: **thank and accept** → **what you asked for, however, was not that** → **so the question is still open — and answer their closing sentence** → **why they answered what they answered, and that it was not unwilling** → **the new single request, which is smaller than the old one** → **and what you will do, with a date**.',
  'Accept in the first two lines, without conditions. A letter that accepts nothing is read as a refusal of everything.',
  'Answer their closing sentence by quoting it. _Your letter ends "we trust this resolves the matter". I am writing to say, politely and in writing, that it does not._ If that sentence is not answered, it stands.',
  'Explain their behaviour generously and include yourself: _I do the same thing at a counter five days a week._ It costs you nothing and it makes the letter impossible to be offended by.',
  '⚠ Make the new request **smaller** than the old one: not the answer, but the **name** of whoever can answer. A request for a name can be granted by the person who has the letter in their hand, which is the whole point.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the reply to a resolution that is not what you asked for (60 words or more).'));
out.push(p('**TO ______________ · your letter of ______________** · ______________   Thank you for ______________. I accept ______________ with thanks.   **What I asked for, however, was not ______________.** My letter of ______________ asked one question: ______________.   **So the question is still open.** Your letter ends "______________". I am writing to say, politely and in writing, that it does not — not because ______________, but because ______________.   **Why I think you answered the question you answered.** ______________. Anybody in that position would do the same, and I do it myself when ______________.   **What I am asking now, and it is still one thing.** ______________. By ______________. You do not have to ______________ yourself.   **And what I shall do.** Nothing, until ______________. If ______________, then ______________. If ______________, then ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Accept, distinguish, reopen — all three, in that order',
  'A singular verb after every _what_-clause',
  'Their closing sentence quoted and answered',
  'A new request smaller than the old one, with a date',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their generous explanation of the other side.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full reply (140 words or more): accept, distinguish with a _what_-clause, answer their closing sentence, explain their behaviour without excusing it, make the smaller request with a date, and say what you will do in either case.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **accept-distinguish-reopen**, **the closing sentence answered**, **the smaller request**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the replies in this room contained a closing sentence that nobody answered?** Count. A sentence like _we trust this resolves the matter_ is not a courtesy: it is a claim about the state of the world, and it becomes true if nobody writes back. Three lines and a date is what stops it.'));
out.push(hw('Write the reply (60+ words) and send it. Then write one line about something **you** have resolved for somebody else by answering the question you were able to answer rather than the one they asked. Everybody has one.'));

// ======================= 19.6 =======================
out.push(pb());
out.push(h2('19.6  I accept it, and here is what it does not cover'));
out.push(p('**Function:** accepting a partial resolution, on terms   ·   **Grammar:** _while_ · _even though_ · _on the understanding that_   ·   **Pronunciation:** the flat tone that keeps resentment out'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: something you accepted that was less than you asked for — and then the honest half, out loud: whether you accepted it gracefully or whether you are still saying so a year later. Your teacher writes nothing down for this one.'));
out.push(board('I accept it, on the understanding that it covers January to June and nothing after June.', '_on the understanding that_ · accepting on terms'));
out.push(p('**b**  Join each pair without resentment. **1** _It is less than I asked for. I accept it._  **2** _They have not answered the main question. This is progress._  **3** _It covers one site. I asked for three._  **4** _It is not a rule. It is in writing._  **5** _I am grateful. I shall ask again in March._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What have the two sites offered Omar, and which of the two does he say is harder to accept?   **A** one adopts the rule, one will "review standards"; the second   **B** both refuse; the first   **C** both agree; neither'));
out.push(p('**b**  Listen again. **1** What does he say he nearly wrote, and why did he not write it?   **2** What does Ms Huda say the three parts of an acceptance are?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.11  Half of it, from one of them', [
  ['Omar', 'I asked both other sites for the same thing — no card anywhere to contain the words stop, try, remember, forget or go on. The northern site has adopted it. They sent two lines: "Agreed. Done from Monday." The other site has sent me four paragraphs saying they will review their documentation standards in the new year.'],
  ['Nour', 'Which is nothing.'],
  ['Omar', 'Which is nothing, and I nearly wrote and said so. I had it typed on Thursday: "I note that you intend to review your standards in due course, and I shall ask again in June." Which is a sentence with a knife in it and everybody can hear the knife.'],
  ['Jad', 'Why did you not send it?'],
  ['Omar', 'Because of something Ms Huda said about Mazen\'s letter. The man at that site cannot adopt my rule. He does not write the cards. Three of their four production lines use cards written by a contractor, and the contract is renewed in March. He has not fobbed me off; he has told me the only thing he is able to tell me, in four paragraphs instead of one because he is embarrassed about it.'],
  ['Lubna', 'How do you know the thing about the contractor?'],
  ['Omar', 'I did not know it on Thursday. I telephoned him on Friday and asked him one question — _could you tell me who writes the cards on your lines?_ — and he told me in about forty seconds and then talked for ten minutes, because nobody had ever asked him.'],
  ['Ms Huda', 'So what are you writing?'],
  ['Omar', 'Three things. I accept the review and I thank him for it, and I mean it, because he told me about the contract and did not have to. Then what it does not cover: the three contractor lines, which carry the oldest cards, said plainly because in June neither of us will remember. And then a term: on the understanding that the five words go into the contractor\'s specification in March — a thing he can actually do, and which I only know about because I telephoned.'],
  ['Omar', 'And I have put one more line in, which is that if the March specification does not happen, that is not a failure on his part and I shall not treat it as one.'],
  ['Ms Huda', 'Now the shape, because it is a shape and every one of you will need it. An acceptance has three parts. **One: accept, and mean it.** **Two: say what it does not cover** — plainly, in the same letter, because in June nobody will remember what was and was not included, and the person it will cost is you. **Three: a term**, which has to be something the other person can actually do. And then the sentence that makes it survivable: if the term is not met, that is not a betrayal. A letter that threatens, even gently, is remembered as a threat long after the thing itself is forgotten.'],
  ['Omar', 'The knife version was eleven words shorter.'],
  ['Ms Huda', 'They always are.'],
]));
out.push(sp());
out.push(box('Language box – accepting on terms', [
  '**Three parts, and all three have to be there:**',
  table(['part', 'how it sounds'], [
    ['**1 Accept**, and mean it', '_I accept the review, and I am grateful for it._'],
    ['**2 What it does not cover**', '_While it covers the two lines you write yourself, it does not cover the three contractor lines._'],
    ['**3 A term they can meet**', '_…on the understanding that the five words go into the contractor\'s specification in March._'],
  ], [1.6, 3.2]),
  '**The three joining words.** _**While** it covers X, it does not cover Y_ — neutral, best for a document. _**Even though** it is less than I asked for, I accept it_ — concedes your disappointment and moves past it. _**On the understanding that** Z_ — the term, and the only one of the three that asks for anything.',
  '⚠ **The term must be something the other person is able to do.** _On the understanding that the five words go into the contractor\'s specification in March_ is a term. _On the understanding that all cards are rewritten_ is a wish, and a wish presented as a term is read as a complaint with a date on it.',
  '⚠ **Say what it does not cover in the same letter, not later.** Not because the reader will cheat, but because in June neither of you will remember what was included — and the person it costs is you.',
  '**And then the sentence that makes the whole letter survivable:** _if that does not happen, it is not a failure on your part and I shall not treat it as one._ Leave it out and the term is a threat; and a letter remembered as a threat outlives everything else in it.',
  '⚠ **The knife.** _I note that you intend to review your standards in due course, and I shall ask again in June._ Every word is polite and everybody can hear the knife. If a sentence of yours would sound satisfying read aloud, take it out.',
  '**Before you accept, find out what the other person is actually able to do.** One indirect question did it: _could you tell me who writes the cards on your lines?_ — forty seconds for the answer and ten minutes of talking afterwards, because nobody had ever asked him.',
  '**Useful phrases:** which is nothing, and I nearly wrote and said so · a sentence with a knife in it, and everybody can hear the knife · he has told me the only thing he is able to tell me · I am saying that plainly because in June neither of us will remember · it is not a failure on your part and I shall not treat it as one.',
  '**Practise:** Accept each on terms, in three sentences.  1 less money than you asked for  2 a review instead of a decision  3 one of your three requests  4 a date instead of an answer  5 help from one person when you asked an office',
  '**Pronunciation.** 🔊 **Track 19.12** An acceptance is said **flat** — no rise at the end of the term, no emphasis on _does not cover_. The moment either of those is stressed, the sentence becomes a complaint. Listen to four pairs, said twice each, and say which of the two you would rather receive.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and gives the three parts — accept, what it does not cover, and a term. B does two things: says whether the term is something the other side can actually do, and listens for a knife. Swap cards.'));
out.push(dlg(null, [
  ['A', 'I accept __________, and I am grateful for it.'],
  ['A', 'While it covers __________, it does not cover __________.'],
  ['A', 'On the understanding that __________.'],
  ['B', 'Can they do that? __________.'],
  ['B', 'And there is a knife in __________.'],
]));
out.push(table(['Card A – what you have been offered', 'Card B – what you have been offered'], [
  ['a review instead of a decision', 'one site, one ward or one branch out of three'],
  ['half the money, or half the time', 'a verbal assurance instead of a written rule'],
  ['one of your requests, and not the main one', 'a date for a meeting instead of an answer'],
  ['help from one person when you asked an office', 'a trial instead of a change'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight terms and mark the ones the other side could actually carry out. Then count the knives. In a first run there are three or four knives in eight acceptances, and the people who put them in are always surprised — a knife is audible to everybody except the person holding it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a partial resolution you have had. Before you accept it, say what you know about **what the other person is able to do** — and if you do not know, say that, and say what one question would tell you.'));
out.push(p('**b**  Swap. Then each of you give the three parts aloud, and your partner says whether they would answer the letter.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar asked both other sites for the same thing — no card anywhere to contain the words stop, try, remember, forget or go on. The northern site has adopted it and sent two lines: "Agreed. Done from Monday." The other site has sent four paragraphs saying they will review their documentation standards in the new year, which Nour said is nothing. Omar agreed it is nothing, and said he nearly wrote and said so: he had it typed on Thursday — "I note that you intend to review your standards in due course, and I shall ask again in June" — which he says is a sentence with a knife in it that everybody can hear. He did not send it because of something said about Mazen\'s letter: the man at that site cannot adopt the rule, because he does not write the cards. Three of their four production lines use cards written by a contractor and the contract is renewed in March. He has not fobbed Omar off; he has told him the only thing he is able to tell him, in four paragraphs instead of one because he is embarrassed about it. Lubna asked how Omar knows about the contractor, and he did not know it on Thursday: he telephoned on Friday and asked one question — could you tell me who writes the cards on your lines? — and was told in forty seconds, after which the man talked for ten minutes, because nobody had ever asked him. So Omar is writing three things. He accepts the review and thanks him, and means it, because the man told him about the contract and did not have to. Then what it does not cover: the three contractor lines, which carry the oldest cards, said plainly because in June neither of them will remember. And then a term: on the understanding that the five words go into the contractor\'s specification in March — a thing the man can actually do, and which Omar only knows about because he telephoned. And one more line: if the March specification does not happen, it is not a failure on his part and Omar will not treat it as one._'));
out.push(p('**Listener task:** write one term from this room that the other side could actually carry out.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Omar\'s acceptance. Answer the questions.'));
out.push(model([
  '**TO THE SITE MANAGER, SOUTHERN SITE · card wording** · O. Darwish · 8 December',
  'Thank you for your letter of 3 December. I accept the review, and I am grateful for it — and I am more grateful for the telephone call on Friday, in which you told me about the contractor, which you did not have to do.',
  '**What the review covers.** The one production line whose cards are written in your own office. You have said that line will be done by the end of January and I have no reason to doubt it.',
  '**What it does not cover, and I am saying this now rather than in June.** The three lines whose cards are written by your contractor — which are, as you told me on Friday, the three lines with the oldest cards on them. Those are also the lines where this matters most, and neither of us will remember in June that they were outside the review unless one of us writes it down. I am writing it down.',
  '**The term I should like, and it is one you can meet.** On the understanding that the five words — stop, try, remember, forget, go on — go into the contractor\'s specification when it is renewed in March. Not a rewriting of the existing cards and not an audit: five words in a specification, which is one line of a document you are going to redraft anyway.',
  '**And the line that matters more than the term.** If the March specification does not happen, that is not a failure on your part and I shall not treat it as one. I am asking for the attempt and not for the outcome.',
  '**What I shall do.** Nothing until March. Then one short letter asking whether the five words went in. If they did, I shall say so to our own management with your name on it, because the northern site got two lines and you have had to find a way through a contract.',
  '**One last thing, which is about me and not about you.** I wrote a different letter on Thursday, before I telephoned you. It was shorter and it ended with the words "I shall ask again in June", and it would have been read as a threat, because it was one. I did not send it because I did not yet know what you were able to do, and I had not asked.',
]));
out.push(item('1', 'What two things does he thank him for, and which does he say he is more grateful for?'));
out.push(item('2', 'What does he say about the term, and what is he explicitly not asking for?'));
out.push(item('3', 'What does he say about his Thursday letter, and why did he not send it?'));
out.push(writers([
  'An acceptance on terms: **thank and accept, and mean it** → **what it covers** → **what it does not cover, said now and not later** → **the term, and what the term is not** → **the line that matters more than the term** → **what you will do, and when** → **and one last thing about yourself**.',
  'Thank them for the thing they did not have to do. It is the sentence that makes the rest of the letter readable.',
  'Say why you are writing the exclusion down. _Neither of us will remember in June that they were outside the review unless one of us writes it down. I am writing it down._ Naming the reason stops the exclusion reading as suspicion.',
  'Describe the term by what it is **not**: _not a rewriting of the existing cards and not an audit._ Every term is heard as the largest thing it could mean unless you say what it is not.',
  '⚠ End with your own near-miss. _It ended with "I shall ask again in June", and it would have been read as a threat, because it was one._ Admitting the letter you did not send is what proves the one you did send.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the acceptance on terms (60 words or more).'));
out.push(p('**TO ______________** · ______________   Thank you for ______________. I accept ______________, and I am grateful for it — and more grateful for ______________, which you did not have to do.   **What it covers.** ______________.   **What it does not cover, and I am saying this now rather than in ______________.** ______________. Neither of us will remember unless one of us writes it down. I am writing it down.   **The term I should like, and it is one you can meet.** On the understanding that ______________. Not ______________ and not ______________.   **And the line that matters more than the term.** If ______________ does not happen, that is not a failure on your part and I shall not treat it as one.   **What I shall do.** Nothing until ______________. Then ______________.   **One last thing, which is about me.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'All three parts: accept, what it does not cover, a term',
  'The term something the other side can actually do, with what it is not',
  'The not-a-failure line present',
  'No knife anywhere — read it aloud and listen for the satisfying sentence',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the letter they nearly sent instead.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full acceptance (140 words or more): thanks for the thing they did not have to do, what it covers, what it does not and why you are writing that down, the term with what it is not, the not-a-failure line, what you will do and when, and one admission about yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the term being doable**, **the not-a-failure line**, **the absence of a knife**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us found out what the other side was able to do before accepting?** Count — and count the ones who found out with **one telephone call**. Almost every acceptance in this room was being written in ignorance of the other person\'s powers, and in almost every case one indirect question would have settled it in forty seconds.'));
out.push(hw('Write the acceptance (60+ words) and send it. Then, before you send it, make the one telephone call that tells you what the other person is actually able to do, and rewrite the term if the call changes it. Write down what they said.'));

// ======================= 19.7 =======================
out.push(pb());
out.push(h2('19.7  Review & Mediate: Who counts as a complainant'));
out.push(p('**Function:** explaining a complaints procedure   ·   **Recycling:** Units 1–19   ·   **Exam practice:** B1 Preliminary Reading Part 5, Writing Part 1, Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 19 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Could you tell me when did it arrive?  **2** I have serviced the machine twice _(you paid somebody)_.  **3** What they have offered are four units.  **4** Please reply within 20 December.  **5** I would be grateful if you can send it.  **6** I accept it in the understanding that it covers January.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the extract from the procedure Rasha found in a folder in the ward office.'));
out.push(box(null, [
  '**COMPLAINTS PROCEDURE · extract, clauses 1–9** _(undated; in a folder in the ward office)_',
  '**1**  In this procedure "a complaint" means any expression of dissatisfaction **received in writing** from a patient, from a relative of a patient, or from a member of the public.',
  '**2**  A complaint is acknowledged within three working days and answered within **twenty** working days.',
  '**3**  Where an answer cannot be given within twenty working days, the complainant is informed of the reason and given a date.',
  '**4**  A complaint concerning clinical care is referred to the relevant head of department.',
  '**5**  A complaint concerning equipment is referred to the equipment office.',
  '**6**  Matters raised by members of staff are dealt with under the staff concerns procedure.',
  '**7**  The staff concerns procedure is at Appendix 2.',
  '**8**  No complaint is closed until the complainant has been informed in writing and given the date of closure.',
  '**9**  The complaints log is reviewed every quarter by the quality committee.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Which clause does Rasha say puts her outside the whole procedure, and which clause gives her the one thing she can actually use?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.13  Nine clauses and a missing appendix', [
  ['Rasha', 'I found this in a folder in the ward office on Monday and I have read it about twenty times, and it explains something that has been happening to me since February.'],
  ['Ms Huda', 'Start with clause one.'],
  ['Rasha', 'Clause one is the whole page. "A complaint" means dissatisfaction received in writing from a patient, a relative of a patient, or a member of the public. I am none of those three. I have pushed that trolley for nine years and I cannot make a complaint about it, because I am not a kind of person who can make one.'],
  ['Lubna', 'And clause two?'],
  ['Rasha', 'Clause two is the one that hurt. Twenty working days. Everything on that page — the three days, the twenty days, the date if they cannot manage twenty, the written closure — all of it attaches to the word in clause one. A relative of a patient who writes a letter about that trolley is owed an answer with a date on it inside a month. I have had nine months and there is nothing I am owed, and nobody has done anything wrong.'],
  ['Jad', 'Clause six sends you somewhere.'],
  ['Rasha', 'Clause six sends me to the staff concerns procedure and clause seven says it is at Appendix 2. I have asked four people for Appendix 2 this week. Nobody has seen it. The ward clerk has been there eleven years and has never heard of it.'],
  ['Omar', 'So that is why there is no form for chasing equipment.'],
  ['Rasha', 'That is why there is no form for chasing equipment. In February I thought somebody had lost my trolley. In November I thought nobody cared. It is neither. The procedure is complete and careful and it has one word in clause one that leaves out every person who touches the equipment.'],
  ['Ms Huda', 'Now the useful half. Is there anything on that page you can use?'],
  ['Rasha', 'Clause nine. The log is reviewed every quarter by the quality committee. I cannot be a complainant and I am not going to pretend to be one — and I am not going to ask a patient\'s relative to write a letter for me, which somebody suggested and which I will not do. But a committee that reviews a log every quarter can be asked for **one figure**, and asking for a figure is not making a complaint.'],
  ['Nour', 'Which figure?'],
  ['Rasha', 'How many items of equipment were in the workshop for more than ninety days in the last quarter. That is one line of arithmetic from a log they already have, nobody is accused of anything, and if the answer is a number larger than one, the trolley stops being my grievance and becomes their figure.'],
  ['Ms Huda', 'And that is the mediation. A document that excludes you still contains something — and it is almost never the clause you are angry about. It is clause nine, which nobody reads, because by clause nine the reader has stopped.'],
]));
out.push(sp());
out.push(box('Language box – reading a complaints procedure', [
  '**Read clause one first and read it as a definition** (11.7). _"A complaint" means… from a patient, from a relative of a patient, or from a member of the public._ Everything else on the page attaches to that word, so the definition decides who the page is for — and in most procedures, in most organisations, **the people who do the work are outside it**.',
  '**Then find out where you are sent instead, and whether it exists.** _Matters raised by members of staff are dealt with under the staff concerns procedure_ · _the staff concerns procedure is at Appendix 2._ Ask four people for Appendix 2. The answer is the fault, and it is not anybody\'s fault.',
  '**Separate the three explanations and keep the third.** Somebody lost it · nobody cares · **the procedure is complete and careful and excludes you by one word in clause one**. The third is nearly always the true one, and it is the only one of the three you can do anything about.',
  '**Then look for the clause you can use, and look near the end.** It is almost never the clause you are angry about. _The log is reviewed every quarter by the quality committee_ — a body that reviews a log can be asked for **one figure** from it, and asking for a figure is not making a complaint.',
  '**Ask for a figure that is one line of arithmetic from a document they already hold.** _How many items were in the workshop for more than ninety days last quarter._ Nobody is accused, nothing is alleged, and if the figure is bigger than one, your grievance becomes their statistic — which is the only way a thing like this ever moves.',
  '⚠ **And do not borrow somebody else\'s standing.** Rasha was advised to get a patient\'s relative to write the letter for her. It would have worked and she will not do it: a complaint made through somebody who did not make it is a thing you cannot stand behind afterwards, and you will be asked to.',
  '**Useful phrases:** I am not a kind of person who can make one · everything on that page attaches to the word in clause one · nobody has seen Appendix 2 · the procedure is complete and careful and leaves out everybody who touches the equipment · asking for a figure is not making a complaint.',
  '**Pronunciation.** 🔊 **Track 19.14** Reading a clause aloud to somebody who has not seen it: **the clause number, a pause, the quoted words slowly, then your sentence at normal speed** — _clause one ‖ "received in writing from a patient, a relative of a patient, or a member of the public" ‖ I am none of those three._ Listen to four and write the speaker\'s own sentence only.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the procedures below and does **not** show it. A reads it once, then explains it: the clause that defines who it is for, where the excluded people are sent, whether that place exists, and the clause that could actually be used. B must say which clause they would write to the author about. **Then, in two minutes together**, decide the **one** figure you would ask for. You do not have to agree. Change roles with the other procedure.'));
out.push(table(['Procedure A – a college\'s appeals procedure', 'Procedure B – a company\'s customer charter'], [
  ['_1 "An appeal" means a written appeal by a registered student._', '_1 "A customer" means the person named on the invoice._'],
  ['_2 Appeals are heard within fifteen working days._', '_2 Enquiries are answered within five working days._'],
  ['_3 Appeals about marking go to the examinations board._', '_3 Complaints about delivery go to the depot manager._'],
  ['_4 Matters raised by staff go to the staff handbook, section 9._', '_4 Matters raised by retailers are handled by area managers._'],
  ['_5 Section 9 is under revision._', '_5 Area manager contact details are on the intranet._'],
  ['_6 No appeal is closed without written notice._', '_6 Nothing is closed without written confirmation._'],
  ['_7 Appeal outcomes are reported annually to the senate._', '_7 The enquiry log is audited twice a year._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the one figure each pair chose. On Procedure A it is usually the number of appeals upheld; on Procedure B the number of enquiries answered outside five working days. In both cases the figure comes from the **last** clause — the reporting clause — and in both cases the pairs reached it by giving up on the clause that excluded them, which is the move the cycle is for.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Use a real procedure from your own work, college or city — a complaints policy, an appeals procedure, a customer charter, a grievance policy. Explain it to your partner **without showing it**: who clause one is for, where you are sent if you are not that person, whether that place exists, and which clause near the end you could use. Your partner must ask: _are you inside the definition?_, _have you asked four people for the appendix?_ and _what is the one figure?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Rasha found the procedure in a folder in the ward office on Monday and has read it about twenty times, and it explains something that has been happening to her since February. Clause one is the whole page: "a complaint" means dissatisfaction received in writing from a patient, from a relative of a patient, or from a member of the public — and she is none of those three. She has pushed that trolley for nine years and she cannot make a complaint about it, because she is not a kind of person who can make one. Clause two is the one that hurt: twenty working days, and everything on the page attaches to the word in clause one, so a relative of a patient who writes a letter about that trolley is owed an answer with a date on it inside a month, and she has had nine months and is owed nothing, and nobody has done anything wrong. Clause six sends her to the staff concerns procedure and clause seven says it is at Appendix 2; she has asked four people for Appendix 2 this week and nobody has seen it, and the ward clerk has been there eleven years and has never heard of it. Omar said so that is why there is no form for chasing equipment, and she said yes. In February she thought somebody had lost her trolley; in November she thought nobody cared; it is neither — the procedure is complete and careful and it has one word in clause one that leaves out every person who touches the equipment. Then the useful half. Clause nine: the log is reviewed every quarter by the quality committee. She cannot be a complainant and will not pretend to be one, and she will not ask a patient\'s relative to write a letter for her, which somebody suggested. But a committee that reviews a log every quarter can be asked for one figure, and asking for a figure is not making a complaint: how many items of equipment were in the workshop for more than ninety days last quarter. That is one line of arithmetic from a log they already have, nobody is accused of anything, and if the answer is larger than one, the trolley stops being her grievance and becomes their figure._'));
out.push(p('**Listener task:** write the clause each pair chose to use, and the figure they asked for.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 5)', 7));
out.push(p('For each question (**1–6**), choose the correct answer **A**, **B**, **C** or **D**.'));
out.push(box(null, [
  '**THE WORD AT THE TOP OF THE PAGE**',
  'A complaints procedure begins with a definition, and almost nobody **(1)** ______ the trouble to read it. The definition decides whose dissatisfaction **(2)** ______ as a complaint and whose does not, and every time limit on the page depends **(3)** ______ it.',
  'In most hospitals and most companies, the people who do the work are outside it. Their concerns are **(4)** ______ with under a second procedure, which is often an appendix that nobody in the building has ever **(5)** ______ . The effect is not deliberate and it is almost never noticed: a relative who writes a letter about a piece of equipment is owed an answer with a date on it inside a month, and a nurse who has pushed the same piece of equipment for nine years is owed nothing at all.',
  'The lesson is not that such procedures are unjust, and it is certainly not that they should be ignored. It is that the reader should find out which of the two kinds of person they are **(6)** ______ going any further — and that if they are the second kind, the clause worth their attention is not the one that excludes them. It is the last one on the page, which usually says that a log is reviewed by a committee, and which nobody ever reaches.',
], C.lyellow, C.orange));
[
  '**1**   **A** makes   **B** takes   **C** gives   **D** does',
  '**2**   **A** tells   **B** makes   **C** counts   **D** says',
  '**3**   **A** from   **B** of   **C** in   **D** on',
  '**4**   **A** done   **B** made   **C** taken   **D** dealt',
  '**5**   **A** watched   **B** looked   **C** seen   **D** noticed',
  '**6**   **A** until   **B** before   **C** since   **D** while',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter asking a committee for one figure (60 words or more).'));
out.push(p('**TO ______________** · ______________   This is not a complaint and I am not able to make one: clause ______ of the ______________ procedure defines a complainant as ______________, and I am none of those.   **What I am asking for.** One figure from a document you already hold. ______________, in the last ______________.   **Why that figure.** ______________. It is one line of arithmetic from the ______________ named in clause ______, and nobody is accused of anything by it.   **What I shall do with it.** ______________.   **What I am not asking for.** I am not asking you to ______________, and I am not asking anybody to ______________ on my behalf.   **And one thing about the procedure itself.** Clause ______ sends people like me to ______________. I have asked ______ people for it this week and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The clause number and the definition quoted',
  'One figure, from a document that already exists',
  'Nobody accused anywhere on the page',
  'The missing appendix reported as a fact, not as a grievance',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"I complained to a company three weeks ago and they have sent me a voucher. I did not want a voucher — I wanted them to tell me why the thing happened, so that it does not happen again in February. Now I do not know what to write back, and I do not want to sound ungrateful. Can you help? Sam"_',
  '**Your notes:**  •  _Tell him what to do about the voucher, in the first two lines_  ·  _Give him the three sentences, in order_  ·  _Tell him what to look for at the end of their letter, and why_  ·  _Tell him to make the new request smaller, and give him an example_',
  'Write your email to Sam using **all four** notes. Write **140 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 19 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Could you tell me ___ the lot number was recorded.   a) if was   b) that   c) whether',
  '2  I have ___ the machine serviced twice this year.   a) had   b) have   c) having',
  '3  ___ I asked for was the specification.   a) What   b) That   c) Which',
  '4  What they have offered ___ four replacement units.   a) are   b) were   c) is',
  '5  I should be grateful if you would reply ___ 20 December.   a) by   b) within   c) until',
  '6  I should be grateful if you ___ send me a copy of the sheet.   a) sent   b) would   c) are',
  '7  Could you tell me who ___ the release note?   a) did sign   b) has sign   c) signed',
  '8  I accept the review, ___ the understanding that the five words go in in March.   a) in   b) on   c) with',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 3 style – note completion).** 🔊 **Track 19.15** You will hear a nurse explaining a complaints procedure. Write **one or two words or a number** in each gap.'));
out.push(box('WHO COUNTS AS A COMPLAINANT', [
  'A complaint must be received in **(1)** ______',
  'It must come from a patient, a relative, or a member of the **(2)** ______',
  'Complaints are answered within **(3)** ______ working days',
  'Staff matters are sent to a second procedure at **(4)** ______ 2',
  'Nothing is closed until the complainant has been given a **(5)** ______',
  'The log is reviewed by the quality committee every **(6)** ______',
], C.lyellow, C.orange));
out.push(dlg('Track 19.15  Audio script (read after the check)', [
  ['Rasha', 'I found it in a folder in the ward office and I have read it about twenty times. Clause one is the whole page: a complaint means dissatisfaction received in writing from a patient, from a relative of a patient, or from a member of the public. I am none of those three, so I cannot make one. Clause two is the one that hurt: a complaint is acknowledged in three working days and answered within twenty, and every limit on that page hangs on the word in clause one — so a relative who writes a letter about my trolley is owed a dated answer inside a month, and I have had nine months and am owed nothing, and nobody has done anything wrong. Clause six sends me to the staff concerns procedure, and clause seven says that procedure is at Appendix 2. I have asked four people for Appendix 2 this week. Nobody has seen it, and the ward clerk has been there eleven years and has never heard of it. Clause eight says no complaint is closed until the complainant has been informed in writing and given the date of closure — which is a good clause and is not for me. And clause nine, which is the one nobody reaches, says the complaints log is reviewed every quarter by the quality committee. That is the clause I am going to use, because a committee that reviews a log can be asked for one figure out of it, and asking for a figure is not making a complaint.'],
]));
out.push(p('**C  Writing.** Write the complaint (140+ words) for something unresolved of your own: what the fault does with a count, what you have had done about it with dates, the question you are not asking, the one question you are asking and the document it rests on, one request with one date, and what you are not asking for.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 19)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what a fault does, in the passive, with a count — and no feeling-words',
  '☐ say what I have had done about it, with dates and what was found',
  '☐ ask for information indirectly, and leave room for the answer to be that I am wrong',
  '☐ make one request, by one date, and say what I am not asking for',
  '☐ say what I asked for, in a _what_-clause, without saying anybody was wrong',
  '☐ answer the sentence at the end of their letter that says the matter is resolved',
  '☐ accept a partial resolution on a term the other side can actually meet',
  '☐ read a procedure, find out whether I am inside its definition, and find the clause I can use',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 20 – INSTRUCTIONS, MANUALS AND HOW-TO', [
  'Unit 19 was about getting something put right. **Unit 20** is about the document that stops it going wrong in the first place: the instruction, the manual, the how-to, the step somebody has to follow at six in the morning with one hand free.',
  '**20.3 is the cycle to prepare for**: writing the step that cannot be got wrong — numbered, one action each, with the warning **before** the step and not after it. Unit 18 showed you what a two-way verb does to a card; Unit 20 is the whole craft, including what to do when a step has a condition in it.',
  '**20.6 writes the one-page how-to for the job you do** — the page you would leave on the bench if you were away for a fortnight. **20.7** takes a manual written by somebody else and finds the step that assumes knowledge the reader has not got.',
  '**Bring one set of instructions you have had to follow** — a manual, a leaflet, an assembly sheet, a form\'s guidance notes, a recipe — and, if you can, **the thing you got wrong the first time**. 20.1 is built on that mistake.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 19 · Student\'s Book');
