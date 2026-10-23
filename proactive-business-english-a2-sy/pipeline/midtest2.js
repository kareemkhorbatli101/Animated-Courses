// Proactive Business English A2 · Syria Edition · Book 2 · MID-BOOK TEST (Units 13–18) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('MID-BOOK TEST  ·  Units 13–18'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (30 min) · **Writing** (30 min) · **Listening** (about 15 min) · **Speaking** (in pairs, about 7 minutes with your teacher).',
  'Total: **60 marks** — **Reading 18 · Writing 18 · Listening 12 · Speaking 12**. This is the weighting of the A2 Key examination (30 · 30 · 20 · 20 per cent), so your percentage here means something outside this classroom.',
  'This test covers **Units 13 to 18**: how long you have done something · what is already done and not done yet · plans, predictions and possibilities · conditions · figures · what the company used to do · training · and the English of email, instructions and failures.',
  '⚠ **Book 2 word counts.** Writing Part 1 asks for **35 words or more** and Part 2 for **60 to 100**. Fewer than the minimum loses marks even if the English is perfect.',
  'Write your answers on this paper, in pen. You **cannot** use a dictionary or your telephone.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (30 minutes · 18 marks)'));
out.push(part('Part 1  ·  Notices, notes and messages  (6 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _Enrolment closes 18 February. The course begins 4 March._']));
out.push(q('**A** You may enrol on 4 March.   **B** You must enrol by 18 February.   **C** The course ends in February.'));
out.push(model(['**2**  _Do not close the screen before the green line appears. If you close it first, nothing is saved and nothing tells you._']));
out.push(q('**A** Wait for the green line, then close it.   **B** Close it, then wait.   **C** The green line means it has failed.'));
out.push(model(['**3**  _Files held outside the shared folder are not backed up._']));
out.push(q('**A** Everything is backed up.   **B** The shared folder is not backed up.   **C** A file on your own computer is not backed up.'));
out.push(model(['**4**  _Prices have not moved since 14 March. Supplier prices have risen four times in the same period._']));
out.push(q('**A** Our prices rose four times.   **B** Our prices have stayed the same while our costs rose.   **C** Prices change every March.'));
out.push(model(['**5**  _Not a beginners\' course. For people who already use an accounts system daily._']));
out.push(q('**A** Anybody may come.   **B** Only beginners.   **C** You must already use the system.'));
out.push(model(['**6**  _Never pay a new bank account from an email alone._']));
out.push(q('**A** Telephone a number you already had, and check.   **B** Do not pay suppliers by bank transfer.   **C** Pay only when the email looks right.'));

out.push(pb());
out.push(part('Part 2  ·  Three colleagues  (4 marks)', 'Read about three people at Sham Trading. For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(table(['A  Hala – customer service', 'B  Fadi – driver', 'C  Nadia – accounts'], [[
  'Hala has worked at Sham Trading since March. Before that she worked for four years at a pharmacy counter in Latakia, where she served up to a hundred and twenty people a day. She has never worked in an office and she had never used an order system until this year. She is learning the invoice screen for an hour a week with Nadia, and she has already taken over the Thursday complaints.',
  'Fadi has driven here for six years. He knows every shopkeeper on four rounds and he has never gone to the wrong gate. He is not good at written notes, so he has started drawing a small map at the bottom of each one for the next driver. He is going to move to the lorry in June, when the second van arrives.',
  'Nadia has been here for eleven years — since March 2015. She used to write every invoice by hand and she says an invoice used to take twenty minutes and now takes four. She is away twice a year for a fortnight, and last September the month closed four days late because nobody else could close it.']], [1, 1, 1]));
out.push(sp());
out.push(q('**7**  Who has found their own way round a weakness?     A     B     C'));
out.push(q('**8**  Who is the only person who can do something?     A     B     C'));
out.push(q('**9**  Who has already taken on more than they were given at the start?     A     B     C'));
out.push(q('**10**  Who is going to change jobs because of something that is arriving?     A     B     C'));

