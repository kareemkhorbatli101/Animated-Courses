// Proactive English B1 · Syria Edition · Book 2 · Unit 22 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, second band.** Name the criterion before you say anything. Write your partner three sentences, each one opening with the criterion it marks against, and then what you found.';

out.push(h1('Unit 22  Interviews and Self-Presentation'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**22.1**  answer the four questions about your own work',
  '**22.2**  put the emphasis where you want it',
  '**22.3**  give an answer with a number in it',
  '**22.4**  answer the question you hope will not be asked',
  '**22.5**  ask the questions back',
  '**22.6**  write the page a stranger could check',
  '**22.7**  Review & Mediate: explain a person specification',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**One test runs through the whole unit: could a stranger check it?** Not _is it true_ and not _does it sound good_ — could somebody who has never met you go and find out whether it is so? _I am good at my job_ cannot be checked. _I answer about nine hundred forum questions a year and twenty-two of them are wrong and all twenty-two are still up_ can be checked by anybody with four minutes.',
  '**22.1 brings back the four questions from 1.3** — _How did you end up…? · What is the hardest part? · What would you change? · What do people get wrong about it?_ In Unit 1 you asked them. Now you answer them, about your own work, at B1 length and with a number in each answer. Find your Unit 1 page before you come.',
  '**22.4 is the cycle that frightens people**: the question you hope will not be asked. Everybody has one, everybody knows exactly what it is, and almost nobody has ever written the answer down — which is why the answer arrives in the room badly, under pressure, in front of the one person it matters to.',
  '**And 22.6 is 18.4 again, four units on.** The nine lines you wrote for a colleague, rewritten for a stranger who owes you nothing — with a number in every claim and a refusal in it somewhere.',
  '**Bring the four answers, written out, and one question you have been asked about your own work that you answered badly.** 22.1 is built on the bad answer and not on the good ones.',
], C.lyellow, C.orange));

