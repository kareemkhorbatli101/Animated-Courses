// Proactive Business English A2 · Syria Edition · Book 1 · Unit 10 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 10  Health and Safety at Work'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 10.1 =====================
out.push(h2('10.1  My back hurts'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  a headache → **head** · back pain → **back** · a cut → **finger** · a burn → **hand** · a sprain → **ankle**'));
out.push(p('**b**  My back **hurts**. · I\'ve got **backache / pain** in my back. · My back **feels** sore.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (his back)   **b**  1 Since Tuesday — the pallet with the tiles.  2 Rest for a week.'));
out.push(p('**Language box – Practise (samples):**  1 My head hurts. / I\'ve got a headache.  2 My back hurts. / I\'ve got backache.  3 I\'ve got a cut on my finger. / My finger hurts.  4 My eyes ache. / I\'ve got sore eyes.  5 I\'ve got a temperature. / I\'ve had a temperature since this morning.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'You\'re holding your arm. What\'s wrong?'],
  ['B', 'Nothing. My shoulder hurts a little.'],
  ['A', 'A little. Since when?'],
  ['B', 'Since the long Aleppo run. Ten days. It isn\'t the first time.'],
  ['A', 'Ten days. Have you got pain when you drive, or when you turn?'],
  ['B', 'When I turn to reverse. Driving forward is fine.'],
  ['A', 'Then you should see somebody.'],
  ['B', 'For a shoulder? They will tell me to stop driving.'],
  ['A', 'They might tell you something else.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the length and the argument that worked — it is nearly always _they might tell you something else_, because it does not ask the person to admit anything. Typical errors: _since four days_ → _**for** four days_; _I have pain in my head_ → _I\'ve got a headache_; _I feel sick_ for "unwell".'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'What hurts', 'Since / for', 'What they do'], [
  ['Rasha', 'her feet, badly by four', 'for two years', 'nothing — "it\'s the job"'],
  ['Fadi', 'right shoulder', 'since the Aleppo run', 'painkillers in the cab'],
  ['Samir', 'his eyes, after cutting', 'for about a year', 'he stopped wearing the goggles because they fog'],
], [1, 1.3, 1.1, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha\'s feet hurt. They\'ve hurt for two years, and they\'re worse by four o\'clock. She does nothing about it, because she says it\'s the job."', 'The part most classes name is **the back**, then **the feet**, then **the eyes** — and almost nobody has told anybody at work. That silence is the finding, not the pain.']));
out.push(stage('5', 'Read'));
out.push(p('1 A strain, not anything worse — but no lifting for ten days.  2 He can count, write and tell people what to do; he cannot lift.  3 So that there is a record, and so that nothing depends on a telephone call being remembered correctly at half past seven in the morning.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Rasha, I am not opening the shop this morning. My ankle has been swollen since Thursday and the clinic saw me last night. They say it is a sprain, not broken, but I must keep it up for five days. I can do the orders and the telephone from home, and I can do the books. Samir must open, close and do anything that needs the ladder. The stock count on the 15th: I can do the counting if somebody carries. If that is difficult, move it to the 22nd and tell me today, not on the 14th. I am telephoning you as well.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_since_ + point, _for_ + length', '✓'],
  ['What you **can** still do', '✓'],
  ['Who must do the rest', '✓'],
  ['A decision needed, with a date', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "I know exactly what my morning looks like, which is the point. The line about the stock count saves a telephone call on the fourteenth."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('The easiest morning to plan comes from the message that says **what is still possible**. A message of pure absence leaves the reader to invent the whole day.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['My wrist started hurting when I was nineteen, in the first month at the bakery. I said nothing for two years because everybody\'s wrist hurt. When I finally went, the doctor said I had been holding the tray wrong since the day I started, and that nobody had ever shown me. Now I turn the tray and I show every new person on their first morning. It takes forty seconds.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"nobody had ever shown me" — forty seconds against two years._   ✓ _How long until it stopped hurting?_   ? _Does anybody else do the forty seconds?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most people wait **months or years**, and the reason is almost always the same: everybody else has the same pain, so it does not count as a problem. Say that out loud; it is the most useful thing in the cycle.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Since: since Tuesday · since the summer · since I changed jobs · since my son was born · since eight this morning.  For: for four days · for two years · for an hour · for six weeks · for as long as I can remember.']));

// ===================== 10.2 =====================
out.push(pb());
out.push(h2('10.2  You shouldn\'t lift that alone'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _You should look at something far away every twenty minutes. · You shouldn\'t carry a box down stairs if you can\'t see your feet. · You should stop for five minutes every two hours, even if you\'re busy._'));
out.push(p('**b**  **Advice:** take a break · shouldn\'t lift that alone.  **Rules:** must wear goggles · mustn\'t walk in the yellow square.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (both — alone, and with a bent back)   **b**  1 Bend your knees not your back · keep it close · turn with your feet.  2 That nobody taught him; he learned it from his own back at thirty-one and has paid for it every winter since.'));
out.push(p('**Language box – Practise (samples):**  1 You should bend your knees, because your back is not a hinge.  2 You should look away every twenty minutes, because your eyes stop focusing.  3 You should stop for five minutes, because you make more mistakes in the last hour than the first three.  4 You should wash it and cover it, because a warehouse cut gets dirty in a minute.  5 You should move your weight from foot to foot, because standing still is harder than walking.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Samir. Stop. Stop now.'],
  ['B', 'It isn\'t far.'],
  ['A', 'You\'re leaning out past the ladder and both your feet are on one rung. You shouldn\'t reach from a ladder, and you shouldn\'t be up there alone.'],
  ['B', 'How should I do it?'],
  ['A', 'Three things. You should move the ladder instead of reaching — it takes nine seconds. You should keep three points of contact, two feet and a hand. And you should have somebody at the bottom.'],
  ['B', 'Move, three, hold.'],
  ['A', 'Move, three, hold. And if it feels awkward, you should come down even if you can reach it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three-word reminder and test it the next day. Typical errors: _should to bend_; _he should bends_; _must_ for every piece of advice, which flattens the difference the cycle is built on.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What I taught', 'My three pieces of advice', 'My three-word reminder'], [
  ['carrying a tray of bread', 'two hands under, elbows in, turn with the feet', 'under, in, feet'],
  ['standing at a counter all day', 'one foot up on something low, change every ten minutes, shoes a size bigger by four o\'clock', 'up, change, bigger'],
], [1.2, 2.4, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"You shouldn\'t carry a tray on one hand above your shoulder. You should take it with two hands underneath, keep your elbows in, and turn with your feet. Remember: under, in, feet."', 'The advice people actually follow is the one that takes **less than ten seconds** and does not need equipment.']));
out.push(stage('5', 'Read'));
out.push(p('1 Before anybody bends — in the looking.  2 Over 25 kg · awkward · above shoulder height · anything you cannot see over.  3 Finish the job first.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THE OVEN — HANDS, EDGE, LOOK** · on the wall by the bench.  **Before you open it, look.** Where is the tray going? Is the bench clear? Is anybody behind you? Most burns are decided before the door opens.  **Hands.** Both hands, both cloths, and dry ones — a wet cloth carries the heat straight through in under a second.  **Edge.** Take the tray by the long edge, not the corner. A tray held at the corner tips, and it tips towards you.  **Look.** Say "behind you" when you cross the kitchen with anything hot. Never assume somebody heard the oven open.  **Two people, or none.** Anything above head height, anything you cannot see over, anything on the top shelf: get somebody.  **If it has already happened.** Cold water, twenty minutes, straight away. Do not finish the service first. Tell the head cook, even for a small one.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A title that is the reminder', '✓'],
  ['Every piece of advice has a reason', '✓'],
  ['A number on a limit', '✗ – "above head height" but no weight or time'],
  ['What to do when it has gone wrong', '✓ – twenty minutes'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A title is remembered a month later when it is **three words in the order you do them**: _knees, close, feet_ · _hands, edge, look_ · _move, three, hold_.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['In ten years your back and your right shoulder will hurt, because you will carry everything on one side and nobody will tell you. Change sides. Put the heavy thing down and pick it up again on the other arm; it costs two seconds. Sit down for your tea, properly, not on a crate — a crate is a chair with a punishment in it. And buy good shoes before you need them, not after.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"a crate is a chair with a punishment in it" — nobody told me this._   ✓ _What would you have done differently?_   ? _Did anybody tell you, or did you work it out?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Almost nobody received any of this advice when they started. That is the point of the cycle, and the class will make it better than the book does.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['You should put the screen at arm\'s length. You should look at something far away every twenty minutes. You should keep your feet flat. You should stand up every hour, even for one minute.  You shouldn\'t hold the telephone with your shoulder. You shouldn\'t eat at the desk every day. You shouldn\'t work with a window behind the screen. You shouldn\'t ignore a headache that comes at the same time every afternoon.']));

// ===================== 10.3 =====================
out.push(pb());
out.push(h2('10.3  Twice a day, after meals'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  twice a day = two times · every eight hours = at fixed intervals, three times in 24 hours · before meals = on an empty stomach, usually 30 minutes before · after meals = with food in the stomach · as needed = only when you need it, **up to a stated limit** · finish the course = take all of them even when you feel better.'));
out.push(p('**b**  The two most often got wrong: **as needed** (people forget the limit) and **finish the course** (people stop when they feel better). The first can lead to an overdose; the second brings the illness back, often worse.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Nour to Abu Yasser)   **b**  1 Twice a day, after food, morning and evening — all ten days.  2 Take them on an empty stomach; stop at four days; put the cream near his eyes; or lift anything heavy for ten days.'));
out.push(p('**Language box – Practise (samples):**  1 One tablet, twice a day, after food, for ten days.  2 Two tablets every eight hours — not more than six in a day.  3 Put it on three times a day, on the skin only.  4 Take it half an hour before you eat, on an empty stomach.  5 Take all of them, even if you feel better after three days.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Rasha, the paper from the clinic. The writing is a doctor\'s writing.'],
  ['B', 'Let me look. Two things. The capsules: one, three times a day, with water.'],
  ['A', 'Three times. Not two.'],
  ['B', 'Three — morning, afternoon, evening. And you must take all of them, seven days, even if the cough stops on day three.'],
  ['A', 'Why, if it stops?'],
  ['B', 'Because the cough stopping is not the same as the infection stopping. If you stop at three days it comes back, and the second time it is harder to treat.'],
  ['A', 'And the second thing?'],
  ['B', 'The syrup, ten millilitres, at night only. It makes you sleepy — don\'t drive the next morning until you know how it affects you. Say it back to me.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the instruction in four groups. Typical errors: _two times in the day_ → _twice a day_; _since ten days_ → _**for** ten days_; dropping the condition (_even if you feel better_), which is the half that matters.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What I explained', 'Did they repeat it right?', 'The part that went wrong'], [
  ['the capsules and the syrup', 'nearly', 'they said "for seven days" and dropped "all of them"'],
  ['how to use the new till', 'no', 'the order of the two buttons'],
  ['my mother\'s recipe', 'yes', '—'],
], [1.6, 1.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I explained the capsules. Fadi repeated it and got the number of days right but dropped \'all of them\'. The part people lose is the condition, not the number."', 'Across a class the detail most often lost is the **condition** (_even if_, _only when_, _not with_), then the **length**. Numbers survive; qualifiers do not.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because he will read it once and put it in a pocket — the capitals are what survives one reading.  2 If it gets worse, or if he gets pain down his leg.  3 Day ten, 18 May — in pencil, because the date can move if he starts a day late or the clinic changes it.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**SAMIR — the seven days** · written out by Rasha, 14 May.  **Capsules.** ONE capsule, THREE times a day, WITH WATER. Morning, afternoon, evening. **All seven days**, even if the cough stops on day three. Not on an empty stomach if it makes you feel sick.  **Syrup.** TEN millilitres, AT NIGHT ONLY. It makes you sleepy — do not drive the next morning until you know how it affects you.  **No night shifts this week.** That is from the doctor, not from the medicine.  **If you get a fever, or if it is harder to breathe:** go back the same day. Do not wait for the weekend because the clinic is quieter.  **Day seven is 21 May.** It is on the calendar by the till.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The numbers stand out', '✓'],
  ['The condition people break is named', '✓'],
  ['An end **date**', '✓'],
  ['When to come back', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('What survives one reading is **capitals** and **the last line**. Bold alone does not; a long first paragraph certainly does not.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['My father stopped his tablets after five days because he felt well. Nobody had told him why he should not, only that he should not. Three weeks later he was back in the clinic and the second course was four weeks instead of two. He is not a careless man. He simply had an instruction with no reason attached, and an instruction with no reason is a suggestion.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"an instruction with no reason is a suggestion" — everybody does that._   ✓ _What would have made him finish them?_   ? _Does he finish them now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The instruction people break is nearly always **the one with no reason attached**, not the hardest one. People will do very difficult things if they know why.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Before (on the packet): _Dosage: 1–2 tablets every 4–6 hours as required. Do not exceed 8 tablets in 24 hours._  After: **ONE or TWO tablets, not more often than every four hours.** **Never more than EIGHT in one day** — count them, because it is easy to lose track when you are in pain. If you still need them after three days, see somebody.']));

// ===================== 10.4 =====================
out.push(pb());
out.push(h2('10.4  I\'d like to make an appointment'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  The name (spelled) · who it is for · what it is about · how long it has been going on · when you can come. Often also: an identity number, and whether you have been before.'));
out.push(p('**b**  On the telephone: the first three. At the desk only: _Here\'s my card._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (tomorrow at nine)   **b**  1 The name, what it is about, an identity card and any old X-rays.  2 Because Thursday is four more days and he lifts for a living — so she asks for earlier.'));
out.push(p('**Language box – Practise (sample for 1):**  _Good morning. I\'d like to make an appointment, please — it\'s for my mother. Samira Haddad, H-A-D-D-A-D. It\'s her knee; it\'s been bad since last month and she can\'t get down the stairs. Have you got anything this week? … Thursday at ten, Samira Haddad. Should she bring anything?_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Al-Amal Dental, good morning.'],
  ['A', 'Good morning. I\'d like to make an appointment, please. Samir Khalil, K-H-A-L-I-L.'],
  ['B', 'And what\'s it about?'],
  ['A', 'A tooth, on the left at the back. It\'s been bad since Friday.'],
  ['B', 'I can give you the twenty-eighth.'],
  ['A', 'That\'s two weeks. Have you got anything earlier? It\'s kept me awake for three nights.'],
  ['B', 'Let me look… there\'s a cancellation tomorrow at half past seven in the morning.'],
  ['A', 'Half past seven is fine. Tomorrow at seven thirty, Samir Khalil. Thank you.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what made the earlier slot appear. It is nearly always the **concrete detail** — _three nights awake_, _he lifts for a living_ — not the words _it\'s urgent_. Typical errors: _I want an appointment_; _since two weeks_; not spelling the name and losing the whole call.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Where', 'For what', 'First offered', 'Got'], [
  ['the dentist', 'a tooth, three nights awake', 'the 28th', 'tomorrow 7.30'],
  ['the garage', 'a noise from the front wheel', 'Thursday', 'Tuesday, if left overnight'],
  ['the passport office', 'papers expiring on the 25th', 'the 28th', 'before nine, no appointment'],
], [1.2, 1.6, 1, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I telephoned the passport office about papers that expire on the twenty-fifth. They offered the twenty-eighth. I said the papers expire before that, and they told me mornings before nine take people without an appointment."', 'Count the class: usually **more than half** got something better by asking once. That number is the lesson.']));
out.push(stage('5', 'Read'));
out.push(p('1 The one on the corner opposite the bakery — not the new one by the roundabout.  2 That he lifts for a living and is not going to stop, so he needs to know what he **can** do, not only what he can\'t.  3 Come in first "for half an hour" — because with him half an hour is two hours and a pallet.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**SAMIR — your appointment.**  **Tomorrow, Tuesday 16 May, 7.30 am.** Al-Amal Dental, above the pharmacy in Zahra Street — not the one on the main road with the same name.  **In the name of:** Samir Khalil. They have it as K-H-A-L-I-L; if they call "Khaleel", that is you.  **Bring:** your identity card and the old X-ray in the brown envelope. If you cannot find it, go anyway.  **Tell them:** it started on Friday; it is worse at night and when you drink anything cold; and you cannot take the strong painkillers because of your stomach.  The shop is covered: I open and Hala does the till until you are back. Do not come in first. Go, and then come.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Date, time, which place and which it is not', '✓'],
  ['What to bring, and what if they cannot', '✓'],
  ['What to tell them about the life', '✓ – the stomach'],
  ['What is covered', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A line works on a person when it names **their** habit, not a general one: _do not come in first_, _half an hour is two hours and a pallet_. Generic encouragement has never moved anybody.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['It took my sister and me four months to get our father to a doctor. We tried the pain, which he denied, and the family, which made him angry. What worked in the end was my sister saying she would come with him and sit in the waiting room, so that he did not have to walk in alone at sixty-eight and say he was frightened. He went the next week.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _You were right to push, and right about what finally worked._   ✓ _What finally worked?_   ? _What did the doctor say?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Pain almost never moves people; **family** sometimes does; **company** — somebody coming with you — moves them most often. Worth collecting on the board.'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample(null, ['— Al-Shifa Clinic, good morning.  — Good morning. I\'d like to make an appointment, please. Rasha Hamdan, H-A-M-D-A-N.  — What\'s it about?  — A check for my blood pressure. Nothing is wrong; I have been putting it off for a year.  — Thursday the 25th?  — Have you got anything on a Sunday or a Monday? I cannot leave the shop on a Thursday.  — There is Monday the 22nd at eight.  — Monday the 22nd at eight. Should I bring anything? — Your card and any old readings. — Card and old readings. Thank you.']));

// ===================== 10.5 =====================
out.push(pb());
out.push(h2('10.5  Don\'t lift that alone!'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _Stop! · Don\'t move. · Watch out! · Mind your head. · Behind you!_ — two words or fewer, every time.'));
out.push(p('**b**  Most urgent → least: **Stop!** → **Don\'t touch that.** → **You shouldn\'t touch that.** → **I wouldn\'t touch that.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a fall — a strap and a pallet edge behind her heel)   **b**  1 _STOP. Don\'t move._  2 _Don\'t be sorry — you didn\'t put it there. I\'m not angry with you_ — because a person who is shouted at and then blamed stops reporting hazards, and the next one is worse.'));
out.push(p('**Language box – Practise (samples):**  1 _Stop! Don\'t step back._ → _There\'s a pallet behind you. Step forward, towards me._  2 _Don\'t touch that!_ → _The belt\'s still moving. Wait for it to stop, then clear it._  3 _Put it down._ → _That\'s over twenty-five. I\'ll take the other end._  4 _Mind the pan!_ → _The handle\'s over the flame. Turn it in — you didn\'t put it there._  5 _Stop — wait._ → _The forklift\'s reversing and he can\'t see you. Go round by the wall._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'STOP. Don\'t pick that up.'],
  ['A', 'What? What is it?'],
  ['B', 'Don\'t touch the handle. It\'s been over the flame for ten minutes and there\'s no cloth on it. Look at it. Now take the cloth from the hook first.'],
  ['A', 'Oh. I\'m sorry.'],
  ['B', 'Don\'t be sorry — you didn\'t put it there, and whoever turned that handle out should have turned it in. I\'m not angry with you, because I want you to shout at me when you see one.'],
  ['A', 'All right.'],
  ['B', 'And one thing for the future. Turn every handle in, every time, even for a second. Handles in, always.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that cleared the person. Most pairs forget it on the first attempt — which is exactly what happens in a real warehouse, and worth saying. Typical errors: _you don\'t move_; _please don\'t to touch_; a long explanation in the two seconds where two words were needed.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The hazard', 'The two-second instruction', 'The rule for next time'], [
  ['wet floor by the sink, no sign', '"Stop — floor!"', 'the mop and the sign live together; one never goes out without the other'],
  ['the gas pipe behind the fridge', '"Don\'t pull it!"', 'nobody moves the fridge alone, ever'],
  ['the top step on the stairs is loose', '"Mind the top step."', 'tape on it until it is fixed, and fixed this month'],
], [1.4, 1.4, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"At the shop the danger is the floor by the sink. You say \'Stop — floor!\'. The rule is that the mop and the sign live on the same hook, so one never comes out without the other."', 'Yes — in most classes the shared hazard **is the floor**: water, cable, strap, box. It is worth naming, because everybody thinks their own floor is a special case.']));
out.push(stage('5', 'Read'));
out.push(p('1 The system: straps are cut off and dropped, and somebody sweeps them at the end of the day. Nobody had ever written that down.  2 Changed: a bin for cut straps at the end of every aisle, today. Not changed: nobody is blamed, and nobody is told to work more slowly.  3 So that nobody hears about it and thinks Hala was careless — and so that shouting is recorded as the reason nobody was hurt, not as an embarrassment.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**NEAR MISS — the kitchen, Tuesday 16 May, 7.40 pm** · written by R. Hamdan, dictated by the head cook.  **What nearly happened.** Samir reached for a pan whose handle had been left over the flame for about ten minutes, with no cloth on it. He was called to stop and he stopped. Nobody was hurt.  **Why it was there.** Handles are turned out when the bench is crowded, because a handle over the bench catches sleeves. That is how it has worked for years and it has never been written down, so nobody thought it was a choice.  **What we have changed, today.** A second hook for cloths at the oven end, so there is always one within reach, and handles turned in — always, even for a second.  **What we have not changed.** Nobody is being blamed and nobody is being asked to work more slowly on a Tuesday night.  **Note from the head cook.** I shouted, and I want that written down, with the fact that he did nothing wrong. He stopped when he was told to, which was the only thing that mattered.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The system, not a character', '✓'],
  ['The habit behind the hazard', '✓ – crowded benches and sleeves'],
  ['One change, today', '✓'],
  ['A line clearing the person', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The _what we have not changed_ section exists so that the note does not quietly become a new workload. Most safety notes fail that way: one near miss, five new rules, and within a month none of them.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['A lorry came through the junction near our house while my nephew was crossing. Somebody shouted and he stopped. The real cause was not the driver and not the boy: the bakery parks its van on the corner every morning and nobody can see anything. Nothing changed. The van is still there, and everybody who lives in the street knows about it, and we all tell our children to be careful instead.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"we all tell our children to be careful instead" — that is what happens when nothing changes._   ✓ _Did anybody ever speak to the bakery?_   ? _Is the van still there?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most stories **nothing changed**, and in several somebody was blamed instead. Count both on the board; the contrast with the Sham Trading note makes the point without any speech from the teacher.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['1 The cable from the fridge across the doorway → clip it to the wall this week.  2 The top step on the stairs, loose for a year → tape it today, fix it this month.  3 No light above the store-room shelves → a bulb costs almost nothing and nobody has bought one for two years.']));

// ===================== 10.6 =====================
out.push(pb());
out.push(h2('10.6  Get well soon — and take your time'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. To a manager: _I hope you feel better soon. · Please take your time._ To a close colleague: _How is it? · Do you need anything? · Don\'t think about this place._'));
out.push(p('**b**  **_We really need you back._** It is meant as a compliment and heard as pressure, and it is why people come back too early. (_Let me know if you need anything_ is not wrong, but it puts the work on the ill person.)'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (both — Mr Ayoub, then Nour)   **b**  1 The warehouse, and the stock count.  2 That Fadi is doing the gate and everything about the night deliveries is written down — and that she is going past the pharmacy at five.'));
out.push(p('**Language box – Practise (samples):**  1 I\'m at the pharmacy at five — do you need anything?  2 Take your time; the stock count is moved and nobody asked you.  3 Don\'t think about Thursday — the report is put back a week.  4 I\'m driving past on Friday; shall I bring the children?  5 Rest properly, and don\'t come back and do it again in June.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Samir. How is it?'],
  ['B', 'It is flu. It will be flu tomorrow as well.'],
  ['A', 'Take your time. I mean that — don\'t come in on Thursday and give it to everybody.'],
  ['B', 'The Thursday report.'],
  ['A', 'The Thursday report is moved to Monday. I moved it, not you, and nobody asked me to. Don\'t think about it.'],
  ['B', 'And Mr Darwish? He only talks to me.'],
  ['A', 'I telephoned him this morning and told him you were ill and that he should ask for me until you are back. He said to tell you to rest. Two things, quickly: the report is moved, and Darwish knows. I\'m passing your street at six — do you need bread?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the concrete thing. The test is whether it was an **offer** (_I\'m passing at six — do you need bread?_) or a **question** (_let me know if you need anything_). Typical errors: _we really need you back_; _get well soon_ said slowly enough to frighten.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'Their worry', 'The fact I gave', 'What I offered'], [
  ['Rasha', 'the stock count on the 15th', 'moved to the 22nd, by the owner', 'to do the counting sheet at home if she wants'],
  ['Fadi', 'the Homs run on Tuesday', 'Samir is doing it and has the notes', 'to collect his wages and bring them round'],
  ['Hala', 'a customer who only deals with her', 'he has been told, and he said to rest', 'to bring the Friday bread'],
], [1, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi was worried about the Homs run. I told him Samir is doing it and has his notes, and I offered to collect his wages and bring them round."', 'The most useful offers are nearly always **small and already happening**: bread, wages, a lift, a prescription. Big offers are rarely taken up.']));
out.push(stage('5', 'Read'));
out.push(p('1 So that he does not feel he owes anybody an answer while he is in bed.  2 That his job and his way of doing things are still his — the mess is his mess, waiting for him.  3 Because it comes from a person, and because it tells him the near miss had a result and that Hala is all right — which is the thing he would actually be worrying about.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Nothing you need to do.  Samir, This message needs no reply. We are writing so that you can stop thinking about the shop.  **The till:** Hala, morning and evening, counted with me. Right both days.  **The Thursday report:** moved to Monday. I moved it, not you.  **Mr Darwish:** telephoned, told, and he says to rest.  **What we need from you:** nothing until the 22nd. If the doctor says anything you don\'t like, telephone me.  Hala says to tell you that she has not broken a single glass since you left, which she thinks proves something.  Take your time. The shop will be here, and so will the paperwork, which we are leaving for you on purpose.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A subject line that removes the worry', '✓'],
  ['Each worry answered with a name', '✓'],
  ['_nothing until…_', '✓'],
  ['Something from a person', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The last line that makes somebody rest is the one that says **your job is still yours** without saying it: the mess, the paperwork, the chair nobody has sat in.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['When I broke my arm, everybody sent messages and one person came. She did not ask what I needed; she brought soup and took the washing and did not stay long. Six years later I remember her and I could not tell you what anybody wrote. The wrong thing was my manager, who telephoned every day to ask when I was coming back, and called it concern.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"she did not ask what I needed" — that is the whole difference._   ✓ _What did you need that nobody offered?_   ? _Did you say anything to the manager?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Nearly everything on the board will be **small**: bread, a lift, the washing, somebody sitting there for ten minutes. Almost nothing will be big, and almost nothing will be words.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['Umm Khaled, I heard about your fall. Don\'t worry about Thursday — Rasha has the keys and the plants are watered. I\'m going to the market tomorrow morning and I\'ll bring bread and yoghurt and leave them with your sister. Take your time.']));

// ===================== 10.7 =====================
out.push(pb());
out.push(h2('10.7  Review & Mediate: what does the safety notice say?'));
out.push(stage('1', 'Get ready – Unit 10 quiz'));
out.push(p('**1** **since** Tuesday · **for** four days.  **2** Knees, close, feet.  **3** A **limit** — _as needed, up to four a day_.  **4** _Have you got anything earlier?_ — with a concrete reason.  **5** The sentence that clears the person: _you didn\'t put it there; I\'m not angry with you._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (that he must stop lifting)   **b**  1 Not a limit on the person — the weight at which you stop lifting **alone**.  2 That it is not trouble: it means tell Abu Yasser the same hour, and nobody writes your name anywhere.'));
out.push(p('**Language box – Practise (sample):**  _Over twenty-five kilos, don\'t lift alone — get somebody. And if you hurt yourself, even a little, tell the supervisor the same hour, not the next morning. Nobody gets into trouble for saying it._'));
out.push(stage('3', 'Practise – sample mediation of notice 1'));
out.push(sample(null, ['"Let me tell you what it actually says. Twenty-five kilos isn\'t a limit on you — it\'s the weight where you stop lifting alone. Over twenty-five, get somebody. And it\'s not only about weight: if it\'s awkward, or it wobbles, or it\'s above your shoulder, get somebody even if it\'s light. The last line sounds like trouble and it isn\'t: if you hurt yourself, even a small cut, tell Abu Yasser the same hour — not the next morning. Nobody writes your name anywhere. That\'s the whole notice."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two things that are really theirs. A speaker who repeats _irrespective of weight_ or _however minor_ has handed the fear back. The test is whether the listener relaxes.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'What they thought it meant', 'What it actually said'], [
  ['Fadi', 'that he was not allowed to lift the cement any more', 'over 25 kg, get somebody — nothing about him'],
  ['Hala', 'that the goggles rule meant somebody had complained about her', 'goggles for cutting and grinding only, and the insurance line is for the company, not for her'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a safety notice about protective equipment. Hala thought somebody had complained about her. It actually says two things that are hers: wear the yellow jacket in the yard, and wear goggles when you cut or grind. The long sentence at the end about insurance is between the company and its insurer — it isn\'t about her at all."']));
out.push(note('Tenth unit of the book, so the ordinal is "tenth". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(p('**The office-word list, continued from Units 7, 8 and 9:** _manual handling_ (lifting and carrying) · _irrespective of_ (whatever) · _however minor_ (even a small one) · _mandatory_ (you have to) · _protective equipment_ (jacket, goggles, helmet, gloves) · _invalidate_ (make it not count) · _incident_ (anything that goes wrong) · _assistance_ (another person) · _complete the course_ (take all of them) · _as required_ (only when you need it, up to the limit).'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '"require assistance" = get help, not a ban'],
  ['2', 'B', 'twice a day with food, and finish them all'],
  ['3', 'B', '"however minor" + "immediately"'],
  ['4', 'B', 'no lifting, but he can count and write'],
  ['5', 'A', '"when cutting or grinding" — those two jobs'],
  ['6', 'A', 'Tuesday 9.00 is the morning; bring the papers'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Fadi, My back is strained and the clinic says no lifting for ten days. Please do the lifting in the warehouse while I am on light work. And one thing for you — don\'t lift anything over twenty-five kilos alone, even when I am not there to shout. Thank you. Abu Yasser  _(48 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  What is wrong, and for how long', '✓'],
  ['2  Fadi does the lifting', '✓'],
  ['3  Not over 25 kg alone', '✓'],
  ['25 words or more', '✓ – 48 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈40 words)'));
out.push(sample(null, ['Samir, I\'m so sorry about your ankle — don\'t even think about Friday, just keep it up and rest. I\'ve moved the trip to the following Friday, so you lose nothing. I\'m coming past on Thursday evening with the DVDs and something to eat. Rasha']));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Thank you — I feel stupid. Please don\'t move the trip for me; go on Friday and tell me everything. But yes, come on Thursday. Bring the food.']));
out.push(stage('✓', 'Unit 10 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'a', 'b', 'a', 'b', 'b', 'a']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — Name: **Yasser Khalil (K-H-A-L-I-L)** · What\'s wrong: **his back** · Since: **Tuesday** · First offered: **Thursday at eleven** · Appointment: **tomorrow at nine**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Hala, Don\'t worry about the counter — Nour is doing it all week and the Thursday order is already sent. I\'m going past the pharmacy at five; do you need anything? Take your time and don\'t come back too early. Nour  _(42 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** one thing that is covered · one concrete offer · _take your time_ — one mark each.',
  '**Language (2):** imperatives and fixed phrases used naturally; _don\'t_ + plain verb.',
  '**Organisation and length (2):** greeting and name; 25 words or more.',
  '⚠ Take a task mark off for _let me know if you need anything_ used **instead of** a concrete offer. It is kind English and it is not what this cycle teaches; say so in the feedback, not only in the mark.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 10', [
  '**1  _since_ with a length of time.** _Since four days._ Arabic uses one word where English uses two, and no amount of explanation fixes it — only a wall chart with **since + a point** and **for + a length**, pointed at every time it happens, for the rest of the book.',
  '**2  _should_ flattened into _must_.** Learners who have met _must_ in Units 6 and 9 use it for advice too, and then sound as if everything is compulsory. The repair is the **consequence** question again: can I refuse this? If yes, it is _should_.',
  '**3  The kind sentence that does nothing.** _Let me know if you need anything._ This is the hardest thing in the unit because it is not an error — it is correct, polite English that has no effect. Make learners convert five of them into concrete offers out loud. It is the single most transferable thing in Unit 10, and it works in any language they speak.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 10 · Answer Key');
