// Proactive English B1 · Syria Edition · Book 2 · Unit 18 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review.** No stems. Write your partner **three sentences in English**: what worked, the one place you would change, and the question you are left with.';

out.push(h1('Unit 18  Verb Patterns'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**18.1**  say what you avoid and what you keep doing',
  '**18.2**  say what you agreed and refused to do',
  '**18.3**  use the verbs that change their meaning',
  '**18.4**  say what you are willing to do and responsible for',
  '**18.5**  say who asked whom to do what',
  '**18.6**  write a week in its verbs',
  '**18.7**  Review & Mediate: explain an instruction sheet',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**This is the system that Unit 17 ended inside.** _I am used to **working**_ had an **-ing** after _to_ because that _to_ was a preposition. Unit 18 is the whole family: which verbs take **-ing**, which take **to**, which take both and mean two different things, and which need a **person** in the middle.',
  '**18.3 is the cycle to be careful with.** _I stopped to read it_ and _I stopped reading it_ are **opposite events**. So are _remember to lock_ and _remember locking_, and _try asking_ and _try to ask_. An instruction sheet that uses the wrong one gives the wrong instruction, and somebody follows it.',
  '**And this unit is about records, not only grammar.** _I agreed to · I refused to · I admitted · I asked him to · I reminded her to_ — these are the verbs an argument is settled with six months later, because each one says who committed to what. A week written without them is a week in which nobody did anything.',
  '⚠ **The two errors to kill in this unit and never see again:** ~~he suggested me to go~~ → _he suggested that I should go_ / _he suggested going_; and ~~she explained me the form~~ → _she explained the form to me_. Both are in 18.5, and both are among the three commonest mistakes in the whole book.',
  '**18.7 takes the prediction board down.** It went up in 14.1 and has been on the wall of Room 14 since September. Four of the test dates have now fallen. Bring your own copy, with your name and your date on it.',
], C.lyellow, C.orange));

