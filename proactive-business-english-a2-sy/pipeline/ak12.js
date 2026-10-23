// Proactive Business English A2 · Syria Edition · Book 1 · Unit 12 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 12  Courtesy and Company Customs'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit is different from the other eleven.** Half of it asks learners about **their own** customs, and on those tasks there is no right answer and the key cannot supply one. Where that is the case, the key gives a good sample and says what to listen for instead.',
], C.grey, C.navy));

// ===================== 12.1 =====================
out.push(h2('12.1  Congratulations on the new branch'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  a new baby → _Congratulations! · Mabrouk._ · a wedding → _Congratulations and best wishes._ · a new job → _Well done! Congratulations._ · an exam → _Well done._ · a new shop → _Congratulations on the shop — may it bring you what you worked for._'));
out.push(p('**b**  Congratulations **on** the new branch. Five syllables: con-grat-u-**LA**-tions.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a new branch)   **b**  1 On the branch, **and** on opening it in the year everybody said not to.  2 That he asks the same two questions his father cannot answer; his mother says he will be difficult and he says rich.'));
out.push(p('**Language box – Practise (samples):**  1 Congratulations on the branch — and on opening it this year.  2 Congratulations on your daughter\'s results; she worked for those.  3 Twenty years — well done, and congratulations on the people you trained.  4 Well done on finishing that order; I know what week it was.  5 Congratulations and best wishes to you both.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Rasha. Congratulations on the promotion — and on training Samir before anybody offered it to you.'],
  ['B', 'Thank you. Four years here and you have never said a thing like that to me.'],
  ['A', 'Four years and you have never been promoted.'],
  ['B', 'That is fair.'],
  ['A', 'And congratulations on doing it quietly. Half the office did not know you had applied.'],
  ['B', 'Half the office still does not know. My mother says I am secretive; I say I am careful.'],
  ['A', 'Both, probably.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **second** congratulation. The first is available to anybody; the second is the one that could only have come from a colleague. Typical errors: _congratulation_ (no **s**); _congratulations for_; _congratulations to the branch_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'What for', 'The sentence that showed I noticed'], [
  ['Rasha', 'her promotion', '"you trained Samir before anybody offered it to you"'],
  ['Fadi', 'passing the lorry test', '"on the third try — the first two would have stopped most people"'],
  ['Hala', 'a year at the counter', '"nobody has asked for Nour instead of you since March"'],
], [1, 1.4, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I congratulated Hala on a year at the counter. I also said that nobody has asked for Nour instead of her since March, because that is the real measure and she would never say it herself."', 'The congratulation people most want is almost always for **the difficult part that nobody saw** — the third try, the quiet application, the person they trained.']));
out.push(stage('5', 'Read'));
out.push(p('1 On opening it in a year when everybody advised against it.  2 That twelve years ago he was a shop ordering small boxes once a month, and that Sham Trading has grown with him and knows it.  3 Because a concrete detail proves the card was written for him and could not have been sent to anybody else.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**To Umm Khaled, on fifty years in this building.**  Dear Umm Khaled, Congratulations on fifty years here, from all of us on the stairs — and congratulations on being the only person who has ever known where the water key is.  When we moved in, you brought a plate up before we had a table to put it on. Nobody had told you we were coming.  Best wishes to Khaled and the children for the new house, and may you visit it often and come home gladly.  May it bring you what you worked for.  Rasha, and everybody in the building']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Congratulations on_ — with the **s** and the **on**', '✓'],
  ['A second congratulation that shows you noticed', '✓ – the water key'],
  ['One concrete detail', '✓ – the plate before the table'],
  ['Signed by a person', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "The water key is the line she will read twice. Nothing about this card could have been sent to anybody else, which is the whole test."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Ask the one question: **could this have been sent to anybody else?** Most first drafts could; the fix is always one concrete detail, never more adjectives.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Congratulations to the woman who has swept our stairs every morning for eleven years. It is hard because nobody sees it and because the moment it stops being done, everybody notices and still says nothing. She has never had a card, a raise or a word, as far as I know, and I have lived here nine of those eleven years and have never said thank you properly either.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"everybody notices and still says nothing" — somebody should have said this._   ✓ _Does she know?_   ? _Could you tell her this week?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Almost nobody in these texts has ever been told. If one of them can be told this week, say so out loud and ask who will. This is the single most likely moment in the book for something to happen outside the classroom.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['I told her on Tuesday morning on the stairs. She said "it is my work" three times and then she cried, and then I did, and we both pretended it was the dust.']));

// ===================== 12.2 =====================
out.push(pb());
out.push(h2('12.2  It\'s polite to stay for the second cup'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open — and it must be open: these are the learners\' customs, not the book\'s. Samples: _It\'s polite to stand up when somebody older comes in. · It\'s not usual to open a gift in front of the person who gave it. · People always ask about the family before anything else._'));
out.push(p('**b**  Open. The answer is nearly always about **greeting, food or money** — the three things every culture has rules about and nobody notices until asked.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a foreign customer — an engineer from Dubai)   **b**  1 The first cup is the greeting; the second is the conversation, and that is where the business is done.  2 For a company meeting, come on time; for a shop or a home, ten minutes early is eager and twenty minutes late is normal.'));
out.push(p('**Language box – Practise (samples, and learners\' own customs may differ):**  1 It\'s polite to offer tea to anybody who comes in, even for two minutes — it\'s how you say you are not in a hurry.  2 It\'s polite to take your shoes off at the door; it is about the carpet and about the house being a different place from the street.  3 People usually bring something small — not expensive, because expensive makes a debt.  4 It\'s usual to refuse twice before accepting; the refusal is not a refusal, it is a way of saying "don\'t trouble yourself".  5 People stand up when an older person comes in; it costs a second and it is noticed when it does not happen.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Can I ask you something that is not about the work? I am here from Germany and I keep getting it wrong.'],
  ['B', 'Ask.'],
  ['A', 'The food. I eat everything I am given, and then I am given more, and I leave unable to walk.'],
  ['B', 'Ah. It\'s polite to leave a little. An empty plate means you are still hungry — that is what it says, whatever you meant.'],
  ['A', 'And if I refuse at the start?'],
  ['B', 'Refusing once is expected. Nobody hears it as a refusal; it means "don\'t trouble yourself". If you mean it, you have to refuse twice, warmly.'],
  ['A', 'And how do I know when twice is enough?'],
  ['B', 'It depends on the house. You ask, as you just did. Nobody is offended by the question.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **reason**. A custom explained without its reason is a rule, and rules are forgotten by Thursday. Typical errors: _it\'s polite that you stay_; _it depends of_; explaining the custom apologetically, as though it needed defending.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The custom', 'What it is for', 'When it does not apply'], [
  ['offering tea to anybody who comes in', 'to say you are not in a hurry', 'at a counter with a queue behind them'],
  ['refusing once before accepting', 'to say "don\'t trouble yourself"', 'with close family, where it is just slow'],
  ['standing when an older person enters', 'respect, and it costs a second', 'nowhere — this one has no exception'],
], [1.3, 1.6, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It\'s polite to refuse once before you accept. It\'s for saying \'don\'t trouble yourself\'. But it doesn\'t apply with close family, where everybody just gets tired of it."', 'The custom people follow **without ever having thought about why** is usually the one about standing, greeting order, or who sits where. Those are worth five minutes; the class will teach each other.']));
out.push(stage('5', 'Read'));
out.push(p('1 You have left before the meeting started — the second cup is where the business is done.  2 Because that is how two people decide whether they want to do business at all.  3 Ask. Every question of that kind is welcome; what is not welcome is the confident guess.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**A FEW THINGS NOBODY TELLS VISITORS** · the workshop, for anybody coming from outside.  **Tea.** You will be offered it the moment you arrive, before anybody asks why you have come. Take it. The tea is not hospitality in the way you mean it; it is the first five minutes of the meeting, and the meeting does not start without it.  **Names.** Use the first name with Abu Khaled — but "Abu Khaled" **is** the respectful form, not an informality. If you are not sure, ask; nobody minds.  **Money.** It is not usual to name a price in the first ten minutes. This is not haggling and it is not delay; it is two people deciding whether they want to work together at all.  **And the one thing that matters most:** ask. The question is always welcome. The confident guess is what causes offence.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every custom has its purpose', '✓'],
  ['At least one "when it does not apply"', '✗ – the names section says "if you are not sure, ask", which is not an exception'],
  ['A way out for somebody who cannot', '✓'],
  ['Permission to ask', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The purpose that surprises people most is usually one of **their own**. Learners discover why they do something while explaining it, which is the real work of this cycle.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Foreigners think the second refusal is shyness or that we do not mean the offer. It is neither. The first offer is the offer; the first refusal says "do not trouble yourself"; the second offer says "it is no trouble". Three sentences of courtesy in two seconds. When somebody accepts immediately, nothing is wrong — but a small conversation has been skipped, and we notice the quiet.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"we notice the quiet" — I would have misunderstood that completely._   ✓ _What do you say when somebody accepts straight away?_   ? _Do you do it abroad as well?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The misunderstanding is nearly always about **why**, not **what**. Visitors can see what people do; they invent the reason, and the invented reason is usually unflattering to somebody.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['**For a Syrian going to Germany.** Nobody will offer you anything three times; one offer is the whole offer, so say yes the first time or you will go hungry. Arriving ten minutes early is not polite; it is awkward, because the host is not ready. And nobody will ask about your family — this is not coldness, it is privacy, and they are waiting for you to offer it first.']));

// ===================== 12.3 =====================
out.push(pb());
out.push(h2('12.3  I\'m sorry for the late reply'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _I\'m sorry for the late reply._ · _I\'m sorry — that figure is mine._ · _I\'m sorry that nobody telephoned you._ · _I\'m sorry, I\'ve forgotten your name — would you tell me again?_'));
out.push(p('**b**  **Needs one:** the wrong figure (yours), and the colleague\'s wrong figure if it is your company — but as _I\'m sorry you had to_, not as guilt. **Does not:** two minutes late (acknowledge it, don\'t apologise), and the rain.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a figure in an invoice — 420 against the agreed 380)   **b**  1 Once.  2 _And one more thing, which is not an apology:_ — and then the price list coming off the wall.'));
out.push(p('**Language box – Practise (samples):**  1 I\'m sorry for the late reply; your message was under forty others and that is my filing, not your timing. It is answered now.  2 I\'m sorry — that figure is mine. The correct invoice goes today.  3 I\'m sorry that nobody telephoned you. The driver had no signal; from now on the office calls when we don\'t know, not only when we do.  4 I\'m sorry, I\'ve forgotten your name. Would you tell me again? I will not ask twice.  5 I\'m sorry you had to wait for that — it was our figure and we are sending the correct one today.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Mr Samir. The same fault is back, three weeks after you repaired it.'],
  ['B', 'You\'re right, and I\'m sorry — I used the cheaper part, and that was my decision, not the supplier\'s.'],
  ['A', 'It is the second time this year somebody has done that to me.'],
  ['B', 'Then I understand why you came in instead of telephoning. Here is what I\'m doing: it comes back this week, with the proper part, and you pay nothing — not for the part and not for the work.'],
  ['A', 'And if it fails again?'],
  ['B', 'Then it is a different fault and I will say so, and you will not pay for that either until we know.'],
  ['A', 'That is better than last time.'],
  ['B', 'And one more thing, which is not an apology: I don\'t use that part on that machine any more. Not for you and not for anybody.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners count the apologies: **one** is right. Then write what will change. Typical errors: three or four apologies; _sorry for to be late_; _I apologise about_; the passive (_an error occurred_), which is Apology 2 arriving in speech.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What for', 'The fix', 'What will change'], [
  ['a message I never answered', 'answered it there and then, in front of them', 'anything unanswered by Thursday gets answered badly rather than not at all'],
  ['sending the wrong file twice', 're-sent, with the right name on it', 'the file name now has the date in it'],
  ['forgetting somebody\'s name twice', 'asked again, plainly', 'wrote it down the moment they said it'],
], [1.3, 1.6, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I apologised to Fadi for never answering his message. I said I would answer it there and then, and that from now on anything unanswered by Thursday gets a bad answer rather than no answer."', 'The accepted apology is nearly always **the practical one**. The sorriest one is usually the one that asks to be forgiven, which is work for the person who was wronged.']));
out.push(stage('5', 'Read'));
out.push(p('1 Apology 1 says it **once**; Apology 2 says it **four** times (apologise, deeply regret, sincere apologies, once again).  2 What was actually done, by whom, when, and what happens to the money.  3 The January list is off the wall, and they now keep one price list only, and it is dated.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Mrs Haddad, You are right about Tuesday and I am sorry: the appointment was in the book for the wrong week, and I wrote it there.  Hala telephoned you yesterday and you have an appointment for Thursday at nine, with your file already pulled and on the desk. You will not wait.  What has changed: the book is now checked at noon as well as at the end of the day, so a wrong week is found before the day and not on it.  Rasha Hamdan, 0988 450 176']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Sorry once', '✓'],
  ['What **you** did, active voice', '✓ – "I wrote it there"'],
  ['What has been done, with a name', '✓'],
  ['What has changed', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The "what has changed" people believe is **small, specific and inside work somebody already does** — _the book is checked at noon as well_. Nobody believes a new weekly review.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['The garage apologised for a week and never once said what they had done. "We apologise for the inconvenience" four times in two telephone calls, and the car still made the noise. What was missing was one sentence: which part, who fitted it, and what they were going to do now. I would have forgiven the fault in a minute. I have not forgiven the four apologies.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I have not forgiven the four apologies." I have had exactly that._   ✓ _What would have fixed it?_   ? _Did you go back?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('What is missing is nearly always **the fix**, not the sorry. Count it on the board; the number makes the argument better than the Writer\'s box does.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Dear Mr Khalil, You are right and I am sorry: we sent the order to your old address because we copied it from last year\'s file. The boxes were collected on Tuesday and delivered the same afternoon, and nothing was lost. If you paid the delivery charge, it comes back this week as money. What has changed: addresses are now taken from the last invoice, not the last order, because the invoice is the one customers correct. Samir Khalil, 0944 702 118']));

// ===================== 12.4 =====================
out.push(pb());
out.push(h2('12.4  Thank you for sending it so quickly'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Thank you for **sending** it quickly · for **waiting** · for **explaining** it twice · for **coming** on a Friday · for **not telling** anybody.'));
out.push(p('**b**  The second. _Thank you for everything_ costs nothing and says nothing; _thank you for sending the boxes on Tuesday — it saved the Homs order_ is a fact the other person can be proud of.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a quick delivery)   **b**  1 She put sixty boxes on a lorry that was already loaded, which meant something of hers came off it.  2 That if there is ever a week when Sham Trading can make something easier at Ms Shamsi\'s end, she should say — not as a favour, but because Nour would like to owe less.'));
out.push(p('**Language box – Practise (samples):**  1 Thank you for sending it on Tuesday — it meant the order went out the same week, and I know you had to take something off that lorry.  2 Thank you for staying until seven. We finished, and you missed your service to do it.  3 Thank you for explaining it twice without making me feel stupid the second time.  4 Thank you for covering the counter. You did your work and mine and said nothing about it.  5 Thank you for telling me on Monday instead of Thursday. Monday I could do something about it.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Umm Samer, I\'m telephoning to say thank you, and that\'s all — I\'m not going to ask you for anything.'],
  ['B', 'That is a strange telephone call. Go on.'],
  ['A', 'Thank you for taking the children to school for two weeks. You left your own house twenty minutes early every morning, which I know means you got up at six.'],
  ['B', 'I was going anyway.'],
  ['A', 'You were going at twenty past seven. You went at ten to.'],
  ['B', 'Hm.'],
  ['A', 'And thank you for never mentioning it. My son told me, in September, by accident.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **cost** that was named — and watch the face of the person being thanked when it is. Typical errors: _thank you for come_; _thanks for your helping_; a thank-you with no specific, which is the fault the whole cycle exists to cure.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'What for', 'The effect', 'What it cost them'], [
  ['Rasha', 'covering the counter in May', 'the stock count finished on time', 'two days of her own work pushed to the weekend'],
  ['Fadi', 'telling me the job was wrong on Monday', 'we fixed it before the customer saw it', 'he had to say it before he had to'],
  ['a teacher, nine years ago', 'keeping me after school for a year', 'I passed, and I am in this class', 'an hour a day, unpaid, for a year'],
], [1, 1.4, 1.3, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I thanked Fadi for telling me on Monday that the job was going wrong. It meant we fixed it before the customer saw it, and I know it cost him — he had to admit it before he had to."', 'The oldest thank-you in most rooms is to **a teacher**, and the reason it waited is almost always that the person did not know it was allowed.']));
out.push(stage('5', 'Read'));
out.push(p('1 Thank you, and **no order in this message** — nothing is being asked for.  2 Putting the boxes on Tuesday\'s lorry; and telling her on **Monday** that she could, rather than leaving her to hope.  3 Because an offer that is really a favour creates a debt, and the point of the message is the opposite: she would like to owe less.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Thank you for the two weeks in May — nothing is being asked for.  Dear Umm Samer, Thank you for taking Layla and Omar to school every morning for two weeks while I was in hospital. I know what that meant: you left your own house twenty minutes early, which means you got up at six.  They did not miss one day. Layla did her exam on the Thursday and she has no idea that anything unusual was happening at home, which is how it should be.  Thank you also for never mentioning it. My son told me in September, by accident.  If there is ever a morning when I can take yours — or a week, or a month — say so. I am not offering a favour. I would like to owe less than I do.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Nothing is asked for', '✓'],
  ['Exactly what they did', '✓'],
  ['What it made possible, with a detail', '✓ – the Thursday exam'],
  ['A second thank-you for something small', '✓ – never mentioning it'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The small thank-you — _for never mentioning it_, _for telling me early_, _for explaining it twice_ — has usually **never been said to that person by anybody**. Ask the class; the silence is the answer.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Mr Jamil taught me maths for a year after school and never took a pound for it. I passed, and that is why I have the job I have, and the flat, and probably the marriage. He died in 2016. I am writing this nine years late because I did not know, at fifteen, that you were allowed to thank an adult for something that large.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I did not know you were allowed." Send it — to his family._   ✓ _Can you still reach them?_   ? _Did he know what he had done?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count out loud how many of these people could still be reached this week. The number is usually higher than anybody expects, and this is the moment to say so.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['I sent it to his daughter. She wrote back the same evening and said he had kept a list of the ones who passed, and that my name was on it.']));

// ===================== 12.5 =====================
out.push(pb());
out.push(h2('12.5  Would you like some tea while you wait?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _Would you like to sit down? · Would you like some tea? · Would you like me to telephone him?_  Refusals: _No, thank you. · That\'s very kind, but I\'ve just had one. · Thank you — I\'m fine where I am._'));
out.push(p('**b**  **some** in an offer, **any** in a real question. _Would you like **some** tea?_ is a gift, not a question about whether tea exists; _Have you got **any** tea?_ is a genuine question.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Mr Ayoub is at the bank until eleven)   **b**  1 Twice — and he accepts on the second.  2 The small room instead of the counter; and to telephone Mr Ayoub.'));
out.push(p('**Language box – Practise (samples):**  1 Would you like some tea? … Are you sure? It\'s already made.  2 Would you like to sit down? … Please — you\'ve been standing since nine.  3 Would you like me to telephone him? … It\'s no trouble; he can be back in twenty minutes.  4 Would you like to wait in the small room? … It\'s quieter and the window opens.  5 Would you like me to take a message instead? … Then you don\'t have to wait at all.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Mrs Darwish, I\'m sorry — the doctor is about thirty minutes behind. Would you like to wait?'],
  ['B', 'I\'ll wait. I have nothing else today.'],
  ['A', 'Would you like some water?'],
  ['B', 'No, thank you.'],
  ['A', 'Are you sure? It\'s cold, and it\'s a warm room.'],
  ['B', 'Then yes. Thank you.'],
  ['A', 'And please sit over there, away from the door — it opens every two minutes and there\'s a draught.'],
  ['B', 'Thank you.'],
  ['A', 'One more thing: would you like me to telephone whoever is collecting you, so they don\'t wait outside for half an hour?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the offer that was **not** food or drink. In both role cards it is the one the visitor actually wanted. Typical errors: _Do you want tea?_ (a question, not an offer); _Would you like **any** tea?_; pressing a third time.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Offers made', 'Accepted?', 'The best one'], [
  ['tea · a chair · the quiet room · to telephone', 'the chair and the call', 'the call — nobody thinks of it'],
  ['water · a magazine · the fan moved · a named time to come back', 'the fan and the time', 'the named time: "come back at four and you will be seen"'],
], [2, 1, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"When I was waiting, Hala offered me tea, a chair and a magazine. The one I wanted was none of those — I wanted somebody to tell me how long, so I could decide whether to stay."', 'The offer nobody makes is nearly always **information**: how long, and a named time to come back. It costs nothing and it is what waiting people actually want.']));
out.push(stage('5', 'Read'));
out.push(p('1 They are not "welcome" — they are the point.  2 Tell Nour by Monday 17 whether you are coming and how many — not because of the invitation, but because of the food.  3 By telling the customers and suppliers in advance that nobody is going to talk about an order, with a joke to make it stick.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**HAMDAN STORES — THE EID GATHERING.**  You are invited to the Eid gathering at the shop, on **Friday 21 June, from 10 am until about 1 pm**, in the yard behind — inside if it rains, which it will not.  **Who is invited:** everybody who works here, and your families. Bring the children; there is a wall they can sit on and nothing they can break.  **What there is:** food at ten and again at twelve, and tea all day. Bring something if you want to; if you would rather not, please do not.  **What you do not need to do:** reply, dress up, or stay. Come for half an hour if that is what you have.  **One thing we ask:** tell me by Wednesday how many are coming — not for the invitation, for the food.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Start **and** rough end time', '✓'],
  ['Families included, meant', '✓ – the wall'],
  ['A _you do not need to_ list', '✓'],
  ['The real reason for the request', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The invitation people accept is the one with the **_you do not need to_** list. Shy people and tired people refuse invitations because of obligations that were never there.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['We broke down outside a village near Salamiyah and a man we had never met took us into his house for four hours while his son found a part. His wife fed six of us. When we tried to pay, he was not offended, which is the remarkable thing — he simply said that we would do the same, as if it were a fact about us that he already knew.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"as if it were a fact about us that he already knew." That is real hospitality._   ✓ _Did you ever go back?_   ? _Do you still have the village name?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Almost none of the remembered hospitality is expensive. It is nearly all **attention** — somebody noticed what you needed before you asked.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['**The street, the first Friday of September, from four until it gets dark.** Everybody on this stair and the one next door, and the children, who are the point. Tea and whatever anybody brings; bring nothing if you would rather. You do not need to reply or to stay. One thing: tell me by Wednesday how many, for the chairs.']));

// ===================== 12.6 =====================
out.push(pb());
out.push(h2('12.6  Please give my regards to your family'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Samples — customer: _Thank you for your time; please give my regards to your family._ · colleague: _All right, I\'ll let you go._ · somebody older: _Thank you for your patience with me; please give my regards at home._ · somebody just met: _It was good to meet you. I hope we speak again._'));
out.push(p('**b**  Most → least formal: **Yours sincerely** · **Kind regards** · **Regards** · **Best wishes** · **All the best**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a message for somebody — two of them)   **b**  1 That the answer to his second question is that they don\'t know either, and have been not knowing it for twelve years.  2 That he was right about the Tuesday delivery — and that Mr Tarabishi did not enjoy saying it.'));
out.push(p('**Language box – Practise (samples):**  1 Thank you for your time. Please give my regards to your son, and tell him we are still thinking about his second question.  2 I\'ll let you go. Say hello to Rasha for me.  3 Kind regards, and please pass on my best wishes to the whole team.  4 I was very sorry to hear about your father. Please give my condolences to your mother and your brothers. I will not keep you.  5 Eid Mubarak to you and the family, and thank you for this year.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Well. We have talked for ten minutes about an order.'],
  ['A', 'Before we finish — I only heard today about your father. I am very sorry.'],
  ['B', 'Thank you.'],
  ['A', 'I did not know him, and I am not going to pretend I did. But I know you took three weeks off in the spring and said nothing to anybody about why, and now I understand why.'],
  ['B', 'That is a kinder thing to say than most of what I have heard.'],
  ['A', 'I must let you work. Please give my condolences to your mother. And if there is a week when the order can wait, it can wait.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the "give my regards" sentence and judge whether only that person could have said it. For role card 2, watch for the commonest mistake with condolences: making the bereaved person comfort the speaker. _I don\'t know what to say_ asks for help; _I am very sorry_ does not. Typical errors: _give my regard_; _yours sincerely_ to nobody in particular; a closing said so quickly that the call does not close.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'My closing', 'What I was asked to pass on'], [
  ['Rasha', '"I\'ll let you go. Give my regards to your mother."', '"Tell Hala the shelf is fixed and she was right about it"'],
  ['Fadi', '"Thank you for your time — regards at home."', '"Tell Nour the second service is better after four"'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha asked me to tell you that the shelf is fixed, and that you were right about it."', 'Make the person it is for answer out loud. The stage is not about the grammar; it is about discovering that a passed-on message is a small gift, and that the class has been carrying them around all lesson.']));
out.push(stage('5', 'Read'));
out.push(p('1 Nothing — it is the only letter they send that asks for nothing.  2 For telephoning when something was wrong instead of telling somebody else.  3 Because a letter from "the management" is from nobody, and this is the one letter in the year that should be from people.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**To everybody on this stair — the end of the year.**  Dear neighbours, This is the only letter I have ever put on this door that asks for nothing.  It has been a year of no water on the third floor, a lift that worked for eleven days in March, and the night the stairs were dark for a week. None of you made that easy; several of you made it possible.  **To Umm Khaled:** thank you for the water key, and for knowing where everything in this building is, which nobody has ever written down.  **To Abu Samer:** thank you for the bulb on the second landing, bought with your own money and never mentioned until I asked.  Please give my regards to your families, who put up with our stairs without ever having chosen them.  Eid Mubarak, and may next year have fewer dark weeks.  Rasha, flat 6']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['It asks for nothing', '✓'],
  ['The year described honestly', '✓ – eleven days in March'],
  ['Thank-yous specific and uncomfortable', '✓ – "never mentioned until I asked"'],
  ['Signed by a person', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The paragraph people would keep is the one naming something the person **did not tell anybody about**. That is what a thank-you is for.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['To my sister, who took the rent in February and has never mentioned it since, and to Mr Ayoub, who gave a job to somebody with no experience and then explained the same thing four times without once suggesting it was the fourth. I am not asking either of you for anything. I am writing it down because this year I learned that people are not told, and that it costs nothing to tell them.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I would keep this letter._   ✓ _Is there anybody missing — your mother?_   ? _Will you send it?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Reading them in silence is the right way to end the cycle. Then ask whether anybody is going to send theirs — and leave the silence that follows. Some will.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['My sister — _"You took the rent in February and you have never once mentioned it."_  Mr Ayoub — _"You explained it four times without ever saying it was the fourth."_  Mr Jamil\'s daughter — _"My name was on his list, and his name is on everything I have."_']));

// ===================== 12.7 =====================
out.push(pb());
out.push(h2('12.7  Review & Mediate: the invitation and the thank-you note'));
out.push(stage('1', 'Get ready – Unit 12 quiz'));
out.push(p('**1** Congratulations **on** — five syllables, stress on the fourth.  **2** Its **purpose**. A custom with a reason is learned once; a custom without one is forgotten by Thursday.  **3** **Once** — then what you did about it, then what will change.  **4** Being **specific**: what they did, what it made possible, and what it cost them.  **5** _I must let you work._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (whether he is really invited)   **b**  1 It means it — the line after says _children are not welcome; they are the point_, and somebody wrote that on purpose.  2 Tell her by Monday how many — not for the invitation, for the food.'));
out.push(p('**Language box – Practise (sample):**  _It means you — "staff" is everybody, and families means families. You don\'t have to reply formally; just tell the office how many are coming, by the seventeenth, so they know how much food to get._'));
out.push(stage('3', 'Practise – sample mediation of document 1'));
out.push(sample(null, ['"It means you. \'Staff\' is everybody who works here — it isn\'t an office word for office people. Look at the next line: \'and their families\'. Everybody writes that; here they mean it, and if you read on, coming is entirely up to you — nobody is counting who turns up. The only thing they actually want is a number by the seventeenth, and that is about food, not about the invitation."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the question underneath the question. For document 1 it is _am I really wanted?_; for document 2 it is _did anybody actually notice anything, or is this a form?_ — and the honest mediation of document 2 may well be that it **is** a form, and that the person should be told so kindly rather than reassured falsely.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'The question under their question', 'The evidence I pointed at'], [
  ['Fadi', 'am I really invited, or is that just something people write?', 'his name on the bottom of the letter; "children are the point"'],
  ['Hala', 'is this thank-you about me, or about everybody?', 'nothing — it was a form, and I said so'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s an invitation. He asked whether it included drivers, but the real question was whether he was really wanted. I answered it by pointing at his own name on the bottom of the letter, and at the line about the children, which somebody wrote on purpose."']));
out.push(note('Twelfth and last unit of the book, so the ordinal is "twelfth". The mediation stage has returned in every unit of Book 1; the ordinal was correct in all twelve, and `qa.js` asserts it.'));
out.push(p('**The office-word list, complete.** Over Units 7 to 12 the class has collected: _attendance · apologies · mandatory · venue · prior to · discrepancy · dispatch · obstruct · designated · due · variance · revenue · fulfilment · consignment · outstanding · deferred · awaiting authorisation · re-issued · confidential · breach · disciplinary · termination · authorisation · line manager · notification · certification · consecutive · manual handling · irrespective of · however minor · protective equipment · invalidate · incident · assistance · per diem · subsistence · reimburse · expenditure · complimentary · notify reception · cordially invited · RSVP · professionalism._ **That list is the most valuable page in this book.** Copy it before the class disperses.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '"invited" + "voluntary" = you may, with family'],
  ['2', 'A', 'RSVP = say whether you are coming'],
  ['3', 'B', 'two congratulations: the branch and the timing'],
  ['4', 'B', 'the writer names their own mistake and the fix'],
  ['5', 'A', '_Would you like…?_ is an offer'],
  ['6', 'A', '"give my regards" = say hello from me'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Fadi, You and your family are invited to the Eid gathering at Mezzeh. It\'s on Thursday 20 June from eleven until about two, in the yard. Please tell me by Monday how many are coming — it\'s for the food, not for the invitation. Nour  _(44 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  He and his family are invited', '✓'],
  ['2  Thursday 20 June from eleven', '✓'],
  ['3  Tell Nour by Monday, how many', '✓'],
  ['25 words or more', '✓ – 44 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈45 words)'));
out.push(sample(null, ['Dear Ms Huda, Thank you for a year of Thursday evenings. You explained the past simple to me four times and never once said it was the fourth. Because of this class I answered the telephone in English last week without being frightened. I hope next year is lighter for you than this one was. Rasha']));
out.push(stage('HW', 'Homework – sample'));
out.push(sample(null, ['**The reply I hope for:** _Rasha, you answered that telephone yourself; I only stood in the room. Come and tell me next year how it went._', '_Compare it with the one you actually get. They are usually closer than people expect — which is the last thing this book has to say._']));
out.push(stage('✓', 'Unit 12 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'a', 'b', 'c', 'b', 'b', 'b']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — Waiting for: **Mr Ayoub (at the bank until eleven)** · Offered: **to wait; tea** · Accepted: **tea, on the second offer** · Second offer: **the small room, because the counter is noisy** · Last offer: **to telephone Mr Ayoub**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Ms Shamsi, Thank you for putting the sixty boxes on Tuesday\'s lorry. They reached us at two and the Homs order went out at three, so the branch opened on time. I am not asking for anything in this message. Nour  _(41 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** exactly what they did · what it made possible · one thing not being asked for — one mark each.',
  '**Language (2):** _thank you for_ + **-ing**; past simple for what happened.',
  '**Organisation and length (2):** greeting and name; 25 words or more.',
  '⚠ _Thank you for everything_ scores **0 of 1** on the first task point, however warm the rest is. Specificity is the task, and it is the whole point of 12.4.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 12, and one about the unit itself', [
  '**1  _Congratulations for_, and the lost -s.** Both are stubborn because both are logical. Put _Congratulations **on**_ on the wall in Unit 12 and leave it there for the test.',
  '**2  The apology that repeats.** Learners who have been taught that English is polite will apologise three times, and it reads as weakness to the very people they are trying to respect. The drill is physical: say it once, then say _here is what I am doing_, then **stop talking**.',
  '**3  _Thank you for everything._** It is warm, correct and worthless. Refuse it every time in 12.4 and ask: **what exactly, and what did it make possible?**',
  '⚠ **And one about this unit.** Half of Unit 12 asks learners about their **own** customs, and on those tasks you are not the authority — they are. The teacher\'s job here is to ask _why?_ and then be quiet. A class that leaves Unit 12 able to explain its own customs calmly, in simple English, has got something out of this book that the A2 Key examination cannot measure and that will be worth more than the certificate.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 12 · Answer Key');