out.push(pb());
out.push(part('Part 3  ·  A longer text  (5 marks)', 'Read the text and choose the correct answer **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**The morning the system was down — by Nour Mansour**',
  'It went down at twenty past eight on a Tuesday. Not slow: down. Nothing opened on any of the four screens, and the little network light that is usually green was red.',
  'Nadia had already restarted everything twice by the time I arrived, and she had telephoned the engineer, who said eleven o\'clock. So we had two hours and forty minutes of being a company from 1998, and the strange thing is that we were rather good at it.',
  'Abu Yasser had the book. He has kept the stock by hand as well as on the screen since 2016, because the system was down for nine days that year and we spent nine days selling what we could see. Nadia has been arguing with him about the eleven minutes a day it costs ever since. That Tuesday nobody argued.',
  'We took orders on paper with the date and the time on every one. We promised no stock that we had not looked at on the shelf. We telephoned the three customers who were expecting a confirmation and told them the truth: our system is down and the engineer is here at eleven. Not one of them minded. One of them said he would rather hear that than "a small technical problem", which is what the place he used to buy from always said.',
  'We took sixty-one orders before noon, which is more than a normal morning, because word went round the market that we were open and two other places were not.',
  'Mr Ayoub has since written a decision note. Both the book and the screen are kept. The book costs about forty-five hours a year and it has been the only record once in nine years, and he says he can do that arithmetic.',
]));
out.push(sp());
out.push(q('**11**  What had Nadia already done before Nour arrived?   **A** telephoned the customers   **B** restarted everything and called the engineer   **C** started the paper orders'));
out.push(q('**12**  Why does Abu Yasser keep the book?   **A** He does not trust screens.   **B** Mr Ayoub told him to.   **C** Because of nine days in 2016.'));
out.push(q('**13**  What did the customers think of being told the truth?   **A** They preferred it to "a small technical problem".   **B** Two of them complained.   **C** They did not believe it.'));
out.push(q('**14**  Why were there more orders than usual?   **A** Prices were lower.   **B** Other places were closed and the market heard.   **C** The lorry was in the yard.'));
out.push(q('**15**  What has Mr Ayoub decided?   **A** To keep both the book and the screen.   **B** To stop the book.   **C** To buy a new system.'));