// ======================= 18.1 =======================
out.push(pb());
out.push(h2('18.1  I have been avoiding going back'));
out.push(p('**Function:** saying what you avoid and what you keep doing   ·   **Grammar:** verb + _-ing_   ·   **Pronunciation:** the linking of the verb to the _-ing_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: one thing at work you have been **putting off** for more than a month. Not a thing you forgot — a thing you have been putting off. Your teacher writes the eleven on the board and asks one question about each: _how long?_'));
out.push(board('I have been avoiding going back to the two blanks for seven weeks.', 'avoid / put off / keep + -ing'));
out.push(p('**b**  Finish each with _-ing_. **1** _I keep ___ (forget) the second page._  **2** _She admitted ___ (not measure) it._  **3** _He denied ___ (see) the note._  **4** _They suggested ___ (wait) until January._  **5** _I do not mind ___ (ask), but I mind ___ (be asked) in front of people._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Lubna been avoiding, and for how long?   **A** going back to two blanks, seven weeks   **B** writing the method statement, a month   **C** telephoning her supervisor, a fortnight'));
out.push(p('**b**  Listen again. **1** What does she admit, and what does she say the word for it is not?   **2** What does Ms Huda say the difference is between forgetting and avoiding?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.1  Seven weeks', [
  ['Lubna', 'I have to write a method statement for the survey — what I measured, how, and what I did not. And writing it has made me see something I have been avoiding seeing for seven weeks.'],
  ['Ms Huda', 'Say it.'],
  ['Lubna', 'There are two blanks on my sheets. I have always said that honestly: three sheets, two admitted blanks, and I have been quite proud of admitting them. Both of them are the rear light well on the second floor, and to measure it I have to get into flat four, and the woman in flat four would not open the door in September.'],
  ['Omar', 'So you cannot measure it.'],
  ['Lubna', 'No. I have not tried again. That is the thing. I went once, in September, she did not open the door, and I have spent seven weeks calling that a blank. I have not knocked on that door since the eleventh of September.'],
  ['Jad', 'Did you forget?'],
  ['Lubna', 'No, and that is what writing the statement did to me. I remembered it about twice a week for seven weeks. I have been avoiding going back, and I kept putting off deciding when, and I do not mind saying so in front of you because the alternative is writing a method statement that is a lie by omission.'],
  ['Nour', 'What were you avoiding, though? She is one woman and a door.'],
  ['Lubna', 'Being told no a second time. The first no was about the building. A second no would be about me, and I know that is not true and I have avoided finding out for seven weeks anyway.'],
  ['Ms Huda', 'Now the language, because it is exact and it matters. You have not been **forgetting** to go back. You have been **avoiding** going back. Forgetting is an accident and it takes no energy; avoiding is work — you did it about twice a week for seven weeks, and you were doing it on purpose without admitting the purpose.'],
  ['Lubna', 'I had not thought of it as work.'],
  ['Ms Huda', 'It is the most tiring work there is. And notice the verbs you have just used about yourself: _I have been avoiding going · I kept putting off deciding · I do not mind saying_. Every one of them takes _-ing_, and there are about forty verbs in that family, and between them they describe almost everything a person does **not** do. You cannot write honestly about your own work without them.'],
  ['Lubna', 'The statement goes in on the second of December. I am going to knock on that door on Saturday morning, and if she says no I will write that I asked twice, with two dates.'],
  ['Ms Huda', 'Which is a method statement. Seven weeks of calling it a blank was not.'],
]));
out.push(sp());
out.push(box('Language box – verb + -ing', [
  '**These verbs take _-ing_ and never _to_:**',
  table(['the verbs', 'an example'], [
    ['avoid · keep · put off · risk · deny · admit', '_I have been **avoiding going** back._'],
    ['enjoy · mind · dislike · can\'t stand', '_I do not **mind saying** so._'],
    ['suggest · recommend · consider', '_They **suggested waiting** until January._'],
    ['finish · give up · carry on · involve', '_It **involves measuring** every room._'],
  ], [2.3, 2.3]),
  '**The negative is _not_ + -ing:** _she admitted **not measuring** it_ · _he denied **not having told** anybody_. Students reach for _did not measure_ and lose the pattern.',
  '**_Admit_ and _deny_ are the two with weight.** In writing about your own work they are the honest verbs: _I admit not measuring the light well_ is a sentence somebody can act on; _the light well was not measured_ is a sentence with nobody in it.',
  '⚠ ~~I avoid to go~~ · ~~I suggest to wait~~ · ~~I enjoy to read~~ → _avoid going_, _suggest waiting_, _enjoy reading_. There is no rule to work it out from: these verbs are learnt as a list, and the list is short.',
  '**And the distinction the cycle turns on: _forget_ is an accident, _avoid_ is work.** If you have remembered a thing twice a week for seven weeks and not done it, you have not forgotten it. Say the true verb, because the true verb tells you what to do next.',
  '**Useful phrases:** I have been avoiding going back · I kept putting off deciding · I do not mind saying so · it is a lie by omission · I asked twice, with two dates.',
  '**Practise:** Say each with a verb from the list and a length of time.  1 a telephone call you have not made  2 a form you have not filled in  3 a person you have not asked  4 a thing you have not read  5 a sentence you have not said to somebody',
  '**Pronunciation.** 🔊 **Track 18.2** The verb and the _-ing_ run together with no break and the stress stays on the **first** verb: _I\'ve been aVOIDing going back_ · _I kept PUTTing off deciding._ Listen to eight and write the two verbs only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and says what they have been avoiding, how long, and what they were avoiding **finding out**. B asks the question that separates the two verbs. Swap cards.'));
out.push(dlg(null, [
  ['A', 'I have been avoiding __________ for __________.'],
  ['B', 'Did you forget, or were you avoiding it?'],
  ['A', 'Avoiding. I remembered it about __________.'],
  ['B', 'And what were you avoiding finding out?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – what you have been putting off', 'Card B – what you have been putting off'], [
  ['a telephone call to somebody senior', 'a figure you are afraid is worse than you say'],
  ['going back to somebody who said no', 'reading something written about your work'],
  ['a form that will produce a decision', 'telling somebody a thing they will not like'],
  ['asking for something you were refused before', 'finishing a piece of work that is nearly right'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight answers to _what were you avoiding finding out?_ Then count how many of the eight are **a second no**. It is usually three or four, and the pattern is worth naming: a first refusal is heard as being about the thing, and a second refusal is heard as being about you — which is not true and is why nobody goes back.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Name three things you have been putting off at work. For each, say how long, how often you remember it, and whether the honest verb is _forget_ or _avoid_. Then say what you were avoiding finding out.'));
out.push(p('**b**  Swap. Then each of you give your partner **one date** for one of their three, and write it down. You are the record.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna has to write a method statement for the survey — what she measured, how, and what she did not — and writing it has made her see something she has been avoiding seeing for seven weeks. There are two blanks on her sheets, and she has always said so honestly and has been rather proud of admitting them. Both are the rear light well on the second floor, and to measure it she has to get into flat four, and the woman in flat four would not open the door in September. Omar said so she cannot measure it, and she said no: she has not tried again, and that is the thing. She went once, on the eleventh of September, the woman did not open the door, and she has spent seven weeks calling it a blank. Jad asked whether she had forgotten, and she said no — and that is what writing the statement did to her: she remembered it about twice a week for seven weeks. She has been avoiding going back, and she kept putting off deciding when, and she does not mind saying so, because the alternative is a method statement that is a lie by omission. Nour asked what she was avoiding, since it is one woman and a door, and Lubna said: being told no a second time. The first no was about the building; a second no would be about her — and she knows that is not true and has avoided finding out for seven weeks anyway. Then Ms Huda on the language, which is exact: she has not been forgetting to go back, she has been avoiding going back. Forgetting is an accident and costs nothing; avoiding is work, and she did it twice a week for seven weeks on purpose without admitting the purpose. And the verbs Lubna used about herself all take -ing — avoiding going, kept putting off deciding, do not mind saying — and there are about forty in that family, and between them they describe almost everything a person does not do. The statement goes in on the second of December, she is knocking on that door on Saturday morning, and if the answer is no she will write that she asked twice, with two dates._'));
out.push(p('**Listener task:** write one thing from this room that was avoided and not forgotten.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lubna\'s method statement. Answer the questions.'));
out.push(model([
  '**METHOD STATEMENT · 14 SHARIA AL-JALAA · survey of September–November** · L. Sweidan · for submission 2 December',
  '**What the survey involved.** Measuring every room on three floors, recording ceiling heights at two points in each, and photographing all four elevations. Thirty-one rooms, eleven days.',
  '**What I did not measure, and the true reason.** The rear light well on the second floor. Two dimensions are missing. I have written "blank" on those sheets since September and the word is not accurate: I did not fail to get in, I **stopped trying** to get in.',
  '**What I admit.** I admit going once, on 11 September, being refused at the door of flat four, and not going back. I admit remembering it about twice a week for seven weeks. I admit putting off deciding a date, which is not the same as forgetting, and I will not use the word forgot in this statement.',
  '**What I was avoiding.** Being refused a second time. The first refusal was about the building and a second one would have felt as though it were about me, which it would not have been. Seven weeks of that is the whole explanation and there is no better one.',
  '**What I have done since writing the paragraph above.** Knocked on the door of flat four on Saturday 23 November at half past nine in the morning. She opened it. She said she had not opened it in September because a man had come the week before asking about the building and she did not know who I was, and that if I had put a note under the door with my name on it she would have let me in that day.',
  '**What this means for the survey.** The two dimensions are measured. They are 2.10 m and 4.37 m, taken on 23 November, and they are on sheet 2 in a different pen so that it is clear they were taken later.',
  '**What it means for my method, which is the part worth writing down.** A refusal at a door is information about the door, not about the survey and not about me. The correct response to one is a note with a name on it, and the cost of finding that out was seven weeks and two dimensions that I nearly submitted as unobtainable.',
]));
out.push(item('1', 'What two words does she refuse to use in the statement, and why?'));
out.push(item('2', 'What was the real reason the door was not opened in September?'));
out.push(item('3', 'What does she say she nearly submitted, and what does she say the lesson is about method?'));
out.push(writers([
  'A statement about what you did not do: **what the work involved** → **what you did not do, and the true reason** → **what you admit, in _-ing_ verbs** → **what you were avoiding** → **what you have done since writing that paragraph** → **what it means for the work** → **and what it means for your method**.',
  'Refuse the comfortable word out loud. _I have written "blank" since September and the word is not accurate_ · _I will not use the word forgot in this statement._ Naming the word you are not allowed to use is what keeps the rest of the page honest.',
  'Use _admit_ + **-ing** in a list, with dates. _I admit going once, on 11 September · I admit remembering it twice a week · I admit putting off deciding a date._ Three admissions with dates are worth more than one apology.',
  'Then do the thing while the page is open, and write what happened. The best sentence on Lubna\'s page is the one that could not have been written before Saturday — and the answer she got makes seven weeks look very small.',
  '⚠ End on the method, not on the feeling. _A refusal at a door is information about the door._ The page is read by somebody who will survey a building next year, and that sentence is the only part of it they need.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the statement about something you have not done (60 words or more).'));
out.push(p('**METHOD STATEMENT · ______________** · ______________   **What the work involved.** ______________.   **What I did not do, and the true reason.** ______________. I have been calling it ______________ and the word is not accurate.   **What I admit.** I admit ______________, on ______________. I admit ______________ about ______ times a week for ______ weeks. I admit putting off ______________, and I will not use the word ______________ in this statement.   **What I was avoiding.** ______________.   **What I have done since writing the paragraph above.** ______________.   **What this means for the work.** ______________.   **And what it means for my method.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_-ing_ after every verb in the list — no _avoid to_, no _admit to do_',
  '_Admit_ used with dates, not as an apology',
  'The comfortable word named and refused',
  'Something actually done between the fourth paragraph and the fifth',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the comfortable word they have refused to use.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full statement (140 words or more) about a piece of your own work with something missing from it: what it involved, what you did not do and the true verb for why, what you admit with dates, what you were avoiding, what you have done since starting the page, and what it means for your method.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s statement as **the person who will read it in a year and does not know them**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us did the thing between starting the page and finishing it?** Count. That is the whole argument for writing this kind of paragraph at all: a page that forces you to choose between _forgot_ and _avoided_ is a page that usually gets the thing done before it is handed in.'));
out.push(hw('Write the statement (60+ words) with every verb in the right pattern, and do the thing you have been putting off before you finish the page. Write what happened in the sentence that comes after it.'));

// ======================= 18.2 =======================
out.push(pb());
out.push(h2('18.2  What I agreed to and what I refused to do'));
out.push(p('**Function:** saying what you agreed, offered and refused to do   ·   **Grammar:** verb + _to_ + infinitive   ·   **Pronunciation:** the weak _to_ between two verbs'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: something you **agreed to do** this month and something you **refused to do**. Your teacher writes them in two columns, and then asks the question nobody expects: _which of the two is in writing?_'));
out.push(board('I offered to take the escalation calls. I refused to take the Thursday one, and I said why.', 'offer / agree / refuse + to + infinitive'));
out.push(p('**b**  Add _to_ where it belongs. **1** _She agreed ___ send it on Friday._  **2** _He offered ___ come in early._  **3** _They refused ___ put it in writing._  **4** _I managed ___ speak to the supplier._  **5** _We arranged ___ meet on the fifteenth._  **6** _I failed ___ ask for a date._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Nour offer to do, and what did she refuse to do?   **A** the escalation calls; the Thursday one, with a reason   **B** the night shift; the Friday rota   **C** training two juniors; writing the report'));
out.push(p('**b**  Listen again. **1** Why does she say the refusal was the more useful of the two?   **2** What does Ms Huda say these verbs are a record of?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.3  The one I refused', [
  ['Nour', 'Something happened at TechCare last week that I want to say in this room, because it is the first time I have done a thing on purpose that I learnt here.'],
  ['Ms Huda', 'Go on.'],
  ['Nour', 'There are escalation calls — the ones where a customer has already been told something by somebody else and it was wrong. Nobody wants them. They go to whoever is in the room. I offered to take them, all of them, for a month.'],
  ['Omar', 'Why would you offer to do that?'],
  ['Nour', 'Two reasons and one of them is honest. The honest one is that I am eleven months in and I want to be the person who is asked for. The other is that an escalation call is the only call where you find out what the company actually promised, because the customer tells you, at length, and you cannot get that out of our own notes.'],
  ['Jad', 'Both of those are honest.'],
  ['Nour', 'Then both of them are honest. And then on the Thursday I refused one, which is the part I came here to say.'],
  ['Ms Huda', 'Which one?'],
  ['Nour', 'A man who had been promised a replacement unit in forty-eight hours, eleven days ago, by somebody who had no business promising it. My team leader asked me to telephone him and manage his expectations. I refused to make the call, and I said why in one sentence: I am not willing to tell a man his expectations are unreasonable when our own note says forty-eight hours in our own handwriting.'],
  ['Lubna', 'What happened?'],
  ['Nour', 'He went quiet and then he said: fair enough, I will make it. And he made it, and he told the man the truth, and the man has a unit coming on Sunday. Nothing happened to me at all.'],
  ['Ms Huda', 'And which of the two was more useful to you — the offer or the refusal?'],
  ['Nour', 'The refusal, and it took me a week to work out why. The offer made me useful. The refusal made me a person with a limit, and a limit is a thing other people can work with. He knows now what I will not do, which means he knows what I will, and he has asked me for two things since.'],
  ['Ms Huda', 'Now the grammar, and I want you to see what kind of grammar it is. _I offered to take them · I refused to make the call · he agreed to make it himself._ Every one of those takes _to_ and an infinitive, and every one of them is a **record of a commitment**. These are the verbs an argument is settled with in six months — who agreed to what, who offered, who refused, and who failed to. A week described without them is a week in which nobody did anything to anybody.'],
  ['Nour', 'I have written the four lines down with the dates. It took about two minutes.'],
]));
out.push(sp());
out.push(box('Language box – verb + to + infinitive', [
  '**These verbs take _to_ + infinitive and never _-ing_:**',
  table(['the verbs', 'an example'], [
    ['agree · offer · promise · refuse', '_I **refused to make** the call._'],
    ['decide · arrange · plan · intend', '_We **arranged to meet** on the fifteenth._'],
    ['manage · fail · afford · learn', '_He **failed to ask** for a date._'],
    ['hope · expect · want · need · would like', '_I **expect to hear** by Friday._'],
  ], [2.3, 2.3]),
  '**The negative puts _not_ before _to_:** _he **decided not to answer**_ · _she **promised not to tell** anybody_. ⚠ ~~he did not decide to answer~~ means something else: it says he made no decision.',
  '**These are the verbs a dispute is settled with.** _Who agreed to what, who offered, who refused, who failed to._ Each one names a person and a commitment, which is why they disappear from writing that is trying to avoid blame — and why their absence is the first thing to look for in a document about a disagreement.',
  '**A refusal needs a reason in the same sentence, and one sentence is enough.** _I refused to make the call: I am not willing to tell a man his expectations are unreasonable when our own note says forty-eight hours in our own handwriting._ A refusal without a reason is read as unwillingness; a refusal with one is read as a limit.',
  '⚠ ~~I refused making the call~~ · ~~she agreed sending it~~ · ~~he offered coming early~~ → _refused to make_, _agreed to send_, _offered to come_.',
  '⚠ And two verbs that look like this family and are not: _suggest_ and _recommend_ take **-ing** (18.1), not _to_ — ~~I suggest to wait~~.',
  '**Useful phrases:** I offered to take them, all of them, for a month · I refused to make the call, and I said why in one sentence · a limit is a thing other people can work with · he knows now what I will not do, which means he knows what I will.',
  '**Practise:** Say each with the verb given and a date.  1 agree  2 offer  3 refuse _(with a reason)_  4 manage  5 fail',
  '**Pronunciation.** 🔊 **Track 18.4** Between two verbs _to_ is weak — /tə/ — and almost disappears, and the stress goes on **both** verbs: _I reFUSED tə MAKE the call._ Students stress _to_ and lose the second verb. Listen to eight and write the two verbs only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and gives the four lines: what they agreed to, offered to, refused to and failed to do, each with a date. B asks for the reason on the refusal, and then the question that makes the cycle: which of the four is in writing? Swap cards.'));
out.push(dlg(null, [
  ['A', 'I agreed to __________ on the __________. I offered to __________.'],
  ['B', 'And did you refuse anything?'],
  ['A', 'I refused to __________, because __________.'],
  ['B', 'And what did you fail to do?'],
  ['A', 'I failed to __________.'],
  ['B', 'Which of the four is in writing?'],
]));
out.push(table(['Card A – the week', 'Card B – the week'], [
  ['a week at work in which you were asked for three things', 'a week in which you asked for three things'],
  ['a week with one job you should not have taken', 'a week with one job you were right to turn down'],
  ['a week in which somebody promised you something', 'a week in which you promised somebody something'],
  ['the last time you said no to somebody senior', 'the last time you said yes and regretted it'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight refusals, and mark the ones that came **with a reason in the same breath**. Then count what is in writing: of thirty-two commitments in a first run, three or four are in writing, and they are nearly always the ones somebody else made.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your own four lines for last week — agreed, offered, refused, failed — each with a date and, on the refusal, a reason in one sentence.'));
out.push(p('**b**  Swap. Then each of you say which of your partner\'s four lines would be worth putting in writing, to whom, and in how many words.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour said something happened at TechCare last week that she wanted to say in this room, because it was the first time she had done a thing on purpose that she learnt here. There are escalation calls — where a customer has already been told something by somebody else and it was wrong — and nobody wants them, so they go to whoever is in the room. She offered to take them, all of them, for a month. Omar asked why, and she gave two reasons and said one of them was honest, and Jad said both of them were honest, so she agreed they both were: she is eleven months in and wants to be the person who is asked for, and an escalation call is the only call where you find out what the company actually promised, because the customer tells you at length and you cannot get it out of their own notes. Then on the Thursday she refused one, which is the part she came to say. A man had been promised a replacement unit in forty-eight hours, eleven days ago, by somebody with no business promising it, and her team leader asked her to telephone him and manage his expectations. She refused to make the call and said why in one sentence: she is not willing to tell a man his expectations are unreasonable when their own note says forty-eight hours in their own handwriting. He went quiet, said fair enough and that he would make it, and he made it and told the man the truth, and the man has a unit coming on Sunday. Nothing happened to her at all. Ms Huda asked which was more useful, the offer or the refusal, and Nour said the refusal, and that it took her a week to work out why: the offer made her useful, and the refusal made her a person with a limit, and a limit is a thing other people can work with — he knows now what she will not do, which means he knows what she will, and he has asked her for two things since. And the grammar: offered to, refused to, agreed to — every one a record of a commitment, and the verbs an argument is settled with in six months._'));
out.push(p('**Listener task:** write one refusal from this room and the reason that came with it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the four lines Nour writes and sends to her team leader. Answer the questions.'));
out.push(model([
  '**WEEK OF 11–15 NOVEMBER · WHAT I AGREED TO, OFFERED, REFUSED AND FAILED TO DO** · N. Sabbagh · sent Friday 16.40',
  'You said in September that you would rather have four lines on a Friday than a conversation on a Monday. These are the four lines, and the third one is the reason I am sending them.',
  '**What I agreed to.** On Monday I agreed to cover the two o\'clock handover for the rest of November, which is eleven days and about forty minutes each.',
  '**What I offered to.** On Tuesday I offered to take every escalation call for a month. Nobody asked me to. I want to say plainly why, because an offer with a hidden reason behind it becomes a grievance in February: I am eleven months in and I want to be asked for by name, and an escalation call is the only call in which we find out what we actually promised somebody, because the customer tells us and our own notes do not.',
  '**What I refused to do, and why.** On Thursday I refused to telephone the customer with the eleven-day-old forty-eight-hour promise and manage his expectations. My reason, which I gave you at the time and am repeating here so that it is on paper: I am not willing to tell a man his expectations are unreasonable when our own note promises forty-eight hours in our own handwriting. You agreed to make the call yourself and you made it, and he has a unit coming on Sunday.',
  '**What I failed to do.** I failed to write up the Wednesday fault before the end of the week, and it is now four days old, which is three days longer than our own standard. Nobody has asked me for it. I am writing it on Monday morning before anything else.',
  '**And the one request.** When somebody promises a time to a customer, I would like the name of whoever promised it to be in the note. Not to blame anybody — because at the moment the note says forty-eight hours and nothing else, and the person who has to telephone the customer eleven days later is the one who has to defend a sentence they did not write.',
]));
out.push(item('1', 'Why does she explain the reason behind her offer, and what does she say happens otherwise?'));
out.push(item('2', 'Why does she repeat the reason for the refusal in writing when she had already given it?'));
out.push(item('3', 'What is her one request, and what does she say it is not for?'));
out.push(writers([
  'Four lines and a request: **why you are sending it** → **what you agreed to, with the quantity** → **what you offered to do and the honest reason** → **what you refused to do and the reason, repeated for the record** → **what you failed to do, before anybody asks** → **and one request, with what it is not for**.',
  'Put the hidden reason behind an offer on the page. _An offer with a hidden reason behind it becomes a grievance in February._ Nobody owes an employer their motives, but an unexplained generosity is the commonest source of resentment in working life, and the cure is one sentence.',
  'Repeat a spoken refusal in writing, and say that is what you are doing: _which I gave you at the time and am repeating here so that it is on paper._ A spoken refusal has no author in six months.',
  'Report your own failure before it is asked for, with the standard it fell short of and the day you will put it right. _Four days old, which is three days longer than our own standard._',
  '⚠ And make the request about the document, never about the person. _Not to blame anybody — because the person who has to telephone the customer eleven days later is the one who has to defend a sentence they did not write._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own four lines and one request (60 words or more).'));
out.push(p('**WEEK OF ______________ · WHAT I AGREED TO, OFFERED, REFUSED AND FAILED TO DO** · ______________   **What I agreed to.** On ______________ I agreed to ______________, which is ______________.   **What I offered to.** On ______________ I offered to ______________. Nobody asked me to, and I want to say why: ______________.   **What I refused to do, and why.** On ______________ I refused to ______________. My reason, which I gave at the time and am repeating here so that it is on paper: ______________.   **What I failed to do.** I failed to ______________, which is ______________ longer than ______________. I am ______________ on ______________.   **And the one request.** ______________. Not to ______________ — because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_to_ + infinitive after every verb — no _refused making_',
  'A date on all four lines and a quantity on the agreement',
  'The honest reason behind the offer, and the reason inside the refusal',
  'The failure reported before it was asked for, with a day for putting it right',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the honest reason behind their offer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full four lines and request (140 words or more) for a real week of your own: agreed, offered with its honest reason, refused with its reason, failed with its day — and one request about a document rather than a person.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s four lines as **their team leader**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Of all the commitments in this room, how many are in writing?** Count agreed, offered, refused and failed separately. The refusals are almost never in writing and the failures never are — and a refusal that exists only in a conversation has no author six months later, which is the practical reason for the Friday four lines.'));
out.push(hw('Write your four lines (60+ words) and send them to somebody, or put them in a place where you will find them. Then write one line underneath: which of the four you would least like read aloud, and why.'));

// ======================= 18.3 =======================
out.push(pb());
out.push(h2('18.3  Stop to log it, or stop logging it'));
out.push(p('**Function:** using the verbs that change their meaning   ·   **Grammar:** _remember · forget · stop · try · go on_ + _-ing_ or _to_   ·   **Pronunciation:** the stress that separates the two'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher writes two sentences on the board: _I stopped to read it_ and _I stopped reading it_. In pairs, one minute: what is the difference? Then the second pair: _remember to lock the door_ and _remember locking the door_.'));
out.push(board('Stop to log the error. / Stop logging the error.', 'opposite instructions'));
out.push(p('**b**  Which does each mean? **1** _I stopped buying it._ _(a) I used to buy it and I do not now. (b) I interrupted something in order to buy it._  **2** _Remember to telephone her._ _(a) do it. (b) you did it._  **3** _Try asking Omar._ _(a) make an effort. (b) here is a method, see whether it works._  **4** _He went on to explain the form._ _(a) he continued explaining. (b) he moved on to a new thing._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Omar write, what did he mean, and how long did somebody do the opposite?   **A** _stop logging_; he meant _stop to log_; three weeks   **B** _remember locking_; he meant _remember to lock_; a day   **C** _try to ask_; he meant _try asking_; a month'));
out.push(p('**b**  Listen again. **1** How did he find out?   **2** What does Ms Huda say about the five verbs and instruction sheets?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.5  Three weeks of the opposite', [
  ['Omar', 'I wrote four lines of English on a card in October and taped it to a machine, and last Tuesday I found out that one of the four lines says the opposite of what I meant, and that a man has been doing the opposite for three weeks.'],
  ['Ms Huda', 'Read us the line.'],
  ['Omar', '"If the red light comes on twice, stop logging the error and call me." What I meant was: pause what you are doing, write the error down, and then telephone me. What I wrote tells him to **give up** writing errors down.'],
  ['Jad', 'And he gave up writing them down.'],
  ['Omar', 'He gave up writing them down. For three weeks. He is a careful man and he followed my instruction exactly, and he telephoned me every time, and I kept saying "and what was the code?" and he kept saying "you told me not to write them". And I kept hearing that as him being difficult.'],
  ['Nour', 'How did you find out?'],
  ['Omar', 'He brought the card to me on Tuesday and put it on the desk and pointed at the line with his finger. He had been reading it every time for three weeks because he did not want to get it wrong, and he was right every time, and I was wrong once, in October, in two words.'],
  ['Lubna', 'Did he know it was a mistake?'],
  ['Omar', 'He said: "I thought there was a reason." That sentence is the worst thing about the whole business. He thought there was a reason, so he did a thing that made no sense to him for three weeks because somebody who writes the cards must know something he does not.'],
  ['Ms Huda', 'Say what you lost.'],
  ['Omar', 'Three weeks of error codes on the machine that has been giving the most trouble, which is exactly the three weeks I needed, because the engineer asked for them on Wednesday. They do not exist. I had seven and I should have had about thirty.'],
  ['Ms Huda', 'Now the class. There are five verbs in English that take both patterns and mean **different things** with each — _remember, forget, stop, try, go on_ — and they are not a curiosity. Every one of them appears in instructions, in handovers, in procedures and on cards taped to machines. _Stop to log_ and _stop logging_ are opposite instructions. _Remember to lock it_ is an instruction and _remember locking it_ is a question about your memory. _Try asking him_ offers a method; _try to ask him_ says it will be difficult. And the person who follows your sheet will assume, as that man did, that there is a reason.'],
  ['Omar', 'I have rewritten the card with no clever verbs in it at all. "If the red light comes on twice: **1** write down the code. **2** telephone me." Two lines, two numbers, no _stop_.'],
  ['Ms Huda', 'Which is the right answer and the one professional writers of procedures reach in the end. When a verb has two meanings, do not pick the right one — **remove the verb**.'],
]));
out.push(sp());
out.push(box('Language box – the five verbs that change meaning', [
  table(['with -ing', 'with to + infinitive'], [
    ['_**stop logging** it_ = give it up altogether', '_**stop to log** it_ = pause in order to do it'],
    ['_I **remember locking** it_ = I have the memory', '_**remember to lock** it_ = do not forget to do it'],
    ['_I\'ll never **forget seeing** it_ = the memory stays', '_I **forgot to tell** her_ = I did not do it'],
    ['_**try asking** Omar_ = a method; see if it works', '_**try to ask** Omar_ = make the effort; it is hard'],
    ['_he **went on talking**_ = he continued', '_he **went on to explain**_ = he moved to a new thing'],
  ], [2.3, 2.3]),
  '**The pattern behind the pattern, which makes four of the five easy:** the **-ing** form looks **backwards** to something already happening or already remembered, and the **to** form looks **forwards** to a new action. _Stop_ + -ing: the thing was happening. _Stop_ + to: a new action starts.',
  '**_Try_ is the odd one and the most useful.** _Try asking him_ is generous — it offers a method and expects it may not work. _Try to ask him_ warns that the asking itself is the difficulty. In a workplace the first is advice and the second is sympathy, and students use the second when they mean the first.',
  '⚠ **In instructions, do not choose between them — remove them.** _If the red light comes on twice: 1 write down the code. 2 telephone me._ A numbered pair of plain imperatives cannot be misread, and every professional procedure in the world is written that way for exactly this reason.',
  '**And remember what the man said, because it is the reason this cycle is in the book:** _I thought there was a reason._ A person following your instruction will do a thing that makes no sense to them, for weeks, on the assumption that you know something they do not.',
  '**Useful phrases:** one of the four lines says the opposite of what I meant · he followed my instruction exactly and he was right every time · I thought there was a reason · when a verb has two meanings, remove the verb.',
  '**Practise:** Say both versions and say which you would put on a card.  1 stop / check the oil  2 remember / sign the sheet  3 try / telephone the office  4 forget / tell the night staff  5 go on / read the second page',
  '**Pronunciation.** 🔊 **Track 18.6** The two patterns are separated by stress and by the pause: _stop LOGging it_ runs as one piece, and _STOP ‖ to LOG it_ has a break after _stop_. Listen to eight and write _-ing_ or _to_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a line from the card as written. B says what it actually instructs, says what it probably meant, and then rewrites it as two numbered imperatives with no clever verb in it. Swap cards.'));
out.push(table(['Card A – lines as written', 'Card B – lines as written'], [
  ['_Stop filling in the top section._', '_Remember signing the handover._'],
  ['_Try to use the second scale._', '_Forget telling the day staff._'],
  ['_Go on counting after the fifth tray._', '_Stop to weigh every tenth box._'],
  ['_Remember to keep the old sheets._', '_Try asking for the batch number._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight rewritten lines. Then the count that matters: how many of the eight originals could be read **both** ways by somebody who did not already know the answer? Usually six or seven — and in every one of those cases a careful reader will choose the wrong one and assume there is a reason.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Bring to mind any instruction you have written or been given — a card, a note, a procedure, a message. Read it aloud and find any of the five verbs in it. Say what it instructs and what it probably meant.'));
out.push(p('**b**  Swap. Then each of you rewrite one of your partner\'s lines as numbered imperatives, and your partner says whether the meaning survived.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar wrote four lines of English on a card in October and taped it to a machine, and last Tuesday he found out that one of the four says the opposite of what he meant and that a man has been doing the opposite for three weeks. The line is: "If the red light comes on twice, stop logging the error and call me." What he meant was pause, write the error down, then telephone him. What he wrote tells the man to give up writing errors down — and the man gave up writing them down, for three weeks. He is careful, he followed the instruction exactly, he telephoned every time, and Omar kept asking what the code was and he kept saying "you told me not to write them", and Omar kept hearing that as him being difficult. He found out because the man brought the card to the desk on Tuesday and pointed at the line with his finger: he had been reading it every time for three weeks because he did not want to get it wrong, and he was right every time, and Omar was wrong once, in October, in two words. Lubna asked whether he knew it was a mistake, and he had said: "I thought there was a reason" — which Omar says is the worst thing about the whole business, because he did a thing that made no sense to him for three weeks on the assumption that whoever writes the cards knows something he does not. What was lost is three weeks of error codes on the machine giving the most trouble, which is exactly the three weeks the engineer asked for on Wednesday: there are seven and there should be about thirty. Ms Huda named the five verbs that take both patterns and mean different things — remember, forget, stop, try, go on — and said they are not a curiosity, because every one of them turns up in instructions, handovers and procedures. And Omar has rewritten the card with no clever verbs at all: "1 write down the code. 2 telephone me." Two lines, two numbers, no stop — which Ms Huda said is where professional writers of procedures end up: when a verb has two meanings, do not pick the right one, remove the verb._'));
out.push(p('**Listener task:** write one line from this room that could be read both ways.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Omar writes and tapes over the old card, and sends to the two other sites. Answer the questions.'));
out.push(model([
  '**THE LINE I WROTE AND THE LINE I MEANT** · O. Darwish · 20 November · sent to both other sites',
  '**The card as it stood from 2 October to 19 November.** _"If the red light comes on twice, stop logging the error and call me."_',
  '**What I meant.** Pause whatever you are doing, write the error code down, and then telephone me.',
  '**What it says.** Give up writing error codes down, and telephone me. Those are opposite instructions and the difference is one word: _stop logging_ against _stop to log_.',
  '**What happened.** Abu Ziad followed the card exactly for three weeks. He telephoned me every time the light came on, and every time I asked for the code, and every time he told me that the card said not to write them. I heard that as obstruction for three weeks. He was right every time and I was wrong once, in October, in two words.',
  '**What it cost.** Three weeks of codes on the machine that has given the most trouble this year — the three weeks the engineer asked for on 19 November. I can give him seven codes. There should be about thirty.',
  '**What he said when he brought me the card, and I am putting it in this note on purpose.** _"I thought there was a reason."_ He did something that made no sense to him for three weeks because he assumed that whoever writes the cards knows something he does not. That is not a fault of his. It is what a careful person does with a written instruction, and it is the reason a badly written card is more dangerous than no card at all.',
  '**The card as it now stands.** _"If the red light comes on twice: **1** write down the code and the time. **2** telephone me."_ Two numbered lines, two plain imperatives, and not one of the five verbs that can be read two ways.',
  '**And the rule I am asking both other sites to adopt.** No instruction on any card to contain _stop_, _try_, _remember_, _forget_ or _go on_. If you need one of them, you need two numbered lines instead. It takes four seconds longer to write and it cannot be read the wrong way round.',
]));
out.push(item('1', 'What is the difference in meaning between the two versions of the line, and how many words is it?'));
out.push(item('2', 'What does Omar say about Abu Ziad\'s sentence, and why does he put it in the note on purpose?'));
out.push(item('3', 'What rule is he asking the other sites to adopt, and what does it cost?'));
out.push(writers([
  'A correction note about an instruction: **the line as it stood, with its dates** → **what you meant** → **what it says** → **what happened, and who was right** → **what it cost, in a number** → **what the person said** → **the line as it now stands** → **and the rule you are asking for**.',
  'Quote your own bad line in full and do not paraphrase it. The note has no force unless the reader can see that the two versions differ by one word.',
  'Say who was right. _He was right every time and I was wrong once, in October, in two words._ A correction note that spreads the fault is read as a defence; one that places it is read as a correction.',
  'Quote the sentence the other person said, and say why you are quoting it. _"I thought there was a reason."_ It is the sentence that turns your mistake into everybody\'s problem, which is what makes the note worth sending to two other sites.',
  '⚠ End with a rule somebody can follow without understanding the grammar: **no _stop_, _try_, _remember_, _forget_ or _go on_ on any card.** A rule that requires the reader to know the difference between two patterns will not survive the year.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the correction note about an instruction (60 words or more).'));
out.push(p('**THE LINE I WROTE AND THE LINE I MEANT** · ______________   **The instruction as it stood from ______________ to ______________.** "______________"   **What I meant.** ______________.   **What it says.** ______________. The difference is ______________ word(s).   **What happened.** ______________ followed it exactly for ______________. ______________ was right every time and I was wrong once, in ______________.   **What it cost.** ______________.   **What ______________ said when ______________.** "______________."   **The instruction as it now stands.** "______________: **1** ______________. **2** ______________."   **And the rule I am asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both versions of the line quoted in full, word for word',
  'The two meanings stated as opposite, not as unclear',
  'The cost in a number, and the fault placed',
  'The rewrite as numbered imperatives with none of the five verbs',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their own bad line and its rewrite.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full correction note (140 words or more) about an instruction you have written or received that could be read two ways: both versions quoted, what happened, who was right, what it cost, the rewrite as numbered imperatives, and the rule you are asking for.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s note as **the person who followed the instruction**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many instructions in this room contain one of the five verbs?** Count. Then the harder question: how many of us have ever asked somebody who followed one of our instructions whether it made sense to them? Almost nobody — and _I thought there was a reason_ is what a careful person does instead of asking.'));
out.push(hw('Write the correction note (60+ words). Then find one real instruction where you work — a card, a notice, a procedure, a message you sent — and rewrite it as numbered imperatives with none of the five verbs in it. Bring both versions.'));

// ======================= 18.4 =======================
out.push(pb());
out.push(h2('18.4  Willing to, responsible for, afraid of'));
out.push(p('**Function:** saying what you are willing to do and responsible for   ·   **Grammar:** adjective + _to_ · preposition + _-ing_   ·   **Pronunciation:** the weak forms of _to_, _of_, _for_, _in_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Two sentences each: one beginning _I am willing to…_ and one beginning _I am responsible for…_. Your teacher writes them in two columns and then asks the question the cycle is about: _which of the two is written down anywhere?_'));
out.push(board('I am willing to answer anything about the code. I am not willing to say what I think of somebody\'s work in public.', 'adjective + to · preposition + -ing'));
out.push(p('**b**  _To_ or _-ing_? **1** _I am interested in ___ (answer) the hard ones._  **2** _I am willing ___ (work) at the weekend._  **3** _I am responsible for ___ (check) the second page._  **4** _He is good at ___ (explain) it twice._  **5** _She is afraid ___ (ask), and he is afraid of ___ (be asked)._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Jad say he is afraid of, and how is it different from what people assumed?   **A** being asked, not asking   **B** asking, not being asked   **C** being wrong in writing'));
out.push(p('**b**  Listen again. **1** What has he been asked to write, and what does he say the hard line is?   **2** What does Ms Huda say the difference is between _afraid to_ and _afraid of_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.7  Nine lines about myself', [
  ['Jad', 'The forum has asked four of us to write a profile line, because they are putting names next to answers from January. Nine lines maximum. I have been at it for five days and I have written about forty versions.'],
  ['Omar', 'Nine lines in five days.'],
  ['Jad', 'Nine lines in five days, and I have answered nine hundred questions in two years without thinking about any of them. The questions are about the code. The nine lines are about me.'],
  ['Ms Huda', 'Read us what you have.'],
  ['Jad', '"I am interested in answering the questions nobody else answers — the ones with no error message in them. I am good at explaining the same thing a second way. I am willing to say I do not know. I am responsible for about nine hundred answers since 2024, and I can show you the ones I got wrong."'],
  ['Nour', 'That is good. That is better than good.'],
  ['Jad', 'The four lines are easy. It is the fifth that has taken five days, and I have not written it yet, and I am going to say it here first because I will not write it until I have said it out loud. I am not afraid of being wrong. I am afraid of **being asked**.'],
  ['Lubna', 'Those sound like the same thing.'],
  ['Jad', 'They are opposite things. Being wrong is about an answer. Being asked is about me — somebody chooses me, by name, out of everybody, and then there is no error message to hide behind and no three hours at one in the morning to compose it in. If my name is next to my answers from January, people will ask me directly, and that is what I have wanted for two years and it is also the thing I have been avoiding thinking about since the email came.'],
  ['Ms Huda', 'And in English the two are one small word apart, which is worth the whole class noticing. _Afraid **to** ask_ is about the action — I will not do it. _Afraid **of** being asked_ is about the situation — I do not want it to happen to me. Most people in a classroom say the first when they mean the second, because the first sounds like shyness and the second sounds like something worth examining.'],
  ['Jad', 'And they need different answers. If I were afraid to ask, I would just ask. There is nothing to do about being afraid of being asked except be asked.'],
  ['Ms Huda', 'There is one thing. Write the ninth line about it. A profile that says what you are willing to do is useful; a profile that says what you are not comfortable with and does it anyway is a different document, and you cannot be ambushed by a thing you have published about yourself.'],
  ['Jad', 'Then the ninth line is: "I am not used to being asked by name, and I would rather you did it anyway."'],
]));
out.push(sp());
out.push(box('Language box – adjective + to, preposition + -ing', [
  '**After an adjective, _to_ + infinitive:**',
  table(['the adjective', 'an example'], [
    ['willing · able · ready · prepared', '_I am **willing to say** I do not know._'],
    ['glad · pleased · sorry · surprised', '_I was **surprised to find** it in the drawer._'],
    ['difficult · easy · important · necessary', '_It is **difficult to explain** twice._'],
  ], [2.3, 2.3]),
  '**After a preposition, always _-ing_** — because a preposition cannot be followed by an infinitive: _interested **in answering**_ · _responsible **for checking**_ · _good **at explaining**_ · _instead **of waiting**_ · _without **asking**_ · _before **sending**_ · _used **to working**_ (17.3, and the same rule).',
  table(['the phrase', 'an example'], [
    ['interested in · good at · bad at', '_I am **good at explaining** it a second way._'],
    ['responsible for · in charge of', '_I am **responsible for checking** page two._'],
    ['afraid of · worried about · tired of', '_I am **afraid of being asked**._'],
    ['instead of · without · after · before', '_He signed it **without reading** it._'],
  ], [2.3, 2.3]),
  '⚠ **_Afraid to_ and _afraid of_ are not the same.** _Afraid **to** ask_ = about the **action**; I will not do it. _Afraid **of** being asked_ = about the **situation**; I do not want it to happen to me. The first is cured by doing it; the second is not, and calling the second the first is why people spend years working on the wrong problem.',
  '⚠ ~~I am interested in to answer~~ · ~~responsible for to check~~ · ~~good at to explain~~ → always _-ing_ after a preposition. No exceptions anywhere in the language.',
  '**And the use this cycle is for: a statement of what you will and will not do.** _Willing to_ and _not willing to_ draw a line other people can work with (18.2) — and a line you publish about yourself cannot be used to ambush you.',
  '**Useful phrases:** I am willing to say I do not know · I am responsible for about nine hundred answers and I can show you the ones I got wrong · I am good at explaining the same thing a second way · I would rather you did it anyway.',
  '**Practise:** Make each one true about you, in one sentence.  1 _willing to_  2 _not willing to_  3 _responsible for_  4 _good at_  5 _afraid of_ _(not afraid to)_',
  '**Pronunciation.** 🔊 **Track 18.8** The little words are all weak — _to_ /tə/, _of_ /əv/, _for_ /fə/, _in_ /ɪn/ — and the stress lands on the adjective and on the _-ing_ verb: _I\'m WILLing tə SAY_ · _afRAID əv being ASKED._ Listen to eight and write the preposition only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and gives five lines about themselves — willing to, not willing to, responsible for, good at, and afraid of (not afraid to). B asks the question that makes the last line worth something. Swap cards.'));
out.push(dlg(null, [
  ['A', 'I am willing to __________. I am not willing to __________.'],
  ['B', 'And what are you responsible for?'],
  ['A', 'I am responsible for __________. I am good at __________.'],
  ['B', 'And what are you afraid of?'],
  ['A', 'I am afraid of __________ — not afraid to __________.'],
  ['B', 'Is it the action or the situation?'],
]));
out.push(table(['Card A – write it for…', 'Card B – write it for…'], [
  ['a profile next to your name at work', 'the person who will do your job after you'],
  ['a new colleague on their first morning', 'an interview next month'],
  ['the person who manages you', 'a committee you have been asked to join'],
  ['a form that asks what you can offer', 'yourself, to be read in a year'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight _afraid of_ lines and mark each **action** or **situation**. Then count. Most are situations described as actions — _afraid to speak_ for _afraid of being judged_, _afraid to ask_ for _afraid of being refused_ — and the two need completely different things done about them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your five lines, about your real work, to be read by a real person you can name. Then the sixth: the one thing you are not comfortable with and would rather happened anyway.'));
out.push(p('**b**  Swap. Then each of you say which of your partner\'s five lines you would put **first**, and which you think they have understated.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The forum has asked four of them to write a profile line, because names are going next to answers from January, nine lines maximum, and Jad has been at it for five days and has written about forty versions — nine lines in five days, against nine hundred questions in two years that he never thought about, because the questions are about the code and the nine lines are about him. What he has so far: he is interested in answering the questions nobody else answers, the ones with no error message in them; he is good at explaining the same thing a second way; he is willing to say he does not know; and he is responsible for about nine hundred answers since 2024 and can show you the ones he got wrong. But the fifth line has taken five days and is not written, and he said it out loud in the room first because he will not write it until he has: he is not afraid of being wrong, he is afraid of being asked. Lubna said those sound like the same thing, and he said they are opposite — being wrong is about an answer, being asked is about him, because somebody chooses him by name out of everybody and then there is no error message to hide behind. If his name is next to his answers from January, people will ask him directly, which is what he has wanted for two years and also the thing he has been avoiding thinking about since the email came. Ms Huda said the two are one small word apart: afraid to ask is about the action, afraid of being asked is about the situation, and most people say the first when they mean the second, because the first sounds like shyness and the second sounds like something worth examining. Jad said they need different answers — if he were afraid to ask he would just ask, and there is nothing to do about being afraid of being asked except be asked. Ms Huda said there is one thing: write the ninth line about it, because you cannot be ambushed by a thing you have published about yourself. So the ninth line is: "I am not used to being asked by name, and I would rather you did it anyway."_'));
out.push(p('**Listener task:** write one _afraid of_ from this room, and whether it is an action or a situation.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the nine lines Jad sends. Answer the questions.'));
out.push(model([
  '**PROFILE · J. ATTAR · for the answers page from January** · nine lines, sent 21 November',
  '**1** I am interested in answering the questions nobody else answers — the ones with no error message in them, where somebody has to read the whole thing and guess what the person was trying to do.',
  '**2** I am good at explaining the same thing a second way. I am not better than other people at explaining it the first way, and the second way is where most answers are actually won.',
  '**3** I am willing to say that I do not know. I have done it one hundred and four times, which I know because I searched my own answers before writing this line.',
  '**4** I am responsible for about nine hundred answers since the spring of 2024. Twenty-two of them are wrong and I have left all twenty-two up with a correction underneath, and I can give you the list.',
  '**5** I am not willing to answer a question about hardware I have never had in my hands. I have refused about thirty of those and I will go on refusing them, because an answer like that is a guess wearing an answer\'s clothes.',
  '**6** I am bad at short answers. The honest version is that a long answer is safer for the person writing it and more work for the person reading it.',
  '**7** I am nineteen. I said that in May, two readers stopped answering me and four did not, and I have decided to keep saying it.',
  '**8** I am used to working at one in the morning with nobody waiting for me, and I am getting used to the idea that from January somebody will be.',
  '**9** I am not used to being asked by name, and I am not comfortable with it, and I would rather you did it anyway. I am putting that in writing so that nobody has to wonder, including me.',
]));
out.push(item('1', 'Which lines contain a number, and what does each number do for the line?'));
out.push(item('2', 'What does he refuse to do, and what reason does he give?'));
out.push(item('3', 'Why does he put line 9 in writing, and whom does he say it is for?'));
out.push(writers([
  'Nine lines about yourself: **what you are interested in doing** → **what you are good at, narrowly** → **what you are willing to admit** → **what you are responsible for, with the quantity and the errors** → **what you are not willing to do, and why** → **what you are bad at** → **a fact about you that costs you something** → **what you are used to and getting used to** → **and the line you are not comfortable with, published on purpose**.',
  'Narrow every claim until it is checkable. Not _good at explaining_ but _good at explaining the same thing a second way_ — and then the sentence that gives it away: _I am not better than other people at explaining it the first way._',
  'Put the number on the responsibility **and** on the errors. _About nine hundred answers; twenty-two of them wrong, all twenty-two still up with a correction underneath, and I can give you the list._ The error count is what makes the first number believable.',
  'Say what you are not willing to do, with the reason inside the sentence: _an answer like that is a guess wearing an answer\'s clothes._ A profile with no refusal in it is an advertisement.',
  '⚠ And publish the uncomfortable line. _I am not comfortable with it and I would rather you did it anyway._ It cannot then be used against you, and it is the only line on the page that nobody else could have written.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own nine lines (60 words or more — it is nine short lines, not a paragraph).'));
out.push(p('**PROFILE · ______________ · for ______________**   **1** I am interested in ______________ — ______________.   **2** I am good at ______________. I am not better than other people at ______________.   **3** I am willing to ______________. I have done it ______________ times.   **4** I am responsible for ______________ since ______________. ______________ of them ______________.   **5** I am not willing to ______________, because ______________.   **6** I am bad at ______________. I know it, and the honest version is ______________.   **7** ______________ _(a fact about you that costs you something)_.   **8** I am used to ______________, and I am getting used to ______________.   **9** I am not comfortable with ______________, and I would rather you ______________ anyway.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_to_ after every adjective, _-ing_ after every preposition',
  'Every claim narrowed until somebody could check it',
  'A quantity on the responsibility and a count of the errors',
  'One refusal with its reason, and the uncomfortable line published',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the line they are not comfortable with.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your nine lines in full (140 words or more) for a real reader you can name — narrowed claims, a quantity and an error count, one refusal with its reason, one fact that costs you something, and the published uncomfortable line.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s nine lines as **the reader they named**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the nine-line profiles in this room contain a refusal?** Count. Then the second count: how many contain a number that could be checked? A page with neither is an advertisement, and the reason this cycle exists is that most adults have never written a line about their own work that somebody could test.'));
out.push(hw('Write your nine lines (60+ words) and send them to the reader you named, or put them where that reader will see them. Then write one line underneath: which of the nine you expect to be asked about first.'));

// ======================= 18.5 =======================
out.push(pb());
out.push(h2('18.5  Who asked whom to do what'));
out.push(p('**Function:** saying who asked, told, advised or warned whom to do what   ·   **Grammar:** verb + object + _to_ + infinitive   ·   **Pronunciation:** the stress on the person'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each, and it must have **two people** in it: _______ asked _______ to _______._ Something that really happened this month. Your teacher writes only the pairs of names on the board, and the class looks at how many of the eleven sentences have the same name twice.'));
out.push(board('I asked Abu Fadi to find the delivery notes, and he told me to write to the distributor.', 'ask / tell / advise / remind / warn + somebody + to'));
out.push(p('**b**  Correct the five. **1** _He suggested me to wait._  **2** _She explained me the form._  **3** _They promised me to send it._  **4** _I advised to him to ask._  **5** _He told to me that it was closed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mazen find when he puts the names into his letter?   **A** that four people are involved and his old letter named none of them   **B** that the distributor never replied   **C** that the two shops disagree'));
out.push(p('**b**  Listen again. **1** What was wrong with the sentence he had written in October?   **2** What does Ms Huda say a passive with nobody in it does to a complaint?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.9  Four people and nobody named', [
  ['Mazen', 'I have been writing this letter to the distributor since October and I could not see what was wrong with it. Nour read it on Tuesday and asked me one question and the whole thing fell over.'],
  ['Nour', 'I asked him who.'],
  ['Mazen', 'She asked me who. The first sentence of my letter said: "It was agreed in March that faulty units would be replaced within thirty days." And she asked: agreed by whom, with whom, and who told you so?'],
  ['Omar', 'And?'],
  ['Mazen', 'And I know all three answers and not one of them was in the letter. A man called Issam Haddad, on the telephone, in the first week of March, told me that faulty units would be replaced within thirty days. He is the one who later asked me which batch my fifteen came from. I have his name, I know the week, and I wrote a sentence with nobody in it.'],
  ['Lubna', 'Why did you?'],
  ['Mazen', 'Because it sounded more official. I thought a letter with names in it sounded like a complaint about people and a letter with no names in it sounded like business. It is the other way round.'],
  ['Ms Huda', 'Say what the new first page has in it.'],
  ['Mazen', 'Four people. Issam Haddad told me in March that they would be replaced in thirty days. I asked Abu Fadi in Mezzeh to find his delivery notes, and he found eight. I asked the man in Shaalan to do the same, and he refused, so I asked Abu Fadi to telephone him, and he persuaded him to check: eleven of the fifteen came from one batch. And Issam Haddad himself advised me to put the batch numbers in writing — a sentence I would be mad not to quote, because the person telling me to write the letter is the person it goes to.'],
  ['Jad', 'He told you how to complain to him.'],
  ['Mazen', 'He told me how to complain to him, and I sat on that for six weeks because I thought names were impolite.'],
  ['Ms Huda', 'Now the class, because this is the most useful grammar in the book for anybody who has to settle anything. _Ask · tell · advise · remind · warn · persuade · allow · expect · want_ all take **a person** and then _to_ + infinitive, and that person is the whole point of the pattern. _It was agreed_ has no author, so nobody has to answer it. _Issam Haddad told me on the telephone in the first week of March_ has an author, a channel and a date, and it has to be answered by somebody.'],
  ['Mazen', 'The old letter was two pages. The new one is one page and it has nine names and dates on it.'],
  ['Ms Huda', 'And two warnings for everybody\'s English. ⚠ _Suggest_ and _recommend_ do **not** take this pattern — not _he suggested me to wait_ but _he suggested that I should wait_ or _he suggested waiting_. And ⚠ _explain_ never takes a person straight after it: not _she explained me the form_ but _she explained the form **to** me_. Those two are the commonest mistakes in this room and they have been since Unit 1.'],
]));
out.push(sp());
out.push(box('Language box – verb + object + to + infinitive', [
  '**These verbs need a person between the verb and _to_:**',
  table(['the verbs', 'an example'], [
    ['ask · tell · advise · remind · warn', '_Issam Haddad **advised me to** put it in writing._'],
    ['persuade · encourage · invite · order', '_He **persuaded him to** check the notes._'],
    ['allow · permit · forbid · force', '_They **allowed me to** keep the old sheets._'],
    ['want · expect · would like · need', '_I **want them to** answer by the fifteenth._'],
  ], [2.3, 2.3]),
  '**The negative puts _not_ before _to_:** _he **told me not to** write them down_ (18.3, and look what that cost) · _she **warned me not to** sign it._',
  '**This is the pattern that settles disputes, because every use of it names somebody.** _It was agreed that units would be replaced_ has no author, no date and no channel, so nobody has to answer it. _Issam Haddad told me on the telephone in the first week of March that units would be replaced within thirty days_ has all three, and it has to be answered by a person.',
  '⚠ **A letter with names in it is not a complaint about people.** It is the opposite: a letter with no names in it has to be answered by nobody, which is why nothing happens to it. Put the name, the channel and the week against every claim you make.',
  '⚠ **_Suggest_ and _recommend_ do not take this pattern.** ~~He suggested me to wait~~ → _he suggested **that I should wait**_ / _he suggested **waiting**_. ~~She recommended me to ask~~ → _she recommended **asking**_. This is the single commonest error in the book.',
  '⚠ **_Explain_, _describe_, _say_ and _report_ never take a person straight after them.** ~~She explained me the form~~ → _she explained the form **to** me_. ~~He said me~~ → _he **told** me_ / _he **said to** me_.',
  '**Useful phrases:** she asked me who · agreed by whom, with whom, and who told you so? · the person telling me to write the letter is the person the letter goes to · I sat on that for six weeks because I thought names were impolite.',
  '**Practise:** Put a name and a date into each.  1 _I asked ___ to ___ ._  2 ____ told me to ___ ._  3 ____ advised me to ___ ._  4 _I reminded ___ to ___ ._  5 ____ warned me not to ___ ._',
  '**Pronunciation.** 🔊 **Track 18.10** The stress goes on the **person**, because the person is the news: _ISSam hadDAD told ME to put it in writing_ · _I asked aBU FAdi to find them._ Listen to eight and write the two people only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a card and tells the story in four sentences, each with **a named person, a channel and a week** in it. B listens and then does one thing only: says which sentence has nobody in it. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________ told me in __________, by __________, that __________.'],
  ['A', 'I asked __________ to __________.'],
  ['A', '__________ advised me to __________.'],
  ['A', 'And I reminded __________ to __________.'],
  ['B', 'Which of the four has nobody in it?'],
]));
out.push(table(['Card A – the story', 'Card B – the story'], [
  ['something you were promised and have not had', 'something you were told you could not have'],
  ['a decision you were told about afterwards', 'a rule you were told to follow and nobody can name'],
  ['a piece of advice that turned out to be right', 'a warning you were given and ignored'],
  ['a thing somebody persuaded you to do', 'a thing you persuaded somebody to do'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** count the sentences with nobody in them. In a first run it is between a third and a half of all sentences spoken, and the missing person is nearly always the one who gave the instruction — which is why nobody ever answers for it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner something unresolved at your own work, in sentences that every one have a named person, a channel and a week. When you cannot name somebody, say so out loud: _I do not know who told me that._'));
out.push(p('**b**  Swap. Then each of you say which missing name your partner could still find out, and how.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen has been writing this letter to the distributor since October and could not see what was wrong with it, and Nour read it on Tuesday, asked one question and the whole thing fell over. She asked him who. The first sentence said: "It was agreed in March that faulty units would be replaced within thirty days." And she asked: agreed by whom, with whom, and who told you so? He knows all three answers and not one was in the letter — a man called Issam Haddad, on the telephone, in the first week of March, told him that faulty units would be replaced within thirty days, and he is the same man who later asked which batch the fifteen came from. Mazen wrote a sentence with nobody in it because he thought it sounded more official: a letter with names in it sounded to him like a complaint about people and one with no names sounded like business, and he says it is the other way round. The new first page has four people on it. Issam Haddad told him in March. He asked Abu Fadi in Mezzeh to find his delivery notes and he found eight. He asked the man in Shaalan to do the same and he refused, so he asked Abu Fadi to telephone him, and Abu Fadi persuaded him to check, and eleven of the fifteen came from one batch. And Issam Haddad himself advised him to put the batch numbers in writing — a sentence Mazen would be mad not to quote, because the person telling him to write the letter is the person the letter goes to. Mazen sat on it for six weeks because he thought names were impolite. The old letter was two pages; the new one is one page with nine names and dates on it._'));
out.push(p('**Listener task:** write one sentence from this room that had nobody in it, and the name that belongs in it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the first page of Mazen\'s new letter. Answer the questions.'));
out.push(model([
  '**TO THE REGIONAL SALES OFFICE · claim for fifteen handsets, counter 2, Shaalan branch** · M. Hariri · 24 November',
  'I wrote to you in October. That letter said that it had been agreed in March that faulty units would be replaced within thirty days. I am writing again because that sentence had nobody in it, and this one does.',
  '**Who told me, when, and how.** Mr Issam Haddad, of your office, told me on the telephone in the first week of March that faulty units would be replaced within thirty days. I did not minute the call and I am not claiming more than I can support: a telephone call, that week, that sentence.',
  '**What I asked, and whom.** I asked Abu Fadi at the Mezzeh branch to find his delivery notes, and he found eight of the fifteen. I asked the Shaalan counter to do the same and was refused; I then asked Abu Fadi to telephone him, and he persuaded him to check, which produced the remaining seven.',
  '**What the notes show.** Eleven of the fifteen came from one batch — the January-to-March batch — and four did not. I had predicted twelve, and eleven is what the paper says, and I am giving you the figure that is on the paper and not the one I predicted.',
  '**Who advised me to write this.** Mr Issam Haddad. On 14 October he asked me which batch the fifteen came from, and when I said I did not know he advised me to put the batch numbers in writing. This letter is that, eleven days later than it should have been, and the delay is mine.',
  '**What I am asking you to do, and by when.** I am asking you to tell me, by 8 December, whether the January-to-March batch of that model has an adhesive specification different from the batches before and after it. I am not asking you to replace anything in this letter and I am not making a claim in it.',
  '**And what I shall do if I have no answer.** I shall write again on 9 December, attaching this letter and the fifteen dates, and copy it to the Mezzeh branch, because Abu Fadi has eight of the notes and an interest in the answer.',
]));
out.push(item('1', 'What does he say was wrong with the October letter, in one phrase?'));
out.push(item('2', 'Which figure does he give, and why does he say he is giving that one?'));
out.push(item('3', 'What is he asking for, and what does he say twice that he is not doing?'));
out.push(writers([
  'A letter that names everybody: **what was wrong with your last letter** → **who told you, when and how** → **what you asked, and whom** → **what the paper shows** → **who advised you to write** → **what you are asking, by when, and what you are not asking** → **and what you will do if there is no answer**.',
  'Name the channel and limit the claim in the same sentence: _a telephone call, that week, that sentence._ A named source with an admitted limit is stronger than an unnamed source with none, because the reader can check it and therefore believes the rest.',
  'Give the figure the paper shows, not the figure you predicted — and say you are doing it. _I had predicted twelve, and eleven is what the paper says._ One sentence of that kind buys the whole letter.',
  'Quote the person you are writing to, if they told you how to do it. _Mr Haddad advised me to put the batch numbers in writing. This letter is that._ A request that the reader has already recommended is very hard to refuse.',
  '⚠ And ask for **one thing, by one date**, and say what you are not asking for. A letter that asks for a specification cannot be answered with a refusal to replace anything.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first page of a letter about something unresolved, with a person in every sentence (60 words or more).'));
out.push(p('**TO ______________** · ______________   I wrote to you in ______________. That letter said ______________. I am writing again because that sentence had nobody in it.   **Who told me, when, and how.** ______________ told me ______________, by ______________, that ______________. I am not claiming more than I can support: ______________.   **What I asked, and whom.** I asked ______________ to ______________. I asked ______________ to ______________ and was refused. I then asked ______________ to ______________.   **What the paper shows.** ______________. I had expected ______________, and ______________ is what the paper says.   **Who advised me to write this.** ______________, on ______________.   **What I am asking you to do, and by when.** I am asking you to ______________, by ______________. I am not asking you to ______________.   **And what I shall do if I have no answer.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A person between the verb and _to_ every time',
  'No _suggested me to_, no _explained me_',
  'A name, a channel and a week against every claim',
  'One request, one date, and what you are not asking for',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the sentence that used to have nobody in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the letter in full (140 words or more) about something unresolved at your own work: who told you what and how, whom you asked, what the paper shows against what you expected, who advised you to write, one request with one date, and what you will do next.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s letter as **the person it is addressed to**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many names are on the letters in this room, and how many sentences still have nobody in them?** Count both. Then the question to take away: which of the missing names could you find out this week by asking one person? Usually most of them — the passive with nobody in it is almost never a secret, it is a habit.'));
out.push(hw('Write the letter (60+ words) with a named person in every sentence. Then take one sentence anywhere in your working life that has nobody in it — a rule, a decision, a promise — and find out this week who the person is. Write down the name and how you found it.'));

// ======================= 18.6 =======================
out.push(pb());
out.push(h2('18.6  One week, in its verbs'));
out.push(p('**Function:** writing a week in the verbs that carry it   ·   **Grammar:** all five patterns in one page   ·   **Pronunciation:** reading a list of verbs without falling into a chant'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: your last week in **one** verb pattern each — _I agreed to… · I avoided… · I asked somebody to… · I am responsible for… · I stopped…_ One sentence, no explanation. Your teacher writes only the pattern used, not the content, and the board fills up with the same two or three.'));
out.push(board('I agreed to three things, I avoided two, and I asked one person to do one thing.', 'all five patterns in one account'));
out.push(p('**b**  Which pattern? **1** _I put off writing it._  **2** _I managed to speak to her._  **3** _I asked Omar to check it._  **4** _I am responsible for signing them._  **5** _I remembered to send it._  **6** _I remember sending it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Rasha find when she writes her week in its verbs?   **A** that most of the week is in the _-ing_ verbs   **B** that she agreed to too much   **C** that nobody asked her to do anything'));
out.push(p('**b**  Listen again. **1** What does she say she thought her week consisted of?   **2** What does Ms Huda say the two halves of the list measure?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.11  Eleven verbs', [
  ['Rasha', 'I did what the homework said and wrote last week out as nothing but verbs. Eleven lines. And it has told me something about the week that I did not know when I was in it.'],
  ['Ms Huda', 'Read the two halves separately.'],
  ['Rasha', 'The _to_ half first. I agreed to cover two shifts. I managed to get the April figures out of the office. I arranged to see the manager on the eleventh. I failed to write the trolley paragraph. Four lines.'],
  ['Nour', 'And the other half?'],
  ['Rasha', 'Seven lines, and this is the part that has kept me awake. I kept putting off writing the trolley paragraph. I avoided telling Sister Nasr that her sheet has an error in it. I avoided reading the committee\'s own minute of my report. I put off asking whether the second trolley is coming back. I stopped recording the handover times about three weeks ago and told nobody. I kept meaning to answer Ms Huda\'s email. And I have been avoiding deciding whether I actually want the post if they offer it.'],
  ['Omar', 'Seven against four.'],
  ['Rasha', 'Seven against four, and when somebody asks me about last week I would describe the four. I thought my week was made of the things I agreed to and managed. Most of my week, by hours, was the other seven — because avoiding something is not free, and I did each of those several times.'],
  ['Lubna', 'And the asking verbs?'],
  ['Rasha', 'Almost none, and that is the third thing. One: I asked the ward clerk to find me the April figures. Nobody asked me to do anything all week in a sentence I could quote — everything I did was either agreed to in September or nobody\'s idea at all.'],
  ['Ms Huda', 'Now what the two halves measure, because it is not a trick of grammar. The **_to_** verbs measure what you **committed to** — they are the week as it appears in a report, and they are what you will be judged on. The **_-ing_** verbs measure what you **did not do** — they are the week as it actually went, and they take most of the hours and appear in no report anywhere. Nobody has ever been asked at work to list what they avoided.'],
  ['Rasha', 'And the seven are not seven problems. Four of them are the same problem: the trolley paragraph, the minute, the question about the trolley, and the post. They are all the same thing and I have been treating them as four jobs.'],
  ['Ms Huda', 'Which is what this page is for, and it is why it is worth half an hour once a month. Write the week in its verbs and the _-ing_ half will group itself into one or two things, and they will be the thing you are actually doing instead of the thing you think you are doing.'],
  ['Rasha', 'The one thing is that I do not know whether I want the post, and everything else on that list is a way of not finding out.'],
]));
out.push(sp());
out.push(box('Language box – a week in its verbs', [
  '**Write the week in three groups, and nothing else. No explanations, no reasons, no excuses — the verbs carry it.**',
  table(['the group', 'what it measures'], [
    ['_agreed to · offered to · managed to · failed to_', 'what you **committed** to — the week as it appears in a report'],
    ['_avoided · put off · kept · stopped · denied_', 'what you **did not do** — the week as it actually went'],
    ['_asked X to · was asked to · reminded X to_', 'who **moved** whom — and usually the shortest group of the three'],
  ], [2.4, 2.4]),
  '**Expect the second group to be the longest, and expect that to be a surprise.** You remember a week by what you committed to, because that is what you will be asked about. The hours mostly went into the other group, because **avoiding something is not free** — you do it several times a day, deliberately, without admitting it (18.1).',
  '**Then group the second list.** Seven avoidances are rarely seven problems: they collapse into one or two, and the one or two are what you are actually working on. Rasha\'s four were all the same thing, and she had been treating them as four jobs.',
  '**And look at the third group for silence.** If nobody asked you to do anything all week, in a sentence you could quote, then everything you did was either agreed months ago or nobody\'s idea at all — which is worth knowing either way.',
  '⚠ Keep every verb in its own pattern as you write. _Agreed **to** cover · put off **writing** · asked the clerk **to find**._ A list that drifts into _I was going to_ and _I should have_ stops being a record and becomes an apology.',
  '**Useful phrases:** eleven lines · seven against four · when somebody asks me about last week I would describe the four · avoiding something is not free · they are all the same thing and I have been treating them as four jobs.',
  '**Practise:** One line in each group, about last week.  1 _agreed to_  2 _failed to_  3 _avoided_  4 _put off_  5 _asked ___ to_',
  '**Pronunciation.** 🔊 **Track 18.12** Reading a list of eleven lines without a chant: drop the pitch at the end of **every** line and give each verb its own stress, instead of rising through the list. Listen to the same six lines read twice, once as a chant and once properly, and say which is which.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads their three groups aloud — committed, did not do, who moved whom — and nothing else: no reasons. B counts the lines in each group, says which is longest, and then does the one useful thing: tries to group A\'s second list into one or two things. Swap.'));
out.push(dlg(null, [
  ['A', 'I agreed to __________. I managed to __________. I failed to __________.'],
  ['A', 'I avoided __________. I put off __________. I kept __________. I stopped __________.'],
  ['A', 'I asked __________ to __________.'],
  ['B', '__________ against __________. And four of those are the same thing: __________.'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the two numbers for each speaker — the _to_ count and the _-ing_ count — and then whether their partner managed to group the second list. In a first run the _-ing_ list is longer for about three people in four, and it groups into one or two things for almost everybody.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your own three groups for last week, in verbs only, with no explanations at all. Then say which group is longest and whether that surprises you.'));
out.push(p('**b**  Swap. Then each of you group your partner\'s second list and say, in one sentence, what you think the one thing is. Your partner may disagree, and should say so.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha wrote last week out as nothing but verbs — eleven lines — and it has told her something about the week that she did not know when she was in it. The _to_ half is four lines: she agreed to cover two shifts, managed to get the April figures out of the office, arranged to see the manager on the eleventh, and failed to write the trolley paragraph. The other half is seven, and it is the part that has kept her awake: she kept putting off writing the trolley paragraph; avoided telling Sister Nasr that her sheet has an error in it; avoided reading the committee\'s own minute of her report; put off asking whether the second trolley is coming back; stopped recording the handover times about three weeks ago and told nobody; kept meaning to answer Ms Huda\'s email; and has been avoiding deciding whether she actually wants the post if they offer it. Seven against four — and when somebody asks her about last week she would describe the four. She thought her week was made of what she agreed to and managed; most of the week, by hours, was the other seven, because avoiding something is not free and she did each of those several times. The asking verbs are almost none: one, the ward clerk and the April figures. Nobody asked her to do anything all week in a sentence she could quote — everything she did was either agreed in September or nobody\'s idea at all. Ms Huda said the two halves measure different things: the to verbs measure what you committed to, which is the week as it appears in a report and what you will be judged on; the -ing verbs measure what you did not do, which is the week as it actually went, takes most of the hours, and appears in no report anywhere, because nobody has ever been asked at work to list what they avoided. And Rasha said the seven are not seven problems: four of them are the same problem, and she has been treating them as four jobs. The one thing is that she does not know whether she wants the post, and everything else on the list is a way of not finding out._'));
out.push(p('**Listener task:** write the two numbers from this room that were furthest apart, and the one thing behind them.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Rasha writes and keeps. Answer the questions.'));
out.push(model([
  '**WEEK OF 18–22 NOVEMBER, IN ITS VERBS** · R. Barakat · written Saturday, for nobody',
  '**What I committed to — four lines.**  I agreed to cover two of Sister Nasr\'s shifts.  I managed to get the April figures out of the office, after asking twice.  I arranged to see the manager on 11 December.  I failed to write the trolley paragraph, which is now five weeks late.',
  '**What I did not do — seven lines.**  I kept putting off writing the trolley paragraph.  I avoided telling Sister Nasr that there is an error on her sheet for the week of 3 November.  I avoided reading the committee\'s own minute of my report, which has been in my bag since the eighteenth.  I put off asking whether the second trolley is coming back.  I stopped recording the handover times about three weeks ago and have told nobody that I stopped.  I kept meaning to answer an email.  And I have been avoiding deciding whether I want the post if it is offered.',
  '**Who moved whom — one line.**  I asked the ward clerk to find me the April figures. Nobody asked me to do anything all week in a sentence I could quote.',
  '**The two numbers.** Four and seven. And if anybody asked me about last week I would give them the four, because the four are what a report is made of and the seven are what the week was made of.',
  '**What the seven group into.** Four of the seven are one thing: the trolley paragraph, the minute I have not read, the question I have not asked about the trolley, and the post. All four are the same question and I have been carrying them as four jobs, which is why none of them is finished.',
  '**And the one thing.** I do not know whether I want the post. Everything on that list except Sister Nasr\'s sheet and the email is a way of not finding out — and the trolley paragraph, which is the honest half of my own report, is the hardest of the four precisely because writing it is deciding.',
  '**What I shall do, with days.** Read the minute tonight. Tell Sister Nasr on Monday, before the round. Write the trolley paragraph on Tuesday whether I have decided anything or not. And write one page about the post, for nobody, on Saturday — which is the thing I have actually been avoiding for five weeks.',
]));
out.push(item('1', 'What are the two numbers, and what does she say each group is made of?'));
out.push(item('2', 'Which four of the seven group together, and what does she say they are?'));
out.push(item('3', 'What are her four actions, and which of them does she say she has really been avoiding?'));
out.push(writers([
  'A week in its verbs: **what you committed to** → **what you did not do** → **who moved whom** → **the two numbers, and what each group is made of** → **what the second list groups into** → **the one thing** → **and what you will do, with days**.',
  'Write the lists with no explanations in them at all. _I avoided telling Sister Nasr that there is an error on her sheet._ The moment a line acquires a _because_, it becomes a defence and stops counting.',
  'Say the two numbers out loud on the page. _Four and seven._ The gap between them is the finding, and it disappears if the lists are written as prose.',
  'Group the second list before you do anything else. Seven avoidances are almost never seven jobs, and a page that leaves them as seven produces seven half-actions and no decisions.',
  '⚠ End with days, and put the real one last. Rasha\'s fourth action is a page about the post written for nobody — the only one of the four that addresses the one thing, and the one she would have left out if she had stopped at the grouping.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own week in its verbs (60 words or more).'));
out.push(p('**WEEK OF ______________, IN ITS VERBS** · ______________   **What I committed to — ______ lines.** I agreed to ______________. I managed to ______________. I failed to ______________.   **What I did not do — ______ lines.** I kept putting off ______________. I avoided ______________. I avoided ______________. I put off ______________. I stopped ______________.   **Who moved whom — ______ line(s).** I asked ______________ to ______________. ______________ asked me to ______________.   **The two numbers.** ______ and ______.   **What the second list groups into.** ______________ of them are one thing: ______________.   **And the one thing.** ______________.   **What I shall do, with days.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every verb in its own pattern — _agreed to_, _put off_ + -ing, _asked X to_',
  'No reasons, no _because_, no apologies in the lists',
  'The two numbers written down',
  'The second list grouped, and a day against each action',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their two numbers and nothing else.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your week in its verbs in full (140 words or more): the three groups with no explanations, the two numbers, what the second list groups into, the one thing behind it, and what you will do with a day against each.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s page as **somebody who has to decide whether to give them more work**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**For how many of us is the second list the longest?** Count. Then the one that ends the cycle: for how many of us did the second list collapse into one thing? Write that thing down somewhere you will see it, because a week spent avoiding one decision looks exactly like a busy week from the outside, and it looks like a busy week from the inside too.'));
out.push(hw('Write your week in its verbs (60+ words), group the second list, and name the one thing. Then do the first of your actions tonight and write one line saying what happened. Bring the prediction-board page you wrote in September to 18.7, with your name and your date on it.'));

// ======================= 18.7 =======================
out.push(pb());
out.push(h2('18.7  Review & Mediate: Nine lines on a wall'));
out.push(p('**Function:** explaining an instruction sheet   ·   **Recycling:** Units 1–18   ·   **Exam practice:** B1 Preliminary Reading Part 4, Writing Part 2, Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 18 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** He suggested me to wait.  **2** She explained me the form.  **3** I avoid to go back.  **4** She refused making the call.  **5** I am interested in to answer them.  **6** Remember checking the oil before you leave. _(it is an instruction)_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the sheet that went up in the depot muster room in September.'));
out.push(box(null, [
  '**DEPOT · DRIVERS\' DAILY CHECK · INSTRUCTIONS TO DRIVERS** _(posted September, nine lines)_',
  '**1**  All drivers are required to complete the check sheet before leaving the yard.',
  '**2**  Remember checking the oil and the water before you take the bus out.',
  '**3**  Do not forget telling the fitter about anything you have written on the sheet.',
  '**4**  If a warning light comes on, stop to telephone the depot.',
  '**5**  Drivers are advised to not sign the sheet until the check is finished.',
  '**6**  It is suggested drivers to report any defect on the same day.',
  '**7**  Any defect will be reported to the office.',
  '**8**  Drivers are reminded that sheets must be handed in at the office window.',
  '**9**  Try to use the second mirror when reversing.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Which four test dates have fallen on the prediction board, and which three lines of the sheet does Tareq say give the **wrong instruction**?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.13  Four dates and nine lines', [
  ['Ms Huda', 'Before anything else: the board comes down today, and four of the test dates have fallen. Mazen, the thirtieth of September.'],
  ['Mazen', 'Eleven out of fifteen. I said at least twelve. Wrong by one, and right about the reason — both shops take their stock from the same distributor, and it was a batch and not a model.'],
  ['Umm Kinan', 'The twenty-seventh of October. The meeting happened and nothing was decided, which is what I predicted, and then the thing I said would surprise me upwards happened: a letter with a date in it. The twentieth of January.'],
  ['Rasha', 'The thirty-first. They extended it to all night staff from the twenty-seventh of October, and the minute does not mention the blocks. Right in both halves, and I would rather have been wrong about the second one.'],
  ['Tareq', 'The thirtieth of November. The Harasta road closed on the nineteenth for four days, south side, resurfacing. Right, and right for the reason I wrote down.'],
  ['Ms Huda', 'Now mine, which was that eight of the eleven would be right about the event and wrong about the reason. Of the four tested, three were right about the event and all three were right about the reason as well. So I am wrong so far, and I want to say what I got wrong, because it is the only interesting part. I predicted from six years of my own sheets with six other classes. What I left out of my own prediction is that this class has spent a year being made to write a reason with a count in it underneath every claim — three of the last four years, both shops from one distributor, a committee does the thing that commits it to least. Mazen is the one who was wrong, and his reason was a judgement with a number attached. The other three were counted patterns.'],
  ['Omar', 'So the course was the variable you left out.'],
  ['Ms Huda', 'The course was the variable I left out of a prediction about my own course, which is exactly the kind of blind half we have been writing into the bottom of every page since September. I will write the June one again with it in. Now — Tareq, nine lines on a wall.'],
  ['Tareq', 'This went up in the muster room in September and I have read it about sixty times. Six of the nine lines are badly written and three of them actually tell you to do the wrong thing, and I could not have told you which was which before this unit.'],
  ['Nour', 'Give us the three.'],
  ['Tareq', 'Line two: _remember checking the oil_. That is not an instruction, it is a remark about my memory. The instruction is _remember to check_. Line three: _do not forget telling the fitter_ — same fault the other way round; it should be _do not forget to tell_. And line four is the dangerous one. _If a warning light comes on, stop to telephone the depot._ That says: pause whatever you are doing in order to telephone. What they mean, and what every driver does, is **stop driving**. A new driver who reads that line exactly would telephone the depot and carry on to Harasta.'],
  ['Lubna', 'And the other three?'],
  ['Tareq', 'Line six is just wrong English — _it is suggested drivers to report_ — and nobody is confused by it, which is worse in a way, because it has been on a wall for three months and nobody has said anything. Line seven has nobody in it: _any defect will be reported to the office_ — by whom, to whom, by when? And line nine says _try to use the second mirror_, which tells me it will be difficult. If they want me to use it, the line is _use the second mirror when reversing_.'],
  ['Ms Huda', 'And the mediation question: what do you say to the depot, and what do you not say?'],
  ['Tareq', 'I do not say that six of nine lines are badly written, because nobody has ever been persuaded of anything by that sentence. I say: line four tells a driver to telephone and keep driving, and here is the rewrite — two numbered lines. One line, one fault, one rewrite. And I put Abu Khaldoun\'s name at the bottom, because he can tell them what the sheet was for in the first place.'],
]));
out.push(sp());
out.push(box('Language box – reading and mending an instruction sheet', [
  '**Read every line asking one question: what would somebody do if they followed this exactly?** Not _what does it mean_ — what would a careful person **do**. That is the only test, and it finds faults that reading for sense never finds.',
  '**Then sort the faults into three kinds, because they need three different answers.** **1** Lines that give the **wrong instruction** (_stop to telephone_, _remember checking_) — these are urgent and they are the only ones worth a letter. **2** Lines that are **bad English and clear anyway** (_it is suggested drivers to report_) — these are embarrassing and harmless, and mentioning them loses you the argument. **3** Lines with **nobody in them** (_any defect will be reported_) — these are the ones nothing ever happens about (18.5).',
  '**Rewrite, do not criticise.** A line and its replacement, side by side, as numbered imperatives (18.3): _**4** If a warning light comes on: **a** stop the bus. **b** telephone the depot._ Nobody argues with a rewrite; everybody argues with a criticism.',
  '**Take one line, not six.** _One line, one fault, one rewrite._ A note that says six of nine lines are wrong is read as an attack on whoever wrote the sheet; a note about line four is read as a note about line four.',
  '**And name the person who knows what the sheet was for** (17.7). An instruction sheet is the end of a practice that had reasons, and the reasons are in somebody\'s memory.',
  '**Useful phrases:** what would somebody do if they followed this exactly? · that is not an instruction, it is a remark about my memory · line four tells a driver to telephone and keep driving · one line, one fault, one rewrite · nobody has ever been persuaded of anything by that sentence.',
  '**Pronunciation.** 🔊 **Track 18.14** Reading a faulty line and its rewrite aloud so that the difference is audible: **the faulty line flat and fast, a long pause, the rewrite slow with a stress on each numbered step.** _stop to telephone the depot ‖ **STOP** the bus ‖ **TELephone** the depot._ Listen to four pairs and write the two verbs of each rewrite.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the sheets below and does **not** show it. A reads it once, then explains it: the line that gives the wrong instruction, what a careful person would do if they followed it, and the rewrite as numbered steps. B must say which other line they would leave alone and why. **Then, in two minutes together**, decide which **one** line you would write to the author about. You do not have to agree. Change roles with the other sheet.'));
out.push(table(['Sheet A – a ward medicines notice', 'Sheet B – a workshop safety card'], [
  ['_1 Staff are required to check the chart against the label._', '_1 All operators must read this card before starting._'],
  ['_2 Remember signing the second column._', '_2 Stop to switch the machine off at the wall._'],
  ['_3 If the dose looks wrong, stop to telephone the pharmacy._', '_3 Do not forget wearing the gloves._'],
  ['_4 It is suggested staff to report any error the same shift._', '_4 Try to keep the guard down._'],
  ['_5 Any error will be recorded._', '_5 Operators are advised to not clean the blade by hand._'],
  ['_6 Try to use the second signature._', '_6 Any fault will be reported._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the one line each pair chose to write about, and the rewrite. On Sheet A it is nearly always line 3 and on Sheet B line 2, and in both cases for the same reason: those are the two lines where following the instruction exactly would mean **carrying on with something dangerous while telephoning somebody about it**. The lines that merely read badly are left alone, which is the discipline of the cycle.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Use a real instruction sheet, notice, procedure or card from your own work — brought, or written out from memory. Explain it to your partner **without showing it**: the line that gives the wrong instruction, what somebody following it exactly would do, and your rewrite. Your partner must ask: _which lines are merely badly written?_, _which line has nobody in it?_ and _who knows what the sheet was originally for?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _The sheet went up in the depot muster room in September and Tareq has read it about sixty times. Six of the nine lines are badly written and three of them actually tell you to do the wrong thing, and he says he could not have told you which was which before this unit. The three: line two, remember checking the oil, which is not an instruction but a remark about his memory — the instruction is remember to check. Line three, do not forget telling the fitter, the same fault the other way round; it should be do not forget to tell. And line four, which is the dangerous one: if a warning light comes on, stop to telephone the depot — that says pause whatever you are doing in order to telephone, and what they mean, and what every driver actually does, is stop driving. A new driver following that line exactly would telephone the depot and carry on to Harasta. The other three: line six is simply wrong English, it is suggested drivers to report, and nobody is confused by it, which is worse in a way because it has been on a wall for three months and nobody has said anything; line seven has nobody in it — any defect will be reported to the office, by whom, to whom, by when; and line nine says try to use the second mirror, which tells a driver it will be difficult, when what they want is use the second mirror when reversing. And the mediation: he does not say that six of nine lines are badly written, because nobody has ever been persuaded of anything by that sentence. He says that line four tells a driver to telephone and keep driving, and here is the rewrite in two numbered steps — one line, one fault, one rewrite — and he puts Abu Khaldoun\'s name at the bottom, because he can tell them what the sheet was for in the first place._'));
out.push(p('**Listener task:** write the one line each pair chose, and the person who knows what the sheet was for.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 4)', 7));
out.push(p('Read the article and choose the correct answer: **A**, **B**, **C** or **D**.'));
out.push(box(null, [
  '**THE CAREFUL READER**   from a magazine for safety managers',
  'When an instruction is not followed, the inquiry asks why the worker ignored it. There is a second question, asked far less often, and in my experience it accounts for more harm than the first: what happens when an instruction **is** followed, exactly, and the instruction is wrong?',
  'Last month a technician at a site I advise gave up recording error codes for three weeks. The card on the machine said: "If the red light comes on twice, stop logging the error and call me." He read that card every single time, because he did not want to make a mistake. He telephoned every time. He was asked for the code every time and said, every time, that he had been told not to write them down. His supervisor heard this as obstruction for three weeks.',
  'Two words had been transposed. The supervisor had meant _stop to log_ — pause, write it down, then telephone. What he wrote was _stop logging_ — give it up. The two are opposite instructions and the difference is invisible unless you are looking for it.',
  'What interests me is not the error, which anybody could make. It is the sentence the technician said when he finally brought the card to the desk: "I thought there was a reason." He had done something that made no sense to him, for three weeks, because he assumed that whoever writes the cards knows something he does not. That assumption is not a weakness. It is the whole basis on which written procedure works, and an organisation that did not have it would not function for a morning.',
  'Which gives us the uncomfortable conclusion. The careless reader is protected by his carelessness: a wrong instruction looks odd to him and he does what seems sensible instead. The careful reader has no such protection. He follows the sheet, and the sheet is the only thing he has.',
  'So I have stopped asking organisations to make their people more careful, which they cannot do and do not need. I ask them two things instead. Remove from every procedure the five verbs that take two patterns — _remember, forget, stop, try, go on_ — and replace them with numbered imperatives. And once a year, ask somebody who follows one of your sheets whether it makes sense to them. They will not volunteer it. They think there is a reason.',
], C.lyellow, C.orange));
[
  '**1**  What does the writer say is asked too rarely after an incident?   **A** Whether the worker was properly trained.   **B** Whether the supervisor was at fault.   **C** What happens when a wrong instruction is followed exactly.   **D** How long the instruction had been in place.',
  '**2**  Why did the supervisor think the technician was being obstructive?   **A** The technician kept telling him he had been told not to write the codes down.   **B** The technician refused to telephone him.   **C** The technician had not read the card.   **D** The technician complained about the machine.',
  '**3**  What does the writer say about the technician\'s sentence "I thought there was a reason"?   **A** It shows that the technician was not paying attention.   **B** It shows that the card should have been shorter.   **C** It is an unusual reaction that few people would have.   **D** It describes the assumption that makes written procedure work at all.',
  '**4**  What does the writer mean by saying the careless reader is "protected by his carelessness"?   **A** He is never blamed when something goes wrong.   **B** A wrong instruction strikes him as odd and he does something sensible instead.   **C** He reads the sheet more slowly than other people.   **D** He asks more questions than a careful reader does.',
  '**5**  What is the writer\'s main recommendation?   **A** That organisations should train their staff to read more carefully.   **B** That procedures should be written by safety managers rather than supervisors.   **C** That certain verbs should be removed from procedures and the sheets checked with the people who use them.   **D** That instructions should be given out loud rather than in writing.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note to the author of an instruction sheet about **one** line (60 words or more).'));
out.push(p('**______________ · line ______** · ______________   I am writing about one line of the ______________ sheet, which has been up since ______________. The other lines are not the subject of this note.   **The line as it stands.** "______________"   **What somebody following it exactly would do.** ______________.   **What I believe it was meant to say.** ______________.   **The rewrite.** "______________: **1** ______________. **2** ______________." Two numbered steps, and none of the five verbs that can be read two ways.   **Why this one and not the others.** ______________.   **And who can tell you what the sheet was for.** ______________, ______________ years here.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One line only, and the others explicitly set aside',
  'What a careful person would **do**, not what the line means',
  'The rewrite as numbered imperatives, with none of the five verbs',
  'The person who knows what the sheet was originally for, named',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these two questions. Write **140 words or more**.',
  '**Question 1 — article.** You see this notice in an English-language magazine.',
  '_"**Have you ever followed an instruction that was wrong?** Tell us what the instruction said, what you did, and how it was finally noticed. The best articles will be published."_',
  '**Question 2 — story.** Write a story that begins with this sentence:',
  '_"He brought the card to my desk, put it down and pointed at the second line with his finger."_',
]));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 18 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I have been avoiding ___ back since September.   a) going   b) to go   c) go',
  '2  She refused ___ it in writing.   a) putting   b) to put   c) put',
  '3  He suggested ___ until January.   a) me to wait   b) to wait   c) waiting',
  '4  I am responsible for ___ the second page.   a) to check   b) checking   c) check',
  '5  Issam Haddad advised ___ in writing.   a) to me to put it   b) that I putting it   c) me to put it',
  '6  Stop ___ the codes — give it up, nobody reads them.   a) logging   b) to log   c) log',
  '7  She explained ___ before I signed it.   a) me the form   b) the form to me   c) to me the form',
  '8  I am afraid ___ being asked by name.   a) to   b) for   c) of',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 2 style – matching).** 🔊 **Track 18.15** You will hear five people talking about something that went wrong in writing. For each speaker (**1–5**), choose from **A–H** what each one says the real fault was. There are **three** letters you do not need.'));
out.push(box(null, [
  '**A**  A verb with two meanings was used, and the line gave the opposite instruction.',
  '**B**  The sentence named nobody, so nobody had to answer it.',
  '**C**  A refusal was given out loud and never written down.',
  '**D**  An offer was made without its reason and turned into a grievance.',
  '**E**  Something was avoided rather than forgotten, and called a blank.',
  '**F**  A fear about a situation was described as a fear about an action.',
  '**G**  The week\'s real work was in the things that were not done.',
  '**H**  A long instruction was replaced by two numbered lines.',
]));
[
  '**1**  Speaker 1 ______   **2**  Speaker 2 ______   **3**  Speaker 3 ______   **4**  Speaker 4 ______   **5**  Speaker 5 ______',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 18.15  Audio script (read after the check)', [
  ['1  Man', 'Two words, and they were the wrong way round. The card told him to give up writing the codes down and I had meant him to pause and write one. He read it every time because he did not want to get it wrong, and he got it right every time, and I had got it wrong once in October. Three weeks of codes on the worst machine in the building, and I can produce seven of about thirty.'],
  ['2  Woman', 'I had written "blank" on those two sheets since September and I was rather proud of admitting it. I went to that door once, on the eleventh, she did not open it, and I never went back — and I remembered it about twice a week for seven weeks. That is not the same as forgetting and I will not use the comfortable word for it in a method statement.'],
  ['3  Woman', 'I said it to his face on the Thursday and I gave him my reason in one sentence, and he accepted it and made the call himself. But there is nothing on paper anywhere. In six months there will be a note that says a customer was telephoned, and no record of who would not make that call or why, and the reason was the useful part.'],
  ['4  Man', 'My first sentence said that it had been agreed in March that faulty units would be replaced in thirty days. Agreed by whom, with whom, and who told me? I know all three answers — a man, a telephone call, the first week of March — and I had left every one of them out because I thought it sounded more official. A letter nobody has to answer is a letter nothing happens to.'],
  ['5  Woman', 'Four lines in one half and seven in the other, and if you asked me about that week I would give you the four. Agreed to, managed to, arranged to, failed to — that is the week as a report. The seven are what the week actually was: putting off, avoiding, avoiding, putting off, stopped and told nobody. And four of the seven turned out to be the same question.'],
]));
out.push(p('**C  Writing.** Write the note about one line of a real instruction sheet (140+ words): the line as it stands, what somebody following it exactly would do, what it was meant to say, the rewrite as numbered imperatives, why that line and not the others, and who can say what the sheet was originally for.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 18)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use _-ing_ after _avoid, put off, keep, admit, deny, suggest_',
  '☐ use _to_ after _agree, offer, refuse, manage, fail, arrange_',
  '☐ tell _stop to_ from _stop -ing_, and the other four pairs',
  '☐ use _-ing_ after every preposition, and _to_ after an adjective',
  '☐ tell _afraid to_ from _afraid of_, and say which one I mean',
  '☐ put a person between the verb and _to_ — and never write _suggested me to_ or _explained me_',
  '☐ write a week in its verbs and see where it actually went',
  '☐ find the line on an instruction sheet that gives the wrong instruction, and rewrite it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: THE MID-BOOK TEST, THEN UNIT 19 – COMPLAINTS AND RESOLUTIONS', [
  '**The Mid-Book Test comes first** — Units 13–18, sixty marks: Reading 20, Writing 15, Listening 15, Speaking 10. Nothing in it is new. The two places marks are lost are the four habit forms from Unit 17 and the conditionals from Unit 15; the verb patterns from this unit are tested in every section, because they are in every sentence.',
  '**Then Unit 19: complaints and resolutions.** Mazen\'s letter in 18.5 was a complaint that named everybody. Unit 19 is the whole sequence — stating the fault, saying what you have already tried, asking for one thing, and the hardest part, which is accepting a resolution that is not what you asked for and saying so without resentment.',
  '**And the peer-review slip changes from Unit 19.** Until now you have written your partner three sentences with no stems. From Unit 19 you **name the criterion** you are marking against before you say anything — _on the one-request rule_, _on naming the person_ — because from here on you are reviewing against a standard and not giving an opinion.',
  '**Bring one unresolved complaint of your own to 19.1** — something you have asked for and not had, at work or anywhere else. With the dates, and with the name of whoever told you what.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 18 · Student\'s Book');
