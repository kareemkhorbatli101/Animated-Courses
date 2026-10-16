// Proactive English B1 · Syria Edition · Book 1 · Unit 2 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 2  Telling a Story — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**The unit is one long build.** 2.1 is the scene, 2.2 is the chain, 2.3 is the interruption, 2.6 is the ending — and the student is writing the **same story** through all four. Do not let them start a new one in 2.6; the point is that a story they thought was finished in 2.1 keeps getting better.',
  '**It runs on the Unit 1 homework** — three facts from somebody\'s worst journey, not the story. If a student arrives with a finished anecdote, take the three facts out of it and make them put the anecdote away.',
  '**Still no past perfect.** Unit 2 is a narrative unit and is therefore where it wants to appear; it is held back one more unit so that **Unit 3** can own it. One signposted preview appears in the NEXT box at the end and nowhere else. If a student produces one, accept it and say it is next week.',
], C.lblue, C.navy));

// ===================== 2.1 =====================
out.push(pb());
out.push(h2('2.1  Before anything happened'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The rule that only three facts may be given is the whole exercise: the partner has to **ask**, and what they ask for is nearly always the scene. Do not let the teller answer yet.'));
out.push(A('**b** Scene: **1**, **3**, **5** — all unfinished, all going on at once. Event: **2**, **4** — both finished, both one moment.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – he has started with the event.'));
out.push(A('**b** **1** The rain, that nobody was talking, and the two women standing at the front with their backs to him. _(He also gives the number — nineteen on a bus for fourteen — and himself wiping the glass.)_   **2** To make somebody ask _and then_. Nobody asked it the first time, because he told them first.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 The lights went out.** _It was about nine and we were clearing the table. My mother was washing up and talking to my aunt on the telephone at the same time. The television was on in the other room with nobody watching it._',
  '**2 My telephone rang.** _It was ten past two in the morning. I was asleep in the way you are asleep when you have to get up at five, which is not properly. The flat was cold because the heating goes off at midnight._',
  '**3 The door opened.** _It was the last twenty minutes of a Thursday. Nobody was saying anything useful and two people were already packing their bags. The man from the office below was shouting at somebody on the stairs._',
  '**4 Somebody shouted my name.** _It was half past four and the market was the way it is at half past four. I was carrying two bags and counting my change and not looking at anybody._',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The machine stopped.',
  '**B:** It was about eleven and the yard was empty. Two of the men were eating outside because it was the first dry day that week. I was in the office with my back to the window, signing things.',
  '**A:** And then?',
  '**B:** And then the noise stopped. Not changed. Stopped.',
  '**A:** The line I can see is the two men eating outside because it was the first dry day.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('The three scene lines and the event. The line nobody else would have thought of is nearly always the one with a **reason** attached — _they were eating outside because it was the first dry day that week_ — and it is worth saying so: a detail with a reason is remembered; a detail on its own is decoration.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_It was the third of August and it was thirty-nine degrees at nine in the morning, which is the kind of heat where the road smells. We were at the Baramkeh garage and the bus was standing in the sun with its doors shut and the driver was nowhere. About forty of us were waiting in a line that was not a line, and an old man in front of me was holding his ticket in both hands as if somebody might take it._',
  '**b** _The line my partner could see was the old man holding his ticket in both hands. I did not think that was the good one; I thought the heat was._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq gave his three facts — February, the Harasta turning, forty minutes — and when Jad asked what happened he said a woman had a baby on his bus, and Ms Huda stopped him. She said he started with the only sentence anybody would remember and now there was nowhere to go: it is the interesting part and it is worth four seconds. So he started again with the scene. It was half past six in the morning and it was raining, the kind that does not stop. There were nineteen people on a bus for fourteen. Nobody was talking, because nobody talks at half past six. Two women were standing at the front with their backs to him and he could not see past them, and the windows were running with water so he was wiping the glass every thirty seconds. Then he said that one of the two women turned round, and Samira said "oh" — and Ms Huda said that sound is what the scene is for.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It rained and nobody talked. _(as a scene)_ → ✓ It **was raining** and nobody **was talking**.   ✗ I was knowing the road. → ✓ I **knew** the road.   ✗ The rain was heavy. → ✓ _the kind of rain that does not stop_ — a clause, not an adjective.   ✗ It was raining and it was cold and it was dark and it was early. → ✓ three lines, not four, and one of them must be people.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Seven or eight facts, and you can see none of them. Everything in opening 1 is told and nothing is shown — and it is all perfectly accurate, which is the point worth making.'));
out.push(A('**2** That the two women standing in front of the mirror irritated him for about two minutes and then stopped irritating him, because he had other things to think about.'));
out.push(A('**3** On a line of its own, after a paragraph break — and the page has been made **still** before it: nobody is talking, nothing is moving except the rain and the windscreen wiper.'));
out.push(NOTE('Answer 2 is the writing lesson. The small ordinary irritation is what makes the narrator a person rather than a camera, and it is the thing students leave out because it does not seem important enough. Tell them it is in because it is unimportant.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'It was ten past eight on a Monday and it was the kind of cold that gets into a building and stays there until April. I had twenty-six of them in the room and four empty chairs, which in that school in January is a good morning. Nobody was talking; they were waiting to see what sort of mood I was in, which is a thing a class decides in the first ninety seconds and does not revisit. The window at the back was open about four inches because it does not shut, which annoyed me for a moment and then did not.',
  'Then the door opened and the head of year was standing in it.',
]));
out.push(S('Stage 7 · Write freely (sample, 142 words)'));
out.push(SAMPLE([
  'It was the third of August, it was thirty-nine degrees at nine in the morning, and it was the kind of heat where you can smell the road. We were at the Baramkeh garage and the bus for Latakia was standing in full sun with its doors shut and its driver nowhere.',
  'About forty of us were waiting in a line that was not a line. Two women behind me were arguing quite happily about whether the eleven o\'clock would be better. An old man in front of me was holding his ticket in both hands, the way you hold something when you have been told once that you will need it. I was counting the people in front of me and recounting them, which I knew was pointless while I was doing it, and I was doing it because I had nothing else to do with my hands.',
  'Nobody was saying anything about the heat. That is what I remember about that garage: forty people in thirty-nine degrees and not one word about it.',
  'Then a man in a company shirt came out and said the Latakia bus was cancelled.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"forty people in thirty-nine degrees and not one word about it." That is the line._   ✓ _"I was counting the people in front of me and recounting them" — good, but "which I knew was pointless while I was doing it" is doing the same job twice._   ? _What did you think when the man came out, before he spoke?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Read the events alone, with no scene: _the bus was cancelled · the lights went out · the machine stopped · the door opened_. None of them is interesting and the class will say so, which is the whole argument for the cycle and takes ninety seconds to make this way instead of ten minutes to assert.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['It was a quarter to six on a Friday in November and it was getting dark in that way where the light goes while you are looking at something else. My mother was asleep in the chair with the television on. My brother was on the balcony with the door half shut, talking to somebody for a long time in a low voice. I was at the table with the forms for the course in front of me and a pen, and I was not filling them in. The kettle boiled about ten minutes earlier and nobody went for it. Nothing happened. I sat there for about forty minutes and then I filled in the first page.']));

// ===================== 2.2 =====================
out.push(pb());
out.push(h2('2.2  And then, and then, and then'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Use six verbs from the track itself — _turn · stand · ask · ring · drive · stop_ — so that the past forms the class will need in ten minutes are the ones on the board now.'));
out.push(A('**b** The order: _we stopped at the turning_ → _she turned round_ → _a passenger stood up_ → _the ambulance did not come_ → _the baby was born_. Joined: _We stopped at the turning. She turned round. Then a passenger stood up. The ambulance did not come, so in the end the baby was born on the bus._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the midwife. She was already standing, she asked to be asked, and Tareq says he did almost nothing after that.'));
out.push(A('**b** **1** "The baby is coming."   **2** The four seconds when nothing happened and he was thinking about the schedule — and that the company counts the nine minutes.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '_The lights went out. I found the torch in the second drawer. The neighbour knocked about a minute later. I went down. The whole street was out._',
  '**Five sentences, five full stops, no _and then_ at all.** Read it aloud against a version joined with four _and thens_ and ask the class which is faster. Speed is the only argument that works here, because students believe short sentences are for children.',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Lights out · torch · neighbour knocked · whole street out · back at two.',
  '**B:** The lights went out at about nine. I found the torch in the second drawer. Then the neighbour knocked, so I went down with it.',
  '**A:** How did it end?',
  '**B:** After that we stood in the street with about fifteen other people for an hour, because the whole street was out and nobody had anything to do. In the end it came back at two in the morning and everybody cheered, which was ridiculous.',
  '**A:** You used _and then_ no times at all.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('Count the sentences and the sequencers. The faster performance is always the one with **more full stops and fewer words**, and the class hears it immediately — which is why this is a listening task and not an explanation.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The man said the bus was cancelled. Forty people started talking at once. I went to the window and asked what time the next one was, and he said four o\'clock. I rang my sister in Latakia and told her not to come to the garage. Then I sat down on my bag._',
  '**b** _The event I am not proud of: a woman with two children asked me what the man said and I told her, and then I walked away from her instead of helping her get to the window, because I wanted to keep my place in the line._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The woman turned round and said four words to the bus, not to Tareq: the baby is coming. Then nothing happened for about four seconds, which he says is a long time and which he is not proud of, because he was thinking about the schedule. He pulled into the service road and turned the engine off. He stood up and asked whether there was a doctor, and nobody moved, so he asked again — and a woman at the back said she was not a doctor, she was a midwife, and she was standing up waiting for somebody to ask. After that he says he did almost nothing. He rang for an ambulance and was told forty minutes because of the rain. He asked the men to get off and stand at the front and they all did, in that rain, without a word. The midwife said the hospital was eleven minutes away, so he drove, and she talked him through the corners in a flat voice. In the end the baby was born in the hospital car park, four minutes after they stopped. He left the men at the Harasta turning and he has thought about that every February since.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ At the end the baby was born. → ✓ **In the end**.   ✗ Finally I drove. → ✓ _So I drove._ / _In the end I drove._   ✗ I was pulling into the service road and I was turning the engine off. → ✓ past simple for the chain.   ✗ and then… and then… and then… → ✓ full stops.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The four seconds. He says that every time he has told the story out loud he has left them out, and that in them he was thinking that he was nine minutes behind and that the company counts the nine minutes.'));
out.push(A('**2** The midwife\'s: that she was standing for twenty minutes waiting for somebody to ask. _(Accept any phrasing — the point is that it beat the baby.)_'));
out.push(A('**3** Standing outside the bus, holding the door, counting the eleven men he left at Harasta — eleven times on the way.'));
out.push(NOTE('Answer 3 is the one to read aloud. The baby is being born four feet away and the page is about a man counting to eleven. Ask the class why that is better than describing the birth; somebody will say "because we already know what that is like", and they are right.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'The head of year said there was a problem with the hall and could I take the other class as well.',
  'For about three seconds nothing happened at all. I want that written down, because I have told this story four times and I have never put those three seconds in, and in them I was not thinking about fifty-two children in one room. I was thinking that I marked twenty-six books on Sunday and not fifty-two.',
  'Then I said yes. I moved the tables to the walls. I asked my own class to bring their chairs, and twenty-six eleven-year-olds carried twenty-six chairs without being asked twice, which is the part I would not have predicted.',
  'In the end there were fifty-two of them and one of me for an hour and ten minutes, and I was standing on a chair at the front counting heads, and I counted them four times.',
]));
out.push(S('Stage 7 · Write freely (sample, 139 words)'));
out.push(SAMPLE([
  'The man in the company shirt said the Latakia bus was cancelled and went back inside.',
  'For about four seconds nobody moved. I want to write those four seconds down, because when I tell this story I always start at the shouting, and in the four seconds before the shouting I was not thinking about the forty people or the old man with his ticket. I was working out whether I could still get my money back.',
  'Then everybody started talking at once. I got to the window first, because I counted that line for twenty minutes and I knew exactly where the door was. I asked what time the next one was. He said four o\'clock.',
  'After that I rang my sister and told her not to come to the garage. Then I sat down on my bag, and a woman with two children asked me what the man said, and I told her, and I did not help her get to the window.',
  'The next bus went at ten past four. I was on it. I have never found out whether she was.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I have never found out whether she was." You stopped at a fact and it is the best line in the page._   ✓ _"everybody started talking at once" — that is the only sentence doing no work._   ? _Did you think about the woman on the bus, or only afterwards?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the hands. Then ask the ones who put the unflattering thing in whether the story got better or worse. The answer is always "better" and it is always said with surprise, and that is the moment the cycle is actually taught.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I told my brother the garage story on Friday and I left out the woman with the two children again, and I did not notice that until I was writing this down. I have now told that story five times and she has been in it once, on paper, in this book. What I leave out is not the bad part of the day. It is the part where I am worse than the person I describe myself as being.']));

// ===================== 2.3 =====================
out.push(pb());
out.push(h2('2.3  While I was waiting'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Say which half is long and which is short every time, out loud, before anybody joins them. The grammar follows from that and students who are made to say it stop guessing.'));
out.push(A('**b** **1 when** _(I was waiting when the call came)_   **2 While** _(While I was waiting, I counted the cars)_   **3 As** _(As I turned round, the door closed)_   **4 while** _(He rang while I was in the shop)_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – a lorry that did not come.'));
out.push(A('**b** **1** Standing in the yard with a cup of tea going cold in his hand, looking at the gate as if looking at it helps.   **2** That he lost them to eleven minutes on the telephone, not to the lorry: he was listening to something he could not change while the thing he could change was happening forty metres away.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _I **was waiting** at the stop **when** the call **came**._   **2** _We **were having** dinner **when** the lights **went** out._   **3** _**As** I **crossed** the road, I **saw** him._   **4** _**While** she **was talking**, I **heard** the machine stop._'));
out.push(S('Stage 3 · Practise (sample – Card A, first pair)'));
out.push(SAMPLE([
  '**A:** stand in the yard / the telephone go',
  '**B:** I was standing in the yard when the telephone went.',
  '**B:** While I was standing in the yard, the telephone went.',
  '**A:** Which is the real one?',
  '**B:** The second, because the standing was going on for an hour and a half and that is the part of the morning I remember. The first one makes the telephone the subject of the morning. It was not; the waiting was.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('Which version each pair called real. It is nearly always the _while_ version, with the long thing first — because that is the order the day had, and because the first clause is what the speaker was living in. This is worth naming: the choice is not grammatical, it is about which half of the sentence the speaker was inside.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I was in Hama with four pharmacies to do when my sister rang to say my father was in the hospital in Homs. Homs was on the way back. The fourth pharmacy was the one that pays late and I was trying to see that man for three weeks. I did the fourth pharmacy._',
  '**b** _I have known since that evening that it was the wrong one, and it took me about eleven minutes to know it, which is the part I think about: I knew while I was still doing it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel\'s three facts were March, a Tuesday, and the paper from Türkiye. The lorry was due at eight, and at half past nine he was standing in the yard with a cup of tea going cold, looking at the gate as if looking at it helps. While he was standing there the telephone went in the office, and as he crossed the yard he was already deciding what he was going to say, which he says was a waste because the driver did not let him say any of it. The driver was in Kilis and was there since Sunday — four days, and nobody told them. And while the driver was telling him that, the big machine stopped; he heard it through the window, in the middle of the sentence. Two things at once, and he could only do one, and he says he did the wrong one: he stayed on the telephone for eleven minutes and by the time he got to the machine the roller took four hundred sheets. He thought for a year that he lost the two days to the lorry. He says he lost them to eleven minutes on a telephone.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ While the telephone went, I was standing in the yard. → ✓ _while_ goes with the **long** thing.   ✗ When I was standing, the telephone was going. → ✓ one of them must be the past simple.   ✗ I was standing in the yard when I was hearing the telephone. → ✓ **heard**.   ✗ As soon as I was crossing the yard… → ✓ **As** I crossed / **While** I was crossing.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That the lorry lost them.'));
out.push(A('**2** Standing on the telephone being told about Kilis — he says he heard the machine stop through the window and stayed on the telephone for eleven minutes.'));
out.push(A('**3** _Which of these can I still change?_ He says it has to be on the wall because he would do it again tomorrow if it were not — the rule has not become a habit yet, and he says so.'));
out.push(NOTE('The admission in the last line is what makes the page work, and it is the same move as 1.4\'s "the way I was wrong matters" and 1.5\'s "half of it is mine". Three units, three cycles, one habit: the page that admits the lesson has not taken is the page people believe. Name the pattern aloud — students who see it start doing it on purpose.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FOUR PHARMACIES** · for my own notebook',
  'On the ninth of October I missed four hours with my father, and for a month I told everybody that the roads lost them.',
  'This is what actually happened. I was in Hama with one pharmacy left to do when my sister rang. As I was listening to her I was already working out the route, which was honest of me and not useful. There was nothing I could do about Homs from Hama except drive to it.',
  'While she was telling me which ward, I was looking at the fourth pharmacy across the road. I did the fourth pharmacy. It took fifty minutes.',
  'Fifty minutes is the four hours, because after it I hit the road at the wrong time of day.',
  '**The rule.** When two things happen at once, ask: **which of these will still be there tomorrow?** The pharmacy was going to be there on Thursday. I would do it again next month if this were not written down.',
]));
out.push(S('Stage 7 · Write freely (sample, 133 words)'));
out.push(SAMPLE([
  '**ELEVEN MINUTES OF MY OWN** · Yara Mansour',
  'In April I lost a result that took three days to grow, and I have told two people since then that the incubator failed.',
  'This is what actually happened. The incubator did fail. I was writing up the Thursday batch when the alarm went, and as I crossed the laboratory I could see the light on the second door, which is the one that fails.',
  'While I was dealing with the second door, the telephone went in the office — a doctor who wanted a result that was already on his desk and who likes to be told things twice.',
  'I took the call. I stood with the telephone in my hand for nine minutes explaining something that was already explained, while the door I opened a minute earlier stood open behind me.',
  'Three days of growth. Nine minutes.',
  '**The rule.** When two things happen at once, ask: **which one is still moving?** The doctor was not moving. I would take that call again tomorrow, which is why this is written down and not thought about.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"The doctor was not moving." Six words and the rule is proved._   ✓ _"a doctor who likes to be told things twice" — true, and it is version 1 getting in._   ? _Have you taken a call like that since?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Read six rules aloud as questions and count how many are a version of _which of these can I still change?_ It is usually three or four out of twelve. Then ask what the others have in common; they are nearly always about **people** rather than about time — _who will remember this tomorrow?_ — and that is worth ten minutes.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The time I chose the right one: the night the power went off at home while I was on the telephone to the centre about my fee. I said "I will ring you back" and I put it down and went to find my grandmother, who is eighty-one and was on the stairs. The fee conversation happened two days later and cost me nothing. I had to think for four days to find this example and I could find only one, and my husband found three for me in about a minute, which I am still thinking about.']));

// ===================== 2.4 =====================
out.push(pb());
out.push(h2('2.4  We used to go every summer'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Insist on "and I have stopped" — a _used to_ that is still true is the commonest error in the cycle and it is easier to prevent here than to correct later.'));
out.push(A('**b** **1 used to** go _(ten years running)_   **2 went** to Latakia in 2019 _(one occasion with a date)_   **3 used to** smoke   **4 took / sat** my exam in June _(one occasion)_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – going to Latakia.'));
out.push(A('**b** **1** Nineteen years, from 1992 to 2011; they stopped in 2012.   **2** That she did not like it. She complained about that house to her sister every year for nineteen years.'));
out.push(S('Language box · Practise'));
out.push(A('**1 used to** go   **2 went**   **3 used to** be   **4 took / sat**   **5 used to** ring'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** A meal the family always had together.',
  '**B:** We used to eat together on a Friday, all of us, every week, from about 2005 until my grandmother died.',
  '**A:** The same every time?',
  '**B:** The same table and the same eleven people, and my uncle used to arrive forty minutes late every single week and nobody ever moved the time, because moving it would have meant admitting that we had all arranged our Fridays around him being late.',
  '**A:** When did it stop?',
  '**B:** 2019. Nobody decided. There was a last Friday and I could not tell you which one it was.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('The detail that was the same every time. _The same bad mattress · the same bad place for tea · my uncle forty minutes late and nobody moving the time._ Collect four and ask which one tells you most about the family; it is never the one about the place.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I used to walk my sister to school every morning for six years, from when she was five until she was eleven. The same route, and the same argument at the same corner about whether there was time to go the long way. It stopped when she moved to the school near my aunt and I have never once walked that route since._',
  '**b** _The thing I complained about and would like back: that argument at the corner. I used to find it exhausting. It took four minutes a day and it is the only four minutes a day I ever got alone with her._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Umm Kinan\'s story is not one journey, it is nineteen. They used to go to Latakia every summer, the same two weeks, the same house, from 1992 to 2011 — the same room and the same bad mattress. They used to leave at four in the morning so that the children slept through the mountain part, and her husband used to stop at exactly the same place for tea, which was not a good place; he stopped there because he stopped there the first year. Nothing happened in 2011. They did not go in 2012 because her daughter had an examination in the August, they did not go in 2013 either, and by 2014 nobody mentioned it at all. Nineteen years and there was no last time — there was a last time and none of them knew it. And what she did not notice at the time is that she did not like it: she complained about that house to her sister every year for nineteen years, and she says she would give a great deal to be in it this August with all of them, complaining.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ We used to go in 2019. → ✓ We **went** in 2019.   ✗ We didn\'t used to go. → ✓ didn\'t **use** to.   ✗ Did you used to go? → ✓ Did you **use** to go?   ✗ I am used to go there every summer. → ✓ I **used to** go. _(the other structure is Unit 17)_'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because the number looks wrong written down — nineteen.'));
out.push(A('**2** That they went because they had always gone.'));
out.push(A('**3** She would say nothing about the mattress — and she is not going to mention missing her husband, the children being grown, or wanting to go this August, although all three are in the line.'));
out.push(NOTE('The last line is four words long after four hundred, and it is the model for every ending in 2.6. Read the page aloud and stop before the last line; ask the class to write it; then read hers. Nobody writes anything shorter than ten words, and that comparison does more for the next cycle than any instruction.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**SIX YEARS OF MORNINGS** · Lubna Sweidan',
  'I used to walk my sister to school every morning from 2011 until 2017. Six years. About eleven hundred mornings, which I have worked out twice because it does not feel like eleven hundred of anything.',
  '**What was the same every morning.** We used to leave at twenty past seven whatever was going on in the house. We used to have the same argument at the corner of Baghdad Street about whether there was time to go the long way, and I used to win it, and she used to accept losing it in the same four words every time: "fine, but next week."',
  '**What I used to think about it.** That it was twenty-five minutes I did not have. That I was nineteen and I was somebody\'s escort.',
  '**How it stopped.** She changed schools in the September and I did not walk that way again. There was a last morning in June 2017 and we had the argument on it and I won it.',
  '**What I would say to myself at that corner.** Go the long way.',
]));
out.push(S('Stage 7 · Write freely (sample, 151 words)'));
out.push(SAMPLE([
  '**EVERY THURSDAY FOR ELEVEN YEARS** · Tareq Ayoub',
  'My father and I used to go to the same tea place behind the garage every Thursday after my shift, from 2008 until he stopped going out in 2019. Eleven years, about five hundred Thursdays.',
  '**What was the same.** We used to sit at the same table, the one by the door that nobody wants because of the draught. He used to order for both of us without asking, and he used to order me the thing I do not like, every week, for eleven years, and I never once said so. He used to ask about the route and the passengers and never once about anything else, and I used to tell him, and those were the only conversations we had.',
  '**What I used to think.** That it was an hour I owed him. That it was the same hour every week and nothing was said in it.',
  '**How it stopped.** His knee in the April, and then he was in the house, and then it was a year, and nobody ever said that we were not going any more.',
  '**What I would say to myself at that table.** Ask him something.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"he used to order me the thing I do not like, every week, for eleven years, and I never once said so." The whole relationship is in that sentence._   ✓ _"those were the only conversations we had" tells me what the detail has already shown._   ? _Have you asked him anything since?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Count how many stopped because somebody decided. It is one or two out of twelve, and the rest simply stopped. Say the number out loud and then leave a silence rather than drawing the conclusion; the class draws it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked my mother. She used to take the train to Aleppo to see her sister four times a year, from 1979 until 2011 — thirty-two years. The detail that was the same every time is not mine and I would never have guessed it: she used to take two boiled eggs and a piece of bread, always, even when there was a buffet carriage and even when she had money, because her own mother gave her two boiled eggs the first time she travelled alone at nineteen. She says she has not boiled an egg since 2011 and did not notice that until I asked.']));

// ===================== 2.5 =====================
out.push(pb());
out.push(h2('2.5  You\'re joking — what did you do?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Tell the six-sentence story twice. The second telling, with the class silent, is physically uncomfortable to do and that is the point — let them see you find it hard.'));
out.push(A('**b** **1** react   **2** push   **3** hold   **4** push'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – Rasha.'));
out.push(A('**b** **1** Lubna holds it — _Wait — was there a telephone in it?_ — and Rasha goes back and answers it before going on.   **2** Yara asks what the song was. It is surprising because nobody has ever asked her that, and because the answer is that she can still sing it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 "The lift stopped."** react _Oh no._ · push _What did you do?_ · hold _Wait — with the child in it?_',
  '**2 "The telephone in it has never worked."** react _You\'re joking._ · push _Go on._ · hold _Wait — never? In nine years?_',
  '**3 "He taught me a song."** react _Oh._ · push _And?_ · hold _Wait — he taught **you**?_',
  '**4 "We sang it three hundred times."** react _Three hundred._ · push _What was it?_ · hold _Wait — how long were you in there?_',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** A Thursday in January. The lift at the hospital. Two hours.',
  '**B:** Two hours?',
  '**C:** Who was in it?',
  '**A:** Three of us. A child of four, his mother and me.',
  '**B:** Oh.',
  '**C:** Wait — is there not a telephone in a hospital lift?',
  '**A:** There is. It has not worked since before I started.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('Write every hold. There will be one or two in two performances, and they will be the best moments in both — which is the evidence to use rather than the rule.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The question nobody has ever asked me about my story: "what did you say to your sister when you rang her?" I have told that story eleven times and nobody has asked, and the answer is that I did not tell her the bus was cancelled. I told her the bus was late._',
  '**b** _The hardest move was the hold. I made one and apologised for it immediately, which Ms Huda says is the same as not making it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha\'s three facts were a Thursday in January, the lift at the hospital and two hours. She was taking a child down to the second floor at about eleven at night when the lift stopped between the third and the second, with the child, his mother and her inside; the child was four and in his ninth day in the hospital. She says she did nothing useful for the first minute and pressed the button the way everybody presses the button. Lubna held the story to ask whether there was a telephone in it, and there is one, and it has not worked since before Rasha started — everybody knows and nobody has written it down. The mother started to panic quietly, the way people do when there is a child watching, so Rasha asked the child to teach her a song. He taught her one for an hour and fifty minutes. It has about nine words and she thinks they sang it three hundred times. Then Yara asked what the song was, and Rasha said nobody has ever asked her that, and that she can still sing it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Really? Really? Really? → ✓ one reaction per event.   ✗ That is very interesting. _(flat)_ → ✓ _Oh._ said low.   ✗ That happened to me once — _(mid-story)_ → ✓ keep it for the end.   ✗ Sorry, sorry, but was there a telephone? → ✓ _Wait — was there a telephone?_ A hold is not an apology.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That the emergency telephone has been inoperative since at least 2019, does not appear in any maintenance record, and should be entered in the record and repaired.'));
out.push(A('**2** She went white and did not make a sound — because the child was watching her.'));
out.push(A('**3** The time, the floors, the three people, the telephone, and the two hours.'));
out.push(NOTE('The important point is that the **official** version is not the dishonest one. It is the version that gets a telephone repaired, and it does that by removing every feeling and adding one recommendation. Students arrive believing the personal version is the true one; the page is built to unsettle that, and the discussion is the cycle.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**1 · For the works maintenance book.** On Tuesday 11 March at approximately 09:55 the main press stopped during a run of 4,000 sheets. The machine was unattended for 11 minutes. 400 sheets were spoiled. **Recommendation: no telephone call to be taken in the office while a run is in progress unless a second person is on the floor.**',
  '**2 · For my brother, that evening.** You will not believe the day I have had. The paper is in Kilis and has been since Sunday, which nobody thought to tell us, and while the driver was explaining Kilis to me I heard the big machine stop through the window and I stood there and let him finish. Eleven minutes. Four hundred sheets. The worst part is that I was not even listening to him by the end — I was standing in the office with the telephone against my ear, looking at the yard, and I did not move.',
  '**What is in both.** The eleventh of March, the eleven minutes, the four hundred sheets, the machine, Kilis.',
]));
out.push(S('Stage 7 · Write freely (sample, 128 words in total)'));
out.push(SAMPLE([
  '**1 · For the ward incident book.** On Sunday 4 February at approximately 03:40 a patient in room 11 left the ward unobserved and was found at 03:52 on the stairs between the second and third floors. No injury. The fire door to the stairs does not close fully and has been reported twice, in September and in December. **Recommendation: the fire door to be repaired, and the two previous reports to be found and attached to this one.**',
  '**2 · For my sister.** I lost a woman of eighty-one for twelve minutes on Sunday night. She is fine. She was sitting on the stairs with her shoes in her hand, and when I found her she said "I am not going back until somebody tells me where my sister is", and her sister has been dead since 2016, and I sat down on the stairs with her and we talked about her sister for about ten minutes, and then she said "I am tired now" and we went back. I have been doing this for nine years and I have never been so frightened or so glad in twelve minutes.',
  '**What is in both.** The date, the time, the twelve minutes, the stairs, the fire door.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"she said I am tired now and we went back." Version 2 earns everything and never once tells me how to feel._   ✓ _Version 1: "No injury" is doing a lot of work and the fire door needs a date for the third report, which is this one._   ? _Which version is truer?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Ask which version would get something repaired, and then which one they would want written about themselves. They are almost never the same version, and the useful conclusion is not that one is better: it is that a person who can only write one of the two is only half useful at work.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I sent the recommendation about the fire door on Monday morning, with the two previous reports attached, which took me forty minutes to find because they were in a different book. The door was looked at on Thursday. It is not repaired — the man says it needs a part — but it is now the third entry about the same door and there is a part on order, and the sister on nights has asked me to write the next one as well, which I think is a compliment and may be something else.']));

// ===================== 2.6 =====================
out.push(pb());
out.push(h2('2.6  And that was the point'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Collect six last sentences on the board before saying anything about any of them. The quiet ones win, every time, and the class will choose one of them unprompted — which is a better argument than the Language box.'));
out.push(A('**b** **1** the outcome   **2** brings it to now   **3** closes it flatly   **4** leaves it open on purpose'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – it explains the point.'));
out.push(A('**b** **1** Stop at the last **fact**, not the meaning.   **2** "He gave me the key on the Thursday and he did not say anything."'));
out.push(NOTE('Ms Huda\'s last line is the one to put on the board for the rest of the level: _yours tells them what to think and that one lets them do it, and the second is the one they will repeat to somebody else tomorrow._ The test for any ending is not whether it is moving. It is whether somebody could repeat it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 the lift and the song.** fact — _They opened the lift at two minutes past one._ since — _I can still sing it._',
  '**2 the lorry and the eleven minutes.** fact — _The paper came on the Friday of the following week._ since — _I have not taken a call on the floor since._',
  '**3 the nineteen summers.** fact — _We did not go in 2012 and nobody mentioned it in 2013._ since — _I have not been to Latakia since._',
  '**4 the men in the rain.** fact — _I left them at the Harasta turning._ since — _I have thought about that every February since._',
]));
out.push(S('Stage 3 · Practise (sample – Card A, first)'));
out.push(SAMPLE([
  '**A:** They gave the room back on the Thursday. And that shows that politeness works.',
  '**B:** Cut it. What is the last fact?',
  '**A:** The caretaker gave me the key and did not say anything.',
  '**B:** That is the ending.',
  '**A:** Which one would you repeat?',
  '**B:** The second, because the first one tells me the answer and I cannot do anything with an answer. I can do something with a man who says nothing after five weeks.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('Write the cut versions. The room will agree on which of the four they would repeat and it is worth letting them vote; the winner is always a fact and never a lesson, and the vote proves the rule faster than the Language box does.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Ending on the fact: "The next bus went at ten past four. I was on it."_',
  '**b** _My partner\'s alternative, brought to now: "I have never found out whether she was." I have taken it. It is better than mine and I would not have got there on my own._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Jad finished his story about the room by saying that in the end they gave it back on the Thursday, and that this shows that if you are polite and keep asking, people will listen to you in the end. Ms Huda told him to stop at "on the Thursday". He said then nobody knows what it means, and she said everybody knows what it means — he just spent ninety seconds making them know — and that the last sentence takes it away from them and hands it back as a lesson. She asked for the last fact instead of the meaning, and he said the caretaker gave him the key on the Thursday and did not say anything. She said that is the ending; he said it is just a thing that happened; and she pointed out that the man said nothing, after five weeks of saying a great deal. When Jad said it out loud Samira said "oh, that is better", and Jad said he preferred his own. Ms Huda said everybody prefers their own, and that his version tells people what to think while the other one lets them do it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ And this shows that… → ✓ cut it.   ✗ So the moral is… → ✓ cut it.   ✗ At the end they gave it back. → ✓ **In the end**.   ✗ Finally he gave me the key. → ✓ _In the end he gave me the key._ / just _He gave me the key._'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That he feels guilty, that eleven men stood in the rain for a stranger, and that he would do it again. All three are in the line and none of them is written.'));
out.push(A('**2** Because the whole page is a lesson and the last line admits the lesson has not taken.'));
out.push(A('**3** They stop at a fact; not one contains the word _because_; and not one says how anybody felt.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**My grandmother, about leaving Aleppo.** "I took the brass one and I left the good one, and I have never been able to explain why."',
  '_It refuses to say that she regrets it, that the good one is gone, or that she has thought about it for fifty years. It also refuses to say what either object was, which is why the reader keeps it._',
  '**My first manager, on the day I left.** "You will be better at this than I was. Shut the door on your way out."',
  '_It refuses to be a compliment on its own. The second sentence is doing the work and it is about a door._',
  '**What they both do.** They stop at a fact. Neither contains _because_. Neither says how anybody felt, and both are about an object.',
]));
out.push(S('Stage 7 · Write freely (sample, the complete story, 147 words)'));
out.push(SAMPLE([
  'It was the third of August, thirty-nine degrees at nine in the morning, the kind of heat where you can smell the road. The Latakia bus was standing in full sun with its doors shut and no driver. About forty of us were waiting in a line that was not a line, and an old man in front of me was holding his ticket in both hands. Nobody was saying anything about the heat.',
  'Then a man in a company shirt came out and said the bus was cancelled.',
  'For four seconds nobody moved, and in those four seconds I was working out whether I could get my money back. Then everybody started talking at once. I got to the window first, because I counted that line for twenty minutes and I knew where the door was. The next one was at four. I rang my sister and told her the bus was late, which is not what the man said. Then I sat down on my bag.',
  'A woman with two children asked me what the man said and I told her and did not help her to the window.',
  'The next bus went at ten past four. I was on it.',
  '_What my ending refuses to say: whether she got on it, and what I think of myself._',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"The next bus went at ten past four. I was on it." Two facts, and the second one is an accusation you have made against yourself without using one word of it._   ✓ _"which is not what the man said" explains something the reader can already see._   ? _Did you mean the ending to be about her or about you?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Read the twelve last lines with no stories attached. Three will make people want the story; name those three and tell the writers. It takes four minutes and it is the single most useful piece of feedback in the unit, because an ending is the only part of a story a writer can never judge alone.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The story I always tell about my first week at the shop used to end: "and that is how I learned that you should never assume anything about a customer." The version that stops at a fact: "He paid in coins. It took four minutes and nobody in the queue said a word." I have told this story for six years with the lesson on the end. I said the new version to my wife on Thursday and she said "I have never heard the end of that story before", and I have been telling it to her for six years.']));

// ===================== 2.7 =====================
out.push(pb());
out.push(h2('2.7  Review & Mediate: Tell it the way she told it'));
out.push(S('Stage 1 · Get ready – Unit 2 quiz'));
out.push(A('**1** **While** I was standing in the yard, the telephone rang. _(or: I was standing in the yard **when** the telephone rang)_   **2** We **went** to Latakia in 2019.   **3** We didn\'t **use** to go in winter.   **4** **In the end** they gave the room back.   **5** It **was raining** and nobody **was talking**, and then she turned round.   **6** I **knew** the road very well.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** **Retelling A** is wrong, and Rasha says only two small things in it are untrue. **"She sang to him"** — the direction is reversed; he taught her, he was teaching and she was learning, and he corrected her about three hundred times. And **"until they were rescued"** — which makes two hours sound like waiting, and they were not waiting, they were doing something. She also says the last line, _which I thought was a lovely thing to do_, puts the person retelling it in front of the story.'));
out.push(NOTE('Rasha\'s explanation of **why** the two small errors matter is the heart of the unit: in retelling A she is a kind nurse who calmed a child; in what happened, a child in his ninth day in a hospital was given something to be in charge of by an adult who had run out of ideas. Same facts, opposite story. Read both aloud, in that order, and let the room sit with it.'));
out.push(S('Stage 3 · Practise (sample)'));
out.push(SAMPLE([
  '**A:** _(tells the garage story in full, about ninety seconds)_',
  '**B:** He was at the Baramkeh garage on the third of August, thirty-nine degrees, waiting for the Latakia bus with about forty other people. A man came out and said it was cancelled. He got to the window first because he counted the line, and the next bus was at four. He rang his sister and told her it was late, not cancelled. A woman with two children asked him what the man said, and he told her and did not help her get to the window. He was on the ten past four. He says he has never found out whether she was.',
  '**C:** Direction: kept — he told her and did not help her; it would have been easy to make that "he helped her". Numbers kept: the third of August, thirty-nine, forty people, ten past four. Last line kept: yes, word for word.',
  '**A:** The thing you changed is that I did not say "because he counted the line" — I said I knew where the door was. You gave me a better reason than I had.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('Write the one thing that changed. There is always one and it is nearly always the **direction of a verb** or a **reason** that the reteller supplied to make the story make sense. The second kind is the more interesting: retellers improve the logic of a story without noticing, and that is how stories drift.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_Listen once. Retell in front of the teller. Then let them correct you and make them sort the corrections into **facts** and **direction** — the sorting is the exercise, because students will accept a factual correction and argue about a directional one, and the directional ones are the ones that matter._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['I retold Fares\'s story about the night he drove to Hama with the wrong box. He left Damascus at five, got to Hama at seven, and did the whole round of four pharmacies before the last pharmacist opened the box and found that it was somebody else\'s order. I had him noticing it himself in the car, which is not what happened and makes him look better. He said the whole point is that he did not notice, that three pharmacists before that one signed for a box they did not open either, and that he has done that round for six years. The numbers I kept were five o\'clock, four pharmacies and six years. The number I lost was that it was the eleventh time that month he drove to Hama. And his last line, which I cut, is "I rang every one of them back myself, and the first one laughed." So I decided that when I retell something I am going to write the last line down before I start talking, because it is the first thing I lose.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ She sang to him. → ✓ **He taught her** a song.   ✗ They waited for two hours. → ✓ they were **doing something** for two hours.   ✗ Which I thought was lovely. → ✓ take yourself out.   ✗ She said that she could still sing it. → ✓ at B1, _she said she **can** still sing it_ — the full backshift is **Unit 10**.'));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 2'));
out.push(A('**1 A**   **2 G**   **3 F**   **4 B**   **5 E**'));
out.push(NOTE('The trap in Part 2 is the text that matches **one** requirement loudly. **C** looks right for Umm Kinan because it is for children, and it fails her second requirement — it would bore her. **D** looks right for Jad because it is technical, and it fails because it is about structures, which is Lubna\'s, not because it is hard. **H** is the one to discuss: it matches Tareq on "ordinary working life" and is disqualified by his last clause — he does not like anything that tells him what to think at the end, and H has a programme for action in the last chapter.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  'Rasha was taking a four-year-old down to the second floor at about eleven at night when the lift stopped between the third and the second. There were three of them in it: the child, his mother and her. The child was in his ninth day in the hospital. She said that the emergency telephone has not worked since before she started nine years ago, and that everybody knows and nobody has written it down. So she asked him to teach her a song. He taught her one for an hour and fifty minutes. Somebody asked her what the song was, and she said nobody had ever asked her that, and that she can still sing it.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 2 (samples)'));
out.push(box('How to mark Writing Part 2 — the article', [
  '**Content (5):** it answers both questions in the task — what happened, and what you remember most. Five marks only if the second is genuinely answered; most students answer the first twice.',
  '**Communicative achievement (5):** it reads as an article for a magazine — it speaks to a reader it does not know, and it has a title or an opening that invites.',
  '**Organisation (5):** scene, events, ending. The ending must stop; an article that trails off loses two marks here and the student will not know why.',
  '**Language (5):** past simple and past continuous used together and correctly; _while_ or _when_ at least once; a range of sequencers.',
], C.lteal));
out.push(SAMPLE([
  '**Strong (19/20 — 141 words)**',
  '**Forty people and nobody mentioned the heat**',
  'It was the third of August and it was thirty-nine degrees at nine in the morning. We were waiting at the Baramkeh garage for the Latakia bus, which was standing in the sun with its doors shut. About forty of us were standing in a line that was not really a line, and an old man in front of me was holding his ticket in both hands.',
  'Then a man came out and told us the bus was cancelled.',
  'While everybody was shouting at him, I got to the window and asked about the next one. It was at four o\'clock. I rang my sister to tell her, and then I sat down on my bag for six hours.',
  'What I remember is not the heat or the shouting. It is that in two hours of waiting, in thirty-nine degrees, not one person complained about the weather. We complained about everything else.',
]));
out.push(SAMPLE([
  '**Just passes (13/20 — 109 words)**',
  '**A bad journey**',
  'Last August I had a very bad journey. I was waiting the bus to Latakia in the garage. It was very very hot and many people were waiting also. We waited two hours and after the man came and he said the bus is cancelled. Everybody was angry and shouting. I asked him about next bus and he said four o\'clock. So I waited again. Finally I arrived to Latakia in the night and I was very tired. It was the worst journey of my life and I will never forget it.',
  '_Content 3/5: what happened is clear, but "what I remember most" is answered with "it was the worst journey", which is not a memory. Organisation 4/5: there is a shape. Communicative achievement 3/5: it does not speak to a reader. Language 3/5: **waiting the bus** → waiting **for**; **very very hot** → one intensifier; **after the man came** → **then** the man came; **the bus is cancelled** → **was**; **arrived to** → **arrived in**; **Finally** is not a storyteller\'s word. Show it beside the strong sample and ask the class to find the one sentence the weaker writer could have expanded into an answer to the second question._',
]));
out.push(S('Unit 2 check · A  Grammar and vocabulary'));
out.push(A('**1 b** was standing   **2 b** While   **3 a** used to   **4 b** didn\'t use to   **5 b** In the end   **6 a** was raining / was talking   **7 b** turned / said   **8 b** knew'));
out.push(NOTE('Items 6 and 7 are the pair that tests the whole unit: **6** is the scene and takes two continuous forms; **7** is the chain and takes two past simples. A student who answers both correctly can build a story; one who answers 6 right and 7 wrong has learned a tense and not a shape.'));
out.push(S('Unit 2 check · B  Listening (Track 2.15)'));
out.push(A('**1 A** (the silence of the other passengers)   **2 E** (a stranger who paid for them)   **3 C** (how seriously a child took something)   **4 H** (a decision they still think about)   **5 G** (a place they did not like at the time)'));
out.push(A('The three extra letters are **B** (how long the wait was), **D** (the weather) and **F** (a telephone that did not work).'));
out.push(NOTE('**B**, **D** and **F** are all mentioned in the extracts and none of them is what the speaker says they remember **most**, which is exactly the Part 2 skill: the distractors are true, and the question is about emphasis. Speaker 1 talks about rain; speaker 3\'s lift had the broken telephone in it; speaker 4 was waiting. Point at all three after the check.'));
out.push(S('Unit 2 check · C  Writing (sample, 148 words)'));
out.push(SAMPLE(['It was about nine on a Monday in January and it was the kind of cold that gets into a building and stays until April. I had twenty-six of them in the room and four empty chairs. Nobody was talking; they were waiting to see what sort of mood I was in. The window at the back was open about four inches, because it does not shut.\n\nThen the door opened and the head of year said the hall was flooded and could I take the other class as well.\n\nI said yes. I moved the tables to the walls. I asked my own class to bring their chairs, and twenty-six eleven-year-olds carried twenty-six chairs without being asked twice. While I was moving the last table, somebody was already writing the names of the other class on the board, which I did not ask anybody to do.\n\nThere were fifty-two of them and one of me for an hour and ten minutes. I counted the heads four times.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The two lines to carry forward are **the scene in the past continuous** and **ending on a fact**. The first is tested in every piece of writing from here to Unit 12; the second cannot be tested at all, which is exactly why it is worth naming now and asking about again in Unit 6.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Unit 2 told the story in the order it happened. Unit 3 is the part that happened **before** the story started: the past perfect, which both A2 books and the first two units of this one have deliberately avoided so that this unit can own it.',
  'Collect the homework: one sentence about something that was **already true** before the student arrived in their own story. That sentence is what 3.1 is built on, and most of them will arrive written in the past simple — which is the lesson.',
  'Say plainly in 3.1 that this is the first new tense of the level and that they have been kept from it on purpose. Students who did A2 here will recognise that they have never once seen it, and being told that it was deliberate is worth more than the rule.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 2 · Answer Key');
