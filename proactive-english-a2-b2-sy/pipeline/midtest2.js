// Proactive English A2 · Syria Edition · Book 2 · MID-BOOK TEST (Units 13–18)
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const part = (t) => box(t, [], C.lteal, C.teal);
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('MID-BOOK TEST · Units 13–18'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading** (30 min) · **Writing** (20 min) · **Listening** (about 15 min) · **Speaking** (in pairs, 5 minutes with your teacher).',
  '**Total: 60 marks** (Reading 20 · Writing 15 · Listening 15 · Speaking 10).',
  'Write your answers on this paper. Write clearly in pen. You can use a pencil for notes.',
  'You cannot use a dictionary or your phone.',
  'If you finish early, check your capital letters and full stops!',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING (30 minutes · 20 marks)'));
out.push(box('Part 1 · Signs and messages (6 marks)', [
  'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.',
], C.lteal, C.teal));
out.push(sp());
[
  ['**1**  AL-YASMIN CENTRE · The lift is out of order. Second-floor classes are downstairs until further notice. Read this door before you climb the stairs.',
   '**A** The classes have been cancelled.   **B** The second-floor classes are on the ground floor now.   **C** You may use the lift if you are careful.'],
  ['**2**  Rana – I haven\'t sent the supplier list yet; I\'ve been on the phone to Türkiye since nine. You\'ll have it before I leave. Lina',
   '**A** Lina has finished the list.   **B** Lina will send the list later today.   **C** Lina cannot do the list at all.'],
  ['**3**  BUS OFFICE · Tickets may be changed once, free, up to 18:00 the day before travel. After that: no change, no refund.',
   '**A** You can change a ticket on the morning you travel.   **B** You can change a ticket twice.   **C** You must change a ticket before six the day before.'],
  ['**4**  Don\'t buy a new phone until Saturday. Bring it to Room 3 at ten and we\'ll find out what it actually does. Nour',
   '**A** Nour thinks the phone is broken.   **B** Nour wants to look at the phone first.   **C** Nour sells telephones on Saturday.'],
  ['**5**  BOOKING CONFIRMED · This screen is not a ticket. Show the reference at the window on the day and collect your ticket there.',
   '**A** Print this screen and take it with you.   **B** You still have to collect a ticket on the day.   **C** You do not need anything on the day.'],
  ['**6**  I used to walk past that bookshop every day for two years and I have never once been inside. Hiba',
   '**A** Hiba went into the bookshop every day.   **B** Hiba works at the bookshop.   **C** Hiba has never been inside the bookshop.'],
].forEach(([a, b]) => { out.push(model([a])); out.push(q(b)); });

out.push(pb());
out.push(box('Part 2 · Three people (5 marks)', [
  'Read about three members of the English Club. For each question, choose **A**, **B** or **C**.',
], C.lteal, C.teal));
out.push(table(['A  Nour', 'B  Rami', 'C  Hiba'], [[
  'Nour started a training course at work in February — six weeks, two evenings a week. She thought she was bad at writing reports and it turns out she is not; she finds it hard to begin them, so she and her trainer have fixed a day. She has been to Palmyra once, when she was eleven, and she has never been out of Syria. She thinks her street will be louder in ten years.',
  'Rami\'s site might move to Latakia. Nobody has decided and nobody will decide before February; if it moves he goes for eight months, possibly a year. He has been to Aleppo twice, both times for work, both times it rained. His family used to drive to Homs once a month and they used to stop halfway for tea, every single time. The tea place has gone.',
  'Hiba has applied for a teacher-training course and both her referees said yes. She has never flown; she has been to Beirut three times and all three times by bus, to the same aunt in the same street. She used to spend every summer in her grandmother\'s kitchen and she didn\'t use to like it. If she gets a place she is going to keep working until July.',
]], [1, 1, 1]));
out.push(sp());
[
  '**7**   Who does not know yet where they will be working?     **A**   **B**   **C**',
  '**8**   Who has sent a form and is waiting for an answer?     **A**   **B**   **C**',
  '**9**   Who found out that the problem was not the one they thought it was?     **A**   **B**   **C**',
  '**10**  Who remembers a journey their family used to make?     **A**   **B**   **C**',
  '**11**  Who makes a prediction about their city?     **A**   **B**   **C**',
].forEach(t => out.push(q(t)));

out.push(pb());
out.push(box('Part 3 · Longer text (5 marks)', [
  'Read the text and choose the correct answer **A**, **B** or **C**.',
], C.lteal, C.teal));
out.push(model([
  '**The Saturday clinic** – by Omar Darwish',
  'Nour and I have been running an hour in Room 3 every Saturday since February. Bring a telephone or a laptop and one problem. Not four. One.',
  'We have seen thirty-one people and we have solved twenty-six of their problems. Of those twenty-six, twenty-four cost nothing at all. The other two cost eight thousand and twelve thousand, and both of them were wires.',
  'The thing I did not expect is how little of this is about machines. Almost nobody can describe a fault. People tell you what they think is wrong instead of what the thing does, and those two are different about half the time. A woman came in February and told us her telephone would not charge and that her son said she needed a new one. What it actually did was start and stop. Her grandson sat on the wire. She was two days away from buying a telephone she did not need.',
  'The second thing I did not expect is who does not come. The people who most need an hour on a Saturday are the ones who will not walk in, because they are embarrassed — and they are embarrassed because somebody once did it for them quickly and sighed.',
  'So from March there is one more line on the card on the door, and it is the only line I have written that I am proud of: **nobody is asked how old they are.**',
]));
[
  '**12**  How many of the problems they solved were free?     **A** twenty-six   **B** twenty-four   **C** thirty-one',
  '**13**  What surprised Omar most?     **A** how many people came   **B** how little of the work is about machines   **C** how much the repairs cost',
  '**14**  Why was the woman about to buy a telephone?     **A** hers was very old   **B** she described the fault wrongly   **C** her son wanted one',
  '**15**  Why does Omar think some people stay away?     **A** they are busy on Saturdays   **B** they do not know about it   **C** they are embarrassed',
  '**16**  Why is Omar proud of the new line?     **A** it is short   **B** it answers the reason people stay away   **C** Nour wrote it',
].forEach(t => out.push(q(t)));

out.push(pb());
out.push(box('Part 4 · Open cloze (4 marks)', [
  'Write **ONE** word for each gap.',
], C.lteal, C.teal));
out.push(model([
  '**A message from Nour**',
  'Mr Bassam — here is how to get back into your account, and it is four steps.',
  'First, open the website and tap "log in". Then tap "forgotten your password?" — it is the small grey writing **(17)** ______ the box, and nobody has ever looked at it.',
  'After that, type your email address, **(18)** ______ your name. Then wait: they send you a message with a link.',
  'Finally, open that message and choose a new password. Don\'t write it **(19)** ______ a piece of paper — that is how we got here. Put it **(20)** ______ your notes and call the note something that is not "password".',
  'Nour',
]));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (20 minutes · 15 marks)'));
out.push(box('Part 1 · A message (5 marks)', ['Write **25 words or more**.'], C.lteal, C.teal));
out.push(model([
  'Something in your building is going to be out of order next week.',
  'Write a message for the other people in the building.',
  'In your message:  •  say **what will not be working, and when**  •  say **what will happen if it is not fixed**  •  tell them **one thing they should do**.',
]));
out.push(...lines(6));
out.push(sp());
out.push(box('Part 2 · An email (10 marks)', ['Write **35 words or more**.'], C.lteal, C.teal));
out.push(model([
  'Your English friend **Anna** is coming to your city next month and has asked you about it.',
  'Write an email to Anna.',
  'In your email:  •  say **one thing you have done** in your city that she should do too  •  say **what the weather will probably be like**  •  tell her **one thing she should bring**.',
]));
out.push(...lines(10));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 15 minutes · 15 marks)'));
out.push(p('Your teacher will read each recording **twice**.'));
out.push(box('Part 1 · Five short conversations (5 marks)', [
  '🔊 **Track MT-1.** For each question, choose **A**, **B** or **C**.',
], C.lteal, C.teal));
[
  '**21**  What will the woman do first?     **A** ring the hotel   **B** change the ticket   **C** pack a bag',
  '**22**  What is really wrong with the man\'s telephone?     **A** the battery is finished   **B** the wire is damaged   **C** there is no space on it',
  '**23**  Where is Thursday\'s class?     **A** Room 12   **B** Room 3   **C** there is no class',
  '**24**  How long has the woman worked there?     **A** two years   **B** fourteen months   **C** since September',
  '**25**  What has the man decided?     **A** to apply this year   **B** to apply next year   **C** not to apply at all',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Complete the notes (5 marks)', [
  '🔊 **Track MT-2.** You will hear Mr Bassam talking about the spring term. Write **one or two words or a number** in each gap.',
], C.lteal, C.teal));
out.push(table(['SPRING TERM – NOTES', ''], [
  ['The term starts on the', '**26** ______ of March'],
  ['General English runs this many evenings a week', '**27** ______'],
  ['The conversation club is on Saturdays at', '**28** ______'],
  ['The placement test costs', '**29** ______'],
  ['Certificates are given out in the', '**30** ______ week'],
], [2, 1]));
out.push(sp());
out.push(box('Part 3 · A longer talk (5 marks)', [
  '🔊 **Track MT-3.** You will hear Nour talking about her training course. Choose **A**, **B** or **C**.',
], C.lteal, C.teal));
[
  '**31**  How long is the course?     **A** four weeks   **B** six weeks   **C** eight weeks',
  '**32**  What did she say when the trainer asked what she wanted to learn?     **A** "everything"   **B** nothing   **C** "to write reports"',
  '**33**  What did the trainer say her real problem is?     **A** her writing   **B** starting   **C** her English',
  '**34**  What have they decided to do about it?     **A** fix a day for starting   **B** give her a writing class   **C** give her fewer reports',
  '**35**  What has she decided **not** to do this year?     **A** take the assessment   **B** start a second course   **C** ask her manager for Tuesdays',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 5 minutes · 10 marks)'));
