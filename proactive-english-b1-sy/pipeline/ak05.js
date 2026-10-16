// Proactive English B1 · Syria Edition · Book 1 · Unit 5 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 5  Describing Processes — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**Four cycles for the passive, then two against it.** 5.1 to 5.4 teach it as the right tool and use it without apology. 5.5 turns round and asks who benefits from a sentence with nobody in it, and 5.6 shows the tense a change is reported in — and the honest use of the fourth reason. Do not let 5.5 arrive early: a class that is told in 5.1 that the passive hides people will write four cycles of bad process English.',
  '**It is not "avoid the passive".** That instruction, which students have usually had from somewhere, is wrong and this unit says so. A process page should be almost entirely passive. A report of a failure should not be. The skill is knowing which of the four reasons you are in.',
  '**It runs on the Unit 4 homework** — four steps with no people in them. 5.1 Stage 1 puts them on the wall; 5.6 Stage 1 hands them back and asks for the people. If the homework was not set, use any four-step process the class knows and set it as a ten-minute task in 5.1.',
  '**Mazen\'s letter from 3.5 is answered in 5.6.** Seven months, eleven lines, five passives and no name. It is the most useful single document in the book for adults who write to institutions, and the cycle is built on taking it apart without being unfair to the person who wrote it.',
], C.lblue, C.navy));

