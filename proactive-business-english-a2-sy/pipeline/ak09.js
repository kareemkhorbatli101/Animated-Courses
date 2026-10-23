// Proactive Business English A2 · Syria Edition · Book 1 · Unit 9 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 9  Duties, Rules and Permission'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 9.1 =====================
out.push(h2('9.1  I look after the orders and the post'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The difference is the test from the dialogue: if it goes wrong, who finds it? If the answer is _me_, it is yours.'));
out.push(p('**b**  responsible **for** · look **after** · in charge **of** · help **with**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (he is writing the job description, for the person after Nour)   **b**  1 Any two: the orders, the diary, the post, the stock card.  2 The stock count, twice a month — Abu Yasser decides.'));
out.push(p('**Language box – Practise:**  1 responsible for  2 in charge of  3 look after  4 help with  5 deals with'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I\'m writing the job description. What exactly do you do?'],
  ['B', 'That\'s a bigger question than it sounds.'],
  ['A', 'Start with what is yours.'],
  ['B', 'I\'m responsible for the shelves — from the order to the date on the box. I\'m responsible for the wholesaler order and the fridge temperatures.'],
  ['A', 'And the till?'],
  ['B', 'I look after the till when the pharmacist is out, but I\'m not in charge of it. That\'s different.'],
  ['A', 'Say the difference.'],
  ['B', 'If the till is short, she finds it that evening. If a box goes out of date on my shelf, nobody finds it except me — until a customer does.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the difference sentence. Typical errors: _responsible of_, _in charge for_; _I look the post_ (dropping _after_); _I am responsible to the orders_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'Responsible for', 'Helps with', 'The hidden one'], [
  ['Rasha', 'the shelves, the wholesaler order, the fridges', 'the monthly count', 'she reads every date on every box, once a week, and nobody has ever asked her to'],
  ['Fadi', 'the van, the route, the delivery notes', 'loading', 'he telephones customers when he is running late, from his own phone'],
  ['Samir', 'the cutting, the measurements', 'the drawings', 'he keeps a notebook of every shopfront in the street and what glass it takes'],
], [1, 1.4, 1.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha is responsible for the shelves, the wholesaler order and the fridge temperatures. She only helps with the monthly count. The thing nobody knows is that she reads every date on every box once a week."', 'Ask the follow-up every time: **who would do it if that person left tomorrow?** In most cases the honest answer is _nobody, for about three months_.']));
out.push(stage('5', 'Read'));
out.push(p('1 To **look after** — she does it day to day, but Hala owns it.  2 _If an order goes wrong, nobody will find it except you._ It decides which list a duty belongs in.  3 The part of the job that is not a duty at all: telephoning before people ask — thirty seconds nobody has asked for, and half the job.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**SHOP ASSISTANT — what the job actually is** · written by Rasha Hamdan.  **You are responsible for:** the shelves and the dates on them · the order to the wholesaler · the fridge temperatures, twice a day · the till at closing.  **You look after:** the front window, which the owner changes but you keep clean and honest — if a price in the window is wrong, it is wrong on you.  **You help with:** the monthly count. The owner decides; you count.  **You are not responsible for:** prices — the owner · credit for a regular customer — the owner · anything to do with the landlord.  **The test.** If a box goes out of date on a shelf, nobody will find it except you.  **The part that is not written anywhere else.** You know which customers come on which day and what they are going to ask for, and you put it near the front on Wednesday. Nobody will ever tell you to do that.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four lists, fourth not empty', '✓'],
  ['Every _not responsible for_ names a person', '✗ – "anything to do with the landlord" names nobody'],
  ['Prepositions correct', '✓'],
  ['The unwritten part', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "The window line is excellent — it belongs exactly where you put it. Who **does** deal with the landlord? A new person will ring him by mistake."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('The hardest to replace is nearly always the unwritten part — the knowledge of **which customer, which day, which thing**. It takes a new person a year and no handover note has ever contained it.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['The man who sweeps our street looks like he only sweeps. He is responsible for which day the rubbish goes where, which drain blocks when it rains, and which of the old women on the ground floor has not been seen for two days. If he stopped, the street would be dirty in a week and somebody would die alone in a month, and only one of those is his job.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"only one of those is his job" — I had never thought about that._   ✓ _What would happen if he were ill for a month?_   ? _Does anybody pay him for the second part?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The job that stops a workplace fastest is almost never the senior one. It is the one that touches **everything daily**: the keys, the post, the till, the gate.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['**Responsible for:** my mother — the food and the money. My brother — the water tank and the gas. Me — the papers, the bills and the school.  **Helps with:** everybody with the cleaning, badly.  **Nobody has ever asked:** my sister checks on our grandmother every evening. It is not anybody\'s job and it is the most important one.']));

// ===================== 9.2 =====================
out.push(pb());
out.push(h2('9.2  Everybody must sign the book'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open — and the second question is the task. A rule nobody can explain is a finding, not a failure.'));
out.push(p('**b**  **Company rules:** wear a badge · sign in.  **The law:** have a contract · be paid for overtime.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (signing in)   **b**  1 Because the fire list is made from it, and it works both ways: a missing name means nobody looks for you; an uncrossed name sends somebody back into the building.  2 Smoke in the store room — a cable, not a fire. Two names were in the book but the men were in the café, and Abu Yasser went back in for them.'));
out.push(p('**Language box – Practise (samples):**  1 Everybody must sign the book, because the fire list is made from it.  2 You must wear the badge, because visitors need to know who works here.  3 You must write it on the stock card the same hour, because "about a hundred" turned out to be nineteen.  4 You must read the order back, because the quantity is what goes wrong, not the name.  5 We have to keep the invoice for five years, because the tax office can ask for any of them.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Why must I write the time on every sample? Everybody knows when I took it.'],
  ['B', 'You know. The laboratory doesn\'t.'],
  ['A', 'The laboratory?'],
  ['B', 'If a sample is taken at eight and tested at four, some of the numbers change. They need the time to read the result, not to check on you.'],
  ['A', 'So it works in both directions.'],
  ['B', 'Both directions. That\'s why we write it even when we take it straight through.'],
  ['A', 'Has it ever happened?'],
  ['B', 'In 2021 a woman was treated for something she did not have, for three weeks, because a sample sat in a warm room and nobody knew how long.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the rule and the reason and judge it against a busy day. A reason survives a busy day when it names **somebody who gets hurt**. Typical errors: _must to sign_; _he musts_; a rule given with no reason, which is the thing the cycle exists to prevent.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The rule', 'The reason given', 'Would it survive a busy day?'], [
  ['sign the visitors\' book', 'the fire list', 'Yes'],
  ['no telephones on the shop floor', 'nobody could say', 'No — and nobody obeys it after eleven'],
  ['two people count the till', 'it protects the person counting, not the money', 'Yes — once you hear it that way'],
], [1.4, 1.8, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"At Rasha\'s work two people must count the till. The reason is not that they don\'t trust anybody — it is that if one person counts alone and the money is short, there is nobody to say it was short when she found it."', 'The rule nobody can explain is usually about **telephones, dress or tea**. Ask whether it should stay; the answer is often yes, but for a different reason than anybody has said out loud.']));
out.push(stage('5', 'Read'));
out.push(p('1 Rule 2 — the delivery note: the person who loses by a load with no paper is the driver.  2 Because the real reason is commercial and human: a customer who finds his prices in a competitor\'s hand never comes back.  3 Because five can be remembered.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THE SHOP — the four rules that matter.**  **1  The till is counted by two people, morning and night.** Because if it is short and one person counted alone, there is nobody to say when it went short — and that is unfair to her, not to the money.  **2  Nothing leaves the shop without going through the till.** Not for family, not for me. Because the moment there is one exception, there is no rule and the new person learns the exception first.  **3  Every date on every shelf is checked once a week.** Because a customer who buys something out of date tells nine people.  **4  Nobody is sent home early without being paid for the day.** Because people who are sent home early stop telling you when it is quiet.  _There is no rule here about telephones, tea or what you wear._']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every rule has its reason', '✓'],
  ['At least one reason is a real story', '✗ – four reasons, no story'],
  ['Few enough to remember', '✓ – four'],
  ['A line about what is not a rule', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A reason holds at five o\'clock on a Thursday when it is about a **person**, not a principle: _it is unfair to her_ · _the driver loses_ · _a customer tells nine people_.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['I always sign the book, because somebody once explained the fire list to me and I have never forgotten it. I never wear the badge. Nobody has ever told me what it is for; the visitors do not look at it and I would know everybody here in the dark. The difference is not the rule. It is that one of them was explained to me by a person who cared whether I understood.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"by a person who cared whether I understood" — that is the whole unit._   ✓ _What would make you wear the badge?_   ? _Has anybody ever asked you why you don\'t?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Nearly every reason on the board will be _somebody explained it to me_ or _I saw what happened without it_. Almost none will be _because it is the rule_. That is the lesson of 9.2 and it comes from the class, not from the book.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['Before: _Employees are reminded that the maintenance of a clean and orderly workspace is a shared responsibility._  After: **Clear your bench before you go home.** Because the next shift starts at six in the dark and somebody will put a hand on whatever you left.']));

// ===================== 9.3 =====================
out.push(pb());
out.push(h2('9.3  You don\'t have to come in on Saturday'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The second half is the interesting one; write the answers on the board without names.'));
out.push(p('**b**  Open — and the pattern across a class is usually that the _don\'t have to_ items are done anyway, which is exactly the point of the cycle.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (she thinks she must work on Saturday)   **b**  1 Come in on Saturday, or wear anything particular.  2 Telephone before eight if she is ill — and to a person, not a message.'));
out.push(p('**Language box – Practise:**  1 have to  2 don\'t have to  3 mustn\'t  4 doesn\'t have to  5 have to'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'About the staff meal. What time do I have to be here?'],
  ['B', 'You don\'t have to stay for the staff meal. It\'s after the shift.'],
  ['A', 'But everybody was there last night. I saw them.'],
  ['B', 'They were. They don\'t have to be. Nobody asks them and nobody pays them. They stay because the food is better at eleven than at six.'],
  ['A', 'And the knives? Should I buy my own?'],
  ['B', 'You don\'t have to buy anything. Nothing is written. But most cooks here have one knife of their own, because the shared ones are blunt by Thursday. Your own choice.'],
  ['A', 'Anything I have to do that I don\'t know about?'],
  ['B', 'One thing. You have to tell the kitchen before you leave the building — even for five minutes, even for bread.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners build two lists; the **everybody does but nobody has to** list is nearly always the longer one. Typical errors: _mustn\'t_ for _don\'t have to_ (the expensive one); _he have to_; _do I must_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'Really has to', 'Does anyway', 'Why they do it'], [
  ['Rasha', 'count the till with somebody', 'comes in twenty minutes early', 'she likes the shop before it opens'],
  ['Fadi', 'hand in the notes daily', 'washes the van on Thursday', 'a dirty van is a bad delivery, he says'],
  ['Samir', 'wear safety glasses', 'sweeps the whole workshop, not his part', 'somebody did it for him when he started'],
], [1, 1.3, 1.3, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Samir has to wear safety glasses. He doesn\'t have to sweep the whole workshop, but he does it, because somebody did it for him when he started."', 'The unpaid, unasked thing most of a class does is usually about **making the next person\'s start easier**. Say that out loud; most of them have never heard it named.']));
out.push(stage('5', 'Read'));
out.push(p('1 Telephone **a person** before eight — because a message is read at ten, and by then somebody has opened the counter alone.  2 That you do not have to, but you will be asked every day, and that is not pressure — it is how people there say they like you.  3 Why the two lists are different: nobody will say anything if you skip something optional, and nobody will say anything if you skip something necessary either — which is exactly why the cost is written down.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**WHAT YOU HAVE TO DO, AND WHAT YOU DON\'T** · for anybody in their first month at the shop.  **You have to:** tell me before you leave the building · count the till with a second person · write any price change in the book · telephone me before seven if you are ill, and speak to me.  **You don\'t have to:** come in early · stay after closing · answer the shop telephone when you are serving · take tea with the regulars — though they will offer every day, and that is not a test, it is how they say they have accepted you.  **You mustn\'t:** give credit without asking me · take anything from the shelf without putting it through the till, including for family.  **The difference.** Nobody will say anything if you do not come early. If you do not telephone before seven, I open alone and everything that day is harder — and I will not say anything about that either. That is why it is written here.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three lists, correctly separated', '✓'],
  ['_don\'t have to_ never used for _mustn\'t_', '✓'],
  ['A warm habit explained as warm', '✓ – the tea'],
  ['The cost of skipping a necessary thing', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The optional item people still do is almost always the **social** one — the tea, the meal, the early twenty minutes. Worth asking why; the answers are the real induction.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Every evening I check that my neighbour\'s gas is off. Nobody asked me. She is eighty-one and she cooks at seven and forgets. It takes me nine seconds on the way up. If I stopped, probably nothing would happen for a year, and then one evening something would, and I would be the person who used to check.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I would be the person who used to check." Somebody should notice this._   ✓ _What would happen if you stopped?_   ? _Does she know you do it?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most unasked things would be missed **only after months**, which is exactly why nobody thanks anybody for them. Saying so in class is worth more than the grammar.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Have to: pay the rent on the first · renew the papers every year · be at the school gate by two · put the bins out on Tuesday · turn the water pump off at night.  Don\'t have to: answer the door after nine · go to every wedding · buy bread every day · water the plants on the stairs · reply to every message the same hour.  Mustn\'t: park across the garage door · hang washing on the front balcony · lend the roof key.']));

// ===================== 9.4 =====================
out.push(pb());
out.push(h2('9.4  Is it OK if I leave at three?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  _Can I leave at three?_ → _Is it OK if I leave at three?_ → _Could I leave at three?_ → _Would it be possible to leave at three?_'));
out.push(p('**b**  The second: _Is it OK if I leave at three? I\'ll finish the orders first._ It asks rather than announces, and it answers the manager\'s real question. (_I have to leave_ announces; _everybody else does_ invites a no.)'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a clinic appointment)   **b**  1 To finish the orders before she goes, and Hala takes the counter from two.  2 To leave at half past two, not three — so she does not spend the morning worrying about three o\'clock.'));
out.push(p('**Language box – Practise (samples):**  1 Is it OK if I leave at three on Wednesday? I\'ll finish the orders and Hala can take the counter.  2 Is it OK if I take Thursday off? I\'ll do the Thursday post on Wednesday evening.  3 Could I come in at ten on Sunday? I\'ll stay until five to cover it.  4 Is it OK if I use the boardroom from two to three? Nothing is booked and I\'ll leave it as I found it.  5 Could I take the small van at lunchtime? I\'ll be back before the two o\'clock load.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Is it OK if I take Thursday off? My brother gets his results.'],
  ['B', 'Of course. Is everything all right?'],
  ['A', 'Nothing serious. I\'ll finish the week\'s orders on Wednesday, and Samir can open.'],
  ['B', 'Does Samir know?'],
  ['A', 'Not yet. I wanted to ask you first.'],
  ['B', 'That\'s the right order. And one change: take Wednesday afternoon as well.'],
  ['A', 'Wednesday afternoon?'],
  ['B', 'You will be useless on Wednesday afternoon and we both know it. Go at one and be where you are needed.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the cover and the change. The best changes are **both** kind and cautious — they protect the person and the work. Typical errors: _Is it OK if I will leave_; asking with no cover; three sentences of explanation for a two-hour absence.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What I asked', 'The cover I offered', 'The answer'], [
  ['to leave at two on Thursday', 'orders done, Hala on the counter', 'yes, immediately'],
  ['to borrow the big ladder', 'back by five, I\'ll carry it myself', 'yes, but take somebody'],
  ['to change my Sunday shift', 'I swapped with Samir first', 'yes — "you already solved it"'],
], [1.4, 1.6, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I asked Rasha if it was OK to change my Sunday shift. I offered the swap with Samir, already agreed. She said yes — I\'d already solved it."', 'The fastest yes always has **cover**. A request with the problem already solved is not really a request, which is why it is granted in four words.']));
out.push(stage('5', 'Read'));
out.push(p('1 What happens in the office while she is away — what is finished, who is covering, what is waiting.  2 Email 2 — it needs a reply asking all the questions it did not answer.  3 The apologies, and _I will of course make up the time_ (which was never asked for).'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Thursday 11 — day off, cover arranged.  Dear Rasha, Is it OK if I take Thursday 11 off? I have a family appointment. Before I go: the week\'s orders will be in on Wednesday, the shelves will be dated, and Samir will open and close — I have spoken to him and he is happy. Nothing is waiting on me except the wholesaler order, which can go Friday without any difference. If Thursday is difficult, I could do Monday 15 instead. Hala']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Date and time in the subject line', '✓'],
  ['What will be finished first', '✓'],
  ['Who is covering, already asked', '✓'],
  ['No apologies; an alternative offered', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('An email answerable with _yes_ alone has all four: the date, the cover, the person already asked, and the alternative. Anything missing turns a one-word reply into a conversation.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['I asked for three months off to look after my father. I asked badly: I came in on a Thursday afternoon with no plan and said I did not know how long. My manager said yes anyway, and then helped me write the plan I should have brought. What I would change is not the request. It is that I made somebody who was already helping me do the work of asking as well.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _You asked well in the end, and you know exactly what was missing._   ✓ _Did you offer anything?_   ? _Did you get the three months?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Where permission was refused, it is the **request** about half the time and the **way of asking** about half — but the way of asking is the half the writer can change, so it is the half worth twenty minutes.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['**Subject:** Wednesday 26 — leaving at 2.00.  Dear Sir, Is it OK if I leave at 2.00 on Wednesday 26? I have an appointment. The month-end figures will be finished and on your desk before I go, and Rana will cover the telephone from 2.00 — I have asked her. Nothing else is waiting on me that day. If Wednesday is difficult, Thursday would work equally well.']));

// ===================== 9.5 =====================
out.push(pb());
out.push(h2('9.5  Can I take a message?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  The seven: **who it is for · who it is from · their company · what it is about · what they want · their number · when you took it.**'));
out.push(p('**b**  **Offers:** _Can I take a message? · Can I ask who\'s calling?_  **Requests:** _Can you spell that, please? · Can you ask him to telephone me?_'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (Mr Ayoub)   **b**  1 0944 318 260.  2 She repeats the **whole** message back, not only the number.'));
out.push(p('**Language box – Practise (the seven parts):**  **For:** Nour · **From:** Dima Shamsi · **Company:** Shamsi Packaging · **About:** Tuesday\'s load · **Wants:** to say the wrap is on the lorry but the gloves are not; she will telephone at four · **Tel:** 0912 447 300 · **Taken:** the time of the call.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Good morning. Can I speak to the foreman?'],
  ['B', 'I\'m afraid he\'s on site until two. Can I take a message?'],
  ['A', 'Yes. It\'s Leila Jabr from Jabr Glass.'],
  ['B', 'Mrs Jabr from Jabr Glass. Can I ask what it\'s about?'],
  ['A', 'The order for the shopfront. The 6 mm is ready but the 4 mm is three weeks away. I need to know today whether to send the 6 mm on its own.'],
  ['B', '6 mm ready, 4 mm three weeks, and you need an answer today about sending the 6 mm alone. Can I have your number?'],
  ['A', 'Zero nine three three, six one two, four zero four.'],
  ['B', 'Zero nine three three, six one two, four zero four. Let me repeat the whole message.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners tick the seven. The part most often missing is **what they want** — learners take the subject and lose the action. The number is almost never the problem, because everybody knows to check a number and nobody thinks to check a sentence.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['For', 'From / company', 'About / wants', 'Number', 'Time taken'], [
  ['Rasha', 'M. Khalil, Khalil & Sons', 'Tuesday\'s order — two boxes short, wants a call not a credit note', '0944 702 118', 'Tue 10.15'],
  ['the foreman', 'L. Jabr, Jabr Glass', '6 mm ready, 4 mm 3 weeks — send 6 mm alone? answer today', '0933 612 404', 'Tue 11.40'],
  ['Nadia', 'D. Shamsi, Shamsi Packaging', 'wrap on the lorry, gloves not — will call at four', '0912 447 300', 'Tue 14.05'],
], [0.8, 1.2, 1.8, 1, 0.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"For Rasha. From Mr Khalil at Khalil & Sons, Tuesday at a quarter past ten. About Tuesday\'s order: it was two boxes short and he has paid in full. He wants a telephone call today, not a credit note. His number is 0944 702 118."', 'The part most often missing across a class is **what they want**, and after that **the time it was taken**.']));
out.push(stage('5', 'Read'));
out.push(p('1 The Homs run — they can do the two Aleppo runs but not Homs.  2 That Mr Ayoub would telephone him before twelve.  3 Nour\'s own note, marked as hers: it connects the message to the Tarabishi order and gives a deadline the caller never mentioned.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**TELEPHONE MESSAGE**  **For:** Rasha  **Taken by:** Samir  **Time:** Tuesday 9 May, 10.15 am.  **From:** Mr Mazen Khalil  **Company:** Khalil & Sons  **Tel:** 0944 702 118.  **About:** Tuesday\'s delivery.  **Message:** It was two boxes short and he has already paid in full. He wants a telephone call today — he said twice that he does **not** want a credit note.  **What I said:** that you would telephone him before closing.  **My note (not from him):** he said "again" when he mentioned the short delivery. I did not ask, but it may be worth looking at the March note before you ring him.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All seven parts', '✓'],
  ['The message in the caller\'s words', '✓ – "he said twice"'],
  ['What was promised', '✓'],
  ['Own note marked as own', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The _my note_ that saves most time is the one that reports **a word the caller used**: _he said "again"_. It is observation, not opinion, and it changes how the call back begins.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Somebody took a message for me that said only "the hospital called". No name, no number, no reason, no time. I telephoned the hospital switchboard four times over two days and they could not find who had rung. In the end it was the clinic about an appointment, and I had missed it. The missing part was the number, and it cost me six weeks.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _That happens all the time, and people never think it matters._   ✓ _Which part was missing?_   ? _Did you get another appointment?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Across a class the parts that fail most often are **the number** (in personal life) and **what they want** (at work). Both are worth counting on the board.'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample(null, ['A usable slip has seven boxes and nothing else: **For · From · Company · Tel · About · Message · Taken by and when** — with a narrow eighth strip at the bottom for _What I said_ and _My note_.', '_A slip with space for a paragraph gets a paragraph. A slip with seven small boxes gets seven answers, which is the point._']));

// ===================== 9.6 =====================
out.push(pb());
out.push(h2('9.6  Please find attached'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open — most learners have written all six, and most have written the useless one most often.'));
out.push(p('**b**  **_Thanks in advance._** It thanks somebody for something they have not agreed to do. (_I hope this email finds you well_ is empty but harmless; _thanks in advance_ presumes, and readers feel it even when they could not say why.)'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (too long and the ask is buried)   **b**  1 _I hope this email finds you well._  2 That it thanks somebody for something they have not agreed to — write _thank you_ afterwards, when they have done it.'));
out.push(p('**Language box – Practise (samples):**  1 _Could you approve the attached, please?_  2 _As discussed, please find attached the price list._  3 _Could you confirm by Thursday?_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Can you read this before I send it? It\'s to the landlord about the water tank.'],
  ['B', 'Read it to me.'],
  ['A', '"Dear Mr Nasser, I hope you and your family are well. I am sorry to trouble you again, and I know you are busy, but I wanted to mention, if it is not inconvenient…"'],
  ['B', 'Stop. What do you want him to do?'],
  ['A', 'Replace the water tank before the summer.'],
  ['B', 'Then that is the first line.'],
  ['A', 'But it sounds demanding.'],
  ['B', 'It sounds clear. Cut the two apologies. Keep "again" — it does real work: it tells him this is the third time.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the finished first line and try to answer from it alone. Typical errors: cutting the thing that does real work (_as discussed_, _again_) and keeping the decoration; _please find attached the file which I have attached_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['My email is about', 'What I want', 'Did they get it from line 1?'], [
  ['the water tank', 'it replaced before June', 'Yes'],
  ['the summer order', 'a price list, by the 12th', 'No — line 1 was about last year'],
], [1.6, 1.6, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Could you send me a price list for 500 printed folders, by the 12th? We print the school order that week and I cannot quote without it."', 'The shortest email that still works is usually **two sentences**: the ask with its date, and the reason. Everything else in a short work email is either a number or a greeting.']));
out.push(stage('5', 'Read'));
out.push(p('1 The ask: approve the card and send a form number, by 5 May.  2 _As discussed_ (it reminds them it is not new) and the figures — 9 per cent to 2. Numbers survive cutting; adjectives do not.  3 The **date** — and the ask itself.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Water tank — replacement before June, please, by 20 May.  Dear Mr Nasser, Could you replace the water tank before June? As discussed in March and again in April, it has been leaking for eleven weeks; the stairs below it are wet every morning and the ground-floor ceiling has started to mark. Please find attached two photographs (one page) and the plumber\'s note with his estimate. Could you let me know by 20 May, so that the work can be done before the water is turned on for the summer? Kind regards, Rasha Hamdan, flat 6  _(68 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Ask in the subject line, with a date', '✓'],
  ['Ask also the first sentence', '✓'],
  ['A number instead of an adjective', '✓ – eleven weeks'],
  ['Nothing that thanks before agreement', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('What gets lost in cutting is almost always **relationship**, not information — and it can be put back in four words (_as discussed_, _I hope you are well_ at the **end**) without the ask moving.'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['**Subject:** My final certificate — could you sign it by Thursday 18?  Dear Dr Haddad, Could you sign the attached certificate by Thursday 18? The university office closes for the summer on the 20th and will not reopen until September. It is one page and needs one signature at the bottom. I am sorry to ask at this time of year. Thank you, Rasha Hamdan']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I can answer this now — one page, one signature, one date._   ✓ _Can you say where to send it back?_   ? _Does it need a stamp as well as a signature?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The email answered first is nearly always the shortest one **with a date in the subject line**. Count the words of the winner; it is usually under seventy.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['I sent it on Tuesday morning and he replied in eleven minutes, which is eleven minutes faster than every email I have sent him this year. He said yes. I had been putting it off for three weeks because I thought the asking would be the hard part, and the asking took four lines.']));

// ===================== 9.7 =====================
out.push(pb());
out.push(h2('9.7  Review & Mediate: what do the staff rules say?'));
out.push(stage('1', 'Get ready – Unit 9 quiz'));
out.push(p('**1** responsible **for** · in charge **of** · look **after** · help **with**.  **2** _If it goes wrong, nobody will find it except me._  **3** _You mustn\'t_ = forbidden; _you don\'t have to_ = not necessary, but you may.  **4** Ask → say **when** → say what you will **do about it** (what is finished, who covers) → offer an alternative. No long explanation.  **5** For · from · company · about · what they want · number · when you took it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the confidentiality rule — and the word "disciplinary")   **b**  1 What customers tell the company stays in the building: their prices, their numbers, what they buy, what they owe.  2 If she is not sure, it is confidential.'));
out.push(p('**Language box – Practise (sample):**  _What customers tell us stays in this building. If you tell somebody outside, it is serious — serious enough that the company can act on it. If you are not sure whether something counts, it counts._'));
out.push(stage('3', 'Practise – sample mediation of document 1'));
out.push(sample(null, ['"Should you be frightened? No. Let me go through it. It\'s about keeping customer information inside the company — their prices, their telephone numbers, and what they have bought from us. Not to your family, not to a friend at another company, not in a café. The last sentence says the company can act on it if somebody does tell, and that\'s there because every company has to write it; it isn\'t about anything that has happened. The one thing to remember is: if you are not sure whether something is confidential, it is."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one sentence and judge whether they could use it tomorrow. A speaker who repeats _breach_, _termination_ or _but not limited to_ has handed the fear back. Send them back with: _say it to somebody on their first week._'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'What I said was not about them', 'The one sentence I left them with'], [
  ['Hala', 'the disciplinary paragraph, and most of the leave section', 'If you are not sure, it stays in the building.'],
  ['Fadi', 'the office dress section and the annual-leave notice period', 'Telephone a person before eight, not a message.'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s the staff handbook. Most of it is about leave and hours, which Hala already knows. The part that is really about her is confidentiality — customer prices and numbers stay in the building. The one thing to remember is: if you are not sure, it\'s confidential."']));
out.push(note('Ninth unit of the book, so the ordinal is "ninth". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(p('**The office-word list, continued from Units 7 and 8:** _confidential_ (stays inside the company) · _breach_ (breaking a rule) · _disciplinary_ (what happens if somebody does something serious) · _termination_ (losing the job) · _authorisation_ (somebody must say yes) · _line manager_ (the person you report to) · _notification_ (telling them) · _certification_ (a paper from a doctor) · _consecutive_ (one after another) · _including but not limited to_ (these and others).'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'A', '"two weeks\' notice" = ask two weeks before'],
  ['2', 'B', 'telephone, a named person, before eight; a message will not do'],
  ['3', 'B', '_don\'t have to_ = not necessary'],
  ['4', 'B', '"not even to help" makes it absolute'],
  ['5', 'B', '"until 11" says he is out and when he is back'],
  ['6', 'A', 'approve **and** send a number, by 5 May'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Hala, If you are ill, please telephone — don\'t send a message. You have to telephone before eight and speak to a person, not leave a voicemail. Mr Ayoub answers from half past seven, so there is always somebody there. Thank you. Nour  _(45 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  Telephone if you are ill', '✓'],
  ['2  Before eight, to a person', '✓'],
  ['3  Who answers, and from when', '✓'],
  ['25 words or more', '✓ – 45 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈40 words)'));
out.push(sample(null, ['Hi Samir, Here\'s the camera. Please keep it in the bag when you aren\'t using it, and charge it with the black cable only — the other one is too fast and ruins the battery. Don\'t lend it to anybody else, even for an hour. I need it back on Sunday morning for my cousin\'s wedding. Rasha']));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Thank you! I won\'t lend it to anybody and I\'ll use the black cable. Can I keep it until Sunday lunchtime, or do you need it first thing?']));
out.push(stage('✓', 'Unit 9 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'c', 'b', 'b', 'a', 'a', 'c']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — For: **Nadia** · From: **Leila Jabr** · Company: **Jabr Glass** · About: **invoice 0501-3 — paid on Tuesday, but a reminder was sent** · Tel: **0933 612 404**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Mr Ayoub, Is it OK if I leave at three on Thursday? I have an appointment. I\'ll finish the orders and the post before I go, and Hala will take the counter from two — I have asked her. Thank you. Nour  _(41 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** when · what will be finished first · who is covering — one mark each.',
  '**Language (2):** _Is it OK if I **leave**…_ (present after _if_); _I\'ll_ for the offer; no _will_ after _if_.',
  '**Organisation and length (2):** greeting and name; 25 words or more; the ask in the first sentence.',
  '⚠ Take **no** mark off for not giving a reason. A learner who writes _I have an appointment_ and stops has done exactly what this cycle teaches; a learner who explains their family circumstances for three lines has not.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 9', [
  '**1  The preposition set.** _responsible of_, _in charge for_, _look the post_. These are learned as whole phrases or not at all; no rule will help. Put the four on the wall and point at them rather than explaining them.',
  '**2  _mustn\'t_ for _don\'t have to_, again.** It was in Unit 6 and it is back, and it will be back in Unit 12. The reason it survives is that both are negative and both contain _not_. The only repair that works is the **consequence** test: what happens if I do it? Nothing, or trouble?',
  '**3  Over-explaining a request.** This is not a grammar fault and it is the one that costs learners most in a real workplace. A two-hour absence explained in four sentences reads as a problem. Teach the shape — **ask, when, cover, alternative** — and cut everything else, out loud, in front of the class, from a volunteer\'s email.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 9 · Answer Key');
