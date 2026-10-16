// Proactive English B1 · Syria Edition · Book 1 · Unit 6 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 6  Rules, Rights and Obligations — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One question runs through all seven cycles: who is obliging whom?** Not how strong the rule is — where it comes from. _must_ (you) · _have to_ (outside) · _are not permitted to_ (the document) · _supposed to_ (somebody, and nobody is checking). Students arrive believing these are degrees of strength. They are not, and the unit says so in 6.1 and never stops saying it.',
  '**This is the most dangerous unit in the book to teach badly.** Every cycle asks adults to look at rules in real workplaces. The posture throughout is the one 5.5 established: the people who write bad rules are mostly in a hurry, and the useful move is a sentence, not an accusation. 6.6 teaches that explicitly.',
  '**It runs on the Unit 5 homework** — three rules, one you agree with, one you do not, one nobody has ever explained. The third column is the material for 6.1, 6.2 and 6.4. If it was not set, give the class ten minutes at the start of 6.1 and do not skip it.',
  '**6.3 contains one line of payoff.** Umm Kinan asked Mr Fouad for the forty minutes she wanted in 4.5, and got them. It is one sentence in the middle of a dialogue about something else and it is not flagged. Read it without pausing; if the class notices, that is the point, and if they do not, 6.3 Stage 7R asks the question that makes them notice.',
  '**The Mid-Book Test follows this unit.** Sixty marks on Units 1–6.',
], C.lblue, C.navy));

