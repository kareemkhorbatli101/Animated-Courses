// Proactive English A2 · Syria Edition · Book 2 · Unit 22 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 22  Messages and Requests — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**Three verbs carry the whole unit** and they are worth putting on the board in 22.1 and leaving up for the fortnight: _**ask** somebody **to**_ (a request) · _**tell** somebody **to**_ (an instruction) · _**say (that)**_ + what they said (information). All three need the **person** except _say_, and _say_ is the only one that must not have one.',
  '**At A2 we do not backshift.** _"The parts are on the lorry"_ → _He says the parts **are** on the lorry._ Change the **person**, never the tense. A student who backshifts is producing correct English from a later level: accept it and do not teach it.',
  '**The idea underneath** is in 22.3: pass on **what they said**, not what you think it means. 22.1 to 22.6 are that one sentence worked out in six places, and the Review in 22.7 is it applied to a page of somebody else\'s terms.',
], C.lblue, C.navy));

// ===================== 22.1 =====================
out.push(pb());
out.push(h2('22.1  He asked me to tell you'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open — the three messages come from the Unit 21 homework. Insist on the **speaker\'s own words** on the board, not a tidied version: the tidying is what the cycle is about.'));
out.push(A('**b** **1** She asked me **to ring her**.   **2** He asked me **to bring the file**.   **3** She asked me **not to wait for her**.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – eleven.'));
out.push(A('**b** **1** She asked them to ring her before Thursday, and would not say why — Nour asked twice.   **2** Because four messages went missing in the first three days and two of them were his, and a message that lives in somebody\'s head is not a message.'));
out.push(S('Language box · Practise'));
out.push(A('**1** He asked me **to come** at four.   **2** She asked you **to send** the file.   **3** He asked us **not to tell** anybody.   **4** She asked him **to ring** her tomorrow.   **5** They asked me **not to be** late.'));
out.push(NOTE('Items 3 and 5 are the negatives and both are wrong in the same way in most classes: _asked us to not tell_. Say the correct form five times rather than explaining it once — the error is a rhythm, not a rule.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The customer from Mezzeh rang and said: "Please ring me before Thursday."',
  '**B:** So she asked us to ring her before Thursday.',
  '**A:** Yes. And the supplier said: "Don\'t send anything until I ring."',
  '**B:** He asked us not to send anything until he rings.',
  '**A:** And this one has no name.',
  '**B:** Then I write it exactly as it was said, with the time.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_She asked us to ring her before Thursday · the parts company asked him to confirm the order in writing · the supplier asked us not to send anything until he rings._ — three pronoun changes, and they are the three marks.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_My sister rang on Saturday and said: "Tell Mum I can\'t come on Friday, I\'ll come Saturday instead." → She asked me to tell my mother that she cannot come on Friday and that she will come on Saturday._',
  '_My neighbour said: "Please don\'t park in front of the gate on Thursday morning." → He asked me not to park in front of the gate on Thursday morning._',
  '_The office rang: "Can you bring the papers before twelve?" → They asked me to bring the papers before twelve._',
  '**b** _The one that lost something is the first. I passed on the days and I left out that she was upset, and my mother heard "she is not coming" and not "she is coming a day later". The tone was the message._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour has taken eleven messages in four days. The customer from Mezzeh asked them to ring her before Thursday and would not say why, and Nour asked twice. The parts company asked him to confirm the order in writing. The landlord asked him to ring about the rent, three times in one minute. And one worries her: a man rang on Tuesday and asked her to tell Mr Fouad that he knows what it is about, and would not give a name. Omar told her to write it exactly as it was said, with the time, and that that is all you can do with a message like that and it is enough. He started the book because four messages went missing in the first three days and two of them were his.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ She asked me that I ring her. → ✓ She asked me **to ring** her.   ✗ She asked to ring her. → ✓ She asked **me** to ring her.   ✗ He asked me to not wait. → ✓ He asked me **not to** wait.   ✗ She asked me to ring **me**. → ✓ She asked me to ring **her**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** She asked them **not** to ring after six, because of her mother — and she still would not say what it is about.'));
out.push(A('**2** She asked for a name **twice**, wrote down his exact words — "he knows what it is about" — with the time, and recorded that the number he rang from does not answer.'));
out.push(A('**3** Because four messages went missing in week one before the book existed, and two of them were his own.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**MESSAGE BOOK — week of 6 April, for Mr Fouad**',
  '**Mon 11:20 · Abu Samir, the shop below (0933 612 044).** Asked you to ring him about the water. Would not say whether it is the pipe again; I asked twice. He was not angry. — H.',
  '**Tue 15:05 · the electricity office.** Asked you to bring the meter card **in person**. They said somebody else cannot bring it this time and they did not explain why. — H.',
  '**Wed 09:40 · no name (woman, young).** Asked me to tell you that "the answer is yes and you know what to do". I asked for a name twice. She laughed and rang off. — H.',
]));
out.push(S('Stage 7 · Write freely (sample, 110 words)'));
out.push(SAMPLE([
  '**MESSAGE BOOK — the fortnight my father was in Aleppo, for my father**',
  '**Mon 08:30 · Umm Khaled, next door (0944 207 611).** Asked you to ring her before the end of the week about the roof. Would not say whose roof. — R.',
  '**Wed 12:15 · Dr Ammar\'s secretary.** Asked you to confirm the ninth or the sixteenth by Thursday, or the appointment goes to somebody else. — R.',
  '**Thu 19:40 · no name (man, old, bad line).** Asked me to tell you that "the land matter is finished and it finished well". I asked for a name three times. He said you would know. — R.',
  '**Sat 10:05 · Uncle Bashir.** Asked you to ring any evening after nine. Said it is nothing urgent, twice, which is how I know it is not nothing. — R.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Said it is nothing urgent, twice, which is how I know it is not nothing." — that is the entry I would deal with first, and it is the one with no information in it._   ✓ _The roof entry: I would have to ring Umm Khaled to find out what it is about._   ? _What was the tone of the one with no name — pleased, or was he being careful?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The answer is the same in every class: nobody is annoyed by the bad news, they are annoyed by the entry that does not say enough. Then ask who has ever written one. Every hand goes up, which is the point.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The message I would least like to pass on is the one where somebody has died and the family does not know yet. I had to do it once, for a cousin, and I said "ring your mother" and nothing else, which I thought was kind and was not — he had four hours of thinking it was his mother. Written properly: **Thu 14:10. Your uncle Ziad rang from Homs. He asked me to tell you to ring him on 0932 118 440 as soon as you can, this evening if possible. He said it is about your father\'s brother and that your father already knows. He asked me to say that nobody is in hospital. He will be at that number all evening.** Six more words and four hours less.']));

