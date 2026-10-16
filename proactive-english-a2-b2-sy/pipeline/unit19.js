// Proactive English A2 · Syria Edition · Book 2 · Unit 19 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 19  People and Places'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**19.1**  describe people',
  '**19.2**  describe things and places',
  '**19.3**  identify somebody exactly',
  '**19.4**  describe what somebody looks like',
  '**19.5**  describe what somebody is like',
  '**19.6**  ask somebody to identify a person or a thing',
  '**19.7**  Review & Mediate: explain a group photograph and a list of names',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Two new students joined 4B after the test** — **Tareq Ayoub**, who drives a minibus on the Mezzeh line, and **Samira Deeb**, who works in a clothes shop in Al-Hamra. Nobody can remember which is which for the first fortnight.',
  '**Lina\'s building has a new caretaker**, **Abu Walid**, who has replaced a man everybody knew for nineteen years.',
  '**The class is writing a page about the people of the centre** — Mr Bassam, the woman in the café, the man who opens the gate — and will put it in the entrance hall.',
], C.lyellow, C.orange));

// ======================= 19.1 =======================
out.push(pb());
out.push(h2('19.1  She\'s the one who drives a minibus'));
out.push(p('**Function:** describing people   ·   **Grammar:** relative clauses with _who_   ·   **Pronunciation:** pausing before _who_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Everybody writes **one** true sentence about somebody in this room, beginning _"the person who…"_, with no name. Your teacher reads them out and the class guesses.'));
out.push(board('She\'s the one who drives a minibus.', 'the person WHO + verb'));
out.push(p('**b**  Join the two sentences with _who_. **1** _I know a man. He fixes telephones._  **2** _There\'s a woman in my building. She knows everybody\'s name._  **3** _I met a teacher. She taught my mother._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem?   **A** two students have the same name   **B** nobody can remember which new student is which   **C** two students have left'));
out.push(p('**b**  Listen again. **1** What does Tareq do?   **2** What does Omar say about the way people describe each other?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.1  Which one is Tareq?', [
  ['Hiba', 'The new ones. Which one is Tareq?'],
  ['Omar', 'Tareq is the one who drives the minibus.'],
  ['Hiba', 'And Samira?'],
  ['Omar', 'Samira is the one who works in the clothes shop. She\'s the one who asked three questions in the first ten minutes.'],
  ['Hiba', 'That is a better description than the first one.'],
  ['Omar', 'It is, and I have noticed something this week. When we describe people, we say the job first and it is always the least useful thing. "The one who drives a minibus" — there are four thousand of them.'],
  ['Hiba', 'So what should we say?'],
  ['Omar', 'The thing that is true of only that person. Tareq is the one who gets up at half past four. Samira is the one who stands up when she answers.'],
  ['Hiba', 'She does, doesn\'t she. I hadn\'t noticed and now I will never not notice.'],
  ['Omar', 'That is exactly what a good description does.'],
  ['Ms Huda', 'What are you two talking about?'],
  ['Omar', 'We are deciding which one of us is "the one who talks instead of working".'],
  ['Ms Huda', 'That one is not difficult.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – relative clauses with _who_ (for people)**',
  table(['two sentences', 'one sentence'], [
    ['_Tareq is the new student. **He** drives a minibus._',
     '_Tareq is the new student **who drives** a minibus._'],
    ['_I know a man. **He** fixes telephones._',
     '_I know a man **who fixes** telephones._'],
  ], [1.3, 1.4]),
  '**_who_ replaces the person word** — so you do **not** say it twice: ~~Tareq is the one who **he** drives a minibus.~~ That is the commonest error in this unit and it comes straight from Arabic.',
  '**The verb still agrees with the person:** _a man who **fixes**_ · _people who **fix**_ · _a woman who **knows**_.',
  '**_that_ is also possible for people** and very common in speech: _the one **that** drives the minibus_. _who_ is better in writing, and this book uses _who_.',
  '**The useful shape for identifying somebody:**  _**She\'s the one who**…_ · _**He\'s the one who**…_ · _**They\'re the ones who**…_',
  '⚠ Choose the thing that is **true of only that person**. _The one who drives a minibus_ describes four thousand people. _The one who gets up at half past four_ describes one.',
  '**Practise:** Join with _who_.  1 I know a woman. She sells bread on our street.  2 Tareq is the student. He drives a minibus.  3 I don\'t like people. They talk in the cinema.  4 That\'s the man. He fixed my laptop.  5 She\'s the one. She stands up when she answers.',
  '**Useful phrases:** Which one is…? · He\'s the one who… · the thing that is true of only that person · I hadn\'t noticed and now I will never not notice.',
  '**Pronunciation.** 🔊 **Track 19.2** There is a small **pause before _who_** and the information after it is said as one piece: _Tareq is the one_ ⟍ _who gets up at half past four._ Listen and repeat, then say three of your own.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about a person on the card; B identifies them with **two** _who_ clauses — one about the job and one that is true of only that person. A says which is more useful. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Which one is __________?'],
  ['B', '__________ is the one who __________.'],
  ['A', 'There are four thousand of those.'],
  ['B', 'All right. __________ is the one who __________.'],
  ['A', 'Now I know exactly who you mean.'],
  ['B', 'And __________ is the one who __________.'],
]));
out.push(table(['Card A – the people', 'Card B – the people'], [
  ['Tareq — drives a minibus / gets up at half past four', 'Mr Bassam — works at reception / has lost the same keys twice'],
  ['Samira — works in a clothes shop / stands up when she answers', 'Abu Walid — the new caretaker / sweeps the stairs on a Friday'],
  ['Nour — a technician / fixed four laptops for nothing', 'Mrs Mona — owns the bookshop / remembers nine bookshops in that street'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the **two** descriptions of one person. Which one would help you find them in a room of forty?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe **three** people in your life with _who_ clauses — one from your family, one from your work or college, one from your street. For each, give the ordinary description first and then the one that is true of only them.'));
out.push(p('**b**  Swap partners. Now describe somebody **in this room** without saying anything about their appearance. Your partner must guess.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba described her neighbour. The first description was "the woman who lives on the second floor", which she agreed was useless. The second one was "the woman who knows which day the water will go off before the building does", which I thought was the best sentence in the room. She also described her cousin, who is the one who answers a question with a question, and her manager, who is the one who says "quickly" at the end of every instruction and has never once meant it._'));
out.push(p('**Listener task:** write the description you heard today that you could find somebody with.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page the class is writing for the entrance hall. Answer the questions.'));
out.push(model([
  '**THE PEOPLE OF THIS BUILDING** — by class 4B',
  'There are about two hundred students here and perhaps nine people who make the place work. Most of them are not teachers.',
  '**Mr Bassam**, who sits at reception, is the one who knows which room you are in before you have said your name. He is also the one who puts the note on the door when something has gone wrong, and he has put up a note every single time, which is not true of every building in this city.',
  '**Umm Nahla**, who runs the café on the ground floor, is the one who knows who has not eaten. She has given more free sandwiches than anybody will ever count, and she does it in a way that nobody has to say anything.',
  '**Abu Khalil**, who opens the gate at four, is the one who was here before the centre was a centre. He remembers the building as a school and he will tell you about it if you ask, and he has been asked by about four people in eleven years.',
  'We asked each of them one question: what do people never say to you? Mr Bassam said "thank you for the note". Umm Nahla said she did not want to answer. Abu Khalil said: "Nobody asks me what it was before."',
]));
out.push(item('1', 'How many people does the class say make the building work?'));
out.push(item('2', 'What does Umm Nahla notice about people?'));
out.push(item('3', 'What did Abu Khalil say people never say to him?'));
out.push(writers([
  'A page about people: **how many there are** → **one person per paragraph** → **name + _who_ clause** → **the thing that is true of only them** → **one question you asked them all**.',
  'Open each paragraph with the name and a _who_ clause: _**Mr Bassam, who sits at reception,** is the one who…_ The first _who_ places them; the second one describes them.',
  'Find the detail nobody else would write: _he has put up a note every single time_ · _she does it in a way that nobody has to say anything_.',
  '⚠ Asking everybody the **same question** turns a list of people into a page. Choose a question that cannot be answered with a job title.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a page about the people who make a place work — your building, your street, your workplace (35 words or more).'));
out.push(p('**THE PEOPLE OF ______________**   There are about ______________ and perhaps ______________ who ______________.   **______________**, who ______________, is the one who ______________. He/She is also the one who ______________.   **______________**, who ______________, is the one who ______________.   We asked each of them one question: ______________? ______________ said ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title and your name or your class at the top',
  '_who_ for people, with **no second pronoun** (never ~~the one who he…~~)',
  'Every person has an ordinary description **and** one that is true of only them',
  'The same question asked of everybody, with at least two answers',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) about the people who make a place you know work — the ones who are not in charge of it. Three people, one question asked of all three, and one answer you did not expect.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **one of the people in it**. ★ _You saw something nobody says out loud._  ✓ _One person who is only a job title._  ? _Did you really ask them, or did you guess?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the page up in the entrance hall — the real one. **Then go and tell one of the people in it that they are in it.** That is the task, and it is harder than the writing.'));
out.push(hw('Write the paragraph for **the person in your life who would be most surprised to be written about** (40+ words): the _who_ clause, the detail, and what they would say if they read it.'));

// ======================= 19.2 =======================
out.push(pb());
out.push(h2('19.2  It\'s the building which has the blue door'));
out.push(p('**Function:** describing things and places   ·   **Grammar:** _which_ and _that_   ·   **Pronunciation:** weak _that_ /ðət/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher names five things in this room. For each one the class must produce a _which_ or _that_ sentence that identifies it: _the window that doesn\'t shut · the chair which has one short leg._'));
out.push(board('It\'s the building which has the blue door.', 'who = people · which / that = things'));
out.push(p('**b**  _who_, _which_ or _that_? **1** the man ______ fixed my laptop  **2** the shop ______ sells spare parts  **3** the street ______ has the bakery on it  **4** the woman ______ lives below us  **5** a telephone ______ won\'t charge'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Lina explaining?   **A** where she lives   **B** where a shop is   **C** which bus to take'));
out.push(p('**b**  Listen again. **1** Which building is hers?   **2** Why does she say the first description was no good?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.3  The one with the blue door', [
  ['Rana', 'I\'ll bring it on Sunday. Which building is yours?'],
  ['Lina', 'Number fourteen.'],
  ['Rana', 'Lina. Have you ever looked at the numbers on that street?'],
  ['Lina', '…There aren\'t any, are there.'],
  ['Rana', 'There are four, and three of them are wrong.'],
  ['Lina', 'All right. It\'s the building which has the blue door.'],
  ['Rana', 'Better. Anything else?'],
  ['Lina', 'It\'s the one that is opposite the pharmacy — the pharmacy that is open at night, not the one on the corner. And it\'s the building which has a chair at the bottom of the stairs that doesn\'t belong to anybody.'],
  ['Rana', 'Now I could find it with my eyes shut. Which floor?'],
  ['Lina', 'Third. The door which has nothing on it — everybody else has put something on theirs.'],
  ['Rana', 'Why haven\'t you?'],
  ['Lina', 'Because I have been going to for four years, and the thing I was going to put there is in a box that I have moved twice.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _which_ and _that_ (for things and places)**',
  table(['people', 'things and places'], [
    ['**who**\n_the man **who** fixed my laptop_',
     '**which** or **that**\n_the shop **which** sells parts_ = _the shop **that** sells parts_'],
  ], [1, 1.5]),
  '**_which_ and _that_ are both correct for things.** _that_ is more common in speech; _which_ is a little more formal. Use either — but never _who_ for a thing: ~~the shop who sells parts~~.',
  '**Again: do not say the word twice.** ~~the building which **it** has a blue door~~ → _the building **which has** a blue door_.',
  '**Two ways to say the same thing:**  _the building **which has** a blue door_  =  _the building **with** a blue door_. The second is shorter and very common — and _with_ comes back in 19.4.',
  '⚠ **Stack them to be exact:** _the pharmacy **that** is open at night, **not** the one on the corner._ Two clauses and a contrast will find a building in any street.',
  '**Practise:** Join with _which_ or _that_.  1 It\'s the building. It has a blue door.  2 I want the charger. It came with the telephone.  3 That\'s the shop. It sells spare parts.  4 This is the road. It goes to Homs.  5 Give me the one. It isn\'t broken.',
  '**Useful phrases:** Which building is yours? · Have you ever looked at…? · Now I could find it with my eyes shut. · the one that is opposite… · not the one on the corner',
  '**Pronunciation.** 🔊 **Track 19.4** _that_ inside a sentence is weak — /ðət/, not /ðæt/: _the shop that sells parts_ /ðə ʃɒp ðət selz pɑːts/. Compare it with _**That** is the shop_, where it is strong. Listen and repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has to find the place on the card and only has the first description; B must add **three** more _which_ / _that_ clauses until A could find it with their eyes shut. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Which __________ is it?'],
  ['B', '__________.'],
  ['A', 'That isn\'t enough. __________.'],
  ['B', 'All right. It\'s the one which __________.'],
  ['A', 'And?'],
  ['B', 'It\'s the one that is __________ — __________, not __________.'],
  ['A', 'And how will I know when I\'m there?'],
  ['B', 'It\'s the __________ which __________.'],
]));
out.push(table(['Card A – find…', 'Card B – find…'], [
  ['the building where your friend lives, in a street with no numbers', 'the shop that sells the part you need, in a market with forty shops'],
  ['the right bus stop, where three lines stop in the same place', 'the office you have to go to, on a floor with nine doors'],
  ['the café where you are meeting, on a street with four cafés', 'the right platform, when the sign has been changed'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** clauses and then draw the place in ten seconds. Could you?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe **where you live** to somebody who has never been to your street, without using a number and without using the street name. Your partner may ask three questions and must then be able to find it.'));
out.push(p('**b**  Swap. Then both of you describe the **shop you buy bread from**, with three clauses each. Notice how much easier the second one is, and why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lina described her building without the number, because there are four numbers on her street and three of them are wrong. It is the building which has the blue door, which is opposite the pharmacy that is open at night — not the one on the corner — and which has a chair at the bottom of the stairs that does not belong to anybody. Her own door is the one which has nothing on it, because everybody else has put something on theirs and she has been going to for four years. Rana said she could find it with her eyes shut, and I think she could._'));
out.push(p('**Listener task:** write the clause in this room that would survive a dark night and a wrong street.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the directions Lina writes. Answer the questions.'));
out.push(model([
  '**HOW TO FIND MY BUILDING — without the number, because the numbers are wrong**',
  'Come down the street from the main road, not up from the garage. The light is better and the shops are open.',
  'You pass **a bakery that has a queue outside it at seven** and never at any other time. Keep going.',
  'My building is **the one which has a blue door** — the only blue door on the street, and it is the blue that was put on in about 2009, so it is nearly grey now.',
  'It is **opposite the pharmacy that is open at night**. There are two pharmacies: the one on the corner shuts at eight, and it is not that one.',
  'Inside, there is **a chair at the bottom of the stairs which does not belong to anybody**. If you can see the chair, you are in the right building.',
  'Third floor. Mine is **the door which has nothing on it**. Everybody else has put something on theirs — a name, a number, a sticker from a school. Mine is the empty one, and now that I have written this down I am going to do something about it.',
]));
out.push(item('1', 'Why does she say to come down from the main road?'));
out.push(item('2', 'How do you know you are in the right building?'));
out.push(item('3', 'What does she decide at the end?'));
out.push(writers([
  'Directions by description: **which way to approach** → **one landmark per paragraph, each with a _which_ / _that_ clause** → **the thing that confirms it** → **the last door**.',
  'Every landmark needs the clause that **rules out the other one**: _there are two pharmacies: the one on the corner shuts at eight, and it is not that one._ Directions fail at the second similar thing, not the first.',
  'Give the reader a **confirmation**: _if you can see the chair, you are in the right building._ Somebody standing in a dark street needs to know they have not gone wrong.',
  '⚠ Avoid numbers you cannot trust and names nobody uses. A blue door that is nearly grey is worth more than a street name on a map.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write directions to a place by description only — no numbers, no map (35 words or more).'));
out.push(p('**HOW TO FIND ______________**   Come ______________, not ______________. ______________.   You pass ______________ which ______________. Keep going.   It is the one which ______________ — ______________.   It is opposite ______________ that ______________. There are two: ______________, and it is not that one.   If you can see ______________, you are ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title saying where the directions go',
  '_which_ / _that_ for things and places, with no second pronoun',
  'At least one clause that rules out a similar thing nearby',
  'One sentence that confirms the reader is in the right place',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full directions (60 words or more) to somewhere that is genuinely hard to find — your home, a workshop, a shop in a market, a house in a village. No numbers. At least four relative clauses.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s directions as **somebody arriving after dark**. ★ _The landmark I could not miss._  ✓ _One place where I would stop and not know._  ? _What do I do if I pass it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Swap directions with somebody from a different part of the city and **read theirs as if you were going tonight**. Mark the first sentence where you would be lost. Give it back.'));
out.push(hw('Write the directions **your mother or father would give** to the same place (40+ words). They will use different landmarks, and theirs will be older.'));

// ======================= 19.3 =======================
out.push(pb());
out.push(h2('19.3  The man who came on Tuesday'));
out.push(p('**Function:** identifying somebody exactly   ·   **Grammar:** a relative clause inside the sentence   ·   **Pronunciation:** sentence stress and pausing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says a sentence with a gap in the middle: _The woman ______ is my neighbour._ The class fills it five ways, each time with a _who_ clause.'));
out.push(board('The man who came on Tuesday left this.', 'the clause goes NEXT to the person'));
out.push(p('**b**  Put the clause in the right place. **1** _The man left this. He came on Tuesday._  **2** _The woman has gone. She was waiting._  **3** _The shop is shut. It sells parts._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has happened in Lina\'s building?   **A** there is a new caretaker   **B** somebody has moved out   **C** the stairs light is broken'));
out.push(p('**b**  Listen again. **1** How long was the old caretaker there?   **2** What does Lina say is the real difficulty with the new one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.5  The man who came on Tuesday', [
  ['Lina', 'There\'s a new caretaker.'],
  ['Maya', 'What happened to Abu Samir?'],
  ['Lina', 'He\'s gone to his son in Tartous. Nineteen years, and he went on a Thursday and nobody knew until the Friday.'],
  ['Maya', 'Nineteen years.'],
  ['Lina', 'The man who came on Tuesday is called Abu Walid. He has already swept the stairs twice, which Abu Samir did on Fridays and only on Fridays, and three people have complained about it.'],
  ['Maya', 'Complained that he swept the stairs?'],
  ['Lina', 'Complained that he swept them on a Wednesday. The difficulty is not the man who came on Tuesday. The difficulty is that everybody in that building knows the man who left, and nobody knows this one, and knowing somebody for nineteen years is not a thing you can do in a week.'],
  ['Maya', 'What is he like?'],
  ['Lina', 'I don\'t know yet. I know that he is the kind of person who says good morning first, which Abu Samir never did, and I have not decided whether I like it.'],
  ['Maya', 'You will.'],
  ['Lina', 'I will. And in nineteen years somebody will complain about the man who replaces him.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – putting the clause inside the sentence**',
  table(['the clause at the end', 'the clause in the middle'], [
    ['_That\'s the man **who came on Tuesday**._\n(the person is at the end of the sentence)',
     '_The man **who came on Tuesday** left this._\n(the person is the subject, so the clause goes straight after them)'],
  ], [1.3, 1.4]),
  '**The rule is simple: the clause goes immediately after the person or thing it describes.** Never anywhere else.',
  '⚠ ~~The man left this who came on Tuesday.~~ That sentence says the **this** came on Tuesday. Move the clause next to the man.',
  '⚠ The **main verb** comes after the clause, and students lose it: _The man who came on Tuesday **left** this._ Say the sentence slowly and find the main verb — it is the one that is not inside the clause.',
  '**Useful for telling two people apart:**  _the man **who came on Tuesday**_ / _the man **who left**_ · _the woman **who was waiting**_ / _the woman **who was shouting**_.',
  '**Practise:** Put the clause in the right place and write the whole sentence.  1 The man left this. (he came on Tuesday)  2 The woman has gone. (she was waiting)  3 The shop is shut on Fridays. (it sells parts)  4 The student asked three questions. (she joined last week)  5 The chair belongs to nobody. (it is at the bottom of the stairs)',
  '**Useful phrases:** What happened to…? · nobody knew until the Friday · The difficulty is not… The difficulty is that… · I have not decided whether I like it. · You will.',
  '**Pronunciation.** 🔊 **Track 19.6** The clause is said as **one piece, lower and faster**, and then the main verb comes back up: _The man who came on Tuesday_ (fast, low) ⟍ **left** this. Listen and repeat — if the main verb is not stressed, the sentence disappears.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation on the card, where **two** people are easy to confuse; B must say something about each one, using a clause in the middle of the sentence. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'There were two __________.'],
  ['B', 'The one who __________ or the one who __________?'],
  ['A', '__________.'],
  ['B', 'Right. The __________ who __________ __________.'],
  ['A', 'And the other one?'],
  ['B', 'The __________ who __________ __________.'],
]));
out.push(table(['Card A – two of them', 'Card B – two of them'], [
  ['two men came about the water — one on Tuesday, one on Thursday', 'two women asked about the course — one paid, one is thinking'],
  ['two buses go to Homs — one at six, one at half past nine', 'two shops sell the part — one is cheaper, one is open on Fridays'],
  ['two new students — one drives a minibus, one works in a shop', 'two chairs in the hall — one is broken, one belongs to nobody'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **two** full sentences. Underline the main verb in each — it is the one outside the clause.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of **two** people in your life who other people confuse — two neighbours, two colleagues, two cousins with the same name. Tell your partner about each of them in one sentence with the clause in the middle.'));
out.push(p('**b**  Swap. Then each of you describe something that **changed** when one person replaced another — at work, at home, in a shop you use.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lina\'s building has a new caretaker. The man who was there before, Abu Samir, was there for nineteen years and went to his son in Tartous on a Thursday, and nobody knew until the Friday. The man who came on Tuesday is called Abu Walid, and he has already swept the stairs twice, which Abu Samir did on Fridays only, and three people have complained — not that he swept them, but that he swept them on a Wednesday. Lina says the difficulty is not the new man at all; it is that everybody knows the one who left and nobody knows this one, and nineteen years is not a thing you can do in a week._'));
out.push(p('**Listener task:** write the sentence from today that told two people apart most clearly.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Lina puts on the board in her building. Answer the questions.'));
out.push(model([
  '**TO EVERYBODY IN THE BUILDING — about the stairs**',
  'The man who came on Tuesday is called Abu Walid. He is the new caretaker. Abu Samir, who was here for nineteen years, has gone to his son in Tartous, and he went on a Thursday and most of us found out on the Friday, which is nobody\'s fault and is still a strange way to lose somebody.',
  'Three people have complained that the stairs were swept on a Wednesday. The stairs were swept on a Wednesday because they were dirty on a Wednesday. The day the stairs are swept is not a rule; it was a habit that belonged to one man and the man has gone.',
  'The person who is new here is not the problem. The problem is that fourteen flats knew somebody for nineteen years and know nobody now, and that is going to take longer than a fortnight and it will not be fixed by a complaint about a day of the week.',
  'His name is Abu Walid. He says good morning first. I suggest we try saying it back.',
  '— flat 7',
]));
out.push(item('1', 'Why were the stairs swept on a Wednesday?'));
out.push(item('2', 'What does the writer say the real problem is?'));
out.push(item('3', 'What does the writer suggest at the end?'));
out.push(writers([
  'A note that defends somebody: **who the person is, with a _who_ clause** → **the complaint, stated fairly** → **the answer to it** → **what the real problem is** → **one thing to do**.',
  'State the complaint **as the complainers would**, without mocking them. A note that makes three neighbours look foolish will be read by fourteen flats and obeyed by none.',
  'Use the clause to be exact about **which person**: _Abu Samir, **who was here for nineteen years**_ · _The person **who is new here**_. In a disagreement, vagueness about who is who is what keeps it going.',
  '⚠ End with something small and doable. _I suggest we try saying it back_ costs nobody anything, and it is the only sentence in the note that will actually change the building.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note about a change of people somewhere you know (35 words or more).'));
out.push(p('**TO EVERYBODY ______________ — about ______________**   The ______________ who ______________ is called ______________. ______________, who ______________, has ______________.   ______________ people have complained that ______________. ______________ because ______________.   The person who is new here is not the problem. The problem is that ______________.   ______________. I suggest we ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title saying who the note is for and what it is about',
  'The clause immediately after the person it describes, never at the end of the sentence',
  'The complaint stated fairly, then answered',
  'One small thing to do, at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (60 words or more) about a real change where you live or work: somebody new, somebody gone, something done differently. Say fairly what people are complaining about, say what the real problem is, and end with one small thing.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **one of the people who complained**. ★ _The sentence that made me think again._  ✓ _One place where you made me look foolish._  ? _What am I supposed to do now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three notes aloud. **Which one would change a building?** It is never the angriest one, and it is never the politest one either.'));
out.push(hw('Write the note **from the person who complained** (40+ words): what they actually minded, which is usually not the thing they said.'));

// ======================= 19.4 =======================
out.push(pb());
out.push(h2('19.4  The tall one with the glasses'));
out.push(p('**Function:** describing appearance   ·   **Grammar:** _have got_ / _with_ + noun; adjective order   ·   **Pronunciation:** word stress in descriptions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher describes somebody in the room in **three** words and the class guesses. Then a student does it. How few words can you use and still be understood?'));
out.push(board('The tall one with the glasses.', 'the … one with … · he\'s got …'));
out.push(p('**b**  Put the words in order: **1** _tall / a / man / young_  **2** _short / hair / dark / curly_  **3** _grey / an / coat / old_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Samira need a description?   **A** she is meeting somebody she has never met   **B** she has lost somebody   **C** she is describing a thief'));
out.push(p('**b**  Listen again. **1** What **three** things does Tareq say about the man?   **2** What does Samira say is the most useful part of the description?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.7  How will I know him?', [
  ['Samira', 'I\'m collecting a parcel from your friend and I\'ve never met him. How will I know him?'],
  ['Tareq', 'He\'s tall and he\'s got a grey beard.'],
  ['Samira', 'Tareq. Half the men at that garage are tall with a grey beard.'],
  ['Tareq', '(laughs) True. All right — he\'s the tall one with the glasses, and he\'s got a blue jacket that he has worn every day since I have known him.'],
  ['Samira', 'Better.'],
  ['Tareq', 'And he\'s the only one who will be sitting down. Everybody at that garage stands up all day. He had an operation on his knee in January and he sits on a white plastic chair by the door.'],
  ['Samira', 'That is the one. Not the beard, not the glasses — the chair.'],
  ['Tareq', 'Why?'],
  ['Samira', 'Because beards and glasses change and a man on a chair in a garage full of standing men does not. I work in a shop; I spend all day telling people where something is, and I have learned that the useful thing is never the colour.'],
  ['Tareq', 'What is it, then?'],
  ['Samira', 'The thing that is different from everything around it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – describing what somebody looks like**',
  table(['the pattern', 'examples'], [
    ['**the … one with …**', '_the **tall one with the glasses**_ · _the **young one with the blue jacket**_'],
    ['**has got** / **\'s got**', '_He**\'s got** a grey beard._ · _She**\'s got** curly hair._'],
    ['**is** + adjective', '_He **is tall**._ · _She **is quite short**._'],
    ['**with** + noun (the short way)', '_the man **with the beard**_ = _the man **who has** a beard_'],
  ], [1.2, 1.8]),
  '**Adjective order**, for the two or three you will actually use:  **size → age → colour → noun**  _a **tall young** man_ · _**short dark curly** hair_ · _an **old grey** coat_.',
  '⚠ ~~a man tall~~ → _a **tall man**_. In English the adjective goes **before** the noun, always.',
  '⚠ ~~He has got a grey beard and glasses and tall.~~ → _He**\'s tall** and he**\'s got** a grey beard and glasses._ You cannot join _is_ and _has got_ in one list.',
  '**Useful words:** _tall · short · slim · well-built · young · middle-aged · elderly · fair · dark · grey · straight · curly · a beard · a moustache · glasses_',
  '⚠ The lesson of the dialogue, and it is worth more than the vocabulary: **describe the thing that is different from everything around it.** In a garage of standing men, the one sitting down.',
  '**Practise:** Make one sentence.  1 man / tall / grey beard  2 woman / short / curly dark hair  3 the one / glasses / blue jacket  4 girl / young / straight fair hair  5 man / middle-aged / sitting by the door',
  '**Pronunciation.** 🔊 **Track 19.8** In a description the stress lands on the **adjective**, not the noun: _the **TALL** one with the **GLASS**es_. Listen and repeat, then describe three people in this room in three words each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has to find the person on the card in a crowded place; B describes them, starting with the ordinary description and then giving the thing that is different from everything around it. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'How will I know __________?'],
  ['B', 'He\'s / She\'s __________ and __________ got __________.'],
  ['A', 'Half the people there are __________.'],
  ['B', 'All right. __________ the __________ one with __________.'],
  ['A', 'Better.'],
  ['B', 'And __________ the only one who __________.'],
  ['A', 'That\'s the one. Not __________ — __________.'],
]));
out.push(table(['Card A – find…', 'Card B – find…'], [
  ['a man at a garage full of men', 'a woman at a wedding of two hundred people'],
  ['a teacher in a staff room at four o\'clock', 'a driver at a bus garage at six in the morning'],
  ['a cousin at a family lunch you have not been to for years', 'a customer in a shop who has been waiting twenty minutes'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the ordinary description and the useful one. What made the second one work?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe somebody in this room to your partner without saying their name, in **three** sentences: what they look like, what they are wearing, and the thing that is different from everybody else. Your partner guesses after each sentence and you count how many it took.'));
out.push(p('**b**  Swap partners. This time describe somebody who is **not** here, so that your partner could find them tomorrow.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Samira had to collect a parcel from a man she has never met. Tareq\'s first description was that he is tall with a grey beard, and she pointed out that half the men at that garage are tall with a grey beard. The second one was better: the tall one with the glasses, in a blue jacket he has worn every day. But the one that would actually work is the third: he is the only one who will be sitting down, on a white plastic chair by the door, because he had an operation on his knee in January. Samira says the useful thing in a description is never the colour; it is the thing that is different from everything around it._'));
out.push(p('**Listener task:** how many sentences did it take to guess, in your pair? What was the sentence that did it?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three descriptions from the class\'s page. Answer the questions.'));
out.push(model([
  '**HOW TO FIND US** — three members of the club, for anybody meeting us for the first time',
  '**Tareq.** Tall, well-built, middle-aged, with a short grey beard. But do not look for the beard: look for the only man in the room who is standing up at the end of a lesson, because he drives at half past five in the morning and he cannot sit still after seven in the evening.',
  '**Samira.** Short, dark curly hair, usually a red bag. But do not look for the bag: look for the person who stands up when she answers a question. She is the only one in the class who does it, she does not know she does it, and nobody has told her.',
  '**Omar.** Tall, glasses, a camera somewhere about him. Do not look for the camera, because it is usually in a pocket: look for the man who is standing slightly too close to a window.',
  '**The rule we have worked out:** the useful part of a description is never the colour of anything. It is the thing that is different from everything around it, and it is usually something the person does, not something they have.',
]));
out.push(item('1', 'Why should you not look for Tareq\'s beard?'));
out.push(item('2', 'What does Samira do that she does not know about?'));
out.push(item('3', 'What rule has the class worked out?'));
out.push(writers([
  'A "how to find us" page: **name** → **the ordinary description, in one line** → **"but do not look for…"** → **the thing that is different from everything around it** → **the rule at the end**.',
  'Give the ordinary description **and then throw it away**. The structure _X, Y, Z — but do not look for Z_ is what makes the page readable, and it teaches the point without stating it.',
  'The useful detail is nearly always a **verb, not a noun**: _standing up at the end of a lesson_ · _stands up when she answers_ · _standing slightly too close to a window_.',
  '⚠ Be careful with a detail somebody does not know about themselves. _She does not know she does it, and nobody has told her_ is affectionate — write it the other way and it is unkind, and the person will read this page.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "how to find us" page for two or three people you know (35 words or more).'));
out.push(p('**HOW TO FIND ______________**   **______________.** ______________, ______________, with ______________. But do not look for ______________: look for the only ______________ who ______________, because ______________.   **______________.** ______________, with ______________. But do not look for ______________: look for the ______________ who ______________.   **The rule:** the useful part of a description is never ______________. It is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title and one person per paragraph',
  'Adjective order (size → age → colour → noun) · _\'s got_ and _is_ not mixed in one list',
  'Each person has an ordinary description **and** one that is different from everything around them',
  'The useful detail is something the person **does**, not something they have',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) describing three people somebody would have to find in a crowded place: a station, a wedding, a market, an office. Ordinary description, then the one that works, then your own rule.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody meeting these people tomorrow**. ★ _The one I could find in a crowd._  ✓ _One description that is only colours._  ? _What if they are sitting down that day?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Each student writes the "different from everything around it" line for **the person on their left** and gives it to them. Read what you got. **Did they see something you did not know about?**'));
out.push(hw('Write the description **somebody would write of you** (40+ words): the ordinary one, and the thing you do that you do not know you do.'));

// ======================= 19.5 =======================
out.push(pb());
out.push(h2('19.5  He\'s the kind of person who helps first'));
out.push(p('**Function:** describing character   ·   **Grammar:** _the kind of person who…_; character adjectives   ·   **Pronunciation:** stress on the adjective'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  The class names **eight** character words. Your teacher writes them. Then, for each one, somebody must give an **example of behaviour** — not a definition.'));
out.push(board('He\'s the kind of person who helps first.', 'kind → the kind of person who…'));
out.push(p('**b**  Match the word to the behaviour. _patient · generous · honest · hard-working · quiet · friendly_ → _says good morning first · waits without sighing · says when they were wrong · gives and does not mention it · stays until it is finished · listens more than they talk_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they writing?   **A** a report   **B** the page about the people of the centre   **C** a reference for somebody'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda not want the word "kind"?   **2** What does Nour say about Mr Bassam?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.9  Don\'t write "kind"', [
  ['Hiba', 'For Umm Nahla I\'ve written "she is very kind".'],
  ['Ms Huda', 'Cross it out.'],
  ['Hiba', 'But she is.'],
  ['Ms Huda', 'She is. And "kind" is a word that tells the reader nothing, because everybody writes it about everybody. What does she **do**?'],
  ['Hiba', '…She knows who hasn\'t eaten.'],
  ['Ms Huda', 'Write that.'],
  ['Hiba', 'She\'s the kind of person who knows who hasn\'t eaten and puts a sandwich down without saying anything about it.'],
  ['Ms Huda', 'Now I know her. Nour — Mr Bassam.'],
  ['Nour', 'I was going to write "helpful".'],
  ['Ms Huda', '(waits)'],
  ['Nour', 'All right. He\'s the kind of person who puts the note on the door even when nobody will thank him for it. He has done it every single time for as long as anybody can remember, and the week the lift broke he did it twice a day.'],
  ['Omar', 'And he is the kind of person who will not come down one floor to ask for help with his own account.'],
  ['Ms Huda', 'Write both. A person who is only good is not a person.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – describing what somebody is like**',
  table(['the pattern', 'examples'], [
    ['**the kind of person who** + verb',
     '_He\'s **the kind of person who** helps first._\n_She\'s **the kind of person who** knows who hasn\'t eaten._'],
    ['**be** + adjective',
     '_She **is patient**._ · _He **is very generous**._'],
    ['adjective **+ the behaviour**',
     '_She\'s patient — **she waits without sighing**._'],
  ], [1.3, 1.7]),
  '**Character words to use:**  _kind · patient · generous · honest · friendly · hard-working · quiet · funny · reliable · careful · stubborn · impatient_',
  '⚠ **The lesson of this cycle:** an adjective on its own tells the reader nothing, because everybody writes the same six words about everybody. _She is kind_ → _She knows who hasn\'t eaten._ **Always put the behaviour next to the word, or instead of it.**',
  '⚠ ~~He is a kind person who helps.~~ is fine, but the strong pattern is _**the kind of** person **who** helps_. Note that _kind_ here means **type** and has nothing to do with being kind.',
  '⚠ A page where everybody is good is a page nobody believes. Give one person one fault: _he is the kind of person who **will not** ask for help_.',
  '**Practise:** Rewrite with behaviour instead of the adjective.  1 She is very patient.  2 He is generous.  3 She is honest.  4 He is hard-working.  5 She is quiet.',
  '**Useful phrases:** Cross it out. · What does she **do**? · Now I know her. · A person who is only good is not a person.',
  '**Pronunciation.** 🔊 **Track 19.10** The stress goes on the **adjective** and then the behaviour is said faster and lower: _She\'s **PA**tient — she waits without sighing._ Listen and repeat, then say three of your own.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a character word from the card; B must describe somebody real with _the kind of person who…_ and **may not use the word itself**. A guesses the word. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'My __________ is the kind of person who __________.'],
  ['A', 'Is that __________?'],
  ['B', 'Yes. And __________ is also the kind of person who __________.'],
  ['A', 'And is there anything that is **not** good?'],
  ['B', '__________ is the kind of person who __________, which is not always easy.'],
]));
out.push(table(['Card A – the words', 'Card B – the words'], [
  ['patient · generous · stubborn', 'honest · reliable · impatient'],
  ['hard-working · quiet · funny', 'friendly · careful · proud'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **behaviour** you hear, not the word. Could you guess the word from it?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe **three** people you know with _the kind of person who…_, and give each one **one** thing that is not good. Your partner must tell you which of the three they would want as a neighbour, and why.'));
out.push(p('**b**  Swap. Then each of you say what **you** are the kind of person who does — one good, one not — and your partner may disagree with either.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We were writing the page about the people of the centre and Hiba wrote that Umm Nahla is very kind. Ms Huda told her to cross it out, because kind is a word everybody writes about everybody and it tells the reader nothing, and asked what she does. The answer is that she knows who has not eaten and puts a sandwich down without saying anything about it, and that sentence is the whole person. Nour was going to write "helpful" about Mr Bassam and ended up writing that he is the kind of person who puts the note on the door even when nobody will thank him, and also the kind of person who will not come down one floor to ask for help himself. Ms Huda said to write both, because a person who is only good is not a person._'));
out.push(p('**Listener task:** write the behaviour you heard today that you would steal for your own page.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the finished page from the entrance hall. Answer the questions.'));
out.push(model([
  '**THE PEOPLE OF THIS BUILDING** — class 4B, March',
  '**Mr Bassam · reception.** He is the kind of person who puts the note on the door even when nobody will thank him for it. He has done it every single time for as long as anybody here can remember, and in the week the lift broke he did it twice a day. He is also the kind of person who will not come down one floor to ask for help with his own account, and we have decided to put that in because it is true.',
  '**Umm Nahla · the café.** She is the kind of person who knows who has not eaten. She puts a sandwich down and says nothing about it and goes back behind the counter, and in four years nobody has ever had to ask her for anything. When we asked whether we could write about her she said no, and then she said we could write two lines, and this is three.',
  '**Abu Khalil · the gate.** He is the kind of person who is here before he needs to be. He opens the gate at four and he arrives at twenty past three, and he has done that for eleven years. He remembers this building when it was a school. Four people have ever asked him about it.',
  '**What we have learned writing this page:** every one of us started with an adjective and every one of us crossed it out.',
]));
out.push(item('1', 'What did Mr Bassam do in the week the lift broke?'));
out.push(item('2', 'What did Umm Nahla say when they asked about writing about her?'));
out.push(item('3', 'What does the class say it learned?'));
out.push(writers([
  'A character page: **name and role** → **_the kind of person who_ + behaviour** → **the proof: how long, how many times** → **one thing that is not simply good** → **what you learned writing it**.',
  'Behind every character sentence put a **number**: _every single time_ · _twice a day_ · _four years_ · _eleven years_ · _four people_. Character without evidence is flattery.',
  'Record how the person **reacted to being written about**. _She said no, then she said two lines, and this is three_ tells you more about her than any adjective could.',
  '⚠ End with what the writing taught you, not with a compliment. _Every one of us started with an adjective and every one of us crossed it out_ is the whole cycle in one line.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a character page about two or three people where you live or work (35 words or more).'));
out.push(p('**THE PEOPLE OF ______________**   **______________ · ______________.** He/She is the kind of person who ______________. He/She has done it ______________ for ______________. He/She is also the kind of person who ______________.   **______________ · ______________.** He/She is the kind of person who ______________. In ______________ nobody has ever ______________.   **What we have learned writing this page:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title, and each person with a name and a role',
  '_the kind of person who_ + **behaviour** · no bare adjectives left standing alone',
  'At least two numbers as proof (how long, how often, how many)',
  'At least one person has something that is not simply good',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full character page (60 words or more) about three people in your life. Behaviour not adjectives, numbers as proof, one fault, and a last line saying what writing it taught you.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **one of the people in it**. ★ _You saw something true._  ✓ _One adjective that is still standing on its own._  ? _Would you show them this?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three **"what we have learned"** lines aloud. Then the real question: **which of these pages are you going to show the person it is about?** Most students say none. Ask why.'));
out.push(hw('Write the paragraph about **somebody you find difficult** (40+ words), using _the kind of person who_ and behaviour only, and ending with one thing about them that is good and is also true.'));

// ======================= 19.6 =======================
out.push(pb());
out.push(h2('19.6  Which one — the one with the red bag?'));
out.push(p('**Function:** asking somebody to identify a person or a thing   ·   **Grammar:** _Which one…?_ + _the one who_ / _the one with_   ·   **Pronunciation:** rising intonation on _Which one_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher puts six similar things on the desk — or names six people in the room. Every student must ask one _Which one…?_ question and get an answer that identifies it exactly.'));
out.push(board('Which one — the one with the red bag?', 'Which one…? – The one who / with…'));
out.push(p('**b**  Finish the answer two ways, with _who_ and with _with_. **1** _Which man?_ – _The one ______ glasses._ / _The one ______ wears glasses._  **2** _Which bag?_ – _The one ______ the broken handle._ / _The one ______ is on the chair._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is happening?   **A** somebody has left something behind   **B** two people are looking for the same person   **C** a parcel has gone to the wrong flat'));
out.push(p('**b**  Listen again. **1** How many questions does Mr Bassam ask?   **2** What finally identifies the bag?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.11  Which one?', [
  ['Samira', 'Somebody has left a bag in Room 3.'],
  ['Mr Bassam', 'Which one — the red one?'],
  ['Samira', 'No, a black one.'],
  ['Mr Bassam', 'I have four black bags behind this desk. Which one?'],
  ['Samira', 'The one with the broken handle.'],
  ['Mr Bassam', 'Two of them have broken handles. This is a language centre; everybody carries everything badly.'],
  ['Samira', 'The one that has books in it.'],
  ['Mr Bassam', 'Now we are getting somewhere. How many books?'],
  ['Samira', 'I didn\'t count them. It\'s heavy.'],
  ['Mr Bassam', 'Right. And the person who left it — do you know which one?'],
  ['Samira', 'It was the student who sits by the window. The one who stands up when she answers.'],
  ['Mr Bassam', '(pause) That is a better description than most people manage for their own brother. That is Samira.'],
  ['Samira', 'I am Samira.'],
  ['Mr Bassam', 'Then it is your bag, and you have described yourself to me for four minutes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking and answering: _Which one?_**',
  table(['the question', 'the answer'], [
    ['**Which one?** · **Which one — the red one?**', '_**The one with** the broken handle._'],
    ['**Which man?** · **Which bag?**', '_**The one who** wears glasses._ · _**The one that** has books in it._'],
    ['**Which of them?**', '_**The one on** the chair._ · _**The one by** the window._'],
  ], [1.3, 1.5]),
  '**Three ways to finish _the one…_:**  **who** + verb (people) · **that / which** + verb (things) · **with** or another preposition + noun (both).',
  '⚠ _the one **with** glasses_ and _the one **who wears** glasses_ mean the same thing. _with_ is shorter and more common; learn both and use _with_ when you can.',
  '⚠ ~~Which is the one?~~ → _**Which one** is it?_ · ~~The one which have books~~ → _the one which **has** books_.',
  '**The useful habit:** when the first answer does not identify it, **add another clause** rather than repeating the first: _black_ → _with the broken handle_ → _that has books in it_. Three clauses will identify almost anything.',
  '**Practise:** Answer each question two ways — with a clause and with _with_.  1 Which man? (glasses)  2 Which bag? (broken handle)  3 Which building? (blue door)  4 Which student? (sits by the window)  5 Which chair? (one short leg)',
  '**Useful phrases:** Which one? · Now we are getting somewhere. · I didn\'t count them. · do you know which one? · everybody carries everything badly',
  '**Pronunciation.** 🔊 **Track 19.12** _Which one?_ **rises** — it is a real question and a flat one sounds impatient. The answer **falls**: _The one with the broken handle._ ↘ Listen and repeat the pair four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has lost or found the thing on the card; B is behind the desk and must ask _Which one?_ until it is identified exactly — at least **four** questions. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Somebody has left __________.'],
  ['B', 'Which one — the __________ one?'],
  ['A', 'No, a __________ one.'],
  ['B', 'I have __________ of those. Which one?'],
  ['A', 'The one with __________.'],
  ['B', '__________ of them have __________.'],
  ['A', 'The one that __________.'],
  ['B', 'Now we are getting somewhere. And the person who __________ — do you know which one?'],
  ['A', 'It was the __________ who __________.'],
]));
out.push(table(['Card A – the things', 'Card B – the things'], [
  ['a black bag, broken handle, full of books', 'a grey coat, one button missing, keys in the pocket'],
  ['a charger, white, a bent end', 'a notebook, no name in it, a bus ticket inside'],
  ['a telephone, no cover, a photograph of a child on the screen', 'an umbrella, wooden handle, does not open'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** count the questions, and write the clause that finally identified it. Was it the first thing anybody said?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Put something of yours on the table with everybody else\'s. One student at a time describes theirs with _the one…_ clauses and the class finds it. **How few clauses can you use?**'));
out.push(p('**b**  Then the harder one: describe **somebody in this room** so that your partner can identify them in three clauses — without appearance, without a name, without their job.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Samira went to reception to say somebody has left a bag in Room 3, and it took four questions. Black was no use, because Mr Bassam has four black bags behind the desk. The broken handle was no use either, because two of them have broken handles — he says this is a language centre and everybody carries everything badly. What identified it was the books in it. Then he asked who left it and she said the student who sits by the window, the one who stands up when she answers, and he said that was a better description than most people manage for their own brother, and that it was her. She has just spent four minutes describing herself._'));
out.push(p('**Listener task:** write the clause from today that identified something in one go.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the lost property notice. Answer the questions.'));
out.push(model([
  '**LOST PROPERTY — AL-YASMIN CENTRE, MARCH**',
  'Everything on this list is behind the desk. Come and ask for it, and be ready to say **which one** — we have four black bags and two of them have broken handles.',
  '**A black bag** which has about nine books in it and is heavier than it looks. Left in Room 3 on a Thursday. We know whose it is; she described it to us herself without knowing it was hers.',
  '**A grey coat** with one button missing and a set of keys in the left pocket. Left in the café in January. Nobody has asked for it, which worries us, because the keys are somebody\'s.',
  '**A white charger** with a bent end which does not work. If this is yours, it is not worth collecting, and that is the only useful thing anybody can tell you about it.',
  '**A notebook** which has no name in it and a bus ticket from Homs inside the front cover. It is half full. Somebody has written in it every week since September and then stopped.',
  '**If you are looking for something that is not on this list:** tell us three things about it, not one. The colour is never enough.',
]));
out.push(item('1', 'Why does the notice tell people to be ready to say "which one"?'));
out.push(item('2', 'Which item worries the centre, and why?'));
out.push(item('3', 'What should you do if your thing is not on the list?'));
out.push(writers([
  'A lost property notice: **where the things are** → **one item per line, with two or three clauses** → **where and when it was left** → **one line that is about the person, not the thing** → **what to do if yours is not listed**.',
  'Two or three clauses per item, never one: _**A black bag** which has nine books in it and is heavier than it looks._ A notice that says "a black bag" will be claimed by three people.',
  'Let one or two items carry a **human detail**: _nobody has asked for it, which worries us_ · _somebody has written in it every week since September and then stopped_. It turns a list into something people read to the end.',
  '⚠ Finish with the instruction that makes the notice work: _tell us three things about it, not one. The colour is never enough._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a lost property notice for a place you know (35 words or more).'));
out.push(p('**LOST PROPERTY — ______________**   Everything on this list is ______________. Be ready to say **which one** — we have ______________.   **A ______________** which ______________ and ______________. Left in ______________ on ______________.   **A ______________** with ______________ and ______________. Nobody has ______________, which ______________.   **If you are looking for something that is not on this list:** tell us ______________, not ______________. ______________ is never enough.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title with the place and the month',
  'Two or three clauses per item — _which_ / _that_ for things, _with_ + noun',
  'Where and when each thing was left',
  'A last line telling people how to describe something properly',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full notice (60 words or more) for a real place — a centre, a mosque, a station, an office, a shop. Four items, two or three clauses each, one human detail, and the rule at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s notice as **somebody who has lost something**. ★ _I would know immediately whether one of these is mine._  ✓ _One item I could not tell apart from mine._  ? _How long do you keep things?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Swap notices. Pick the item on somebody else\'s notice that you could **claim falsely** with what is written there. Tell them. That item needs another clause.'));
out.push(hw('Write the description of **something you have actually lost** (40+ words), with three clauses, so that somebody holding it would know it was yours.'));

// ======================= 19.7 =======================
out.push(pb());
out.push(h2('19.7  Review & Mediate: Who is who in the photograph?'));
out.push(p('**Function:** explaining a group photograph and a list of names   ·   **Recycling:** Units 1–19   ·   **Exam practice:** A2 Key Reading Part 2, Writing Part 6, Speaking Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 19 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Tareq is the one who he drives a minibus.  **2** The shop who sells parts is shut.  **3** The man left this who came on Tuesday.  **4** It\'s a man tall with a beard.  **5** She is very kind. _(what is wrong with it?)_  **6** Which is the one?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the back of a photograph given to the city library. The photograph is not printed here — only what is written on the back and on the library\'s card.'));
out.push(box(null, [
  '**CITY LIBRARY · PHOTOGRAPH 1946-B-112**',
  '**Given by:** the family of Ahmad Deeb, Mezzeh, January.',
  '**Written on the back, in pencil, in two different hands:**',
  '_"The school, 1963. Back row: Ahmad, Nizar, the one who went to Aleppo, unknown, unknown. Front row: Ustaz Fouad, the headmaster, my mother\'s cousin (the one with the glasses), unknown."_',
  '_Second hand, in blue: "The one in the back row who is not smiling is Khalil. He was my father\'s partner. The one next to Ustaz Fouad is NOT the headmaster — the headmaster is the one who is standing at the side."_',
  '**Library note:** where two people disagree, we write **both**. We do not decide.',
  '**Named since January:** 11 people in Room 2.',
  '**If you recognise anybody:** tell the desk. Bring any photograph of your own; we copy it free and **you keep the original**.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Hiba explains the card to her grandmother. What does her grandmother want to do, and what does she say about the second hand in blue?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.13  Who is who', [
  ['Grandmother', 'Read me what is on the back.'],
  ['Hiba', 'It\'s written twice, by two different people, and that is the interesting part. The first person wrote in pencil: the school, 1963. Then the back row — Ahmad, Nizar, the one who went to Aleppo, and two unknowns.'],
  ['Grandmother', 'Unknown.'],
  ['Hiba', 'The library writes "unknown" where nobody knows. It says here: where two people disagree, we write both, we do not decide.'],
  ['Grandmother', 'Good. Go on.'],
  ['Hiba', 'Front row: Ustaz Fouad, the headmaster, my mother\'s cousin — the one with the glasses — and another unknown.'],
  ['Grandmother', 'And the blue?'],
  ['Hiba', 'Somebody else, later, in blue. They say the one in the back row who is not smiling is Khalil, who was their father\'s partner. And they say the man next to Ustaz Fouad is not the headmaster — the headmaster is the one standing at the side.'],
  ['Grandmother', '(long pause) The one standing at the side is always the headmaster. The one in the middle is always the one who wanted to be.'],
  ['Hiba', 'Should I tell the library that?'],
  ['Grandmother', 'Tell them I want to see 1946-B-112, and tell them I knew a Khalil who was not smiling in any photograph anybody ever took of him. And ask them whether a person who is in the room can be written on the card as "unknown" when she is sitting in front of them.'],
]));
out.push(sp());
out.push(box('Language box – explaining a photograph and a list of names', [
  'Say **how the names are organised** before any name: _back row, then front row, left to right_. A list of names with no shape is unusable.',
  'Say **who wrote it and when** — and, when there are two hands, say so first: _it is written twice, by two different people, and that is the interesting part_.',
  'Keep _**unknown**_ as it is, and explain what it means: _the library writes "unknown" where nobody knows; where two people disagree, they write both._',
  'Identify people the way the back of the photograph does, with clauses: _the one **who went to Aleppo**_ · _the one **with the glasses**_ · _the one **who is not smiling**_ · _the one **who is standing at the side**_.',
  'Report a **disagreement** as a disagreement: _they say the man next to Ustaz Fouad is **not** the headmaster_. Do not resolve it for the listener.',
  'Finish with what the listener wants to **do**: see it, name somebody, correct something.',
  '**Useful phrases:** It\'s written twice, by two different people. · back row, left to right · The library writes "unknown" where… · They say that… is not… · Tell them I want to see…',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the cards below and does **not** show it. A explains it to B and C, who ask about anything unclear and must each end by saying what they would do next. Change roles with the other card.'));
out.push(table(['Card A – a wedding photograph, 1998', 'Card B – a works photograph, 1985'], [
  ['Back of photo: "Rose Hall, Homs. Back: Samer, Fadi, unknown, unknown."', 'Back of photo: "The workshop, before the new building."'],
  ['"Front: the bride, the groom, the groom\'s mother (the one in grey)."', '"Left to right: Abu Nizar, the one who came from Latakia, unknown, me."'],
  ['Second hand: "The one on the left is NOT Fadi. Fadi was in Aleppo that week."', 'Second hand: "The one third from the left is Jamil, who died in 1991."'],
  ['Library note: where two people disagree, we write both.', 'Library note: we do not put anything online without asking.'],
  ['Named since January: 11.', 'This room changes every month.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write how many people are named, how many are unknown, and the **one** disagreement.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** photograph with several people in it that you have seen — in your family, at work, in a school, on a wall. Explain it to your partner: how it is organised, who is who, who nobody knows, and whether anybody disagrees. They must ask: _how do you know?_, _who wrote the names?_ and _who is missing?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Omar explained a photograph of the workshop from 1985, which is on the wall there and which he has walked past for six years. The names are written on the back, left to right, by somebody who is in the picture — he says "me" at the end of the list, which Omar says is how you know it was written by one of them and not by a family afterwards. Two of the five are unknown, and a second person has written in different ink that the third from the left is Jamil, who died in 1991. The thing I did not think of is that the unknown ones are probably known to somebody who is still alive and has never been asked. So I decided I would take the photograph off the wall and show it to the oldest person at that workshop before I did anything else, because nobody ever has._'));
out.push(p('**Listener task:** did they tell you **how the list is organised** before the names? Who is missing from the photograph they described?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 2)', 7));
out.push(p('Read about three people who help at the centre. For questions **1–7**, write **A**, **B** or **C**.'));
out.push(model([
  '**A · Mr Bassam, reception.** He is the one who knows which room you are in before you have said your name. He has put a note on the door every time something has gone wrong, for as long as anybody can remember, and in the week the lift broke he did it twice a day. He will not, however, come down one floor to ask anybody for help with his own account, and he has been locked out of it since January.',
  '**B · Umm Nahla, the café.** She is the one who knows who has not eaten. She puts a sandwich down and says nothing about it. In four years nobody has had to ask her for anything, and when the class asked whether they could write about her she said no, then said two lines, and the paragraph they wrote is three.',
  '**C · Abu Khalil, the gate.** He is the one who was here before the centre was a centre. He opens the gate at four and arrives at twenty past three, and he has done that for eleven years. He remembers the building when it was a school and will tell anybody who asks. Four people have asked in eleven years.',
]));
[
  '**1**   Who arrives earlier than they need to?     **A**   **B**   **C**',
  '**2**   Who notices something about people without being told?     **A**   **B**   **C**',
  '**3**   Who will not ask for help?     **A**   **B**   **C**',
  '**4**   Who knows the building from before?     **A**   **B**   **C**',
  '**5**   Who did not want to be written about?     **A**   **B**   **C**',
  '**6**   Who did extra work in a difficult week?     **A**   **B**   **C**',
  '**7**   Who is almost never asked about the thing they know most about?     **A**   **B**   **C**',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the back of a photograph for somebody who will look at it in fifty years (35 words or more).'));
out.push(p('**______________, ______________.**  Back row, left to right: ______________, ______________, the one who ______________, ______________.   Front row: ______________, the one with ______________, ______________.   I am the one who ______________.   ______________ is not in this photograph because ______________.   Written by ______________, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The place and the year at the top, and who wrote it at the bottom',
  '_who_ for people, _which_ / _that_ for things, _with_ + noun — no second pronoun',
  'Every row said left to right, and _unknown_ written where you do not know',
  'One line about somebody who is **not** in the photograph',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend **Sam** is coming to meet you and your family for the first time.',
  'Write an email to Sam.  In your email:  •  describe **one person** he will meet  •  say **what that person is like**  •  tell him **how he will know you** at the station.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 19 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Tareq is the one ___ drives a minibus.   a) which   b) who   c) who he',
  '2  It\'s the shop ___ sells spare parts.   a) who   b) that   c) what',
  '3  The man ___ came on Tuesday left this.   a) who   b) which   c) he',
  '4  She\'s got ___ hair.   a) curly dark short   b) short dark curly   c) dark short curly',
  '5  He\'s the tall one ___ the glasses.   a) with   b) who   c) that',
  '6  He\'s the ___ of person who helps first.   a) type   b) kind   c) sort of',
  '7  "Which one?" – "___ with the broken handle."   a) The one   b) That one who   c) It\'s one',
  '8  I don\'t like people ___ talk in the cinema.   a) which   b) who   c) who they',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 19.14** Ms Huda describes five people at the centre. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'Who they are'], [
  ['1  Tareq ___', 'A  the one who knows who has not eaten'],
  ['2  Samira ___', 'B  the one who arrives twenty minutes before he needs to'],
  ['3  Mr Bassam ___', 'C  the one who stands up when she answers'],
  ['4  Umm Nahla ___', 'D  the one who cannot sit still after seven in the evening'],
  ['5  Abu Khalil ___', 'E  the one who puts the note on the door and is never thanked'],
  ['', 'F  the one who has worked here the longest'],
  ['', 'G  the one who is always in the café at four'],
], [1, 2]));
out.push(dlg('Track 19.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish, here is the page you have written, in my words. Tareq is the one who cannot sit still after seven in the evening, because he starts driving at half past five in the morning and his body has decided that the day is over. Samira is the one who stands up when she answers a question — she does not know she does it and nobody has told her, and I am not going to be the one who does. Mr Bassam is the one who puts the note on the door when something has gone wrong, every single time, and nobody has ever thanked him for a single one of them. Umm Nahla is the one who knows who has not eaten; she puts a sandwich down and says nothing about it. And Abu Khalil is the one who opens the gate at four and arrives at twenty past three, and he has done that for eleven years.'],
]));
out.push(p('**C  Writing.** Describe **two** people who work or live near you (40+ words): one _who_ clause each, one thing they look like, one thing they are like — with the behaviour, not the adjective — and how you would find each of them in a crowded room.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 19)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ describe a person with _who_, and not say the pronoun twice',
  '☐ describe a thing or a place with _which_ or _that_',
  '☐ put the clause next to the person it describes',
  '☐ describe appearance with _the … one with …_ and the right adjective order',
  '☐ describe character with _the kind of person who…_ and a behaviour',
  '☐ ask _Which one?_ and answer with a clause',
  '☐ choose the detail that is different from everything around it',
  '☐ explain a group photograph and a list of names',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 20 – SERVICES AND REPAIRS', [
  'Unit 19 described people. Unit 20 describes **how** they do things: _carefully · quickly · properly · better than last time_.',
  'Before the next lesson: find **one** thing in your home that has been repaired — well or badly — and come ready to say how it was done.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 19 · Student\'s Book');