out.push(p('Your teacher will ask you questions. Answer in full sentences and add one extra detail every time. Don\'t answer only "yes" or "no"!'));
out.push(box('Part 1 · About you (your teacher asks each student)', [
  '**1** Have you ever been to another city in this country? Tell me about it.',
  '**2** What do you think will happen in your street in the next few years?',
  '**3** What did you use to do at the weekend when you were younger?',
  '**4** What are you trying to learn at the moment, and why?',
  '**5** What do you enjoy doing, and what don\'t you mind doing?',
  '**6** What will you do if this course finishes and there is no next level?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 2 · Talk together (the two students talk to each other)', [
  'Your teacher says: _"Somebody in your family has a telephone that is not working and they want to buy a new one. Talk together and decide what they should do first, and what you will tell them."_',
  'Talk for about **two minutes**. Remember to:',
  '•  suggest: _Have you tried…? / Why don\'t we…? / We could…_',
  '•  say how sure you are: _It might be… / It\'ll probably be… / I\'m sure it isn\'t…_',
  '•  use a condition: _If it…, then…_ / _Unless…_',
  '•  decide together at the end.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (10 marks)', [], C.lteal, C.teal));
out.push(table(['', '4–5 marks', '2–3 marks', '0–1 mark'], [
  ['**Grammar and vocabulary (5)**',
   'Uses Unit 13–18 language well: present perfect, _will_ and _going to_, conditionals, _used to_, verb + to / -ing. Few mistakes.',
   'Some good language, but repeats the same words and makes mistakes that slow the listener.',
   'Very short answers; many mistakes.'],
  ['**Communication and pronunciation (5)**',
   'Speaks clearly, answers fully, asks the partner questions, keeps the conversation going.',
   'Answers, but waits for the teacher; sometimes hard to understand.',
   'Needs a lot of help; very hard to understand.'],
], [1.2, 1.5, 1.4, 1]));
out.push(sp());
out.push(box('Your result', [], C.lteal, C.teal));
out.push(table(['Reading /20', 'Writing /15', 'Listening /15', 'Speaking /10', 'TOTAL /60'], [['', '', '', '', '']], [1, 1, 1, 1, 1]));
out.push(sp());
out.push(p('**42–60** = very good  ·  **30–41** = good – look again at your weakest paper  ·  **under 30** = go through Units 13–18 again with your teacher before Unit 19'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Mid-Book Test (Units 13–18)');