out.push(pb());
out.push(part('Part 4  ·  Open cloze  (3 marks)', 'Write **ONE** word in each gap.'));
out.push(sp());
out.push(model([
  '**A message to a colleague who is starting next week**',
  'Hello Rana, two things before Sunday.',
  'I have worked here (16) ______ 2021 and the best advice I can give you is to ask on the first day, not in the third week.',
  'We (17) ______ going to open the second counter in May, so the first few weeks will be noisy. It is decided; the builder starts on the fourteenth.',
  'And one rule: if you order anything from Aleppo today, we (18) ______ get the old price. After Thursday it is eleven per cent more. See you Sunday — Hala',
]));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (30 minutes · 18 marks)'));
out.push(part('Part 1  ·  A fault report  (6 marks)', 'Write **35 words or more**.'));
out.push(sp());
out.push(box(null, [
  'Something at your work is not working properly. Write a short fault report.',
  'In your report:  •  say **what it is doing**, and where exactly  •  say **since when**, with a count  •  say **what you have already tried**.',
], C.grey, C.navy));
out.push(...lines(6));
out.push(sp());
out.push(part('Part 2  ·  A work email  (12 marks)', 'Write **60 to 100 words**.'));
out.push(sp());
out.push(box(null, [
  'An order you received is **two lines short**. Write an email to the supplier.',
  'In your email:  •  a **subject line** with the thing and the ask  •  which lines are missing and which are correct  •  a **request with a date**  •  and what you will do if there is no answer.',
], C.grey, C.navy));
out.push(...lines(11));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 15 minutes · 12 marks)'));
out.push(p('_Your teacher will play each recording **twice**._', { color: '595959' }));
out.push(part('Part 1  ·  Four short conversations  (4 marks)', '🔊 **Track MT2-1.** For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**19**  How long has Nadia worked there?   **A** four years   **B** nine years   **C** eleven years'));
out.push(q('**20**  What has Nour already done?   **A** booked the room   **B** sent the invoices   **C** telephoned Aleppo'));
out.push(q('**21**  What is wrong with the printer?   **A** it will not switch on   **B** it jams after about ten pages   **C** it has no paper'));
out.push(q('**22**  What does the speaker say about the message?   **A** Do not click it; telephone the number in our file.   **B** Reply and ask.   **C** Pay it, then check.'));
out.push(sp());
out.push(part('Part 2  ·  Complete the course notes  (5 marks)', '🔊 **Track MT2-2.** You will hear a telephone call about a course. Write **one or two words or a number** in each gap.'));
out.push(sp());
out.push(table(['COURSE — NOTES', ''], [
  ['How long', '**23** ______'],
  ['Days', '**24** ______'],
  ['Time', '**25** ______'],
  ['Fee', '**26** ______'],
  ['Enrolment closes', '**27** ______'],
], [2, 1], { headFill: C.navy }));
out.push(sp());
out.push(part('Part 3  ·  A longer talk  (3 marks)', '🔊 **Track MT2-3.** You will hear Mr Ayoub talking to the staff about files. Choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**28**  Where must everything that more than one person needs be kept?   **A** on your own computer   **B** in the shared folder   **C** in an email'));
out.push(q('**29**  What must a file name contain?   **A** the word "final"   **B** your first name   **C** what it is, the date and whose it is'));
out.push(q('**30**  What happens to a file that is replaced?   **A** It goes into Old and is not deleted.   **B** It is deleted.   **C** It is renamed "new".'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about 7 minutes · 12 marks)'));
out.push(p('_Full sentences, and **one extra detail** every time: a bare "yes" is the same as silence._'));
out.push(sp());
out.push(box('Part 1  ·  About you and your work  (6 marks · your teacher asks each candidate)', [
  '**1**  How long have you worked where you work? Say it with _for_ and with _since_.',
  '**2**  What have you already done today, and what haven\'t you done yet?',
  '**3**  What is your company going to do this year that it did not do last year?',
  '**4**  What did your workplace use to do that it does not do now?',
  '**5**  What are you good at, at work? What are you not good at, and what do you do about it?',
  '**6**  What would you like to be able to do that you cannot do now?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 2  ·  Talk together  (6 marks · the two candidates talk to each other)', [
  'Your teacher says: _"Your company has one person who is the only one who can close the month. She is away for two weeks in September. Talk together and decide what to do before then."_  Talk for about **three minutes**. Remember to:',
  '•  make **three** suggestions before judging any of them: _Why don\'t we…? · What about…? · We could…_',
  '•  say what will happen **if** nothing is done — two outcomes side by side',
  '•  say what is **decided** (_going to_) and what is only **possible** (_may_, _might_)',
  '•  say what somebody would need to **be able to do**, not just what course they should attend',
  '•  ask your partner what **they** think, at least twice, and **decide together**.',
], C.lorange, C.orange));
out.push(sp());
out.push(box('How your teacher marks your speaking (12 marks)', [
  table(['', '5–6 marks', '3–4 marks', '0–2 marks'], [
    ['**Grammar and vocabulary** (6)', 'Uses Units 13–18 well: present perfect with _for_ and _since_, _already / yet / just_, _going to_ and _will_ and _may_, the first conditional, _used to_, _good at_. Work vocabulary is accurate.', 'Some good language, but stays in the present; repeats the same structures; mistakes sometimes slow the listener.', 'Very short answers; no past and no future; little work vocabulary.'],
    ['**Communication and pronunciation** (6)', 'Clear; answers fully; makes three suggestions before judging; asks the partner; reaches a decision.', 'Takes part, but waits to be asked; agrees with everything; the decision is late or not stated.', 'Needs a lot of help; hard to understand; no decision.'],
  ], [1.1, 1.6, 1.4, 1.2]),
], C.grey, C.navy));
out.push(sp());
out.push(box('Your result', [
  table(['Reading /18', 'Writing /18', 'Listening /12', 'Speaking /12', 'TOTAL /60'], [['', '', '', '', '']], [1, 1, 1, 1, 1]),
  '**42–60 = very good** · **30–41 = good — look again at your weakest paper** · **under 30 = work through Units 13–18 again with your teacher before Unit 19**',
  'Your percentage here is comparable with an A2 Key result, because the four papers carry the same weight as they do in the examination.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Mid-Book Test (Units 13–18)');