// ===================== 6.1 =====================
out.push(pb());
out.push(h2('6.1  What I must do and what I have to do'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The three columns are the whole unit on one board. Count the third one in front of the class: **never explained** is almost always the longest, and in a working adult class it is longer than the other two together.'));
out.push(A('**b** **1** **you** — your own insistence.   **2** **outside** — a time somebody else set.   **3** **you**, warmly — this is an invitation, not an obligation.   **4** **outside** — a rule, a sheet, a company.'));
out.push(A('Item 3 is the one to spend a minute on. _You must come and see the shop_ is the warmest sentence in the unit and students do not know this use at all; many have been taught that _must_ is the strong one and avoid it in exactly the place where English uses it most naturally.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a rule and what he did.'));
out.push(A('**b** **1** _The driver must not leave the vehicle while passengers are on board._ It is rule four of eleven.   **2** _Have to_ is a rule from outside — somebody else, a law, a timetable, a company. _Must_ is nearer to you: the speaker\'s own insistence. It is not about strength.'));
out.push(NOTE('Tareq has not changed his mind about anything. He still thinks he was right, he said so in Unit 2 and he says so again here. What has changed is one word, and the whole cycle is about that word: he has been saying _I had to_ for nine years so that the bravest thing he has ever done would not have to be a decision. Do not let the class relitigate the ethics; the ethics were settled in Unit 2.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _I **must** ring my mother_ — me. **2** _We **have to** be at the hospital by eight_ — outside. **3** _You **must** try this_ — me, warmly. **4** _Visitors **must** report to the office_ — a written rule, in its own voice _(and spoken, you would say_ have to _)_. **5** _I **must** stop saying "I had to"_ — me, and it is the only possible answer here.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I had to leave that job.',
  '**B:** Who said so?',
  '**A:** …Nobody. My brother said I should.',
  '**B:** So did you have to, or did you decide to?',
  '**A:** I decided to.',
  '**B:** Say the sentence without the rule in it.',
  '**A:** I left that job.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In a class of twelve, two of the eight are usually real obligations — typically _I had to take the night shifts_ (money, which is a real external constraint) and _I had to move back home_ (an illness or a rent). The other six are decisions wearing a rule. Do not argue with anybody about which is which; write both sentences on the board and let the person choose.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _"I had to give up the course." — Who said so? — The timetable changed. — Who changed it? — I took the Saturday work. — Did you have to take the Saturday work? — …No._',
  '**b** _I gave up the course. I gave it up for eleven thousand pounds a week and I have not said that sentence out loud before._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq brought rule four, which he has carried in the cab for nine years: the driver must not leave the vehicle while passengers are on board. On the ninth of February he left the vehicle, asked eleven men to get off in the rain, and drove to a hospital that was not on his route — and both of those break rule four. Samira said there was a woman having a baby; he said there was, and that he is not asking whether he was right, because he has known for nine years that he was. What he had never done was put the two sentences next to each other on paper. Rule four says must not — and when he tells the story he always says "I had to stop", not "I decided to stop", and those are not the same kind of sentence: one of them is the company and one of them is him, and he has been using the company\'s word for his own decision for nine years so that it would not be a decision. Ms Huda said have to points outwards at where the obligation came from and must points at the speaker. His true sentence is: I did not have to stop. I stopped. Samira said that is a harder sentence, and he said it is a much harder sentence and it is his.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I must to go. → ✓ I **must go**.   ✗ He have to sign. → ✓ He **has to** sign.   ✗ I musted. → ✓ I **had to**.   ✗ _I had to_ for a decision → ✓ _I decided to_.   ✗ You must come at six. _(a timetable)_ → ✓ You **have to** come at six.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** None. _It is printed on a card that is kept in the cab and I have never been asked about it by anybody._'));
out.push(A('**2** Nobody. _There is no rule anywhere that obliged me to stop, and rule four obliged me not to._'));
out.push(A('**3** The four seconds before he moved, which were spent thinking about the schedule.'));
out.push(A('The four seconds were in Unit 2 as well — in the dialogue and in the model page there. This is the third time they have appeared and the first time they have been called the price of owning the decision. A device that is planted, used, and then paid off a fourth unit later is the shape the whole book is built on; say so to the class once, here, and they will start looking for the others.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE REGISTER** · S. Dibo',
  '**What the rule says.** "Registers are to be marked at the start of the lesson." It is on the sheet every September and it has been for twenty-four years.',
  '**What I did.** From October to February I marked the register at the end of the lesson, in the corridor, from memory, for a class of thirty-one.',
  '**What I have been saying.** "I had to — there is no time at the start." I have said it to two colleagues and once to a deputy head.',
  '**What is true.** I did not have to. Marking it takes ninety seconds and I have ninety seconds. I marked it at the end because marking it at the start means standing still in front of thirty-one children for ninety seconds at the one moment when the room has not decided what sort of lesson it is in yet, and I have been avoiding that moment for twenty-four years. Nobody made me.',
  '**Why the word matters.** Because "I had to" makes it the timetable\'s fault and "I decided" makes it mine, and only one of those can be changed by me on Monday.',
  '**And the part I am not proud of.** In January a boy stopped coming and his name was in my register three weeks after he stopped, in my handwriting, from memory.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**THE SECOND CHAMBER** · Y. Mansour',
  '**What the rule says.** "The chamber is to be checked and the temperature logged at the start of every shift." It is rule 3 on a laminated sheet beside the door and it has been there longer than I have.',
  '**What I did.** On 11 April I put batch 41 into the second chamber. I did not check the seal that morning and I had not checked it on any of the fourteen mornings before that, and neither had anybody else.',
  '**What I have been saying.** "You cannot check it properly — the light by that door does not work." I have said it twice in this room.',
  '**What is true.** I did not have to not check it. The light does not work and I have a telephone in my pocket with a light on it. Nobody obliged me to skip rule 3; I skipped it because everybody skips it and because skipping it has never cost anybody anything, until the twelfth of April.',
  '**Why the word matters.** Because "you cannot check it properly" is a sentence about a light, and "I did not check it" is a sentence about me, and the second one is the only one that produced a new habit.',
  '**And the part I am not proud of.** I have checked it every shift since, with my telephone, and it takes eleven seconds.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"it takes eleven seconds" — you put the number in the last line and it destroys the excuse better than the paragraph above it does._   ✓ _"neither had anybody else" is still a bit of shelter; the page is about you._   ? _Who exactly obliged you?_ — nobody, and the page says so, which is why it works.'));
out.push(S('Stage 7R · Share'));
out.push(A('Whatever the count is, it was zero at the start of the evening. Say that and nothing else — the cycle does not need a conclusion from you, and an adult who has just written _I decided_ about something they have been calling an obligation for nine years does not need it explained to them.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['"I had to lend him the money." The version with nobody obliging me: _I lent my brother two hundred thousand pounds in June. Nobody made me. He asked once, badly, and I said yes in about three seconds because saying no to him in front of his wife was worse for me than the money._ I prefer the first version and I am going to use the second one, because the first one has been quietly making him the person who put me in a difficult position, and he did not. He asked. I decided.']));

// ===================== 6.2 =====================
out.push(pb());
out.push(h2('6.2  What I don\'t have to do'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The two that turn out to be neither are the point of the cycle: they are **habits of whoever is in charge**, said in the voice of a rule. Pick them from the third column of the board in 6.1.'));
out.push(A('**b** Free: **1**, **3**. Forbidden: **2**, **4**. Read 1 and 2 aloud one after the other and let the class hear that they are opposite instructions about the same Saturday.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – he has two rules and nine habits.'));
out.push(A('**b** **1** Nobody puts a hand near the rollers while the machine is running; nobody signs a proof they set themselves.   **2** _If everything is a rule, then nothing is._ People watch you to find out which ones you mean, they get it wrong, and the one they decide you do not mean is always the one that matters.'));
out.push(NOTE('Samira\'s answer is the most useful sentence in the unit for anybody who manages anybody, and it is worth putting on the board in her words. Note also that she gives it from experience of working for such a man, not from theory — which is why Bassel accepts it from her immediately and would not have accepted it from a book.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _You **don\'t have to** answer the telephone in English_ — free. **2** _You **mustn\'t** leave the keys on the trolley_ — forbidden. **3** **neither** — somebody\'s habit; whoever arrives first arrives first. **4** _You **mustn\'t** sign a proof you set yourself_ — forbidden. **5** **neither** — nobody has ever asked anybody to bring a pen.'));
out.push(A('Items 3 and 5 are the ones to linger on, because students will try to make them rules. Ask who made them and the sentence falls apart in their hands.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Arrive before the manager.',
  '**B:** You do not have to arrive before the manager.',
  '**A:** Is that a rule?',
  '**B:** It is neither. It is the manager\'s habit, said in the voice of a rule — he arrives at ten to eight and people have arranged their lives round it.',
  '**A:** What should it say?',
  '**B:** Nothing. It should not be on the list at all, and the day you take it off, four people get twenty minutes of their morning back.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Forbidden: _a hand near the rollers_, _signing your own proof_, _taking the ward keys home_. Free or habit: the other five, and the pen, the colour, the sweeping and the lunch are all habits. The forbidden pile should be small; if a class puts five things in it, ask what would actually happen, and the pile shrinks.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Nine rules for the night shift. Crossed out: the trolley is cleaned at the start of the shift (it is cleaned when it is dirty), the handover is written in blue (nobody has ever said so), tea is made at two (the night sister before me made tea at two for nine years), the fridge form (nobody reads it), the station is not left unattended (it is, constantly, by both of us, because there are five bays). Four left, and two of them are really one._',
  '**b** _I have been making tea at two in the morning for four years because the woman before me did, and I do not drink tea._',
]));
out.push(A('Answer **b** arrives in some form in every class and it is always small and always years long: tea at two, a blue pen, a door left on the latch, a chair nobody sits in. Collect two or three and leave them uncommented. The size of the thing is what makes the point about the nine.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel sat down on Sunday and wrote out the rules of his shop. He got to eleven and crossed nine of them out, because nine were things he does and not rules — he had written "the floor is swept at seven", and nobody has to sweep the floor at seven; he sweeps the floor at seven. The two that stayed are that nobody puts a hand near the rollers while the machine is running, and nobody signs a proof they set themselves. Everything else in that shop is a preference of his, and he has been giving all eleven in the same voice for nineteen years. Samira said she has worked for a man who did that, and what happens is this: if everything is a rule, then nothing is — people watch you to find out which ones you mean, they get it wrong, and the one they decide you do not mean is always the one that matters. Hassan, who has been with him four years, asked in February whether he could sweep at the end of the day instead, and asked as if he were asking for something. So Bassel told him he does not have to sweep at seven and does not have to sweep at all — and then said the thing he had never said to him in four years: you must not put a hand near the rollers while it is running. Two rules in nineteen years, and one of them nearly took his thumb in 2009, which is why it is a rule and not a habit.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ You haven\'t to come. → ✓ You **don\'t have to** come.   ✗ You must not to come. → ✓ You **mustn\'t** come.   ✗ _mustn\'t_ for "no obligation" → ✓ _don\'t have to_ — and say what the difference does on Saturday.   ✗ a habit in the voice of a rule → ✓ name whose habit it is.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The machine is stopped first and the sheets are lost.'));
out.push(A('**2** That it is **not a rule, it is a reason** — and that anybody with a better way of stopping it rusting should use it and tell him.'));
out.push(A('**3** Because Hassan, after four years, asked whether he could change when he sweeps, and asked as if it were a favour — which means that for four years he has not known which two things in that shop are the ones that matter.'));
out.push(A('The apology in the middle of the notice — _three of you have been explaining yourselves to me, and I am sorry_ — is what makes the two rules credible. A list of rules from somebody who concedes nothing is read as a list of preferences; a list from somebody who has just given nine of them away is read as two rules.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO RULES · THE SHAALAN COUNTER** · M. Hariri',
  '**1  Nobody opens a telephone before the ticket is signed.** Not to have a quick look, not while the customer is standing there, not if they say it does not matter, not if it is somebody I know. If the ticket is not signed, the answer is no.',
  '**2  Nobody tells a customer a price before the board has been seen.** If you have not had the back off, you do not have a price, and a price given twice is the only thing in this trade that loses you a customer for good.',
  '**That is the whole list. Everything else is me.**',
  'The bench is cleared at seven because I cannot start on a full bench. You do not have to clear it.',
  'The screws go on the tray in order because three of them are different lengths. That is not a rule, it is a reason — if you have a better way of keeping them apart, use it.',
  'I do not need to know where you are going when you go out. I never did, and I have been standing at that door looking at my watch for two years.',
  '**Why this is up.** Because my cousin asked me last month whether he was allowed to put the radio on.',
]));
out.push(S('Stage 7 · Write freely (sample, 169 words)'));
out.push(SAMPLE([
  '**WARD 4 · WHAT IS A RULE AND WHAT IS ME** · R. Barakat, night sister · for the two of us and whoever covers',
  '**1  Nothing is given before it has been checked against the chart, and the band is read, not the chart.** Not when the bell is going. Not when it is the same patient as last night. Not when I say it is all right. If the band has not been read, the answer is no.',
  '**2  Nothing is signed for anywhere but at the bed.** And if there is nowhere to write at the bed, we stop and say so, in the book, in writing — which is what I should have done two years ago instead of nineteen times.',
  '**That is the whole list. Everything else is me, or it is the woman before me.**',
  'Tea at two is hers. I do not drink tea and I have been making it for four years.',
  'The handover in blue is nobody\'s. I have asked three people and none of them knows where it came from.',
  'The trolley is wiped when it is dirty, not at ten. I wipe it at ten because I am awake at ten.',
  'You do not have to tell me when you go to the rest room. I have never asked and I do not want to know.',
  '**Why this is up.** Because the agency nurse last Tuesday asked me whether she was allowed to sit down.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Because the agency nurse last Tuesday asked me whether she was allowed to sit down." Everything above it is justified by that line._   ✓ _Rule 2 has two things in it — signing at the bed, and what to do when you cannot. Split them; the second is the more important and it is hiding._   ? _What happens if I break rule one?_ — the page does not say, and it should.'));
out.push(S('Stage 7R · Share'));
out.push(A('Two and three are the usual answers, from lists that began at nine and eleven. The second question is the real one: a list that is written and not shown has changed nothing, and the people it would free are the people who do not know which two things matter.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Eleven, crossed down to three, and one of the three is really a reason. The sentence I would have to say to one person is to Hassan: _the floor is not yours and never was, and when you asked me in February whether you could change it I should have told you that then instead of saying yes as if I were giving you something._ I have had that sentence in my head since February. It is twenty-eight words and I have not said it.']));

// ===================== 6.3 =====================
out.push(pb());
out.push(h2('6.3  What I\'m allowed to do'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The second half — something you **are** allowed to do and have never done — is the one that produces the surprises, and it is deliberately placed before the dialogue so that Umm Kinan\'s four months of not asking lands on something the class has already noticed in itself.'));
out.push(A('**b** **1** _We **are allowed to** use the back room._   **2** _Nobody **is allowed to** touch it._   **3** _**Were** you **allowed** in?_   **4** _Students **are not allowed** into the workshop._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – working in a place she is not allowed into.'));
out.push(A('**b** **1** A technician called Abu Rami\'s, lent for one evening in her second year and never asked for back. The rule is that students are not permitted in the model workshop without a member of staff.   **2** That Mr Fouad came into her room on Tuesday at half past two and showed her the projector for forty minutes; she asked him on the Monday and he said yes before she had finished the sentence, after four months of not asking.'));
out.push(NOTE('This is the payoff of 4.5 and it is deliberately buried: one line, in a dialogue about a key, with nobody remarking on it. Read it at the same speed as everything else. If a student says "that is the thing she wanted in Unit 4", stop and let them say it; if nobody does, Stage 7R will reach it from the other direction.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _They **let** me use the back room_ / _I **am allowed to** use the back room._   **2** _They **let** me take the keys home_ / _I **am allowed to** take them home._   **3** _They **let** me come in before eight_ / _I **am allowed to** come in before eight._   **4** _They **let** me stay after six_ / _I **am allowed to** stay after six._   **5** _They **let** me borrow it_ / _I **am allowed to** borrow it._'));
out.push(A('In every pair, the _let_ version is what you would say to a friend about a person, and the _allowed_ version is what you would write or say about a rule. ⚠ No _to_ after _let_; always _to_ after _allowed_.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Use a room, bench or machine after hours.',
  '**B:** I am not allowed to use the model workshop alone. And I am not stopped.',
  '**A:** Who said so?',
  '**B:** A notice on the door. Nobody has ever said yes to me and nobody has ever said no.',
  '**A:** So what would you have to ask for?',
  '**B:** To be allowed to use the bench after six, alone, from the head of department, in writing.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Three or four of the eight, typically: using a room after hours, taking a tool home, training somebody who has not been assigned to you, and seeing a record about yourself. In each one somebody is carrying a risk that one sentence in writing would end, and that is the sentence Lesson B is for.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I have been training representatives for eleven years. Nobody assigned anybody to me, there is no training post, and the rule is that company training is delivered by the training department, which has one person in it who covers four governorates. Nobody has ever said yes and nobody has ever said no. Eleven years._',
  '**b** _The sentence: "Could I ask you to put in writing that I may train new representatives in my own area? I have trained six and four are still here, and at the moment if one of them makes a mistake I have no standing at all."_',
]));
out.push(A('Fares\' version of the problem is the adult one and it is worth naming: he is not breaking a rule for his own convenience, he is doing unpaid work the company needs in a position that does not exist — and the risk he is carrying is that if one of the six ever makes a serious mistake, nobody authorised him to have trained them. That is the commonest form of _not allowed and not stopped_ in working life.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna said hers is not a small one. Students are not permitted in the model workshop without a member of staff, and she has been going in alone in the evenings for two years. A technician called Abu Rami lent her his key in her second year for one evening and never asked for it back; he knows she has it, and nobody has ever said yes to her and nobody has ever said no. Fares said so she is not allowed and also not stopped, and she said that is exactly it — nineteen versions of that market hall were built on a bench she is not permitted to stand at. Umm Kinan told her to ask, and she said and be refused, and lose two years of evenings. Umm Kinan said possibly — and then said that Mr Fouad came into her room on Tuesday at half past two and showed her the projector for forty minutes, that she had asked him on the Monday and he said yes before she had finished the sentence, and that she had been not asking for four months. Lubna said that is not the same, because nobody had told her no; and Umm Kinan said nobody has told Lubna no either — she has told herself no and then gone in anyway, which is the worst of the two. Lubna said what she would have to ask for is to be allowed to use the bench after six, alone, in writing, from the head of department, and to give the key back in the same sentence. Mazen said give it back first. She said yes — give it back first, because otherwise she is asking from inside the room.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ They let me to use it. → ✓ They **let** me **use** it.   ✗ I am let to use it. → ✓ I **am allowed to** use it.   ✗ I am allowed use it. → ✓ allowed **to** use.   ✗ I am not permitted use the bench. → ✓ not permitted **to** use.   ✗ I was musted not to. → ✓ I **wasn\'t allowed to**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Hand the key back (first line), then confess, then ask. _I am telling you this before I ask you for anything, because the order matters._'));
out.push(A('**2** She used the band saw twice in her second year, which she should not have done; and she broke a blade in March 2025, replaced it quietly from the same supplier and said nothing.'));
out.push(A('**3** _I will accept it and I will not go in again._'));
out.push(A('The letter is the hardest piece of writing in the unit and the reason to teach it is the order: back, confess, ask. Students instinctively write ask-confess-back, or ask only, and the letter then reads as a negotiation from a position of possession. _So that you are not deciding about somebody who is still in the room_ is Mazen\'s idea in the dialogue, not Lubna\'s, and that is worth pointing out: the best line in the letter came from somebody with no connection to a university.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the head of maintenance, Building 3 · **Subject:** A key, and a request',
  'Dear Sir,',
  'The key to the stair cupboard on the first floor is in this envelope. A caretaker who left in 2022 gave it to me so that I could get the mop out, and I have had it for four years and have been using that cupboard as a store for my own teaching materials. I am telling you before I ask for anything, because the order matters.',
  'I am aware that store cupboards are not to be used by teaching staff for personal materials. I was aware of it the whole time. Nobody told me I could and nobody told me I could not, and I used that as permission, which it is not.',
  'What I kept in there: forty-one boxes of cut-out card shapes for third-year geometry, made over six years, which do not fit in my room. I also propped the door open with a brick for about two years, which was the second thing I did wrong, and I have taken the brick out.',
  'What I would like: to be allowed to keep the boxes there, in writing, or to be given anywhere else of any size. If the answer is no, I will accept it and I will take them home this week.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**To:** the regional manager, Dar al-Shifa Pharmaceuticals',
  '**Subject:** Something I have been doing for eleven years without asking',
  'Dear Sir,',
  'I have trained six new representatives in this region over eleven years. Nobody asked me to and nobody authorised it. I am writing before anybody has a reason to ask me about it.',
  'I am aware that training is the training department\'s and that there is one trainer for four governorates. Nobody has ever told me I could do it and nobody has ever told me I could not, and I took the silence as permission, which it is not.',
  'What I actually did. Six representatives, between 2017 and this February. In car parks, in the forty minutes before shifts, out of my own order book and my own route notes. Four of the six are still in the job after an average of four years. I have never charged the company an hour for any of it and I have never written any of it down, which is the second thing I did wrong, because if one of those six had made a serious mistake in their first month nobody would have been able to say who taught them.',
  'What I would like. One line, in writing, saying that I may continue. If the answer is no, I will stop, and I will tell the two I am currently working with that I have stopped and why.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"if one of those six had made a serious mistake in their first month nobody would have been able to say who taught them." You have given the reader the reason to say yes._   ✓ _"I took the silence as permission, which it is not" — good, and then the next paragraph is slightly proud of itself; the four of six can stay but the averages are a second letter._   ? _What exactly do you want, and for how long?_ — one line, indefinitely, and the letter says so.'));
out.push(S('Stage 7R · Share'));
out.push(A('Four months, two years, eleven years. Then the only question that matters: Umm Kinan\'s asking cost her one sentence on a Monday. Do not moralise after that; the arithmetic does it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked Mr Fouad\'s head of department whether I may use the physics room\'s projector screen on Thursday afternoons, which I have wanted for two terms and never asked for. He said he did not know it was moveable, asked a technician in front of me, and the technician said it has wheels. So the answer is yes, and also nobody had ever known the answer, and also it has wheels. Two terms.']));

// ===================== 6.4 =====================
out.push(pb());
out.push(h2('6.4  What I\'m supposed to do'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Ask the second question — **who** expects it, and what happens when it is not done? — for every one of the six, and write _nothing_ on the board each time it is the answer. The column of _nothing_ is the cycle.'));
out.push(A('**b** **4** — _it was supposed to be finished in March_ is about a **thing**, a plan that did not happen. The other three are about people being expected to do something.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – how many things everybody is supposed to do and nobody does.'));
out.push(A('**b** **1** The second chamber is supposed to be checked and logged at the start of every shift; it was not checked for **fourteen months**.   **2** That nine times out of ten it means **somebody expects it and nobody enforces it** — the softest obligation in the language, and therefore the most dangerous, because _supposed to_ and _must_ sometimes point at the same thing and nobody has ever said which.'));
out.push(NOTE('Yara\'s analysis is the sharpest idea in the unit: _the chamber is supposed to be checked every shift_ was a **true sentence throughout fourteen months in which it was not checked**. The sentence survives the thing not happening. That is what makes a soft obligation dangerous, and it joins 5.5 — a sentence with nobody in it, in the softest modal the language has, is the safest place in the world to hide a failure.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I am supposed to fill in the check sheet before I take the bus out._ What happens if I do not: nothing. It is signed at the office window, forty metres away, before anybody has looked at a tyre.',
  '**2** _I am supposed to submit a lesson plan every Sunday._ Nothing. Four in twenty-four years.',
  '**3** _I am supposed to have a student card._ Nothing. Two years and nobody has asked.',
  '**4** _The chamber is supposed to be checked and logged every shift._ Nothing — for fourteen months. Then three days\' growth.',
  '**5** _I am supposed to sign at the bed._ Nothing, for eleven years, except that seven of my 118 errors were caught too late because the signature was not where the patient was.',
  '**6** _It was supposed to be finished in March._ Nothing happened in March and nothing has happened since, and the sentence is still true.',
]));
out.push(A('Item 4 and item 5 are the two on the list where the answer _nothing_ is wrong, and the class should find that rather than be told it: nothing happens on almost every occasion, and then once, something does.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** A form or sheet you fill in afterwards.',
  '**B:** I am supposed to fill in the check sheet before I take the bus out. I actually fill it in at the office window, before I have looked at the bus.',
  '**A:** Who expects it?',
  '**B:** The company. It is on the sheet and the sheet is collected.',
  '**A:** And what happens when it is not done?',
  '**B:** Nothing. It is done — that is the thing. The sheet is always full. It is just not true.',
  '**A:** Should it be a must?',
  '**B:** Yes, and it cannot be while the sheet is forty metres from the bus.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The _nothing_ list is nearly all eight. The _should be a must_ list is one or two, and it is never empty. Those one or two are always the irreversible ones: a check before something that cannot be undone, a signature next to a patient, a reading that is the only evidence anybody will ever have.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Four: the register at the start of the lesson (nobody checks), the lesson plan on Sunday (nobody has ever asked), the yellow-card children spoken to each week (nobody checks, and it is the only one that matters), the parents\' contact log (nobody reads it and I have not written in it since November)._',
  '**b** _(from the partner)_ _The yellow card. Because it is the only one of your four where a child is the thing that gets lost, and because it is also the only one you said with a different voice._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda went round the room for one thing each that we are supposed to do and do not. Rasha is supposed to sign at the bed and signs at the end of the bay, every round, for eleven years. Tareq is supposed to fill in the check sheet before he takes the bus out and fills it in at the office window, forty metres from the bus, before he has looked at anything. The second chamber in Yara\'s laboratory is supposed to be checked and logged at the start of every shift; it was not checked for fourteen months and the seal split in front of everybody. Umm Kinan is supposed to submit a lesson plan every Sunday and has submitted four in twenty-four years. Omar is supposed to have a student card and has never had one. Fares said what is the same about all six: nobody checks. Ms Huda said that is what supposed to means nine times out of ten — somebody expects it and nobody enforces it; it is the softest obligation in the language and that is exactly why it is the most dangerous, because supposed to and must sometimes point at the same thing and nobody has ever told you which. Yara said hers was a must wearing supposed to: the sentence "the chamber is supposed to be checked every shift" was true for fourteen months while it was not being checked, and if it had said must, somebody would have noticed — not because must is stronger, but because must has somebody behind it and supposed to has nobody.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am suppose to sign. → ✓ **supposed** to _(the d is written and never heard)_.   ✗ I supposed to sign. → ✓ I **am** supposed to sign.   ✗ I am supposed sign. → ✓ supposed **to** sign.   ✗ _I am supposed to_ for a real prohibition → ✓ if nothing can be undone after it, it is a **must**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Two enforced; nine deleted. Eleven in all.'));
out.push(A('**2** Not laziness. The bed signature is not done because there is **nowhere to write at the bed** — the trolley has no board. The band check is not done in the last two bays because the station light does not reach bay five and **there is no torch on the trolley**.'));
out.push(A('**3** Because changing the word before fixing the shelf is how a ward gets a rule that is broken on the first night — and once a rule has been broken on its first night, everybody knows it can be.'));
out.push(NOTE('This page answers the question the whole unit raises: what do you actually do about a soft obligation that ought to be hard? Three things, in order — remove the physical obstacle, change the word, delete the nine. Any manager who does the second without the first has made things worse, and that sentence is worth more to a working adult than the grammar it is carrying.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**NINE THINGS WE ARE SUPPOSED TO DO** · T. Ayoub · for the depot meeting',
  'I have listed every instruction on the drivers\' sheet that nobody checks. There are nine. I am not asking for any of them to be enforced. I am asking for **one** to be moved and the other eight to be deleted.',
  '**The one that should be must.** The vehicle check before the first run. It is the only instruction on that sheet after which something cannot be undone, and at the moment it sits between the instruction about the colour of the overall and the instruction about where to park at night.',
  '**Why it is not being done.** Not laziness. The check sheet is at the office window and the buses are at the far end of the yard, forty metres away, and the sheet is collected at twenty past five. Every driver in that depot signs it before he walks to the bus. I have done it about four hundred times and so has everybody else.',
  '**The eight that should be deleted.** The overall, the parking, the three about tidiness, the one about the radio, and two I cannot read.',
  '**What I am asking for.** A clipboard on each bus, and the sheet collected off the bus at the end of the day instead of off the window at the start. Then the check becomes a must. The clipboard first.',
]));
out.push(S('Stage 7 · Write freely (sample, 171 words)'));
out.push(SAMPLE([
  '**THE SHEET IN THE STAFF ROOM** · S. Dibo · April',
  'There are fourteen instructions on the sheet that goes up in September. I have counted the ones nobody has ever checked in twenty-four years: eleven. I am not asking for them to be enforced and I am not complaining about them. I am asking for one to be moved and eleven to go.',
  '**The one that should be must.** The children on the yellow card are spoken to once a week, by name, by their class teacher. It is the only instruction on that sheet about a child rather than about paper, and it is in the same voice as the instruction about the colour of the register.',
  '**Why it is not being done.** Not laziness, and not twenty-four years of indifference. There is nowhere to do it. Thirty-one children, four minutes between lessons, and no room that is empty — and speaking to a child about the yellow card in front of thirty others is worse than not speaking to them. I have done it properly about four times a term for twenty-four years and I have never once said why.',
  '**What I am asking for.** The small room at the end, unlocked, for the four minutes between the second and third lessons. Then it becomes a must. The room first. In January a boy stopped coming and his name was in my register for three weeks.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"speaking to a child about the yellow card in front of thirty others is worse than not speaking to them." That is the missing shelf and I did not know it was a shelf._   ✓ _"I have never once said why" belongs at the top; you bury the most important sentence on the page in the middle of a paragraph._   ? _If I unlocked the room tomorrow and changed nothing else, what would happen on the first week?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The two numbers are nearly the same, which is the finding. Then the one or two genuine _musts_ per person, every one with a missing shelf behind it: a board, a torch, a clipboard, an unlocked room. Collect the shelves and say what they cost. Four of them together are usually under a day\'s pay.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Eleven supposed-tos in my laboratory. Ten of them nothing happens. The one that is really a must is the chamber check at the start of every shift, and the physical thing stopping it is that the light above the second chamber has not worked since before I started and a split seal looks shut in the dark. I have been using the light on my telephone since April. The shelf is a lamp. I have costed it: eleven thousand pounds, and fourteen months of a report in an empty drawer.']));

// ===================== 6.5 =====================
out.push(pb());
out.push(h2('6.5  Would it be all right if…?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Going round the room getting more formal each time is a good noisy five minutes, and the room running out at about the eighth is the useful result: English has four or five genuine levels, not twelve, and after that people start adding length instead of politeness — which is exactly the mistake Lesson B is about.'));
out.push(A('**b** Most to least formal: **2** _I was wondering whether I might_ · **3** _Could I possibly_ · **4** _Do you mind if I_ / **5** _Is it all right if I_ · **1** _Can I_. _(4 and 5 are level with each other; accept either order.)_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – forty minutes of somebody\'s time.'));
out.push(A('**b** **1** His own — _I was wondering whether I might_ is so long that by the time he reaches the thing, the listener has had six seconds to decide to say no; and the last sentence gives it away before they have answered.   **2** That it is longer than it needs to be and that the most formal asking in English is short, exact and gives a way out — and that the short version is harder to say.'));
out.push(NOTE('The whole cycle turns on one counter-intuitive fact: **formal is short**. Students at B1 have usually been taught long polite formulae and believe that length is respect. It is not; length is a head start on refusing. Demonstrate it physically — read the 134-word draft aloud and ask the class to raise a hand at the moment they decided what the answer would be. Most hands go up in the first fifteen words.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Can I borrow twenty minutes on Saturday?_ / _Could I ask for twenty minutes of your time next week?_',
  '**2** _Is it all right if I go at four today?_ / _Could I leave an hour early on Thursday? I would make it up on the Friday._',
  '**3** _Can I see what it says about me?_ / _Could I ask to see my own file? I would come to the office rather than have it sent._',
  '**4** _Could I ask one question about the decision? I am not asking you to change it._ — and note that the second sentence should come **after** the answer, not before it.',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Twenty minutes, from your own manager.',
  '**B:** Could I ask for twenty minutes this fortnight? There are two things on the trolley I would rather show you than write about. If the fortnight is bad, say so and I will ask in May.',
  '**A:** Thursday at two.',
  '**B:** Thank you. I will bring the trolley.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Count the words. The requests easiest to refuse are the longest, every time, and the class will find the relationship within four examples. The mechanism is worth one sentence: the longer the run-up, the more of the listener\'s attention is spent on your discomfort rather than on your request.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _"Could I ask to be allowed to use the workshop bench after six, alone? I have given the key back. If the answer is no I will not go in again." Twenty-eight words, and I cannot make it shorter than that because the key has to be in it._',
  '**b** _The real answer would be yes with a condition — he would want somebody on site, and there is a technician there until eight. I have been not asking for two years and the condition was available the whole time._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Four of us asked for forty minutes of somebody\'s time, at four levels. Omar asked a friend: can you show me how to do that, forty minutes, Saturday. Umm Kinan asked Mr Fouad, whom she has known six years: is it all right if I ask you something — would you have forty minutes to show me the projector, in my room, not in the hall. Rasha asked her ward manager: could I ask for forty minutes of your time in the next fortnight, because there are two things on the trolley I would rather show you than write about. And Fares asked a training manager who has refused him twice: I was wondering whether I might ask for twenty minutes to be told which part of the post I was short of — I am not asking you to reconsider. Ms Huda said one of the four was wrong in itself, and Fares said his: it is so long that by the time he gets to the thing the person has had six seconds to decide to say no, and the last sentence gives it away before they have answered. Samira said he has been refused twice, should he not be careful; Ms Huda said careful is not the same as long. The most formal asking in English is short, exact and gives a way out: could I ask for twenty minutes to be told which part of the post I was short of? If that is not something you do, I quite understand. Eighteen words and a door. Fares said that is shorter than his and harder to say.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Can I to ask? → ✓ **Can I ask**?   ✗ Would it be all right if I come at six? → ✓ if I **came** at six.   ✗ Do you mind if I will come? → ✓ if I **come**.   ✗ _Do you mind?_ answered with _yes_ when you mean _go ahead_ → ✓ _Not at all_ / _No, please do_.   ✗ nine advance apologies → ✓ one door, at the end.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Draft 1 is **134 words** and asks for nothing specific. Draft 2 is **55** and asks for twenty minutes, by telephone, for a named purpose, with a door at the end.'));
out.push(A('**2** Draft 1 took fifty minutes to write; draft 2 took four.'));
out.push(A('**3** Apologising in advance for being refused, **nine times**, in different words — making it easier for her to say no before she had read what he wanted.'));
out.push(NOTE('The fifty minutes against four is the detail to read out. A long polite request is not a kindness to the reader; it is fifty minutes of the writer\'s own anxiety, printed. Students recognise the fifty minutes immediately — most of them have a message they have been composing for a week.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'Dear Professor,',
  'Could I ask for twenty minutes, in your room or by telephone, to be told what the department would need from me before I could use the workshop in the evenings? I would use it to decide whether to change what I am working on this year.',
  'If that is not something you are able to do, I quite understand and I will not raise it again.',
  'Yours sincerely, Lubna Sweidan',
]));
out.push(S('Stage 7 · Write freely (both drafts — sample, with the counts)'));
out.push(SAMPLE([
  '**Draft 1 (112 words).** Dear Sir, I hope you will forgive me for writing and I am very sorry to trouble you with what is probably a small matter and I am sure you have a great many more important things to deal with. I have been wondering for some time, and I hope you will not think it presumptuous of me to raise it, whether it might perhaps be possible at some point, entirely at your convenience and only if it causes no difficulty to anybody, for me to be given some sort of indication as to whether the trolley that went to the workshop in February might possibly be coming back at all.',
  '**Draft 2 (41 words).** Dear Sir, Could you give me the workshop\'s reference number for the second Ward 4 trolley, which went down on 2 February? I will chase it myself from there. If you would rather chase it yourself, tell me and I will stop asking.',
  '**112 and 41.** Draft 1 does not contain the words "reference number" anywhere, and that is the only thing I actually want.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I will chase it myself from there." You have made saying yes cheaper than saying no._   ✓ _Draft 1 has six apologies in it and not one fact; and draft 2 still has "If you would rather chase it yourself" — that is a door, which is right, so leave it._   ? _How long will this take me?_ — about forty seconds, which is why it will be answered.'));
out.push(S('Stage 7R · Share'));
out.push(A('The long drafts run from eighty to two hundred words and the short ones from thirty to sixty. The pattern holds in every class and the numbers do the teaching. Then collect who is sending theirs; the homework is one request, to one named person, this week.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Sent on Tuesday to the regional manager: _Could I ask for fifteen minutes by telephone to ask one question about the training post I applied for in February? I am not asking you to reopen it._ Thirty-one words. He answered in forty minutes and gave me Thursday at nine, and the first thing he said on Thursday was that nobody had told him I had applied.']));

// ===================== 6.6 =====================
out.push(pb());
out.push(h2('6.6  Passing on a rule you did not make'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Choose something genuinely disagreeable but not political — a ban on tea at the desk, a requirement to sign in and out at lunch. Half the room will say _I am afraid we have to_ and half will say _they want_ or _apparently_; name both halves without judging either, because the cycle is about the third thing neither half gives.'));
out.push(A('**b** **1** outside, and the speaker is only the messenger.   **2** _they_ — distanced; the speaker is hiding.   **3** the **document**; no person at all.   **4** **the speaker** — this is theirs and they have said so.   **5** nobody, which is why _sorry, new rule_ is the least useful sentence a manager can say.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – conditions of work from a customer.'));
out.push(A('**b** **1** Condition 7 — staff are to be on site from 07.00 and are not permitted to leave the premises during working hours, including for prayer, without written authorisation. He objects because it tells a grown man he needs written authorisation to leave a building.   **2** **Who made it. What you think of it. And what will actually happen.**'));
out.push(NOTE('Samira\'s third item is the one worth the whole cycle: _what will actually happen_ is the only one the listener is waiting for, and it is the one almost nobody gives. A person who hears a rule without it must guess, and will guess either that it does not matter or that they will be sacked — and both guesses are worse than the truth, whatever the truth is.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Staff are not permitted to use the lift._ → _This has come from the building, not from me. I think it is sensible for about a fortnight and daft after that. What will happen is nothing: nobody is counting, and if the lift is checked next month it goes back to normal._',
  '**2** _All records are to be kept for seven years._ → _That is the ministry and it is not negotiable. I think seven is too long and the filing is my problem, not yours. What will happen is that I will buy more boxes; nobody is going to ask you to find anything from 2019._',
  '**3** _Telephones are to be left in the office._ → _This is mine, not the company\'s, and I will say so: I want them out of the room while the machine is running. What will happen if you forget is that I will say so once, out loud, and that is all._',
  '**4** _Overtime is not to be worked without authorisation._ → _This is from the finance office. I think it is right, because last year two of you worked hours nobody paid for. What will happen is that I will authorise it by text at any hour, and if I do not answer within ten minutes, go home._',
]));
out.push(A('Item 3 is the pattern to notice: when a rule is yours, say so. A rule of your own delivered in the document\'s voice can never be withdrawn, because you have made yourself a messenger about it.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "Annual leave is not to be taken in June."',
  '**B:** This has come from the depot office and it is not mine. I think it is reasonable for the drivers and unreasonable for the office staff, and I have said so in writing. What will actually happen is that nobody will stop you booking it, and if you book it the week before, the office will refuse it and I will not be able to help.',
  '**A:** And if I have already booked it?',
  '**B:** Come and tell me today and I will take it to them myself, and I will probably win, because the rule is four days old and nobody has read it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('One pair in four gives all three on the first run, and the missing one is always **what will actually happen**. Say why it is missing: giving it means admitting either that nothing happens, which makes you look weak, or that something serious happens, which makes you the person who said so. Most people avoid both by saying nothing — and then the listener invents the worse of the two.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _"From Monday nobody is to take a telephone call at the counter while a customer is being served." Who made it: me, this week. What I think: I think it is right and I have broken it twice already. What will happen: I will say your name once, and that is all — and if the call is your family, take it and tell me, and I will serve the customer._',
  '**b** _All of it was mine and I said so, and it was much harder to say than it would have been to put it on a sheet in the voice of a rule._',
]));
out.push(A('The honest version of this cycle for people who are in charge of nobody is still useful: everybody passes rules on — to children, to a brother, to a tenant, to a colleague covering a shift. The three things apply unchanged, and _what will actually happen_ is just as missing in a kitchen as in a depot.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel\'s biggest customer has sent a page of eleven conditions. Ten are reasonable and one he has to pass on to three men tomorrow morning and does not agree with: all staff handling ministry work are to be present on site from seven and are not permitted to leave the premises during working hours, including for prayer, without written authorisation. He says they have sent him a sentence that tells a man he needs written authorisation to leave a building — and that he has to pass it on or lose the work, which is four months of the year. Samira said there are three things he owes those men and most people give one: who made it, what you think of it, and what will actually happen. The third is the one everybody leaves out and the only one anybody is listening for, because a man who is not told what happens if he breaks a rule will guess either that it does not matter or that he will lose his job, and both guesses are worse than the truth. Bassel said the truth is that he is not going to stand at that door with a clipboard, and that if an inspector comes while somebody is out the work goes, and it has never happened in nineteen years. So he said all three — and then added his own: from today somebody tells him before they leave the building, him, in a sentence, not in writing. Samira said that last part is his and not theirs. He said it is, and he is going to say so, because if he gives them his rule in the ministry\'s voice he will never get it back.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ You are musted to sign. → ✓ _You **have to** sign_ / _It **is to be** signed_.   ✗ _They want it signed_ when it is your rule → ✓ _I need you to sign it._   ✗ _Sorry, new rule._ → ✓ all three things.   ✗ passing on your own addition in the document\'s voice → ✓ say that part is yours.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Eleven; he objects to **one**, condition 7.'));
out.push(A('**2** He has asked them in writing to take the words "including for prayer" out of it. He expects that to be ignored, and he has pinned a copy of his own letter on the wall next to theirs.'));
out.push(A('**3** The request that people tell him out loud when they go out between seven and six. He marks it with its own heading — _what I am asking, which is mine and not theirs_ — and gives his own reason for it, which is the four months of work and not condition 7.'));
out.push(A('The last line of the page — _I would rather lose the tender than tell a grown man he needs a chit to go and pray_ — is what the whole page buys. It can be said only because the eight sections above it are specific, fair to the customer about the other ten conditions, and honest about what will actually happen. Point that out: the strong sentence at the end of a document is paid for by the dull accuracy of everything before it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE NEW ROTA RULE** · R. Barakat · for the two of us and the agency staff',
  '**What has been sent.** The nursing office has sent six changes to the night rota from May. Five are about dates and swaps and I have no quarrel with them. The sheet is on the wall.',
  '**The one I want to talk about.** "Night staff are not permitted to arrange swaps directly between themselves. All swaps are to be submitted to the office five working days in advance."',
  '**Who made it.** Not me. It has come from the nursing office, and I have written to ask whether three days could be enough. I expect no answer before June.',
  '**What I think of it.** The five days is wrong for nights and right for days, and whoever wrote it works days. A night swap happens because a child is ill at six in the evening.',
  '**What will actually happen.** Nothing from me. I am not reporting anybody for swapping a shift. But the office pays from the rota, so if you swap without telling them, one of you is paid for a shift you did not work and the other is not paid at all, and I cannot fix that afterwards — I have tried twice.',
  '**And what I am asking, which is mine and not theirs.** Tell me, in a message, whenever you swap. Not for the office — so that when the payslips are wrong in June I can say what actually happened.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**THE EXAMINATION RULE** · S. Dibo · for the four of us in mathematics',
  '**What has been sent.** The directorate has sent nine instructions for the June examinations. Eight are about seating, timing and paper and they are the same eight as last year.',
  '**The one I want to talk about.** "Staff invigilating are not permitted to assist candidates with the reading of questions under any circumstances."',
  '**Who made it.** The directorate. Not the school and not me. I have written to the head to ask what it means for the four children we have with reading difficulties, and I have had no answer and I do not expect one before the examination.',
  '**What I think of it.** I think the sentence was written about cheating and will be read about reading, and that whoever wrote "under any circumstances" did not have a twelve-year-old in mind who can do the mathematics and cannot read the word "remainder".',
  '**What will actually happen.** If a child asks me what a word means in June, I will tell them, and I will write it on the invigilation sheet afterwards, and if anybody wants to take that up with me they can. Nothing is going to happen to you for reading a word to a child.',
  '**And what I am asking, which is mine and not theirs.** Write it down when you do it, with the child\'s number and the word. Not to protect the rule. To protect you, and so that in July we have four pieces of paper instead of an argument.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"if anybody wants to take that up with me they can." You have put yourself in front of three colleagues and that is the entire job._   ✓ _"I think the sentence was written about cheating and will be read about reading" is excellent and the clause after it is doing the same work twice._   ? _And if I do not do it?_ — the page answers, which is why it would be believed.'));
out.push(S('Stage 7R · Share'));
out.push(A('Almost nobody has had all three given to them. _Who made it_ is nearly always given; the other two almost never. That is the reason nobody believes a notice, and it means the room has been handed a practical method that costs nothing and that almost nobody they work for uses.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The rule I pass on most often is to agency nurses: "the keys are not to be taken off the ward". Who made it: the hospital, and it is on the door. What I think: it is right and I have never once wanted it changed. What will actually happen: if you walk off with them, somebody will ring you at home at four in the morning and you will drive back, and it has happened twice in eleven years and both of them were me. The part that is mine: hang them on the hook and not in your pocket, because pockets are how it happens. I am going to say all four things on Tuesday to the new one, and the fourth is mine.']));

