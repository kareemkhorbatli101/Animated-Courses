// Proactive English A2 · Syria Edition · Book 2 · Unit 19 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 19  People and Places — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**The error to mark every time:** the double pronoun — ~~the man who **he** came on Tuesday~~. It comes straight from Arabic, it is invisible to the student, and it will not go away by itself. Underline the extra word rather than explaining the rule.',
  '**The idea that runs through all seven cycles** is not grammar at all: _the useful part of a description is the thing that is different from everything around it_. It appears in 19.1, 19.4, 19.5 and 19.6 and it is what makes the relative clause worth having.',
], C.lblue, C.navy));

// ===================== 19.1 =====================
out.push(pb());
out.push(h2('19.1  She\'s the one who drives a minibus'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Collect the papers and read them yourself — if students read their own out the guessing stops. The sentences that are guessed immediately are the ones that got the rule right without being taught it.'));
out.push(A('**b** **1** I know a man **who fixes telephones**.   **2** There\'s a woman in my building **who knows everybody\'s name**.   **3** I met a teacher **who taught my mother**.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – nobody can remember which new student is which.'));
out.push(A('**b** **1** He drives a minibus — and, more usefully, he gets up at half past four.   **2** That we give the **job** first, and that it is always the least useful thing: _"the one who drives a minibus" — there are four thousand of them._'));
out.push(S('Language box · Practise'));
out.push(A('**1** I know a woman **who sells bread** on our street.   **2** Tareq is the student **who drives a minibus**.   **3** I don\'t like people **who talk** in the cinema.   **4** That\'s the man **who fixed my laptop**.   **5** She\'s the one **who stands up** when she answers.'));
out.push(NOTE('Mark two things and nothing else: **no second pronoun** (~~who he fixed~~), and the **verb agreeing** with the person (_a woman who sell**s**_ · _people who talk_). Everything else in these five sentences is already secure from Book 1.'));
out.push(S('Stage 3 · Practise (sample – Card A, Tareq)'));
out.push(SAMPLE([
  '**A:** Which one is Tareq?',
  '**B:** Tareq is the one who drives a minibus.',
  '**A:** There are four thousand of those.',
  '**B:** All right. Tareq is the one who gets up at half past four.',
  '**A:** Now I know exactly who you mean.',
  '**B:** And Samira is the one who stands up when she answers.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_"the one who drives a minibus" / "the one who gets up at half past four."_ — the second, because in a room of forty you can see a person who is awake at a different hour from everybody else, and you cannot see a job.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Family:** my aunt is the woman who rings on a Tuesday — and she is the one who asks the question nobody else will ask. **Work:** Mr Fouad is the man who manages the workshop — and he is the one who says "quickly" at the end of every instruction and has never once meant it. **Street:** the woman in the shop is the one who sells vegetables — and she is the one who knows which day the water will go off before the building does._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba described her neighbour. The first description was "the woman who lives on the second floor", which she agreed was useless. The second one was "the woman who knows which day the water will go off before the building does", which I thought was the best sentence in the room. She also described her cousin, who is the one who answers a question with a question, and her manager, who is the one who says "quickly" at the end of every instruction and has never once meant it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ the one who he drives a minibus → ✓ the one **who drives** a minibus.   ✗ a woman who sell bread → ✓ a woman who **sells** bread.   ✗ the man which fixed my laptop → ✓ the man **who** fixed it.   ✗ Tareq is who drives the minibus. → ✓ Tareq is **the one who** drives the minibus.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** About nine. (There are about two hundred students and perhaps nine people who make the place work — most of them not teachers.)'));
out.push(A('**2** She knows who has not eaten — and she gives the sandwich in a way that means nobody has to say anything.'));
out.push(A('**3** "Nobody asks me what it was before." (He remembers the building as a school; four people have asked in eleven years.)'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE PEOPLE OF OUR BUILDING**',
  'There are fourteen flats and perhaps three people who actually keep it standing.',
  '**Umm Fares**, who has lived in flat 3 for twenty-two years, is the one who takes something to every new family in their first week. She has done it for eleven years and nobody has ever thanked her in writing.',
  '**Abu Walid**, who became the caretaker in March, is the one who says good morning first, which the man before him never did.',
  'We asked each of them one question: what do people never say to you? Umm Fares said nobody ever asks her what she would like. Abu Walid said he has not been here long enough to answer.',
]));
out.push(S('Stage 7 · Write freely (sample, 148 words)'));
out.push(SAMPLE([
  '**THE PEOPLE OF THE MEZZEH LINE** — by somebody who takes it twice a day',
  'There are about sixty drivers on this line and four people who make the whole thing work, and not one of them drives.',
  '**Abu Issa**, who stands at the top of the road from six, is the one who tells you which minibus is going where. There is no sign, there has never been a sign, and there does not need to be one because he is there. He has done it for nine years and nobody pays him.',
  '**The woman with the thermos**, whose name I do not know, is the one who is there in winter at half past six. She charges about nothing. Drivers who have not eaten get it anyway and she does not mention it.',
  '**Umm Samir**, who sells cards at the junction, is the one who will keep your bag for an hour and has never lost one.',
  'We asked each of them the same question: what do people never say to you? All three said some version of good morning.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"There is no sign, there has never been a sign, and there does not need to be one because he is there." That is the whole page._   ✓ _The woman with the thermos is only a thermos — what does she **do** that nobody else does?_   ? _Did you really ask them, or did you guess? All three saying the same thing is either true or invented._'));
out.push(S('Stage 7R · Share'));
out.push(A('Going to tell one of the people is the task, and it will be resisted. Make it small: _one person, one sentence, this week_. The students who do it come back with something, and that something is usually the best thing in Unit 19.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**My uncle Ghassan**, who has driven the same taxi since 1998, is the one who will not let anybody pay him twice — if he has taken you once that week, the second time is free, and he has an argument about it roughly every day of his life. He would be astonished to be in anything written down. If he read this he would say that it is not a thing worth writing about, that everybody does it, and that I should write about my grandmother instead. None of the first two is true and the third one probably is.']));

// ===================== 19.2 =====================
out.push(pb());
out.push(h2('19.2  It\'s the building which has the blue door'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Things in the room work better than things outside it, because the class can check the description immediately.'));
out.push(A('**b** **1** the man **who** fixed my laptop   **2** the shop **which / that** sells spare parts   **3** the street **which / that** has the bakery on it   **4** the woman **who** lives below us   **5** a telephone **which / that** won\'t charge'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – where she lives.'));
out.push(A('**b** **1** The one with the blue door, opposite the pharmacy that is open at night, with a chair at the bottom of the stairs that belongs to nobody.   **2** Because there are four numbers on that street and three of them are wrong.'));
out.push(S('Language box · Practise'));
out.push(A('**1** It\'s the building **which / that has** a blue door.   **2** I want the charger **which / that came** with the telephone.   **3** That\'s the shop **which / that sells** spare parts.   **4** This is the road **which / that goes** to Homs.   **5** Give me the one **which / that isn\'t** broken.'));
out.push(NOTE('Accept _which_ and _that_ equally in all five. What is **not** acceptable is _who_ for a thing, and the double pronoun (~~the building which it has~~). Also worth showing: items 1 and 5 can be shortened to _the building **with** a blue door_ and _the one that isn\'t broken_ → _the unbroken one_, and shortening is what a fluent speaker does.'));
out.push(S('Stage 3 · Practise (sample – Card A, the building)'));
out.push(SAMPLE([
  '**A:** Which building is it?',
  '**B:** Number fourteen.',
  '**A:** That isn\'t enough. There are four numbers on that street and three are wrong.',
  '**B:** All right. It\'s the one which has the blue door.',
  '**A:** And?',
  '**B:** It\'s the one that is opposite the pharmacy — the pharmacy that is open at night, not the one on the corner.',
  '**A:** And how will I know when I\'m there?',
  '**B:** It\'s the building which has a chair at the bottom of the stairs that belongs to nobody.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_blue door · opposite the night pharmacy, not the corner one · a chair at the bottom of the stairs._ — and yes, that is drawable in ten seconds, which is the test.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_Come from the main road. Our building is the one which has a satellite dish on the balcony with a cloth over it — the only cloth on the street. It is next to the shop that is always shut and has never been open since I moved in. The door is the one that does not close properly, so you push it._',
  '**b** _The bread shop is the one that opens at six. It is easier because there is only one bakery, and a thing that is the only one of its kind needs no clauses at all._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lina described her building without the number, because there are four numbers on her street and three of them are wrong. It is the building which has the blue door, which is opposite the pharmacy that is open at night — not the one on the corner — and which has a chair at the bottom of the stairs that does not belong to anybody. Her own door is the one which has nothing on it, because everybody else has put something on theirs and she has been going to for four years. Rana said she could find it with her eyes shut, and I think she could.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ the shop who sells parts → ✓ the shop **which / that** sells parts.   ✗ the building which it has a blue door → ✓ the building **which has** a blue door.   ✗ the one which have books → ✓ the one which **has** books.   ✗ the road what goes to Homs → ✓ the road **which / that** goes to Homs.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because the light is better that way and the shops are open.'));
out.push(A('**2** If you can see the chair at the bottom of the stairs, you are in the right building.'));
out.push(A('**3** That she is going to put something on her door — she has been going to for four years, and writing it down has decided it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**HOW TO FIND THE WORKSHOP**',
  'Come from the garage end, not from the main road. The main road end is all furniture shops and you will think you are wrong.',
  'You pass a café which has four tables outside and never anybody at them. Keep going.',
  'It is the one which has a metal door painted green, and the green has gone almost black.',
  'It is next to the shop that sells tyres. There are two tyre shops: the big one is on the corner, and it is not that one.',
  'If you can hear a radio that is slightly too loud, you are in the right place.',
]));
out.push(S('Stage 7 · Write freely (sample, 157 words)'));
out.push(SAMPLE([
  '**HOW TO FIND MY GRANDMOTHER\'S HOUSE** — there is no address and there never has been',
  'Get off the bus at the stop which has a water tank behind it, not at the one before, which also has a tank but a smaller one. If you can see two tanks you have gone too far.',
  'Walk towards the mosque, then turn left at the shop that sells everything — it has no sign and it has had no sign for thirty years, and everybody calls it the shop that sells everything.',
  'The lane which goes up is the right one. The one that goes down ends at a wall.',
  'Her house is the one which has a vine over the door. There are three vines in that lane; hers is the one that has been cut back on one side, because the neighbour did it in 2019 without asking and it has never grown back.',
  'If you can smell bread at any hour that is not seven in the morning, you are at the right door, and she is expecting you, because she has been expecting somebody since about 1994.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"If you can see two tanks you have gone too far." That is a confirmation and a warning in one line._   ✓ _I would stop at the mosque and not know which way to turn — which side of it?_   ? _What do I do if I pass the lane?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Swapping with somebody from a different part of the city is what makes this honest — a neighbour can fill in what is missing from memory and a stranger cannot. The first sentence where the reader would be lost is nearly always the second landmark, not the first.'));
out.push(S('Homework (sample – a parent\'s directions)'));
out.push(SAMPLE(['**My father\'s version.** Get off where the old bus garage was. It is not there any more, but everybody still says the garage. Walk up past where Abu Nabil had the bakery — the bakery is a phone shop now and I will not be calling it a phone shop. Turn at the big tree. Our building is the one next to the house that the Haddad family built, which they sold in 1998, and the people who live there now have painted it, which I do not like. **Three of his five landmarks no longer exist**, and all five still work if you are over fifty.']));

// ===================== 19.3 =====================
out.push(pb());
out.push(h2('19.3  The man who came on Tuesday'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Five fillings of the same gap in ninety seconds. The point is that the clause goes **in the middle** and the sentence still has to finish.'));
out.push(A('**b** **1** The man **who came on Tuesday** left this.   **2** The woman **who was waiting** has gone.   **3** The shop **which sells parts** is shut.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – there is a new caretaker.'));
out.push(A('**b** **1** Nineteen years.   **2** That everybody in the building knows the man who left and nobody knows this one — and nineteen years is not a thing you can do in a week.'));
out.push(S('Language box · Practise'));
out.push(A('**1** The man **who came on Tuesday** left this.   **2** The woman **who was waiting** has gone.   **3** The shop **which sells parts** is shut on Fridays.   **4** The student **who joined last week** asked three questions.   **5** The chair **which is at the bottom of the stairs** belongs to nobody.'));
out.push(NOTE('Ask for the **main verb** in each one, out loud, and get the class to point at it: _left · has gone · is shut · asked · belongs_. The exercise is not about the clause; it is about not losing the sentence after it. A student who can find the main verb will not write ~~The man who came on Tuesday who left this.~~'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** There were two men about the water.',
  '**B:** The one who came on Tuesday or the one who came on Thursday?',
  '**A:** Both, really.',
  '**B:** Right. The man who came on Tuesday read the meter and said nothing.',
  '**A:** And the other one?',
  '**B:** The man who came on Thursday said the meter was wrong and left a paper that nobody can read.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_"The man who came on Tuesday **read** the meter." · "The man who came on Thursday **said** the meter was wrong."_ — main verbs: **read** and **said**, both outside the clause.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Two neighbours:** the woman who lives above me leaves at six and I have never seen her. The woman who lives below me has been in that flat since before the building had a lift, and she knows everybody who has ever lived in it._',
  '**b** _What changed: the man who had the vegetable shop before sold things by the kilo and the man who has it now sells things by the piece, and nobody has said anything about it to him, and everybody has said something about it to each other._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lina\'s building has a new caretaker. The man who was there before, Abu Samir, was there for nineteen years and went to his son in Tartous on a Thursday, and nobody knew until the Friday. The man who came on Tuesday is called Abu Walid, and he has already swept the stairs twice, which Abu Samir did on Fridays only, and three people have complained — not that he swept them, but that he swept them on a Wednesday. Lina says the difficulty is not the new man at all; it is that everybody knows the one who left and nobody knows this one, and nineteen years is not a thing you can do in a week.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The man left this who came on Tuesday. → ✓ The man **who came on Tuesday** left this.   ✗ The man who came on Tuesday who left this. → ✓ …**left** this.   ✗ The woman who she was waiting has gone. → ✓ The woman **who was waiting** has gone.   ✗ The shop which sells parts it is shut. → ✓ The shop which sells parts **is** shut.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because they were dirty on a Wednesday. The day the stairs are swept was never a rule — it was one man\'s habit, and the man has gone.'));
out.push(A('**2** That fourteen flats knew somebody for nineteen years and know nobody now. The new man is not the problem.'));
out.push(A('**3** That everybody tries saying good morning back, since Abu Walid says it first.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO EVERYBODY IN THE WORKSHOP — about the new order book**',
  'The man who started on Monday is called Jaber. Abu Nabil, who kept the book for sixteen years, has retired, and he went without telling anybody, which is how he does things and is still a strange way to lose somebody.',
  'Four people have complained that the new book is laid out differently. It is laid out differently because Jaber cannot read Abu Nabil\'s handwriting, and nor can anybody else, including me, including for sixteen years.',
  'The person who is new here is not the problem. The problem is that we all knew one book and now we have to learn another one, and that is going to take a month.',
  'His name is Jaber. I suggest we use it.',
]));
out.push(S('Stage 7 · Write freely (sample, 161 words)'));
out.push(SAMPLE([
  '**TO THE PARENTS OF CLASS 2B — about the new teacher**',
  'The teacher who started after the holiday is called Miss Rana. Miss Suha, who taught this class for eleven years and taught some of you, has moved to Latakia with her family. She did not say goodbye properly to anybody, and that was not rudeness; she told me she could not do it and then she could not do it.',
  'Several of you have said that the new teacher gives different homework. She does. She gives less of it and she marks all of it, and Miss Suha gave more of it and marked what she could, and both of those are a choice a teacher makes and neither of them is wrong.',
  'The teacher who is new here is not the problem. The problem is that twenty-eight families knew somebody for eleven years, and the children knew her, and nobody prepared any of us.',
  'Her name is Miss Rana. She stays until half past four every day and almost nobody has spoken to her. I suggest we start there.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"she told me she could not do it and then she could not do it" — that stopped me being angry about the goodbye._   ✓ _You make the homework complaint sound small; say what the parents actually mind, which is that their children are not comparing well._   ? _What am I supposed to do now — do I go in at half past four?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The question has a reliable answer and it is worth landing: the note that changes a building is the one that states the complaint **fairly** and then ends with one small thing. The angry note is ignored and the polite note asks for nothing, so nothing happens.'));
out.push(S('Homework (sample – from the person who complained)'));
out.push(SAMPLE(['I am the one who complained about the stairs and I will tell you what I actually minded, which is not what I said. I said he swept them on a Wednesday. What I minded is that Abu Samir knew my mother\'s name and knew which days she goes out, and when she fell in 2021 he was the one who heard it. I do not want a man who sweeps on Fridays. I want somebody who would hear. I could not say that to fourteen flats on a board, so I said Wednesday.']));

// ===================== 19.4 =====================
out.push(pb());
out.push(h2('19.4  The tall one with the glasses'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Three words is usually enough in a room of twelve and never enough in a room of forty, which is the point and makes the rest of the cycle unnecessary to explain.'));
out.push(A('**b** **1** a tall young man   **2** short dark curly hair   **3** an old grey coat'));
out.push(NOTE('Teach the order as **size → age → colour → noun** and then stop. The full English adjective order has eight slots and no A2 student needs it; these three cover everything a description actually uses.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – she is collecting a parcel from somebody she has never met.'));
out.push(A('**b** **1** He is tall; he has a grey beard; he is the one with the glasses and a blue jacket. (And: he will be sitting down.)   **2** The chair — because he is the only one sitting down in a garage where everybody stands. Not the beard and not the glasses.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** _He\'s a tall man with a grey beard._   **2** _She\'s a short woman with curly dark hair._   **3** _He\'s the one with the glasses and the blue jacket._   **4** _She\'s a young girl with straight fair hair._   **5** _He\'s the middle-aged man sitting by the door._'));
out.push(S('Stage 3 · Practise (sample – Card A, a man at a garage)'));
out.push(SAMPLE([
  '**A:** How will I know him?',
  '**B:** He\'s tall and he\'s got a grey beard.',
  '**A:** Half the men there are tall with a grey beard.',
  '**B:** All right. He\'s the tall one with the glasses, in a blue jacket.',
  '**A:** Better.',
  '**B:** And he\'s the only one who will be sitting down. Everybody there stands all day; he had an operation on his knee and he sits on a white plastic chair by the door.',
  '**A:** That\'s the one. Not the beard — the chair.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Ordinary: tall, grey beard. Useful: the only one sitting down._ — The second works because it is the thing that is **different from everything around it**; the first describes a category, not a person.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Sentence 1:** She\'s got short dark hair. (nobody guesses) **Sentence 2:** She\'s wearing a green scarf. (two hands go up) **Sentence 3:** She\'s the one who writes with her left hand and turns the paper sideways. (everybody)_',
  '_It took three. The one that did it was the third, and it is not about appearance at all._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Samira had to collect a parcel from a man she has never met. Tareq\'s first description was that he is tall with a grey beard, and she pointed out that half the men at that garage are tall with a grey beard. The second one was better: the tall one with the glasses, in a blue jacket he has worn every day. But the one that would actually work is the third: he is the only one who will be sitting down, on a white plastic chair by the door, because he had an operation on his knee in January. Samira says the useful thing in a description is never the colour; it is the thing that is different from everything around it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ a man tall → ✓ a **tall man**.   ✗ He has got tall. → ✓ He **is** tall.   ✗ He\'s got a beard and glasses and tall. → ✓ He**\'s tall** and he**\'s got** a beard and glasses.   ✗ hair dark curly short → ✓ **short dark curly** hair.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because he is the only man in the room who is standing up at the end of a lesson — he drives at half past five in the morning and cannot sit still after seven in the evening. The beard is ordinary; the standing is not.'));
out.push(A('**2** She stands up when she answers a question. She does not know she does it and nobody has told her.'));
out.push(A('**3** That the useful part of a description is never the colour of anything: it is the thing that is different from everything around it, and it is usually something the person **does**.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**HOW TO FIND US AT THE WEDDING**',
  '**My mother.** Short, elderly, with a grey headscarf. But do not look for the headscarf: look for the only woman who is carrying something — she will have arrived with four dishes and she will not have put them down.',
  '**My brother.** Tall, young, dark suit, like two hundred other men. But do not look for the suit: look for the man who is standing just outside the door of the hall, because he cannot be in a room with music in it for more than twenty minutes.',
  '**The rule:** the useful part of a description is never what somebody is wearing at a wedding. It is where they are standing.',
]));
out.push(S('Stage 7 · Write freely (sample, 155 words)'));
out.push(SAMPLE([
  '**HOW TO FIND US AT THE STATION ON FRIDAY**',
  '**Me.** Middle-aged, well-built, grey hair, glasses. Do not look for any of that: look for the only person on that platform who is not looking at a telephone. I have been standing on platforms since before telephones and I have never got out of the habit of looking at the end of the line.',
  '**My wife.** Short, dark coat, red bag. Do not look for the bag, because every second woman has a red bag: look for the one who is talking to somebody she did not arrive with. She will have found somebody within four minutes and it will be somebody with a child or a heavy case.',
  '**My son.** Tall, nineteen, in whatever he was wearing yesterday. Do not look for him at all. He will find you, because he is the one who reads the names of people getting off and he will have read yours.',
  '**The rule:** at a station nobody looks like their description, because everybody is holding something and facing the wrong way. Look for what people are **doing**.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the only person on that platform who is not looking at a telephone" — I could find you in a thousand people._   ✓ _"in whatever he was wearing yesterday" is funny but it is not a description. Give him one thing._   ? _What if they are sitting down that day — does the brother still go outside?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Writing the line for the person on your left and giving it to them takes three minutes and it is the moment the cycle lands: almost every student receives a sentence about something they do and did not know they did. Warn the class first that it must be something they would be happy to read.'));
out.push(S('Homework (sample – the description of you)'));
out.push(SAMPLE(['**The ordinary one:** medium height, dark hair, glasses, always a grey bag. **The one somebody else would write:** she is the one who reads the whole of a notice, including the part at the bottom, while everybody else is already walking away. My sister told me this and I did not believe her and then I watched myself do it twice in one week. I do not know why I do it. I think it is because I was once caught out by a line at the bottom of something and I have never recovered.']));

// ===================== 19.5 =====================
out.push(pb());
out.push(h2('19.5  He\'s the kind of person who helps first'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The second half — an **example of behaviour** for each word — is the whole exercise. A student who gives a definition has not understood the task; ask _"but what do they **do**?"_ and wait.'));
out.push(A('**b** **patient** – waits without sighing · **generous** – gives and does not mention it · **honest** – says when they were wrong · **hard-working** – stays until it is finished · **quiet** – listens more than they talk · **friendly** – says good morning first'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the page about the people of the centre.'));
out.push(A('**b** **1** Because everybody writes "kind" about everybody, so it tells the reader nothing. She asks what the person **does** instead.   **2** That he is the kind of person who puts the note on the door even when nobody will thank him for it — and also the kind who will not come down one floor to ask for help himself.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** _She waits without sighing, even when somebody is counting out coins._   **2** _He gives things away and does not mention it afterwards._   **3** _She says when she was wrong, out loud, in front of other people._   **4** _He stays until it is finished, not until it is five o\'clock._   **5** _She listens more than she talks, and when she does talk everybody stops._'));
out.push(NOTE('Accept any behaviour that would let a stranger recognise the person. Reject anything that is the adjective in other words — _she is very patient with people_ is not an answer. The test: could somebody watch for it?'));
out.push(S('Stage 3 · Practise (sample – Card A, "stubborn")'));
out.push(SAMPLE([
  '**A:** Stubborn.',
  '**B:** My father is the kind of person who will take a road he knows is closed, to see whether it is still closed.',
  '**A:** Is that stubborn?',
  '**B:** Yes. And he is also the kind of person who finishes something badly rather than ask anybody how to do it.',
  '**A:** And is there anything that is not good?',
  '**B:** That is the not-good one. The good one is that he has never once in my life said he would do something and not done it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_"will take a road he knows is closed, to see whether it is still closed"_ — and yes, the class guessed **stubborn** immediately, which is the proof that behaviour beats adjectives.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**My aunt** is the kind of person who rings on the day of a thing, not the week before. **My manager** is the kind of person who tells you what went wrong in front of the person it went wrong for. **My neighbour** is the kind of person who takes in everybody\'s deliveries and has never once mentioned it. The not-good ones: my aunt will not be told anything; my manager has never said sorry; my neighbour cannot be thanked and gets angry if you try._',
  '**b** _I am the kind of person who answers a message the moment it arrives, and the kind of person who then does nothing about it for a week._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['We were writing the page about the people of the centre and Hiba wrote that Umm Nahla is very kind. Ms Huda told her to cross it out, because kind is a word everybody writes about everybody and it tells the reader nothing, and asked what she does. The answer is that she knows who has not eaten and puts a sandwich down without saying anything about it, and that sentence is the whole person. Nour was going to write "helpful" about Mr Bassam and ended up writing that he is the kind of person who puts the note on the door even when nobody will thank him, and also the kind of person who will not come down one floor to ask for help himself. Ms Huda said to write both, because a person who is only good is not a person.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He is a kind of person who helps. → ✓ He is **the** kind of person who helps.   ✗ She is the kind of person who she helps. → ✓ …**who helps**.   ✗ He is the kind of person helps first. → ✓ the kind of person **who** helps first.   ✗ She is very kind person. → ✓ She is **a** very kind person — but better: say what she **does**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He put a note on the door twice a day.'));
out.push(A('**2** She said no; then she said they could write two lines. The paragraph they wrote is three.'));
out.push(A('**3** That every one of them started with an adjective and every one of them crossed it out.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE PEOPLE OF THE WORKSHOP**',
  '**Mr Fouad · manager.** He is the kind of person who comes in on a Sunday when nobody has asked him to. He has done it for nine years and he has never mentioned it to anybody, including the people who are not there on a Sunday. He is also the kind of person who says "quickly" at the end of every instruction and has never once meant it, and we have all stopped hearing it.',
  '**Umm Rashid · the office.** She is the kind of person who knows which customer is about to be difficult before they have opened their mouth. In six years nobody has ever had to tell her twice.',
  '**What we have learned writing this page:** we all wanted to write "good at his job", and none of us could say what that meant.',
]));
out.push(S('Stage 7 · Write freely (sample, 163 words)'));
out.push(SAMPLE([
  '**THE PEOPLE OF AL-NOUR CLINIC** — written for the waiting room, March',
  '**Dr Khalil.** She is the kind of person who sits down before she asks you anything. It takes four seconds and it changes the whole appointment, and in eleven years she has not once stood over a patient. She is also the kind of person who will not take a break, which her staff have raised with her for eleven years and which she has not once agreed to.',
  '**Abu Samih · the desk.** He is the kind of person who remembers which people are frightened of the stairs, and he has moved about two hundred appointments to the ground floor without ever telling anybody why.',
  '**Rasha · the night.** She is the kind of person who rings people back the next morning to find out what happened. Nobody asks her to, nobody counts it, and she has been doing it for three years.',
  '**What we have learned writing this page:** three of the four of us wrote "she cares" or "he cares", and when we crossed it out we had to go and look at what they actually do, and that took a week.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"she sits down before she asks you anything. It takes four seconds and it changes the whole appointment." I will remember that for the rest of my life._   ✓ _Rasha is the only one with no fault, which makes her the least believable._   ? _Would you show them this? I think you should show Rasha._'));
out.push(S('Stage 7R · Share'));
out.push(A('Most students say they would show nobody, and the reason is worth naming out loud: writing something true about a person is a kind of claim about them, and claims are frightening. Then point at the page about Umm Nahla — she said no, then two lines, and the class wrote three, and she let them. People mostly let you.'));
out.push(S('Homework (sample – somebody you find difficult)'));
out.push(SAMPLE(['My neighbour in flat 11 is the kind of person who puts his bins out on the landing on a Sunday and brings them in on a Tuesday, and he is the kind of person who has an answer ready before anybody has said anything. He is the kind of person who tells you about his back when you ask him to move something. And he is the kind of person who, in February, when the water was off for two days, carried six bottles up to the fourth floor for a woman he has never spoken to, three times, and said nothing about it to anybody, and I only know because I was on the stairs.']));

// ===================== 19.6 =====================
out.push(pb());
out.push(h2('19.6  Which one — the one with the red bag?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Six similar things is the right number — enough that one clause is never sufficient.'));
out.push(A('**b** **1** _The one **with** glasses._ / _The one **who wears** glasses._   **2** _The one **with** the broken handle._ / _The one **that is** on the chair._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – somebody has left something behind.'));
out.push(A('**b** **1** Four.   **2** That it has books in it. (Black was no use — he has four black bags; the broken handle was no use — two of them have broken handles.)'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** _The one **who wears** glasses._ / _The one **with** glasses._   **2** _The one **that has** a broken handle._ / _The one **with** a broken handle._   **3** _The one **which has** a blue door._ / _The one **with** a blue door._   **4** _The one **who sits** by the window._ / _The one **by** the window._   **5** _The one **that has** one short leg._ / _The one **with** one short leg._'));
out.push(NOTE('Both columns are correct and students should leave able to produce either, because the _with_ version is what people actually say and the clause version is what the exam will test. Item 4 is the only one where _with_ needs a different preposition, which is worth noticing rather than teaching.'));
out.push(S('Stage 3 · Practise (sample – Card A, the black bag)'));
out.push(SAMPLE([
  '**A:** Somebody has left a bag in Room 3.',
  '**B:** Which one — the red one?',
  '**A:** No, a black one.',
  '**B:** I have four black bags here. Which one?',
  '**A:** The one with the broken handle.',
  '**B:** Two of them have broken handles.',
  '**A:** The one that has books in it.',
  '**B:** Now we are getting somewhere. And the person who left it — do you know which one?',
  '**A:** The student who sits by the window. The one who stands up when she answers.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Four questions. The clause that identified it: **the one that has books in it.** It was the third thing said, not the first — the first two (colour, then a broken handle) described a category each time._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Mine:** the one with a pen mark on the back cover, which I made in a lesson in January and which I have decided to leave. Two clauses._',
  '**b (a person, three clauses, no appearance, no name, no job):** _The one who always arrives with something to eat and never eats it. The one who asks the question at the end, after everybody has put their coat on. The one who sat in a different chair in week one and has sat in that chair every week since._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Samira went to reception to say somebody has left a bag in Room 3, and it took four questions. Black was no use, because Mr Bassam has four black bags behind the desk. The broken handle was no use either, because two of them have broken handles — he says this is a language centre and everybody carries everything badly. What identified it was the books in it. Then he asked who left it and she said the student who sits by the window, the one who stands up when she answers, and he said that was a better description than most people manage for their own brother, and that it was her. She has just spent four minutes describing herself.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Which is the one? → ✓ **Which one** is it?   ✗ The one which have books. → ✓ The one which **has** books.   ✗ The one with has a broken handle. → ✓ The one **with a broken handle** / **that has** a broken handle.   ✗ Which one bag? → ✓ **Which bag?** / **Which one?**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because they have four black bags and two of them have broken handles — one clause will never identify anything.'));
out.push(A('**2** The grey coat with the keys in the pocket. Nobody has asked for it, and the keys are somebody\'s.'));
out.push(A('**3** Tell them **three** things about it, not one — the colour is never enough.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**LOST PROPERTY — THE WORKSHOP, MARCH**',
  'Everything on this list is in the box under the counter. Be ready to say which one — we have three sets of keys and two of them are car keys.',
  '**A set of keys** which has a plastic tag with no writing on it and a small screwdriver on the ring. Left on the bench on a Tuesday.',
  '**A jacket** with a torn pocket and a bus ticket from Homs in it. Nobody has asked for it since January, which worries us, because the nights are still cold.',
  '**If you are looking for something that is not on this list:** tell us three things about it, not one. The colour is never enough.',
]));
out.push(S('Stage 7 · Write freely (sample, 152 words)'));
out.push(SAMPLE([
  '**LOST PROPERTY — THE MEZZEH MINIBUS LINE**',
  'Everything here is kept at the top of the road with Abu Issa, who has never lost anything and has never taken anything.',
  '**A telephone** which has a cracked corner and a photograph of two children on the screen. Found on the 06:40 on a Thursday. Somebody has rung it eleven times and nobody has answered it, which means it is not the owner ringing.',
  '**A school bag** which has a blue water bottle in the side and a maths book with the name rubbed out. Found in February. A bag with a name rubbed out is a bag somebody is ashamed of, so we are keeping it longer than the rest.',
  '**A gold ring** which is small and plain and was in the dust by the step. We will not describe it any further, on purpose. If it is yours you can tell us what is written inside it.',
  '**If yours is not here:** tell us three things, not one, and one of them should be something only you would know.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"We will not describe it any further, on purpose." That is the cleverest sentence anybody has written in this unit._   ✓ _The telephone: I could claim that with what is written there. Add something._   ? _How long do you keep things?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The false-claim exercise is quick and it teaches the whole cycle: the item somebody can claim is the item with one clause too few. It also produces, in most classes, one student who has independently invented the gold-ring trick, which is worth reading out.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**A black notebook**, A5, which has a green elastic band round it that is not the one it came with. The first eight pages are a list of English words with the Arabic next to them, in two different colours of pen, because I ran out of blue in about week three. Inside the back cover there is a bus ticket from Homs dated the fourteenth of October, which I have kept for no reason and which is how anybody holding it would know it is mine.']));

// ===================== 19.7 =====================
out.push(pb());
out.push(h2('19.7  Review & Mediate: Who is who in the photograph?'));
out.push(S('Stage 1 · Get ready – Unit 19 quiz'));
out.push(A('**1** Tareq is the one **who drives** a minibus.   **2** The shop **which / that** sells parts is shut.   **3** The man **who came on Tuesday** left this.   **4** It\'s **a tall man with a beard**.   **5** Nothing is **grammatically** wrong — the problem is that _kind_ tells the reader nothing. Say what she **does**.   **6** **Which one** is it?'));
out.push(NOTE('Number 5 is deliberate and the teams should argue about it. A quiz where every item is a grammar error teaches students that writing is a matter of correctness; this one says, in the middle of a grammar quiz, that a correct sentence can still be empty. It is the point of 19.5 and it is worth the thirty seconds of confusion.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** She wants to **see photograph 1946-B-112** and to tell the library two things: that she knew a Khalil who never smiled in a photograph, and that the one standing at the side is always the headmaster. About the second hand in blue she says that the person who wrote it is right — _the one in the middle is always the one who wanted to be_ the headmaster.'));
out.push(NOTE('Her last question is the one to leave with the class: _can a person who is in the room be written on the card as "unknown" when she is sitting in front of them?_ It is the whole argument for the exhibition in Unit 16 and for this unit, and it does not need answering.'));
out.push(S('Stage 3 · Practise (sample – Card A explained without showing it)'));
out.push(SAMPLE([
  '_It\'s the back of a wedding photograph from 1998, at the Rose Hall in Homs, and it is written in two hands._',
  '_The first one gives the rows. Back: Samer, Fadi, and two unknowns. Front: the bride, the groom, and the groom\'s mother — the one in grey._',
  '_Then somebody else has added, later: the one on the left is **not** Fadi, because Fadi was in Aleppo that week._',
  '_The library\'s rule is written under it: where two people disagree, they write both. They do not decide._',
  '_Eleven people have been named since January._',
  '**B:** So is it Fadi or not? — **A:** Nobody knows, and that is written down as not knowing, which is the point.',
  '**C:** I\'m going to ask my mother who was at that wedding, because she was.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Named: five (Samer, Fadi, the bride, the groom, the groom\'s mother). Unknown: two._   _The disagreement: whether the man on the left is Fadi._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_It\'s the photograph on the wall at the workshop, from 1985, before the new building. The names are on the back, left to right: Abu Nizar, the one who came from Latakia, unknown, me._',
  '**A:** How do you know? — **B:** Because whoever wrote it put "me" at the end, so it was one of them and not a family afterwards.',
  '**A:** Who wrote the names? — **B:** Nobody knows. The handwriting is not Abu Nizar\'s.',
  '**A:** Who is missing? — **B:** There were nine people at that workshop in 1985 and there are five in the photograph. Nobody has ever asked where the other four were.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Omar explained a photograph of the workshop from 1985, which is on the wall there and which he has walked past for six years. The names are written on the back, left to right, by somebody who is in the picture — he says "me" at the end of the list, which Omar says is how you know it was written by one of them and not by a family afterwards. Two of the five are unknown, and a second person has written in different ink that the third from the left is Jamil, who died in 1991. The thing I did not think of is that the unknown ones are probably known to somebody who is still alive and has never been asked. So I decided I would take the photograph off the wall and show it to the oldest person at that workshop before I did anything else, because nobody ever has.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The one who is not smiling he is Khalil. → ✓ The one who is not smiling **is** Khalil.   ✗ It is written by two persons different. → ✓ by **two different people**.   ✗ They say that is not the headmaster the man next to Ustaz Fouad. → ✓ They say **the man next to Ustaz Fouad is not** the headmaster.   ✗ Where two people disagrees → ✓ where two people **disagree**.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 2'));
out.push(A('**1 C** (Abu Khalil)   **2 B** (Umm Nahla)   **3 A** (Mr Bassam)   **4 C** (Abu Khalil)   **5 B** (Umm Nahla)   **6 A** (Mr Bassam)   **7 C** (Abu Khalil)'));
out.push(NOTE('Questions **4** and **7** are both Abu Khalil and that is deliberate — in Part 2 the same person often answers twice, and students who are rationing their letters (one each, then one spare) get the last two wrong. Say so before the next Part 2 they meet.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**The workshop, 1985.**',
  'Back row, left to right: Abu Nizar, Jamil, the one who came from Latakia, unknown.',
  'Front row: Mr Fouad, the one with the white coat, unknown.',
  'I am the one who is holding a spanner and not looking at the camera, because somebody called my name.',
  'Khalil is not in this photograph because he was on the roof and nobody went up to tell him.',
  'Written by Omar Darwish, March.',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (49 words)**',
  'Hi Sam! You\'ll meet my uncle Ghassan first — he\'s the one who drives the taxi. He\'s the kind of person who will not let you pay for anything, so don\'t try. At the station, look for the tall one with the grey bag who is not looking at his phone!',
]));
out.push(SAMPLE([
  '**Weaker sample (27 words) – why it only just passes**',
  'Hi Sam. You meet my uncle who he drive taxi. He is very kind person. In station I am the man tall with grey bag. Bye.',
  '_All three points are answered and it is long enough, so it passes — but every sentence has this unit\'s error in it: **who he drive** has the double pronoun **and** a missing -s; **very kind person** needs **a** and, more importantly, says nothing (19.5); and **the man tall** should be **the tall man**. A very good one to put on the board because the content is right and only the forms are wrong._',
]));
out.push(S('Unit 19 check · A  Grammar and vocabulary'));
out.push(A('**1 b** who   **2 b** that   **3 a** who   **4 b** short dark curly   **5 a** with   **6 b** kind   **7 a** The one   **8 b** who'));
out.push(S('Unit 19 check · B  Listening (Track 19.14)'));
out.push(A('**1 D** (Tareq – cannot sit still after seven)   **2 C** (Samira – stands up when she answers)   **3 E** (Mr Bassam – the note, never thanked)   **4 A** (Umm Nahla – knows who has not eaten)   **5 B** (Abu Khalil – arrives twenty minutes early)'));
out.push(A('The two extra letters are **F** (has worked here the longest) and **G** (is always in the café at four).'));
out.push(NOTE('**F** is the trap. Abu Khalil has been at the gate eleven years and was here before the centre was a centre, so students reach for it — but the script says what he **does** (arrives at twenty past three), not how long he has been there. Part 5 rewards matching the **behaviour**, not the topic.'));
out.push(S('Unit 19 check · C  Writing (sample, 88 words)'));
out.push(SAMPLE(['**Abu Walid**, who became the caretaker of our building in March, is a short, well-built, middle-aged man with grey hair and a blue overall he wears every day. He is the kind of person who says good morning before you do, which the man before him never did in nineteen years. In a crowded room you would find him because he is the only one who would be standing by the door rather than sitting down. **Umm Fares**, who lives in flat 3, is small and elderly and always in a dark headscarf. She is the kind of person who takes something to every new family in their first week. You would find her because she is the one who is talking to the person nobody else is talking to.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The line that needs the most follow-up is the first — **not saying the pronoun twice** — and the cure is not explanation but volume: ten quick oral _who_ sentences at the start of each of the next four lessons, with you underlining the extra word in the air when it appears.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Unit 19 described people and things. Unit 20 describes **how** something is done: adverbs of manner, comparative adverbs, and the language of asking for a repair.',
  'Ask the class to bring the thing from the homework — something in their home that has been repaired, well or badly. A unit about repairs with nothing in the room to point at is thinner than it needs to be, exactly as Unit 16 was without the photographs.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 19 · Answer Key');
