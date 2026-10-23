// Proactive Business English A2 · Syria Edition · Book 1 · Unit 9 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'duty · take over · responsible for · in charge of · cover · stand in · authorise · permission · approval · grant · rota · line manager · job description · probation · induction · appraisal · absence · leave · annual leave · sick leave · notice · policy · procedure · breach · disciplinary · confidential';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 9  Duties, Rules and Permission'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**9.1**  say what you are responsible for, and what you only help with',
  '**9.2**  give a company rule, and explain the reason behind it',
  '**9.3**  say what is necessary and what is not',
  '**9.4**  ask permission, and answer somebody who asks you',
  '**9.5**  take a message when the person they want is out',
  '**9.6**  write a short work email with the phrases everybody uses',
  '**9.7**  Review & Mediate: tell a colleague what the staff rules say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('One month in — before you start', [
  'Nour has been at Sham Trading for a month. Her **probation** ends after three months; at the end of it Mr Ayoub writes two pages and they talk for an hour.',
  'Nothing at Sham Trading is written down about duties except a half-page from 2011 that still mentions a fax machine. In this unit Nour writes the first real **job description** the company has had — for the person who comes after her.',
  '**The rota** for the trade counter is on the noticeboard. **Annual leave** is asked for two weeks in advance; **sick leave** is a telephone call before eight, to a person, not a message.',
], C.lyellow, C.orange));