// ===================== 5.1 =====================
out.push(pb());
out.push(h2('5.1  How it is made'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Put the six sets of four on a long sheet and leave it there for the whole unit; it is used again in 5.6. The answer to the question is **no** — almost nobody can tell who does it, and the class will have written it that way without being asked to, which is the point.'));
out.push(A('**b** Active: **1**, **3** — and those are the two that tell you who. Passive: **2**, **4**.'));
out.push(NOTE('Students write processes in the passive naturally, in Arabic and in English, and have usually been told at some point that the passive is bad style. Say plainly in the first five minutes that for the next four cycles it is not merely allowed but required. The permission is what makes the unit work.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – how a book is printed.'));
out.push(A('**b** **1** Eleven. _(Accept "all of them" — he never mentions a person at all in the description.)_   **2** That his voice slows down.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _The sheets **are printed** on both sides._   **2** _The proof **is checked** twice._   **3** _That machine **is not used** any more._   **4** _It **is trimmed** on three sides._   **5** _**Is** every batch **tested**?_'));
out.push(S('Stage 3 · Practise (sample – Card A, bread)'));
out.push(SAMPLE([
  '**A:** How is bread made in a bakery?',
  '**B:** First the flour and the water are weighed. Then the dough is mixed and left to rise. After that it is divided and shaped. Finally it is baked and left to cool on racks.',
  '**A:** And who decides when it has risen enough?',
  '**B:** Somebody with a thumb — and it does not matter who, because it is always the same thumb test, and that is the step I cannot write down.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The step that is really two is nearly always the judgement step: _left to rise_ (left how long, and how is it known?), _the machine is set up_ (set up to what?), _the sample is labelled_ (with what, before or after?). Name it: the steps a describer cannot see are the steps they do with their hands and not with their head.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The chart is read. The drawer is unlocked. The drug is drawn up. It is checked against the chart. It is given. It is signed for._ — and the partner stops at _the drug is drawn up_, which is three steps: the ampoule is checked for the name and the strength, it is drawn up, and the volume is checked against the dose.',
  '**b** _Nine years, and I have never written them down. There is no card on that ward and there was none when I arrived._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda asked Bassel how a book is printed. The text is set, then checked twice by two different people, which is where most of the mistakes are caught. A proof is printed on ordinary paper and read, and when it is signed off the plates are made. The paper is loaded, the machine is set up and run, the sheets are printed on both sides and left to dry; then they are folded, gathered in order, sewn or glued, and trimmed on three sides. Jad said that was eleven steps without saying "I" once, and that Bassel does all of it. Bassel said he does, with two men, but that is not how you describe it: if he says "I load the paper and then I set up the machine", he is telling you about his evening, and nobody wants his evening — they want the process. The process does not care who does it; it is the same eleven steps if it is him, or his son, or a factory in Aleppo with forty men in it. Lubna said that is why the sentences have nobody in them, and Bassel said the paper is loaded and it does not matter by whom, because it is always loaded, by somebody, in that order, or you have no book. Jad said his voice slows down, and Bassel said nineteen years — he could say those eleven in his sleep and has never written them down in his life.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The sheets are cutted. → ✓ are **cut**.   ✗ The oil checks every morning. → ✓ **is checked** _(this one reverses the meaning and is the commonest of all)_.   ✗ An accident was happened. → ✓ **happened**.   ✗ It is sell here. → ✓ **is sold**.   ✗ The proof is check twice. → ✓ **is checked**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Setting the text and signing the proof — _nothing is ever signed by the person who set it_. _(Also accept the gathering, which is checked by somebody who did not do it.)_'));
out.push(A('**2** The first forty sheets are printed and thrown away; they are never counted in the job.'));
out.push(A('**3** The last section — the three things that are not steps.'));
out.push(NOTE('_A person cannot read their own mistake_ is the reason behind both of Bassel\'s separation rules, and it is the most transferable idea in the cycle. It is also the structural argument for peer review, which this course has been running since A2 Unit 1 without ever explaining why. Say so here.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**HOW A SAMPLE LEAVES THIS LABORATORY** · Y. Mansour · pinned by the door',
  '**Before the bench.** The request form is read. The tube is labelled **before** anything is put into it, and it is labelled from the form and not from the request on the screen. The time is written on the label, not the time the form says.',
  '**On the bench.** The sample is logged. The chamber is opened and the temperature read and written down. The sample is placed, the chamber door is closed, and the door is then pushed and felt — not looked at.',
  '**After.** The chamber is checked at the start of every shift and the reading is entered even if it is the same. The log is signed by the person who read it, not by the person on duty.',
  '**Things that are not steps.** A reading that is the same as yesterday is still written down, because a column of identical numbers is evidence and a gap is not. The door is felt and not looked at, because a split seal looks shut. And nothing is ever put in the second chamber because the first is full; if the first is full, the work in it is taken out.',
]));
out.push(S('Stage 7 · Write freely (sample, 172 words)'));
out.push(SAMPLE([
  '**THE SHAALAN COUNTER** · what is done to a telephone that comes in · M. Hariri',
  '**Before anything is opened.** The fault is written down in the customer\'s words, not in mine. The telephone is switched on in front of the customer and the screen is photographed. The case, the glass and the corners are looked at in the light and anything already broken is pointed out and written on the ticket, and the ticket is signed. Nothing is opened until the ticket is signed.',
  '**While it is open.** The battery is disconnected first. The screws are kept in order on a magnetic tray — in order, because three of them are different lengths and one of them goes through the board if it is put in the wrong hole. The fault is found, the part is fitted, and the telephone is tested **before** it is closed.',
  '**Before it goes back.** It is tested again, closed, cleaned, and the repair is written in the fault book with the date, the model and the fault.',
  '**Things that are not steps.** The photograph is the whole business: without it, every argument about a scratch is the customer\'s word against mine and I lose. The screws in order is not tidiness. And a telephone is never promised for the same day, because the part is never in the drawer the one time you say it is.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"one of them goes through the board if it is put in the wrong hole" — I would have put them in a pile._   ✓ _"the fault is found, the part is fitted" is three steps at least, and the first one is where the whole job is._   ? _What happens if the testing is done after it is closed?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Almost every hand for the first question and two for the second. Say the gap once, in one sentence, and move on: a class that is lectured about documentation stops writing. The homework does the work.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  'I gave my eight steps to my brother, who has never been behind the counter.',
  'His first question was: "How do you know which part to order?" It is not on my list at all. Between _the fault is found_ and _the part is fitted_ there is a whole step — the part is identified from the model number and the board, not from the fault, because two different boards are sold under one model name — and I have never said that out loud to anybody. It is nine years of my work and it was not in my own description of my own job.',
]));

// ===================== 5.2 =====================
out.push(pb());
out.push(h2('5.2  How it was built'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Four things in the room, and the answer to "does anybody know?" is nearly always no. Keep it to four minutes; the point is only to establish that the building is unwritten.'));
out.push(A('**b** **1** _The sheets **were printed**._   **2** _The room **was used** for storage._   **3** _The windows **were not opened**._   **4** _**Was** the lift **checked**?_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a textile company\'s offices.'));
out.push(A('**b** **1** The partitions were taken out, the big rooms were divided, and Rooms 13 and 14 were made out of one accounts office. The **electricity was not re-done**.   **2** What was laid first — and from that, most of the history of a building.'));
out.push(A('Lubna reads the room from the floor, the skirting board and the position of a light switch. That is the cycle: a past passive sentence with its evidence inside it. Students write histories they have been told; the model writes one that was read off the walls, and the difference is the phrase _because the floor is one piece_.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _The partitions **were taken out** in 2009._   **2** _The rooms **were divided** in the same year._   **3** _The electricity **was not re-done**._   **4** _The second switch **was put in** later, by somebody, with the wire on the outside._   **5** _The floor **was laid** before the wall **was built**._'));
out.push(S('Stage 3 · Practise (sample – Card A, the room you are sitting in)'));
out.push(SAMPLE([
  '**A:** The room you are sitting in.',
  '**B:** It was put up in 1962 as an office. Then the partitions were taken out in 2009, and this room and Room 13 were made out of one accounts office.',
  '**A:** And what was not done?',
  '**B:** The electricity was not re-done, because re-wiring is expensive and a second switch is forty minutes.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Money in three out of four, and _nobody asked_ in the fourth. The fourth is the interesting one and it is worth thirty seconds: a thing left undone because nobody asked is still being left undone today, and somebody in the room could ask this week.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The bus was built in 2003 and brought here in 2011. The seats were re-covered twice, in 2014 and 2019. The second door was welded shut at some point before I got it and has never been opened in nine years. The hand rail on the step was never replaced after it was bent, and it has been bent since I started._',
  '**b** _Nobody alive knows why the second door was welded. I have asked four people. The man who did it worked for the company before 2017 and nobody has his name._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna said this room was not built to be a classroom. The building was put up in 1962 as the offices of a textile company — you can see it from the corridor, because the doors are too narrow and they open outwards, which offices do and classrooms are not supposed to. It was converted in 2009: the partitions were taken out, the big rooms were divided, and this room and Room 13 were made out of one accounts office. Umm Kinan asked how she could know, and Lubna said because the floor is one piece and the skirting board runs behind that wall — so the wall was built after the floor was laid — and because the light switch for this room is on the other side of it in Room 13, which is why somebody has had to put a second one by the door with the wire on the outside. Ms Huda said that switch has been like that since the room was given to her. Lubna said that is the point: it was never finished. The room was divided and the electricity was not re-done, because re-doing electricity is expensive and a second switch is forty minutes, and none of it is written anywhere, so in twenty years somebody will take that wall down and be surprised. Mazen said she has been in this room four times; she said six, and that you can read most of a building off a wall if you know what was laid first — buildings are honest and the drawings are not.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The wall was build. → ✓ was **built**.   ✗ The rooms was divided. → ✓ the rooms **were** divided _(agreement goes wrong far more in the past than the present)_.   ✗ It was happened in 2009. → ✓ It **happened**.   ✗ The building was put up by a textile company in 1962. _(if the company is not the point)_ → ✓ drop the _by_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A different sand was used in the render and it has weathered differently.'));
out.push(A('**2** The electricity was not re-wired — so Rooms 13 and 14 share a circuit and a switch, and the second switch was added later with the wire on the outside. And the windows were not changed — so the south rooms are 4 or 5 degrees hotter, which is why the afternoon classes are always in 7, 8 and 9.'));
out.push(A('**3** Because none of it is written anywhere in the building, it was all read off the walls, floors and render in about six visits, and in twenty years somebody will be asked to take down the wall between 13 and 14 and will find a circuit they were not told about.'));
out.push(A('The afternoon-classes detail is the one to point at. A fact about render in 1974 explains the timetable in April — and the timetable has been arranged round it for sixteen years by people who think they are following a habit. Ask the class what in their own workplace is arranged round something nobody remembers.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WARD 4, AND WHAT WAS DONE TO IT** · R. Barakat',
  '**1981.** Built as a six-bay surgical ward. The bays were made 3.1 metres wide, which is right for a bed and a chair and wrong for a bed, a chair and a drip stand.',
  '**2004.** Converted to five bays. One bay was taken for a store and a nurses\' station was built across the end of the corridor. The sight line from the station to bay five was lost and nothing was put in its place; there is still no mirror and no camera.',
  '**2016.** Refurbished. The floor was replaced, the lighting was replaced, and two sockets were added by every bed. The call system was not changed, so the bells in bays four and five still ring in the old station position, which is now a cupboard.',
  '**What was not done, and what it costs now.** The call system. A bell in bay five is heard from the station as a sound in the corridor and not as a bell, which is why somebody is always walking down to look. And the sight line, which is why the fifth night of a block is worse than the first.',
  '**Why this is written down.** None of it is in any file I can find. It was read off the floor, the ceiling and one cupboard.',
]));
out.push(S('Stage 7 · Write freely (sample, 168 words)'));
out.push(SAMPLE([
  '**THE COUNTER IN SHAALAN** · M. Hariri',
  '**Before 1998.** A fruit shop. The floor was tiled for washing down and it slopes about four centimetres to a drain in the middle, which is why nothing with wheels stays where it is put.',
  '**1998.** Divided into two. The front half was let as a kiosk and a block wall was built across the middle, on the tiles, without a damp course. The wall has been wet at the bottom ever since and has been painted four times, by three different people, in three different colours.',
  '**2017.** Taken by me. The shutter was replaced, the wiring was brought to one board, and a bench was built along the back. The drain was not touched and the wall was not opened.',
  '**What was not done, and what it costs now.** The damp course. Everything within thirty centimetres of that wall has to be kept off the floor, which is why the stock is on shelves and the shelves were built the week I moved in. And the drain, which is why my chair is wedged.',
  '**Why this is written down.** Because the landlord has twice offered to "do something about the damp" by painting it, and the next time he offers I am going to hand him this.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"painted four times, by three different people, in three different colours" — that is the evidence and it is funny, which makes it land._   ✓ _"the wiring was brought to one board" — by whom, and is it signed off anywhere? That is the one line I would want a name on._   ? _Who told you about 1998, and how do they know?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Almost none of these exist in writing. The question about the oldest person who knows the rest is the one that silences a room, and it should be asked once and not discussed: in most of these places the history is held by one person in their sixties or seventies, and nobody has written any of it down.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  'I asked Abu Samir, who has had the kiosk in the front half since 1998, why the wall was built on the tiles.',
  'He said it was built in nine days because the owner was selling and wanted two rents instead of one, and that the man who built it told the owner it needed a damp course and was told there was no time. He remembers that because he was standing there. He also said the drain was blocked deliberately in 1999 with a cloth and a brick, and that the cloth is still in it.',
  'I have been in that shop for nine years and the whole history was eleven metres away.',
]));

// ===================== 5.3 =====================
out.push(pb());
out.push(h2('5.3  By hand, with a blade'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Make four of the six need no _by_ at all, and let the class say why: nobody cares who loads the paper. The two that do need one should be a responsibility (_signed by_) and a method (_done by machine_).'));
out.push(A('**b** **1** by   **2** with   **3** by   **4** by   **5** by'));
out.push(A('_Item 4 is the trap:_ **by hand** is a fixed phrase meaning "not by machine" and has no person in it, so it takes _by_ even though no agent is named. ⚠ ~~by the hand~~.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – why a screen comes loose.'));
out.push(A('**b** **1** By four plastic clips, then sealed with adhesive applied **by hand, with a brush**, by a different operator each shift.   **2** It moved the fault **from the thing to the step** — he had been blaming a telephone for seven months.'));
out.push(NOTE('_The design of the process, which is a different thing_ is the sentence to write on the board. It is the whole of modern quality thinking in nine words and a B1 student can say it with the grammar of this cycle. It also rescues Mazen from the unusable complaint he made in October.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _taken **with** a pipette_ — instrument; the agent is not worth naming.   **2** _taken **by** a trained technician_ — agent, and here it is worth naming, because it is the claim being made.   **3** _written **by** hand_ — fixed phrase, no person.   **4** _checked **by** the man who prepared them_ — agent, and it is the whole point: the check is worthless.   **5** _opened **with** a key_ — instrument; add _by_ only if who opened it matters.'));
out.push(S('Stage 3 · Practise (sample – Card A, a blood sample)'));
out.push(SAMPLE([
  '**A:** A blood sample is taken.',
  '**B:** It is taken by a trained technician, with a vacuum tube and needle.',
  '**A:** Which one can go?',
  '**B:** The _with_, because the equipment is always the same. The _by_ cannot go, because the whole safety of it is that the person is trained.',
  '**A:** And if it goes wrong, which _by_ do you ask about?',
  '**B:** Not by whom the sample was taken — by whom it was **labelled**. That is the step things go wrong at and it is the one nobody writes down.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The two _by_ phrases on each card that cannot be left out are the ones carrying responsibility: Card A, _a proof is signed_ and _a blood sample is taken_; Card B, _a prescription is checked_ and _a wall is rendered_. Say the uncomfortable half out loud: these are exactly the steps where the passive is most often used to remove the person.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _"The tube is labelled" becomes "the tube is labelled by the person who draws the blood, with a pen, at the bedside." What changes is that it can now be got wrong by somebody in particular, which is what a process page is for._',
  '**b** _In her process the by that matters is in "the chamber is checked at the start of every shift" — because for fourteen months it was checked by nobody, and the sentence without a by cannot tell you that._',
]));
out.push(A('Answer **b** is the join between this cycle and Unit 3. _The chamber is checked at the start of every shift_ is a true sentence about a thing that did not happen for fourteen months, and it is true because nobody is in it. That is 5.5 arriving early; let it, and then say it is next.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara asked why one model breaks and another does not, and Mazen said because of how the screen is attached. On a good one the screen is held in a frame and the frame is screwed to the body — four screws, done by a machine, to the same tightness every time. On the eleven he had in September the screen is held on by four plastic clips and sealed round the edge with glue. Yara said glue is not a problem, and he said glue is not a problem: glue put on by hand, with a brush, by a different person every day is a problem. Three of the eleven had too much and two had almost none, and you can see the brush marks — the same fault, from the same factory, made by eleven different hands. Fares said so it is not the design, and Mazen said it is the design of the process, which is a different thing and which he did not have words for until this evening. He wrote to those two shops in October and said the model is badly made, and that was wrong and they will have read it as an insult. The right sentence is that the screen is attached by hand, with a brush, by a different operator each shift, and in eleven out of eleven the glue line is uneven — and that is the only "by" that matters: not by whom the telephone was made, but by whom the glue was put on. He says the word moved the fault from the thing to the step, and that he has been blaming a telephone for seven months.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It was written by a pencil. → ✓ **with** a pencil _(by makes the pencil the author)_.   ✗ made from a machine → ✓ made **by** a machine.   ✗ by the hand → ✓ **by hand**.   ✗ made by wood → ✓ made **of** wood. _(of = material · by = agent · with = tool — three words, and students use one.)_'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** _The model is badly made._ Because it was a guess and also an insult — and they will have read it as one, which is why seven months produced nothing.'));
out.push(A('**2** The **step**: _I am not saying the telephone is badly designed. I am saying that one step in how it is put together is done by a different hand every shift and is not measured._'));
out.push(A('**3** The brush strokes can be seen under a lamp and they are not the same in any two of the eleven; in three the adhesive ran into the earpiece and in two there was almost none along the lower edge.'));
out.push(NOTE('This letter is a model of something no coursebook usually teaches: withdrawing your own claim without withdrawing your complaint. The sequence is quote it, call it a guess, apologise for it in six words, and then say the better thing. Students who have written an angry letter and had no answer will recognise the whole situation.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the head of maintenance, Building 3 · **Subject:** Correction to my note of 14 April',
  'Dear Sir,',
  'I wrote to you in April about the second fire door. I have had no reply, and I am writing again because one sentence of mine was wrong.',
  'I wrote that the door is broken. That was a guess and I apologise for it. Here is what I can actually say.',
  'The door is not broken. It is held closed by a spring closer at the top and the closer is adjusted by hand, with a screwdriver, on a thread with no lock on it. In all seven observations the door stood between 6 and 9 centimetres open, and it can be pushed shut with a foot and opens again, which is what a closer does when the adjustment has backed off.',
  'I am not saying the door is faulty. I am saying that one adjustment is made by hand, is not locked and is not checked, and that it has backed off seven times since October.',
  'I do not know when it was last adjusted. You are in a position to find out and I am not.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**To:** the examinations office · **Subject:** Correction to my letter of 2 March about third-year results',
  'Dear Madam,',
  'In March I wrote that the third-year marks are entered carelessly. I have had a reply which answered the word "carelessly" and not the problem, which is fair, because that word was mine and it was a guess.',
  'Here is what I can say. The marks are written on paper by each teacher, collected by a clerk, and then typed into the system by one person, with a keyboard, from eleven handwritten sheets in eleven different hands. They are not read back and they are not typed by the person who wrote them.',
  'Of the 31 marks in my own class this year, 3 were entered wrongly. All three were a 6 entered as a 5 or a 5 as a 6 — in my handwriting those two figures are the same figure to anybody who did not write them.',
  'I am not saying anybody is careless. I am saying that one step is done by one person, from somebody else\'s handwriting, with nothing read back, and that it is wrong about ten times in a hundred in my own class.',
  'A read-back would take eleven minutes a year per class. That is the only thing I am asking for.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"in my handwriting those two figures are the same figure to anybody who did not write them" — you have taken the blame for the fault and kept the fault._   ✓ _"the marks are written on paper by each teacher" — that _by_ does not need to be there and it dilutes the three that do._   ? _How do you know it is the typing and not the collecting?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Most hands for the thing, fewer for the person, and the second count is where the cycle earns its place. Blaming a person is the same error as blaming a thing — it stops at a noun — and the passive with a _by_ on one step is the way out of both.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I have been calling the fourth-year syllabus badly written for six years. The step I can actually describe is this: the chapter order is set by one committee in the summer and the examination is written by a different committee in the spring, with no sight of each other, and the two have been out of order since 2019 — chapter 7 is examined before it is taught in every school that follows the printed order. That is not a badly written book. That is two committees and no September meeting.']));

// ===================== 5.4 =====================
out.push(pb());
out.push(h2('5.4  First, then, and only after that'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Read the six steps in a genuinely unhelpful order and do not help. The _four sequencers and no more_ rule is the exercise: six sequencers is a children\'s book and no sequencers is a list.'));
out.push(A('**b** **2** _once_ and **3** _as soon as_. _(1 after that, 4 before and 5 finally all do different jobs.)_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the night medication round.'));
out.push(A('**b** **1** The chart is read, and the patient is identified from the **band**, before the drawer is opened and before anything is given.   **2** Because every step can be done perfectly in the wrong order and somebody can still be given somebody else\'s tablets — the steps are easy, the order is the whole thing.'));
out.push(NOTE('_None of my mistakes was ignorance. All of them were order._ Read it twice. It is the argument for every process card ever written, it is said by somebody with 118 shifts and seven errors behind her, and it reframes training: a card is not for people who do not know the job, it is for people who know it and are tired.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _The chart is read **before** the drawer is opened._   **2** _**Once** the proof has been signed, the plates are made._ / _The plates are not made **until** the proof has been signed._   **3** _The sample is labelled **before** it leaves the room._   **4** _**Only after** the money has been counted **is** the receipt given._   **5** _The register is marked **before** the class starts._'));
out.push(A('Item 4 is where the **inversion** is practised. ⚠ ~~Only after the money has been counted the receipt is given.~~ The subject and verb turn round after _only after_, _only when_ and _not until_, and it is worth drilling as one shape.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The drawer is opened · the chart is read · the band is checked · the drug is signed for · the drug is given · the drug is drawn up.',
  '**B:** First the chart is read. The band is checked before the drawer is opened. Once the drug has been drawn up and checked against the chart, it is given. Only after that is it signed for — at the bed.',
  '**A:** Which two must not be swapped?',
  '**B:** Giving and checking. Because if it is given before it is checked, the check is a piece of paperwork about something that has already happened.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Card A: _given_ must not come before _checked_. Card B: _the plates are made_ must not come before _the proof is signed_. The consequence is the same shape in both, and it is worth naming as a rule: **the irreversible step must never precede the check that exists to stop it.** That sentence covers medicine, printing, money, building and marking.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Six steps of the morning bus check: the fuel is read before the engine is started. The lights are tested. The doors are opened and closed twice. The tyres are looked at from both sides. Once all of that has been done the sheet is signed, and only after that is the bus taken out. The two that must not be swapped are signing and checking — because the sheet is what I would be shown if anything happened._',
  '**b** _I have signed it first about four hundred times. Everybody does. The sheet is at the office window and the bus is forty metres away._',
]));
out.push(A('Answer **b** is the most honest thing in the cycle and it should be collected rather than corrected. A check whose paperwork is physically forty metres from the thing being checked will be signed first, by everybody, for ever. That is a process-design fault, not a moral one — and naming it is what 5.3 taught.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha gave the night round in order. The trolley is unlocked and the keys stay on the person who unlocked it. The chart is read before the drawer is opened — before, not while. The patient is identified out loud, and the name is read off the band and not off the chart, because the chart is what you expect and the band is what is true. Then the drug is drawn up, checked against the chart, and only after that is it given — and signed for immediately, at the bed, not at the end of the round. Ms Huda asked what happens if a step is done out of order, and Rasha said then nothing has gone wrong and everything is now possible: every step can be done perfectly in the wrong order and somebody can still be given somebody else\'s tablets. The steps are easy; a child could learn them in a morning. What is hard is doing them in that order at ten past two on the fifth night of a block with a bell going in bay three. She has made seven mistakes in 118 nights and not one of them was a step she did not know. None of her mistakes was ignorance. All of them were order.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Only after that it is given. → ✓ Only after that **is it** given.   ✗ before the drawer will be opened → ✓ **is** opened.   ✗ Once it is checked, it is given. _(if the check must be complete)_ → ✓ Once it **has been** checked.   ✗ First… then… after that… then… finally… next… → ✓ four at most.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** On the trolley. _(The keys stay on the person who unlocked it.)_'));
out.push(A('**2** Everything up to step 3 can be undone; nothing after step 5 can be undone by anybody, at any hour.'));
out.push(A('**3** Because a poster is read in the first week and then becomes part of the wall; a card fits in a pocket. And because only three of the six steps are ever got wrong — 2, 3 and 6, which are the three that feel most unnecessary at two in the morning.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**CLOSING THE COUNTER** · six steps · on the inside of the shutter, not in a drawer',
  '**1** The till is read and the figure written in the book. The book stays under the counter and is not taken home.',
  '**2** Every telephone on the bench is put in a bag with its ticket. **Before** the bench is cleared — not while it is being cleared.',
  '**3** The bags are counted against the open tickets. Counted against the tickets, not against what you remember taking in.',
  '**4** The bags are put in the safe and the number is written next to the till figure.',
  '**5** Only after that is the power board switched off.',
  '**6** The shutter is pulled and locked, and the lock is pulled upwards before you walk away. Not looked at. Pulled.',
  '**The two that must never be swapped** are 3 and 4 with 5: once the board is off there is no light at the bench, and three telephones have been shut in this shop overnight in nine years, all three in winter, all three after I switched off first.',
]));
out.push(S('Stage 7 · Write freely (sample, 161 words)'));
out.push(SAMPLE([
  '**HANDING OVER A CLASS TO A SUPPLY TEACHER** · five steps · for the folder on my desk',
  '**1** The register is marked by whoever is in the room at the start, not at the end. Marked from the faces, not from the list of who is usually there.',
  '**2** The seating plan is read **before** the names are used. The plan is right and the memory of the first five minutes is not.',
  '**3** The three names on the yellow card are found in the room and spoken to once, quietly, before the lesson starts.',
  '**4** The work is given out in the order in the folder. Only after the first task has been collected is the second one given — all three sets are in the folder and it is tempting to give them together.',
  '**5** The register and the yellow card are returned to this desk before you leave the building. Not to the office.',
  '**The two that must never be swapped** are 3 and 4. If the work is given before the three are spoken to, nothing can be undone for the rest of the day; the room has decided what kind of lesson it is in about ninety seconds.',
  '**What I have got wrong myself:** 1, about a hundred times, always when I am teaching a class I know.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Marked from the faces, not from the list of who is usually there." That negative is the whole of step 1._   ✓ _"the work is given out in the order in the folder" is two steps — which work, and how do I know which is first?_   ? _Which of these have you got wrong, and when?_ — step 1, a hundred times, and only with classes you know, which is worth putting on the card.'));
out.push(S('Stage 7R · Share'));
out.push(A('Almost all out of order rather than in ignorance, and the answer belongs to Rasha. If the room needs one sentence to take away, it is hers: a process card is written for people who know the job and are tired, not for people who do not know it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave my six steps to the day sister. She said she gets step 6 wrong — signing at the bed — and that she signs at the end of each bay, every single round, and has done for eleven years. She said it in a way that made it clear she expected an argument. I did not give her one; I wrote it down, which is what the task said. Then she said the reason, which I had not thought of: she cannot sign at the bed with two in her hands and no surface, and the trolley has no board on it. Her mistake is not a habit, it is a missing shelf.']));

// ===================== 5.5 =====================
out.push(pb());
out.push(h2('5.5  Why there is nobody in this sentence'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Four sentences, four different reasons, and do not say which is which — the class sorts them. The fourth reason should be the last one you read out.'));
out.push(A('**b** **1** nobody knows   **2** everybody knows   **3** it does not matter   **4** somebody does not want you to know'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – to take the person out on purpose.'));
out.push(A('**b** **1** That it is the fourth reason: she took the people out so that nobody would come and look for them, and one of them was herself — and the four words have no door, no seal, no February report and no Tuesday in them either, and every word is true.   **2** Put the people back in and read it again: if it becomes **more useful**, the passive was wrong; if it becomes more useful **and** more uncomfortable, the passive was wrong and you knew.'));
out.push(NOTE('The hardest idea in the unit is Yara\'s reply to Fares: a passive that hides people and that **everybody writes without thinking** is a better hiding place than one somebody invented, because nobody chose it and so nobody is responsible for it. Students will want the fourth reason to be dishonesty. It is mostly habit, and that is worse and much more fixable.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Mistakes were made._ → _I made four mistakes and the factory made one._ **Choice**, and now there are two numbers in it.',
  '**2** _It has been decided._ → _The director has decided._ **Choice** — and the new version tells you whom to ask.',
  '**3** _The report was never actioned._ → _The report went to a post that was empty from March, so nobody read it._ **Choice**, and the fix is now visible.',
  '**4** _Concerns have been raised._ → _Two parents have written, on 3 and 14 March._ **Choice**: _concerns_ with no number can mean one person or two hundred.',
  '**5** _You have been allocated the Thursday shift._ → _I have put you on Thursday._ **Choice**, and it is the version a person can answer.',
  '**6** _The seal was not replaced._ → _Nobody replaced the seal, because the report was in an empty drawer._ **Choice** — and here the passive was arguably right, because for fourteen months there genuinely was no agent.',
]));
out.push(A('Item 6 is the one to spend time on. There are cases where nobody did it because **nobody existed to do it**, and the passive is then honest. Students who have just learnt the fourth reason will over-apply it, which is the predictable cost of teaching it.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Mistakes were made.',
  '**B:** That is reason four.',
  '**A:** Put the people in.',
  '**B:** I made four mistakes and the factory made one.',
  '**A:** Is it more useful?',
  '**B:** Much more useful, and much more uncomfortable, which by the test means I knew.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Reason 4: _mistakes were made_ · _the report was never actioned_ · _you have been allocated the fifth night_ · _it has been decided that the class will move to Room 9_. Reason 1: _my telephone was taken_. Reason 2: _the bins are emptied on Tuesdays_. Reason 3: _the oil is checked every morning_. _Concerns have been raised about the lift_ is reason 4 or reason 1 depending on whether the writer knows who raised them, and arguing about it for ninety seconds is a good use of the time.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _"Your application has not been successful on this occasion." Put the people in: three people read it and decided somebody else was better, and one of them is the man who interviewed me. What changes is that there is somebody to write to, and I have not written to him._',
  '**b** _Mine: "the round was not completed within the allocated time." I wrote that nineteen times. Put the people in: I did not finish the round, because there was one trolley. I took myself out of my own sentence and I took the trolley out as well._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda gave three good reasons to take the person out: nobody knows who did it, everybody knows who did it, it does not matter who did it. Then she asked Yara for her sentence. "The incubator failed" — no person in it, and none of the three reasons. Yara said it is the fourth one: she took the people out so that nobody would come and look for them, and one of the people she took out was herself. Those four words have no person in them and also no door, no seal, no February report and no Tuesday — and every single one of them is true. Fares said she did not write it to hide, she wrote it because that is what everybody writes, and Yara said yes, and that is worse, not better: a sentence that hides people and that everybody writes without thinking is a much better hiding place than one somebody invented. Ms Huda gave the test — put the people back in and read it again; if the sentence becomes more useful, the passive was wrong, and if it becomes more useful and also more uncomfortable, the passive was wrong and you knew. Mazen said "mistakes were made", and she told him to put them back, and he said: I made four mistakes and the factory made one. She asked whether that is more useful and he said it is a different letter — it is the letter he has not written.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ "The passive is bad style." → ✓ there are four reasons; know which one you are in.   ✗ Rewriting a process page into the active. → ✓ 5.1–5.4 were right; leave them.   ✗ Calling the writer of a form letter a liar. → ✓ hurried, in borrowed words, nine times out of ten.   ✗ _It has been decided_ in your own writing. → ✓ _I have decided_ — and if you cannot write that, you have found something out.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Six: who decided; why; that there is a report with a date; that a part is on order, so it is temporary; that the choice was twelve people against four hundred; and who will write your name down. _(Accept five to seven.)_'));
out.push(A('**2** That the lift can carry no more than four people until the brake is replaced, and that the director has therefore given it to twelve staff rather than four hundred students. It is a real reason and not a bad one.'));
out.push(A('**3** Nothing was hidden deliberately. Notice A was written in forty seconds in the words that notices are written in — _not by liars, by people in a hurry using a form of words that takes the people out for them_.'));
out.push(NOTE('The last paragraph of the model is the one that makes the whole cycle teachable in a workplace. A student who goes back to work and accuses the writer of the notice will be dismissed and will be wrong. A student who says "could we put the engineer\'s date in it, so people know it is temporary" will usually be thanked.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**As it was written.** "It has been noted that attendance at the homework club has fallen. It has been decided that the club will be reviewed at the end of term. Staff are reminded that attendance is to be recorded accurately."',
  '**With the people put back in.** Mr Khalil counted the register and found that eleven children came in October and four come now. He has decided to decide about the club in June, because he does not want to close something in the middle of a year. He is reminding us about the register because he thinks two of us have been marking children present who are not there, and he is right, and one of them is me — I mark the ones who come at half past five, and the club is supposed to start at four.',
  '**What the second one tells you.** Who counted, and what the numbers are. That nothing is being closed now. Why June. And that the reminder is aimed at two people and not at eleven.',
  '**What the first one was for.** He wrote it in a minute between two lessons and he did not want to name two colleagues in a circular to eleven. That is not cowardice; that is the only reason circulars exist.',
]));
out.push(S('Stage 7 · Write freely (sample, 179 words)'));
out.push(SAMPLE([
  '**As it was written** _(the sentence of mine)_ — "The round was not completed within the allocated time. Reason: staffing."',
  '**With the people put back in.** I did not finish the round until 03.25. I did not finish it because there is one trolley on a five-bay ward and has been since the second of February, when the second one went to the workshop with a broken wheel and was not chased by me or by anybody else. Staffing was two, which is the establishment, and two is what the round is written for. I wrote "staffing" because there is a box for it and because the box for equipment asks for a fault number and the trolley has no fault number, as there is no form for a trolley.',
  '**What the second one tells you.** That the delay is five weeks old and not one night. That the cause is a wheel. That the reason I gave was wrong, and that I gave it nineteen times. That the system has a box which produced the wrong answer nineteen times. And who to ask about the trolley, which is me.',
  '**What the first one was for.** It was for getting off the ward at twenty past four in the morning. It took four seconds to write and it was in the words the book is written in. I did not hide anything from anybody. I hid it from myself nineteen times.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I hid it from myself nineteen times." That is the sentence._   ✓ _"the system has a box which produced the wrong answer" — fair, but it is also the sentence that lets you off; the box did not write "staffing"._   ? _What is the sentence of your own that you rewrote, and did you send it?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Nearly all quick, almost none careful. Say the conclusion in one sentence: the fourth reason is mostly a habit, which means it can be broken by one person deciding to write _I have decided_ — and that is a thing a student can do on Monday without anybody\'s permission.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The sentence of mine was in a report in February: "The equipment was found to be unsuitable for the task." Put the people back in: I asked for a trolley with a board on it in 2023, I was told to put it in writing, I did not put it in writing, and I have been working round a missing shelf for two years. The new version is one line: _I have been signing at the end of the bay for two years because there is nowhere to write at the bed, and I have never asked in writing._ I am going to send it. I have not sent it yet.']));

// ===================== 5.6 =====================
out.push(pb());
out.push(h2('5.6  What has been changed'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** The four steps come off the wall with the people put in. Most students will find that one or two steps **cannot** have a person put in them — because nobody does them, or because nobody knows who does. Those are the two steps worth the rest of the evening.'));
out.push(A('**b** **2** and **3** are changes that are true now _(no date, present perfect passive)_. **1** and **4** are finished past events with dates and make no claim about today — which is exactly why _the part was ordered in March_ is such a useful sentence for somebody who does not want to say it has not come.'));
out.push(A('Item 4 is the fourth reason wearing the past passive. _The part was ordered on 14 March_ is true, complete and answers nothing. The class can now see it, and from here on they will see it on every notice in the building.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – one of the shops has replied.'));
out.push(A('**b** **1** Seven months; eleven lines.   **2** Five passive verbs — _has been noted, has been passed, has been contacted, has been confirmed, have been taken_ — and not one of them has a person.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _The seal **has been replaced**._   **2** _The model **has not been withdrawn**._   **3** _The part **has been ordered** — and it **has not come**._   **4** _The electricity **has not been re-done**._   **5** _A second switch **has been added**._   **6** _I **have not been** rung._'));
out.push(A('Item 3 is the pair to insist on. _The part has been ordered_ on its own is a reason-four sentence; _the part has been ordered and it has not come_ is a report. Teach them as one unit.'));
out.push(S('Stage 3 · Practise (sample – Card A, the incubator seal)'));
out.push(SAMPLE([
  '**A:** The incubator seal, since April.',
  '**B:** The seal has been replaced, the entry has been rewritten, and the temperature logs have been attached to it.',
  '**A:** And what has not?',
  '**B:** The rule about reports going to a post has not been changed.',
  '**A:** Which sentence would I believe?',
  '**B:** The last one, because it is the only one that costs me something to say.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The list believed least is always the one with no negative in it. Say why: a list of changes is a claim, and a claim with nothing conceded is read as advertising. One honest _has not been_ is what makes the other three readable — the same mechanism as the counted loss in 4.1 and the "what I cannot offer" paragraph in 4.6.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I asked for the second fire door in October. What has been done: nothing has been done to the door. What has not been done: it has not been looked at, no job number has been given to me, and it has not appeared in the maintenance book. What I have been sent: one message, from the office, saying it has been logged._',
  '**b** _It has moved by exactly one thing: the word "logged". That is the smallest piece of evidence that somebody read it, and it is also the only piece, and it is seven months old._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Al-Badr has answered Mazen — seven months, eleven lines. The matter has been noted, the information has been passed to the relevant department, the supplier has been contacted, it has been confirmed that all units sold were within specification, the appropriate steps have been taken — and then a name he cannot read. Lubna counted the verbs: five, and not one of them has a person in it. Yara said reason four, five times in eleven lines. Mazen said what he actually knows has been changed is nothing: nobody has rung him, the model is still in both windows, and he has had four more in since October, which makes fifteen, with an uneven glue line on all four. Fares said something has been done — somebody wrote eleven lines seven months later, which is a department that has been made to produce a paragraph — and Mazen said that is the only true thing in the letter. His own sentence is that the seal was reported in October, fifteen units have now been seen, the model has not been withdrawn, and he has been sent a letter in which nobody is named. He says he is using the passive in the last one on purpose: not to hide them, but to report that they hid.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The seal has been replaced in April. → ✓ **was replaced** in April.   ✗ The model has not withdrawn. → ✓ has not **been** withdrawn.   ✗ The appropriate steps have been taken. → ✓ which steps, by whom, on what date?   ✗ Nothing has been done. _(when something has)_ → ✓ give the other side its paragraph; it costs you nothing and it is why you are believed.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** His letter has been read, his information passed to a department, a supplier contacted, and a reply written and sent. He does not dismiss it: _I do not say that lightly: I expected nothing and I received a paragraph._'));
out.push(A('**2** Fifteen. The four new dates are 3 and 22 November, 14 February and 2 April.'));
out.push(A('**3** A **name** — the person at the supplier to whom the next eleven dates should be sent. It costs nothing because their own letter says the supplier has been contacted, so somebody at their end already has the name.'));
out.push(NOTE('Handing somebody their own sentence back is the sharpest move in the unit. _Your letter says the supplier has been contacted; if that is true, somebody at your end knows a name._ The evasion is turned into an obligation, in one sentence, without an accusation anywhere. It is worth reading aloud twice and it is what Stage 7P is marking for.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the head of maintenance · **Subject:** Your message of 2 November, and what has and has not changed since October',
  'Dear Sir,',
  'Thank you for your message. I would like to put next to it what has changed.',
  '**What has been done.** My note has been read and it has been logged. I do not say that lightly: I had expected it to be thrown away, and somebody typed a reply.',
  '**What has not been done.** The door has not been looked at. No job number has been given to me. The door has not appeared in the maintenance book, so a second person asking about it would be told there is nothing recorded.',
  '**What has changed at my end.** The door has now been seen standing open eleven times, not seven. The four new dates are 2 and 19 November, 8 January and 3 February.',
  '**What I would like, and it is one thing.** The job number. Not a repair date, not a visit, not an apology. Your message says the matter has been logged; if that is true, a number exists, and giving it to me costs you nothing and lets me stop writing to you.',
]));
out.push(S('Stage 7 · Write freely (sample, 175 words)'));
out.push(SAMPLE([
  '**To:** Levant Medical Supplies, training department · **Subject:** Your letter of 11 April',
  'Dear Madam,',
  'Thank you for your letter. I would like to put next to it what has changed since February, because I think the two pages say different things.',
  '**What has been done.** My application has been read. It has been acknowledged twice, once by a person who signed her name, which is more than the two companies before you managed. A decision has been taken and I have been told it.',
  '**What has not been done.** No reason has been given. I have not been told which part of the post I was short of, and I have not been offered a conversation. The post has not been filled — it is still on your own page as I write.',
  '**What has changed at my end.** I have trained two more representatives since February, which makes eight; both are still in the job, which makes six of eight. I have spoken English out loud to two people outside my class, and this letter is the first one I have written in it without help.',
  '**What I would like, and it is one thing.** One sentence saying which part of the post I was short of. Not the post, not an interview, not another look at my page. Your letter says my application was considered carefully; if that is true, somebody wrote something next to my name, and one line of it costs you nothing and would change what I do for the next year.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"The post has not been filled — it is still on your own page as I write." Four negatives and that is the one that will be read twice._   ✓ _"which is more than the two companies before you managed" — that is a dig, and it is the one line that makes this a letter from somebody who has been refused rather than from somebody with evidence._   ? _What is the one thing, and could I give it to you this afternoon?_ — yes, in one line, which is the point.'));
out.push(S('Stage 7R · Share'));
out.push(A('Most of the one-things could be given by one person in an afternoon. The second question is the one that changes behaviour: nearly everybody has been asking for everything, which is unanswerable, instead of for the one thing, which is not.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '**What has been done.** My note about the trolley has been read by the day sister. It has been mentioned at a meeting I was not at.',
  '**What has not been done.** The trolley has not come back. No order number has been given. The missing shelf has not been looked at by anybody.',
  '**What has changed at my end.** The round has now been late 41 times, not 34. I have stopped writing "staffing"; I have written "one trolley" on the last seven.',
  '**The one thing:** the workshop\'s reference for the trolley. Not the trolley, not a date, not an apology. It costs one line and it lets me ring the workshop myself instead of writing to you.',
]));

// ===================== 5.7 =====================
out.push(pb());
out.push(h2('5.7  Review & Mediate: What does this notice require?'));
out.push(S('Stage 1 · Unit 5 quiz – corrections'));
out.push(A('**1** The sheets are **cut**.   **2** An accident **happened**.   **3** The oil **is checked** every morning.   **4** The wall was **built** in 2009.   **5** It was written **with** a pencil.   **6** Only after that **is it** given.'));
out.push(A('Items 3 and 6 are the two that matter. **3** reverses the meaning of the sentence and is the commonest passive error in the series; **6** is the inversion, which is the only new word order in the unit.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** Fares says the **third** paragraph takes away the true reason: _it has been agreed that the staffing level is appropriate_, with no by whom, when or on what evidence — and then _staffing is therefore not to be recorded_, which is the sentence doing the work of the whole notice. Umm Kinan finds that the **fourth** paragraph is not true: _it has been confirmed that no faults are currently outstanding_, when the second trolley has been in the workshop since 2 February. And she says it is not a lie either — somebody has honestly read a list of reported faults, and the trolley is not on it, because there is no form for a trolley.'));
out.push(NOTE('_It is not true and it is not a lie either_ is the most grown-up sentence in the book so far, and it is the only useful posture for anybody who works in a large organisation. A confirmation made honestly out of a wrong list is answered by supplying the missing entry, not by accusing the confirmer. Rasha\'s round-book entry does exactly that.'));
out.push(S('Language box – explaining a notice written in the passive'));
out.push(A('No exercises. Use it as the checklist for Stage 3. The two questions to drill are _what does it actually require of me?_ and _by whom, when, and on what evidence?_ Everything else in the box follows from those.'));
out.push(S('Stage 3 · Practise (sample – Notice A, the school)'));
out.push(SAMPLE([
  'It is six sentences and there is nobody in any of them. What it actually requires is one thing: get the marks in by the Friday, and if they are late, write a reason.',
  'The sentence doing the work is "class size is therefore not to be given as a reason", and it is held up by the one before it — "it has been agreed that the current class sizes are appropriate" — and we are not told by whom, when, or on what evidence.',
  'What I would write is the reason they have forbidden, with the number next to it, and then their own sentence agreed with: "Marks submitted Monday. Reason: 34 in the class, which is the agreed size." Then they have a choice between changing the agreement and reading thirty-one of those.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Notice A: it requires marks by Friday with a reason if late; the working sentence is _class size is therefore not to be given as a reason_. Notice B: it requires students not to use the lift; the working sentence is _the lift is to be used by staff only_, and everything around it is the permission to say so. Point out the difference between the two: A removes a reason, B removes a right — and A is the more common and the harder to answer.'));
out.push(S('Stage 4R · Report – mediation'));
out.push(A('Mark the decision at the end. The model report carries Rasha\'s notice accurately and then does one thing with it: _I decided to find out who signed the circular about my own department, by name, before I answer it, because I have been answering it as if it came from the building._ That is the mediation skill at B1 — carry somebody else\'s document faithfully, then act on your own.'));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 1'));
out.push(A('**1** B   **2** B   **3** B   **4** A   **5** B'));
out.push(A('_Notes:_ Part 1 is five short texts and the wrong options are nearly always (i) the opposite, or (ii) a true statement that is not what the notice is **for**. In **1**, C is the opposite; in **2**, A and C are both the opposite; in **3**, A is true as far as it goes and misses the two facts the notice exists to give; in **5**, C is true of nothing and A is what the reader would have done without the notice.'));
out.push(NOTE('Reading Part 1 is worth five marks and takes four minutes, and students lose marks on it by reading for the topic rather than for the **instruction**. Teach one question: what does this notice want me to **do differently**? Every correct answer in Part 1 is the answer to that question.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'It is six sentences and there is nobody in any of them. What it actually requires is that the round is finished in the allocated time, and that if it is not, a reason is written in the book.',
  'The sentence doing the work is "staffing is therefore not to be recorded as a reason", and it is held up by "it has been agreed that the staffing level on this ward is appropriate to the workload" — and we are not told by whom, when, or on what evidence.',
  'The one nobody will notice is "it has been confirmed that no faults are currently outstanding on this ward", which is not true, because the second trolley has been in the workshop since 2 February. It is not a lie either: somebody read the list of reported faults honestly, and the trolley is not on it, because there is no form for a trolley.',
  'What I am going to write is: "Round completed 03.25. Reason: one trolley. The second trolley was taken to the workshop on 2 February and has not been returned. Staffing was two, which is the establishment." And I am going to photograph the page, because the book stays on the ward.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 1 (sample, 149 words)'));
out.push(SAMPLE([
  'Dear Sam,',
  'Yes, it is completely normal, and the reason is duller than it looks. Notices like that are written in two minutes by somebody who does not want to name a colleague in front of forty people, in the words that notices come in. Most of it is not hiding; it is a form of words that takes the people out for you.',
  'To find what it requires, ignore everything that begins "it has been" and look for the sentences with _are to be_ in them. Those are the instructions. There are usually only one or two, and your notice is probably nine sentences long.',
  'Then ask one question of every "it has been": by whom, when, and on what evidence? If none of the three can be answered, that sentence is there to close a question, not to answer one.',
  'When you reply, write the fact the notice would rather you did not use, put a date on it, and then agree with their own sentence in your next line. That way they cannot answer you with the thing they have already said.',
  'Tell me what it turns out to require. I am guessing two things.',
  'Yours, Lubna',
]));
out.push(S('Unit 5 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** a   **2** b   **3** b   **4** b   **5** c   **6** b   **7** a   **8** a'));
out.push(A('_Notes:_ **4** _by hand_ is the fixed phrase, so _by_ even though nobody is named. **5** a person, so _by_. **7** _so it is no longer splitting_ asks about now: present perfect passive. **8** _has not been withdrawn_ — the participle cannot be dropped.'));
out.push(S('Unit 5 check  ·  B  Listening (Part 1, three options) – Track 5.15'));
out.push(A('**1** A   **2** C   **3** B   **4** B   **5** C   **6** B   **7** A'));
out.push(A('Extract **2** names three dates and asks for only one: the year the **room** was divided, not the year the building went up or the floor was extended. That is the standard Part 1 trap and it is worth replaying.'));
out.push(S('Unit 5 check  ·  C  Writing (sample, 157 words)'));
out.push(SAMPLE([
  '**TAKING A SAMPLE TO THE SECOND FLOOR** · Y. Mansour',
  '**Before it is picked up.** The form is read. The label is checked against the form and against the band, and the time on the label is read. Nothing is picked up if the label and the form do not agree; the tube is left where it is and the ward is telephoned.',
  '**On the way.** The tube is carried upright in the rack and not in a pocket. The rack is signed out of the ward and signed in at the laboratory door, and the two signatures are what makes the half hour in between somebody\'s.',
  '**On arrival.** The tube is logged, the time is entered, and the form is kept with the tube until the result is written.',
  '**The two that must never be swapped** are the label check and the picking up. Once a tube has left the ward, nothing about which patient it came from can be established by anybody.',
  '**Things that are not steps.** Upright is not fussiness. And a tube with a disagreeing label is never corrected at the ward — it is taken again.',
]));
out.push(S('I can… (Unit 5)'));
out.push(A('Self-assessment; no answers. Lines 5 and 6 — naming which of the four reasons a passive is using, and putting the people back into somebody else\'s sentence — are the two that matter. A class that ticks the first four and not those two has learnt a tense and missed the unit.'));
out.push(box('Looking ahead to Unit 6', [
  'Unit 5 ended on a notice that tells people what they must do without ever using the word _must_. Unit 6 uses it: _must · have to · don\'t have to · mustn\'t · be allowed to · be supposed to_. The organising question is the one 5.5 and 5.7 have already asked in another form — **who is obliging whom?** — and 6.6 puts the passive and obligation together, which is where notices come from.',
  'The Unit 5 NEXT box asks for **three rules: one you agree with, one you do not, and one nobody has ever explained to you**. The third column is what 6.1 opens on and what 6.7 is built from. Collect it.',
  'Two threads to carry. **6.3** contains one line, in the middle of a dialogue about something else, in which Mr Fouad gives Umm Kinan the forty minutes she asked for in 4.5; do not draw attention to it, and do not let the class miss it either. And Fares\' application is answered in **7.4**.',
  'After Unit 6 comes the **Mid-Book Test**: four papers, sixty marks, Units 1–6. Reading 20 · Writing 15 · Listening 15 · Speaking 10.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 5 · Answer Key');