// ===================== 6.7 =====================
out.push(pb());
out.push(h2('6.7  Review & Mediate: What do these rules actually require?'));
out.push(S('Stage 1 · Unit 6 quiz – corrections'));
out.push(A('**1** I **must go**. _(no to after must)_   **2** He **has to** sign it.   **3** You **don\'t have to** come on Saturday.   **4** They **let** me **use** the key. _(no to after let)_   **5** I am **supposed** to sign at the bed. _(the written d)_   **6** Would it be all right if I **came** at six?'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** He is already doing **condition 6** — both halves have been rules in his shop since 2009. **Condition 10** is unenforceable, because it is the only one written as _is expected to_ rather than _is to be_. And **condition 10 is also the dangerous one** — Lubna\'s point — because it is the only condition on the page that would protect **him**: if an inspector ever says a sheet left his shop, the record of who handled the work is the thing that proves it. It is written in the softest words on the page and it is the only one on his side.'));
out.push(NOTE('Rasha\'s discovery about condition 7 is the best single piece of practical reading in the book: _without written authorisation_ does not say **from whom**. No form, no name — and he is the contractor, so one standing line of his own satisfies the condition for ever. Teach the question as a habit: of every prohibition, ask _by whom?_ Half the prohibitions anybody meets in a year do not answer it.'));
out.push(S('Language box – explaining a set of rules'));
out.push(A('No exercises. Use it as the checklist for Stage 3. The two habits to drill are **sort before you argue** and **ask _by whom?_ of every prohibition**. Everything else in the box follows from those two.'));
out.push(S('Stage 3 · Practise (sample – Page B, a tenancy)'));
out.push(SAMPLE([
  'Six conditions, three kinds. I am already doing two of them — the rent on the first, and I have never made an alteration — and I would say that first.',
  'The ones nobody will check: "the tenant is expected to report faults promptly". _Expected_, not _is to_. Nobody has ever asked me whether I reported anything, and I have reported three things in four years and had one answer.',
  'The one that protects me is the thirty days for the deposit, and it is the only condition on the page with a number in it, which is why it is the only one I could ever enforce.',
  'And the prohibition with nobody named: "repairs are not to be arranged by the tenant". Arranged with whose agreement? It does not say. If I cannot reach him for a week and the water is off, that sentence names nobody who could authorise it, and I have assumed for four years that it means the landlord.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Page A: the protective rule is the register marked at the start of the lesson — it is the only one that would show where a child was; the unnamed authority is in _without authorisation_. Page B: the protective rule is the thirty days; _with notice_ does not say how much notice. Point out the pattern: the protective rule is usually the one with a **number** in it, and the unenforceable prohibition is usually the one without a **name**.'));
out.push(S('Stage 4R · Report – mediation'));
out.push(A('Mark the decision. The model report carries Bassel\'s page faithfully — all three kinds, the protective condition, the unnamed authority — and then does one thing of its own: _I decided to read my own tenancy again and find out who the authority is in the clause about alterations, because I have assumed for four years that it is the landlord and the clause does not say so._ That is the mediation skill of the first half of this book: carry somebody else\'s document accurately, then act on your own.'));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 4'));
out.push(A('**1** B   **2** A   **3** D   **4** G   **5** F   ·   Not needed: **C**, **E**, **H**'));
out.push(A('_Notes:_ Part 4 is five gaps and eight sentences, and it is done with **reference words and logic, not topic**. **1** B because the next sentence begins _When he sat down to write them out properly_ — the contrast needs _never read them all at once_. **2** A because _each of these_ points back at the three examples. **3** D because _that was the moment_ answers _what convinced him was a question_. **4** G because it is the only option that follows two rules with a heading. **5** F because _the point was not really the notice_ requires _it was the discovery that…_ The three distractors are all **true or plausible** and none of them is tied to the sentences on either side; that is how Part 4 is built.'));
out.push(NOTE('Reading Part 4 is the paper students find hardest and it is the most teachable, because the answer is almost never in the meaning: it is in a pronoun (_each of these_, _that was the moment_, _it was_), a contrast (_but_, _however_), or a heading. Teach them to read the sentence **before** and **after** each gap and to underline the referring word. Five marks, eight minutes.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'There are seven of them and they are three different kinds.',
  '**The ones we already do:** condition 6 — nothing is trimmed before the proof is signed, and nobody signs a proof they set. Both have been rules here since 2009. Those cost us nothing and I would say so first, because it makes the one objection readable.',
  '**The ones nobody will ever check:** condition 10, the record of everybody who handles the work. Look at the words — it says _is expected to_ and not _is to be_. But condition 10 is the one that protects you, and that is why you should do it anyway: if anybody ever says a sheet left this shop, it is the only thing on the page that could prove who had it.',
  '**The one I cannot live with:** "all staff are not permitted to leave the premises during working hours, including for prayer, without written authorisation." It is not mine. I have written to them to ask for those three words to come out and I expect to be ignored.',
  'And the thing nobody notices: "without written authorisation" does not say **by whom**, which means I can write one standing line of my own and condition 7 is met for ever.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 2'));
out.push(A('Both are marked out of 20 on Content, Communicative Achievement, Organisation and Language. The **article** must answer both halves of the notice — the rule nobody has explained **and** what you found out when you asked — so a script that only describes the rule cannot reach the top band. The **story** must begin with the sentence word for word and must be a narrative; the commonest failure is a page of reflection with no events in it.'));
out.push(SAMPLE([
  '**Question 1 — article (sample, 143 words)**',
  '**The floor at seven**',
  'Is there a rule where you work that nobody has ever explained? I had one for four years and it turned out not to be a rule at all.',
  'When I started at the printing shop, the floor was swept at seven in the morning. Nobody told me to do it. The man who owns the shop did it, and then I did it, and for four years I got up twenty minutes earlier than I needed to.',
  'In February I finally asked whether I could sweep at the end of the day instead. I asked the way you ask for a favour. He looked at me for a moment and said I did not have to sweep at seven, and then he said I did not have to sweep at all, because it had never been my job.',
  'Then he told me the only thing in that shop that really is a rule, which is about the rollers, and which nobody had told me in four years either.',
  'So ask. The worst answer is the one you have already given yourself.',
]));
out.push(SAMPLE([
  '**Question 2 — story (sample, 141 words)**',
  'I had been obeying it for four years before I found out that nobody had ever asked me to.',
  'It was a Tuesday in February and the shop was cold. I had been standing by the folding table with the broom in my hand since ten to seven, as usual, and I decided — because my daughter had been ill in the night and I had slept about two hours — that I would ask whether I could do it at six in the evening instead.',
  'He put down the sheet he was looking at and did not say anything for about four seconds, which frightened me.',
  'Then he said: you do not have to sweep the floor at seven. And then he said: you do not have to sweep the floor.',
  'I said somebody has to sweep the floor. He said he sweeps the floor, and that he has swept it at seven since 2007 because he cannot start work on a dirty floor, and that nobody had ever asked me to do anything.',
  'The next morning I came in at ten to seven anyway, and swept it, and he let me.',
]));
out.push(S('Unit 6 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** a   **2** b   **3** b   **4** b   **5** a   **6** b   **7** b   **8** a'));
out.push(A('_Notes:_ **1** _I keep forgetting_ makes it the speaker\'s own resolution, so _must_. **3** _stay at home_ shows it is freedom, not prohibition. **5** _let_ takes the bare infinitive. **6** _allowed_ takes _to_. **8** _would it be all right if_ is followed by the past form.'));
out.push(S('Unit 6 check  ·  B  Listening (Part 2, matching) – Track 6.15'));
out.push(A('**1** E   **2** A   **3** B   **4** C   **5** G   ·   Not needed: **D**, **F**, **H**'));
out.push(A('Speaker 1 is the hardest: he describes breaking a rule **and** nine years of calling it an obligation, and students who stop listening after "I did leave it" choose C. Part 2 matching always has one speaker whose first half fits a wrong option; teach them to wait for the last sentence of each extract.'));
out.push(S('Unit 6 check  ·  C  Writing (sample, 156 words)'));
out.push(SAMPLE([
  '**ROOM 9 · WHAT IS A RULE AND WHAT IS ME** · S. Dibo',
  '**1  Nobody leaves this room during a test, for any reason, without me going with them.** Not for water, not for the office, not if a teacher asks for them at the door. If I am not going, the answer is no.',
  '**2  Nothing is written on a mark sheet in pencil.** If you have not got a pen, use mine.',
  '**That is the whole list. Everything else is me.**',
  'The desks are in rows because I cannot see bay four otherwise. You may move them back at the end and most of you do not.',
  'The register is in blue because I like blue. That is not a rule, it is a reason, and a bad one.',
  '**And one rule that is not mine.** "Staff invigilating are not permitted to assist candidates with the reading of questions." That has come from the directorate, not from me. I think it was written about cheating and will be read about reading. What will actually happen is that if a child asks me what a word means, I will tell them, and I will write it down afterwards.',
]));
out.push(S('I can… (Unit 6)'));
out.push(A('Self-assessment; no answers. The three to look at are the first, the third and the seventh: choosing _must_ or _have to_ by who is obliging you, recognising a habit in the voice of a rule, and passing on a rule with all three things. A class that ticks the form lines and not those three has learnt six modals and missed the unit.'));
out.push(box('Looking ahead: the Mid-Book Test, then Unit 7', [
  'The **Mid-Book Test** comes next: four papers, **sixty marks** on Units 1–6 — Reading 20 · Writing 15 · Listening 15 · Speaking 10. The key gives the mark scheme, the audio scripts, the speaking rubric and two full sample scripts for each writing task. It is built from the forty-eight lines of the six **I can…** boxes and tests nothing that has not been taught.',
  'Set the test in one 90-minute session, or Reading and Listening in one lesson and Writing and Speaking in the next. The Speaking paper is ten marks and takes about seven minutes a pair; it is the first time in this book that the four Preliminary Speaking parts are named.',
  '**Unit 7 – Cause, Effect and Consequence** follows: _because · since · as · due to · owing to · so · therefore · as a result · which meant that · so … that · such … that_. And in **7.4**, Fares finds out what happened to his application — the answer is not what the class expects, and the Unit 4 and 6.5 threads both land there.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 6 · Answer Key');