// ===================== 22.2 =====================
out.push(pb());
out.push(h2('22.2  He told me not to send it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Give the five instructions fast and mix two negatives in: _Samer, don\'t open your book_. The class answers _you told him not to open his book_ — two changes at once, which is the whole cycle in one line.'));
out.push(A('**b** **1 tell** (an instruction from somebody with the right to give one)   **2 ask** (a favour)   **3 ask** (a customer — always _ask_)   **4** either, and the choice says something about your family   **5 ask**, always.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – to send the letter without showing it to him.'));
out.push(A('**b** **1** Because it is the first letter she has written to them on her own, and if it is wrong it is the company\'s name on it.   **2** Not to send it today — write it today and send it tomorrow morning — and not to ask Rana anything, because she is on leave until the eleventh.'));
out.push(S('Language box · Practise'));
out.push(A('**1 tell:** He **told me to** send it tomorrow.   **2 ask:** She **asked me to** bring the file.   **3 ask:** He **asked us to** ring him before six.   **4 tell:** He **told me not to** tell anybody yet.   **5 ask:** She **asked me not to** wait for her.'));
out.push(NOTE('Items 1 and 2 are the pair that matters: the same shape, two different offices. Ask which of the five you would be annoyed to hear reported about you — most people mind _told_ where it was a favour, and nobody minds _asked_ where it was an instruction.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Write it today and send it tomorrow morning.',
  '**B:** So you are telling me to write it today and send it tomorrow.',
  '**A:** Yes. And don\'t show it to me first.',
  '**B:** And not to show it to you?',
  '**A:** Not to show it to me, no.',
  '**B:** _(to a third person)_ He told me to write it today and send it tomorrow, and he told me not to show it to him first.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('Positive: _write it today and send it tomorrow_ · _ring me only if they answer the same day_. Negative: _not to show it to him first_ · _not to ask Rana_. The check is whether the two negatives arrived **as** negatives — ask the listeners, not the performers.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The clearest instruction I have been given was in March. My manager told me not to answer any email about the tender until she spoke to the director. She told me, she did not ask me, and she was right to: answering one would have been a promise._',
  '**b** _The one I did not follow: my father told me not to lend the car to anybody. I lent it to my cousin for an afternoon and he put a scratch on it the length of my hand, and my father has never mentioned it, which is worse than if he had._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mr Khaled told Lina to write to Türkiye and to send it without showing him, and it is the first letter she has written to them on her own. She said that if it is wrong it is the company\'s name on it, and he pointed out that she said "if" and not "when". Then he gave her the real reason: he has read every letter she has written for eleven months and changed four words in all of them, so he is not a checker, he is a bottleneck. He also told her two things not to do — not to send it today, but to write it today and send it tomorrow morning, and not to ask Rana anything, because Rana is on leave until the eleventh.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He told to send it. → ✓ He told **me** to send it.   ✗ He said me to wait. → ✓ He **told** me to wait.   ✗ He told me that send it. → ✓ He told me **to** send it.   ✗ He told me to don\'t send it. → ✓ He told me **not to** send it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** At about ten in the morning and at about seven in the evening — and not between those times unless somebody is hurt.'));
out.push(A('**2** Collect a repair — including the people they know, and the note says **especially** the people they know.'));
out.push(A('**3** Keeping the Saturday clinic going. He asks rather than tells because it is not work and he says he cannot tell Omar to do it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TEN DAYS — what to do and what not to do** · Rasha, for my mother and Samer',
  'I am away from the 12th to the 22nd. My telephone will be on in the evenings between seven and ten. Please do not ring in the morning; I am in class and I cannot answer.',
  '**Do.** Pay the electricity on the 15th, in cash, with the card. Water the two plants on the balcony twice. Ring me on Friday evening whatever happens, even if nothing has.',
  '**Don\'t.** Do not sign anything from the building committee; I will be back before the meeting. Do not let anybody in to look at the roof without me. And do not move the boxes in the small room, including if there is space, because there is a reason they are where they are.',
  '**One thing I am asking rather than telling.** Samer — would you take Mum to the clinic on the 18th? It is not your job and I cannot tell you to do it.',
  '**If something happens that is not on this paper:** Mum decides, and I will support whatever she decides, including if it is wrong.',
]));
out.push(S('Stage 7 · Write freely (sample, 134 words)'));
out.push(SAMPLE([
  '**THREE WEEKS AT THE SHOP — what to do and what not to do** · Omar, for Yousef',
  'I am away from the 1st to the 21st. I will answer the telephone twice a day, at about nine and at about eight in the evening. If somebody is hurt or the water is on the floor, ring at any hour.',
  '**Do.** Open at eight and not half past; the three men who come at eight are the three who come every day. Write every message in the book with the time. Ring me at nine about anything over fifty thousand.',
  '**Don\'t.** Do not take a job that will not be finished the same day. Do not give anybody a date in the week of the 22nd. And do not let a repair leave without the ticket, including for the two men from the garage opposite. Especially them.',
  '**One thing I am asking rather than telling.** Would you open on the Saturday morning of the 13th? It is not in your hours and I am asking.',
  '**If something happens that is not on this paper:** you decide, and I will support whatever you decide, including if it turns out to be wrong. That sentence is the reason this paper is short.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"You decide, and I will support whatever you decide, including if it turns out to be wrong." I would sleep on that._   ✓ _"Do not give anybody a date in the week of the 22nd" — what do I say instead, when somebody asks for one?_   ? _Who decides about money over fifty thousand if I cannot reach you at nine?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Read three "who decides" lines aloud with nothing round them. The class picks the one that names a person and promises support, every time. The second question usually produces silence, and that is the lesson: everybody wants the note and nobody writes it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The note nobody left me was for the two weeks I ran the office at nineteen. What I was told was "ring me if there is a problem", and he was in Lebanon and his telephone did not work. What I needed was three lines: that I could spend up to twenty thousand without asking, that the Thursday delivery is always late and does not need reporting, and that if the landlord came I should say nothing at all and write down what he said. I did the opposite of all three because I did not know, and the worst of it is that I thought I was doing well.']));