// ======================= CYCLE 9.1 =======================
out.push(pb());
out.push(h2('9.1  I look after the orders and the post'));
out.push(p('**Function:** saying what you are responsible for   ·   **Grammar:** _be responsible for / look after / be in charge of_   ·   **Pronunciation:** stress on the thing, not the verb'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Write three things you are **responsible for** at work or at home, and two things you only **help with**. What is the difference?'));
out.push(table(['I\'m responsible for…', 'I only help with…'], [['', ''], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Which verb? _I\'m responsible ______ the orders. · I look ______ the post. · She\'s in charge ______ the warehouse. · I help ______ the stock count._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is Mr Ayoub asking?   **A** Nour is leaving   **B** he is writing something down   **C** somebody complained'));
out.push(p('**b**  Listen again. **1** Name two things Nour is responsible for.   **2** What does she only help with?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.1  What exactly do you do?', [
  ['Mr Ayoub', 'Nour, I\'m writing the job description. Not for you — for the person after you. What exactly do you do?'],
  ['Nour', 'That\'s a bigger question than it sounds.'],
  ['Mr Ayoub', 'It always is. Start with what is yours.'],
  ['Nour', 'I\'m responsible for the orders — from the telephone call to the delivery note. I\'m responsible for the diary, the post, and the stock card now.'],
  ['Mr Ayoub', 'And the counter?'],
  ['Nour', 'I look after the counter when Hala isn\'t there, but I\'m not in charge of it. That\'s different.'],
  ['Mr Ayoub', 'Say the difference.'],
  ['Nour', 'If the counter money is wrong, Hala finds it and tells Nadia. If an order is wrong, nobody finds it except me. That\'s what responsible means.'],
  ['Mr Ayoub', 'Write that sentence down exactly as you said it.'],
  ['Nour', 'And I help with the stock count twice a month. I don\'t decide anything there — Abu Yasser does.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – saying what is yours**',
  table(['Pattern', 'How strong', 'Example'], [
    ['**be responsible for** + noun / **-ing**', 'strongest — it is yours', 'I\'m **responsible for** the orders.'],
    ['**be in charge of** + noun', 'you decide, and others do it', 'Abu Yasser is **in charge of** the warehouse.'],
    ['**look after** + noun', 'you do it, day to day', 'I **look after** the post.'],
    ['**help with** + noun / **-ing**', 'you assist; somebody else owns it', 'I **help with** the stock count.'],
    ['**deal with** + noun', 'it comes to you when it happens', 'I **deal with** the complaints.'],
  ], [1.6, 1.4, 1.6]),
  '⚠ The prepositions do not swap: responsible **for** · in charge **of** · look **after** · help **with**. Learn them with the phrase, not separately.',
  '⚠ **Responsible** means _if it goes wrong, nobody else will find it_. That is the test, and it is worth saying out loud in any workplace.',
  '**Practise:** Complete with the right phrase and preposition.',
  '1 I\'m ______ the orders.  2 She\'s ______ the whole warehouse.  3 I ______ the post every morning.  4 I only ______ the stock count.  5 He ______ the complaints when they come.',
  '**Useful phrases:**  That\'s a bigger question than it sounds.  ·  Start with what is yours.  ·  I\'m not in charge of it.  ·  That\'s different.  ·  I don\'t decide anything there.',
  '**Pronunciation – stress the thing.** 🔊 **Track 9.2** Listen. The strong word is the **job**, not the verb: _I\'m responsible for the **ORDers**_ · _I look after the **POST**_. Repeat the six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is writing a job description; B says what is theirs, what they help with, and the difference. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I\'m writing __________. What exactly do you do?'],
  ['B', 'That\'s a bigger question than it sounds.'],
  ['A', 'Start with what is yours.'],
  ['B', 'I\'m responsible for __________ — from __________ to __________. I\'m responsible for __________ and __________.'],
  ['A', 'And __________?'],
  ['B', 'I look after __________ when __________, but I\'m not in charge of it. That\'s different.'],
  ['A', 'Say the difference.'],
  ['B', 'If __________ goes wrong, __________. If __________ goes wrong, nobody finds it except me.'],
]));
out.push(table(['Role card 1 — a pharmacy assistant', 'Role card 2 — a site foreman'], [[
  'Responsible for: the shelves, the order to the wholesaler, the fridge temperatures. Looks after: the till when the pharmacist is out. Helps with: the monthly count. Not in charge of: anything behind the counter.',
  'Responsible for: the men on site, the materials, the daily report. In charge of: the whole site when the engineer is away. Helps with: the drawings. Not in charge of: the money or the hiring.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that explains the difference between _responsible for_ and _helps with_.'));
out.push(PHRASE_CARD(['I\'m responsible for…', 'I look after…', 'I\'m not in charge of it.', 'I help with…', 'That\'s different.', 'nobody finds it except me']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Interview **three** colleagues about their real jobs. For each one, find **one** thing they are responsible for that nobody else knows about.'));
out.push(table(['Name', 'Responsible for', 'Helps with', 'The hidden one'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is responsible for _______ and _______. He / She only helps with _______. The thing nobody knows is _______._'));
out.push(p('**Listener task:** write the hidden duty that surprised you most. Who would do it if that person left tomorrow?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _responsible of_ and _in charge for_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the job description Nour wrote, and answer the questions.'));
out.push(box(null, [
  '**ADMINISTRATIVE ASSISTANT — what the job actually is**   ·   written by Nour Mansour, April',
  '**You are responsible for:** every order from the telephone call to the signed delivery note · the diary and the meeting room · the post, in and out · the stock card, with the warehouse · the office stationery.',
  '**You look after (day to day, but somebody else owns it):** the trade counter when Hala is not there · the tea for visitors, which matters more than it sounds.',
  '**You help with:** the stock count, twice a month. Abu Yasser decides; you count.',
  '**You are not responsible for:** money, invoices or any promise about a payment date — that is Nadia · signing anything over 500,000 — that is Mr Ayoub · prices — nobody but Mr Ayoub.',
  '**The test.** If an order goes wrong, nobody will find it except you. That is what the first list means. Read it again with that sentence in mind.',
  '**The part that is not written anywhere else.** You are the person who telephones before people ask. Half of this job is thirty seconds on the telephone that nobody has asked you to make.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which list does the trade counter belong to, and why?'));
out.push(item('2', 'What is "the test", and what does it decide?'));
out.push(item('3', 'What does the last paragraph add that the lists cannot?'));
out.push(box('Writer\'s box', [
  '**Shape of a job description that is actually true:** **responsible for** → **look after** → **help with** → **not responsible for**, naming who is → **the test** → **the part that is not written anywhere else**.',
  'The **not responsible for** list is the most useful one. A new person who does not know where their job stops either does too much or asks about everything.',
  'Name the **person** who owns each thing you do not: _that is Nadia_. A boundary with nobody on the other side of it is not a boundary.',
  '⚠ Every real job has a part that is not in any list — the telephone call nobody asked for, the thing you notice because you sit where you sit. Write it down. It is the half of the job the next person will otherwise take a year to find.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the job description for **your** job, as it really is (25 words or more). Use the frame.'));
out.push(p('**______________ — what the job actually is**  ·  ______________.  **You are responsible for:** ______________.  **You look after:** ______________.  **You help with:** ______________. ______________ decides.  **You are not responsible for:** ______________ — that is ______________.  **The test.** If ______________ goes wrong, ______________.  **The part that is not written anywhere else.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "The four lists are clear and the test sentence is strong. In _not responsible for_, you haven\'t said who **is** responsible for the prices."',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Be somebody starting that job on Sunday. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four lists, and the fourth is not empty', ''],
  ['Every _not responsible for_ names a person', ''],
  ['_responsible **for** · in charge **of** · look **after** · help **with**_', ''],
  ['The unwritten part of the job', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "part that is not written anywhere else". The class says which one would be hardest to replace.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about somebody whose job looks simple from outside and is not (35 words or more). Say what they are really responsible for, and what would happen if they stopped doing it.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I had never thought about that._   ✓ _What would happen if…?_   ? _a question about the job_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Which job would stop a workplace fastest if nobody did it for a week?'));
out.push(box('Homework', ['Write your final text. Then write the four lists for somebody in your home — who is responsible for what, who only helps, and who nobody has ever asked (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.2 =======================
out.push(pb());
out.push(h2('9.2  Everybody must sign the book'));
out.push(p('**Function:** giving a company rule and its reason   ·   **Grammar:** _must_ for company rules   ·   **Pronunciation:** the flat rule voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three rules at your workplace. For each one, can you say **why** it exists? If not, who would know?'));
out.push(p('**b**  Which is a **company rule** and which is **the law**? _You must wear a badge. · You must have a contract. · You must sign in. · You must be paid for overtime._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the new rule about?   **A** badges   **B** signing in   **C** the stock book'));
out.push(p('**b**  Listen again. **1** Why must everybody sign in?   **2** What happened in 2019?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.3  Why we sign the book', [
  ['Hala', 'Nour, why must I sign the book? Everybody knows I\'m here — they can see me.'],
  ['Nour', 'They can see you. The fire list can\'t.'],
  ['Hala', 'The fire list?'],
  ['Nour', 'If the building is emptied, Abu Yasser takes the book to the gate and reads the names. If your name isn\'t in it, nobody looks for you. If it is in it and you went home at two, somebody goes back into the building to look for you.'],
  ['Hala', 'So it works in both directions.'],
  ['Nour', 'Both directions. That\'s why you sign **out** as well, and why it matters more than it looks.'],
  ['Hala', 'Has it ever happened?'],
  ['Nour', 'In 2019 there was smoke in the store room — a cable, not a fire. Everybody went to the gate. Two names in the book weren\'t there, and Abu Yasser went back in for them.'],
  ['Hala', 'And were they in the building?'],
  ['Nour', 'They were in the café across the street. He went into smoke for two men drinking tea. He has never said one word to them about it, and everybody signs out now.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – must for company rules**',
  table(['Form', 'Use', 'Example'], [
    ['**must** + plain verb', 'the rule, for everybody', 'Everybody **must sign** the book.'],
    ['**must not / mustn\'t**', 'forbidden', 'You **mustn\'t** take a file home.'],
    ['**has to / have to**', 'the same, but it comes from outside', 'We **have to** keep records for five years.'],
    ['**Why?** + **because** + the reason', 'the half that makes it work', 'Because the fire list is made from it.'],
  ], [1.3, 1.5, 1.8]),
  '⚠ _must_ and _have to_ are both correct here. The small difference: **must** sounds like _we decided this_; **have to** sounds like _somebody else decided this_. A manager says _you must_; a manager explaining the tax office says _we have to_.',
  '⚠ A rule without its reason is obeyed until the first inconvenient day. **Give the reason with the rule, every time**, even when it seems obvious — especially then.',
  '**Practise:** Give the rule, then the reason.',
  '1 sign the book  2 wear the badge  3 write it on the stock card  4 read the order back  5 keep the invoice for five years',
  '**Useful phrases:**  Why must I…?  ·  It works in both directions.  ·  That\'s why…  ·  Has it ever happened?  ·  …more than it looks.',
  '**Pronunciation – the flat rule voice.** 🔊 **Track 9.4** Listen. A rule is said **flat and unhurried**, not loudly: _Everybody must sign the book._ Then the reason gets the warmth. A rule shouted sounds like an argument; a rule said flatly sounds like weather.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks why a rule exists; B gives the reason and a real story. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Why must I __________? Everybody knows __________.'],
  ['B', 'They do. __________ can\'t.'],
  ['A', '__________?'],
  ['B', 'If __________, __________. If __________, __________.'],
  ['A', 'So it works in both directions.'],
  ['B', 'Both directions. That\'s why __________.'],
  ['A', 'Has it ever happened?'],
  ['B', 'In __________ there was __________. __________.'],
]));
out.push(table(['Role card 1 — a clinic', 'Role card 2 — a bakery'], [[
  'Rule: write the time on every sample. Reason: a sample taken at eight and tested at four gives a wrong result. Story: in 2021 a patient was treated for something she did not have.',
  'Rule: nobody takes the last tray out without writing the number. Reason: the morning count decides the next day\'s flour. Story: one week they baked 200 extra loaves for four days running.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the rule and the reason. Would you obey it on a busy day?'));
out.push(PHRASE_CARD(['Why must I…?', 'That\'s why…', 'It works in both directions.', 'Has it ever happened?', 'In 2019 there was…', '…more than it looks.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Each person brings **one** real rule from their workplace. In **threes**, ask each other _why?_ until you reach a reason that would survive a busy day — or until you find a rule nobody can explain.'));
out.push(table(['The rule', 'The reason given', 'Would it survive a busy day?'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.8, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _At _______\'s work everybody must _______, because _______. / Nobody could say why _______._'));
out.push(p('**Listener task:** write the rule nobody could explain. Should it stay?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _must to sign_ and _he musts_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the staff rules Nour rewrote for the noticeboard, and answer the questions.'));
out.push(box(null, [
  '**STAFF RULES — the five that matter**   ·   Sham Trading Co., April',
  '**1  Everybody signs the book, in and out.** Because the fire list is made from it, and it works in both directions: a missing name means nobody looks for you; an uncrossed name means somebody goes back into the building for you.',
  '**2  Nothing leaves the yard without a delivery note.** Because a load with no paper is a load nobody can prove we sent — and the person who loses by that is the driver, not the company.',
  '**3  Anything taken off a shelf is written on the stock card the same hour.** Because "about a hundred" turned out to be nineteen, two weeks ago, and the Homs order nearly did not go.',
  '**4  Customer information stays in this building.** Names, numbers, what they buy, what they pay. Not because of a law — because a customer who finds his prices in a competitor\'s hand never comes back.',
  '**5  Nobody signs for anybody else.** Not for a delivery, not in the book, not on an invoice. Not even to help. Especially not to help.',
  '_There is no rule here about tea, dress, telephones or the radio in the warehouse. There are five rules because five can be remembered._',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which rule protects the driver rather than the company?'));
out.push(item('2', 'Why is rule 4 not about the law?'));
out.push(item('3', 'Why are there only five rules?'));
out.push(box('Writer\'s box', [
  '**Shape of a rules page:** a numbered rule in **bold**, as a short sentence → **Because…** and the real reason → where there is one, the **story** that made the rule → at the end, a line saying what is deliberately **not** a rule.',
  'Keep the list **short enough to remember**. Five rules with reasons work; twenty rules with none are decoration on a wall.',
  'Where a rule exists because of something that happened, **say so**. _"About a hundred" turned out to be nineteen_ is worth more than any amount of _it is important to_.',
  '⚠ The last line matters: say what is **not** a rule. It tells people the list is the whole list, and stops a culture where everything feels forbidden and nothing is.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the five rules that matter for **your** workplace, home or class (25 words or more). Use the frame.'));
out.push(p('**______________ — the ______ that matter**  ·  ______________.  **1  ______________.** Because ______________.  **2  ______________.** Because ______________ — and ______________.  **3  ______________.** Because ______________.  **4  ______________.** Not because of ______________ — because ______________.  **5  ______________.** Not ______________. Especially not ______________.  _There is no rule here about ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read as somebody who is in a hurry and does not like being told. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every rule has its reason', ''],
  ['At least one reason is a real story', ''],
  ['Few enough rules to remember', ''],
  ['A line about what is **not** a rule', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one rule and its reason. The class says whether the reason would hold at five o\'clock on a Thursday.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule you follow carefully and one you quietly ignore (35 words or more). Say what the difference is. Be honest; nobody will see it but your partner.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I ignore that one too._   ✓ _What would make you follow it?_   ? _a question about the rule_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Without naming anybody, collect on the board the **reasons** people follow rules. How many of them are "somebody explained it to me"?'));
out.push(box('Homework', ['Write your final text. Then rewrite the worst-written rule you have ever seen, with its reason, in two sentences (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.3 =======================
out.push(pb());
out.push(h2('9.3  You don\'t have to come in on Saturday'));
out.push(p('**Function:** saying what is necessary and what is not   ·   **Grammar:** _have to / don\'t have to_   ·   **Pronunciation:** _have to_ /hæftə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name two things you **have to** do at work and two things you **don\'t have to** do but most people do anyway.'));
out.push(p('**b**  True or false, in your workplace? _We have to work on Saturday. · We don\'t have to wear a uniform. · We have to ask before taking leave. · We don\'t have to answer the telephone after five._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala think she must do?   **A** work Saturdays   **B** buy a uniform   **C** stay until five'));
out.push(p('**b**  Listen again. **1** What does she **not** have to do?   **2** What does she have to do that she did not know about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.5  What you have to do and what you don\'t', [
  ['Hala', 'Nour, about Saturday. What time do I have to come?'],
  ['Nour', 'You don\'t have to come on Saturday. We\'re closed.'],
  ['Hala', 'But Abu Yasser was here last Saturday. I saw the gate open.'],
  ['Nour', 'He comes in sometimes when a lorry is coming from the coast. He doesn\'t have to. Nobody asks him and nobody pays him extra. He does it because he doesn\'t trust Saturday drivers.'],
  ['Hala', 'And the uniform? I bought a dark skirt.'],
  ['Nour', 'You don\'t have to wear anything particular. Nothing is written. But at the counter people look at you before they listen to you, so most of us dress for that. Your own choice.'],
  ['Hala', 'All right. Anything I have to do that I don\'t know about?'],
  ['Nour', 'One thing. If you\'re ill, you have to telephone before eight — and to a person, not a message. Mr Ayoub answers from half past seven.'],
  ['Hala', 'Why to a person?'],
  ['Nour', 'Because a message is read at ten, and by ten somebody has opened the counter alone and the morning is already difficult.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – have to / don\'t have to**',
  table(['Form', 'Meaning', 'Example'], [
    ['**have to / has to**', 'it is necessary', 'You **have to** telephone before eight.'],
    ['**don\'t / doesn\'t have to**', 'it is **not** necessary — you may if you like', 'You **don\'t have to** come on Saturday.'],
    ['**mustn\'t**', 'it is **forbidden**', 'You **mustn\'t** sign for anybody else.'],
    ['**did you have to…?**', 'past', '**Did** you **have to** work last Saturday?'],
  ], [1.4, 1.6, 1.8]),
  '⚠ **don\'t have to ≠ mustn\'t.** _You **don\'t have to** come_ = stay at home if you like. _You **mustn\'t** come_ = do not come. In Unit 6 this cost a parking space; here it costs somebody their Saturday.',
  '⚠ _have to_ has **-s** in the third person: _he **has to**_, and the question needs _do / does_: _**Does** he **have to** come?_',
  '**Practise:** _have to_, _don\'t have to_ or _mustn\'t_?',
  '1 You ______ telephone before eight if you are ill.  2 You ______ come on Saturday; we\'re closed.  3 You ______ sign for anybody else.  4 He ______ wear a uniform, but he does.  5 We ______ keep the invoices for five years.',
  '**Useful phrases:**  What time do I have to…?  ·  You don\'t have to…  ·  Nobody asks him and nobody pays him.  ·  Your own choice.  ·  Anything I have to do that I don\'t know about?',
  '**Pronunciation – have to.** 🔊 **Track 9.6** Listen and repeat: _have to_ /ˈhæftə/ · _has to_ /ˈhæstə/ · _don\'t have to_ /dəʊnt ˈhæftə/. The **v** becomes **f**. Said with a /v/ it is correct and slow; said with /f/ it is normal speech.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is new and asks what is necessary; B separates the rules from the habits. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'About __________. What time do I have to __________?'],
  ['B', 'You don\'t have to __________. __________.'],
  ['A', 'But __________ was here __________. I saw __________.'],
  ['B', 'He / She __________ sometimes when __________. He / She doesn\'t have to. Nobody __________ and nobody __________.'],
  ['A', 'And __________?'],
  ['B', 'You don\'t have to __________. Nothing is written. But __________, so most of us __________. Your own choice.'],
  ['A', 'Anything I have to do that I don\'t know about?'],
  ['B', 'One thing. If __________, you have to __________ — and __________, not __________.'],
]));
out.push(table(['Role card 1 — a restaurant', 'Role card 2 — a school'], [[
  'Not necessary: arriving before eleven, buying your own knives, staying for the staff meal. Necessary: telling the kitchen before you leave the building; washing hands at the sink by the door, not the back one.',
  'Not necessary: staying after four, decorating your classroom, joining the trip. Necessary: handing in the register before noon; telling the office before you change a lesson time.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write two lists — **must** and **everybody does but nobody has to**. Which was longer?'));
out.push(PHRASE_CARD(['Do I have to…?', 'You don\'t have to…', 'Nobody asks him.', 'Nothing is written.', 'Your own choice.', 'You have to… before…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues what is **really** necessary at their work and what everybody does anyway. Write the second list carefully: it is where workplaces actually live.'));
out.push(table(['Name', 'Really has to', 'Does anyway', 'Why they do it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.3, 1.3, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ has to _______. He / She doesn\'t have to _______, but he / she does it, because _______._'));
out.push(p('**Listener task:** write the unpaid, unasked thing that most people in the class do. Why do they do it?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _mustn\'t_ where _don\'t have to_ is meant, and _he have to_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour writes for new staff, and answer the questions.'));
out.push(box(null, [
  '**WHAT YOU HAVE TO DO, AND WHAT YOU DON\'T**   ·   for anybody in their first month',
  '**You have to:** sign in and out · telephone **a person** before eight if you are ill · ask for annual leave two weeks before · write anything you take off a shelf on the stock card, the same hour · tell somebody before you leave the building in working hours.',
  '**You don\'t have to:** come in on Saturday · wear anything particular · answer the telephone after four · eat with everybody — though you will be asked every day, and that is not pressure, it is how people here say they like you.',
  '**You mustn\'t:** sign for anybody else · take customer information out of the building · agree a price or a payment date unless it is your job.',
  '**The difference between the second list and the first.** Nobody will say anything if you do not come on Saturday. If you do not telephone before eight, somebody opens the counter alone and the whole morning is harder — and they will not say anything about that either. That is why it is written here.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What must you do if you are ill, and why that way?'));
out.push(item('2', 'What does the page say about eating with everybody?'));
out.push(item('3', 'What does the last paragraph explain?'));
out.push(box('Writer\'s box', [
  '**Shape of a "what you have to do" page:** **have to** → **don\'t have to** → **mustn\'t** → a paragraph explaining **why the lists are different**.',
  'The **don\'t have to** list is the kind one. A new person spends their first month afraid of invisible rules; this list is where that fear goes to die.',
  'Explain the **cost of not doing** the necessary things — _somebody opens the counter alone_. Workplaces where nobody complains are exactly the workplaces where the cost must be written down.',
  '⚠ Where a habit is warm rather than required, say so: _that is not pressure, it is how people here say they like you_. A new person cannot tell the difference, and most do not ask.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page for somebody joining **your** workplace, family or class (25 words or more). Use the frame.'));
out.push(p('**WHAT YOU HAVE TO DO, AND WHAT YOU DON\'T**  ·  ______________.  **You have to:** ______________.  **You don\'t have to:** ______________ — though ______________.  **You mustn\'t:** ______________.  **The difference.** Nobody will say anything if ______________. If ______________, ______________ — and they will not say anything about that either.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be new, and nervous. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three lists, correctly separated', ''],
  ['_don\'t have to_ never used where _mustn\'t_ is meant', ''],
  ['At least one warm habit, explained as warm', ''],
  ['The cost of not doing a necessary thing', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _don\'t have to_ list. The class says which item they would still do anyway, and why.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you do at work or at home that nobody asks you to do (35 words or more). Say why you do it, and what would happen if you stopped.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _Somebody should notice this._   ✓ _What would happen if you stopped?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of the unasked things would be **missed immediately**? How many would be missed only after months?'));
out.push(box('Homework', ['Write your final text. Then write five sentences with _have to_, five with _don\'t have to_ and three with _mustn\'t_ about a place you know (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.4 =======================
out.push(pb());
out.push(h2('9.4  Is it OK if I leave at three?'));
out.push(p('**Function:** asking permission, and answering   ·   **Grammar:** _Is it OK if…? / Can I…? / Could I…?_   ·   **Pronunciation:** asking without apologising'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask for the same thing three ways, from most informal to most formal: _Can I…? · Is it OK if I…? · Could I possibly…? · Would it be possible to…?_'));
out.push(p('**b**  Which of these makes permission **easier** to give? _I have to leave at three. · Is it OK if I leave at three? I\'ll finish the orders first. · Can I go early? Everybody else does._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nour want to leave early?   **A** a family event   **B** a clinic appointment   **C** a journey'));
out.push(p('**b**  Listen again. **1** What does she offer?   **2** What does Mr Ayoub ask her to change?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.7  Leaving early on Wednesday', [
  ['Nour', 'Mr Ayoub, is it OK if I leave at three on Wednesday? I have the clinic.'],
  ['Mr Ayoub', 'Of course. Is everything all right?'],
  ['Nour', 'Nothing serious — it\'s been in the diary since March. I\'ll finish the orders before I go, and Hala can take the counter from two.'],
  ['Mr Ayoub', 'Does Hala know?'],
  ['Nour', 'Not yet. I wanted to ask you first.'],
  ['Mr Ayoub', 'That\'s the right order. Ask her today, not on Wednesday morning. And one change: don\'t leave at three. Leave at half past two.'],
  ['Nour', 'Half past two?'],
  ['Mr Ayoub', 'The clinic is in Mezzeh and you\'ll walk. If you leave at three you will run, and you will spend Wednesday morning worrying about three o\'clock instead of working.'],
  ['Nour', 'Thank you. Half past two.'],
  ['Mr Ayoub', 'And Nour — you don\'t have to tell me it isn\'t serious. "I have an appointment" is a complete sentence here.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – asking permission**',
  table(['Asking', 'How formal', 'Answering'], [
    ['**Can I** leave at three?', 'informal — a colleague', 'Of course.  ·  Yes, that\'s fine.'],
    ['**Is it OK if I** leave at three?', 'normal at work', 'Of course. Is everything all right?'],
    ['**Could I** leave at three?', 'a little more formal', 'Yes — but could you…?'],
    ['**Would it be possible to** leave at three?', 'formal, or a big ask', 'I\'m afraid not this week, because…'],
  ], [1.5, 1.3, 1.6]),
  '**The shape that gets a yes:** ask → say **when** → say what you will **do about it** (_I\'ll finish the orders; Hala can take the counter_) → **not** a long explanation.',
  '⚠ _Is it OK if I **leave**…_ — present tense after _if_, not _will leave_.',
  '⚠ You do not have to say why. Give a reason if you want to; _I have an appointment_ is complete. Learners often over-explain, which makes a small request sound like a big one.',
  '**Practise:** Ask permission, say when, and offer the cover.',
  '1 leave at three on Wednesday  2 take Thursday off  3 come in late on Sunday  4 use the boardroom for an hour  5 take the small van at lunchtime',
  '**Useful phrases:**  Is it OK if I…?  ·  Of course.  ·  I\'ll finish… before I go.  ·  I wanted to ask you first.  ·  That\'s the right order.  ·  …is a complete sentence.',
  '**Pronunciation – asking without apologising.** 🔊 **Track 9.8** Listen to the same request twice: once **apologetic and fast**, once **calm and normal**. The second gets a quicker yes. Repeat the five requests the second way.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks permission with cover; B agrees but changes one thing, for a good reason. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, is it OK if I __________ on __________? I __________.'],
  ['B', 'Of course. Is everything all right?'],
  ['A', 'Nothing serious. I\'ll __________ before I go, and __________ can __________.'],
  ['B', 'Does __________ know?'],
  ['A', 'Not yet. I wanted to ask you first.'],
  ['B', 'That\'s the right order. And one change: don\'t __________. __________.'],
  ['A', '__________?'],
  ['B', '__________. If you __________, you will __________.'],
]));
out.push(table(['Role card 1 — a day off for an exam', 'Role card 2 — the van at lunchtime'], [[
  'A wants Thursday off for a brother\'s exam results. B agrees but says: take Wednesday afternoon as well — you will be useless on Wednesday anyway.',
  'A wants the small van at lunchtime to move a fridge. B agrees but says: take Fadi, not alone — the last person who moved a fridge alone was off for two weeks.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **cover** that was offered, and the change the manager made. Was the change kind, or cautious, or both?'));
out.push(PHRASE_CARD(['Is it OK if I…?', 'Of course.', 'I\'ll finish… first.', 'I wanted to ask you first.', 'And one change:…', 'Thank you.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues for permission for something real — to leave early, to borrow something, to change a plan. Always offer the cover. Then be the one who answers.'));
out.push(table(['What I asked', 'The cover I offered', 'The answer'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.6, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked _______ if it was OK to _______. I offered _______. He / She said _______._'));
out.push(p('**Listener task:** write the request that got the fastest yes. Did it have cover?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Is it OK if I will leave_ and a request with no _if_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two permission emails, and answer the questions.'));
out.push(box(null, [
  '**Email 1 — Nour to Mr Ayoub**',
  '**Subject:** Wednesday 26 — leaving at 2.30',
  'Dear Mr Ayoub, Is it OK if I leave at 2.30 on Wednesday 26? I have an appointment. Before I go: the orders will be finished and sent, the post will be done, and Hala will take the counter from 2.00 — I have spoken to her and she is happy. Nothing is waiting on me after 2.30 except the Aleppo file, which is not urgent this week. If Wednesday is difficult, Thursday afternoon would also work for me. Nour',
  '**Email 2 — a different assistant, a different company**',
  '**Subject:** request',
  'Dear Sir, I would like to request permission to leave the office early on Wednesday due to a personal matter which I hope you will understand is unavoidable. I am sorry for any inconvenience caused. I will of course make up the time. Please let me know if this is acceptable.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does Email 1 tell the manager that Email 2 does not?'));
out.push(item('2', 'Which email takes longer to answer, and why?'));
out.push(item('3', 'What is in Email 2 that is not needed at all?'));
out.push(box('Writer\'s box', [
  '**Shape of a permission email:** the **date and the time in the subject line** → the ask, in one sentence → **what will be finished before you go** → **who is covering**, and that you have already spoken to them → what is waiting and whether it matters → **an alternative**, if there is one.',
  'Answer the manager\'s real question, which is never _why do you want to go?_ It is **_what happens here while you are away?_** Email 1 answers it in two lines; Email 2 never does.',
  'Say that you have **already spoken** to whoever is covering. It turns a request into a plan.',
  '⚠ Cut the apologies. _I am sorry for any inconvenience caused_ adds nothing, and three of them in one email make a reasonable request look like a problem.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a permission email for something real or invented (25 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________.  Dear ______________, Is it OK if I ______________ on ______________? ______________. Before I go: ______________, and ______________ will ______________ — I have spoken to ______________. Nothing is waiting on me except ______________, which ______________. If ______________ is difficult, ______________ would also work.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the manager, answering fifteen emails. Can you reply in **one word**? Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Date and time in the subject line', ''],
  ['What will be finished before you go', ''],
  ['Who is covering, and that you have asked them', ''],
  ['No apologies, and an alternative offered', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their emails. The class answers each one out loud. Which could be answered with _yes_ alone?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you asked permission for something important — at work, at school, at home (35 words or more). Say how you asked, what the answer was, and what you would change about the way you asked.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _You asked well._   ✓ _Did you offer anything?_   ? _a question about the answer_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In the ones where permission was refused, was it the request or the way of asking?'));
out.push(box('Homework', ['Write your final text. Then rewrite Email 2 from the Reading as it should have been written, in five sentences (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.5 =======================
out.push(pb());
out.push(h2('9.5  Can I take a message?'));
out.push(p('**Function:** taking a message   ·   **Grammar:** _can_ for offers and requests   ·   **Pronunciation:** reading a number back'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What are the **seven** things a telephone message must contain? Write as many as you can, then compare with a partner.'));
out.push(...lines(3));
out.push(p('**b**  Which is the offer and which is the request? _Can I take a message? · Can you spell that, please? · Can I ask who\'s calling? · Can you ask him to telephone me?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who does the caller want?   **A** Mr Ayoub   **B** Nadia   **C** Bassel'));
out.push(p('**b**  Listen again. **1** What is the caller\'s number?   **2** What does Nour do before the call ends?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.9  Taking a message while Mr Ayoub is out', [
  ['Nour', 'Sham Trading, good morning. Nour speaking.'],
  ['Caller', 'Good morning. Can I speak to Mr Ayoub?'],
  ['Nour', 'I\'m afraid he\'s at the bank until eleven. Can I take a message?'],
  ['Caller', 'Yes. It\'s Samer Haddad from Haddad Transport.'],
  ['Nour', 'Mr Haddad from Haddad Transport. Can I ask what it\'s about?'],
  ['Caller', 'The lorry hire for May. We can do the two Aleppo runs but not the Homs one, and he needs to know before he commits to the customer.'],
  ['Nour', 'Two Aleppo runs yes, Homs no, and he should know before he promises the customer. Can I have your number?'],
  ['Caller', 'Zero nine four four, three one eight, two six zero.'],
  ['Nour', 'Zero nine four four, three one eight, two six zero. Let me repeat the whole message: Mr Samer Haddad, Haddad Transport, about the May lorry hire — two Aleppo runs possible, Homs not possible. Please telephone before you commit. Zero nine four four three one eight two six zero.'],
  ['Caller', 'That\'s it exactly. You\'re the one who repeats things.'],
  ['Nour', 'I am. He\'ll telephone you before twelve.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – can for offers and requests, and the seven parts of a message**',
  table(['Offers (you → them)', 'Requests (you → them)'], [
    ['**Can I** take a message?', '**Can I** ask who\'s calling?'],
    ['**Can I** ask him to telephone you?', '**Can you** spell that, please?'],
    ['**Shall I** ask him to call before twelve?', '**Can I** have your number?'],
  ], [1.5, 1.5]),
  '**The seven parts:** **1** who the message is **for** · **2** who it is **from** · **3** their **company** · **4** **what** it is about · **5** what they **want** · **6** their **number** · **7** **when** you took it.',
  '⚠ Always **read the whole message back**, not only the number. The part that goes wrong is usually the _what they want_, not the digits.',
  '⚠ _I\'m afraid he\'s out_ is better than _he\'s not here_: it says you know where he is and when he is back. Add the time: _until eleven_.',
  '**Practise:** Take this message in seven parts: _Dima Shamsi, Shamsi Packaging, for Nour, about Tuesday\'s load — the wrap is on the lorry but the gloves are not; she will telephone at four; 0912 447 300._',
  '**Useful phrases:**  Can I take a message?  ·  Can I ask what it\'s about?  ·  Can I have your number?  ·  Let me repeat the whole message.  ·  He\'ll telephone you before…',
  '**Pronunciation – reading a number back.** 🔊 **Track 9.10** Listen. Numbers are said in **groups of three or four**, with a small stop between: _0944 ‖ 318 ‖ 260_. Never in one string. Repeat the four numbers, then say your own.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, back to back. A telephones with a message; B takes it in seven parts and reads it back. Then swap.'));
out.push(dlg(null, [
  ['A', 'Good morning. Can I speak to __________?'],
  ['B', 'I\'m afraid he\'s / she\'s __________ until __________. Can I take a message?'],
  ['A', 'Yes. It\'s __________ from __________.'],
  ['B', '__________ from __________. Can I ask what it\'s about?'],
  ['A', '__________. __________, and he / she needs to know __________.'],
  ['B', '__________. Can I have your number?'],
  ['A', '__________.'],
  ['B', '__________. Let me repeat the whole message: __________.'],
]));
out.push(table(['Role card 1 — a supplier', 'Role card 2 — a customer with a problem'], [[
  'Leila Jabr, Jabr Glass, for the foreman. The 6 mm glass is ready but the 4 mm is three weeks away. She needs to know today whether to send the 6 mm alone. 0933 612 404.',
  'Mr Darwish, Darwish Stores, for the manager. The last delivery was two boxes short and he has paid in full. He wants a call today, not a credit note. 0988 207 115.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs take their message for the class – **without the book**.'));
out.push(p('**Listener task:** tick the seven parts. Which one was missing? It is almost never the number.'));
out.push(PHRASE_CARD(['Can I take a message?', 'I\'m afraid he\'s… until…', 'Can I ask what it\'s about?', 'Can I have your number?', 'Let me repeat…', 'He\'ll telephone you before…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** real messages from colleagues (back to back). Write each one in seven parts and read it back. Then give the written message to the person it is for.'));
out.push(table(['For', 'From / company', 'About / wants', 'Number', 'Time taken'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [0.8, 1.2, 1.8, 1, 0.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Read out **one** message you took, exactly as you wrote it. The class decides whether the person could act on it without telephoning back.'));
out.push(p('**Listener task:** write the part most often missing in the class\'s messages.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _he is not here_ with no time, and a message with no _what they want_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message slip Nour leaves on Mr Ayoub\'s desk, and answer the questions.'));
out.push(box(null, [
  '**TELEPHONE MESSAGE**',
  '**For:** Mr Ayoub   **Taken by:** Nour   **Time:** Tuesday 25 April, 9.40 am',
  '**From:** Mr Samer Haddad   **Company:** Haddad Transport   **Tel:** 0944 318 260',
  '**About:** the lorry hire for May.',
  '**Message:** They can do the two Aleppo runs. They **cannot** do the Homs run. He asks you to telephone **before you promise anything to the customer**.',
  '**What I said:** that you would telephone him before twelve.',
  '**My note (not from him):** the Homs run is the one in the Tarabishi order. If Haddad cannot do it we need somebody by Thursday, because the order goes on the 2nd.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What exactly can Haddad Transport not do?'));
out.push(item('2', 'What did Nour promise on Mr Ayoub\'s behalf?'));
out.push(item('3', 'What is the last section, and why is it separate?'));
out.push(box('Writer\'s box', [
  '**Shape of a written message slip:** **for / taken by / time** → **from / company / number** → **about** → **the message**, in their words → **what I said** → optionally **my note**, clearly marked as yours.',
  'Keep the message **in the caller\'s words** and your own thinking **in a separate box**. Mixing them is how a message becomes an argument about who said what.',
  'Write **what you promised**. If you told the caller somebody would telephone before twelve, that person needs to know, or your promise becomes their broken one.',
  '⚠ The _my note_ line is where an assistant becomes useful rather than merely accurate: it connects the message to something the reader has not yet thought about.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message slip from a real or invented call (25 words or more). Use the frame.'));
out.push(p('**TELEPHONE MESSAGE**  **For:** ______  **Taken by:** ______  **Time:** ______________.  **From:** ______________  **Company:** ______________  **Tel:** ______________.  **About:** ______________.  **Message:** ______________.  **What I said:** ______________.  **My note (not from him / her):** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the person the message is for, reading it at four o\'clock. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All seven parts', ''],
  ['The message is in the caller\'s words', ''],
  ['What was promised on your behalf', ''],
  ['Your own note is marked as yours', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _my note_ line. The class says which one saved the reader the most time.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a message that went wrong — one you took, or one somebody took for you (35 words or more). Say which part was missing and what it cost.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _That happens all the time._   ✓ _Which part was missing?_   ? _a question about what happened after_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the missing parts on the board. Count them: which of the seven fails most often?'));
out.push(box('Homework', ['Write your final text. Then design your own message slip on half a page, with the seven parts, and photocopy it for your workplace (20+ words of explanation).'], C.lblue, C.navy));

// ======================= CYCLE 9.6 =======================
out.push(pb());
out.push(h2('9.6  Please find attached'));
out.push(p('**Function:** writing a short work email   ·   **Grammar:** the fixed phrases   ·   **Pronunciation:** reading an email aloud before you send it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which of these have you written in an email? _Please find attached · Thanks in advance · I look forward to hearing from you · As discussed · Please let me know · Kind regards_'));
out.push(p('**b**  Which **one** of them is useless, and why? Discuss with a partner before you look at the Language box.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the email?   **A** it is rude   **B** it is too long and says nothing   **C** it has a mistake in the figures'));
out.push(p('**b**  Listen again. **1** What does Nadia cut first?   **2** What does she say about "thanks in advance"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.11  Cutting an email in half', [
  ['Nour', 'Nadia, can you read this before I send it? It\'s to the head office about the stock card.'],
  ['Nadia', 'Read it to me.'],
  ['Nour', '"Dear colleagues, I hope this email finds you well. I am writing to inform you that further to our recent discussions we have implemented a revised stock card procedure…"'],
  ['Nadia', 'Stop. What do you want them to do?'],
  ['Nour', 'Approve it, and send me the new form number.'],
  ['Nadia', 'Then that is the first line. Not the fourth paragraph — the first line.'],
  ['Nour', 'But it sounds abrupt.'],
  ['Nadia', 'It sounds clear. Cut "I hope this email finds you well" — nobody has ever been helped by that sentence. Keep "as discussed", it does real work: it reminds them this isn\'t new.'],
  ['Nour', 'And "thanks in advance"?'],
  ['Nadia', 'Cut it. It thanks somebody for something they haven\'t agreed to do. People notice, even when they don\'t say so. Write "thank you" at the end, when they\'ve done it.'],
  ['Nour', 'So: what I want, why, by when, attached, kind regards.'],
  ['Nadia', 'Four lines. And they\'ll answer today instead of Thursday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the fixed phrases, and what each one is for**',
  table(['Phrase', 'What it does', 'Keep or cut'], [
    ['**Please find attached** the…', 'points at the file', '**Keep** — and name the file.'],
    ['**As discussed**, …', 'reminds them it is not new', '**Keep** — it does real work.'],
    ['**Please let me know** if…', 'invites a correction', '**Keep**, with a deadline.'],
    ['**I look forward to hearing from you.**', 'a polite close', '**Keep** for people outside the company.'],
    ['**Thanks in advance.**', 'thanks them before they agree', '**Cut.** It presumes.'],
    ['**I hope this email finds you well.**', 'nothing', '**Cut.**'],
  ], [1.6, 1.5, 1.5]),
  '**The shape of a short work email:** **what you want**, in the first line → **why**, in one sentence → **by when** → what is **attached** → a close.',
  '⚠ Put the ask **first**. A reader who finds the request in the fourth paragraph answers it in four days.',
  '**Practise:** Cut each one to a single useful sentence.',
  '1 _I hope this email finds you well. I am writing to inform you that we require approval._  2 _Further to our recent discussions, and as per your request, please find attached._  3 _Thanks in advance for your kind cooperation in this matter._',
  '**Useful phrases:**  Please find attached…  ·  As discussed, …  ·  Could you confirm by…?  ·  Please let me know if…  ·  Kind regards  ·  Thank you (afterwards)',
  '**Pronunciation – read it aloud before you send it.** 🔊 **Track 9.12** Listen to a four-line email read aloud. If a sentence is hard to say in one breath, it is hard to read. Read your own emails aloud; it is the fastest editing tool there is.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a long email aloud; B cuts it, line by line, and says why. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Can you read this before I send it? It\'s to __________ about __________.'],
  ['B', 'Read it to me.'],
  ['A', '"__________"'],
  ['B', 'Stop. What do you want them to do?'],
  ['A', '__________.'],
  ['B', 'Then that is the first line.'],
  ['A', 'But it sounds __________.'],
  ['B', 'It sounds clear. Cut __________. Keep __________ — it does real work.'],
]));
out.push(table(['Role card 1 — an email to a landlord', 'Role card 2 — an email to a supplier'], [[
  'The long version: three paragraphs of apology, then the ask hidden at the end — the water tank has been leaking for two weeks and needs replacing before the summer.',
  'The long version: four sentences of greeting and a summary of the whole year, then the ask — a price for 500 printed folders, needed by the 12th.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their editing for the class – **without the book**.'));
out.push(p('**Listener task:** write the **first line** of the finished email. Could you answer it without reading the rest?'));
out.push(PHRASE_CARD(['What do you want them to do?', 'That is the first line.', 'Cut…', 'Keep… — it does real work.', 'Please find attached…', 'Could you confirm by…?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write a real work email in **four lines**. Read it aloud to **two** colleagues. They must say what you want, from the first line alone.'));
out.push(table(['My email is about', 'What I want', 'Did they get it from line 1?'], [['', '', ''], ['', '', '']], [1.6, 1.6, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Read your four-line email to the class. The class answers it out loud, in one sentence.'));
out.push(p('**Listener task:** write the shortest email of the lesson that still did everything it had to.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Please find attached the file which I have attached_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions of the same email, and answer the questions.'));
out.push(box(null, [
  '**Before — 148 words**',
  'Dear colleagues, I hope this email finds you well. I am writing to inform you that further to our recent discussions regarding stock control, we have implemented a revised stock card procedure at the Mezzeh branch, which has been in operation since the beginning of the month and has, we are pleased to report, produced encouraging results in terms of the variance between physical and system stock. We would be most grateful if you could kindly review the attached document at your earliest convenience and advise us as to the appropriate form number to be allocated. Thanks in advance for your kind cooperation in this matter. Kind regards, Nour Mansour, Mezzeh.',
  '**After — 61 words**',
  '**Subject:** New stock card — approval and a form number, please, by 5 May',
  'Dear colleagues, Could you approve the attached stock card and send me a form number, by 5 May? As discussed in March, we rewrote it at Mezzeh; since 1 April the difference between the shelf and the system has fallen from 9 per cent to 2. Please find attached the card (one page) and three weeks of figures. Kind regards, Nour Mansour, Mezzeh',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the "after" version put in the first line?'));
out.push(item('2', 'What survives from the long version, and why does it survive?'));
out.push(item('3', 'What is in the subject line that is not in the "before" version at all?'));
out.push(box('Writer\'s box', [
  '**Shape of a short work email:** a **subject line with the ask and the date** → **what you want**, in the first sentence → **why**, with a number if you have one → **what is attached**, and how long it is → a close.',
  'Numbers survive cutting; adjectives do not. _Encouraging results_ went; _from 9 per cent to 2_ stayed, and it is the whole argument.',
  'Say **how long** the attachment is — _one page_. People open short attachments immediately and long ones on Thursday.',
  '⚠ Cutting is not rudeness. The polite email is the one that respects the reader\'s time; 148 words of courtesy that hides the request is the impolite one.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take a long email you have written or received and cut it to under 70 words (25 words or more in your version). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, by ______.  Dear ______________, Could you ______________ by ______? As discussed, ______________; ______________ has ______________ from ______ to ______. Please find attached ______________ (______ page). ______________,  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the words. Then read **only the subject line and the first sentence** and say what is wanted. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The ask is in the subject line, with a date', ''],
  ['The ask is also the first sentence', ''],
  ['A number instead of an adjective', ''],
  ['Nothing that thanks them before they agree', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the before and after word counts. Did anything useful get lost?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the email you have been putting off (35 words or more). Four or five lines. Put the ask first, give one number, and set a date.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s email as the person receiving it. Write on a slip:  ★ _I can answer this now._   ✓ _Can you add a date?_   ? _the one thing I would still ask_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the emails on the wall. Find the one you would answer first, and count its words.'));
out.push(box('Homework', ['Write your final email — and **send it**. Then write three sentences about what happened, or about why you still have not sent it (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.7 =======================
out.push(pb());
out.push(h2('9.7  Review & Mediate: what do the staff rules say?'));
out.push(p('**Function:** telling a colleague, in simple words, what the staff rules say   ·   **Review:** responsibility · _must_ · _have to / don\'t have to_ · permission · messages · email phrases'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 9 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** responsible ___ · in charge ___ · look ___ · help ___',
  '**2** The test for _responsible for_, in one sentence.',
  '**3** The difference between _you mustn\'t_ and _you don\'t have to_.',
  '**4** The shape of a permission request that gets a yes.',
  '**5** The seven parts of a telephone message.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Hala worried about?   **A** the leave rules   **B** the confidentiality rule   **C** the sign-in book'));
out.push(p('**b**  Listen again. **1** What does "confidential" mean, in Nour\'s words?   **2** What is the one thing Hala really has to remember?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.13  The staff rules, explained', [
  ['Hala', 'Nour, the head office sent two pages of staff rules. There are words I don\'t know and one of them is "disciplinary". Should I be frightened?'],
  ['Nour', 'No. Let me go through it and tell you which parts are about you.'],
  ['Hala', 'Please.'],
  ['Nour', 'Most of it is about leave and hours and you already know those. The word "disciplinary" is there because every company has to write what happens if somebody does something serious. It isn\'t about you and it isn\'t about anything that has happened.'],
  ['Hala', 'And "confidential"?'],
  ['Nour', 'That one is about you, and it\'s simple: what customers tell us stays in this building. Their prices, their telephone numbers, what they buy, how much they owe. Not to your family, not to a friend who works at another company, not in a café.'],
  ['Hala', 'Even what they buy?'],
  ['Nour', 'Especially that. A competitor who knows what Tarabishi orders knows what to offer him.'],
  ['Hala', 'And if I\'m not sure?'],
  ['Nour', 'Then it\'s confidential. That\'s the one thing to remember from two pages.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a rules document that frightens people**',
  table(['To calm', 'To sort', 'To leave them with one thing'], [
    ['No. Should you be frightened? No.', 'Most of it is about ___ , and you already know those.', 'That\'s the one thing to remember from two pages: ___ .'],
    ['It isn\'t about anything that has happened.', 'This part **is** about you: ___ .', 'If you are not sure, ___ .'],
  ], [1.5, 1.8, 1.8]),
  '⚠ **Sort before you explain.** Most of any rules document is not about the person asking. Saying so first makes the rest short enough to hear.',
  '⚠ End with **one** sentence they can carry. Two pages mediated into six rules is still too many; two pages mediated into _if you are not sure, it stays in the building_ is a rule somebody can actually use.',
  '⚠ Translate the frightening word honestly: _every company has to write what happens if somebody does something serious_. Pretending a word does not mean what it means destroys the trust you need next time.',
  '**Practise:** The rules say: _Employees are reminded that all commercial information is confidential and that breach of confidentiality may result in disciplinary action._ Say it in easy English for somebody on their first week.',
  '**Useful phrases:**  Let me go through it.  ·  Most of it is about…  ·  This part **is** about you.  ·  It isn\'t about anything that has happened.  ·  That\'s the one thing to remember.',
  '**Pronunciation – the calm explanation.** 🔊 **Track 9.14** Listen. The calming sentences are **slow and low**; the one thing to remember at the end is **slower still**. Repeat the four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads document 1 silently and explains it to B, who is new and worried. B closes the book. Then swap with document 2.'));
out.push(table(['Document 1 — for A', 'Document 2 — for B'], [[
  '**STAFF HANDBOOK, 4.2 CONFIDENTIALITY.** _Employees are reminded that all commercial information, including but not limited to pricing, customer contact details and transaction histories, is confidential. Breach of confidentiality may result in disciplinary action up to and including termination._',
  '**STAFF HANDBOOK, 6.1 ABSENCE.** _Annual leave requires two weeks\' notice and the authorisation of the line manager. In the case of sickness absence, notification must be given by telephone to a named person before 08.00. Notification by message is not acceptable. Certification is required for absence exceeding three consecutive days._',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their document for the class – **without the book**.'));
out.push(p('**Listener task:** write the **one sentence** the speaker left them with. Is it something you could use tomorrow?'));
out.push(PHRASE_CARD(['Let me go through it.', 'Most of it is about…', 'This part is about you.', 'It isn\'t about anything that happened.', 'If you\'re not sure, …', 'the one thing to remember']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a page of rules in formal English. Read it silently. Then explain it to **two** colleagues who are new and worried. End each explanation with **one** sentence.'));
out.push(table(['Who I told', 'What I said was not about them', 'The one sentence I left them with'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the rules you mediated. This is the **ninth** unit of this book, and the mediation task comes back in every unit — so listen for the sentence at the end.'));
out.push(p('_It\'s a ______. Most of it is about ______. The part that is really about you is ______. The one thing to remember is ______._'));
out.push(p('**Listener task:** add any new office words to the class list from Units 7 and 8.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Annual leave requires two weeks\' notice._   **A** Ask two weeks before. **B** You get two weeks\' leave. **C** Leave is not allowed.',
  '**2**  _Sickness: telephone a named person before 08.00. Message not acceptable._   **A** Send a message early. **B** Telephone and speak to somebody before eight. **C** Telephone after eight.',
  '**3**  _You don\'t have to come in on Saturday._   **A** Saturday work is forbidden. **B** Saturday is not necessary. **C** You must come on Saturday.',
  '**4**  _Nobody signs for anybody else — not even to help._   **A** Help a colleague by signing. **B** Never sign in another person\'s place. **C** Signing is not needed.',
  '**5**  _Mr Ayoub at the bank until 11. Can I take a message?_   **A** He is not coming today. **B** He is out and will be back at eleven. **C** He does not take messages.',
  '**6**  _Could you approve the attached card and send a form number, by 5 May?_   **A** Two things are wanted, by a date. **B** The card is approved. **C** Nothing is needed until May.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a message about **a rule or permission**, the three points are usually: **what the rule is** · **what you must do** · **by when, or who to tell**.',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to Hala about absence. Say: **(1)** she must telephone if she is ill, **(2)** before eight and to a person, not a message, **(3)** Mr Ayoub answers from half past seven. Use the frame.'));
out.push(p('Dear Hala, If you are ill, please ______________. You have to telephone before ______ and speak to ______________, not ______________. ______________ answers from ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  Telephone if you are ill', ''], ['2  Before eight, to a person', ''], ['3  Who answers, and from when', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('You are lending something valuable to a friend. Write a message (25 words or more). Say: **(1)** what they must do with it, **(2)** what they mustn\'t do, **(3)** when you need it back.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** your friend would send (20+ words), e.g. _Thank you! I won\'t take it outside and I\'ll bring it back on Friday. Can I use it on Thursday evening too?_'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 9 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I\'m responsible ___ the orders.   a) of   b) for   c) to',
  '2  She\'s in charge ___ the warehouse.   a) of   b) for   c) with',
  '3  Everybody ___ sign the book.   a) must to   b) musts   c) must',
  '4  You ___ come on Saturday — we\'re closed.   a) mustn\'t   b) don\'t have to   c) haven\'t to',
  '5  He ___ telephone before eight if he is ill.   a) have to   b) has to   c) must to',
  '6  Is it OK if I ___ at three?   a) leave   b) will leave   c) leaving',
  '7  ___ I take a message?   a) Can   b) Do   c) Am',
  '8  Please find ___ the price list.   a) attach   b) attaching   c) attached',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 9.15** Listen to a telephone call. Complete the message slip.   For: ______   From: ______   Company: ______   About: ______   Tel: ______'));
out.push(dlg('Track 9.15  Audio script (read after the check)', [
  ['Nour', 'Sham Trading, good afternoon. Nour speaking.'],
  ['Caller', 'Good afternoon. Can I speak to Nadia?'],
  ['Nour', 'I\'m afraid she\'s at the bank until three. Can I take a message?'],
  ['Caller', 'Yes — it\'s Leila Jabr from Jabr Glass. It\'s about invoice 0501-3; we paid it on Tuesday and she has sent a reminder.'],
  ['Nour', 'Invoice 0501-3, paid on Tuesday. Can I have your number?'],
  ['Caller', 'Zero nine three three, six one two, four zero four.'],
  ['Nour', 'Zero nine three three, six one two, four zero four. She\'ll telephone you before five.'],
]));
out.push(p('**C  Writing.** Write a short email asking for permission to leave early (25+ words). Say when, what you will finish first, and who will cover.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 9)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what I am responsible for, and what I only help with',
  '☐ give a rule **and** the reason behind it',
  '☐ separate what is necessary from what everybody does anyway',
  '☐ ask permission in a way that is easy to say yes to',
  '☐ take a telephone message with all seven parts, and read it back',
  '☐ write a short work email with the ask in the first line',
  '☐ tell a worried colleague in easy English what a page of rules means for them',
  '☐ write a job description, a rules page, a "what you have to do" page, a permission email, a message slip and a four-line email',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 9 · Student\'s Book');