// ======================= 22.1 =======================
out.push(pb());
out.push(h2('22.1  The four questions, answered'));
out.push(p('**Function:** answering a question about your own work so that it can be checked   ·   **Grammar:** open questions and answers with a number   ·   **Pronunciation:** the falling tone on an open question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the question you were asked and answered badly — the question only, not the answer. Your teacher writes the eleven questions on the board. Most of them are the same four questions in different clothes.'));
out.push(board('What do you actually do all day? — I could not answer it. I talked for two minutes and said nothing.', 'the four questions · an answer that can be checked'));
out.push(p('**b**  Which answer could a stranger check? **1** _I am good with people._  **2** _I take about forty calls a week and I log the codes on about thirty._  **3** _I work very hard._  **4** _I have not been late since February._  **5** _I care about doing it properly._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who asked Omar the question he could not answer, and what does he say he did instead of answering?   **A** his sister; he talked for two minutes about the department   **B** his manager; he refused   **C** a customer; he changed the subject'));
out.push(p('**b**  Listen again. **1** What does he say was wrong with the two minutes?   **2** What does Ms Huda say the test of an answer is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.1  What do you actually do all day?', [
  ['Omar', 'My sister asked me a question in October and I have been thinking about it since, because I could not answer it and she is not somebody I need to impress.'],
  ['Ms Huda', 'What did she ask?'],
  ['Omar', 'What do you actually do all day? And I talked for about two minutes and when I stopped she said: so you fix computers. Which is not what I do and is a fair summary of what I had just said.'],
  ['Nour', 'What did the two minutes consist of?'],
  ['Omar', 'The department, the systems, the fact that it is varied, and the word "support" about nine times. Not one number, not one example, and nothing anybody could check. If a stranger had been listening they would have learnt that I am employed.'],
  ['Jad', 'What is the answer?'],
  ['Omar', 'I worked it out over four evenings, and it is three sentences. I keep eleven sites\' machines working, which is about four hundred and twenty machines and about ninety faults a month. Most of those ninety are the same eleven faults, and the reason they keep coming back is that nobody writes down what fixed them. So about a third of my year is doing a thing for the second time.'],
  ['Lubna', 'That is a completely different account.'],
  ['Omar', 'It is the same job. The difference is three numbers and one sentence about what is wrong with it.'],
  ['Ms Huda', 'Now the four questions from Unit 1, and notice what Omar has just done without being asked. _How did you end up doing it? What is the hardest part? What would you change? What do people get wrong about it?_ In January you asked those of each other. The answers were short, because you had never been asked. Now answer them about yourselves — and the test is not whether the answer is true and not whether it sounds well. **The test is whether a stranger could go and check it.**'],
  ['Omar', 'And the fourth one is the one that hurts. What people get wrong about my work is that they think it is machines. It is almost entirely writing — and I have never written that sentence down anywhere, including in the application I sent in September.'],
  ['Ms Huda', 'Which is why we are doing this in December and not in January. You have eleven months of evidence now. In January you had opinions.'],
]));
out.push(sp());
out.push(box('Language box – answering so that it can be checked', [
  '**The four questions** (1.3), and what a checkable answer to each looks like:',
  table(['the question', 'an answer a stranger could check'], [
    ['_How did you end up doing it?_', '_I answered one forum question in 2024 and about nine hundred since._'],
    ['_What is the hardest part?_', '_The questions with no error message in them: about one in six, and they take four times as long._'],
    ['_What would you change?_', '_That nothing is written down after a fault is fixed. Eleven faults account for most of ninety a month._'],
    ['_What do people get wrong about it?_', '_That it is machines. It is almost entirely writing._'],
  ], [1.9, 2.7]),
  '⚠ **The test is not _is it true_ and not _does it sound well_. It is: could a stranger go and find out?** _I am good with people_ is true of most people and checkable by nobody. _I have not been late since February_ can be checked in four minutes by somebody who has never met you.',
  '**Three numbers and one fault.** That is the shape of an answer that lands: a quantity for the size of the work, a quantity for the part that is hard, and one sentence about **what is wrong with it** — because a person who can say what is wrong with their own work is the only kind of person a stranger believes about the rest.',
  '**Answer the fourth question honestly even when it costs you.** _People think it is machines; it is almost entirely writing._ That sentence is the whole of a job described in nine words, and the reason nobody writes it is that it makes the work sound less impressive and the person sound more exact.',
  '⚠ **And watch the two-minute answer that contains no noun you could photograph.** _The department · the systems · it is varied · support, support, support._ Count the words in your own answer that name something a stranger could see; if the answer is none, you have described being employed.',
  '**Useful phrases:** she is not somebody I need to impress · I talked for two minutes and said nothing · it is the same job; the difference is three numbers · if a stranger had been listening they would have learnt that I am employed.',
  '**Practise:** Answer each in one sentence with a number in it.  1 how you ended up doing it  2 the hardest part  3 what you would change  4 what people get wrong  5 what you do all day',
  '**Pronunciation.** 🔊 **Track 22.2** An open question **falls** at the end — _what do you actually **DO** all day?_ ↘ — and the answer takes its main stress on the **number**: _about **NINEty** faults a month._ Rising on the question makes it sound suspicious; flattening the number throws the answer away. Listen to eight and write the number only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the four questions, in order. B answers each in one sentence with a number in it. A then does the only useful thing: says which of the four answers a stranger could check. Swap.'));
out.push(dlg(null, [
  ['A', 'How did you end up doing it?'],
  ['B', '__________.'],
  ['A', 'What is the hardest part?'],
  ['B', '__________ — about __________.'],
  ['A', 'What would you change?'],
  ['B', '__________.'],
  ['A', 'What do people get wrong about it?'],
  ['B', 'They think it is __________. It is __________.'],
]));
out.push(table(['Card A – answer about…', 'Card B – answer about…'], [
  ['your present job', 'the job you did before this one'],
  ['the part of your work nobody sees', 'the part of your work everybody sees'],
  ['something you are responsible for', 'something you are learning'],
  ['your work as your family describes it', 'your work as a stranger would see it'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** count the checkable answers out of thirty-two. In a first run it is between eight and fourteen, and the fourth question — _what do people get wrong?_ — produces the best answers of the four, because it is the only one of the four that cannot be answered with a compliment to yourself.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your four answers, each with a number. Then the honest half: read out the **bad** answer you brought, word for word as you gave it, and say what it contained instead of facts.'));
out.push(p('**b**  Swap. Then each of you count the nouns in your partner\'s bad answer that name something a stranger could see. Say the number out loud.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar\'s sister asked him a question in October and he has been thinking about it since, because he could not answer it and she is not somebody he needs to impress. She asked: what do you actually do all day? He talked for about two minutes, and when he stopped she said "so you fix computers" — which is not what he does and is a fair summary of what he had just said. Nour asked what the two minutes consisted of, and it was the department, the systems, the fact that it is varied, and the word "support" about nine times: not one number, not one example, and nothing anybody could check. If a stranger had been listening they would have learnt that he is employed. Jad asked what the answer is, and Omar worked it out over four evenings and it is three sentences. He keeps eleven sites\' machines working, which is about four hundred and twenty machines and about ninety faults a month. Most of those ninety are the same eleven faults, and the reason they keep coming back is that nobody writes down what fixed them — so about a third of his year is doing a thing for the second time. Lubna said that is a completely different account, and Omar said it is the same job: the difference is three numbers and one sentence about what is wrong with it. Then Ms Huda brought back the four questions from Unit 1 — how did you end up doing it, what is the hardest part, what would you change, what do people get wrong about it — and said that in January the class asked those of each other and the answers were short, because nobody had ever been asked. Now they answer them about themselves, and the test is not whether the answer is true and not whether it sounds well: the test is whether a stranger could go and check it. And Omar said the fourth question is the one that hurts: what people get wrong about his work is that they think it is machines, and it is almost entirely writing — and he has never written that sentence down anywhere, including in the application he sent in September._'));
out.push(p('**Listener task:** write one answer from this room that a stranger could check, and one that nobody could.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Omar writes and sends to his sister. Answer the questions.'));
out.push(model([
  '**WHAT I ACTUALLY DO ALL DAY** · O. Darwish · for Rana, who asked in October and did not get an answer',
  'You asked me this in October and I talked for two minutes and you said "so you fix computers", and you were right about what I had said and wrong about the job. This is the answer. It took four evenings, which tells you something on its own.',
  '**How I ended up doing it.** I was asked to look at one machine in 2019 because I was the only person in the room who had a screwdriver. Nobody has ever given me the job; I have simply never stopped doing it, and it is now eleven sites.',
  '**What it actually is, in numbers.** Eleven sites. About four hundred and twenty machines. About ninety faults a month reach me, which is four or five a working day.',
  '**The hardest part.** Not the difficult faults. The same faults. Of those ninety a month, most are eleven faults that come back, and they come back because nothing is written down when they are fixed. About a third of my year is doing a thing for the second time, and I can show you the log.',
  '**What I would change.** One line of writing per fault, by whoever fixes it. Not a system and not a report: one line. I have asked for it twice in two years, both times in a meeting and never in writing, which is my own fault and is the subject of another conversation.',
  '**What people get wrong about it, and this is the one that matters.** They think it is machines. It is almost entirely writing — what a fault was, what was done, and where that sentence is kept. The screwdriver part is about one hour in eight.',
  '**And the thing I did not say in October.** I did not answer you because I have never written any of this down, and I have been doing the job for five years. I sent an application in September with the word "support" in it eleven times and not one of these numbers.',
]));
out.push(item('1', 'How did he end up doing the job, and who gave it to him?'));
out.push(item('2', 'Which figure does he say he can show her, and what is it the figure for?'));
out.push(item('3', 'What does he say about his September application?'));
out.push(writers([
  'A page answering the four questions: **why you are answering it now** → **how you ended up doing it** → **what it actually is, in numbers** → **the hardest part, with a quantity** → **what you would change, and how small it is** → **what people get wrong, which is the one that matters** → **and the thing you did not say at the time**.',
  'Begin by conceding their summary of your bad answer. _You were right about what I had said and wrong about the job._ It costs nothing, it is true, and it buys the whole page.',
  'Put a figure on the ordinary and a figure on the hard part. _About ninety faults a month, which is four or five a working day_ and _about a third of my year is doing a thing for the second time._ One number describes the job; two describe the problem.',
  'Make what you would change **small**, and say what it is not. _One line of writing per fault. Not a system and not a report: one line._ A large change in an answer of this kind is heard as a complaint about the employer.',
  '⚠ And end on what you did not say at the time, including anything that is your own fault. _I have asked for it twice and never in writing, which is my own fault._ A page about yourself with no fault of your own in it is read as an advertisement.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page answering the four questions (60 words or more).'));
out.push(p('**WHAT I ACTUALLY DO ALL DAY** · ______________ · for ______________   You asked me this in ______________ and I ______________. This is the answer.   **How I ended up doing it.** ______________.   **What it actually is, in numbers.** ______________. About ______________. About ______________ a month, which is ______________ a day.   **The hardest part.** Not ______________. ______________. About ______________ of my year is ______________, and I can show you ______________.   **What I would change.** ______________. Not ______________ and not ______________: ______________.   **What people get wrong about it.** They think it is ______________. It is ______________.   **And the thing I did not say at the time.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A number in at least four of the seven paragraphs',
  'The hardest part quantified, not described',
  'The change small, with what it is not',
  'One fault of your own on the page',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what people get wrong about their work.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) for a real person who has asked you about your work and not had an answer: the four questions with a number in each, the small change, what people get wrong, and the thing you did not say at the time.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **a number in every answer**, **what people get wrong**, **one fault of your own**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out the first line of your Unit 1 page and the first line of today\'s.** Then the count: how many of us have numbers today that we did not have in January? Almost everybody — and almost nobody has acquired them on purpose. Eleven months of a course has produced eleven months of counting, and the counting is the only reason today\'s answer exists.'));
out.push(hw('Write the page (60+ words) and send it to the person who asked. Then write one line: what they said back, in their words.'));

// ======================= 22.2 =======================
out.push(pb());
out.push(h2('22.2  It is the writing that takes the time'));
out.push(p('**Function:** putting the emphasis where you want it   ·   **Grammar:** _It is X that…_ · _What I actually do is…_   ·   **Pronunciation:** the stress inside a cleft'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each about your work, and then the same sentence again with the emphasis moved on to a different word. Your teacher asks the class which version they would remember.'));
out.push(board('It is not the calls that take the time. It is the eleven minutes afterwards.', '_It is X that…_'));
out.push(p('**b**  Move the emphasis with _It is… that_. **1** _The writing takes the time._  **2** _Nobody records the fix._  **3** _The fourth night produces the errors._  **4** _Row six decides it._  **5** _The storeman releases the job._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which sentence does Nour say she had been getting wrong for a year, and what changed when she moved the emphasis?   **A** _I answer escalation calls_; the interviewer asked a different question   **B** _I am a junior technician_; nothing   **C** _I like the work_; she was not believed'));
out.push(p('**b**  Listen again. **1** What does she say the plain sentence invited?   **2** What does Ms Huda say a cleft does that a stressed voice cannot?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.3  The sentence I had been getting wrong', [
  ['Nour', 'I had my first proper conversation about the escalation calls last week — the department head, twenty minutes, not an interview but the kind of conversation that decides things. And I learnt something about one sentence.'],
  ['Ms Huda', 'Which sentence?'],
  ['Nour', 'For a year I have said: "I answer the escalation calls." It is true. And every single time, the next thing that is said to me is about the calls — how many, how long, whether they are stressful. Which is not the point and never has been.'],
  ['Omar', 'What is the point?'],
  ['Nour', 'The point is that an escalation call is the only place in that company where you find out what we actually promised somebody, because the customer tells you and our own notes do not. The call is a nuisance. The information is the whole thing.'],
  ['Jad', 'So what did you say this time?'],
  ['Nour', '"It is not the calls that matter. It is that an escalation call is the only place we find out what we promised." And he stopped, and then he asked me the question I have wanted somebody to ask me for eleven months: how many of them involve a promise nobody recorded?'],
  ['Lubna', 'How many?'],
  ['Nour', 'Nineteen of the twenty-two I have taken since September. I had that figure in a notebook and nobody had ever asked for it, and the reason nobody had asked is that I had been putting the emphasis on the wrong noun for a year.'],
  ['Ms Huda', 'Now the grammar, because it is doing something a tone of voice cannot. In speech you can stress a word: _it is not the **calls**._ But the stress is gone the moment somebody repeats your sentence to a third person, and in writing it is gone altogether. A **cleft** — _it is X that…_ — puts the emphasis into the **structure** of the sentence, where it survives being quoted, written down, and read by somebody who has never heard your voice.'],
  ['Nour', 'And it survives being summarised, which is what actually happens to everything you say about yourself.'],
  ['Ms Huda', 'Which is the sentence of the cycle. Everything you say about your own work is **summarised by somebody else** before it reaches whoever decides anything. The cleft is the only way of choosing which half of your sentence survives the summary.'],
]));
out.push(sp());
out.push(box('Language box – putting the emphasis in the structure', [
  '**Two shapes, and both put the emphasis where you choose:**',
  table(['plain', 'emphatic'], [
    ['_The writing takes the time._', '_**It is** the writing **that** takes the time._'],
    ['_Nobody records the fix._', '_**It is** the recording **that** nobody does._'],
    ['_I answer escalation calls._', '_**What I actually do is** find out what we promised._'],
    ['_The fourth night produces the errors._', '_**It is** the fourth night **that** produces them._'],
  ], [2.1, 2.5]),
  '**And the negative version, which is the strongest of all:** _It is **not** the calls that matter. It is that an escalation call is the only place we find out what we promised._ Two sentences: the first removes the wrong emphasis, the second supplies the right one.',
  '⚠ **The verb after _It is… that_ agrees with the noun in the middle:** _it is the **calls** that **matter**_ · _it is the **writing** that **takes** the time_. And ⚠ _It is… **that**_, not ~~which~~, for a person or a thing in this structure, and ~~it is… who~~ only for people: _it is the storeman **who** releases it._',
  '⚠ ~~What I actually do is to find out~~ → _is **find** out_ (no _to_), or _is **finding** out_.',
  '**Why the structure and not the voice:** you can stress a word when you speak, and the stress **disappears the moment somebody repeats your sentence to a third person** — and in writing it never existed. A cleft puts the emphasis into the grammar, where it survives being quoted, written down and read by a stranger.',
  '**And the reason that matters: everything you say about your own work is summarised by somebody else before it reaches whoever decides anything.** The cleft is the only way of choosing which half of your sentence survives the summary.',
  '**Useful phrases:** it is true, and every time the next thing said to me is about the wrong half · the call is a nuisance; the information is the whole thing · nobody had ever asked for it · I had been putting the emphasis on the wrong noun for a year.',
  '**Practise:** Say the plain sentence, then the cleft, then the negative pair.  1 what takes the time  2 what nobody records  3 what actually decides it  4 what people notice  5 what you actually do',
  '**Pronunciation.** 🔊 **Track 22.4** In a cleft the stress goes on the **noun between _it is_ and _that_**, and the rest runs flat: _it is the **WRITing** that takes the time._ Said with the stress on _writing_ **and** on _time_, the sentence has two emphases and therefore none. Listen to six and write the stressed noun.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says a plain true sentence about their work. B repeats it to an imaginary third person — in one short summary. A then says the cleft version, and B summarises again. Swap.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '_(to a third person)_ He says __________.'],
  ['A', 'It is not __________ that __________. It is __________.'],
  ['B', '_(to a third person)_ He says __________.'],
  ['A', 'That second summary is the one I wanted.'],
]));
out.push(table(['Card A – the sentence', 'Card B – the sentence'], [
  ['what you spend most of your time on', 'what actually goes wrong'],
  ['what nobody else in your workplace can do', 'what nobody writes down'],
  ['what decides whether a day goes well', 'what people thank you for, wrongly'],
  ['what your job title says', 'what your job actually is'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight **first** summaries and the eight **second** ones, and compare. In almost every case the first summary keeps the noun at the front of the plain sentence and the second keeps the noun inside the cleft — which is the whole demonstration: the structure chooses what survives, and the speaker chooses the structure.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say the one sentence about your work that you have said most often this year. Then say what the next thing people say to you after it is. Then move the emphasis and say it again.'));
out.push(p('**b**  Swap. Then each of you say what question your partner\'s new sentence invites — and whether it is a question they would like to be asked.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour had her first proper conversation about the escalation calls last week — the department head, twenty minutes, not an interview but the kind of conversation that decides things — and she learnt something about one sentence. For a year she has said "I answer the escalation calls", which is true, and every single time the next thing said to her is about the calls: how many, how long, whether they are stressful. Which is not the point and never has been. The point is that an escalation call is the only place in that company where you find out what they actually promised somebody, because the customer tells you and their own notes do not. The call is a nuisance; the information is the whole thing. So this time she said: "It is not the calls that matter. It is that an escalation call is the only place we find out what we promised." And he stopped, and then asked her the question she has wanted somebody to ask her for eleven months: how many of them involve a promise nobody recorded? Nineteen of the twenty-two she has taken since September. She had that figure in a notebook and nobody had ever asked for it, and the reason nobody had asked is that she had been putting the emphasis on the wrong noun for a year. Ms Huda said the grammar is doing something a tone of voice cannot: in speech you can stress a word, but the stress is gone the moment somebody repeats your sentence to a third person, and in writing it never existed — a cleft puts the emphasis into the structure, where it survives being quoted, written down and read by somebody who has never heard your voice. And Nour said it survives being summarised, which is what actually happens to everything you say about yourself. Ms Huda said that is the sentence of the cycle: everything you say about your own work is summarised by somebody else before it reaches whoever decides anything, and the cleft is the only way of choosing which half survives._'));
out.push(p('**Listener task:** write one plain sentence from this room and its cleft, and say which summary you would rather be given.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour sends after the conversation. Answer the questions.'));
out.push(model([
  '**TO THE DEPARTMENT HEAD · after Tuesday** · N. Sabbagh · 19 December',
  'Thank you for the twenty minutes. You asked me one question that nobody has asked me in eleven months, and I have the answer to it in a notebook, so this note is short.',
  '**The figure you asked for.** Of the twenty-two escalation calls I have taken since 1 September, **nineteen** involved a promise made to a customer that is not in our notes anywhere. I have the dates and the eleven-digit case numbers for all nineteen.',
  '**And the sentence I should have been saying for a year.** It is not the calls that matter. It is that an escalation call is the only place in this company where we find out what we promised somebody — because the customer tells us, at length, and our own notes do not.',
  '**What I had been saying instead.** "I answer the escalation calls." True, and it invited a conversation about the calls every single time: how many, how long, whether they are difficult. Eleven months of that, and the figure above sat in a notebook.',
  '**Why I am putting this in writing rather than leaving it at Tuesday.** Because what I say about my own work is summarised by somebody before it reaches anybody who decides anything, and a sentence of mine has about nine words in which to choose which half survives. This is those nine words: _the only place we find out what we promised_.',
  '**What I am not asking for.** I am not asking for the escalation rota to change and I am not asking to be taken off it. I would rather keep it, for the reason above.',
  '**One thing I should add, which is not in my favour.** I could have given you that figure in October. Nobody asked, and I did not offer it, because I had not worked out which half of my own sentence was the interesting one.',
]));
out.push(item('1', 'What is the figure, and what does she say she has for all nineteen?'));
out.push(item('2', 'What conversation did her old sentence invite, and for how long?'));
out.push(item('3', 'What does she say is not in her favour?'));
out.push(writers([
  'A note after a conversation: **thank, and say why it is short** → **the figure they asked for, with what you hold to support it** → **the cleft sentence you should have been saying** → **what you had been saying instead, and what it invited** → **why you are putting it in writing** → **what you are not asking for** → **and one thing not in your favour**.',
  'Put the figure first and say what you hold behind it. _I have the dates and the eleven-digit case numbers for all nineteen._ A figure with its evidence named beside it is a different object from the same figure alone.',
  'Quote your own old sentence and say what it invited. _"I answer the escalation calls." True, and it invited a conversation about the calls every single time._ It is the cheapest way to make the new sentence land, because the reader has had the old conversation too.',
  'Say why it is in writing and not left in the room: _a sentence of mine has about nine words in which to choose which half survives._ That sentence tells the reader you understand how decisions travel, which is itself a qualification.',
  '⚠ And end with the thing not in your favour. _I could have given you that figure in October._ It is the paragraph that makes a page about yourself readable, and it is the one everybody deletes.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note after a conversation about your work (60 words or more).'));
out.push(p('**TO ______________ · after ______________** · ______________   Thank you for ______________. You asked me ______________, and I have the answer in ______________, so this note is short.   **The figure you asked for.** Of the ______ ______________ since ______________, ______ ______________. I have ______________ for all ______.   **And the sentence I should have been saying.** It is not ______________ that ______________. It is that ______________.   **What I had been saying instead.** "______________." True, and it invited ______________ every time.   **Why I am putting this in writing.** ______________.   **What I am not asking for.** ______________.   **One thing not in my favour.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The cleft correct — _it is… that_, with the verb agreeing with the middle noun',
  'The figure first, with the evidence named beside it',
  'Your old sentence quoted, and what it invited',
  'One thing not in your favour',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the sentence they had been saying instead.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more): the figure with its evidence, the cleft sentence you should have been saying, the old sentence and what it invited, why it is in writing, what you are not asking for, and one thing not in your favour.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the cleft and its agreement**, **the figure with its evidence**, **the thing not in your favour**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us have a figure in a notebook that nobody has ever asked for?** Count. Then the question that explains it: what sentence have you been saying that invited the wrong question? A figure nobody asks for is almost never a figure nobody wants — it is a figure nobody knows exists, because the sentence in front of it pointed somewhere else.'));
out.push(hw('Write the note (60+ words). Then say your new cleft sentence out loud to one person at work and write down the first question they ask after it.'));

// ======================= 22.3 =======================
out.push(pb());
out.push(h2('22.3  About, roughly, and out of'));
out.push(p('**Function:** giving an answer with a number in it   ·   **Grammar:** _about · roughly · between X and Y · on average · out of_   ·   **Pronunciation:** the stress on the approximator'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One figure each about your own work, said out loud, with the right approximator in front of it. Your teacher writes only the approximators on the board. Several students will have used none, and one will have used _exactly_ where they do not know.'));
out.push(board('About eighteen a day, on average. Three out of four of them are the same fault.', '_about_ · _on average_ · _out of_'));
out.push(p('**b**  Choose the right word. **1** _I drive ___ 160 kilometres a day._  **2** ____ nine of the ninety are new faults._  **3** _It takes ___ twenty minutes and an hour._  **4** _Twenty-six nights ___ thirty-one._  **5** _The round finishes at ten, ___ ._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which of his own figures did Tareq say wrongly for two years, and what was wrong with it?   **A** the number of passengers; he gave a total where he should have given a rate   **B** the distance; he exaggerated it   **C** the hours; he had never counted'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say happens to a figure given without an approximator?   **2** What does Tareq say _out of_ does that a percentage cannot?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.5  Four hundred, which is nothing', [
  ['Tareq', 'I have been saying a figure about my work for two years and it is useless, and I only discovered that when somebody asked me a second question about it.'],
  ['Ms Huda', 'What is the figure?'],
  ['Tareq', 'Four hundred. I say I carry about four hundred passengers a day. It is roughly true. And in October a man at the directorate asked me: four hundred out of what?'],
  ['Nour', 'What does that mean?'],
  ['Tareq', 'It means — out of how many who wanted to travel? And I did not know, and the question is the whole question, because the complaint I have been making for two years is about the twenty to seven. Four hundred a day tells you that I am busy. **Four hundred out of a possible four hundred and sixty, with the sixty standing at a stop at twenty to seven having missed a bus that the timetable says has not gone yet** — that is the sentence, and it has the fault inside the figure.'],
  ['Omar', 'How do you know it is sixty?'],
  ['Tareq', 'I do not, and that is the second thing I learnt. I counted for eleven days in November: between forty and seventy, with a mean of about fifty-six. So I say _between forty and seventy_, and I say that I counted for eleven days, and I say it is my own count and not the depot\'s. Three qualifications, eleven words, and the figure becomes usable instead of impressive.'],
  ['Jad', 'Does the range not make it weaker?'],
  ['Tareq', 'That is what I thought. It is the opposite. A man who says _about fifty-six_ has counted. A man who says _sixty_ has guessed and will be caught in March when somebody counts for themselves.'],
  ['Ms Huda', 'Now the rule, and it is short. **A figure without an approximator in front of it is heard as a claim to exactness, and will be tested as one.** _About_, _roughly_, _on average_, _between X and Y_ — these are not hedges and they are not modesty. They tell the reader **how** the figure was arrived at, which is the only thing that makes any figure believable.'],
  ['Tareq', 'And _out of_ is the one that carries an argument. Twenty-six nights is a number. Twenty-six nights out of thirty-one is an argument, and it took me two years to say a figure that way.'],
  ['Ms Huda', 'And it is better than a percentage, because a reader can see both halves and check either.'],
]));
out.push(sp());
out.push(box('Language box – numbers that can be used', [
  '**The approximators, and what each one tells the reader:**',
  table(['you say', 'what it says about the figure'], [
    ['_**about** four hundred_', 'I know the size of it; I have not counted precisely'],
    ['_**roughly** a third_', 'the same, for a proportion'],
    ['_**between** forty **and** seventy_', 'I have counted, and it varies — here is the range'],
    ['_about fifty-six, **on average**_', 'I have counted and this is the mean of several counts'],
    ['_twenty-six **out of** thirty-one_', 'both halves, and you may check either'],
  ], [2.1, 2.5]),
  '⚠ **A figure with nothing in front of it is heard as a claim to exactness and will be tested as one.** _Sixty_ invites somebody to count sixty. _Between forty and seventy, with a mean of about fifty-six, counted over eleven days in November_ invites nothing, because the question has already been answered.',
  '**_Out of_ is the one that carries an argument.** _Twenty-six nights_ is a number; _twenty-six nights out of thirty-one_ is an argument. And it is better than a percentage, because the reader can see both halves and check either — ⚠ _84%_ hides the thirty-one.',
  '**Say where the figure came from, in three or four words.** _My own count, eleven days in November_ · _from twelve months of receipts_ · _from the workshop log_. A figure with a source is a different object from the same figure without one, and the source costs four words.',
  '⚠ **And answer the second question before it is asked: _out of what?_** Almost every figure anybody gives about their own work is a total where the useful version is a proportion. _Four hundred a day_ tells a stranger that you are busy. _Four hundred out of about four hundred and sixty who wanted to travel_ has the fault inside the figure.',
  '**A range is stronger than a round number, not weaker.** _A man who says about fifty-six has counted. A man who says sixty has guessed, and will be caught in March when somebody counts for themselves._',
  '**Useful phrases:** four hundred out of what? · I counted for eleven days in November · it is my own count and not the depot\'s · three qualifications, eleven words, and the figure becomes usable instead of impressive.',
  '**Practise:** Give each figure three ways — bare, with an approximator, and as _out of_.  1 how much you do in a day  2 how often something goes wrong  3 how long something takes  4 how many people you deal with  5 how much of your time one task takes',
  '**Pronunciation.** 🔊 **Track 22.6** The approximator is **unstressed** and runs into the figure — /əbaʊt/ · /ˈrʌfli/ — and the stress goes on the number itself: _əbaut **FIFty**-six._ A stressed _about_ sounds evasive; an unstressed one sounds like arithmetic. Listen to eight and write the figure and its source.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a bare figure about their work. B asks the two questions. A then gives the figure again with an approximator, a range, a source and an _out of_. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Out of what?'],
  ['B', 'And how do you know?'],
  ['A', 'Between __________ and __________, with a mean of about __________, out of __________. My own count, __________.'],
]));
out.push(table(['Card A – the figure', 'Card B – the figure'], [
  ['how much you handle in a day', 'how often something comes back'],
  ['how long a task actually takes', 'how many of a thing are wrong'],
  ['how many people ask you for something', 'how much of your week one task takes'],
  ['how many times you have done something', 'how many times it has gone wrong'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight _out of_ halves. Then the count: for how many did the speaker **not know** the denominator before being asked? Usually six or seven of eight — and in every one of those cases the figure they have been using for years is a total where the useful version is a proportion.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give the figure you most often say about your own work. Then answer _out of what?_ If you do not know, say so, and say what you would have to count and for how long.'));
out.push(p('**b**  Swap. Then each of you design your partner\'s count: what exactly they would write down, where, and for how many days. Keep it under eleven days.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq has been saying a figure about his work for two years and it is useless, and he only discovered that when somebody asked him a second question about it. The figure is four hundred: he says he carries about four hundred passengers a day, which is roughly true. And in October a man at the directorate asked him: four hundred out of what? Nour asked what that means, and it means out of how many who wanted to travel — and Tareq did not know, and the question is the whole question, because the complaint he has been making for two years is about the twenty to seven. Four hundred a day tells you he is busy; four hundred out of a possible four hundred and sixty, with the sixty standing at a stop at twenty to seven having missed a bus that the timetable says has not gone yet, is the sentence, and it has the fault inside the figure. Omar asked how he knows it is sixty, and he does not: that is the second thing he learnt. He counted for eleven days in November — between forty and seventy, with a mean of about fifty-six — so he says between forty and seventy, and says he counted for eleven days, and says it is his own count and not the depot\'s. Three qualifications, eleven words, and the figure becomes usable instead of impressive. Jad asked whether the range does not make it weaker, and Tareq said that is what he thought and it is the opposite: a man who says about fifty-six has counted, and a man who says sixty has guessed and will be caught in March when somebody counts for themselves. Ms Huda gave the rule: a figure without an approximator in front of it is heard as a claim to exactness and will be tested as one — about, roughly, on average, between X and Y are not hedges and not modesty, they tell the reader how the figure was arrived at, which is the only thing that makes any figure believable. And Tareq said out of is the one that carries an argument: twenty-six nights is a number, twenty-six nights out of thirty-one is an argument, and it took him two years to say a figure that way._'));
out.push(p('**Listener task:** write one figure from this room with its denominator, and one whose denominator nobody knows.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Tareq\'s page. Answer the questions.'));
out.push(model([
  '**THE 06.40 THAT DOES NOT EXIST · what I counted in November** · T. Ayoub · for the depot manager and the directorate',
  '**The figure I have been giving for two years.** About four hundred passengers a day. It is roughly right and it is useless, because it is a total and the matter is a proportion.',
  '**The figure that answers the question.** Between forty and seventy people a morning are at a stop on the Harasta road at about 06.40 waiting for a bus that left at 06.20. The mean of my count is about fifty-six.',
  '**Where the figure comes from.** My own count, standing at the second stop before my shift, on eleven mornings between 4 and 18 November — nine weekdays and two Saturdays. It is not the depot\'s figure and the depot has no figure.',
  '**What it is out of.** About four hundred and fifty-six people who want to travel on that route before seven, of whom about four hundred travel. So the loss is roughly one in eight, every morning, on one line.',
  '**What I am not claiming.** I am not claiming the mean is accurate to a person; eleven mornings is eleven mornings. I am not claiming the fifty-six all missed the bus because of the timetable — some of them are early for the 07.10 and I cannot separate them. If somebody counted for thirty mornings and asked each person, the figure would be better, and it would be smaller.',
  '**And the one sentence this is all for.** The printed timetable says the first departure is 06.40. The first bus leaves at 06.20 and has done since 2019. The people standing there at 06.40 are the ones who do not use the line often — which is to say the ones who most need it to be printed correctly.',
  '**What I am asking for.** One line changed on one printed timetable. I am not asking for a bus at 06.40.',
]));
out.push(item('1', 'How does he describe his old figure, and why is it useless?'));
out.push(item('2', 'What two things does he say he is not claiming, and what is he not asking for?'));
out.push(item('3', 'What does he say would happen if somebody counted for thirty mornings?'));
out.push(writers([
  'A page built on a figure: **the figure you have been giving, and why it is useless** → **the figure that answers the question** → **where it comes from, in one sentence** → **what it is _out of_** → **what you are not claiming** → **the one sentence it is all for** → **and the one thing you are asking for**.',
  'Say your own old figure is useless before anybody else does. _It is roughly right and it is useless, because it is a total and the matter is a proportion._ A page that corrects its own figure is read as arithmetic; a page that defends it is read as advocacy.',
  'Give the source in one sentence with the days in it. _My own count, standing at the second stop, on eleven mornings between 4 and 18 November — nine weekdays and two Saturdays._ The breakdown of the eleven is what makes the eleven worth having.',
  'Write the **what I am not claiming** paragraph, and let it cost you. _If somebody counted for thirty mornings and asked each person, the figure would be better, and it would be smaller._ Admitting that your own figure is probably on the high side is the single most persuasive sentence available to anybody with a number.',
  '⚠ And keep the request smaller than the figure (19.4). _One line changed on one printed timetable. I am not asking for a bus at 06.40._ A large figure attached to a small request is believed; a large figure attached to a large request is argued with.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page built on your figure (60 words or more).'));
out.push(p('**______________ · what I counted in ______________** · ______________   **The figure I have been giving.** ______________. It is roughly right and it is useless, because ______________.   **The figure that answers the question.** Between ______ and ______ ______________, with a mean of about ______.   **Where the figure comes from.** My own count, ______________, on ______ ______________ between ______________ and ______________.   **What it is out of.** About ______ ______________, of whom about ______ ______________. So ______________.   **What I am not claiming.** I am not claiming ______________. I am not claiming ______________. If somebody ______________, the figure would be better, and it would be ______________.   **And the one sentence this is all for.** ______________.   **What I am asking for.** ______________. I am not asking for ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'An approximator in front of every figure',
  'A range and a mean where you have counted more than once',
  'The source in one sentence, with the number of days',
  '_Out of_ on the figure that carries the argument — and a paragraph of what you are not claiming',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what they are not claiming.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) built on a figure of your own that you have counted: the old figure and why it is useless, the new one with its range and mean, the source, the _out of_, what you are not claiming, the one sentence it is for, and the small request.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the approximators**, **the _out of_**, **what you are not claiming**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us have been giving a total where the matter is a proportion?** Count. It is most of the room, and it is not carelessness: a total is the figure you happen to know, and a proportion is the figure you have to go and get. Eleven mornings at a bus stop is what the difference costs, and it is the cheapest piece of research anybody in this room will ever do.'));
out.push(hw('Write the page (60+ words). Then begin the count your partner designed for you — today, not on Monday — and write down the first three days\' figures.'));

// ======================= 22.4 =======================
out.push(pb());
out.push(h2('22.4  The question I hope will not be asked'));
out.push(p('**Function:** answering the hard question   ·   **Grammar:** _the fact is_ · _what I should have done was_ · _I did_ for emphasis   ·   **Pronunciation:** the pause before an honest answer'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Write down — do not say — the question you most hope will not be asked about your own work. One sentence. Your teacher asks only this: _did you have to think about it?_ Nobody does.'));
out.push(board('Why did you accept four handsets when you had said twice you were not asking for a replacement?', 'the question you hope will not be asked'));
out.push(p('**b**  Which answer is honest and which is a defence? **1** _It was not really my decision._  **2** _I accepted them because they were worth money and I wanted them._  **3** _There were a number of factors._  **4** _I should have written back the same day and I did not._  **5** _With hindsight, things could have been handled differently._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Mazen\'s hard question, and what is his answer?   **A** why he accepted the handsets; that he wanted them, and he says so   **B** why he wrote in October; that he was busy   **C** why he waited six weeks; that nobody asked'));
out.push(p('**b**  Listen again. **1** What three answers does he say he tried first, and what is wrong with all three?   **2** What does Ms Huda say the hard question actually tests?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.7  Three answers I threw away', [
  ['Mazen', 'The distributor has written again and they want to meet me in January, which is more than I expected. And there is a question in that meeting that I know is coming, because I would ask it.'],
  ['Ms Huda', 'What is it?'],
  ['Mazen', 'Why did you accept four handsets when your letter said twice that you were not asking for a replacement? It is a completely fair question and I have no good answer, and I have written three bad ones.'],
  ['Nour', 'What were the three?'],
  ['Mazen', 'The first: "I accepted them as a gesture of goodwill." Which is their phrase and not mine, and using somebody else\'s phrase is the first sign that you have not thought about it. The second: "The units were offered and it would have been impolite to refuse." Which is almost true and makes me sound like a man who does what he is handed. And the third was two sentences about the fifteen in my book, which is a change of subject wearing an answer\'s coat.'],
  ['Jad', 'And the fourth?'],
  ['Mazen', 'The fourth is the answer. "I accepted them because they are worth about one and a quarter million pounds and I wanted them. That does not change the question in my letter and I said so in writing eleven days later." That is it. Two sentences, and the first one is the one I did not want to say.'],
  ['Lubna', 'Is that not giving something away?'],
  ['Mazen', 'It is giving away a thing they already know. They sent me four handsets; they are not under the impression that I threw them in the street. What I would be giving away by saying anything else is that I am a man who will not say an obvious thing out loud, and that is worth much more to them than four handsets.'],
  ['Ms Huda', 'Now what the hard question actually tests, because almost nobody understands this. **It is not testing the thing you did.** They know what you did; it is in a letter. It is testing whether you will say it plainly when somebody asks. An inadequate action admitted plainly is survivable in any workplace in the world. An inadequate action defended with three factors and a hindsight is not — and the reason is not morality, it is that the second one tells the listener they will have to do this again next year.'],
  ['Mazen', 'And I had the answer in four words and spent three evenings getting round it.'],
  ['Ms Huda', 'Everybody does. The hard question is always short, you always know it, and the answer is always one sentence longer than you want it to be.'],
]));
out.push(sp());
out.push(box('Language box – answering the hard question', [
  '**The shape, and it is two sentences:** **1** the plain fact, including the part that does not flatter you. **2** what it does **not** change, or what you did about it, with a date. _I accepted them because they are worth about one and a quarter million and I wanted them. That does not change the question in my letter, and I said so in writing eleven days later._',
  '**The forms that carry a plain answer:** _**The fact is** that…_ · _I **did** write to them, and I wrote the wrong letter_ _(emphatic_ did_)_ · _**What I should have done was** write back the same day_ · _**I have no good answer to that, and here is the bad one.**_',
  '⚠ ~~What I should have done was to write~~ → _was **write**_ (no _to_). ⚠ And the emphatic _did_ takes the bare infinitive: _I **did ask**_, not ~~I did asked~~.',
  '⚠ **The four answers to recognise and throw away:**',
  table(['the bad answer', 'what it tells the listener'], [
    ['_a gesture of goodwill_ _(their phrase)_', 'you have not thought about it'],
    ['_it would have been impolite to refuse_', 'you do what you are handed'],
    ['_there were a number of factors_', 'there were none you will name'],
    ['_with hindsight it could have been handled differently_', 'nobody did anything, and it happened'],
  ], [2.2, 2.4]),
  '**What the hard question is actually testing, and it is not the thing you did.** They know what you did — it is in a letter, on a sheet, in a log. **It is testing whether you will say it plainly when somebody asks.** An inadequate action admitted plainly is survivable almost anywhere. The same action defended with factors and hindsight is not, and the reason is practical rather than moral: the second answer tells the listener that they will have to do this again next year.',
  '**And give away the thing they already know.** _They sent me four handsets; they are not under the impression that I threw them in the street._ What is given away by any other answer is that you are a person who will not say an obvious thing out loud — which is worth far more to the other side than the thing itself.',
  '**Useful phrases:** it is a completely fair question and I have no good answer · using somebody else\'s phrase is the first sign that you have not thought about it · a change of subject wearing an answer\'s coat · I had the answer in four words and spent three evenings getting round it.',
  '**Practise:** Answer each in two sentences — the plain fact, then what it does not change.  1 something you accepted that you should not have  2 something you did not do  3 something you did too late  4 something you got wrong in public  5 something you have never explained',
  '**Pronunciation.** 🔊 **Track 22.8** There is a short **pause before** an honest answer and none inside it, and the delivery is level: _‖ I accepted them because I wanted them._ A rush at the start sounds rehearsed; a pause in the middle sounds like editing. Listen to four pairs and say which of each you would believe.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks B their own hard question — B has written it down, so A reads it out. B gives a bad answer first, on purpose, then the real one in two sentences. A names which of the four bad kinds the first answer was. Swap.'));
out.push(dlg(null, [
  ['A', '_(reading B\'s question)_ __________?'],
  ['B', '_(the bad answer)_ __________.'],
  ['A', 'That is __________ — the kind that tells me __________.'],
  ['B', '_(the real one)_ __________. That does not change __________, and I __________ on __________.'],
]));
out.push(table(['Card A – the kind of question', 'Card B – the kind of question'], [
  ['why you accepted something you should not have', 'why something took so long'],
  ['why you did not say anything at the time', 'why you did it that way and not the obvious way'],
  ['why nobody was told', 'why you did not ask'],
  ['what you would do differently, and why you did not', 'whose fault it was, when part of it is yours'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight bad answers and mark which of the four kinds each one is. _There were a number of factors_ and the hindsight sentence come up most.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Read your hard question out loud. Then give the two-sentence answer: the plain fact including the part that does not flatter you, and what it does not change or what you did about it, with a date.'));
out.push(p('**b**  Swap. Then each of you say which word in your partner\'s answer is still protecting them, and take it out.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The distributor has written to Mazen again and wants to meet him in January, which is more than he expected — and there is a question in that meeting that he knows is coming, because he would ask it: why did you accept four handsets when your letter said twice that you were not asking for a replacement? He says it is a completely fair question, he has no good answer, and he has written three bad ones. The first: "I accepted them as a gesture of goodwill" — their phrase and not his, and using somebody else\'s phrase is the first sign that you have not thought about it. The second: "The units were offered and it would have been impolite to refuse" — almost true, and it makes him sound like a man who does what he is handed. The third was two sentences about the fifteen in his book, which is a change of subject wearing an answer\'s coat. The fourth is the answer: "I accepted them because they are worth about one and a quarter million pounds and I wanted them. That does not change the question in my letter and I said so in writing eleven days later." Two sentences, and the first is the one he did not want to say. What any other answer would give away is that he is a man who will not say an obvious thing out loud, and that is worth much more to them than four handsets. Ms Huda said the hard question is not testing the thing he did — they know that, it is in a letter. It is testing whether he will say it plainly when asked: an inadequate action admitted plainly is survivable anywhere, while the same action defended with factors and hindsight is not, because the second answer tells the listener they will have to do this again next year. And Mazen said he had the answer in four words and spent three evenings getting round it. Ms Huda said everybody does: the hard question is always short, you always know it, and the answer is always one sentence longer than you want it to be._'));
out.push(p('**Listener task:** write one hard question from this room and the four words at the centre of its answer.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Mazen writes for himself before the meeting. Answer the questions.'));
out.push(model([
  '**BEFORE THE MEETING · the question I know is coming** · M. Hariri · for nobody · 20 December',
  '**The question.** Why did you accept four replacement units when your letter of 24 November said twice that you were not asking for a replacement?',
  '**Why I am sure it is coming.** Because I would ask it. It is the only interesting question in the whole file, and the man who answers it badly has told you everything about himself in one sentence.',
  '**The three answers I have thrown away.** "As a gesture of goodwill" — their phrase, not mine, and borrowing the other side\'s words is how you show that you have not thought about it. "It would have been impolite to refuse" — almost true, and it makes me a man who takes what he is handed. And two sentences about the fifteen in my fault book, which is a change of subject in an answer\'s coat.',
  '**The answer.** I accepted them because they are worth about 1,250,000 pounds and I wanted them. That does not change the question in my letter, and I said so in writing eleven days later, on 7 December.',
  '**What that answer gives away.** Nothing they do not know: they sent the units. What any other answer would give away is that I am a man who will not say an obvious thing out loud, which is worth a great deal more to them than four handsets.',
  '**The second question, which I had not thought of until last night.** "Then why did you say twice that you were not asking for a replacement?" Because a letter that asks for two things is answered with the cheaper one, and I wanted the specification. I was right about the mechanism and had not expected it to be used on me so exactly.',
  '**And what I shall not do in that meeting.** I shall not say "with hindsight". If I have nothing to say about something, I shall say that I have nothing to say about it, which has never once in my life gone worse than the alternative.',
]));
out.push(item('1', 'Why is he sure the question is coming?'));
out.push(item('2', 'What does he say the answer gives away, and what would any other answer give away?'));
out.push(item('3', 'What is the second question, and what does he say about the mechanism?'));
out.push(writers([
  'A page prepared before a hard meeting: **the question, in their words** → **why you are sure it is coming** → **the answers you have thrown away, with what each tells a listener** → **the answer, in two sentences** → **what that answer gives away** → **the second question, which follows the first** → **and the one thing you will not do**.',
  'Write the question in their words and not softened. If your written version of the question is kinder than the one that will be asked, you are preparing for a different meeting.',
  'Keep the three bad answers on the page. Naming what each one **tells a listener about you** is what stops you reaching for it under pressure, which is when they all come back.',
  'Prepare the **second** question. Every hard question has a follow-up, and the follow-up is where the damage happens — because the first answer has been rehearsed and the second has not.',
  '⚠ And write down the thing you will not do. _I shall not say "with hindsight"._ A named prohibition survives a difficult room; a general intention to be honest does not.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page before the hard question (60 words or more).'));
out.push(p('**BEFORE THE MEETING · the question I know is coming** · ______________   **The question.** ______________?   **Why I am sure it is coming.** ______________.   **The answers I have thrown away.** "______________" — ______________. "______________" — ______________. And ______________, which is ______________.   **The answer.** ______________. That does not change ______________, and I ______________ on ______________.   **What that answer gives away.** ______________. What any other answer would give away is ______________.   **The second question.** "______________?" ______________.   **And what I shall not do.** I shall not ______________. If I have nothing to say, I shall say ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The question in their words, not softened',
  'The answer in two sentences, the first one unflattering',
  'The second question prepared',
  'One named prohibition — a phrase you will not use',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the phrase they will not use.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) for the hard question you actually face: the question in their words, why it is coming, the bad answers and what each reveals, the two-sentence answer, what it gives away, the second question, and the thing you will not do.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the question unsoftened**, **the unflattering first sentence**, **the second question prepared**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How long did anybody have to think about what their hard question was?** Four seconds, in most cases — so the question is known, the answer is not written, and the first place the two have ever met is the room where it matters. Twenty minutes with a pen is the whole remedy, and almost nobody spends it.'));
out.push(hw('Write the page (60+ words), including the second question. Then say the two-sentence answer out loud, once, to nobody, and notice which word you want to add. Take it out.'));

// ======================= 22.5 =======================
out.push(pb());
out.push(h2('22.5  The questions back'));
out.push(p('**Function:** asking the questions that matter   ·   **Grammar:** _How do you…? · What happens when…? · Who decides…?_   ·   **Pronunciation:** the tone that asks for a fact and not for reassurance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One question each that you have been asked at the end of something — _have you any questions?_ — and what you said. Most of the room said no, or asked about something they already knew.'));
out.push(board('Who decides what goes on the page? — and I had been told nine times and had never asked.', 'questions that get a fact'));
out.push(p('**b**  Which gets a fact and which gets reassurance? **1** _Is it a good place to work?_  **2** _Who decides what goes on the front page?_  **3** _Would I enjoy it?_  **4** _What happens when two people want the same slot?_  **5** _Are the people friendly?_  **6** _How often does the rota change, and who changes it?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three questions did Jad ask the forum editors, and which one produced the answer that mattered?   **A** who decides, what happens when two answers disagree, and who the names go next to; the second   **B** about pay; the first   **C** about the software; the third'));
out.push(p('**b**  Listen again. **1** Why does he say he nearly asked nothing?   **2** What does Ms Huda say the questions you ask reveal?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.9  Three questions and the one that mattered', [
  ['Jad', 'The editors answered my note about the four rules and asked me to a call — four of them, forty minutes, and at the end one of them said: have you any questions? And I nearly said no.'],
  ['Omar', 'Why nearly?'],
  ['Jad', 'Because I am nineteen and because I had got what I wanted, and because every time anybody has asked me that in my life I have said no. And then I remembered that I had three questions written on a piece of paper in front of me, which I had written on Tuesday and had decided not to use.'],
  ['Ms Huda', 'Read the three.'],
  ['Jad', 'One: who decides what goes on the answers page? Two: what happens when two of us give different answers to the same question? And three: when the names go next to the answers in January, whose name goes on an answer that two of us wrote?'],
  ['Nour', 'Those are not polite questions.'],
  ['Jad', 'They are completely polite and not one of them is comfortable, which is a different thing. And the second one produced the answer that mattered: nobody has ever decided. Two people have given different answers to the same question about eleven times this year, and both answers stay up, and the reader chooses, and nobody at the editors\' end knew that was happening.'],
  ['Lubna', 'What did they say?'],
  ['Jad', 'There was a silence of about four seconds, which on a telephone call is a long time, and then the one who had asked whether I had any questions said: "that is a problem and we have not got a process for it." And then they talked about it for ten minutes, and I said almost nothing, and at the end they asked me to write a note about it.'],
  ['Ms Huda', 'Now the shape of the three questions, because it is not an accident. _Who decides…?_ · _What happens when…?_ · _Whose name goes on…?_ All three ask for a **fact about a mechanism**. None of them asks whether something is good, or whether he would enjoy it, or whether the people are nice — and those are the questions people ask, because they are the questions you can ask without finding anything out.'],
  ['Jad', 'And a question about a mechanism cannot be answered with reassurance. You either know who decides or you do not.'],
  ['Ms Huda', 'Which is why the questions you ask are read as closely as the answers you give. _What happens when two people disagree?_ tells the room that you have thought about the work. _Is it a good place to work?_ tells them that you have thought about yourself.'],
]));
out.push(sp());
out.push(box('Language box – the questions that get a fact', [
  '**Three shapes, and all three ask for a fact about a mechanism:**',
  table(['shape', 'example', 'what it gets'], [
    ['_**Who decides** …?_', '_Who decides what goes on the page?_', 'a name or an admission that nobody does'],
    ['_**What happens when** …?_', '_What happens when two answers disagree?_', 'a process, or a silence'],
    ['_**How often** …, and **who** …?_', '_How often does the rota change, and who changes it?_', 'two facts in one question'],
  ], [1.4, 2.2, 1.8]),
  '**Against the questions that get reassurance:** _is it a good place to work? · would I enjoy it? · are the people friendly? · is there much pressure?_ Every one of those can be answered truthfully by anybody with one sentence that contains nothing, and they are the questions people ask **because they can be asked without finding anything out**.',
  '⚠ **A question about a mechanism cannot be answered with reassurance.** You either know who decides or you do not — and the answer _nobody has ever decided_ is worth more than any amount of assurance, because it is the thing the work actually needs and it is now in the room.',
  '**Ask two questions in one where you can:** _how often does it change, and who changes it?_ It is not greedy; it is the same question twice, and the second half stops the first being answered vaguely.',
  '⚠ **And expect a silence.** _There was a silence of about four seconds, which on a telephone call is a long time._ A silence after your question is the best outcome available: it means the question had not been asked before, and the next ten minutes belong to it.',
  '**The questions you ask are read as closely as the answers you give.** _What happens when two people disagree?_ says you have thought about the work. _Is it a good place to work?_ says you have thought about yourself. Both are legitimate; only one of them is a qualification.',
  '**Useful phrases:** I nearly said no · they are completely polite and not one of them is comfortable, which is a different thing · nobody has ever decided · and nobody at their end knew it was happening · I said almost nothing and at the end they asked me to write a note.',
  '**Practise:** Turn each reassurance question into a mechanism question.  1 Is it a good place to work?  2 Is there much pressure?  3 Are the people helpful?  4 Is there room to grow?  5 Is the equipment all right?',
  '**Pronunciation.** 🔊 **Track 22.10** A mechanism question **falls** at the end and is said slowly, with the question word stressed: _**WHO** decides what goes on the page?_ ↘ Said fast and rising, the same words sound like an accusation; said slowly and falling, they sound like somebody taking notes. Listen to six and mark ↗ or ↘.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks a reassurance question from the card. B answers it truthfully in one sentence that contains nothing. A then turns it into a mechanism question and B answers that — and says which answer gave A something. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________?'],
  ['B', '_(truthfully, and containing nothing)_ __________.'],
  ['A', 'Who decides __________? / What happens when __________?'],
  ['B', '__________.'],
  ['B', 'The second one gave you __________.'],
]));
out.push(table(['Card A – reassurance questions', 'Card B – reassurance questions'], [
  ['_Is it a good place to work?_', '_Is there much pressure?_'],
  ['_Are the people helpful?_', '_Is there room to grow?_'],
  ['_Is the equipment all right?_', '_Is the manager approachable?_'],
  ['_Would I fit in?_', '_Is it busy?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight mechanism questions and mark the ones whose honest answer is **nobody knows** or **nobody has decided**. In a first run it is three or four of eight — and every one of those is a thing the other side will now have to think about, which is why a mechanism question is a contribution and not an interrogation.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write three mechanism questions about a real place — your own workplace, a post you want, a committee you have joined. At least one must begin _What happens when…?_ Then say which of the three you would be least comfortable asking.'));
out.push(p('**b**  Swap. Then each of you predict your partner\'s answer to their least comfortable question — and say whether a silence would be a good outcome.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The editors answered Jad\'s note about the four rules and asked him to a call — four of them, forty minutes — and at the end one of them said: have you any questions? And he nearly said no, because he is nineteen, because he had got what he wanted, and because every time anybody has asked him that in his life he has said no. Then he remembered that he had three questions written on a piece of paper in front of him, which he had written on Tuesday and decided not to use. One: who decides what goes on the answers page? Two: what happens when two of us give different answers to the same question? Three: when the names go next to the answers in January, whose name goes on an answer that two of us wrote? Nour said those are not polite questions, and Jad said they are completely polite and not one of them is comfortable, which is a different thing. The second produced the answer that mattered: nobody has ever decided. Two people have given different answers to the same question about eleven times this year, both answers stay up, the reader chooses, and nobody at the editors\' end knew that was happening. Lubna asked what they said, and there was a silence of about four seconds — which on a telephone call is a long time — and then the one who had asked whether he had any questions said: "that is a problem and we have not got a process for it." Then they talked about it for ten minutes, Jad said almost nothing, and at the end they asked him to write a note about it. Ms Huda said the shape of the three questions is not an accident: who decides, what happens when, whose name goes on — all three ask for a fact about a mechanism, and none of them asks whether something is good or whether he would enjoy it, which are the questions people ask because they can be asked without finding anything out. Jad said a question about a mechanism cannot be answered with reassurance: you either know who decides or you do not. And Ms Huda said that is why the questions you ask are read as closely as the answers you give._'));
out.push(p('**Listener task:** write one mechanism question from this room whose answer is "nobody has decided".   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Jad was asked to write. Answer the questions.'));
out.push(model([
  '**NOTE FOR THE EDITORS · two answers to one question** · J. Attar · 20 December',
  'You asked me on Thursday to write this down. It comes out of the second of my three questions, and I had nearly not asked it.',
  '**The question I asked.** What happens when two of us give different answers to the same question?',
  '**The answer, which I am repeating so that it is on paper.** Nobody has ever decided. Both answers stay up, and the reader chooses.',
  '**How often it happens, as far as I can tell.** About eleven times this year, on questions I have been involved in. I have the thread numbers for seven of the eleven and I am looking for the rest. It is my own count and it is certainly low, because I only see the threads I have answered in.',
  '**Why it will matter more in January than it does now.** Because from January the answers carry names. At present a reader who finds two answers sees two answers; from January they will see two people, and the one with the longer answer will be believed, which is not the same as the one who is right.',
  '**What I am not proposing.** I am not proposing that an editor decides which answer is correct. Three of the eleven are cases where both answers are right for different hardware, and an editor who ruled on those would make the page worse.',
  '**The smallest thing that would work, and it is one line.** When a second answer disagrees with the first, the person writing it adds one line at the top: _this differs from the answer above; the difference is X._ No editor, no process, no deletion — one line, written by the person who already knows what the difference is.',
  '**And the thing I should say about myself.** I have written at least four of those eleven second answers and I have never once added that line. I did not think of it until you asked me the question back on Thursday.',
]));
out.push(item('1', 'What is his count, and why does he say it is certainly low?'));
out.push(item('2', 'Why will it matter more in January, and what does he say about the longer answer?'));
out.push(item('3', 'What is the smallest thing that would work, and who writes it?'));
out.push(writers([
  'A note written because a question was asked back: **why you are writing it** → **the question you asked** → **the answer, repeated so that it is on paper** → **how often it happens, with an admitted low count** → **why it will matter more later** → **what you are not proposing** → **the smallest thing that would work** → **and the thing about yourself**.',
  'Repeat the answer you were given, in writing, and say that is why you are repeating it. An answer given in a conversation has no author in six months (19.2).',
  'Admit that your own count is low and say why. _I only see the threads I have answered in._ A count with its own limitation stated is treated as a floor rather than as a claim, which is exactly what you want.',
  'Say what you are **not** proposing, and give the reason from the data. _Three of the eleven are cases where both answers are right for different hardware._ A proposal that has examined the cases against itself is very hard to refuse.',
  '⚠ And end with the thing about yourself: _I have written at least four of those eleven second answers and I have never once added that line._ It is the sentence that turns a note about other people into a note about the work.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that comes out of your question (60 words or more).'));
out.push(p('**NOTE FOR ______________ · ______________** · ______________   You asked me on ______________ to write this down. It comes out of ______________.   **The question I asked.** ______________?   **The answer, which I am repeating so that it is on paper.** ______________.   **How often it happens, as far as I can tell.** About ______ times ______________. I have ______________ for ______ of the ______. It is my own count and it is certainly low, because ______________.   **Why it will matter more in ______________.** ______________.   **What I am not proposing.** I am not proposing ______________, because ______________.   **The smallest thing that would work, and it is ______________.** ______________.   **And the thing I should say about myself.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The question quoted, and the answer repeated in writing',
  'A count with its own limitation stated',
  'What you are not proposing, with a reason from the cases',
  'The smallest fix, and who writes it — and one thing about yourself',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the thing they say about themselves.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more) that would come out of your own least comfortable question: the question, the answer in writing, your count with its limitation, why it will matter more later, what you are not proposing, the smallest fix, and the thing about yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the mechanism question**, **the count with its limitation**, **the smallest fix**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us have said "no questions" at the end of something this year?** Count. Then the second count, which is the useful one: how many of us had a question and decided not to ask it? Jad had three written on a piece of paper in front of him and nearly used none, and the one he nearly did not ask produced ten minutes of other people\'s thinking and a note he was asked to write.'));
out.push(hw('Write the note (60+ words). Then ask one of your three mechanism questions, this week, of somebody who ought to know the answer — and write down the answer and the length of the pause before it.'));

// ======================= 22.6 =======================
out.push(pb());
out.push(h2('22.6  The page a stranger could check'));
out.push(p('**Function:** writing the checkable page about yourself   ·   **Grammar:** everything in this unit, on one page   ·   **Pronunciation:** reading your own page aloud without apologising'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Find your **18.4** nine lines and read line 4 out — the one about what you are responsible for. Then say what has changed in the four units since you wrote it, and whether the number has moved.'));
out.push(board('Four sentences in week one. About nine hundred words a week now, and twelve of them wrong.', 'the page a stranger could check'));
out.push(p('**b**  Which belongs on a page for a stranger? **1** a number with its source  **2** a refusal  **3** a word of praise from your manager  **4** the thing you are worst at  **5** a figure you cannot support  **6** the sentence somebody else would write about you'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Yara put at the top of her page, and what has she taken off it?   **A** the week-one note, and the word "passionate"   **B** her qualifications, and her age   **C** nothing; she has refused to write it'));
out.push(p('**b**  Listen again. **1** Why does she say the week-one note belongs at the top?   **2** What does Ms Huda say the difference is between a page for a colleague and a page for a stranger?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.11  Four sentences, and what they are worth now', [
  ['Yara', 'There is a post at a laboratory in Damascus and the application wants one page about myself, and I have written it eleven times. The eleventh is the first one that is true.'],
  ['Ms Huda', 'What is at the top of it?'],
  ['Yara', 'The note I wrote in the first week of this course. Four sentences, and I have put them at the top of the page in quotation marks with the date.'],
  ['Omar', 'The week-one note? On an application?'],
  ['Yara', 'Four sentences in January and I could not say more than four. I can say nine hundred words a week now and about twelve of them are wrong. Nobody reading that page will have any idea what four sentences cost unless I show them the four sentences — and if I describe it instead, in a sentence beginning "I have made considerable progress", they will have learnt nothing and I shall have said nothing.'],
  ['Jad', 'What have you taken off?'],
  ['Yara', 'Every adjective about myself. "Motivated", "reliable", "passionate about laboratory work". I counted them in the first draft: nine adjectives about my own character in one page, not one of which anybody could check, and all nine of which the other eleven applicants will also have used.'],
  ['Nour', 'What is in their place?'],
  ['Yara', 'Four figures with their sources. The night calls: about four a month, and two a month in English because two of the night doctors are not Arabic speakers. The parallel running on lot 4471: forty minutes a day, for a fortnight, unpaid and nobody asked me. One hundred and four times I have said "I do not know, I will find out" — no, that is Jad\'s figure, I have borrowed the habit of counting from him. Mine is the eighteen hours in October.'],
  ['Ms Huda', 'And the refusal?'],
  ['Yara', 'One line. I am not able to release a patient result on a lot whose storage temperature nobody can state. It is on the page, and I put it there for the reason you gave in 21.5: it is the only line that tells a stranger where the end of me is.'],
  ['Ms Huda', 'Now the difference between this page and the nine lines you wrote in 18.4, because it is the whole cycle. The nine lines were for a **colleague**, who knows what your work is and can supply the context. A stranger owes you nothing and supplies nothing. So everything on a page for a stranger has to carry its own evidence — the number, the source, the count of what went wrong — and the only sentence that will survive is the one they could check without asking you a single question.'],
  ['Yara', 'And the four sentences from January are the only thing on it that anybody will remember.'],
]));
out.push(sp());
out.push(box('Language box – the page a stranger could check', [
  '**What goes on it, in this order:**',
  table(['part', 'the test'], [
    ['**The evidence a stranger could not guess**', 'something true and specific: a dated note, a count, a page you kept'],
    ['**What you do, in figures with sources**', 'could they check it without asking you?'],
    ['**What you are responsible for, with the errors**', 'is the error count there? (18.4)'],
    ['**One refusal**', 'does the page say where the end of you is? (21.5)'],
    ['**The thing you are worst at**', 'is it a real weakness and not a disguised strength?'],
    ['**One sentence somebody else said**', 'quoted, with who said it and when'],
  ], [2.3, 2.3]),
  '⚠ **Take out every adjective about your own character.** _Motivated · reliable · hard-working · passionate · dynamic · a team player._ Not one of them can be checked by anybody, and all of them will be on the other eleven applications. Count yours in the first draft; nine in one page is normal.',
  '**Put in the thing a stranger could not guess, and let it be small.** Four sentences written in week one, with the date and in quotation marks, say more about eleven months than any sentence beginning _I have made considerable progress_ — which is a description of evidence offered in place of the evidence.',
  '**Every figure with its source** (22.3), **every responsibility with its error count** (18.4), **one refusal** (21.5), and **one real weakness** — a weakness that is actually a strength in a thin coat (_I am a perfectionist_) is read as the ninth adjective.',
  '**And the difference between this page and the nine lines of 18.4, which is the point of the cycle:** the nine lines were for a **colleague**, who knows the work and supplies the context. A **stranger** owes you nothing and supplies nothing — so every sentence has to carry its own evidence, and the only line that will survive is one they could check **without asking you a single question**.',
  '**Useful phrases:** I have written it eleven times and the eleventh is the first one that is true · nine adjectives about my own character, not one of which anybody could check · four figures with their sources · it is the only line that tells a stranger where the end of me is.',
  '**Practise:** Replace each adjective with a checkable sentence.  1 reliable  2 hard-working  3 good with people  4 organised  5 passionate about the work',
  '**Pronunciation.** 🔊 **Track 22.12** Read your own page aloud **without the apology**: no falling away at the end of a figure, no rising at the end of a claim, and no small laugh after the number. Listen to the same three lines read twice, once apologetically and once not, and say what the difference does to the figures.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads their six parts aloud. B does one thing only: after each part, says _checkable_ or _not checkable_, and for the unchecked ones asks what a stranger would have to do to find out. Swap.'));
out.push(dlg(null, [
  ['A', 'The thing a stranger could not guess: __________.'],
  ['A', 'What I do, in figures: __________, from __________.'],
  ['A', 'What I am responsible for: __________, of which __________ wrong.'],
  ['A', 'One refusal: I am not able to __________.'],
  ['A', 'What I am worst at: __________.'],
  ['B', 'Checkable, checkable, not checkable — for that one a stranger would have to __________.'],
]));
out.push(table(['Card A – the page is for…', 'Card B – the page is for…'], [
  ['an application to another organisation', 'a committee that has never met you'],
  ['a new manager arriving next month', 'a client deciding whether to use you'],
  ['the person who will do your job after you', 'a form that asks what you can offer'],
  ['a stranger reading your name on a list', 'yourself, in five years'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** count the checkable parts out of twenty-four, and count the character adjectives that survived. The adjectives are the ones to read out: _conscientious_, _driven_, _a quick learner_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Read out your 18.4 line 4 and then today\'s version. Say what has changed and whether the number has moved. Then name the thing a stranger could not guess, and say why you nearly left it out.'));
out.push(p('**b**  Swap. Then each of you count your partner\'s character adjectives and replace the worst one with a checkable sentence, out loud.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There is a post at a laboratory in Damascus and the application wants one page about herself, and Yara has written it eleven times — and the eleventh is the first one that is true. At the top of it is the note she wrote in the first week of this course: four sentences, in quotation marks, with the date. Omar asked whether she means the week-one note, on an application, and she said yes: four sentences in January, and she could not say more than four; she can say nine hundred words a week now and about twelve of them are wrong. Jad asked what she has taken off, and the answer is every adjective about herself: motivated, reliable, passionate about laboratory work. She counted them in the first draft — nine adjectives about her own character in one page, not one of which anybody could check, and all nine of which the other eleven applicants will also have used. In their place are four figures with their sources: the night calls, about four a month and two of those in English because two of the night doctors are not Arabic speakers; the parallel running on lot 4471, forty minutes a day for a fortnight, unpaid and unasked; and the eighteen hours in October. And one refusal, in one line: she is not able to release a patient result on a lot whose storage temperature nobody can state — on the page, because it is the only line that tells a stranger where the end of her is. Ms Huda said the difference between this page and the nine lines of 18.4 is the whole cycle: the nine lines were for a colleague, who knows the work and supplies the context, and a stranger owes you nothing and supplies nothing — so everything has to carry its own evidence, and the only sentence that will survive is the one they could check without asking a single question. And Yara said the four January sentences are the only thing on the page anybody will remember._'));
out.push(p('**Listener task:** write one character adjective from this room and the checkable sentence that replaced it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Yara\'s page. Answer the questions.'));
out.push(model([
  '**ONE PAGE · Y. MANSOUR · laboratory technician, Suwayda · application of 22 December**',
  '**I shall start with four sentences I wrote on 14 January this year, because they are the only thing on this page you could not guess.** _"I have studied English since I was eleven. I have never spoken it to a stranger. I work in a laboratory. I want to be able to answer the telephone."_ That is all I could write in the first week of an English course. I could not have written a fifth sentence.',
  '**What I can do now, and where the figure comes from.** I take about four night telephone calls a month from Wards 2 and 4, of which about two are in English because two of the night doctors are not Arabic speakers. I have taken them since March; the count is my own, from the worksheets.',
  '**What I am responsible for, including what has gone wrong.** The afternoon analyser run, five days a week, since 2024. On 29 October four samples sat on a shelf for eighteen hours and were released late; I had seen a bag on that shelf in June of last year and said nothing, and that part is mine. The method sheet that followed has six steps and a reason against each one.',
  '**What I am not able to do.** I am not able to release a patient result produced on a reagent lot whose storage temperature cannot be stated. I have been in that position once, this month, and I offered four other things instead.',
  '**What I am worst at.** Short answers. I write three paragraphs where two sentences would do, and the reason is that a long answer is safer for me and more work for the person reading it.',
  '**One sentence somebody else said.** On 2 December the senior technician said, when I asked whether there were exceptions I did not know: "Nobody has ever asked me that." She then named two.',
  '**And what is not on this page.** Nine adjectives about my own character, which were in the first draft. I have taken all nine out, because none of them could be checked and all of them will be on the other applications.',
]));
out.push(item('1', 'Why does she put the four January sentences first?'));
out.push(item('2', 'What goes wrong in her third paragraph, and which part does she say is hers?'));
out.push(item('3', 'What has she taken off the page, and for what two reasons?'));
out.push(writers([
  'The page a stranger could check: **the evidence they could not guess, first** → **what you can do, with the source of the figure** → **what you are responsible for, including what went wrong** → **what you are not able to do** → **what you are worst at** → **one sentence somebody else said, dated** → **and what is not on the page**.',
  'Quote the old evidence rather than describing it. Four sentences in quotation marks with a date do what no amount of _I have made considerable progress_ can do, because the reader does the arithmetic themselves and believes their own conclusion.',
  'Put the failure in the paragraph about your responsibility, not in a separate paragraph of apology. _Four samples sat on a shelf for eighteen hours; I had seen a bag there in June and said nothing, and that part is mine._ A responsibility with its error inside it is the strongest paragraph on such a page.',
  'Make the weakness real. _I write three paragraphs where two sentences would do_ — and then the reason, which is unflattering: _a long answer is safer for me and more work for the reader._ A weakness that is a strength in a thin coat is read as another adjective.',
  '⚠ And say what you have taken off and why. The last paragraph is the one that makes the rest of the page credible, because it shows the reader that the absence of praise is a decision and not an oversight.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your one page (60 words or more).'));
out.push(p('**ONE PAGE · ______________ · ______________**   **I shall start with ______________, because it is the only thing on this page you could not guess.** "______________" ______________.   **What I can do now, and where the figure comes from.** ______________, of which ______________. The count is ______________.   **What I am responsible for, including what has gone wrong.** ______________ since ______________. On ______________ ______________, and that part is mine.   **What I am not able to do.** I am not able to ______________.   **What I am worst at.** ______________, and the reason is ______________.   **One sentence somebody else said.** On ______________ ______________ said: "______________."   **And what is not on this page.** ______ adjectives about my own character, which were in the first draft.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No adjective about your own character anywhere',
  'Every figure with its source; every responsibility with its error',
  'One refusal, and one real weakness with its unflattering reason',
  'One dated quotation from somebody else',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what they are worst at.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your full page (140 words or more) for a real stranger: the evidence they could not guess, the figures with sources, the responsibility with its errors, the refusal, the real weakness, the dated quotation, and what you have taken off.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **no character adjectives**, **every figure with a source**, **one real weakness**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many adjectives about your own character were in your first draft?** Count them and say the number out loud — nine is normal. Every one was written by somebody who had a number available and did not use it, and the number was available because of eleven months of counting that nobody here was doing in January.'));
out.push(hw('Write the page (60+ words) and give it to one person who does not know your work, with one instruction: _tell me which sentence you could check and which you could not._ Write down their answer.'));

// ======================= 22.7 =======================
out.push(pb());
out.push(h2('22.7  Review & Mediate: The three lines nobody can fail'));
out.push(p('**Function:** explaining a person specification   ·   **Recycling:** Units 1–22   ·   **Exam practice:** B1 Preliminary Reading Part 3, Writing Part 2, Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 22 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It is the writing that take the time.  **2** What I actually do are find out what we promised.  **3** About fifty-six, in average.  **4** Twenty-six nights from thirty-one.  **5** Whom decides what goes on the page?  **6** What I should have done were write back the same day.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the person specification for the post Rasha is being asked to consider.'));
out.push(box(null, [
  '**NIGHT PRACTICE LEAD · PERSON SPECIFICATION** _(eight requirements; attached to the letter of 18 November)_',
  '**1**  Registered nurse with a minimum of five years\' post-registration experience.',
  '**2**  Recent experience of night duty.',
  '**3**  Evidence of having led a service improvement.',
  '**4**  Excellent communication skills.',
  '**5**  Ability to work under pressure.',
  '**6**  Experience of producing reports for committees.',
  '**7**  A commitment to patient safety.',
  '**8**  Applications will be assessed against the criteria above.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Which three requirements does Rasha say nobody can fail, and which single requirement does she say the post actually exists for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.13  Eight lines, three of which do nothing', [
  ['Rasha', 'The specification came with the letter and I have read it about thirty times, and this week I read it the way we read the complaints procedure in 19.7 — one line at a time, asking what each line can actually do.'],
  ['Ms Huda', 'Start with the ones that work.'],
  ['Rasha', 'Three of the eight are checkable and I can answer all three with a document. One: nine years, and it is on a register. Two: two years of nights, and it is on a rota. Six: the September report, which exists and which four people have read.'],
  ['Nour', 'And the others?'],
  ['Rasha', 'Three of the remaining five cannot be failed by anybody. Four: excellent communication skills. Five: ability to work under pressure. Seven: a commitment to patient safety. Nobody in the history of nursing has ever written "I am not committed to patient safety" on an application, and nobody ever will, so those three lines will be claimed by every applicant and they discriminate nothing — and they are three of the eight.'],
  ['Omar', 'So the post is decided on the other five.'],
  ['Rasha', 'The post is decided on **three**, because line eight is not a requirement at all. "Applications will be assessed against the criteria above" — by whom? And how is line seven assessed? There is no answer, and there is nobody in the sentence.'],
  ['Jad', 'And the fourth one of the five?'],
  ['Rasha', 'Line three, and line three is the whole post. "Evidence of having led a service improvement." That is the only line on the page that I can answer with something a stranger could check and that another applicant could not simply claim: a hundred and eighteen shifts in a notebook, seven errors, a trial from the first of June, a report on the fifteenth of October, and a committee decision on the twenty-seventh. That line is the post, and it is one line of eight, and it is in the middle where nobody looks.'],
  ['Lubna', 'So what do you do with the three that cannot be failed?'],
  ['Rasha', 'Nothing, in my application — I answer them in two lines each with the dullest possible facts, because arguing with them is arguing with the form. But I am going to write to whoever drafted the page about **one** of them, because one line, one fault, one rewrite. Line four should not be a quality. It should be a question: "Describe one occasion on which you told somebody a figure they did not want to hear, and what happened."'],
  ['Ms Huda', 'And that is the mediation. **A requirement that cannot be failed does not select anybody; it only tells you how many lines of the page are doing no work.** Three of eight here. And the remedy is never to argue with the quality — it is to turn the quality into **an occasion**, because an occasion has a date in it and a date can be checked.'],
]));
out.push(sp());
out.push(box('Language box – reading a person specification', [
  '**Read it one line at a time and sort the lines into four kinds:**',
  table(['kind', 'example', 'what to do with it'], [
    ['**Checkable facts**', '_five years\' experience_ · _experience of reports_', 'answer with a document'],
    ['**The one the post exists for**', '_evidence of having led a service improvement_', 'this is the application; everything else is admin'],
    ['**Qualities nobody can fail**', '_excellent communication skills_ · _commitment to safety_', 'answer in two dull lines; do not argue'],
    ['**Lines with nobody in them**', '_applications will be assessed against the criteria_', 'note it, and ask who, if you ever get the chance'],
  ], [1.5, 2.1, 1.7]),
  '⚠ **A requirement that cannot be failed does not select anybody.** Nobody has ever written _I am not committed to patient safety_. Such a line tells you only one thing — **how many lines of the page are doing no work** — and the figure is usually about three in eight.',
  '**Find the one line the post actually exists for.** It is nearly always in the middle, it is the one that asks for **evidence of having done** something rather than for a quality, and it is the only line a rival applicant cannot simply claim. Everything else on the page is administration; that line is the application.',
  '**Answer the unfailable lines in two dull sentences each, with the flattest facts you have, and move on.** Arguing with them is arguing with the form, and the form is not in the room.',
  '**And the one rewrite worth asking for: turn the quality into an occasion.** _Excellent communication skills_ → _Describe one occasion on which you told somebody a figure they did not want to hear, and what happened._ An occasion has a date in it and a date can be checked, and the rewrite costs the drafter one line.',
  '**Useful phrases:** three of the eight are checkable and I can answer all three with a document · nobody has ever written that and nobody ever will · it is one line of eight and it is in the middle where nobody looks · arguing with them is arguing with the form.',
  '**Pronunciation.** 🔊 **Track 22.14** Reading a requirement aloud and then your own verdict on it: **the requirement flat and fast, a pause, then the verdict with the stress on the number** — _"a commitment to patient safety" ‖ that is one of **THREE** that nobody can fail._ Listen to four and write the verdict only.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the specifications below and does **not** show it. A reads it once, then explains it: which lines are checkable, which line the post exists for, which lines cannot be failed, and which line has nobody in it. B must say which one line they would write to the drafter about. **Then, in two minutes together**, turn one quality into an occasion. You do not have to agree. Change roles with the other specification.'));
out.push(table(['Specification A – a printing supervisor', 'Specification B – a school IT coordinator'], [
  ['_1 Five years\' experience of sheet-fed work._', '_1 Teaching qualification and two years in post._'],
  ['_2 Knowledge of ministry conditions._', '_2 Experience of maintaining school equipment._'],
  ['_3 Evidence of having improved a process._', '_3 Evidence of having trained colleagues._'],
  ['_4 Strong leadership qualities._', '_4 Excellent interpersonal skills._'],
  ['_5 Attention to detail._', '_5 A flexible approach._'],
  ['_6 Experience of reporting to a client._', '_6 Experience of writing guidance for staff._'],
  ['_7 A commitment to quality._', '_7 A commitment to safeguarding._'],
  ['_8 Shortlisting will be based on the above._', '_8 Candidates will be assessed on all criteria._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the one line each pair chose and the occasion they turned a quality into. On both specifications the post exists for line 3, three lines cannot be failed (4, 5, 7) and line 8 has nobody in it — which is the same arithmetic as Rasha\'s, from two different trades, and that is the point of running the stage with two documents.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Use a real specification, job advertisement, appraisal form or application form from your own life. Explain it to your partner **without showing it**: the checkable lines, the one line the post exists for, the lines nobody can fail, and the line with nobody in it. Your partner must ask: _how many of the lines are doing no work?_, _which line could a rival not simply claim?_ and _what occasion would you ask for instead?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _The specification came with Rasha\'s letter and she has read it about thirty times, and this week she read it the way the class read the complaints procedure in 19.7 — one line at a time, asking what each line can actually do. Three of the eight are checkable and she can answer all three with a document: nine years, which is on a register; two years of nights, which is on a rota; and the September report, which exists and which four people have read. Three of the remaining five cannot be failed by anybody: excellent communication skills, ability to work under pressure, and a commitment to patient safety. Nobody in the history of nursing has ever written "I am not committed to patient safety" on an application and nobody ever will, so those three will be claimed by every applicant and they discriminate nothing — and they are three of the eight. Omar said so the post is decided on the other five, and Rasha said on three, because line eight is not a requirement at all: "applications will be assessed against the criteria above" — by whom, and how is line seven assessed? There is nobody in the sentence. And the fourth of the five is line three, which is the whole post: "evidence of having led a service improvement" is the only line she can answer with something a stranger could check and that another applicant could not simply claim — a hundred and eighteen shifts in a notebook, seven errors, a trial from the first of June, a report on the fifteenth of October, and a committee decision on the twenty-seventh. That line is the post, it is one line of eight, and it is in the middle where nobody looks. Lubna asked what she does with the three that cannot be failed, and the answer is nothing in her application: two dull lines each with the flattest facts, because arguing with them is arguing with the form. But she is writing to whoever drafted the page about one of them — one line, one fault, one rewrite. Line four should not be a quality; it should be a question: "Describe one occasion on which you told somebody a figure they did not want to hear, and what happened." Ms Huda said a requirement that cannot be failed does not select anybody — it only tells you how many lines of the page are doing no work — and the remedy is never to argue with the quality but to turn it into an occasion, because an occasion has a date in it._'));
out.push(p('**Listener task:** write one quality from this room and the occasion it should have been.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 3)', 7));
out.push(p('Read the article and choose the correct answer **A**, **B**, **C** or **D** for each question.'));
out.push(box(null, [
  '**THE THREE LINES NOBODY CAN FAIL**   from a magazine for managers',
  'Take any person specification from any organisation and read the lines one at a time, asking of each one what it is able to do. In a list of eight you will usually find three that cannot be failed by anybody: excellent communication skills, the ability to work under pressure, and a commitment to whatever the organisation is for. Nobody has ever written on an application that they are not committed to safety, or that they communicate poorly, and nobody ever will.',
  'This is not a scandal and it is not laziness. Those lines are there because somebody had to write eight lines and three of the things that matter most about a person are genuinely hard to put on a form. The result, though, is that three-eighths of the page selects nobody. Every applicant claims all three, in roughly the same words, and the panel is left to decide on the rest.',
  'What survives is more interesting. Two or three lines ask for facts — years, registrations, a qualification — and those lines are a filter rather than a choice: they remove people and they do not rank anybody. One line asks for **evidence of having done** something. That line, in almost every specification I have ever read, is the post. It is also almost always in the middle, where a reader who is skimming has settled into a rhythm and stopped noticing.',
  'And then there is the last line, which is not a requirement at all. _Applications will be assessed against the criteria above._ By whom, with what weighting, and how are the three unfailable lines assessed? There is no answer, because there is nobody in the sentence.',
  'The remedy is not to shorten these documents, which is what everybody suggests and which produces the same three lines in a smaller font. It is to turn each quality into an occasion. _Excellent communication skills_ becomes _describe one occasion on which you told somebody a figure they did not want to hear, and what happened_. That line can be failed, it can be answered well or badly, and it costs the person drafting the form eleven words.',
  'I have made this suggestion to four organisations. Three have agreed that it would be better and changed nothing. The fourth changed one line, and the person who ran the next panel told me that it was the line they spent most of the meeting on — which is what you would expect, since it was the only line with anything in it that anybody could disagree about.',
], C.lyellow, C.orange));
[
  '**1**  What does the writer say about the three unfailable lines?   **A** They are written in bad faith.   **B** They exist for understandable reasons but select nobody.   **C** They should be removed from all specifications.   **D** They are the lines panels spend most time on.',
  '**2**  What does the writer say about the lines that ask for facts?   **A** They are the most important lines on the page.   **B** They are usually inaccurate.   **C** They should be moved to the middle.   **D** They remove people without ranking anybody.',
  '**3**  Why does the writer mention that the key line is usually in the middle?   **A** Because a reader who is skimming has stopped noticing by then.   **B** Because the middle is where the facts are.   **C** Because panels read specifications backwards.   **D** Because it is the longest line.',
  '**4**  What is the writer\'s objection to shortening these documents?   **A** Short documents are harder to assess.   **B** Organisations will not agree to it.   **C** It produces the same unfailable lines in a smaller font.   **D** The facts would have to be removed.',
  '**5**  What does the last paragraph suggest about the writer\'s proposal?   **A** That most organisations refuse it outright.   **B** That agreement and change are not the same thing.   **C** That it works only in large organisations.   **D** That panels dislike lines that can be disagreed about.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note to whoever drafted a specification, about one line (60 words or more).'));
out.push(p('**______________ · requirement ______** · ______________   I am writing about one line of the ______________. The others are not the subject of this note.   **The line as it stands.** "______________"   **What it can do.** Nothing, and I do not think that is anybody\'s fault. Of ______ applicants, ______ will claim it, in roughly the same words, because ______________.   **How many lines are doing no work.** ______ of ______: requirements ______, ______ and ______.   **The line the post exists for.** Requirement ______: "______________". It is the only line a rival could not simply claim, and it is ______________.   **The rewrite, which is ______ words.** "______________"   **Why that one and not the others.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One line only, with the others set aside',
  'The count of lines doing no work, with their numbers',
  'The line the post exists for, named',
  'The quality turned into an occasion, with a word-count',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these two questions. Write **140 words or more**.',
  '**Question 1 — article.** You see this notice in an English-language magazine.',
  '_"**What do people get wrong about your work?** Tell us what people think your job is and what it actually is — with at least one number in it. The best articles will be published."_',
  '**Question 2 — story.** Write a story that begins with this sentence:',
  '_"She asked me what I actually did all day, and I talked for two minutes and said nothing."_',
]));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 22 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  ___ the writing that takes the time, not the machines.   a) There is   b) It is   c) That is',
  '2  It is the writing that ___ the time.   a) take   b) taking   c) takes',
  '3  What I actually do ___ find out what we promised.   a) are   b) is   c) does',
  '4  About fifty-six a morning, ___ average.   a) in   b) on   c) by',
  '5  Twenty-six nights ___ thirty-one.   a) out of   b) from   c) of',
  '6  ___ decides what goes on the answers page?   a) Who   b) Whom   c) Which',
  '7  What I should have done ___ write back the same day.   a) is   b) were   c) was',
  '8  I ___ write to them in October, and I wrote the wrong letter.   a) did   b) do   c) have',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 2 style – matching).** 🔊 **Track 22.15** You will hear five people talking about something they said about their own work. For each speaker (**1–5**), choose from **A–H** what each one says the fault was. There are **three** letters you do not need.'));
out.push(box(null, [
  '**A**  A figure was given as a total where the matter was a proportion.',
  '**B**  The answer contained no noun that a stranger could see.',
  '**C**  The emphasis was on the wrong half of a true sentence.',
  '**D**  A hard question was answered with somebody else\'s phrase.',
  '**E**  A question was nearly not asked at all, and the answer turned out to be that nobody had decided.',
  '**F**  A page about a person contained adjectives where it should have contained figures.',
  '**G**  A requirement on a form could not be failed by anybody.',
  '**H**  A refusal was left off a page about a person.',
]));
[
  '**1**  Speaker 1 ______   **2**  Speaker 2 ______   **3**  Speaker 3 ______   **4**  Speaker 4 ______   **5**  Speaker 5 ______',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 22.15  Audio script (read after the check)', [
  ['1  Man', 'Two minutes, and when I stopped she said "so you fix computers". I had given her the department, the systems, the fact that it is varied, and the word support about nine times. Not one figure and not one thing she could have gone and looked at. Anybody listening would have learnt that I am employed, and nothing else.'],
  ['2  Man', 'I had said it for two years: about four hundred a day. And a man asked me — four hundred out of what? Out of how many who wanted to travel. I did not know, and the question was the whole question, because the complaint I have been making is about the sixty standing at a stop at twenty to seven.'],
  ['3  Woman', '"I answer the escalation calls." True, and every single time the next thing anybody said to me was about the calls — how many, how long, whether they are difficult. The calls are a nuisance. The point is that it is the only place we find out what we promised somebody, and I had been pointing at the wrong noun for a year.'],
  ['4  Man', 'They asked whether I had any questions and I nearly said no, which is what I have said every time in my life. I asked three. The second one — what happens when two of us give different answers to the same question — produced four seconds of silence and then "we have not got a process for that", and nobody at their end had known it was happening.'],
  ['5  Woman', 'Nine of them in one page: motivated, reliable, passionate about the work. Not one could be checked by anybody and all nine will be on the other eleven applications. I took them all out and put four figures in with where each figure came from, and the page got shorter.'],
]));
out.push(p('**C  Writing.** Write your one page (140+ words) for a stranger: the evidence they could not guess, what you do in figures with their sources, what you are responsible for including what has gone wrong, one refusal, what you are worst at, one dated quotation from somebody else, and what you have taken off the page.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 22)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ answer the four questions about my own work with a number in each',
  '☐ ask of any answer: could a stranger go and check it?',
  '☐ move the emphasis into the structure with _it is… that_, so it survives being summarised',
  '☐ put an approximator in front of every figure, and give the source',
  '☐ answer _out of what?_ before it is asked',
  '☐ answer the hard question in two sentences, the first one unflattering',
  '☐ ask a question about a mechanism instead of a question that gets reassurance',
  '☐ read a person specification and count the lines that are doing no work',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 23 – THE WIDER NEWS', [
  'Units 19 to 22 were about your own work and your own words. **Unit 23** is about everybody else\'s: how a thing that happened becomes a thing that is reported, and what each step does to it.',
  '**23.2 is the cycle to prepare for**: the reporting verbs. _He said · he claimed · he admitted · he denied · he announced · sources say · it is understood._ Each one puts the writer\'s opinion into a sentence that looks like a fact, and most readers never notice. **23.3** is the passive report — _it is reported that_, _is said to have_ — and what it hides.',
  '**23.7 takes the prediction board down for the last time.** It went up in 14.1, it came down in 18.7 with four of its dates fallen, and in 23.7 the two June dates are read — including Ms Huda\'s own. Bring your copy.',
  '**And bring one piece of news you have read or heard this month and believed, and then one you did not believe** — and, for each, the one word in it that decided you. 23.1 is built on those two words.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 22 · Student\'s Book');