// ===================== 22.3 =====================
out.push(pb());
out.push(h2('22.3  She says the order has arrived'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Use a sentence with a **number** and a **reason** in it — _"the delivery is coming on Thursday because the lorry is in Homs"_ — and the number or the reason will be gone by the eighth student. Write the first and the last on the board side by side and do not comment; the cycle comments for you.'));
out.push(A('**b** **1** She says the order **has arrived**.   **2** He says he **can\'t** come on Thursday.   **3** She says there **isn\'t** any left.   **4** They say they **sent** it on Monday.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – three people have passed it on and it has changed.'));
out.push(A('**b** **1** That the parts are on the lorry, that the lorry is in Homs, that he is not coming today because his company has told him to do Hama first, and that he will be here tomorrow before twelve.   **2** Pass on what they said, not what you think it means — and if you are the third person, ring the first one.'));
out.push(S('Language box · Practise'));
out.push(A('**1** She says the order **has arrived**.   **2** He says he **can\'t** come on Thursday.   **3** She says there **isn\'t** any left.   **4** They say they **sent** it on Monday.   **5** He says he **doesn\'t** know who rang.'));
out.push(NOTE('Item 5 is the agreement trap: _he says he **doesn\'t** know_, not _he says he **don\'t** know_ and not _he say_. The third person -s goes twice in the sentence and students who get the reporting right lose the agreement.'));
out.push(S('Stage 3 · Practise (sample – Card A, first line)'));
out.push(SAMPLE([
  '**A:** "I\'m not coming today, I\'ll be there tomorrow before twelve."',
  '**B:** _(to C)_ He says he is not coming today and he says he will be there tomorrow before twelve.',
  '**C:** _(to A)_ So he says he is not coming, and he does not know when.',
  '**A:** That is not what was said. The original was: "I\'m not coming today, I\'ll be there tomorrow before twelve."',
  '**C:** What changed?',
  '**A:** "Not today" became "not coming", and "tomorrow before twelve" became nothing, in two steps.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Original: "The price might go up in May, but nothing is decided." Final: "The price is going up in May."_ The first word to change is **might**, and the clause that disappears is the one saying nothing is decided. It is always the hedge that goes first.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My cousin told me that the centre is moving to Qudsiya next year. He got it from a woman whose sister works here._ — **And what did the first person actually say?** _I do not know. I have been repeating it for a month and I have never asked._',
  '**b** _I could check it in four minutes by asking at the desk downstairs, and I am going to, because I have told about six people and two of them are students here._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar came in saying the parts are not coming, which he got from the man in the workshop, who got it from Jaber, who got it from the driver — three people between him and the words. Nobody asked what the driver actually said. Nour rang him: he says the parts are on the lorry, he says the lorry is in Homs, he says he is not coming today because his company has told him to do Hama first, and he says he will be here tomorrow before twelve. Omar said that is a completely different message and Nour said it is the same message — "not today" became "not coming" in two steps and nobody lied, because the first person said what they thought it meant and everybody after that passed on the meaning and not the words. Her rule is to pass on what they said, not what you think it means, and if you are the third person, ring the first one.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He said me that the parts are on the lorry. → ✓ He **told me** that… / He **said** that…   ✗ He says the parts is on the lorry. → ✓ the parts **are**.   ✗ He say he is not coming. → ✓ He **says**.   ✗ He says that he cannot come **today** _(said on Tuesday about Monday)_ → ✓ keep the word they used, or say the day: _he says he could not come **on Monday**_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Four — the driver, Jaber, the man in the workshop, Omar, and then Nour: five names, and the number of **steps** is the number of arrows.'));
out.push(A('**2** Because his company has told him to do Hama first.'));
out.push(A('**3** When a message has been through more than one person, write down who said it first and ring them.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Sat 11:00 · the Thursday class — corrected** — R.',
  '**What was going round:** "the Thursday class is cancelled for the rest of the term."',
  '**Where it came from:** the caretaker → Samer → my sister → me. Three steps.',
  '**What the caretaker actually says**, asked at 10:45:',
  '· He says the room is being painted on the 14th and the 21st.',
  '· He says nobody has told him about any other week.',
  '· He says the class was moved to room 4 last time this happened, not cancelled.',
  '**What changed on the way:** "two Thursdays in room 4" became "cancelled for the term". Nobody said anything untrue.',
  '**From now on:** ask the caretaker before telling eleven people. It took two minutes and he was in the corridor.',
]));
out.push(S('Stage 7 · Write freely (sample, 138 words)'));
out.push(SAMPLE([
  '**Tue 19:30 · the bakery on the corner — corrected** — H.',
  '**What was going round the building by Sunday:** "Abu Nabil is closing and selling the shop."',
  '**Where it came from:** his son → the woman on the second floor → my mother → me → four more people, because I told them. Four steps before me and I made it five.',
  '**What Abu Nabil actually says**, asked on Tuesday evening in the shop:',
  '· He says he is closing for five weeks from the first of next month.',
  '· He says his knee is being operated on and the recovery is five weeks.',
  '· He says his son will not run it because his son has a job he likes, and that this is the part people have turned into "selling".',
  '· He says he will be open again before the end of the summer, and he says to tell everybody that.',
  '**What changed on the way:** "closing for five weeks" became "closing", and "my son will not run it" became "selling the shop". Nobody lied. Both changes are somebody saying what they thought it meant.',
  '**From now on:** he is forty metres away and open until nine. Ask him.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Four steps before me and I made it five." You are in your own chain and you did not leave yourself out._   ✓ _"the part people have turned into selling" — that does sound like blame, even though the rest does not._   ? _Did you really ask him, or is this what you are sure he would say?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the hands honestly and expect between a third and a half. Ask the ones who did how long it took: one to five minutes, and that number is the whole cycle. A chain with no findable first person is a different problem, worth naming.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**The version I was given:** "the new bridge is finished and the road opens next month." **What the man who works on it actually says**, asked on Friday: he says the bridge is finished, he says the road is not, he says there are two hundred metres at the Mezzeh end with no surface on them, and he says nobody on the site believes the month that is being said in the newspapers. He says the thing people get wrong is that a finished bridge looks finished from a car. What changed: "the bridge is finished" became "the road opens", which nobody said.']));

// ===================== 22.4 =====================
out.push(pb());
out.push(h2('22.4  Can you tell him that I rang?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Use six names with real difficulties in them — Khoury, Haddad, Yilmaz, Aswad, Jamila, Sayegh — and six numbers containing the dangerous pairs. Then the two students spell their own family names to each other with their backs turned, which is the only honest version of this task.'));
out.push(A('**b** All five are models to say once and keep: _Sorry, could you repeat the number? · Was that fifteen or fifty? · Could you spell that? · Is that with one L or two?_ Make everybody say the second one out loud; it is the one people are embarrassed to use and the one that saves the most.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – to collect something early: she needs the machine before Thursday, not Friday.'));
out.push(A('**b** **1** That she rang, at ten past three · that she needs the machine before Thursday · why — her daughter arrives from Dubai · the number, and that he can ring any time before six.   **2** She asks for it again and **reads it back**, digit by digit.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _Sorry, could you repeat the number?_   **2** _Could you spell that?_ / _Is that with one L or two?_   **3** _Can I say why? It helps him decide what to do first._   **4** _Let me read it back._   **5** _And when is the best time to ring you?_'));
out.push(NOTE('Item 3 is the whole cycle. Students do not ask why because they think it is rude, so give them the sentence with its reason attached and make them say it twice. In two weeks of real messages Nour was refused once out of sixty-one, and that number is worth telling the class.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Is Mr Fouad there?',
  '**B:** I\'m afraid he\'s away until the twentieth. Can I take a message?',
  '**A:** Can you tell him that I rang, and that I need the machine before Thursday?',
  '**B:** Before Thursday. And can I say why? It helps him decide what to do first.',
  '**A:** Because my daughter is coming from Dubai on Thursday.',
  '**B:** Could you give me your number?',
  '**A:** Oh double nine one, four four eight, two oh seven.',
  '**B:** Let me read it back. Oh nine nine one, four four eight, two oh seven. And your name — Khoury?',
  '**A:** Jamila Khoury. K-H-O-U-R-Y.',
  '**B:** So: you rang at twenty past four, you need it before Thursday because your daughter arrives, and he can ring you any time before six.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Mr Samih Aswad · 0955 613 118 · cannot come on Saturday, asks for Monday · reachable only between two and four._ Check against the card: the name survives, the reason survives, and **one digit** usually does not. That finding beats any warning.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_Message given: "Can you tell Hiba that Rasha rang, and that the books she asked for are at my house, and she can collect them any evening this week except Wednesday? 0933 440 712."_',
  '_Written version: **Mon 18:10. Rasha rang (0933 440 712). Asked me to tell you the books are at her house. Any evening this week except Wednesday. — S.**_',
  '**b** _What is missing from mine is **when she rang** — I wrote "this evening". What is missing from my partner\'s is **the number**, which he said he would remember._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mrs Jamila rang for Mr Fouad and Nour took the message. She asked Nour to tell him that she rang and that she needs the machine before Thursday rather than Friday. Nour asked why — and said that it helps him decide what to do first — and the reason is that her daughter is coming from Dubai for four days and she would like her kitchen back. Then she asked for the number again, read it back digit by digit, checked the spelling of Khoury, and said the whole message back: when she rang, what she needs, why, and that he can ring any time before six. Mrs Jamila said nobody has ever read it back to her before.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Can you tell him to I rang? → ✓ Can you tell him **that** I rang?   ✗ Can you tell him that ring me? → ✓ Can you **ask** him **to ring** me?   ✗ Can I take a note? → ✓ Can I take a **message**?   ✗ Repeat please the number. → ✓ Could you repeat the number, please?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Who · when they rang · what they want, in their words · how to reach them, and when.'));
out.push(A('**2** Because "before Thursday" and "soon" are not the same message, and the person coming back can only act on the first.'));
out.push(A('**3** _"Can I say why? It helps him decide what to do first."_ — the question with its reason attached, so that it does not sound nosy.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**LOCKING UP** — on the inside of the back door. Written by Rasha, after the night the fridge was left open.',
  'Four things, and three of them is not locking up.',
  '**1. The fridge and the freezer.** Both doors, with a hand, not with a look from across the room. The seal holds open if you push it the wrong way and you cannot see that from the till.',
  '**2. The back window.** Not "I think it was shut". Shut and the handle turned down.',
  '**3. The money.** In the box, in the drawer, with the number written in the book — in figures, in your handwriting, with your initial.',
  '**4. The key, and where it goes.** On the hook, not in your pocket. Somebody opens at eight and it is not always you.',
  '**And always walk back through once with the light on.** You are not being slow. Three of the four things above were found on that walk, not before it.',
  '**Walk through. Every time.** It takes forty seconds. I have timed it.',
]));
out.push(S('Stage 7 · Write freely (sample, 150 words)'));
out.push(SAMPLE([
  '**HANDING OVER THE SHIFT** — above the kettle. Written by Hiba, after four weeks of arriving at a desk and not knowing anything.',
  'Four things, and a handover with three of them is not a handover.',
  '**1. What is unfinished.** By name, not by number. _"The Haddad file is waiting for a signature from upstairs"_, not _"a few things pending"_.',
  '**2. Who is waiting for an answer, and since when.** The date matters more than the name. Somebody who has waited nine days is a different problem from somebody who rang this morning.',
  '**3. What went wrong today** — in your own words, before anybody else tells it. Not "a small problem with the printing": the printing came back with last year\'s address on four hundred envelopes.',
  '**4. What you promised and to whom.** This is the one everybody leaves out, and it is the only one that can make the next person a liar.',
  '**And always say the thing you are worried about.** You are not complaining. If you say nothing, the next person finds it at four o\'clock with no time left.',
  '**Say all four out loud, to a face. Every time.** It takes ninety seconds. I have timed it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the only one that can make the next person a liar" — I would have broken rule 4 tomorrow and not known it._   ✓ _Rule 2 has no wrong version under it; what does a bad version of it sound like?_   ? _What do I do if the person going off shift will not stop to tell me?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Put the cards where the thing happens, physically, before the lesson ends. Then the quiet question: whose card is about something that goes wrong in **this** room every week? There is always one, and letting the class write it beats any invented task.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I took a message for my father from a man about a job. I wrote "a man rang about the job, ring him back". No name, no number, no time, nothing about which job. My father had two things waiting and he spent the evening ringing the wrong one. The man did not ring again and my father found out six weeks later that the work went to somebody else. What was missing was all four things except the fact that somebody rang. I was fifteen and I have never taken a message badly since, which is the only good part.']));

// ===================== 22.5 =====================
out.push(pb());
out.push(h2('22.5  I am writing to ask whether…'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** _Hi_ — a friend. _Dear Mr Yilmaz_ — somebody you have never met, or a colleague you are formal with. _Dear Sir or Madam_ — only when you genuinely do not know who will open it. _See you_ — a friend. _Kind regards_ — a colleague or somebody you have never met; it is the safe one. _Yours faithfully_ — only with _Dear Sir or Madam_.'));
out.push(A('**b** **1** _I am writing to ask whether you could send the prices._ / _I would be grateful if you could send the prices._   **2** _Thank you for your help._   **3** _I look forward to hearing from you._   **4** _I am sorry to trouble you again._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – how to begin and end the letter.'));
out.push(A('**b** **1** That it is for when you genuinely do not know who will open it, and that otherwise it tells the reader you have not looked.   **2** Say why you are writing, in one sentence, before anything else.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _I am writing to ask whether you could send the current prices._   **2** _Could you possibly tell me whether it is ready?_   **3** _Thank you very much for your help._   **4** _I look forward to hearing from you._   **5** _I am sorry to trouble you about this again._'));
out.push(NOTE('Item 2 is where _if_ and _whether_ both work and _whether_ sounds more formal; both are correct and it is not worth a rule. What **is** worth insisting on is item 1: _writing **to** ask_, never _writing **for** ask_, which is the single commonest error in A2 formal writing from Arabic.'));
out.push(S('Stage 3 · Practise (sample – Card A, first message)'));
out.push(SAMPLE([
  '**A:** "Hi — are the April prices confirmed? Need to know by Thursday."',
  '**B:** Dear Mr Yilmaz,',
  '**B:** I am writing to ask whether the April prices are now confirmed.',
  '**B:** I would be grateful if you could let me know by Thursday, as we are holding an order for the final figures.',
  '**B:** I look forward to hearing from you.',
  '**B:** Kind regards, Lina Haddad',
  '**A:** Which part was hardest?',
  '**B:** The deadline. "Need to know by Thursday" is rude in a formal letter unless you say **why** Thursday.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_I am writing to ask whether the April prices are now confirmed._ · _…whether my certificate is ready._ · _…about the delivery arranged for Friday._ All three say why in line one, which is the only thing marked here.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_Dear Sir or Madam — no, Dear Mrs Sayegh, because her name is on the letter they sent me._',
  '_I am writing to ask whether my transcript for 2019–2021 can be issued in English as well as Arabic._',
  '_I need it for an application that closes on 30 May. I would be grateful if you could tell me what it costs and how long it takes._',
  '_If the English version is not possible, could you tell me whether a certified translation is accepted?_',
  '_I look forward to hearing from you. Kind regards, Hiba Nasser._',
  '**b** _What I would have got wrong is the greeting: I have written "Dear Sir or Madam" to that office twice, and her name was at the bottom of the letter I was answering both times._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lina asked whether to write "Dear Sir or Madam" and Mr Khaled said she knows his name, and that she has written to him eleven times with Rana\'s name at the bottom. He says it is for when you genuinely do not know who will open it, and that otherwise it tells the reader you have not looked. He says the first line should say why you are writing, in one sentence; she said that feels abrupt and he said it is useful, because a man with forty messages answers the ones that say what they are in line one. The ending is "Kind regards" with her name and her job, because "Yours faithfully" goes only with "Dear Sir or Madam". And she should say Rana is away in one clause and not apologise for it, because if she writes like somebody standing in, he will wait for Rana.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am writing for ask… → ✓ I am writing **to ask**…   ✗ I would be grateful if you can… → ✓ if you **could**…   ✗ Waiting your reply. → ✓ I **look forward to hearing** from you.   ✗ Dear Mr Yilmaz … Yours faithfully. → ✓ Dear Mr Yilmaz … **Kind regards** / **Yours sincerely**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Why she is writing: to ask whether the April prices are now confirmed.'));
out.push(A('**2** Whether the figures of 2 March are final, and whether the prices are held for thirty days from confirmation, as they were in January.'));
out.push(A('**3** A provisional figure — if the April list is not ready and the order cannot be held past the 20th.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** The Registrar, Faculty of Economics   **Subject:** Transcript request — Hiba Nasser, 2019–2021',
  'Dear Mrs Sayegh,',
  'I am writing to ask whether a transcript can be issued in English as well as Arabic.',
  'I completed the two-year programme in June 2021 and I collected the Arabic transcript in September of that year. I am applying for a place that closes on 30 May and I will collect any documents in person.',
  'I would be grateful if you could confirm two things:',
  '· whether an English transcript is issued by the faculty, and',
  '· what it costs and how many working days it takes.',
  'If an English transcript is not issued, could you tell me whether a certified translation is accepted? I would then need to arrange that before the 20th.',
  'I look forward to hearing from you.',
  'Kind regards,',
  'Hiba Nasser · 0991 334 208',
]));
out.push(S('Stage 7 · Write freely (sample, 146 words)'));
out.push(SAMPLE([
  '**To:** Al-Sham Properties   **Subject:** Flat 7, Building 14 — the heating, and the renewal in June',
  'Dear Mr Darwish,',
  'I am writing to ask whether the heating in flat 7 will be repaired before the renewal in June.',
  'I reported it on 8 January and again on 2 February, both times by telephone to this office. A man came on 11 January, said the problem is in the building and not in the flat, and nobody has been since.',
  'I am the tenant named on the agreement and I have not missed a payment in four years.',
  'I would be grateful if you could tell me two things:',
  '· whether the work is going to be done, and',
  '· if it is, in which month.',
  'If the work is not going to be done, I would like to know that plainly before June rather than after it, because it changes what I do about the renewal and I would rather tell you that now than surprise you with it.',
  'I look forward to hearing from you.',
  'Kind regards,',
  'Rasha Khalil · flat 7 · 0944 712 063',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _I knew what this was in four seconds, and the dates in the second paragraph mean I cannot pretend I have not heard of it._   ✓ _"whether the work is going to be done" — I could answer yes and still never do it._   ? _What do you want me to do if I cannot get an answer from the building committee before June?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Read only the first lines. The class sorts them in a minute and arrives at the test in the Writer\'s box: if you cannot tell what the letter wants without the rest, it goes to the bottom of the pile. Letters that open with an apology always come last.'));
out.push(S('Homework (sample – sent)'));
out.push(SAMPLE(['I sent it on Monday morning. The reply came on Wednesday and it is two lines: the work is "in the programme for the second quarter" and I should contact the building committee about the date. That is not an answer to either question, but it is in writing, and before Monday I had four years of telephone calls and nothing on paper. I am going to write once more with one question only — which month — because of what happens in 22.6 to Lina, and I am going to put it on its own.']));

// ===================== 22.6 =====================
out.push(pb());
out.push(h2('22.6  Thank you for your message — I can confirm…'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** _Yes:_ "Thank you for your message. I can confirm that…" · _No:_ "Thank you for your message. I am afraid we are unable to…" · _Not yet:_ "Thank you for your message. I will let you know as soon as…" The hardest is the **no**, every time, and the reason is that the class wants to explain before refusing, which doubles the length and reads worse.'));
out.push(A('**b** **1** _Thank you for your message. I can confirm that the prices are final._   **2** _I am afraid we are unable to deliver on Monday. We could deliver on Tuesday morning._   **3** _It is not ready yet. I will let you know as soon as it is — I expect to have it by Friday._   **4** _I can send it today, but it will be after five. Would that still be in time?_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – a reply that answers one question of two.'));
out.push(A('**b** **1** Whether the prices are held for thirty days from confirmation.   **2** Thank him for the first answer in one line, then ask the second question again on its own, as the only thing in the message — and not mention that he did not answer it.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _Thank you for your message. I can confirm that…_   **2** _Thank you for your message. I am afraid we are unable to…_   **3** _I will let you know as soon as I have an answer. I expect to have one by Friday._   **4** _I can confirm the first. As for the second, I will come back to you on Monday._   **5** _Before I can answer, could you tell me…?_'));
out.push(NOTE('Item 5 is the one nobody writes. A request you cannot answer yet is usually missing one fact, and asking for it is a reply; silence is not. Give them the sentence.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "Are the April prices confirmed?"',
  '**B:** Thank you for your message. I can confirm that the figures sent on 2 March are final for March, and the April list will follow on Monday.',
  '**A:** And "Can you deliver on Monday?"',
  '**B:** I am afraid we are unable to deliver on Monday. We could deliver on Tuesday before twelve, if that helps.',
  '**A:** And "Are the prices held for thirty days?"',
  '**B:** I will let you know as soon as I have checked with the office. In the meantime, would it help if I sent you the January terms, which I do have?',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('Next steps offered: _the April list will follow on Monday_ · _we could deliver on Tuesday before twelve_ · _would it help if I sent the January terms?_ The reply students most want to receive is the **no** with the alternative — worth saying out loud.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Request: "Can you teach my Saturday class on the 18th?" — Thank you for asking me. I am afraid I cannot do the 18th; I am in Homs that weekend and I would not be back before four. I could do the Saturday after, the 25th, or I could take your Tuesday evening group on the 14th if that is any use to you. Let me know which is more help._',
  '**b** _The last time somebody answered one of my two questions was the faculty, last month. I asked what the fee was and whether it could be paid in two parts, and I was told the fee. I asked again about the two parts and I was told yes in one line. It took three weeks and one of those weeks was me waiting and feeling ignored._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mr Yilmaz replied in four hours. He says the figures of the second of March are final, he says the April list will be sent on Monday, and he says he will deal with Lina directly until Rana is back. But he answered one of her two questions and said nothing about the second — whether the prices are held for thirty days. Lina thinks he missed it rather than avoided it, because it was the second item in a list of two at the bottom. So she is going to thank him for the first answer in one line and then ask the second question again, on its own, as the only thing in the message. And she is not going to mention that he did not answer it, because he is not avoiding her — he is a man with forty messages and her question was in the wrong place.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I confirm you that the prices are final. → ✓ I **can confirm that**…   ✗ We are not able of delivering. → ✓ We are **unable to** deliver.   ✗ I inform you that your order is sent. → ✓ Your order **was sent on Tuesday**.   ✗ You did not answer my second question. → ✓ _ask it again, on its own_ — the sentence is correct English and it is the wrong move.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That the figures sent on 2 March are final for March · that the April list will be sent on Monday 8 April · that he is glad to deal with her directly and will copy her on everything concerning order 2214.'));
out.push(A('**2** _"which I should have asked more clearly"_ — she takes the blame for the question rather than pointing at his answer.'));
out.push(A('**3** Because the answer decides whether they place order 2214 this week or next.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Reply:** Dear Mrs Haddad,',
  'Thank you for your message. I can confirm that your place on the course is held until 30 April. The fee for the year is unchanged.',
  'I note that you will be away in March. We can move your start to the April group without any charge.',
  'Please let me know if you need anything further.',
  'Kind regards, A. Sayegh',
  '**Follow-up:** Dear Mrs Sayegh,',
  'Thank you — that is exactly what I needed about the dates.',
  'One question, which I should have asked more clearly: **can the fee be paid in two parts, in April and in July?**',
  'That is the only thing I need, and the answer decides whether I start in April or in September.',
  'Kind regards, Rasha Khalil',
]));
out.push(S('Stage 7 · Write freely (sample, 131 words)'));
out.push(SAMPLE([
  '**To:** Al-Sham Properties   **Subject:** Flat 7 — one question',
  'Dear Mr Darwish,',
  'Thank you for your reply of 12 February, and for confirming that the heating work is in the programme for the second quarter. That is the first thing I have had in writing in four years and I am grateful for it.',
  'One question, which I should have asked more clearly in January: **in which month is the work expected — April, May or June?**',
  'That is the only thing I need. I do not need a date, or a name, or anything from the committee; one of three months is enough.',
  'The answer decides whether I sign the renewal in June or ask you for a six-month agreement instead, and I would rather tell you which of those it is going to be in February than in June.',
  'Kind regards,',
  'Rasha Khalil · flat 7 · 0944 712 063',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"one of three months is enough" — you made it easy to answer, and I would answer it today._   ✓ _"That is the first thing I have had in writing in four years" — I can still feel the complaint there, and it is the one line I would cut._   ? _Is the month really the only thing you need, or will the answer produce another question?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the unanswered questions older than a month, then ask how many were the second question in a list. In most classes it is more than half — the cycle proved by the room rather than by the book.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I sent it on Thursday evening. He answered on Friday morning, six words: "May, probably the second half." That is all I asked for and I have had it in two days, after four years of telephone calls, and the only difference is that this time the message contained one question and nothing else. I have written the date in the front of my diary and I am going to ask again at the end of April, once, in the same shape.']));

// ===================== 22.7 =====================
out.push(pb());
out.push(h2('22.7  Review & Mediate: What does the email say?'));
out.push(S('Stage 1 · Get ready – Unit 22 quiz'));
out.push(A('**1** She asked me **to ring** her.   **2** He told **me to** send it.   **3** He **told** me to wait.   **4** She asked me **not to** wait.   **5** He says the parts **are** on the lorry.   **6** **I look forward to hearing from you.**'));
out.push(NOTE('Number 3 has two right answers — _he told me to wait_ and _he said I should wait_ — and it is worth taking both, because the rule students need is not about _tell_ but about _say_: you **say** something, you **tell somebody** something. Number 6 is a fixed phrase and should be learned as one piece, including the _to_ + _-ing_, which is the only place at A2 where that shape must be memorised rather than understood.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** **Point 3** is the one that matters — payment terms change from 30 days to 21, nine days less every month, for ever. **Point 4** is what happens if point 3 catches them: pro forma, payment before despatch, which would stop the workshop. Points 1, 2 and 5 are not theirs. Before the 25th they can ask **one** question: whether the twenty-one days runs from the invoice date or the delivery date, which for them is four days.'));
out.push(NOTE('Nour\'s method is the thing being taught, and it belongs on the board in her order: **how many points, how many are mine** → **the ones that are not mine, briefly** → **the one that is the whole email** → **the threat if the first one catches me** → **check it against our own history** → **the one question worth asking**. Students who follow that order explain any terms page; students who go 1, 2, 3, 4, 5 produce the email again.'));
out.push(S('Stage 3 · Practise (sample – Email A, the landlord, explained without showing it)'));
out.push(SAMPLE([
  '_Five points, and two of them are yours. Let me do the three that are not._',
  '_Point 1 is just the date they review rents, which is July. Point 4 says repairs stay theirs except glass. Point 5 says it applies to everybody from the next renewal, and that is there so that nobody rings and asks for an exception._',
  '_Yours is point 2: increases will not be more than fifteen per cent in any one year. That is the whole letter, and fifteen per cent of your rent is a number to work out this evening._',
  '_And point 3 is your protection: two months\' notice **in writing**. If they tell you in the street, that is not notice._',
  '**B:** My renewal is in September. — **A:** Then point 3 says the paper must come by the start of July. **C:** What would you ask? — **A:** Whether the fifteen per cent is of the rent alone or of the rent plus the service charge; mine are on one paper and nobody has ever separated them.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Mine: point 2, the fifteen per cent. · The threat if it catches me: point 5, because it applies to everybody and cannot be argued individually. · The question: is the fifteen per cent of the rent alone or of the rent and the service charge together?_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_It is the paper from the telephone company about the new tariff. Six points, two are mine; not mine are business accounts, roaming, and paper bills, which I do not get anyway._',
  '_Mine, and it is the whole page: the bundle changes from thirty days to a calendar month. It sounds like nothing; it means that if I pay on the twenty-eighth I lose two or three days every month._',
  '_And the threat: after two late payments the line goes to pay-as-you-go, and I am late most months by a day, because I pay when I get paid._',
  '**A:** How many points are mine? — **B:** Two of six. **A:** Which is the whole message? — **B:** The calendar month. **A:** What happens if it catches me? — **B:** Pay-as-you-go, after two late months. **A:** What would you ask? — **B:** Whether the payment date can be moved to the fifth, which they do not advertise and which costs them nothing.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Hiba explained the email from the centre about fees. Five points, and only two are hers: her own fees do not change, and point four is the one that matters — certificates only for students who attend eighty per cent of lessons. She has missed four of twenty-four, which is inside it, but two more would take her out, and nobody has told the class this. Point three, about merging small classes, is not hers but it is the one she would watch, because 4B is eleven and the rule is eight. And point five is the one everybody will fall over: any question must be raised before the end of week two, and we are in week six. So I decided I would ask whether the eighty per cent counts lessons the centre cancelled, because three of my four were weeks when there was no class at all.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It says all orders need confirmation in writing. → ✓ only orders **over 100,000 SYP**.   ✗ It says we have 21 days from delivery. → ✓ 21 days **from the date of invoice** — and that is exactly the question Nour is asking, so the error is a good one.   ✗ Pro forma means a fine. → ✓ **payment before despatch**.   ✗ Point 5 says we can negotiate. → ✓ point 5 says the changes are **not** negotiable individually.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 5'));
out.push(A('**1** if   **2** on   **3** to   **4** was   **5** and   **6** that _(or **which**)_'));
out.push(NOTE('**2** is the preposition students get wrong — _on four occasions_, not _in_ — so collect the set: _on Monday · on 4 April · on four occasions_. **4** looks hard and is not: the sentence needs a past verb and nothing else fits. **6** takes _that_ or _which_, and Cambridge marks both.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  'There are **five** points and **two** of them are ours. **Point 1** is nothing: **orders under a hundred thousand go out in three days, exactly as now**. **Point 2** is about orders over **a hundred thousand**, which we **have placed twice in two years**. And **point 5** just says **it is the same for everybody** — that line is there so that we do not ring.',
  '**The one that matters is point 3:** they are changing **payment** from **thirty days** to **twenty-one**. That is **nine days** less, every month, for ever.',
  '**And point 4 is what happens if it catches us:** **one late invoice and we are on pro forma — we pay before they send anything, and that stops the workshop.** We have been late twice, both times inside thirty days, and with twenty-one days both would have been late.',
  'We can\'t **argue with it — point 5 says so**, but we can ask **whether the twenty-one days runs from the invoice date or the delivery date, because for us that is four days and nobody has said**. I\'m writing **today, before the twenty-fifth**.',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (46 words)**',
  'Hi Maher! My cousin Samer rang me yesterday evening and asked me to tell you that he can\'t come to the meeting on Thursday. He asked me to say sorry. You can reach him on 0933 440 712, any evening after seven. Hope that helps!',
]));
out.push(SAMPLE([
  '**Weaker sample (27 words) – why it only just passes**',
  'Hi. My cousin call me and he say he not come Thursday. He is sorry. His number 0933 440 712. Bye.',
  '_All three content points are there and it is over twenty-five words, so it passes. But **my cousin call me** needs **called**; **he say** needs **says** or **said**; **he not come** needs **cannot come**; **his number** needs **is**. And **when** is missing: the strong version says "yesterday evening", this one says only "call me", and that is the content point an examiner marks down first._',
]));
out.push(S('Unit 22 check · A  Grammar and vocabulary'));
out.push(A('**1 a** to ring   **2 b** me to   **3 b** not to   **4 b** told   **5 a** says   **6 b** that   **7 b** to ask   **8 c** to hearing'));
out.push(S('Unit 22 check · B  Listening (Track 22.14)'));
out.push(A('**1 B** (Nour – wrote the exact words when there was no name)   **2 C** (Omar – started the book so that nothing lived in anybody\'s head)   **3 D** (Lina – asked the one unanswered question again, on its own)   **4 E** (Mr Khaled – told her to send the letter without showing it to him)   **5 G** (Mrs Jamila – gave a reason without being asked)'));
out.push(A('The two extra letters are **A** (rang the first person in the chain) and **F** (refused to leave a message at all).'));
out.push(NOTE('The full audio script for Track 22.14 is printed in the Student\'s Book **after** the questions. Read it **twice** at normal speed. **A** is the strongest distractor: ringing the first person in the chain is the most memorable thing in the unit and it is not in this script, so students who answer from the unit rather than the recording put it against Nour.'));
out.push(S('Unit 22 check · C  Writing (sample, 96 words)'));
out.push(SAMPLE(['**Tue 15:40 · for Mr Fouad.** Mrs Jamila Khoury rang, 0991 448 207 — read back and confirmed. She asked you to ring her before Thursday, not Friday. Her words: "I need the machine before Thursday, my daughter is coming from Dubai and she has not seen the house in two years." She asked me to tell you that any time before six is good, and she asked you not to ring after six because of her mother. What I could not find out: whether the machine has to be finished or only collected — she says you will know which. — N.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The line to carry forward is **changing the pronouns**, which is the one thing in this unit that makes a message wrong rather than merely clumsy. Five oral prompts at the start of each lesson for a fortnight — _"Ring me tomorrow," she said_ — fixes it; explaining it again does not.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Unit 22 was about passing on what other people said. Unit 23 is about telling people something **new**: _have you heard? They\'ve opened the library._ — the present perfect for news, and then the past simple for everything that follows it.',
  'Ask the class to bring **one** piece of news about where they live, from a person and not from the internet. Unit 23 does not work without it: the whole of 23.1 is their own news in the present perfect, and the whole of 23.3 is what happens to it in the next sentence.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 22 · Answer Key');
