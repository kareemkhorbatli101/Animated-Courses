// Proactive English B1 · Syria Edition · Book 1 · Unit 1 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 1  First Impressions'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**1.1**  introduce yourself at B1 length',
  '**1.2**  say what you are doing now and what you do generally',
  '**1.3**  ask the questions that open a conversation',
  '**1.4**  describe what somebody is like',
  '**1.5**  say what you think of somebody without saying anything unkind',
  '**1.6**  keep a conversation going',
  '**1.7**  Review & Mediate: explain the class list to somebody who has just joined',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Class 5A, Room 14.** Mondays and Thursdays, half past five to half past seven. Room 14 is the second room Ms Huda asked the centre for three years running, and this is the first class to be taught in it.',
  '**Twelve people.** Four of them finished A2 together in June — Omar, Lina, Samira and Tareq. Eight have never met any of them. Nobody can remember more than three names on the first evening and everybody pretends otherwise.',
  '**It is September**, it is Ms Huda\'s tenth year of teaching, and this is the first B1 group she has taken since 2019.',
], C.lyellow, C.orange));

// ======================= 1.1 =======================
out.push(pb());
out.push(h2('1.1  Ninety seconds'));
out.push(p('**Function:** introducing yourself at B1 length   ·   **Grammar:** the present simple for what is permanent   ·   **Pronunciation:** which word in the sentence is stressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say your name and one sentence about yourself to the person next to you. Thirty seconds each. Then your teacher asks the class: **whose sentence do you still remember, and why that one?**'));
out.push(board('I\'ve been doing it for eleven years.', 'present simple + for / since'));
out.push(p('**b**  Which of these tells somebody something? **1** _I am from Damascus._  **2** _I have lived in four cities and I came back to this one on purpose._  **3** _I am a nurse._  **4** _I work nights at the children\'s hospital, which is why I may fall asleep in this room._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How long does Ms Huda give each person?   **A** thirty seconds   **B** ninety seconds   **C** three minutes'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say a name on its own is worth?   **2** What does Yara say when Ms Huda asks whether there is more?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.1  Twelve people, ninety seconds each', [
  ['Ms Huda', 'Ninety seconds each, and I am going to time it. Not thirty — ninety. At A2 you said your name and your job and sat down, and by the second week nobody remembered anybody.'],
  ['Jad', 'Ninety seconds is a long time.'],
  ['Ms Huda', 'It is, and that is the point. A name on its own is worth nothing. Tell us one thing that is true all the time and one thing that is true this month. Lina, you start, because you have done this before.'],
  ['Lina', 'Lina Haddad. I work in accounts at a trading company in Mezzeh, I have done for four years, and since June I have been doing a job that belonged to somebody else, which I am still not used to. I write to Türkiye in English about twice a week. I read English much better than I speak it and I know exactly why: I have never had to speak it to anybody who could not wait.'],
  ['Ms Huda', 'Eighty seconds. Good. Bassel.'],
  ['Bassel', 'Bassel Tahhan. I have a printing works in Qassaa — fourteen people, two machines, and the older machine is German and older than me. I buy ink and parts from Türkiye and from China, and I do all of that through other people, which costs me money every single month. That is why I am here. I am forty-one and I am the oldest person in this room and I have decided not to mind about that.'],
  ['Ms Huda', 'Yara.'],
  ['Yara', 'Yara Mansour. I am from Suwayda and I work in the laboratory at a private hospital here. I have studied English since I was eleven. I have never once spoken it to a stranger.'],
  ['Ms Huda', 'Thirty seconds. Is there more?'],
  ['Yara', '…There is more. I will say it next week.'],
  ['Ms Huda', 'That is a fair answer and I am going to hold you to it. Mazen.'],
  ['Mazen', 'Mazen Hariri. I mend telephones at a counter in Shaalan — six, seven a day, and about half of those are the same fault. I left school at fifteen. I speak English all day long to tourists and to people from the Gulf and I write it like a nine-year-old, and I would like somebody to fix that, which I think is what this is.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present simple for what is true all the time**',
  table(['what it does', 'example'], [
    ['a permanent fact about you', '_I **work** in accounts._ · _I **have** a printing works in Qassaa._'],
    ['something that is repeated', '_I **write** to Türkiye about twice a week._'],
    ['something that has been true and still is', '_I **have studied** English since I was eleven._'],
    ['how you are, not what you are doing', '_I **read** English better than I **speak** it._'],
  ], [1.6, 2.6]),
  '**At B1 an introduction is three or four sentences, not one.** The shape that works: **what you do** → **how long** → **what you use English for** → **the true thing nobody asks for**. The fourth is what people remember.',
  '⚠ ~~I am working in accounts since four years.~~ → _I **have worked** in accounts **for** four years._  Permanent work takes the present simple; _for_ takes a length and _since_ takes a point.',
  '⚠ ~~I am forty-one years.~~ → _I **am** forty-one._  ⚠ ~~I have 14 persons in my printing works.~~ → _I have fourteen **people**._',
  '**Say the number, then what it is a number of.** _Fourteen people, two machines._ A B1 introduction is specific: not _a small business_ but _fourteen people and two machines_.',
  '**Useful phrases:** I have done for four years. · which I am still not used to. · which costs me money every month. · I left school at fifteen. · I would like somebody to fix that.',
  '**Practise:** Make each one longer and more exact.  1 I am a teacher.  2 I am from Aleppo.  3 I use English at work.  4 I am a student.  5 I have a shop.',
  '**Pronunciation.** 🔊 **Track 1.2** English puts the stress on the word that carries the news. _I read it better than I **SPEAK** it._ · _I have **NEVER** spoken it to a stranger._ Listen to eight sentences and mark the stressed word; then say your own first sentence and mark it.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the bare version from the card; B asks _is that all?_ and A says it again in three sentences using the four-part shape. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'I\'m __________ and I\'m from __________.'],
  ['B', 'Is that all?'],
  ['A', 'I\'ve __________ for __________. I use English for __________.'],
  ['B', 'And the thing nobody asks about?'],
  ['A', '__________, which __________.'],
  ['B', 'That is the part I will remember.'],
]));
out.push(table(['Card A – the bare versions', 'Card B – the bare versions'], [
  ['I\'m a nurse.', 'I\'m a student.'],
  ['I work in a shop.', 'I have a small business.'],
  ['I\'m from Deir ez-Zor.', 'I\'m a teacher.'],
  ['I use English at work.', 'I learned English at school.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the **fourth** part of each introduction — the thing nobody asked for. Which one would you remember next week?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Ninety seconds, standing, no notes. What you do · how long · what you use English for · the true thing nobody asks for. Your partner times you and tells you how many seconds you actually used.'));
out.push(p('**b**  Then swap, and afterwards each of you say which of your partner\'s four parts was strongest and which was missing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda gave everybody ninety seconds and said she would time it, because at A2 people said their name and their job and sat down and by the second week nobody remembered anybody. She says a name on its own is worth nothing: you have to say one thing that is true all the time and one thing that is true this month. Lina has worked in accounts for four years and has been doing somebody else\'s job since June, which she is still not used to. Bassel has a printing works in Qassaa with fourteen people and two machines, and he buys from Türkiye and China through other people, which costs him money every month — that is why he is here. Yara has studied English since she was eleven and has never spoken it to a stranger, and when Ms Huda asked whether there was more she said there was and that she would say it next week._'));
out.push(p('**Listener task:** write the one sentence from this room that you will still remember on Thursday.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what three of them wrote down afterwards, when Ms Huda asked for the same thing on paper. Answer the questions.'));
out.push(model([
  '**CLASS 5A · WHO WE ARE** · written on the first evening, pinned up in Room 14',
  '**Rasha Barakat.** I am a nurse at the children\'s hospital and I have been one for nine years. I work nights eleven times a month, which is why I may arrive here having been awake since the previous afternoon; if I look rude, I am not rude, I am tired. I need English for one reason and it is not promotion: the families who come to us from outside Syria do not speak Arabic, and twice this year I have stood in front of a mother and been unable to tell her that her child was going to be all right. I could say it in Arabic in four words. I want those four words.',
  '**Jad Attar.** I am nineteen and I am in the first year of computer engineering at Damascus University. I understand almost everything I hear in English, because everything I do all day is in English — the course, the videos, the forums, the documentation. I write it badly and I know I write it badly, because when I post a question online people answer the question I did not ask. My mother thinks I am good at English. I am good at understanding English, which is a different thing, and I would rather say so here in week one than be found out in week nine.',
  '**Umm Kinan — Siham Dibo.** I teach mathematics at a secondary school in Rukn al-Din and I have taught it for twenty-four years. My son lives in Germany. He has two daughters, they are five and seven, and they speak German and English and almost no Arabic. I see them on a screen for twenty minutes every Friday and I say the same six sentences to them every week, and they are very polite about it. I am not here for my work. I have one grandchild who has started to answer me in English and I would like to be able to answer her back.',
]));
out.push(item('1', 'What does Rasha say she needs English for, and what does she say it is not for?'));
out.push(item('2', 'What is the difference Jad draws, and why does he want to say it now?'));
out.push(item('3', 'What happens every Friday for twenty minutes?'));
out.push(writers([
  'A written introduction: **what you do and how long** → **the circumstance the reader should know** → **why you need English, with the moment that proves it** → **the thing you would rather say now than be found out for later**.',
  'Give the **moment**, not the reason. Rasha does not write "I need medical English"; she writes about standing in front of a mother and not having four words. One scene does the work of a paragraph of explanation.',
  'Be exact with numbers and they will be believed: _nine years · eleven nights a month · twenty-four years · twenty minutes every Friday · they are five and seven_.',
  '⚠ Write the sentence that costs you something. _I am good at understanding English, which is a different thing._ A page of introductions where nobody admits anything is a page nobody reads twice.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own entry for the Room 14 wall (50 words or more).'));
out.push(p('**______________.** I ______________ and I have ______________ for ______________. ______________, which is why ______________. I need English for ______________ and it is not ______________: ______________. ______________ I would rather ______________ now than ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What you do, and how long, in the first sentence',
  'Present simple for what is permanent · _for_ + a length, _since_ + a point',
  'One moment rather than one reason — a scene the reader can see',
  'At least three exact numbers',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full entry for the wall (100 words or more). It is going up where the class will read it twice a week for a year, so write the version you are willing to have read. All four parts, and the sentence that costs you something.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s entry as **somebody who will sit next to them for a year**. ★ _The line that made me want to ask you something._  ✓ _One sentence that could have been written by anybody in this room._  ? _What is the thing you have not put in?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Pin them up. **Then, with the names covered: how many can the class match to a person?** Do it again in Unit 12 and the number will have changed.'));
out.push(hw('Write the ninety seconds **you would have given at A2**, two years ago, and put it next to the one you wrote today (50+ words). What is in the new one that you would not have said then?'));

// ======================= 1.2 =======================
out.push(pb());
out.push(h2('1.2  What I do and what I\'m doing'));
out.push(p('**Function:** now against generally   ·   **Grammar:** present simple and present continuous · state verbs   ·   **Pronunciation:** the contracted auxiliary'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Two columns on the board: **all the time** and **this month**. Everybody gives one of each about themselves, fast, no thinking time. Your teacher writes six of them up.'));
out.push(board('I work nights — but this month I\'m on days.', 'present simple · present continuous'));
out.push(p('**b**  Simple or continuous? **1** _I ___ at the children\'s hospital._ (work, nine years)  **2** _This month I ___ on days._ (work)  **3** _I ___ what you mean._ (understand)  **4** _I ___ to improve my writing._ (try, at the moment)'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is Rasha on days this month?   **A** she asked to change   **B** somebody is away   **C** she is training'));
out.push(p('**b**  Listen again. **1** What does Mazen say he is doing differently this month?   **2** What does Ms Huda say about the word _understand_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.3  I work nights, and this month I\'m on days', [
  ['Ms Huda', 'Two sentences each. What you do, and what you are doing at the moment that is not usual.'],
  ['Rasha', 'I work nights. This month I\'m working days, because the sister who does days is in Lebanon until the eighth of October.'],
  ['Ms Huda', 'And which do you prefer?'],
  ['Rasha', 'Nights. Everybody says that is strange. On nights there are four of us and nobody is watching, and you do the job. On days there are fourteen of us and half of my hours go on explaining what I have just done to somebody who was not there.'],
  ['Mazen', 'I mend telephones. That does not change. What I am doing this month is writing down every fault — the date, the model, what was wrong, what I did. Four weeks so far.'],
  ['Ms Huda', 'Why?'],
  ['Mazen', 'Because a man asked me last month how many of a certain model come in with a certain fault, and I said "a lot", and he said "how many", and I did not know. I have decided not to say "a lot" again.'],
  ['Jad', 'I don\'t understand why that matters.'],
  ['Ms Huda', 'Stop there, Jad, and listen to what you just said. _I don\'t understand_, not _I\'m not understanding_. Some verbs almost never take the continuous — understand, know, mean, believe, want, need, remember, belong.'],
  ['Jad', 'So I can\'t say "I\'m not understanding this".'],
  ['Ms Huda', 'You will hear people say it. You will also hear "I\'m loving it" on a sign. In an exam and in a letter, write _I don\'t understand_.'],
  ['Lina', 'And "I\'m thinking about it"?'],
  ['Ms Huda', 'That one is allowed, because there are two of it. _I think you are right_ is an opinion and takes the simple. _I\'m thinking about changing my job_ is an activity in your head and takes the continuous. Two different verbs wearing the same coat.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – simple against continuous**',
  table(['present simple', 'present continuous'], [
    ['permanent · repeated · how things are\n_I **work** nights._ · _I **mend** telephones._',
     'now · this month · temporary · changing\n_This month I\'**m working** days._ · _I\'**m writing** down every fault._'],
  ], [1.4, 1.6]),
  '**The test is not "now".** It is whether the thing is **the arrangement** or **a departure from it**. _I work nights_ is the arrangement; _this month I\'m working days_ is the departure, and the sentence usually says for how long or why.',
  '**State verbs** almost never take the continuous: _understand · know · mean · believe · want · need · remember · forget · belong · own · cost · seem · hear · see · like · hate_.',
  '⚠ ~~I\'m not understanding.~~ → _I **don\'t understand**._  ⚠ ~~I\'m knowing him for ten years.~~ → _I **have known** him for ten years._',
  '**Two verbs in one coat.** _I **think** you are right_ (opinion, simple) against _I\'**m thinking** about changing my job_ (an activity, continuous). The same happens with _have_: _I **have** a car_ against _I\'**m having** lunch_.',
  '**Useful phrases:** which do you prefer? · half of my hours go on explaining. · I have decided not to say "a lot" again. · two different verbs wearing the same coat.',
  '**Practise:** Simple or continuous?  1 I ___ (work) nights.  2 This week I ___ (cover) for somebody.  3 I ___ (not understand) the question.  4 He ___ (think) about leaving.  5 She ___ (know) the answer.  6 They ___ (build) a new entrance this month.',
  '**Pronunciation.** 🔊 **Track 1.4** The auxiliary is squeezed to almost nothing and the main verb carries everything: _I\'m **WOR**king days_ /aɪm ˈwɜːkɪŋ/. Said in full — _I **am** working_ — it sounds like an argument. Listen to six pairs and say the contracted one.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the permanent fact from the card; B invents a temporary departure from it and says why and for how long. Then swap cards. One of B\'s answers must use a state verb correctly.'));
out.push(dlg(null, [
  ['A', 'I __________.'],
  ['B', 'And at the moment?'],
  ['A', 'This __________ I\'m __________, because __________.'],
  ['B', 'How long for?'],
  ['A', 'Until __________.'],
  ['B', 'And do you prefer it?'],
  ['A', '__________. I know __________ and I don\'t think __________.'],
]));
out.push(table(['Card A – the permanent facts', 'Card B – the permanent facts'], [
  ['I work nights at the hospital.', 'I open the shop at eight every morning.'],
  ['I teach mathematics.', 'I drive the Mezzeh minibus line.'],
  ['I live with my parents.', 'I study at the university.'],
  ['I buy my parts through an agent.', 'I see my son on a screen on Fridays.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **permanent** fact and the **temporary** one for each speaker, and underline the words that told you which was which.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner three permanent things about your life and **one** thing that is true only this month. Your partner has to guess which is the temporary one before you say.'));
out.push(p('**b**  Then both of you say one thing that has been "temporary" for more than a year, and what you call it now.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha works nights but this month she is working days, because the sister who does days is in Lebanon until the eighth of October. She prefers nights, which everybody tells her is strange: on nights there are four of them and nobody is watching and you do the job, and on days there are fourteen and half her hours go on explaining what she has just done to somebody who was not there. Mazen mends telephones, which does not change, but what he is doing this month is writing down every fault with the date, the model and what he did — four weeks so far — because a man asked him how many of a model come in with a fault, he said "a lot", the man said "how many", and he did not know. Jad said he did not understand why it mattered, and Ms Huda stopped him to point out that he said it correctly without noticing: some verbs almost never take the continuous._'));
out.push(p('**Listener task:** write the thing in your own life that has been temporary for too long.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page that goes up next to the class list. Answer the questions.'));
out.push(model([
  '**WHAT WE ARE EACH DOING THIS TERM** · Room 14 · and what we do the rest of the time',
  '**Rasha** works nights and is working days until the eighth of October, while the day sister is in Lebanon. She says she will be glad to go back, and that she is the only person in the hospital who means it.',
  '**Mazen** mends telephones, as he always has, and is keeping a record of every fault for the first time in nine years — the date, the model, the fault and the repair. He is four weeks in. He says the useful thing is not the record, it is that he has stopped saying "a lot".',
  '**Bassel** runs the printing works, and this autumn he is doing something he has always paid somebody else to do: he is writing to his own suppliers. Two letters so far. He says the first one took him an hour and a half and he is not telling us how long the second one took.',
  '**Umm Kinan** teaches mathematics, as she has for twenty-four years, and this year she is learning the names of things she already knows in another language, which she says is the strangest feeling of her working life — to be fifty and a beginner on a Monday and an expert on a Tuesday.',
  '**Lina** works in accounts and is doing a colleague\'s job as well as her own until the company decides what the job is. That was supposed to be for June. It is September.',
  '**Yara** works in a laboratory and is doing nothing differently at all, which she asked us to write down exactly like that, because she says it is the truest sentence on this page and somebody should say it.',
]));
out.push(item('1', 'What does Mazen say the useful thing is?'));
out.push(item('2', 'What is strange about Umm Kinan\'s year, in her own words?'));
out.push(item('3', 'Why did Yara ask for her line to be written the way it is?'));
out.push(writers([
  'A "what we are each doing" page: **one sentence each**, built as **permanent fact (simple)** → **and this term (continuous)** → **one line in the person\'s own words**.',
  'Keep the two tenses in the same sentence, in that order. The reader then sees the departure against the arrangement, which is the whole point of the page and of the grammar.',
  'Let somebody say that nothing is different. A page where everybody is transforming is a page nobody believes, and Yara\'s line is the one that makes the other five true.',
  '⚠ Give the **count so far**: _two letters so far_ · _four weeks in_. A change that is being made is more convincing with a number against it than with an adjective.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write four entries for a "what we are each doing" page — your family, your workplace, your street (50 words or more).'));
out.push(p('**______________** ______________, as ______________ always has, and this ______________ is ______________. ______________ so far. He says ______________.   **______________** ______________ and is ______________ until ______________.   **______________** ______________, and this year is ______________, which ______________.   **______________** is doing ______________ at all, which ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Permanent in the **simple**, this term in the **continuous**, in that order',
  'No state verb in a continuous form',
  'A count or a date against every change',
  'One entry where nothing is different',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one entry before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real page (100 words or more) for a group you belong to — your family, your department, your building, this class. Six entries, each with the arrangement and the departure, each with a number, and one where nothing has changed.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who will join that group next month**. ★ _The entry that tells me most about the group._  ✓ _One entry where I cannot tell what is usual and what is new._  ? _Which of these changes will still be true at the end of the year?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Which of the changes on these pages do you think will last?** Vote on three of them, write the votes down, and keep the paper. It is opened in Unit 12.'));
out.push(hw('Write the same page for **your own week** (50+ words): what you do, what you are doing differently at the moment, and how long you expect the difference to last.'));

// ======================= 1.3 =======================
out.push(pb());
out.push(h2('1.3  Four questions and a fifth'));
out.push(p('**Function:** asking the questions that open a conversation   ·   **Grammar:** question forms and follow-up questions   ·   **Pronunciation:** intonation, and the question that is not a question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher asks four students the same question: _what do you do?_ The class listens to the **answers** and then decides which single follow-up question would have got more out of each one.'));
out.push(board('And how did you end up doing that?', 'open questions · follow-up questions'));
out.push(p('**b**  Which of these gets more than one word? **1** _Do you like your job?_  **2** _What is the hardest part of it?_  **3** _Have you worked there long?_  **4** _How did you end up there?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happens the second time Jad asks?   **A** Bassel refuses to answer   **B** he gets a much longer answer   **C** he asks the same questions again'));
out.push(p('**b**  Listen again. **1** What is wrong with Jad\'s first four questions?   **2** Which question changes everything, and what does Bassel answer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.5  Four questions and a fifth', [
  ['Jad', 'What do you do?'],
  ['Bassel', 'I have a printing works.'],
  ['Jad', 'Do you like it?'],
  ['Bassel', 'Yes.'],
  ['Jad', 'Is it big?'],
  ['Bassel', 'Not very.'],
  ['Jad', 'Have you had it long?'],
  ['Bassel', 'Nineteen years.'],
  ['Jad', '(to Ms Huda) He is not giving me anything.'],
  ['Ms Huda', 'He is giving you exactly what you asked for. Three of your four questions can be answered with one word, and the fourth with a number. Ask him something he cannot answer in one word.'],
  ['Jad', '…How did you end up with a printing works?'],
  ['Bassel', 'My father had it. I did not want it. I was going to be a pharmacist and I failed the year twice, and in the second year he stopped speaking to me about it altogether, which was worse than the shouting. Then he had his first heart attack in 2006 and somebody had to open the place on the Monday, and the somebody was me, and I have opened it every Monday since. The strange part is that I am good at it. I would not have believed that at twenty-two.'],
  ['Jad', '…That was four seconds of question.'],
  ['Ms Huda', 'And ninety seconds of answer. Write the question down.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking so that you get an answer**',
  table(['closed — one word back', 'open — a story back'], [
    ['_**Do you** like it?_ · _**Is it** big?_\n_**Have you** had it long?_',
     '_**What** is the hardest part of it?_\n_**How** did you end up doing that?_\n_**Why** did you choose that one?_'],
  ], [1.4, 1.6]),
  '**Word order, in every tense:** question word + auxiliary + subject + verb. _**What do** you do?_ · _**How did** you end up there?_ · _**Why have** you stayed?_ ~~How you end up there?~~',
  '**The four that open anything:** _How did you end up…? · What is the hardest part? · What would you change? · What do people get wrong about it?_ Learn all four this week; they will do a year\'s work.',
  '⚠ A closed question is not wrong — it is a **door**. Use one to open and then follow it: _Have you had it long? — Nineteen years. — **What has changed in nineteen years?**_',
  '⚠ ~~What means "despatch"?~~ → _What **does** "despatch" **mean**?_  ⚠ ~~You are from where?~~ → _**Where are** you from?_',
  '**Follow up on the word they did not have to say.** Bassel said _not very_ and _nineteen years_; the question that worked came from neither. It came from the one thing nobody asks a man about his own business.',
  '**Useful phrases:** He is not giving me anything. · He is giving you exactly what you asked for. · Ask him something he cannot answer in one word. · Write the question down.',
  '**Practise:** Turn each closed question into an open one.  1 Do you like your job?  2 Is your flat nice?  3 Have you been there before?  4 Was it difficult?  5 Do you use English at work?',
  '**Pronunciation.** 🔊 **Track 1.6** Questions with a question word **fall** at the end: _How did you end up there?_ ↘ Yes/no questions **rise**: _Have you had it long?_ ↗ Get them the wrong way round and an open question sounds like doubt. Listen to eight and say each one twice.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the closed question on the card and gets the one-word answer. B then asks **one** open question and A must speak for thirty seconds. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________?'],
  ['B', '__________.'],
  ['A', 'How did you end up __________?'],
  ['B', '__________. __________. The strange part is __________.'],
  ['A', 'And what do people get wrong about it?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the closed questions', 'Card B – the closed questions'], [
  ['Do you like living in Damascus?', 'Is your course difficult?'],
  ['Have you worked there long?', 'Do you have a big family?'],
  ['Is your work interesting?', 'Have you always lived here?'],
  ['Do you use English much?', 'Was school good for you?'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **open** question and the first sentence of the answer it produced. Which question earned the longest answer?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Interview somebody you have not spoken to yet. Three minutes. You may ask **one** closed question; everything else must be open. Keep the answers, you will need them in 1.7.'));
out.push(p('**b**  Swap. Then each of you say which of your own answers surprised you — not them.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad asked Bassel four questions and got four short answers: he has a printing works, yes he likes it, not very big, nineteen years. He said Bassel was not giving him anything, and Ms Huda said Bassel was giving him exactly what he asked for, because three of the four could be answered in one word and the fourth with a number. So Jad asked how he ended up with a printing works, and got ninety seconds: his father had it, he did not want it, he was going to be a pharmacist and failed the year twice, and in the second year his father stopped speaking to him about it, which Bassel says was worse than the shouting. Then his father had a heart attack in 2006, somebody had to open the place on the Monday, it was him, and he has opened it every Monday since. He says the strange part is that he is good at it, and that he would not have believed that at twenty-two._'));
out.push(p('**Listener task:** write the question you were asked today that you would like to be asked again.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Jad writes up afterwards. Answer the questions.'));
out.push(model([
  '**THE FIFTH QUESTION** · Jad Attar, for the Room 14 wall',
  'I asked four questions and got eleven words. I asked a fifth and got a story, and the difference between the fourth question and the fifth is the only thing I learned in my first week.',
  '**What I asked, and what I got.** _What do you do?_ — "I have a printing works." _Do you like it?_ — "Yes." _Is it big?_ — "Not very." _Have you had it long?_ — "Nineteen years." Four questions, eleven words, and I decided he was being difficult.',
  '**What Ms Huda said.** That he was answering exactly what I asked. Three of my questions could be answered with yes or no and the fourth with a number, and a person who answers a closed question briefly is not being rude, they are being accurate.',
  '**The fifth question.** _How did you end up with a printing works?_ It took four seconds to ask. The answer took a minute and a half and had his father in it, two failed years at university, a heart attack in 2006 and a Monday morning that is still going on nineteen years later.',
  '**What I am taking from it.** I have written the four open questions on the inside of my notebook: how did you end up, what is the hardest part, what would you change, what do people get wrong. I used one of them on my uncle on Friday, who I have known for nineteen years as well, and he told me something I did not know about his first job. One question. Nineteen years.',
]));
out.push(item('1', 'How many words did the first four questions produce?'));
out.push(item('2', 'What does Jad say a person who answers briefly is doing?'));
out.push(item('3', 'What happened when he used one of the questions on his uncle?'));
out.push(writers([
  'A page about a technique: **the failure, with the numbers** → **what somebody pointed out** → **the thing that worked, quoted** → **what you are taking from it, and the proof that it works twice**.',
  'Quote the questions and the answers **exactly**, as a list. _Four questions, eleven words_ is an argument; "I asked some questions and they were not very good" is not.',
  'End with the **second** use. A technique that worked once is an anecdote; a technique that worked again on somebody else is a method, and the reader will try it.',
  '⚠ Give the ordinary thing its number: _who I have known for nineteen years as well_. The number is what makes the point land.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a page about something you learned by getting it wrong first (50 words or more).'));
out.push(p('**______________** · ______________   I ______________ and got ______________. I ______________ and got ______________, and the difference is ______________.   **What I did, and what I got.** _______________?_ — "______________." _______________?_ — "______________."   **What somebody pointed out.** ______________.   **The thing that worked.** ______________. It took ______________. ______________.   **What I am taking from it.** ______________. I used it on ______________, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Question word + auxiliary + subject + verb, in every question you quote',
  'The questions and answers quoted exactly, as a list',
  'Numbers against the failure and against the success',
  'A second use on somebody else, at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their quoted exchange only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) about a technique you learned by first doing it badly — at work, in a language, with a customer, with a relative. Quote what was said, give the numbers, and end with the second time you used it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who is about to make the same mistake**. ★ _The line that would stop me._  ✓ _One place where you tell me instead of showing me._  ? _Did it work the second time, honestly?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Everybody writes the four open questions on the inside of their notebook, now.** Then: who is going to use one before Thursday, and on whom? Say the name out loud; it makes it happen.'));
out.push(hw('Use one of the four questions on somebody you have known for years and write down their answer (50+ words). Write what you did not know before you asked.'));

// ======================= 1.4 =======================
out.push(pb());
out.push(h2('1.4  What she\'s like'));
out.push(p('**Function:** describing what somebody is like   ·   **Grammar:** _seem_ · _come across as_ · _strike somebody as_   ·   **Pronunciation:** stress in long adjectives'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six short descriptions of behaviour, not of character — _she arrived first and sat at the back; he answered before the question was finished_. For each one the class says what the person **seems** like, and then says what else it could mean.'));
out.push(board('She comes across as quiet.', 'seem · come across as · strike me as'));
out.push(p('**b**  _like_ or nothing? **1** _What is she ___?_  **2** _She seems ___ nice._  **3** _He comes across ___ confident._  **4** _She strikes me ___ somebody who has done this before._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who are they talking about?   **A** Ms Huda   **B** Yara   **C** Bassel'));
out.push(p('**b**  Listen again. **1** What does Samira say about the difference between quiet and shy?   **2** What does Omar say he got wrong at A2, and about whom?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.7  She comes across as quiet', [
  ['Tareq', 'What did you make of the new ones?'],
  ['Samira', 'Bassel talks. Jad talks faster. The one I noticed is Yara.'],
  ['Omar', 'She said about four sentences.'],
  ['Samira', 'She said about four sentences and then said there was more and that she would say it next week. That is not shy. That is somebody deciding.'],
  ['Tareq', 'She comes across as quiet.'],
  ['Samira', 'She comes across as quiet. Whether she is quiet is a different question and we have known her for two hours.'],
  ['Omar', 'That is fair. I got somebody completely wrong at A2.'],
  ['Tareq', 'Who?'],
  ['Omar', 'Lina. For about three months I thought she was cold. She is not cold, she is careful, and those look identical from the outside until the day you need something.'],
  ['Samira', 'What happened?'],
  ['Omar', 'The printer business in the spring. Everybody was angry and useless, including me, and she was the one who sat down and wrote the letter that got the money back. Cold people do not do that at ten o\'clock at night for somebody else\'s problem.'],
  ['Tareq', 'So what do you say about somebody after two hours?'],
  ['Omar', 'You say how they come across, and you say it is after two hours. Those are two different sentences and the second one is the honest half.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying what somebody is like**',
  table(['you say', 'and it means'], [
    ['_She **is** quiet._', 'you are stating it as a fact about her'],
    ['_She **seems** quiet._', 'this is how it looks to you'],
    ['_She **comes across as** quiet._', 'this is the impression she gives — stronger on the impression, weaker on the fact'],
    ['_She **strikes me as** somebody who…_', 'this is my reading of her, and I am owning it'],
  ], [1.7, 2.5]),
  '**The patterns, and they are not the same:** _seem_ + adjective, or _seem **like**_ + noun. _come across **as**_ + adjective or noun. _strike somebody **as**_ + adjective or noun.',
  '⚠ ~~She seems like quiet.~~ → _She **seems** quiet._ / _She **seems like** a quiet person._  ⚠ ~~He comes across confident.~~ → _He comes across **as** confident._',
  '**What is somebody like?** asks about character. **What does somebody like?** asks about preferences. **What does somebody look like?** asks about appearance. Three different questions, one word apart, and students lose marks on all three.',
  '**Character adjectives worth having:** _careful · confident · reserved · straightforward · patient · impatient · reliable · easy-going · sharp · generous · blunt · thoughtful_. And the phrasal verbs this unit uses: _come across as · get on with · fit in · settle in · take to somebody · bring something up_.',
  '**Say how long you have known them.** _We have known her for two hours._ An impression with its own timescale attached is worth something; one without is gossip.',
  '**Useful phrases:** What did you make of…? · That is not shy, that is somebody deciding. · those look identical from the outside. · the second one is the honest half.',
  '**Practise:** Say it three ways — as a fact, as a seeming, as your own reading.  1 confident  2 reserved  3 reliable  4 impatient  5 somebody who has done this before',
  '**Pronunciation.** 🔊 **Track 1.8** Long adjectives keep their stress in one place and students move it: _**CARE**ful · con**FI**dent · re**LI**able · **EA**sy-going · **GEN**erous · straight**FOR**ward_. Listen and repeat eight, then say each one inside a full sentence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a piece of **behaviour** from the card; B says what the person comes across as, and then gives one other thing it could mean. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'He comes across as __________.'],
  ['A', 'Or?'],
  ['B', 'Or he is __________, which looks the same from the outside.'],
  ['A', 'How long have we known him?'],
  ['B', '__________. So what I can say is __________, not __________.'],
]));
out.push(table(['Card A – the behaviour', 'Card B – the behaviour'], [
  ['She arrived first and sat at the back.', 'He answered before the question was finished.'],
  ['He asked the teacher three questions in one lesson.', 'She has not said anything for two weeks.'],
  ['She corrected somebody and was right.', 'He laughed at his own mistake and carried on.'],
  ['He said he would do it and has not mentioned it since.', 'She wrote down everybody\'s name on the first evening.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **two** readings of each behaviour. Which pair found the kinder second reading, and was it also the more likely one?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe somebody in this room to your partner without naming them, using _seems_ and _comes across as_ — and say how long you have known them. Your partner guesses.'));
out.push(p('**b**  Then each of you describe somebody you got **completely wrong** at first, and say what changed your mind.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Samira said Bassel talks and Jad talks faster, and that the one she noticed is Yara — because Yara said four sentences and then said there was more and that she would say it next week, which Samira says is not shyness, it is somebody deciding. Tareq said she comes across as quiet and Samira agreed, but said that whether she is quiet is a different question and they have known her for two hours. Omar said he got somebody completely wrong at A2: for three months he thought Lina was cold, and she is not cold, she is careful, and those look identical from the outside until the day you need something. What changed it was the printing business in the spring, when everybody was angry and useless and Lina sat down and wrote the letter that got the money back at ten o\'clock at night, for somebody else\'s problem. His rule now is to say how somebody comes across and to say that it is after two hours, because those are two sentences and the second one is the honest half._'));
out.push(p('**Listener task:** write the first impression somebody probably has of **you**, and one other thing it could mean.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Ms Huda keeps for herself about a class, and the one she wrote in June about the A2 group. Answer the questions.'));
out.push(model([
  '**WHAT I THINK AFTER TWO EVENINGS** · H. Khalil · Class 5A · September · _not shown to anybody_',
  'I write this after week one and I read it again in June, and I am wrong about a third of it every year, which is the reason I keep writing it.',
  '**Bassel** comes across as somebody who takes up the room. He may be; he may also be a man who has had nobody to talk to about his own work for nineteen years. I will know by November.',
  '**Yara** said four sentences and then said there was more. Every year there is one person who is not shy but is **deciding**, and they are the ones who are still here in June.',
  '**Jad** strikes me as the quickest in the room and the one most likely to leave. He understands everything and writes like somebody guessing, and that gap is uncomfortable to sit in for a year.',
  '**Umm Kinan** is the only person here who has said plainly what she wants English for, and it is a grandchild and not a job. In nine years I have never known anybody with a reason like that stop coming.',
  '**And what I wrote in June about the last group:** "Lina cannot be made to speak." I was wrong, and the way I was wrong matters — she could not be made to speak **by me**, in front of eleven people, in week three. In May she argued with me about a tense, in English, and she was right.',
]));
out.push(item('1', 'How often does she say she is wrong, and what does she do about it?'));
out.push(item('2', 'What does she say about people who are "deciding"?'));
out.push(item('3', 'What exactly was wrong about the sentence she wrote in June?'));
out.push(writers([
  'A private note of first impressions: **how long you have watched and how often you are wrong** → **one person per line, as an impression and not a verdict** → **the alternative reading, in the same line** → **a note you got wrong last time, and how**.',
  'Write the impression and the alternative **together**: _he may be; he may also be a man who has had nobody to talk to about his own work for nineteen years_. A single reading of a person is always too confident after two evenings.',
  'Date your own error: quoting a sentence you wrote and were wrong about is the only thing that makes the rest of the page trustworthy.',
  '⚠ Name the **mechanism** of the error, not just the fact of it: she could not be made to speak **by me, in front of eleven people, in week three**. "I was wrong about her" teaches nobody anything, including you.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own private note of first impressions about a group you have joined (50 words or more).'));
out.push(p('**WHAT I THINK AFTER ______________** · ______________ · _not shown to anybody_   I write this ______________ and I read it again ______________.   **______________** comes across as ______________. ______________ may be; ______________ may also be ______________. I will know by ______________.   **______________** strikes me as ______________ and ______________.   **And what I got wrong last time:** "______________." I was wrong, and the way I was wrong matters — ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_seems_ + adjective · _comes across **as**_ · _strikes me **as**_',
  'Every impression has a timescale attached',
  'Every person gets an alternative reading in the same line',
  'One quoted sentence of your own that turned out to be wrong',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I got wrong last time" line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full private note (100 words or more) about the people in a group you have recently joined or recently taken charge of. Five people, each with an impression, an alternative and a date by which you will know — and one error of your own, quoted.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Swap with somebody who does **not** know the people you wrote about. ★ _The line where I can see the person._  ✓ _One line that is a verdict rather than an impression._  ? _What would make you change your mind about the third one?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Keep them.** Put them in an envelope with your name on it and give them to your teacher. They come back in Unit 12, and the question then is not whether you were right. It is which kind of thing you were wrong about.'));
out.push(hw('Write the note you think **somebody else** wrote about you in their first week (50+ words) — the impression, the alternative reading, and the date by which they will know.'));

// ======================= 1.5 =======================
out.push(pb());
out.push(h2('1.5  Without saying anything unkind'));
out.push(p('**Function:** saying what you think without a verdict   ·   **Grammar:** hedging — _tends to · can be · a bit · I\'d say_   ·   **Pronunciation:** the hedge is said fast and low'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher writes a blunt sentence on the board: _he talks too much_. The class softens it six different ways. Then: which of the six would you be willing to say **to him**?'));
out.push(board('He can be a lot, in a good way.', 'tends to · can be · a bit · I\'d say'));
out.push(p('**b**  Soften each one. **1** _She is unfriendly._  **2** _He is lazy._  **3** _She talks over people._  **4** _He never answers emails._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Lina trying to say?   **A** that Bassel should talk less   **B** that Bassel is difficult   **C** that Bassel is doing something she recognises'));
out.push(p('**b**  Listen again. **1** What does Lina say she was like in her own first year?   **2** What does Ms Huda say hedging is **not**?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.9  He can be a lot', [
  ['Ms Huda', 'You wanted to say something about the pair work and you have changed your mind twice.'],
  ['Lina', 'Because there is no way of saying it that is not rude.'],
  ['Ms Huda', 'Try the version that is rude and we will work backwards.'],
  ['Lina', 'Bassel talks too much and I did not get to finish one sentence in twenty minutes.'],
  ['Ms Huda', 'Now say it so that he could hear it.'],
  ['Lina', '…He tends to fill the silences. Which is fine, except that I am somebody who needs about four seconds before I start, and in four seconds he has started.'],
  ['Ms Huda', 'That is the same information.'],
  ['Lina', 'It is the same information and it is not an accusation. And it is truer, because I have just worked out that half of it is mine.'],
  ['Omar', 'He can be a lot. In a good way. He is the only person in that room who is not frightened of being wrong.'],
  ['Lina', 'I was exactly like him in my first year. Not the talking — the other thing, the being certain. I was certain about everything for about eight months.'],
  ['Ms Huda', 'And this is the use of it. Hedging is not politeness and it is not weakness. _He tends to_ is a sentence you can be wrong about without having insulted anybody, and after two evenings you are going to be wrong about something.'],
  ['Jad', 'So we are allowed to say what we think.'],
  ['Ms Huda', 'You are required to say what you think. You are asked to say it in a form that can survive being wrong.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Hedging — saying it so it can survive being wrong**',
  table(['blunt', 'hedged'], [
    ['_He talks too much._', '_He **tends to** fill the silences._'],
    ['_She is unfriendly._', '_She **can be** a bit reserved **at first**._'],
    ['_He is lazy._', '_**I\'d say** he picks his moments._'],
    ['_That is wrong._', '_I\'m **not sure** that\'s right._'],
  ], [1.6, 2.6]),
  '**The five hedges that do nearly all the work:** _tends to_ · _can be_ · _a bit_ · _I\'d say_ · _at first_. One is enough in a sentence; two is a sentence apologising for itself.',
  '**Hedging is not vagueness.** The hedged version carries the **same information** — if it does not, you have not hedged it, you have dropped it. Say the blunt version to yourself first and check that it is still in there.',
  '⚠ ~~He is a bit lazy.~~ is **not** softer; _a bit_ in front of a hard word makes it worse, because you have said the hard word and then been mealy about it. Change the word, not the volume: _he picks his moments_.',
  '⚠ ~~I think maybe perhaps he could possibly be a little bit quiet sometimes.~~ — one hedge. Choose it and stop.',
  '**Own it, do not hide it:** _I\'d say_ · _it seems to me_ · _from what I have seen_. Hedging that pretends to be nobody\'s opinion is the kind people dislike.',
  '**Useful phrases:** There is no way of saying it that is not rude. · It is the same information and it is not an accusation. · half of it is mine. · a form that can survive being wrong.',
  '**Practise:** Hedge each one, keeping the information.  1 She is unfriendly.  2 He never answers emails.  3 She talks over people.  4 He is always late.  5 Her writing is careless.',
  '**Pronunciation.** 🔊 **Track 1.10** The hedge is said **fast and low** and the information keeps the stress: _he **TENDS** to fill the silences_ — no. Listen again: _he tends to fill the **SI**lences._ Put the weight on the fact and the hedge almost disappears. Listen to six and copy the rhythm.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the blunt sentence; B says it so the person could hear it, keeping all the information; A then says whether they would be willing to say B\'s version to that person\'s face. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'So he could hear it: __________.'],
  ['A', 'Is that the same information?'],
  ['B', 'Yes — __________ is still in there.'],
  ['A', 'Would you say it to him?'],
  ['B', '__________, and I\'d add __________, because __________.'],
]));
out.push(table(['Card A – the blunt sentences', 'Card B – the blunt sentences'], [
  ['He talks too much.', 'She never asks anybody else\'s opinion.'],
  ['She is unfriendly.', 'He is disorganised.'],
  ['He never answers his email.', 'She corrects people in front of others.'],
  ['Her writing is careless.', 'He promises things and forgets.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the hedged version and then check it against the blunt one. Did any pair lose the information on the way? That is the commonest fault and it is worth naming.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say one true thing about working or living with somebody, hedged, out loud. Your partner\'s only job is to tell you whether the information survived.'));
out.push(p('**b**  Then each of you say the half of it that is **yours** — as Lina does. Most complaints about other people have a half in them that belongs to the speaker.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lina wanted to say something about the pair work and changed her mind twice, because there was no way of saying it that was not rude. Ms Huda asked for the rude version first: Bassel talks too much and she did not finish one sentence in twenty minutes. Then she asked for the version he could hear, and Lina said he tends to fill the silences, which is fine except that she needs about four seconds before she starts and in four seconds he has started. She says it is the same information and it is not an accusation, and that it is truer, because working it out showed her that half of it is hers. Omar said Bassel can be a lot, in a good way, and that he is the only person in that room who is not frightened of being wrong — and Lina said she was exactly like that in her first year, certain about everything for about eight months. Ms Huda\'s point is that hedging is not politeness and not weakness: it is a form you can be wrong in without having insulted anybody._'));
out.push(p('**Listener task:** write the complaint you heard today and the half of it that belonged to the speaker.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions of the same note. Answer the questions.'));
out.push(model([
  '**ONE NOTE, TWO VERSIONS** · a note to a manager about a colleague, written twice',
  '**Version 1, written on the day.** Samih is impossible to work with. He takes over every job he is put on, he does not read what anybody else has written, and he changed my part of the report on Thursday without telling me. I have had enough and I am not working with him again.',
  '**Version 2, written on the Saturday and sent.** I want to raise something about the Haddad report, and I have waited two days so that it is not written in temper. Samih tends to take over a job once he is on it. On its own that is not a complaint — he is quick and he finishes things, and on the March job it saved us. On this one it meant my section was rewritten on Thursday without my knowing, so when the client asked me about a figure on Friday I was explaining a sentence I did not write. What I would like is small: if a section is going to be changed, I would like to be told the same day. I am not asking for it to be changed back, and I am not asking for anything to be said to Samih.',
  '**What the second one got that the first would not have.** The manager rang on the Monday morning and agreed the rule for the whole team, not for Samih. Version 1 would have produced a conversation about whether I am difficult.',
]));
out.push(item('1', 'What does the second version say about Samih that the first does not?'));
out.push(item('2', 'What exactly does the writer ask for, and what do they say they are not asking for?'));
out.push(item('3', 'What would version 1 have produced?'));
out.push(writers([
  'A note that raises something: **say you waited, and how long** → **the hedged description of the behaviour** → **the case for it, honestly made** → **the one occasion it cost something, with the detail** → **the small specific request** → **what you are not asking for**.',
  'Make the case **for** the other person before the case against. _He is quick and he finishes things, and on the March job it saved us._ A note without that paragraph reads as a campaign.',
  'Ask for something **small and procedural**: _if a section is going to be changed, I would like to be told the same day_. Large requests get discussed; small ones get agreed on the Monday.',
  '⚠ Say what you are **not** asking for. It is the line that takes the fear out of the note, and it is the reason the rule ends up applying to the whole team instead of to one person.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write version 2 of a note you have wanted to send (50 words or more). Write version 1 first, on a separate sheet, and do not send it.'));
out.push(p('I want to raise something about ______________, and I have waited ______________ so that ______________.   ______________ tends to ______________. On its own that is not a complaint — ______________, and ______________.   On this occasion it meant ______________, so ______________.   What I would like is small: ______________.   I am not asking for ______________, and I am not asking for ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One hedge, not three · _tends to_ / _can be_ / _I\'d say_',
  'The information from version 1 is all still there',
  'A paragraph making the case for the other person',
  'A small procedural request, and a line saying what you are not asking for',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I am not asking for" line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write both versions in full (100 words or more for version 2) about something real you have not raised. Version 1 is for you and is not shown to anybody. Version 2 is the one you could send.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Show your partner **version 2 only**. ★ _The line that would make me act._  ✓ _One place where version 1 has leaked through._  ? _What are you actually afraid will happen if you send it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of you have been carrying the version-1 note for more than three months?** Count. Then: how many of the requests, said out loud now, take less than one sentence?'));
out.push(hw('Send version 2, or write the reason you are not going to (50+ words). If you send it, bring what comes back.'));

// ======================= 1.6 =======================
out.push(pb());
out.push(h2('1.6  Keeping it going'));
out.push(p('**Function:** keeping a conversation going   ·   **Grammar:** echo questions · showing interest · handing back   ·   **Pronunciation:** the rise that means "go on"'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher tells the class something true and unremarkable and then stops. The class has to keep it going for sixty seconds, one move each, no new topic allowed.'));
out.push(board('Nineteen years? And what has changed?', 'echo · react · ask · hand back'));
out.push(p('**b**  Which move is it? **1** _Nineteen years?_  **2** _That must have been hard._  **3** _What did you do then?_  **4** _What about you?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the task?   **A** three minutes with somebody you have not spoken to   **B** an interview for the wall   **C** a test of listening'));
out.push(p('**b**  Listen again. **1** What does Mazen do that keeps it going?   **2** What does Umm Kinan say she did for twenty-four years?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.11  Three minutes with a stranger', [
  ['Ms Huda', 'Three minutes, with somebody you have not spoken to yet, and you are not allowed to change the subject. Mazen and Umm Kinan.'],
  ['Mazen', 'So you teach maths.'],
  ['Umm Kinan', 'Twenty-four years.'],
  ['Mazen', 'Twenty-four years?'],
  ['Umm Kinan', 'In the same school. The same room, for the last nine of them.'],
  ['Mazen', 'The same room. That must do something to you.'],
  ['Umm Kinan', 'It does. I know which window sticks and I know which desk the clever quiet one always chooses, because it is the same desk every year and it has been for twenty-four years, and it is not the one you would expect.'],
  ['Mazen', 'Which one is it?'],
  ['Umm Kinan', 'Second row, by the door. Not the back. The back is for the ones who have decided something about themselves already.'],
  ['Mazen', 'And where did you sit?'],
  ['Umm Kinan', '(laughs) Second row, by the door. What about you — where did you sit?'],
  ['Mazen', 'I did not. I left at fifteen.'],
  ['Umm Kinan', 'At fifteen. And you have been mending things ever since?'],
  ['Mazen', 'I have been mending things since I was about nine. I got paid for it from fifteen.'],
  ['Ms Huda', 'Three minutes. Mazen, how many questions did you ask?'],
  ['Mazen', 'I do not know. Four?'],
  ['Ms Huda', 'Two. The other four things you said were her own words given back to her, and that is why she kept talking.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four moves that keep a conversation alive**',
  table(['move', 'what it sounds like'], [
    ['**echo** — give their own words back', '_Twenty-four years?_ · _The same room._'],
    ['**react** — say what it means', '_That must do something to you._ · _That can\'t have been easy._'],
    ['**ask** — one question from what they said', '_Which one is it?_ · _And where did you sit?_'],
    ['**hand back** — return the question', '_What about you?_ · _And you?_'],
  ], [1.4, 2.8]),
  '**An echo is not a question you need an answer to.** It is a signal that you are still there, and it costs two words. Said with a **rise**, it means _go on_: _Twenty-four years?_ ↗',
  '**React with _must_:** _that must do something to you · that must have taken years · you must know that road very well._ At B1 this is also deduction, and it comes back properly in Unit 9.',
  '**Ask from inside what they said**, never from your own next topic. Umm Kinan mentioned a desk; the question was about the desk. A question about something she did not mention would have ended it.',
  '**Hand back before you are asked.** _What about you?_ is the move that turns an interview into a conversation, and it is the one students leave out.',
  '⚠ ~~Really? Interesting. OK. Yes.~~ — four noises are not four moves. Each of the four moves does something different; a conversation that is all _really?_ dies in ninety seconds.',
  '**Useful phrases:** That must do something to you. · it is not the one you would expect. · the back is for the ones who have decided something about themselves already. · And you?',
  '**Practise:** Give all four moves for: _I have driven the same route for eleven years._  1 echo  2 react  3 ask  4 hand back',
  '**Pronunciation.** 🔊 **Track 1.12** The echo rises and the reaction falls. _Twenty-four years?_ ↗ _The same room._ ↘ Get the rise wrong and the echo sounds like disbelief; get the fall wrong and the reaction sounds sarcastic. Listen to six pairs and copy both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says the opening line from the card and then answers only what is asked. B keeps it going for two minutes using all four moves, in any order, at least once each. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________?'],
  ['A', '__________.'],
  ['B', 'That must __________.'],
  ['A', '__________.'],
  ['B', '__________?'],
  ['A', '__________. What about you?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the opening lines', 'Card B – the opening lines'], [
  ['I have driven the same route for eleven years.', 'I have lived in this building since I was born.'],
  ['I work with my brother.', 'I taught myself everything I know about this.'],
  ['I moved here from Suwayda four years ago.', 'I have not had a holiday since 2019.'],
  ['I see my family on a screen.', 'I started again at thirty-eight.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** mark each of B\'s moves **E**, **R**, **A** or **H**. Which move did they not use? In most pairs it is the hand-back.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Three minutes with somebody you have not spoken to in this room. No changing the subject. Afterwards, count your own questions — and count the echoes, which people never notice they are using.'));
out.push(p('**b**  Then say one thing you learned that you could not have got from a direct question.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen and Umm Kinan had three minutes and were not allowed to change the subject. She has taught maths for twenty-four years in the same school and the last nine in the same room, and she says she knows which window sticks and which desk the clever quiet one always chooses — second row by the door, not the back, because the back is for the ones who have decided something about themselves already. Mazen asked which desk it was, and then asked where she sat as a girl, and it was the same desk. She handed the question back and he said he did not sit anywhere, he left at fifteen; he has been mending things since he was about nine and getting paid for it since fifteen. At the end Ms Huda asked how many questions he asked and he guessed four. It was two. The other four things he said were her own words given back to her, and that is why she kept talking._'));
out.push(p('**Listener task:** write the echo you heard today that produced the longest answer.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the transcript Ms Huda marks up and hands back. Answer the questions.'));
out.push(model([
  '**THREE MINUTES, MARKED** · what Mazen actually did · **E** echo **R** react **A** ask **H** hand back',
  '**Mazen:** So you teach maths. — _an opening that is not a question; it invites without demanding_',
  '**Umm Kinan:** Twenty-four years.',
  '**Mazen:** Twenty-four years? — **E**',
  '**Umm Kinan:** In the same school. The same room, for the last nine of them.',
  '**Mazen:** The same room. — **E** _· the second echo, and this is the one that did the work: he chose the three words out of her sentence that carried the feeling_',
  '**Mazen:** That must do something to you. — **R**',
  '**Umm Kinan:** _(ninety seconds about the window, the desk and the clever quiet one)_',
  '**Mazen:** Which one is it? — **A** _· from inside her own answer_',
  '**Mazen:** And where did you sit? — **A** _· the question that turned the teacher back into the pupil, and got the laugh_',
  '**Umm Kinan:** What about you — where did you sit? — **H** _· she handed it back herself, which is what people do when they have been listened to_',
  '**Two questions, three echoes, one reaction, and she talked for two of the three minutes.** The thing to take from it: he never once introduced anything of his own until she asked.',
]));
out.push(item('1', 'Which of Mazen\'s moves does Ms Huda say did the work, and why?'));
out.push(item('2', 'Who hands the question back, and what does Ms Huda say that means?'));
out.push(item('3', 'What is the thing to take from it?'));
out.push(writers([
  'A marked-up transcript: **the exchange, line by line** → **a letter in the margin for each move** → **a short italic note on the two or three that mattered** → **the count at the end, and the one sentence that explains it**.',
  'Mark only what is **there**. The discipline is in refusing to call a noise a move: four _reallys_ get no letters, and the page says so by leaving them unmarked.',
  'Note **why** a move worked, not that it worked: _he chose the three words out of her sentence that carried the feeling_.',
  '⚠ End with the count — _two questions, three echoes, one reaction_ — and one sentence of conclusion. A transcript without the arithmetic is a story; with it, it is a method.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Record or remember a real two-minute conversation and mark it up (50 words or more).'));
out.push(p('**______________, MARKED** · **E** echo **R** react **A** ask **H** hand back   **______________:** ______________. — _______________   **______________:** ______________.   **______________:** ______________ — **__**   **______________:** ______________ — **__** _· _______________   **______________ questions, ______________ echoes, ______________ reactions, and ______________ talked for ______________.** The thing to take from it: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every marked move is really one of the four — no letters on noises',
  'At least one echo and one hand-back in the transcript',
  'An italic note on the two or three moves that mattered, saying **why**',
  'The count, and one sentence of conclusion',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their final count and conclusion only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Mark up a real conversation of your own in full (100 words or more) — at work, at home, with a customer, with somebody you did not know. Mark every move, note the ones that mattered, give the count, and say what you would do differently.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s transcript as **the other person in it**. ★ _The moment I felt listened to._  ✓ _One move that is marked and is really a noise._  ? _What did you want to say and not say?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Which move does this class leave out?** Count the four across all the transcripts. It is the hand-back, almost always, and the reason is worth two minutes of discussion.'));
out.push(hw('Have a three-minute conversation with somebody at home, using all four moves, and mark it up afterwards from memory (50+ words). Count your questions and your echoes.'));

// ======================= 1.7 =======================
out.push(pb());
out.push(h2('1.7  Review & Mediate: Who is in this room?'));
out.push(p('**Function:** explaining the class list to somebody who has just joined   ·   **Recycling:** Unit 1   ·   **Exam practice:** B1 Preliminary Reading Part 5, Writing Part 1, Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 1 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I am working here since four years.  **2** I am not understanding the question.  **3** She comes across confident.  **4** How you end up there?  **5** What means "reserved"?  **6** She seems like quiet.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the page that is pinned up in Room 14 in the third week.'));
out.push(box(null, [
  '**CLASS 5A · ROOM 14 · WHO IS WHO** — written by the class, for anybody who joins late',
  '**Omar Darwish** · IT, and photographs. Finished A2 here in June. Ask him about the library stairs; do not ask him whether the newspaper was luck.',
  '**Lina Haddad** · accounts, and the company\'s letters to Türkiye. Needs four seconds before she speaks. Worth the four seconds.',
  '**Samira Deeb** · a clothes shop in Al-Hamra. Joined the A2 class in the spring and knew everybody by the second week, which nobody else has ever managed.',
  '**Tareq Ayoub** · drives the Mezzeh minibus line. Misses the Monday class about once a month and never the Thursday.',
  '**Bassel Tahhan** · a printing works in Qassaa, nineteen years. Fills silences. He is the only person in the room who is not frightened of being wrong, which is more useful than it is annoying.',
  '**Yara Mansour** · a hospital laboratory. Says little and means all of it. There is more and she has said she will tell us.',
  '**Rasha Barakat** · a nurse, nights. If she looks rude she is tired; she has told us so in advance, which is more than most people do.',
  '**Jad Attar** · nineteen, computer engineering. Understands everything, writes like somebody guessing, and said so himself in week one.',
  '**Umm Kinan (Siham Dibo)** · teaches maths, twenty-four years. Here for a granddaughter in Germany, not for a job.',
  '**Fares Kayyali** · travels to Homs and Hama for work. Will miss lessons; has asked for the homework by message.',
  '**Lubna Sweidan** · final-year architecture. Draws while she listens and hears everything.',
  '**Mazen Hariri** · mends telephones in Shaalan. Best speaker in the room, weakest writer, and the only one who says both out loud.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lubna explains the list to Fares, who missed the first three weeks. Which two people does she say the list gets wrong, and what does she say you cannot put on a list at all?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.13  The list and what it leaves out', [
  ['Fares', 'Twelve names and I have met four of them. Start wherever you like.'],
  ['Lubna', 'Not alphabetically. Four of them did A2 together and the other eight did not, and that is the only division in the room that actually matters for now.'],
  ['Fares', 'Which four?'],
  ['Lubna', 'Omar, Lina, Samira, Tareq. They finish each other\'s stories, and twice a week one of them says "do you remember the T-shirts" and the rest of us wait.'],
  ['Fares', 'And the list?'],
  ['Lubna', 'The list is good and it is wrong about two people. It says Bassel fills silences, which he does, and it makes him sound like a problem. He is the reason the first three weeks were not silent. Somebody has to speak first in a new room and in this one it was always him.'],
  ['Fares', 'And the second?'],
  ['Lubna', 'Me. It says I draw while I listen and hear everything. The drawing is true. "Hears everything" is somebody being kind, and what is actually true is that I hear everything and say about a tenth of it, which is not the same thing and is a worse habit.'],
  ['Fares', 'What is not on it at all?'],
  ['Lubna', 'Who you can sit next to and still work. That is the thing you want and nobody can write it down — you have to find it out in about three weeks, and the list cannot help you.'],
  ['Fares', 'Then tell me what you would tell me, not what the list says.'],
  ['Lubna', 'Sit next to Rasha. She is tired and she is kind and she will not mind if you say nothing for a fortnight, and by the time you want to talk you will have worked the room out.'],
]));
out.push(sp());
out.push(box('Language box – explaining a list of people', [
  'Give the **division that matters** before any names: _four of them did A2 together and the other eight did not_. A list explained alphabetically is the list read aloud.',
  'Say what the list **gets wrong**, and in which direction: it makes Bassel sound like a problem; it is being kind about Lubna. Both are errors and they are not the same kind.',
  'Separate what somebody **does** from what it **means**: _he fills silences_ is the behaviour; _he is the reason the first three weeks were not silent_ is what it means.',
  'Correct the entry about **yourself** honestly. It is the one you are qualified to correct and the one everybody softens.',
  'Say what **cannot** be written down: _who you can sit next to and still work_. Every list has one of these and naming it is the most useful sentence in the conversation.',
  'End with the thing you would actually say: _sit next to Rasha_ — a recommendation, with the reason, and a timescale.',
  '**Useful phrases:** Start wherever you like. · the only division that actually matters for now. · somebody being kind. · Tell me what you would tell me, not what the list says.',
  '**Pronunciation.** 🔊 **Track 1.14** Explaining has its own rhythm: you say a chunk, you **stop**, and you let the other person catch up. _Four of them did A2 together_ ‖ _and the other eight did not_ ‖ _and that is the only division that matters._ Three chunks, two pauses. Said without the pauses it is information; said with them it is an explanation. Listen to the same sentence read both ways, then read the first four lines of the class list aloud in chunks.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the lists below and does **not** show it. A explains it to B and C, who must each end by saying which entry they think is wrong and what the list cannot tell them. Change roles with the other list.'));
out.push(table(['List A – a department of six', 'List B – a building of six flats'], [
  ['Hani — runs the office. "Approachable."', 'Flat 1 — Abu Samir. "Knows everybody."'],
  ['Maha — accounts. "Does not suffer fools."', 'Flat 3 — the Khoury family. "Quiet."'],
  ['Ziad — new, three weeks. "Keen."', 'Flat 4 — empty since March.'],
  ['Rula — has been here longest. "The one to ask."', 'Flat 5 — Umm Rami. "Looks after the stairs."'],
  ['Samih — quick, takes over. "Gets things done."', 'Flat 6 — a student, new. "Plays music."'],
  ['Nabil — part-time, Tuesdays only. "Hard to reach."', 'Flat 7 — you.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the entry they said was **wrong**, the direction it is wrong in, and the thing the list could not tell them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Explain the real people of a group you belong to — a team, a department, a family, a building — to your partner, who is joining it next week. They must ask: _what is the division that matters?_, _which entry is wrong, and in which direction?_, _what is true of you that people are kind about?_, _what cannot be written down?_ and _who should I sit next to?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Rasha explained the night shift at the children\'s hospital to me, as if I were starting next week. The division that matters is not senior and junior, it is the four who have done nights for more than two years and everybody else, because the first group has stopped checking things with anybody. The entry she says is wrong is the sister in charge, who everybody describes as strict: Rasha says she is not strict, she is the only person who writes everything down, and that looks like strictness from underneath. About herself she says people are kind — they say she is patient, and she says what is actually true is that she is slow to speak and it has been taken for patience for nine years. What cannot be written down is which two hours of the night are the hard ones, which is three until five and nobody tells you. And she said if I were starting I should ask to be put with the oldest nurse and not the friendliest one. So I decided that when the new man starts in my department in November I am going to tell him the three o\'clock thing about our own week, which is Thursday afternoons, and which nobody told me._'));
out.push(p('**Listener task:** did they give you the division before the names? What is the thing that cannot be written down?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 5)', 7));
out.push(p('Read the text and choose the best word, **A**, **B**, **C** or **D**, for each gap.'));
out.push(model([
  '**THE FIRST THREE WEEKS**  · by Ms Huda Saleh',
  'I have taught for ten years and I have learned to say almost nothing in the first three weeks of a new class, which **(1)** ______ me a great deal of effort.',
  'In the first week everybody performs. The quick ones talk, the careful ones watch, and the one who will turn out to matter most usually says four sentences and stops. I used to **(2)** ______ that for shyness. It is almost never shyness; it is somebody deciding whether this room is worth it.',
  'By the third week the performance **(3)** ______ off and the real class appears. Somebody who was loud turns out to be frightened. Somebody I write down as slow turns out to be reading everything twice, which is not slow, it is thorough, and those two look the same from the front of a room.',
  'What I do now is write my impressions down in week one, seal them, and read them in June. I am wrong about **(4)** ______ a third of them every year. The useful part is not being wrong — everybody is wrong — it is seeing **(5)** ______ kind of thing I am wrong about, and it is the same kind every year: I mistake confidence for ability, and I mistake silence for absence.',
  'This year there are twelve of them and four already know each other. I have written my page and sealed it. I will tell you in June **(6)** ______ I did any better.',
]));
[
  '**1**   A  spares   B  saves   C  keeps   D  holds',
  '**2**   A  take   B  think   C  believe   D  count',
  '**3**   A  wears   B  takes   C  gets   D  puts',
  '**4**   A  about   B  around of   C  nearly of   D  some',
  '**5**   A  which   B  what   C  that   D  the',
  '**6**   A  unless   B  that   C  whether   D  while',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to somebody joining your group, explaining the list (50 words or more).'));
out.push(p('There are ______________ of us and the division that matters is ______________.   The list says ______________ is ______________. That is true and it makes ______________ sound like ______________; what is actually true is ______________.   About me it says ______________, which is ______________ being kind. What is actually true is ______________.   What the list cannot tell you is ______________.   If I were you I would ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The division before the names',
  '_seems_ · _comes across as_ · _tends to_ used correctly, one hedge at a time',
  'One entry corrected, with the direction of the error named',
  'The thing that cannot be written down, and a recommendation with a reason',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"I\'m starting a new course next month and I don\'t know anybody on it. You started something new in September, didn\'t you? How did you get on in the first few weeks? Did you do anything that helped? Is there anything you wish you\'d done differently? Sam"_',
  '**Your notes:**  •  _Say how it went_  ·  _Tell him the one thing that helped_  ·  _Explain what you would do differently_  ·  _Ask him about his course_',
  'Write your email to Sam using **all four** notes. Write **100 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 1 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ in accounts for four years.   a) am working   b) have worked   c) work since',
  '2  This month I ___ days, because somebody is away.   a) work   b) am working   c) have worked',
  '3  I ___ what you mean.   a) am not understanding   b) don\'t understand   c) am not understand',
  '4  ___ you end up doing that?   a) How did   b) How you did   c) How you',
  '5  What ___ "reserved" mean?   a) means   b) does   c) is',
  '6  She comes across ___ confident.   a) like   b) as   c) —',
  '7  He ___ to fill the silences.   a) tends   b) tend   c) is tending',
  '8  What is she ___?   a) like   b) likes   c) look like',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 1 style – three options).** 🔊 **Track 1.15** You will hear seven short extracts. For each one, choose **A**, **B** or **C**.'));
[
  '**1**  How long has the woman done the job?   A  four years   B  nine years   C  nineteen years',
  '**2**  What is the man doing this month that is not usual?   A  working days   B  writing every fault down   C  travelling to Homs',
  '**3**  What does the speaker say about the second row?   A  it is where the clever quiet one sits   B  it is empty   C  it is for latecomers',
  '**4**  Why did the woman stop at four sentences?   A  she was shy   B  she was deciding   C  she said all she wanted to',
  '**5**  What does the man say he is good at?   A  understanding English   B  writing English   C  both equally',
  '**6**  What does the speaker ask for?   A  to be told the same day   B  for the section to be changed back   C  for something to be said to a colleague',
  '**7**  Why does the speaker recommend that person?   A  she will not mind silence   B  she knows everybody   C  she has been there longest',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 1.15  Audio script (read after the check)', [
  ['1  Woman', 'Nine years at the children\'s hospital, and eleven nights a month for all nine of them.'],
  ['2  Man', 'The mending does not change. What I am doing this month is writing every fault down — the date, the model, what was wrong.'],
  ['3  Woman', 'Which desk does the clever quiet one always choose? Second row, by the door. Not the back — the back is for the ones who have decided something about themselves already.'],
  ['4  Man', 'She said four sentences and then said there was more and that she would say it next week. That is not shy. That is somebody deciding.'],
  ['5  Man', 'I understand almost everything I hear. I am good at understanding English, which is a different thing from being good at English.'],
  ['6  Woman', 'What I would like is small: if a section is going to be changed, I would like to be told the same day. I am not asking for it to be changed back.'],
  ['7  Woman', 'Sit next to Rasha. She is tired and she is kind and she will not mind if you say nothing for a fortnight.'],
]));
out.push(p('**C  Writing.** Somebody is joining a group you belong to next month. Write to them (100+ words): who is in it and the division that matters, one person the list gets wrong and in which direction, what cannot be written down, and what you would tell them to do in the first week.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 1)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ introduce myself in three or four sentences, not one',
  '☐ use the present simple for what is permanent and the continuous for what is temporary',
  '☐ keep state verbs out of the continuous',
  '☐ ask a question that cannot be answered in one word',
  '☐ say what somebody is like with _seems_, _comes across as_ and _strikes me as_',
  '☐ hedge without losing the information',
  '☐ keep a conversation going with an echo, a reaction, a question and a hand-back',
  '☐ explain a list of people to somebody who has just joined',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 2 – TELLING A STORY', [
  'Unit 1 was about who people are. Unit 2 is about what happened to them: _I was waiting at the stop when…_ — the past continuous for the scene and the past simple for the thing that interrupts it.',
  'Before the next lesson: ask one person in this class about the worst journey they have ever made, and write down **three** facts from it, not the whole story. You will need the three facts and not the story.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 1 · Student\'s Book');
