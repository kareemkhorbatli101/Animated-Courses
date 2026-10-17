// Proactive English B2 · Syria Edition · Book 1 · Unit 1 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band.** Name the criterion, then **copy the line you are marking** — the line itself and not a summary of it — and then say what you found. Three sentences, three criteria, three quoted lines.';

out.push(h1('Unit 1  What We No Longer Have to Explain'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**1.1**  say what you no longer have to explain about your own work',
  '**1.2**  choose a register on purpose, and say which one you chose',
  '**1.3**  put a stance adverb where it does the work',
  '**1.4**  use the whole tense system at speed, without naming it',
  '**1.5**  answer a question you have been asked three hundred times, differently',
  '**1.6**  write for a reader who knows the work and has thirty seconds',
  '**1.7**  Review & Mediate: explain to a newcomer what this room already takes for granted',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Class 5A, Room 14, September.** Mondays and Thursdays, half past five to half past seven, as for the last two years. Twelve people. **Eight of you were here in June** — Omar, Nour, Tareq, Jad, Yara, Mazen, Bassel and Lubna. **Four are new**, and one of the four is not new at all.',
  '**Four people are not coming back, and all four reasons are good ones.** Rasha has the night practice lead post and it takes her evenings; Ms Huda will read you her letter. Fares negotiated two days a month in writing, for a year, and the two days are Mondays and Thursdays. Umm Kinan is three streets away teaching the forty minutes she spent four months not asking for. And Lina has stopped, after two years, because she can do her job in English and does not want an examination — which nobody in this room has done before and which is worth a minute of your attention.',
  '**The four who arrive write the documents you spent last year taking apart.** A contracts clerk from the directorate whose office you have been complaining about since Unit 23. A sub-editor from a trade bulletin like the one Lubna judged in 23.1. A quality manager who refuses deliveries for a living. **And Hiba Nasser is back** — she left in September two years ago for a teacher-training course, four days a week, and she is the only person in this room who has been assessed against published criteria and had to sign the assessment.',
  '**Almost nothing in this unit is new language.** 1.4 is the tense map of 24.1 with the names taken off and a clock put on it. What is new is the thing the first evening of B2 is actually for: **finding out what this room can now say to itself in four words that took forty words a year ago** — and finding out, from four people who were not here, how much of it was never shared at all.',
  '**One warning about 1.7.** Its writing task is the compulsory essay of the examination, and **you have not been taught how to write one.** That is deliberate. Write it badly, keep it, and put the date on it: Unit 3 is where it is taught, and 3.7 reads this one again.',
], C.lyellow, C.orange));

// ======================= 1.1 =======================
out.push(pb());
out.push(h2('1.1  Four words instead of forty'));
out.push(p('**Function:** saying what you no longer have to explain   ·   **Grammar:** ellipsis on shared ground · _as you know_ · when not to say _obviously_   ·   **Pronunciation:** the stress that goes missing with the words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  **B2 Speaking Part 1.** Two questions each: _what do you do, and how long have you been doing it?_ and _what is one thing about your work that you are tired of explaining?_ Two minutes each. The four new people answer last, and the eight listen for **which words the speaker left out.**'));
out.push(board('About a third of my year is doing a thing for the second time.', 'ellipsis · _as you know_ · shared ground'));
out.push(p('**b**  Which sentence assumes something, and what? **1** _The eleven sites._  **2** _I look after the computers at eleven places of work, about ninety faults a month._  **3** _Same as last year, only worse._  **4** _The fourth-night problem._  **5** _Nineteen of the twenty-two, as you know._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many words does Omar take to say the thing that took him four evenings to work out last December, and what does Ms Huda say the four new people are for?   **A** six words; they are the only reliable test of what is actually shared   **B** forty words; they need everything explained   **C** two words; they are here to listen'));
out.push(p('**b**  Listen again. **1** What does Adnan say he has never done in nineteen years?   **2** What does Ms Huda say is wrong with the word _obviously_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.1  The first evening', [
  ['Ms Huda', 'Before anything else, a letter. _"I was appointed on the fourteenth of January and I started on the first of February. The record is now somebody else\'s to keep, which is what I asked for and is stranger than I expected. Tell them the trolley came in March."_ That is Rasha. She is not coming back, because the post she spent two years building a case for has taken her evenings, and I want the eight of you to notice what has just happened: **the best piece of work in this room last year is the reason its author is not in it.**'],
  ['Omar', 'She got it on the error count.'],
  ['Ms Huda', 'She got it on the error count and on a report she wrote about the one explanation that damaged her own case. Now — four new people, and eight who have been here two years. Omar, say what you do.'],
  ['Omar', 'About a third of my year is doing a thing for the second time.'],
  ['Ms Huda', 'Six words. In December it took you four evenings to find that sentence and a page to say it in. Now say it to Mr Barghouti, who has never met you.'],
  ['Omar', 'I look after the computers at eleven places of work — about four hundred and twenty machines, about ninety faults a month. Most of the ninety are the same eleven faults coming back, because nobody writes down what fixed them. So about a third of my year is doing a thing for the second time.'],
  ['Ms Huda', 'Forty-five words. Both are true and both are good, and the first one only works in this room. **That is what the four of you are for** — and I shall say this once, to the four, because it is not a kindness: you are the only reliable test of what this class actually shares. The eight of them cannot find it on their own. Nobody notices the air.'],
  ['Hiba', 'May I say something as one of the four who is not really one of the four? I sat in this room for six weeks two years ago. I have just listened to Omar say six words and I understood them, and I should not have — I was not here for any of it. I think I understood them because I have spent two years being told that thirty per cent of my own work is repetition.'],
  ['Nour', 'So it was not our shared ground. It was yours and ours separately.'],
  ['Ms Huda', 'Which is the distinction the whole cycle rests on. Shared ground is not what you have in common. **It is what you can rely on without checking** — and those are different things, and the second one is much smaller than anybody thinks.'],
  ['Adnan', 'I should say what I do, since I have been named. I am a clerk in a contracts office at the directorate. Nineteen years. And I will say the thing you are all waiting for: I probably did write some of the sentences you spent last year taking apart.'],
  ['Tareq', 'The second bus notice. December, by the muster-room door, no name on it.'],
  ['Adnan', 'Not that one. I know the one, and it would have come out of the transport office, and I would have drafted the paragraph it was copied from. And before anybody is polite about it — in nineteen years I have never once **chosen** a register. I inherited one. There is a way those letters go and I learnt it from a man who retired in 2011.'],
  ['Ms Huda', 'Which is 1.2, and it is the first real work of this level. Last — a word none of you is to use for the next two years without stopping first. _Obviously._'],
  ['Jad', 'Why?'],
  ['Ms Huda', 'Because it does not describe the information. It describes the listener. _Obviously_ tells anybody in the room who did not know the thing that they ought to have. _As you know_ is the same move made politely, and even that costs something. If a thing is genuinely shared you do not need to say that it is: **you just leave it out, and the leaving out is the evidence.**'],
]));
out.push(sp());
out.push(box('Language box – leaving things out, on purpose', [
  '**What you leave out when the ground is shared, and the marker that goes with it:**',
  table(['you say', 'what has been left out', 'and the risk'], [
    ['_The eleven sites._', 'everything — a whole account in two words', 'unusable outside the room it was made in'],
    ['_Same as last year, only worse._', 'the thing itself, and the comparison', 'the listener builds the wrong thing and says nothing'],
    ['_Nineteen of the twenty-two, **as you know**._', 'the figures\' source and subject', '_as you know_ makes a claim about the listener'],
    ['_I do, and so does Nour._', 'the verb and its object', 'none — this one is ordinary and safe'],
    ['_Some of them, not all._', 'the noun, the number and the verb', 'small, if the noun was named two turns ago'],
  ], [1.9, 2.1, 2.1]),
  '⚠ **_Obviously_ does not describe the information. It describes the listener** — it tells anybody who did not know the thing that they ought to have. _As you know_ is the same move made politely and it still costs something. **If a thing is genuinely shared you do not need to say so; you leave it out, and the leaving out is the evidence.**',
  '**The grammar of leaving out.** English drops the repeated verb and keeps the auxiliary (_I have, and so has she_ · _he did, and they did not_), drops the whole predicate after _so_ and _neither_ (_so does Nour_ · _neither did the office_), and drops the noun after a quantifier when it was named in the last sentence or two (_some of them_ · _three of the eleven_ · _the fourth_).',
  '⚠ **And the test, which is the only one there is: the person in the room who was not here.** Nobody notices the air. A speaker cannot find their own assumptions and neither can an audience that shares them; it takes one listener who does not, and that is what 1.7 is built on.',
  '**The useful distinction, and the sentence of the cycle:** shared ground is **not** what a group has in common. It is **what the group can rely on without checking** — and the second is much smaller than the first.',
  '**Useful phrases:** six words, and in December it took four evenings · both are true and the first one only works in this room · nobody notices the air · I inherited a register; I have never chosen one.',
  '**Practise:** Say each twice — once for this room, once for a stranger.  1 what you do  2 the part of it that goes wrong  3 how long you have done it  4 the thing you are tired of explaining  5 one figure about it',
  '**Pronunciation.** 🔊 **Track 1.2** When words go, the **stress goes with them** and the remaining auxiliary stays weak: _I **HAVE**, and so has she_ is wrong — it is _I have, and **SO** has she_. ⚠ Students who elide correctly and then stress the auxiliary sound as though they are contradicting somebody. Listen to eight and write which word carries the stress.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, and the pairs are fixed for this stage: **one of the eight with one of the four.** A says something about their own work in the shortest form they would use with a colleague. B says, honestly, how much of it they understood. A then says it again in full, and B says which single piece of missing information was the one that mattered. Swap.'));
out.push(dlg(null, [
  ['A', '_(as you would say it to a colleague)_ __________.'],
  ['B', 'I understood __________ of that, and the part I could not place was __________.'],
  ['A', '_(in full)_ __________.'],
  ['B', 'The piece that mattered was __________. Without it I had built __________.'],
]));
out.push(table(['Card A – say it short', 'Card B – say it short'], [
  ['_the thing that goes wrong most often_', '_the part of your week nobody sees_'],
  ['_the figure you quote most_', '_the decision you are waiting for_'],
  ['_the person you have to ask_', '_the document you cannot get_'],
  ['_the rule everybody breaks_', '_the thing that changed last year_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight short versions and, beside each, the one piece of missing information the listener named. Then the finding: in six or seven of the eight the missing piece is **not a technical term** — it is a **quantity, a date or a name**. Jargon is the assumption people expect; the damage is done by a number everybody in the room happens to know.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say the sentence about your work that you have said most often in this room. Then say it as you would to somebody who has never been in it. Count the words in both.'));
out.push(p('**b**  Swap. Then each of you find one place in your partner\'s short version where they said _obviously_ or _as you know_ — or would have — and take it out, and say what has to go in instead.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda opened with a letter. Rasha started on the first of February; the record is somebody else\'s to keep now, which is what she asked for and is stranger than she expected. She is not coming back, because the post she spent two years building a case for has taken her evenings — and Ms Huda asked the eight to notice what had happened: the best piece of work in the room last year is the reason its author is not in it. Omar said she got it on the error count, and Ms Huda said on the error count and on a report about the one explanation that damaged her own case. Then she asked Omar what he does, and he said: about a third of my year is doing a thing for the second time. Six words — and in December it took him four evenings to find that sentence. Said again to a man who had never met him it was forty-five words: eleven places of work, about ninety faults a month, most of them the same eleven faults coming back because nobody writes down what fixed them. Both true, and the first only works in that room. Ms Huda told the four new people what they are for, and said it was not a kindness: they are the only reliable test of what this class actually shares, because the eight cannot find it on their own — nobody notices the air. Hiba said she sat in the room for six weeks two years ago, had just understood Omar\'s six words and should not have — and thinks she understood them because thirty per cent of her own work is repetition. Nour said so it was not shared ground at all. And Ms Huda gave the distinction the cycle rests on: shared ground is not what you have in common, it is what you can rely on without checking. Then Adnan said what he does — a clerk in a directorate contracts office, nineteen years — and then the thing everybody was waiting for: he probably did write some of the sentences they spent last year taking apart. Tareq named the second bus notice, and Adnan said not that one, but he would have drafted the paragraph it was copied from. And then the sentence that set up 1.2: in nineteen years he has never once chosen a register — he inherited one, from a man who retired in 2011._'));
out.push(p('**Listener task:** write one thing this room assumes that the four new people could not have known.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Omar writes to the eleven site managers he has worked with for five years. Answer the questions.'));
out.push(model([
  '**THE ELEVEN SITES · what I am doing differently this year** · O. Darwish · 8 September',
  'This is a page for the eleven of you and nobody else, which is why it is a page and not four. If it is forwarded to anybody at the directorate it will not make sense, and that is not an accident.',
  '**What is changing.** From today the fault sheet has one more line on it: _first noticed (date, approximate)_. Four seconds. Nothing else about the sheet changes and nothing else about the way I work changes.',
  '**Why, in the shortest form I can manage for you.** The gap. Not the fault and not the date it was reported — the time between the two, which is the only figure none of us has ever had and the only one that explains the eleven.',
  '**What I am not going to explain again.** The eleven faults, the ninety a month, the third of the year. You have had that page twice and one of you has had it three times. It is attached if you want it; I am not putting it in the body of this one.',
  '**And the line that says I have left something out.** I have left out everything about why the eleven keep coming back, because all eleven of you already know and the two of you who disagree with me about it have told me so in writing. **If you are reading this and you do not know what I am referring to, you are not one of the eleven, and you should ask me rather than guess.**',
  '**What I need from you, and it is one thing.** When you report a fault, put a date in the new line even if it is a guess, and write _guess_ beside it. A guess with the word _guess_ on it is worth more to me than a blank, and far more than an accurate date I cannot distinguish from a guess.',
  '**What I shall do with it by June.** I shall have ninety or so gaps, which is enough to know whether the ones that come back are the ones that waited. If they are not, I have been wrong for a year in public and I shall write that page too.',
]));
out.push(item('1', 'Why would the page not make sense at the directorate, and why is that not an accident?'));
out.push(item('2', 'What does he refuse to explain again, and what does he do with it instead?'));
out.push(item('3', 'What does he ask for, and why is a guess worth more than a blank?'));
out.push(writers([
  'A half-page for a reader who knows the work: **say who it is for and that it is for nobody else** → **what is changing, in one line** → **why, in the shortest form that reader will accept** → **what you are not going to explain again, and where it is instead** → **the line that says you have left something out** → **the one thing you need** → **and what you will have by a date**.',
  '**Name the readership in the first sentence.** _This is a page for the eleven of you and nobody else._ A page written on shared ground is **unusable** off it, and saying so protects it: a reader it was not meant for stops decoding and asks.',
  '⚠ **Put in the line that admits the omission.** _If you are reading this and you do not know what I am referring to, you are not one of the eleven, and you should ask me rather than guess._ That one sentence is the difference between writing economically and writing carelessly, and nobody writes it.',
  'Attach rather than repeat, and say you have. _It is attached if you want it._ Repeating a page you have sent twice tells the reader you do not remember sending it.',
  '⚠ And ask for one thing, with the tolerance built in. _Put a date in even if it is a guess, and write_ guess _beside it._ A request that accepts an imperfect answer is answered; one that implies an exact answer is left.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the half-page for a reader who knows your work (80 words or more).'));
out.push(p('**______________ · what I am doing differently** · ______________ · ______________   This is a page for ______________ and nobody else, which is why ______________.   **What is changing.** ______________. Nothing else ______________.   **Why, in the shortest form.** ______________.   **What I am not going to explain again.** ______________. You have had that ______________; it is attached.   **The line that says I have left something out.** I have left out ______________, because ______________. If you do not know what I am referring to, you are not ______________, and you should ______________.   **What I need, and it is one thing.** ______________, even if ______________.   **What I shall have by ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The readership named in the first sentence, and said to be the only one',
  'One thing changing, with what is not changing beside it',
  'The line admitting the omission, addressed to the wrong reader',
  'One request, with the tolerance built into it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the line that admits the omission.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full half-page (180 words or more) for people who know your work: the readership named, the one change, the short reason, what you will not explain again and where it is, the line admitting the omission, the single request, and what you will have by a date.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the readership named**, **the line admitting the omission**, **one request with a tolerance**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Two counts, and the second is the one to keep.** How many of your pages name their readership in the first sentence? Most, once asked. And how many contain the line that admits the omission? Almost none — and that line separates a page that is short because it is efficient from one that is short because the writer forgot who was reading.'));
out.push(hw('Write the half-page (80+ words) and give it to **one reader who knows the work and one who does not**. Write down what the second reader could not place.'));

// ======================= 1.2 =======================
out.push(pb());
out.push(h2('1.2  Three dials'));
out.push(p('**Function:** choosing a register on purpose   ·   **Grammar:** the verb · the sentence length · the hedge   ·   **Pronunciation:** reading a formal sentence without sounding formal'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each from something you have written at work this month, read out exactly as written. Your teacher asks: **did you choose that, or did you inherit it?** Expect ten of twelve to be inherited.'));
out.push(board('We regret to advise that the application has been unsuccessful.', 'the verb · the length · the hedge'));
out.push(p('**b**  Which dial has been moved? **1** _I told him_ → _I informed him_.  **2** _He is not coming_ → _He will not be attending_.  **3** _It is wrong_ → _It may not be entirely correct_.  **4** _We cannot do it_ → _We are not in a position to do so_.  **5** _Ask Mr Barghouti_ → _This should be referred to contracts_.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are the three dials, and what does Ms Huda say there is no such thing as?   **A** tone, politeness and length; a neutral letter   **B** grammar, vocabulary and spelling; a wrong register   **C** the verb, the length and the hedge; formal and informal'));
out.push(p('**b**  Listen again. **1** Who did Adnan learn the register from, and what does he say the man was like?   **2** What does Ms Huda say the three dials are **not** arranged along?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.3  I inherited it from a man who retired in 2011', [
  ['Ms Huda', 'Mr Barghouti said something at the end of the last cycle that is the subject of this one. Say it again.'],
  ['Adnan', 'In nineteen years I have never chosen a register. I inherited one. There is a way those letters go, and I learnt it in my first eleven weeks from a man called Abu Wasfi who retired in 2011.'],
  ['Lubna', 'What was he like?'],
  ['Adnan', 'Exact. Kind. Completely certain about every comma, and he could not tell you why about any of them. I asked him once why we write _it has been decided_ and not _the committee decided_, and he said: because that is the form. And he was not being obstructive — he genuinely did not know, and the man who taught **him** had retired in 1989.'],
  ['Ms Huda', 'Then let us take it apart, because it is three things and not one, and they move separately. **Dial one: the verb.** _Told_ · _informed_ · _notified_ · _advised_. **Dial two: the length of the sentence.** _He is not coming_ against _he will not be attending on this occasion_. **Dial three: the hedge.** _It is wrong_ against _it may not be entirely correct_.'],
  ['Nour', 'And they can be moved one at a time.'],
  ['Ms Huda', 'That is the whole lesson of the cycle. Which means there is no such thing as formal and informal — there are **eight** positions from three dials, and most of the ones that go wrong at work are the mixed ones. _I regret to advise you that the thing is a bit of a mess._'],
  ['Rim', 'May I bring one? I refuse deliveries. I have to write about two refusals a month and I was told, when I started, to use the office template. The template says: _we regret to advise that the consignment has been found not to conform._ I have sent that sentence about ninety times.'],
  ['Ms Huda', 'Which dials are up?'],
  ['Rim', 'All three. _Regret to advise_ is the verb, _has been found not to conform_ is the length and the hedge together — and the thing I noticed about three months ago is that **nobody ever argues with it**, and I had been taking that as evidence that it works.'],
  ['Jad', 'Is it not evidence that it works?'],
  ['Rim', 'It is evidence that nobody can get hold of it. Twice this year a supplier has telephoned me and asked what the letter meant, and both times the answer was: four pallets were eleven degrees over on arrival and I am sending them back. Nine words. If I had written the nine words they would have argued, and we would have got somewhere in March instead of June.'],
  ['Adnan', 'That is exactly my office.'],
  ['Ms Huda', 'And now the thing I want both of you to hear, because it is the point of the dials and it is not what people expect. **A high register is not politeness and a low one is not rudeness.** All three dials up removes the person — there is nobody to answer and nothing to answer about. All three down puts a person in and gives them something to disagree with, which feels riskier and is how anything is actually settled.'],
  ['Tareq', 'So what do you do with the template?'],
  ['Rim', 'I have not decided. It is the office\'s template and not mine, and I am one of fourteen people who use it.'],
  ['Ms Huda', 'Which is Unit 11 and Unit 20 and not tonight. Tonight all I want is the dials named, and one sentence of your own moved — **one dial, not three.** Three dials at once is not a choice; it is a different voice, and a reader hears a different person.'],
]));
out.push(sp());
out.push(box('Language box – the three dials', [
  '**Three dials, moved separately. There is no formal and informal — there are eight positions.**',
  table(['dial', 'down', 'up'], [
    ['**1 · the verb**', '_told · asked · sent · said no_', '_informed · requested · forwarded · declined_'],
    ['**2 · the length**', '_He is not coming._', '_He will not be attending on this occasion._'],
    ['**3 · the hedge**', '_It is wrong._', '_It may not be entirely correct._'],
  ], [1.6, 2.3, 2.6]),
  '⚠ **Move one dial at a time.** Three at once is not a choice of register; it is a different voice, and a reader hears a different person — which is why _I regret to advise you that the thing is a bit of a mess_ is funny. The error is not formality: it is **mixture**.',
  '**All three up removes the person.** _We regret to advise that the consignment has been found not to conform_ has nobody in it, so there is nobody to answer and nothing to answer about — and the fact that nobody argues with it is **not** evidence that it works. It is evidence that nobody can get hold of it.',
  '**All three down puts a person in and hands them something to disagree with.** _Four pallets were eleven degrees over on arrival and I am sending them back._ Nine words, one agent, one figure, one action — and an argument in March instead of a telephone call in June.',
  '⚠ **A high register is not politeness and a low one is not rudeness.** Politeness lives in what you concede and what you ask for, not in the length of your verbs. The commonest mistake at B2 is to believe that moving all three dials up is the safe choice; it is the choice that cannot be replied to.',
  '**Useful phrases:** did you choose that, or did you inherit it? · he could not tell you why about any of them · nobody ever argues with it, and I had been taking that as evidence that it works · it is evidence that nobody can get hold of it.',
  '**Practise:** Take one sentence and move **one dial** at a time, saying which.  1 a refusal  2 a request  3 a correction  4 a piece of bad news  5 a thank-you',
  '**Pronunciation.** 🔊 **Track 1.4** A high-register sentence read aloud **at ordinary speed and without ceremony**: _we regret to advise that the consignment has been found not to conform_ — flat, quick, no stress on _regret_. ⚠ Read slowly and solemnly it sounds like a verdict; read flat it sounds like what it is, which is a form. Listen to four pairs and say which speaker you would telephone.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card. B moves **one dial** and names which. A moves **one more** and names it. B then says what the sentence has lost and gained, and which of the three versions they would send. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '_(dial __________)_ __________.'],
  ['A', '_(dial __________)_ __________.'],
  ['B', 'That has lost __________ and gained __________. I would send the __________ one, because __________.'],
]));
out.push(table(['Card A – the sentence', 'Card B – the sentence'], [
  ['_We cannot do that._', '_Your figures are wrong._'],
  ['_I told the office in March._', '_Nobody has looked at it._'],
  ['_Send it back._', '_This was agreed last year._'],
  ['_I need an answer by Thursday._', '_That is not my department._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight final versions and mark which dials ended up. Then the count that matters: **how many of the eight would the listener actually send?** It is two or three — and the sendable version almost always has **the verb up and the hedge down**: a formal verb carrying an unhedged fact, which is the position nobody is taught.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Read out your own sentence from Stage 1. Say which dials are up. Then say whether you chose them, and if you inherited them, from whom — by name if you can.'));
out.push(p('**b**  Swap. Then each of you move **one dial** on your partner\'s sentence and say what a reader could now do that they could not do before.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Adnan said again what he had said at the end of the first cycle: in nineteen years he has never chosen a register, he inherited one, from a man called Abu Wasfi who retired in 2011. Lubna asked what he was like, and Adnan said exact, kind, and unable to say why about any of it: he asked once why they write "it has been decided" and was told that that is the form. So Ms Huda took it apart into three things that move separately: the verb, the length, the hedge. Nour said they move one at a time, and Ms Huda said that is the whole lesson: there is no formal and informal, only eight positions from three dials, and the ones that go wrong at work are the mixed ones. Then Rim brought a sentence. She refuses deliveries, about two a month, on the template she was given when she started: we regret to advise that the consignment has been found not to conform. She has sent it about ninety times, all three dials up, and what she noticed three months ago is that nobody ever argues with it — which she had been taking as evidence that it works. Jad asked whether it is not, and she said it is evidence that nobody can get hold of it: twice this year a supplier has telephoned to ask what the letter meant, and both times the answer was nine words — four pallets were eleven degrees over on arrival and I am sending them back. Had she written the nine words they would have argued, and got somewhere in March instead of June. Adnan said that is exactly his office. And Ms Huda gave the point of the dials: a high register is not politeness and a low one is not rudeness. All three up removes the person: nobody to answer and nothing to answer about. All three down puts a person in and gives them something to disagree with — which feels riskier and is how anything is settled._'));
out.push(p('**Listener task:** write one sentence from this room with the verb up and the hedge down.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions Rim puts side by side, and the note under them. Answer the questions.'));
out.push(model([
  '**THE REFUSAL, TWICE** · R. Shaaban · 9 September',
  '**The template, which I have sent about ninety times.** _"We regret to advise that consignment 4471, received 2 September, has been found not to conform to the agreed specification in respect of storage temperature on arrival, and that it is accordingly being returned. We trust this will not inconvenience you unduly and look forward to your continued co-operation."_ Fifty-two words.',
  '**What I say on the telephone when asked what it meant.** _"Four pallets were eleven degrees over when they arrived. I am sending them back. If you can tell me where they stood on Monday night I can tell you whether it is you or the lorry."_ Thirty-nine words, and the last sentence is the one that has ever got me anywhere.',
  '**The dials, honestly.** The template has all three up. The telephone version has the verb down (_were_, _sending_), the length down, and the hedge **off** — and what I had not noticed until I wrote them side by side is that the template contains **no figure and no date I could be wrong about**. Eleven degrees could be wrong. _Not conforming_ cannot.',
  '**What the template is for.** It is for the fourteen of us who use it, and for the file. It cannot be argued with, so it cannot be answered, so a supplier who wants to fix something has to telephone and hope I pick up. Twice this year somebody did. I do not know how many did not.',
  '**What I shall send from Monday, one dial and not three.** The template sentence with **the figure in it**: _"We regret to advise that consignment 4471, received 2 September, was eleven degrees above the specified maximum on arrival and is accordingly being returned."_ Verb up, length up, hedge **off**. Twenty-six words, and the eleven degrees is a thing somebody can write back about.',
  '**What I am not doing.** I am not rewriting the template. It is not mine; fourteen people use it, one since 2015. I am changing one clause in the letters I sign, and I shall see in six months whether anybody writes back.',
  '**And the thing I should put on the record about myself.** For three years I read "nobody argues" as "this is working" — the only evidence I ever collected by accident, and I drew the wrong conclusion from it.',
]));
out.push(item('1', 'How long are the two versions, and which one has ever got her anywhere?'));
out.push(item('2', 'What does she say the template contains none of, and why does that matter?'));
out.push(item('3', 'What is she changing, what is she not, and what will she look for?'));
out.push(writers([
  'A page that moves one dial: **the inherited version, quoted in full with its word count** → **what you actually say when somebody asks what it meant** → **the dials, named honestly, on both** → **what the inherited version is for** → **the one change, with the dials after it** → **what you are not changing, and why it is not yours** → **and the thing about yourself**.',
  '**Quote the inherited sentence at full length and count the words.** Fifty-two against thirty-nine is an argument; _the template is too formal_ is an opinion.',
  '⚠ **Find the thing the high version cannot be wrong about.** _Eleven degrees could be wrong. Not conforming cannot._ That is the sharpest observation available about formal register: the dials go up and the **falsifiable** content goes out, which is usually the point of them.',
  'Say what the inherited version is **for**, generously. _It is for the fourteen of us who use it, and for the file._ A page that treats an office form as stupid has lost its reader; one that says what the form does well has earned the right to change a clause of it.',
  '⚠ **Change one clause, not the document.** _It is not mine; fourteen people use it._ And set the date on which you will look: _I shall see in six months whether anybody writes back._ One dial, one clause, one date.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that moves one dial on something you send regularly (80 words or more).'));
out.push(p('**______________, TWICE** · ______________ · ______________   **The version I have sent about ______ times.** "______________" ______ words.   **What I say when asked what it meant.** "______________" ______ words, and the sentence that ever got me anywhere is ______________.   **The dials, honestly.** The first has ______________. The second has ______________. And the first contains **no ______________ I could be wrong about**.   **What the first version is for.** ______________.   **What I shall send from ______________, one dial and not three.** "______________" ______ words.   **What I am not doing.** I am not ______________. It is not mine; ______ people use it.   **And the thing I should put on the record about myself.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both versions quoted in full, with their word counts',
  'The dials named on each, one at a time',
  'The thing the high version cannot be wrong about, identified',
  'One clause changed, not the document, and a date to look again',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the thing their high version cannot be wrong about.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the inherited version quoted and counted, what you actually say, the dials on both, what the inherited one is for, the one clause you will change with its dials, what is not yours to change, and the thing about yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **both versions quoted and counted**, **the dials named one at a time**, **one clause changed and not the document**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out the sentence you have sent most often, and then say whether you chose it.** Ten of twelve are inherited: a register chosen fresh for every letter is not a thing anybody does. Then the sentence to leave on, which is Rim\'s: **"nobody argues with it" is not evidence that a letter works.** It is the evidence most of us collect by accident, and it points the wrong way.'));
out.push(hw('Write the page (80+ words). Then send **one** letter this week with your one clause changed, and write down the date.'));

// ======================= 1.3 =======================
out.push(h2('1.3  Frankly, at the front'));
out.push(p('**Function:** putting a stance adverb where it does the work   ·   **Grammar:** _frankly · admittedly · arguably · to be fair · presumably_ — initial, medial, final   ·   **Pronunciation:** the comma you can hear'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher writes _the figures were late_ on the board and the class puts **frankly** into it in three places. Then the only question: **what does each position promise the listener?**'));
out.push(board('Frankly, the figures were late. / The figures were, frankly, late. / The figures were late, frankly.', '_frankly · admittedly · arguably_'));
out.push(p('**b**  Which adverb? **1** I am about to say something you may not want to hear. **2** I am conceding a point against myself. **3** I think this can be defended but not proved. **4** I am taking the other side for a moment. **5** I am guessing.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Dima\'s job on a trade bulletin, and what does she say she spends most of it doing?   **A** writing; adding adverbs for emphasis   **B** sub-editing; taking other people\'s stance adverbs out   **C** proof-reading; correcting spelling'));
out.push(p('**b**  Listen again. **1** What does she say _arguably_ usually means in the copy she edits?   **2** What does Ms Huda say the difference is between initial and final position?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.5  The word I take out ninety times a month', [
  ['Dima', 'I sub-edit a bulletin for pharmacists. Twelve pages a fortnight, about nine contributors, none of them writers. And the single thing I do most is take out stance adverbs.'],
  ['Ms Huda', 'Which ones?'],
  ['Dima', '_Arguably_, mostly. I take out about ninety a month and I have started counting them. And the reason is not that it is a bad word — it is that in the copy I get it almost never means _this can be argued for_. It means **I would like credit for the claim and not the burden of it.**'],
  ['Yara', 'Can you tell the difference?'],
  ['Dima', 'There is a test and it takes four seconds. Take the adverb out. If the sentence is now too strong to print, the writer needed a hedge and _arguably_ was the wrong one — they needed a figure, or a source, or _in most cases_. If the sentence is **exactly as printable without it**, the adverb was doing nothing except standing in front of the writer.'],
  ['Mazen', 'And _frankly_?'],
  ['Dima', '_Frankly_ I leave, usually, because it does a real job. But the position matters more than the word, and that is the thing nobody who sends me copy knows.'],
  ['Ms Huda', 'Say the three.'],
  ['Dima', '_Frankly, the figures were late_ — at the front, it is a warning. It tells the reader that something unwelcome is coming and gives them half a second to brace. _The figures were, frankly, late_ — in the middle, it attaches to the word after it, so what is blunt is specifically **late**, and not the rest of the sentence. And _the figures were late, frankly_ — at the end, it is an afterthought, and it sounds like one. You have said the thing and then added that you were being blunt about it, which is almost always weaker, because the reader has already finished the sentence.'],
  ['Omar', 'So the front is strongest.'],
  ['Ms Huda', 'The front is the strongest and it is also the most expensive, which is the pair of facts to hold. **An initial stance adverb frames everything after it** — the whole sentence is now inside _frankly_, and if the sentence turns out to be unimportant, you have spent a warning on nothing. **A medial one modifies the word it leans on and nothing else.** A final one is a comment on what you have just said.'],
  ['Hiba', 'That is what my assessors wrote on my second observation. "Hedges and stance markers used, but position not controlled." I did not know what it meant for a year.'],
  ['Ms Huda', 'It meant you were putting them at the end. Everybody does, because in speech the end is where you notice that you need one. ⚠ And one grammatical thing, because it is marked: in writing these take **commas** — _frankly, …_ · _…, frankly, …_ · _…, frankly._ The commas are not decoration; the medial pair is what tells a reader which word the adverb is leaning on.'],
  ['Adnan', 'There are none in the letters I write.'],
  ['Ms Huda', 'Because the form you inherited has nowhere to put one. ⚠ And note the pair that is not interchangeable: _to be fair_ concedes a point to the other side; _frankly_ warns the reader about your own bluntness. Used the wrong way round, a letter reads as sarcasm, and the writer never finds out why.'],
  ['Dima', 'There are none in the copy I get either, and there should be — about one in four paragraphs. A page with no stance in it is not neutral. It just does not say who is standing where.'],
]));
out.push(sp());
out.push(box('Language box – stance, and where to put it', [
  '**Five words, and what each one commits you to:**',
  table(['adverb', 'what it promises', 'the risk'], [
    ['_frankly_', 'something unwelcome is coming', 'spent on a small point, it is a false alarm'],
    ['_admittedly_', 'a point **against yourself**', 'none — it is the cheapest credibility in English'],
    ['_arguably_', 'defensible, not proved', '⚠ usually means _credit without the burden_'],
    ['_to be fair_', 'the other side\'s part, for one clause', 'it must be followed by a real concession'],
    ['_presumably_', 'a guess from what you know', 'it marks a guess **as** a guess, which is its value'],
  ], [1.3, 2.4, 2.6]),
  '**Three positions, and the position matters more than the word:**',
  table(['', 'example', 'what it does'], [
    ['**initial**', '_Frankly, the figures were late._', 'frames **everything** after it — strongest, most expensive'],
    ['**medial**', '_The figures were, frankly, late._', 'attaches to the word it leans on, and nothing else'],
    ['**final**', '_The figures were late, frankly._', 'an afterthought, and it sounds like one'],
  ], [1.1, 2.8, 3.1]),
  '⚠ **The four-second test for _arguably_, and for any hedge:** take it out. If the sentence is now too strong to send, the writer needed a hedge — but the one they needed was a **figure, a source or _in most cases_**, not this. If the sentence reads exactly as well without it, the adverb was doing nothing except standing in front of the writer.',
  '⚠ **Commas are grammar here, not decoration.** _Frankly, …_ · _…, frankly, …_ · _…, frankly._ The medial pair is what tells a reader which word the adverb leans on; without them the sentence is ambiguous and a reader picks the wrong word.',
  '**And a page with no stance in it is not neutral.** It simply does not say who is standing where. About one paragraph in four wants one; a page with none reads as a document nobody wrote.',
  '**Useful phrases:** I take out about ninety a month and I have started counting · credit for the claim and not the burden of it · position not controlled · everybody puts them at the end, because in speech the end is where you notice you need one.',
  '**Practise:** Put the adverb in all three positions and say what each does.  1 frankly  2 admittedly  3 arguably  4 to be fair  5 presumably',
  '**Pronunciation.** 🔊 **Track 1.6** You can hear the commas: an initial stance adverb takes **its own short fall** before the sentence starts — _FRANKly ‖ the figures were late_ — and a medial pair is spoken between two tiny pauses. ⚠ Run together with no pause, _frankly the figures were late_ sounds like one clause and loses the frame. Listen to six and mark the position.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a flat sentence from the card. B puts a stance adverb in the **front** and says what has been promised. A moves the same adverb to the **middle** and says which word it now leans on. B then says which of the three they would print, and why. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________, __________. — I have just promised __________.'],
  ['A', 'The __________ was, __________, __________. — Now it leans on __________.'],
  ['B', 'I would print the __________ one, because __________.'],
]));
out.push(table(['Card A – the flat sentence', 'Card B – the flat sentence'], [
  ['_The figures were late._', '_The second machine is older than the first._'],
  ['_Nobody read the guidance._', '_The report was never circulated._'],
  ['_It will not be finished by June._', '_The decision was taken without us._'],
  ['_Half of the sheets were blank._', '_That part of it is mine._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight medial versions and underline the word each adverb leans on. Then apply Dima\'s test to all sixteen: **take the adverb out.** How many are still exactly as printable? Usually nine or ten — the ones where the adverb stood in front of the writer and did nothing to the sentence.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say the most uncomfortable true sentence you could say about your own work. Then say it three times — _frankly_ at the front, in the middle, and at the end — and say which version you would actually use and to whom.'));
out.push(p('**b**  Swap. Then each of you take the adverb out of your partner\'s best version and say whether the sentence survives. If it does, name what the adverb was doing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dima sub-edits a bulletin for pharmacists — twelve pages a fortnight, nine contributors, none of them writers — and the thing she does most is take out stance adverbs. Mostly "arguably": about ninety a month, and she has started counting them. The reason is not that it is a bad word but that in the copy she gets it almost never means "this can be argued for"; it means "I would like credit for the claim and not the burden of it". Yara asked whether she can tell the difference, and Dima said there is a test and it takes four seconds: take the adverb out. If the sentence is now too strong to print, the writer needed a hedge and that was the wrong one — they needed a figure, or a source, or "in most cases". If the sentence is exactly as printable without it, the adverb was doing nothing except standing in front of the writer. Mazen asked about "frankly", and she said she usually leaves it, because it does a real job — but the position matters more than the word. At the front it is a warning. In the middle it attaches to the word after it, so what is blunt is specifically "late". At the end it is an afterthought and sounds like one, because the reader has already finished the sentence. Omar said so the front is strongest, and Ms Huda said the strongest and the most expensive, which is the pair of facts to hold: it frames everything after it, and if the sentence turns out to be unimportant you have spent a warning on nothing. Hiba said that is what her assessors wrote on her second observation — "position not controlled" — and she did not know what it meant for a year. Ms Huda said it meant she was putting them at the end, which everybody does, because in speech the end is where you notice that you need one. And Dima said there are none at all in the copy she gets, and there should be about one in four paragraphs: a page with no stance in it is not neutral, it just does not say who is standing where._'));
out.push(p('**Listener task:** write one sentence from this room whose adverb survived the test, and one whose did not.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Dima sends to the bulletin\'s nine contributors. Answer the questions.'));
out.push(model([
  '**TO THE NINE · about one word** · D. Khoury · 11 September',
  'This is about one word and it is not a complaint. I have taken it out of your copy about ninety times a month for two years without telling you, which is my fault.',
  '**The word.** _Arguably._ In the last six issues it appears forty-one times across the nine of you, which is about seven times a page.',
  '**What it is supposed to mean.** That a claim can be defended but not proved — a real and useful thing to say, and in four of the forty-one that is what it was doing.',
  '**What it means in the other thirty-seven.** That the writer would like credit for the claim and not the burden of it. I do not say that unkindly; I have done it myself in this note twice and taken both out.',
  '**The test, which takes four seconds and which I should have sent in 2024.** Take the word out and read the sentence. If it is now too strong to print, you needed a hedge — but a **figure**, a **source**, or the words _in most cases_. If the sentence reads exactly as well without it, the word was standing in front of you and doing nothing to the sentence.',
  '**One of the forty-one, with no name.** _"Arguably the shortage is a distribution problem rather than a supply one."_ Out it comes: _the shortage is a distribution problem rather than a supply one_ — which is too strong, and the writer was right to feel it. What the sentence wanted was the figure in the writer\'s own third paragraph: _of the eleven pharmacies contacted, nine had been offered stock in the same week._ That is a hedge made of evidence, and nobody can take it out.',
  '**What I am asking for, and it is not that you stop.** Use it where it is true, and put the figure in the next sentence. **Four of forty-one is a reasonable rate and I should be taking out thirty-seven fewer.**',
  '**And one thing that is mine to admit.** I have never once written to you about this. I have simply been deleting it, which means nine people have been writing the same sentence for two years, getting a clean page back, with no way of knowing.',
]));
out.push(item('1', 'How often does the word appear in six issues, and how often honestly?'));
out.push(item('2', 'What did the quoted sentence actually want, and where was it already?'));
out.push(item('3', 'What does she admit about her own two years, and what did it cost?'));
out.push(writers([
  'A note about one word: **say it is one word and not a complaint** → **the word, with the count** → **what it is supposed to mean, and how often it did** → **what it means the rest of the time, with yourself included** → **the test** → **one real example, with no name, taken apart** → **what you are asking for, which is not abstinence** → **and the thing that is yours to admit**.',
  '**Count it before you complain about it.** _Forty-one times across the nine of you, about seven times a page._ A note with no figure in it is a matter of taste; the same note with a count is a finding.',
  '⚠ **Include yourself in the charge.** _I have done it myself in this note twice and taken both out._ One sentence, and the note becomes an observation the nine can act on without losing face.',
  'Quote **one** real example and strip the name off it. One shows the mechanism; nine would be a prosecution — and it must be one where the writer was **right to want a hedge**, or the note reads as a demand for bluntness.',
  '⚠ And ask for a **rate**, not abstinence. _Four of forty-one is a reasonable rate and I should be taking out thirty-seven fewer._ Then end with your own two years of silent deleting: a note that arrives late has to say why.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about one word or habit in writing you receive or send (80 words or more).'));
out.push(p('**TO ______________ · about one ______________** · ______________ · ______________   This is about one ______________ and it is not a complaint. I have ______________ for ______________ without telling you.   **The ______________.** "______________". In the last ______________ it appears ______ times, about ______ a page.   **What it is supposed to mean.** ______________ — and in ______ of the ______ that is what it was doing.   **What it means in the other ______.** ______________. I have done it myself in this note ______________.   **The test, which takes ______________.** ______________.   **One of them, with no name.** "______________" Out it comes: ______________. What the sentence wanted was ______________.   **What I am asking for, and it is not that you stop.** ______________.   **And one thing that is mine to admit.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The word counted, with a rate per page',
  'Yourself included in the charge, in so many words',
  'One anonymous example where the writer was right to want a hedge',
  'A rate asked for, not abstinence — and why the note took so long'
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the sentence in which they included themselves.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more): the word with its count and rate, what it is supposed to mean and how often it did, yourself included, the test, one anonymous example taken apart, the rate you are asking for, and why you have said nothing until now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the count and the rate**, **yourself in the charge**, **one anonymous example where the hedge was wanted**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Apply the four-second test to the sentence you were proudest of tonight.** Take the stance adverb out. Most of the room finds the sentence survives, which is uncomfortable for ten seconds and useful for two years. Then the figure to leave on the board: **four of forty-one** — and that gap is the cycle.'));
out.push(hw('Write the note (80+ words). Then take a page you wrote **before this course** and count the stance adverbs: how many, and how many at the end.'));

// ======================= 1.4 =======================
out.push(pb());
out.push(h2('1.4  Two seconds, not the name'));
out.push(p('**Function:** using the whole tense system at speed   ·   **Grammar:** the twelve forms as answers to three questions _(24.1, now productive)_   ·   **Pronunciation:** the contracted auxiliary at speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Eleven questions round the room, fast, one each, every one in a different tense. You answer in **the tense the question needs**, in **two seconds**. Nobody names anything, and the four new people go first.'));
out.push(board('How long had it been doing that before anybody reported it?', 'when? · finished or not? · how long?'));
out.push(p('**b**  What does each question ask for — **when**, **finished or not**, or **how long**? **1** _Have you done it?_  **2** _Were you doing it when he came in?_  **3** _How long have you been doing it?_  **4** _Had you done it before the meeting?_  **5** _Will you have finished by June?_  **6** _How long had it been running before anybody looked?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Hiba\'s assessors write about her tenses, and what does she say she was actually doing?   **A** "range not demonstrated"; answering every question in the present perfect   **B** "accuracy poor"; making mistakes with the past   **C** "too simple"; using only the present simple'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda say she takes the names off?   **2** What does Hiba say the assessors were listening for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.7  Range not demonstrated', [
  ['Ms Huda', 'Eleven questions, two seconds each, nobody names anything. And I take the names off for a reason I shall give in a moment. Hiba, you have been assessed on exactly this. What did they write?'],
  ['Hiba', 'Second observation, November of my first year. _"Range not demonstrated."_ Three words, and I spent a year not knowing what they meant.'],
  ['Jad', 'What did they mean?'],
  ['Hiba', 'That I answered every question in the present perfect. Somebody would ask me what I had been doing before the lesson and I would say _I have prepared the materials_. Somebody would ask how long and I would say _I have taught for two years_. It was accurate. Every sentence was correct and I was proud of the accuracy, and the accuracy was the problem — I had one form that is never wrong and I used it for everything.'],
  ['Nour', 'That is me with the simple forms. I found out in June that I have no continuous form at all.'],
  ['Hiba', 'Then you are ahead of where I was, because you found it yourself. I had to be told by a woman with a clipboard, and she did not explain it, and I think now that she could not have — she was listening for something and she did not have words for it either.'],
  ['Ms Huda', 'What was she listening for?'],
  ['Hiba', 'I worked it out in my second year, from the other side, watching a trainee. She was listening for whether the **form changed when the question changed.** Not whether the form was right. Whether it moved.'],
  ['Ms Huda', 'Which is why the names come off. You spent last June on a map with twelve squares and three questions — when, finished or not, how long — and you can all read it. ⚠ **Reading a map and walking a road are not the same skill**, and the difference is two seconds. At two seconds you cannot consult anything. You answer with whatever form your mouth reaches for, and the whole of this cycle is about which one that is.'],
  ['Omar', 'Mine is the past simple.'],
  ['Mazen', 'Mine is the present perfect, like Hiba\'s.'],
  ['Adnan', 'Mine is the passive, and I do not think it is a tense.'],
  ['Ms Huda', 'It is not, and it is the most interesting answer in the room, and we come to it in Unit 2. Now the one form I want to hear tonight, because it is the one this class reached for last year and could not form, and it is the question that asks about **a gap**: _how long had it been doing that **before** anybody reported it?_ Omar asked a site manager that question in January. Say what happened.'],
  ['Omar', 'He said he would have to ask Suheil, who was on the machine in September. And Suheil said five weeks, maybe six. So the answer was not a figure and it was not a shrug — it was a name.'],
  ['Ms Huda', 'Which is the best possible answer to that question and nobody expects it. ⚠ And note what the form bought: no other tense in the language asks about a stretch of time **before** another past event. _When did you report it?_ gets a date that is already in the file.'],
  ['Hiba', 'I had been teaching for four months before anybody watched me. Four months, and I have never said that sentence out loud until tonight, because I did not have the shape of it.'],
]));
out.push(sp());
out.push(box('Language box – the twelve forms, at speed', [
  '**Three questions, twelve forms. You met the map in 24.1; this is the map with a clock on it.**',
  table(['', 'simple', 'continuous', 'perfect', 'perfect continuous'], [
    ['**past**', '_I checked it._', '_I was checking it when…_', '_I had checked it before…_', '_I had been checking it for an hour._'],
    ['**present**', '_I check it._', '_I am checking it._', '_I have checked it._', '_I have been checking it since March._'],
    ['**future**', '_I will check it._', '_I will be checking it at six._', '_I will have checked it by Friday._', '_I will have been doing it for a year._'],
  ], [0.9, 1.5, 1.8, 1.8, 2.0]),
  '⚠ **Reading a map and walking a road are not the same skill, and the difference is two seconds.** At two seconds nobody consults anything: you answer with the form your mouth reaches for. The purpose of this cycle is to find out which form that is — and every person in a room has one.',
  '**The commonest default forms, and what each one costs:** the **present perfect** (never wrong, says nothing about when or how long) · the **past simple** (every event becomes a point, and nothing has duration) · the **passive** (no agent, which is Unit 2) · the **present simple** (everything becomes a permanent fact about the world).',
  '⚠ **The one this class could not form last year is the gap question:** _how long had it been doing that **before** anybody reported it?_ No other form in the language asks about a stretch of time before another past event, and the alternative — _when did you report it?_ — gets a date that is already in the file.',
  '**And the best answer to a gap question is often a name**, not a figure: _I would have to ask Suheil, who was on that machine in September._ A question whose honest answer is a person has found something the documents do not have.',
  '**The drill, which is the only one in this cycle:** a question in one tense, answered in **the tense the question needs**, in two seconds, with nobody naming anything. Accuracy is not the target. **Movement** is.',
  '**Useful phrases:** range not demonstrated · every sentence was correct and the accuracy was the problem · whether the form changed when the question changed · not a figure and not a shrug — a name.',
  '**Practise:** Answer each in two seconds, in the tense the question needs.  1 _have you…?_  2 _were you …-ing when…?_  3 _how long have you been…?_  4 _had you … before…?_  5 _how long had it been … before anybody…?_',
  '**Pronunciation.** 🔊 **Track 1.8** At speed the auxiliaries contract and carry no stress at all: _it\'dbeen **DO**ing that for weeks_ · _I\'veben **TAK**ing them since March_. ⚠ A student who gives _had been_ its full value is still reading the map. Listen to eight and write the form you hear, not the words.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs with a watch. A asks a question from the card. B has **two seconds** to begin answering, in the tense the question needs. A says only _moved_ or _did not move_. Twelve questions each, then swap. Nobody names a tense at any point.'));
out.push(dlg(null, [
  ['A', 'How long had __________ before __________?'],
  ['B', '__________.'],
  ['A', 'Moved.'],
  ['A', 'And have you __________ since?'],
  ['B', '__________.'],
  ['A', 'Did not move — that was the same form.'],
]));
out.push(table(['Card A – ask about…', 'Card B – ask about…'], [
  ['_something still going on_', '_something that stopped_'],
  ['_a stretch before another event_', '_a total by a future date_'],
  ['_an interrupted action_', '_a finished action with no date_'],
  ['_a permanent fact_', '_a temporary arrangement_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **default form** of each of the four speakers — the one their mouth reaches for under two seconds. Then the count that makes the point: of twenty-four answers, how many **moved**? About half, and the half that did not are almost all in **one form per speaker**. ⚠ Twelve answers in twelve forms does not happen; twelve in two is normal.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say your own default form out loud — the one you have just heard yourself reach for — and then say what it costs you. Then ask your partner the gap question about something real in their work, and make them answer it in two seconds.'));
out.push(p('**b**  Swap. Then each of you give your partner **one question in their missing form** to carry away and answer again next week.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Eleven questions, two seconds each, nobody naming anything — and Ms Huda said she takes the names off for a reason. Hiba has been assessed on exactly this: second observation, November of her first year, three words — "range not demonstrated" — which she spent a year not understanding. Jad asked what it meant, and she said she answered every question in the present perfect. Asked what she had been doing before the lesson, she said "I have prepared the materials"; asked how long, she said "I have taught for two years". It was accurate — every sentence correct, and the accuracy was the problem: she had one form that is never wrong and she used it for everything. Nour said that is her with the simple forms, and that she has no continuous form at all. Hiba said then she is ahead of where Hiba was, because she found it herself: Hiba had to be told by a woman with a clipboard who did not explain it and probably could not have. She worked it out in her second year watching a trainee: the assessor was listening for whether the form changed when the question changed. Not whether it was right. Whether it moved. And that is why the names come off: reading a map and walking a road are not the same skill, and the difference is two seconds — at two seconds you answer with whatever form your mouth reaches for. Omar said his is the past simple; Mazen said the present perfect, like Hiba\'s; Adnan said the passive, and that he does not think it is a tense. Ms Huda said it is not, and that it is the most interesting answer in the room, and it is Unit 2. Then the one form she wanted to hear: the gap question. Omar asked a site manager in January how long the machine had been doing that before anybody reported it, and the man said he would have to ask Suheil, who was on it in September — and Suheil said five weeks, maybe six. So the answer was not a figure and not a shrug: it was a name._'));
out.push(p('**Listener task:** write one person\'s default form and the question that would make them leave it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Hiba writes for the trainee she is mentoring. Answer the questions.'));
out.push(model([
  '**THREE WORDS ON AN OBSERVATION FORM** · H. Nasser · 12 September · for F., in her first term',
  'Somebody will write three or four words about your lessons this year and you will not understand them. This is about one set of three, written about me, and I can save you the year it took.',
  '**What they wrote.** _"Range not demonstrated."_ November, my first year, second observation, in the box at the bottom with no other comment in it.',
  '**What I thought it meant.** That my English was too simple, and I spent four months learning the names of things. I can still recite them. It did nothing, because the names were never the problem.',
  '**What it actually meant.** I had been answering every question in the present perfect. _What had you been doing before the lesson? I have prepared the materials. How long have you been teaching? I have taught for two years._ Every sentence was correct. **The accuracy was the problem**: I had one form that is never wrong and used it for everything, and a listener cannot tell a person with one form from one who has not understood the question.',
  '**How I found out, which was not from the assessor.** In my second year I watched a trainee for forty minutes and knew within four questions. She was not making mistakes. Her form did not **move** when the question moved — a thing you hear at once in somebody else and never in yourself.',
  '**What I would have wanted written in that box, and it is longer than three words.** _"Answers are accurate and all in one form. Ask her a question about a stretch of time before another past event and listen to what she reaches for."_ Twenty-six words. Nobody has that much room in the box, which is why the box says three.',
  '**What to do about it this term, and it is not studying.** Get somebody to ask you twelve fast questions in twelve shapes and to say only _moved_ or _did not move_. It takes four minutes. You will find you have one form, or two, and then you will know which question to practise.',
  '**And the thing I shall say about myself, because you will meet it in the staff room.** I was the best-prepared trainee in my year, and I was marked down on the one thing preparation cannot reach.',
]));
out.push(item('1', 'What did she first think the three words meant, and what did she do about it?'));
out.push(item('2', 'How did she find out what they meant, and why only in the trainee?'));
out.push(item('3', 'What twenty-six words did she want in the box, and why does it say three?'));
out.push(writers([
  'A page that explains a verdict somebody else wrote: **say why you are writing it and what it will save** → **the words, quoted exactly, with where and when** → **what you thought they meant, and what that cost** → **what they actually meant** → **how you found out, which was not from the assessor** → **what you would have wanted written instead, with its word count** → **what to do about it, and that it is not studying** → **and the thing about yourself**.',
  '**Quote the verdict exactly, with its position on the page.** _In the box at the bottom with no other comment in it._ Where a judgement was written is part of what it meant: a comment with nothing beside it is one there was no room for.',
  '⚠ **Say what the wrong reading cost.** _I spent four months learning the names of things, and I can still recite them._ A page about a misunderstanding is only useful if it prices it.',
  '**Write the version you wanted, and count it.** _Twenty-six words. Nobody has that much room in the box, which is why the box says three._ That sentence stops the page being a complaint about an assessor and makes it one about a form.',
  '⚠ And make the remedy **four minutes long and done by somebody else**. _Twelve fast questions, and they say only_ moved _or_ did not move. A remedy that is a course of study is a remedy nobody begins.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that explains a verdict written about you (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   Somebody will write ______________ about you and you will not understand it. This is about ______________, and I can save you ______________.   **What they wrote.** "______________" ______________, in ______________.   **What I thought it meant.** ______________, and I spent ______________. It did ______________.   **What it actually meant.** ______________. Every ______________ was correct. **The accuracy was the problem**: ______________.   **How I found out, which was not from ______________.** ______________ — a thing you hear at once in somebody else and never in yourself.   **What I would have wanted instead.** "______________" ______ words. Nobody has that much room, which is why ______________.   **What to do about it, and it is not studying.** ______________. It takes ______________.   **And the thing I shall say about myself.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The verdict quoted exactly, with where it was written',
  'The wrong reading, and what it cost in months or money',
  'The version you wanted, counted, and why the form had no room',
  'A remedy that takes minutes and needs one other person',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the version they would have wanted written.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more) about a verdict, grade, note or comment somebody wrote about your work: the words quoted, your wrong reading and its cost, what they meant, how you found out, the version you wanted with its count, the four-minute remedy, and the thing about yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the verdict quoted with its position**, **the cost of the wrong reading**, **a remedy in minutes**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your default form out loud, once, and then stop talking about it.** Everybody has one and no amount of grammar will find it, because you cannot hear your own. Then the thing to carry: the assessor who wrote three words on Hiba\'s form was right and had no room to explain — and what finally explained it was **a trainee doing the same thing in front of her**. You will be that trainee for somebody this year.'));
out.push(hw('Write the page (80+ words). Then get somebody to ask you twelve fast questions, saying only _moved_ or _did not move_: how many moved, and which form the rest were in.'));

// ======================= 1.5 =======================
out.push(pb());
out.push(h2('1.5  The answer that sounded rehearsed'));
out.push(p('**Function:** answering a question you have been asked three hundred times, differently   ·   **Grammar:** paraphrase at sentence level — the verb, the subject, the clause type   ·   **Pronunciation:** the sound of a sentence said too often'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each that you have said so often you no longer hear it. Your teacher asks: **when did you last change a word of it?** Nobody will be able to say.'));
out.push(board('I accepted them because they are worth about one and a quarter million and I wanted them.', 'the verb · the subject · the clause type'));
out.push(p('**b**  Which part has been changed? **1** _I accepted them_ → _they were accepted_.  **2** _I accepted them because I wanted them_ → _wanting them was why I accepted them_.  **3** _I accepted them_ → _I took them_.  **4** _I wanted them_ → _they were worth having and I knew it_.  **5** _I said so in writing_ → _it is in a letter of 7 December_.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened in Mazen\'s January meeting, and what went wrong in September?   **A** the meeting was cancelled; nothing   **B** he lost the four handsets; he complained   **C** eleven minutes and he got the specification; in September the same question was asked again and his answer sounded rehearsed'));
out.push(p('**b**  Listen again. **1** How many times does he say he had written the answer by January?   **2** What does Ms Huda say a sentence said three hundred times stops being?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.9  Nine drafts and then the tenth time', [
  ['Mazen', 'The January meeting happened and it took eleven minutes. Eleven. I had written that answer nine times and been chasing the thing for fourteen months, and the whole meeting was eleven minutes long.'],
  ['Omar', 'What happened?'],
  ['Mazen', 'He asked the question — why did you accept four units when your letter said twice you were not asking for a replacement. I gave the two sentences. He wrote something down, said "that is fair", and gave me the specification, which I had asked for twice in writing and never had. Then he asked me to come back in September about a second batch.'],
  ['Yara', 'So it worked.'],
  ['Mazen', 'In January it worked. In September it did not, and that is why I am telling you. Same man, same question — he asked it again, I think to see what I would say — and I gave him the same two sentences, word for word, because they were right. And I watched him stop listening in the middle of the second one.'],
  ['Nour', 'Why?'],
  ['Mazen', 'Because it sounded rehearsed, which it was. It had been rehearsed in January and it was **true** in January. In September it was still true and it had stopped being mine. I had said it to myself about three hundred times in eight months and I could not hear it any more, and neither could he.'],
  ['Ms Huda', 'That is the cycle, and it is the uncomfortable consequence of everything we did last year. **A sentence you have said three hundred times stops being a sentence and becomes a formula** — and a formula is heard as a position rather than as an answer. Say it again, Mazen, and then say it differently.'],
  ['Mazen', 'The original: _I accepted them because they are worth about one and a quarter million pounds and I wanted them. That does not change the question in my letter, and I said so in writing eleven days later._'],
  ['Ms Huda', 'And now one of the three changes. Not all three.'],
  ['Mazen', 'Change the clause type: _wanting them is why I accepted them, and it is the whole reason. The question in my letter is in a letter, and so is the date I repeated it._'],
  ['Rim', 'That is more uncomfortable than the first one.'],
  ['Mazen', 'It is, and it is the same content. _Wanting them is why_ puts the wanting at the front of the sentence and makes me look at it. The January version buried it in a _because_ clause, which is where you put a thing you have finished thinking about.'],
  ['Ms Huda', 'Which is the point. **Paraphrase is not a politeness and it is not variety for its own sake.** Moving one element — the verb, the subject or the clause type — makes a speaker look at their own content again, and a listener can hear that happening. ⚠ And the three moves are not equal: changing the **verb** changes the register, changing the **subject** changes who is responsible, and changing the **clause type** changes what the sentence is **about**.'],
  ['Adnan', 'And if you change all three?'],
  ['Ms Huda', 'You have written a different sentence, and you should check that you still agree with it. That is not a joke — it is the commonest way a careful person ends up committed to something they did not mean.'],
]));
out.push(sp());
out.push(box('Language box – saying it again, differently', [
  '**Three moves, and they do three different things:**',
  table(['move', 'example', 'what it changes'], [
    ['**the verb**', '_I accepted them_ → _I took them_ · _they were accepted_', 'the **register**, and sometimes the agent'],
    ['**the subject**', '_I accepted them_ → _the units were offered and I kept them_', 'who is **responsible**'],
    ['**the clause type**', '_…because I wanted them_ → _wanting them is why I accepted them_', 'what the sentence is **about**'],
  ], [1.4, 3.0, 2.6]),
  '⚠ **A sentence you have said three hundred times stops being a sentence and becomes a formula**, and a formula is heard as a **position** rather than as an answer. It can be true, exact, hard-won and nine drafts deep, and still be heard as a wall — and the speaker cannot hear it, because they stopped listening to it somewhere around the fiftieth time.',
  '**Move one element, not three.** Moving the **clause type** is the one that does the work on the speaker: _because I wanted them_ buries the wanting in a subordinate clause, which is where a writer puts something they have finished thinking about; _wanting them is why_ puts it at the front and makes them look at it again.',
  '⚠ **Change all three and you have written a different sentence** — check that you still agree with it. This is not a joke: it is the commonest way a careful person ends up committed to a position they never held.',
  '**The test for whether you need this at all:** when did you last change a word of it? If the answer is _I do not know_, the sentence is a formula, whatever its quality.',
  '**Useful phrases:** eleven minutes, and I had written it nine times · it was true in January and it had stopped being mine · I watched him stop listening in the middle of the second sentence · that is where you put a thing you have finished thinking about.',
  '**Practise:** Take one sentence of yours and make each move separately, saying which.  1 the verb  2 the subject  3 the clause type  4 the verb and the subject  5 all three — then say whether you still agree with it',
  '**Pronunciation.** 🔊 **Track 1.10** A sentence said too often has a **flat, even rhythm with no new stress anywhere** — every word gets the same weight because the speaker is not choosing any of them. ⚠ The repair is not slowing down; it is **re-stressing one word**. Listen to four sentences said twice, once as a formula and once chosen, and write the word that moved.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says their over-used sentence. B asks the question it answers — twice, as if they had not heard the first answer. A must answer the second time with **one element moved**, and name which. B says whether the second version sounded chosen. Swap.'));
out.push(dlg(null, [
  ['B', '__________?'],
  ['A', '_(the formula)_ __________.'],
  ['B', '_(again)_ __________?'],
  ['A', '_(one element moved: __________)_ __________.'],
  ['B', 'The second one sounded __________, and the word I noticed was __________.'],
]));
out.push(table(['Card A – the question you are always asked', 'Card B – the question you are always asked'], [
  ['_why did you do it that way?_', '_what exactly do you do?_'],
  ['_why has it not been fixed?_', '_whose decision was that?_'],
  ['_how long will it take?_', '_why can you not just…?_'],
  ['_is that not expensive?_', '_did nobody check?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight formulas and the eight moved versions, and mark which element moved in each. Then the finding: **six or seven of the eight moved the verb**, the easiest and cheapest — and the two or three that moved the **clause type** are the only ones where the speaker visibly thought about their own content.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say your formula. Then move the clause type — only that — and say it again. Then say what you noticed about your own content that you had not noticed for months.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s new version is one they still agree with, and whether it would be more uncomfortable to say to the person who asks the question.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The January meeting happened and it took eleven minutes. Mazen had written that answer nine times and chased the matter for fourteen months. The man asked the question — why did you accept four units when your letter said twice that you were not asking for a replacement — and Mazen gave the two sentences. He wrote something down, said "that is fair", gave him the specification he had asked for twice in writing and never had, and asked him back in September. Yara said so it worked, and Mazen said in January it worked and in September it did not, which is why he was telling them. Same man, same question — asked again, he thinks to see what Mazen would say — and he gave the same two sentences word for word, because they were right. And watched him stop listening in the middle of the second one. Nour asked why, and he said because it sounded rehearsed, which it was: rehearsed in January and true in January, and in September still true and no longer his. He had said it to himself about three hundred times in eight months and could not hear it any more, and neither could the other man. Ms Huda said that is the uncomfortable consequence of last year: a sentence said three hundred times stops being a sentence and becomes a formula, and a formula is heard as a position and not as an answer. She made him move one element and not three, and he moved the clause type: wanting them is why I accepted them, and it is the whole reason. Rim said that is more uncomfortable than the first version, and Mazen said it is, and the same content — "wanting them is why" puts the wanting at the front and makes him look at it, where the January version buried it in a "because" clause, where you put a thing you have finished thinking about. Adnan asked what happens if you change all three, and she said you have written a different sentence and should check that you still agree with it — the commonest way a careful person ends up committed to something they did not mean._'));
out.push(p('**Listener task:** write one formula from this room and the version with its clause type moved.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Mazen writes before he goes back in September. Answer the questions.'));
out.push(model([
  '**BEFORE THE SECOND MEETING · the same question, the tenth time** · M. Hariri · 14 September',
  '**What happened in January.** Eleven minutes. He asked the question, I gave the two sentences, he said "that is fair" and gave me the specification I had asked for twice and never had. Nine drafts, fourteen months, eleven minutes.',
  '**What happened in September.** He asked the same question. I gave the same two sentences, word for word, and he stopped listening in the middle of the second. I watched it happen and could not stop.',
  '**Why, and it is not that the answer was wrong.** It was right in January and it is still right. It had been said about three hundred times — to myself, in a car, in a queue — and somewhere in there it stopped being a sentence and became a shape I make with my mouth. **He was not refusing the content. He was hearing a formula and a formula is a wall.**',
  '**What I am changing, and it is one thing.** Not the content: the clause type. _I accepted them **because** they are worth about 1,250,000 pounds and I wanted them_ becomes _**wanting them is why** I accepted them, and it is the whole reason._',
  '**What that costs me, which is why it is better.** The _because_ version buries the wanting in a subordinate clause, where anybody puts a thing they have finished thinking about. The new version puts it first and makes me look at it while I say it — and it is more uncomfortable to say out loud, by about a second. That second is the difference.',
  '**What I am not going to do.** Find a third answer. There is one answer and nine drafts found it, and a man who arrives with a new answer to an old question has either been caught out or is managing somebody.',
  '**And what I shall say about the second batch, before he asks.** Fifteen in the fault book last December; eighteen now, because the four went into service in January and one has a line against it. **The one with the line is the one I shall bring.** Not the three that are fine.',
  '**The thing I should admit, about the nine drafts.** I was proud of them. They were the most careful writing I have ever done and the reason he gave me the specification. They are also the reason the sentence was dead by September: I rehearsed it until it was perfect, and perfect is one of the ways a sentence stops being heard.',
]));
out.push(item('1', 'How long did the January meeting take, and what had it cost to prepare for?'));
out.push(item('2', 'What is he changing, what is he refusing to change, and why?'));
out.push(item('3', 'What will he say about the second batch, and which unit is he bringing?'));
out.push(writers([
  'A page before a repeated conversation: **what happened the first time, in figures** → **what happened the second time** → **why, and that the answer was not wrong** → **the one thing you are changing** → **what that costs you, which is why it is better** → **what you are not going to do** → **what you will say before being asked** → **and the thing to admit about your own preparation**.',
  '**Put the arithmetic of the first time in one line.** _Nine drafts, fourteen months, eleven minutes._ Three figures, no adjective, and the whole preparation and its return.',
  '⚠ **Say that the answer was not wrong.** A page that treats a failed second attempt as a content problem will rewrite content that was right. _It was right in January and it is still right_ makes the rest of the page about delivery and not about truth.',
  '**Name the cost of the better version and treat the cost as the evidence.** _It is more uncomfortable to say out loud, by about a second, and that second is the difference._ A version that costs the speaker nothing has moved nothing.',
  '⚠ And refuse the third answer out loud. _A man who arrives with a new answer to an old question has either been caught out or is managing somebody._ The discipline here is **one content, many sentences**.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page before a conversation you have had before (80 words or more).'));
out.push(p('**BEFORE ______________ · the same question, the ______ time** · ______________ · ______________   **What happened the first time.** ______________. ______ drafts, ______ months, ______ minutes.   **What happened the second time.** ______________. I watched it happen and ______________.   **Why, and not because the answer was wrong.** It was right ______________ and it is still right. It had been said about ______ times, and in there ______________.   **What I am changing, and it is one thing.** Not the content: the ______________. "______________" becomes "______________".   **What that costs me, which is why it is better.** ______________.   **What I am not going to do.** I am not going to ______________, because ______________.   **And what I shall say before being asked.** ______________.   **What to admit about my own preparation.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The first time in three figures, with no adjective',
  'A sentence saying the answer itself was not wrong',
  'One element moved and named — the clause type if you can manage it',
  'The cost of the new version, treated as the evidence for it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the sentence with its clause type moved.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the first time in figures, the second time, why the answer was not wrong, the one element moved, what the new version costs you, the third answer you refuse to look for, what you will say unasked, and the admission about your own preparation.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the first time in figures**, **one element moved and named**, **the cost of the new version**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**When did you last change a word of your formula?** Nobody can say, which is the diagnosis and not a failure. Then the sentence this cycle exists for: **perfect is one of the ways a sentence stops being heard.** Mazen\'s nine drafts got him the specification in January and killed the sentence by September.'));
out.push(hw('Write the page (80+ words). Then say your moved version to somebody who has heard the old one, and write down whether they asked a follow-up question.'));

// ======================= 1.6 =======================
out.push(pb());
out.push(h2('1.6  Nothing over four lines'));
out.push(p('**Function:** writing for a reader who knows the work and has thirty seconds   ·   **Grammar:** everything in the first two sentences · the rest below the rule   ·   **Pronunciation:** reading your own first two sentences aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the first two sentences of the last thing you wrote at work, from memory. Your teacher asks: **if the reader stopped there, what would they know?** In about half the cases, nothing.'));
out.push(board('Nineteen of twenty-two. The nineteen are listed below with their case numbers.', 'everything in the first two sentences'));
out.push(p('**b**  Which pair of sentences survives being cut after the second? **1** _I am writing about the escalation rota. As you know, this has been under discussion for some time._  **2** _Nineteen of the twenty-two calls since September involved a promise nobody recorded. The nineteen are below with their case numbers._  **3** _Following our conversation, I should like to set out the position. There are three matters to address._  **4** _Four pallets were eleven degrees over on arrival and are being returned. The temperature log is attached._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say her department head does with anything over four lines, and what did she discover about her own first paragraph?   **A** he forwards it; it was too short   **B** he stops reading; her first paragraph said nothing at all   **C** he replies in one word; it was perfect'));
out.push(p('**b**  Listen again. **1** What does she say she had been taught to put first, and by whom?   **2** What does Ms Huda say the line across the page is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.11  He reads four lines', [
  ['Nour', 'Since December the department head writes to me, which is new and is the thing I wanted. And in July his assistant told me something by accident that has changed how I write. **He reads four lines.** Of anything. Then he decides whether to read the rest, and about half the time he does not.'],
  ['Omar', 'Four lines of what — the screen?'],
  ['Nour', 'Four lines of the screen. Which is about forty words, and it is not rudeness and it is not a fault of his: he has about ninety of these a day. So I went back through everything I had sent him since December and counted what was in my first four lines.'],
  ['Ms Huda', 'And?'],
  ['Nour', 'In six of nine, nothing. _I am writing with reference to the escalation rota, which as you know has been under discussion since the autumn._ That is my first four lines of the March one, and a man who stopped there would know that I had written to him about something.'],
  ['Jad', 'Where was the actual thing?'],
  ['Nour', 'Paragraph three. The figure was always in paragraph three, in all six. And the worst part is that I know why: I had been taught — and I mean taught, at school, by a woman I liked — to **set the scene** before the point. Context first, then the matter. It is a real instruction, it is not stupid, and it is correct for an essay and wrong for a man with ninety of these.'],
  ['Adnan', 'That is the form we use at the directorate as well. _Further to your letter of the…_ and then two lines before anything happens.'],
  ['Ms Huda', 'And both of you are describing the same thing, which is a **genre inherited from a reader who does not exist any more**. The slow opening assumes a reader who has already decided to read the whole thing. Now the repair, and it is two moves and not a style. **One: everything in the first two sentences.** The figure, the request, the decision. **Two: a line across the page** — literally a rule, or a blank line and a heading — and everything the reader does not need in order to act goes **below** it.'],
  ['Rim', 'What goes below?'],
  ['Ms Huda', 'The context. The history. The attachment list. The courtesy. None of it is deleted and that is the part people resist: you are not cutting the page, you are **reordering** it, and the page is the same length. A reader who stops at the line has what they need, and a reader who wants the rest has it.'],
  ['Nour', 'The thing I sent him in July was three lines and then a rule and then half a page. He replied in nine minutes, which has never happened, and his reply was: _yes to the first, no to the second, tell me about the third on Thursday._'],
  ['Hiba', 'He had read all of it.'],
  ['Nour', 'He had read all of it, and I think he read all of it **because** the first three lines meant he did not have to.'],
  ['Adnan', 'Ours opens _further to your letter of the 14th instant_ and nothing happens for two lines. I have written that opening perhaps four thousand times and I have never once asked what it is for.'],
  ['Ms Huda', 'Which is the paradox of the cycle and it is worth writing down: **a page that can be stopped at line four is more likely to be finished.** The reader relaxes. ⚠ And one caution, because you will overdo this next week: the first two sentences carry the **content**, not a summary of the content. _There are three matters to address_ is not a first sentence. It is an announcement that a first sentence is coming.'],
]));
out.push(sp());
out.push(box('Language box – the first two sentences, and the line', [
  '**Two moves. Neither of them is a style and neither deletes anything.**',
  table(['move', 'what it means', 'the error it prevents'], [
    ['**1 · everything in the first two sentences**', 'the figure, the request or the decision — the content, not a summary of it', '⚠ _There are three matters to address_ — an announcement that a first sentence is coming'],
    ['**2 · a line across the page**', 'context, history, attachments and courtesy go **below** it', 'the page is **reordered**, not cut — same length, same content'],
  ], [2.1, 2.5, 2.4]),
  '**What goes above the line:** the figure · the request · the decision · the date by which you need something · the one thing you want done. **What goes below:** how it arose · what was agreed before · who else has it · what is attached · thanks.',
  '⚠ **The slow opening is a genre inherited from a reader who does not exist any more.** _Further to your letter of the…_ and _I am writing with reference to…_ assume a reader who has already decided to read the whole thing. Most readers now decide at line four, and the instruction to **set the scene first** — which is taught, and is not stupid — is correct for an essay and wrong for a letter to somebody with ninety of these a day.',
  '**And the paradox worth writing down: a page that can be stopped at line four is more likely to be finished.** A reader who has the content in the first three lines relaxes and reads the rest; a reader who is three lines in and has nothing starts looking for the end.',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _leave out · take out · put in · get hold of · come out of · write back · reach for · take apart · catch out · pick up · work out · go up and come down_ **(of a register dial)**.',
  '**This unit\'s word-formation set** _(Reading Part 3 tests exactly this)_: _assume → **assumption** · explain → **explanatory**, **unexplained** · frank → **frankness** · admit → **admission** · presume → **presumption** · rehearse → **rehearsal** · conform → **non-conforming** · demonstrate → **demonstration**._',
  '**Useful phrases:** he reads four lines, of anything · a man who stopped there would know that I had written to him about something · the figure was always in paragraph three · you are not cutting the page, you are reordering it.',
  '**Practise:** Write the first two sentences only, so that a reader could act on them.  1 a request  2 a refusal  3 a figure you have found  4 a decision you have taken  5 bad news',
  '**Pronunciation.** 🔊 **Track 1.12** Read your own first two sentences aloud and **stop**. The test is audible: if your voice wants to carry on, the content is not in them. ⚠ A speaker whose first two sentences are complete comes to a natural full stop; one whose are an introduction rises at the end and leans forward. Listen to four pairs and say which speaker had finished.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the first four lines of something they have actually sent — no more. B says exactly what they now know and what they could now do. A then rewrites the opening aloud, two sentences, and B answers the same two questions again. Swap.'));
out.push(dlg(null, [
  ['A', '_(the real first four lines)_ __________.'],
  ['B', 'I know __________, and I could __________.'],
  ['A', '_(two sentences)_ __________. __________.'],
  ['B', 'Now I know __________, and I could __________ — and the thing you moved below the line was __________.'],
]));
out.push(table(['Card A – something you sent', 'Card B – something you sent'], [
  ['_a request for something_', '_a report of a figure_'],
  ['_a refusal_', '_a correction of somebody else_'],
  ['_an answer to a question_', '_a note about a date_'],
  ['_an apology_', '_a proposal for a small change_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the eight originals, write what a reader who stopped at line four would have known. Then the count: in how many was it **nothing actionable**? Five or six of eight, and that proportion holds in every class. ⚠ Note also which openings began with a **date or a reference** — _further to your letter of the 14th_ — the commonest way four lines go on administration.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Read your own first four lines from Stage 1 again and say what is in them. Then say where the figure or the request actually was — the paragraph number — and whether you know why you put it there.'));
out.push(p('**b**  Swap. Then each of you draw your partner\'s **line across the page** out loud: say which sentence is the last one above it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Since December the department head writes to Nour, which is new and is what she wanted. In July his assistant told her by accident the thing that has changed how she writes: he reads four lines. Of anything. Then he decides whether to read the rest, and about half the time he does not. Omar asked four lines of what, and she said four lines of the screen, about forty words — and it is not rudeness, because he has about ninety of these a day. So she counted what was in her first four lines of everything she had sent him since December: in six of nine, nothing. "I am writing with reference to the escalation rota, which as you know has been under discussion since the autumn." That is the first four lines of the March one, and a man who stopped there would know only that she had written. Jad asked where the actual thing was: paragraph three, in all six. And she knows why: she was taught at school to set the scene before the point, which is correct for an essay and wrong for a man with ninety of these. Adnan said the directorate does the same: "further to your letter of the…" and two lines before anything happens. Ms Huda said both are describing a genre inherited from a reader who does not exist any more: the slow opening assumes a reader who has already decided to read the whole thing. Then the repair, which is two moves and not a style — everything in the first two sentences, and a line across the page with everything below it that the reader does not need in order to act. Rim asked what goes below, and the answer is the context, the history and the courtesy, none of it deleted: you are reordering the page, not cutting it. Nour said the thing she sent him in July was three lines, a rule, then half a page, and he replied in nine minutes, which has never happened: yes to the first, no to the second, the third on Thursday. Hiba said he had read all of it, and Nour said yes — because the first three lines meant he did not have to. Which is the paradox of the cycle: a page that can be stopped at line four is more likely to be finished._'));
out.push(p('**Listener task:** write one opening from this room before and after, and the sentence that is now last above the line.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Nour sent in July. Answer the questions.'));
out.push(model([
  '**ESCALATION CALLS · JULY FIGURE AND ONE REQUEST** · N. Sabbagh · 14 July',
  'Of the forty-one escalation calls taken since 1 September, **thirty-four** involved a promise made to a customer that is in no note of ours. I have the dates and the eleven-digit case numbers for all thirty-four, and I should like twenty minutes with whoever owns the note template, before the October release.',
  '_______________________________________________',
  '**How the figure arose.** You asked me in December how many of the calls involved an unrecorded promise. The answer then was nineteen of twenty-two, since 1 September. The count has continued on the same basis — my own, from the call sheets, not the system\'s — and it now stands at thirty-four of forty-one. The rate has not moved: it was about 86 per cent then and it is about 83 per cent now, and I would not read anything into the difference.',
  '**What I am not claiming.** That the promises were wrong, or that anybody made them carelessly. Thirty-one of the thirty-four were reasonable things to say to a customer on the telephone. The problem is not the promise; it is that the note template has no field it can go in, so it goes in the free-text box or nowhere, and the free-text box is not searchable.',
  '**Why twenty minutes and not a paper.** Because the change I think is needed is one field with a date in it, and if I am wrong about that I would rather be told in twenty minutes than write four pages first. If I am right, the person who owns the template can do it in an afternoon.',
  '**What I have put below this line and would have put at the top a year ago.** All of the above. In March I sent you a page whose first four lines told you that I was writing to you about the escalation rota, and the figure was in paragraph three. You replied to that one in eleven days. This one took nine minutes.',
  '_Attached: the thirty-four case numbers with dates; the December note; the call-sheet extract for June; the one page of the template that would carry the new field._',
]));
out.push(item('1', 'What is in the first two sentences, and what could the reader do on them alone?'));
out.push(item('2', 'What is she not claiming, and what does she say the problem actually is?'));
out.push(item('3', 'What does the last paragraph compare, and what are the two reply times?'));
out.push(writers([
  'A page with a line across it: **the figure or the decision, and the request, in the first two sentences** → **the rule** → **how it arose** → **what you are not claiming** → **why you are asking for this and not something bigger** → **what you have put below the line that you would once have put at the top** → **and the attachments, named**.',
  '**Put the figure and the request in the same two sentences.** _Thirty-four of forty-one … and I should like twenty minutes with whoever owns the template._ A figure with no request is information; a request with no figure is a favour. Together they fit in forty words.',
  '**Draw the rule.** A line, or a blank line and a heading — something the eye stops at. It says, before a word is read, that everything below is optional, and that is the signal that makes them read it.',
  '⚠ Keep the rate as well as the count, and refuse to over-read it: _about 86 per cent then and about 83 per cent now, and I would not read anything into the difference._ A writer who will not claim a trend from two points is believed about the points.',
  '⚠ And say what you have moved. _What I have put below this line and would have put at the top a year ago: all of the above._ Then the two reply times, eleven days against nine minutes — the only evidence anybody accepts for a change of this kind, and it is free.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with a line across it (80 words or more).'));
out.push(p('**______________ · ______________** · ______________ · ______________   ______________, **______** ______________. I have ______________, and I should like ______________.   ____________________________________   **How the figure arose.** ______________. The count has continued on the same basis — ______________ — and it now stands at ______________.   **What I am not claiming.** ______________. The problem is not ______________; it is that ______________.   **Why ______________ and not ______________.** ______________.   **What I have put below this line and would have put at the top a year ago.** ______________.   _Attached: ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A figure and a request inside the first two sentences',
  'A visible line, with everything optional below it',
  'A rate as well as a count, and no trend read into two points',
  'The sentence saying what you have moved, with the two reply times',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first two sentences and then stop, and the class says what it could now do.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more) with the line across it: the figure and the request above, then how it arose, what you are not claiming, why you are asking small, what you have moved below the line, and the attachments.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the figure and the request in the first two sentences**, **a visible line**, **a rate with a refusal to over-read it**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your first two sentences and stop.** The test is audible: if your voice wants to carry on, the content is not in them. Then the two figures of this cycle, which are Nour\'s: **eleven days** for the page whose figure was in paragraph three, and **nine minutes** for the page with three lines and a rule. Neither is about writing better, but about where the content sits.'));
out.push(hw('Write the page (80+ words) and send it. Then write down the time it took to get a reply, and whether the reply answered the thing above the line or below it.'));

// ======================= 1.7 =======================
out.push(pb());
out.push(h2('1.7  Review & Mediate: Eight things this room assumes'));
out.push(p('**Function:** explaining to a newcomer what a room takes for granted   ·   **Recycling:** Unit 1   ·   **Exam practice:** B2 First Reading and Use of English Part 3, Writing Part 1, Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 1 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I have, and so she has.  **2** Frankly the figures were late.  **3** The figures were frankly, late.  **4** How long it had been doing that before anybody reported it?  **5** I regret to advise you that the thing is a bit of a mess.  **6** Wanting them is the reason why I accepted them because I wanted them.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the sheet the eight wrote for the four, between the two lessons.'));
out.push(box(null, [
  '**WHAT THIS ROOM ALREADY ASSUMES** _(eight lines, written by the eight for the four, 11 September)_',
  '**1**  That a claim with no figure in it is not a claim.',
  '**2**  That you write _said_ unless you can say out loud why you have chosen another verb.',
  '**3**  That the prediction sheet on the wall is read on the first of June and nobody takes anything down.',
  '**4**  That everybody here keeps a count of something, and knows the number tonight.',
  '**5**  That the hardest part of the first fortnight is the four sentences, and that you keep them.',
  '**6**  That if you have nothing to say about something you say so, rather than saying something.',
  '**7**  That the person who says the unflattering thing first is the person who gets believed.',
  '**8**  That nobody in this room is interested in how hard you have worked.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Which of the eight lines turn out **not** to be shared, and what does Ms Huda say shared ground actually is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.13  Four of the eight were never shared', [
  ['Ms Huda', 'Eight lines, written by eight people who have been in this room for two years. Four new readers. Mr Barghouti, you read it first — which of the eight did you understand?'],
  ['Adnan', 'All eight of them as English. Three of them as instructions I could follow tomorrow. One, four and seven, more or less.'],
  ['Rim', 'Same three for me. And I would add six — if you have nothing to say, say so — which I do already and which I did not know had a name.'],
  ['Dima', 'I understood one, two, six and seven. Two is my whole job and I nearly laughed.'],
  ['Hiba', 'I understood all eight, and I should not be counted, because I was in this room for six weeks and I have spent two years in a building where four of these are written on a wall in different words.'],
  ['Ms Huda', 'So let us do the arithmetic, because it is the whole cycle. **Lines three and five are not shared at all** — they are not assumptions, they are **this room\'s history**, and a person who was not here cannot follow them and cannot act on them. _The prediction sheet is read on the first of June_ means nothing to somebody who has never seen the sheet.'],
  ['Omar', 'But those are the two I am proudest of.'],
  ['Ms Huda', 'They are the two the eight of you are proudest of, which is exactly why they were on the sheet, and it is the commonest fault in a document of this kind: **the lines a group writes first are the lines that mark membership, not the lines that transfer anything.** Four and eight are also not shared, for a different reason.'],
  ['Nour', 'Four is a fact about us, not an instruction.'],
  ['Ms Huda', 'Four is a fact about you. _Everybody here keeps a count of something and knows the number tonight_ describes this room; it tells a newcomer nothing about what to do, and worse, it tells them they are already behind. And eight — _nobody is interested in how hard you have worked_ — is true, is the hardest thing in these two years, and is **unusable on the first evening**, because it reads as a rebuke to somebody who has not yet said anything.'],
  ['Jad', 'So four of the eight fail.'],
  ['Ms Huda', 'Four of eight, which is the ordinary rate and the figure to remember. **One, two, six and seven work** — and look at what those four have in common that the others do not: every one of them is a **sentence about what to do with a sentence.** Nothing in them refers to anything that happened in this room.'],
  ['Lubna', 'Then why write the other four at all?'],
  ['Ms Huda', 'Because you cannot tell which four are which, from inside. That is the whole of the first cycle: shared ground is not what a group has in common, it is **what the group can rely on without checking** — and the only instrument that can measure it is a person in the room who has not got it. You had four of them tonight and they have just saved you a term.'],
  ['Dima', 'And what do we do with three and five?'],
  ['Ms Huda', 'You do not delete them. You **date them and explain them once**, below a line: _in June of last year this class put a sheet of predictions on that wall; it is read on the first of June; here is what is on it._ Twenty-six words, and now line three is an assumption a new person can hold instead of a password.'],
]));
out.push(sp());
out.push(box('Language box – what transfers and what only marks membership', [
  '**Read a list of a group\'s assumptions one line at a time and sort it into four kinds:**',
  table(['kind', 'test', 'what to do with it'], [
    ['**Transfers**', 'is it a rule about what to **do**?', 'keep it, exactly as it is'],
    ['**History**', 'does it name an event the reader was not at?', 'date it and explain it once, below a line'],
    ['**A fact about the group**', 'does it describe **us** rather than instruct **them**?', 'rewrite as an instruction or drop it'],
    ['**True but unusable yet**', 'would it read as a rebuke to somebody silent?', 'keep it for week six, not week one'],
  ], [1.9, 2.4, 2.4]),
  '⚠ **The lines a group writes first are the lines that mark membership, not the lines that transfer anything.** A group writing this sheet will put its proudest history at the top, because that is what feels most important to the people who were there — and those are precisely the lines a newcomer cannot act on. Expect about **four of eight** to fail.',
  '**What the working lines have in common:** every one of them is **a rule about what to do with a sentence**, and none of them refers to anything that happened in the room. _A claim with no figure in it is not a claim_ travels; _the sheet is read on the first of June_ does not.',
  '**And the remedy for the history lines is not deletion — it is a date and one explanation, below a line** (1.6): _in June of last year this class put a sheet of predictions on that wall; it is read on the first of June; here is what is on it._ Twenty-six words, and the line stops being a password.',
  '⚠ **You cannot do this from inside.** No group can sort its own list, and neither can an audience that shares it. The only instrument is a reader who has not got the assumptions, and the whole of 1.1 was the argument for keeping one in the room.',
  '**Useful phrases:** I understood all eight of them as English and three as instructions · those are the two we are proudest of · it tells them they are already behind · it reads as a rebuke to somebody who has not yet said anything.',
  '**Pronunciation.** 🔊 **Track 1.14** Reading somebody else\'s line and then your verdict on it: **the line flat and quick, a pause, the verdict with the stress on the kind** — _"the sheet is read on the first of June" ‖ that is **HIStory**, not an assumption._ Listen to four and write the verdict only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the sheets below and does **not** show it. A reads it once, then explains it: which lines transfer, which are history, which describe the group, and which are true but unusable yet. B must say which **one** line they would keep unchanged and which **one** they would date and explain. Change roles with the other sheet.'));
out.push(table(['Sheet A – a hospital ward\'s eight lines', 'Sheet B – a printing works\' eight lines'], [
  ['_1 Nothing is signed for that has not been counted._', '_1 Nothing leaves the yard without a number on it._'],
  ['_2 If you do not know, you say so and then find out._', '_2 If a sheet is wrong, you stop the run and say so._'],
  ['_3 The trolley question was settled in March._', '_3 The 2019 guard was refitted to the wrong clearance._'],
  ['_4 Everybody here can run the afternoon list alone._', '_4 Everybody here has worked a Thursday proof._'],
  ['_5 We keep the fourth-night figures because of 2024._', '_5 We keep the spoil count because of the ministry order._'],
  ['_6 You write the time on anything you leave on a shelf._', '_6 You write your initials on anything you set aside._'],
  ['_7 Nobody minds being told; everybody minds being told twice._', '_7 The man who finds his own mistake keeps his job._'],
  ['_8 Nobody is impressed by anybody staying late._', '_8 Nobody is impressed by anybody working through lunch._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four kinds for each sheet. On **both** sheets, lines **1, 2, 6 and 7** transfer, lines **3 and 5** are history, line **4** is a fact about the group, and line **8** is true and unusable in week one — the same arithmetic from two different trades, which is why the stage runs two documents. ⚠ And in both, the history lines are the ones with a **year** in them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write the eight lines your **own** workplace would put on this sheet — alone, in four minutes, no discussion. Then explain them to your partner, who works somewhere else, and let them sort the four kinds. Your partner must ask: _how many of the eight could I act on tomorrow?_, _which line has a year in it?_ and _which one tells me I am already behind?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Eight lines, written by eight people who have been in this room for two years, read by four who have not. Adnan understood all eight as English and three as instructions he could follow tomorrow — one, four and seven. Rim had the same three and added six, which she does already and did not know had a name. Dima understood one, two, six and seven, and said two is her whole job. Hiba understood all eight and said she should not be counted, because she sat in this room for six weeks and has spent two years where four of these are on a wall in different words. So Ms Huda did the arithmetic. Lines three and five are not shared at all: they are not assumptions but this room\'s history, and a person who was not here cannot act on them — the prediction sheet being read on the first of June means nothing to somebody who has never seen it. Omar said those are the two he is proudest of, and Ms Huda said they are the two all eight are proudest of, which is why they were on the sheet, and the commonest fault in a document of this kind: the lines a group writes first mark membership, they do not transfer anything. Four and eight fail too, for different reasons. Nour said four is a fact about them and not an instruction, and Ms Huda agreed — "everybody here keeps a count of something and knows the number tonight" describes the room, tells a newcomer nothing to do, and worse, tells them they are behind. And eight, that nobody is interested in how hard you have worked, is true, is the hardest thing in two years, and is unusable on a first evening: it reads as a rebuke to somebody who has not yet said anything. So four of eight fail, which Ms Huda said is the ordinary rate. One, two, six and seven work, and what those four have in common is that every one is a sentence about what to do with a sentence: nothing in them refers to anything that happened in the room. Lubna asked why write the other four at all, and the answer is that you cannot tell which is which from inside — shared ground is what a group can rely on without checking, and the only instrument that measures it is somebody in the room who has not got it. Dima asked what to do with three and five, and Ms Huda said you do not delete them: you date them and explain them once, below a line, in about twenty-six words, and then the line stops being a password._'));
out.push(p('**Listener task:** write one line from this room that is history, and the twenty-six words that would fix it.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 3)', 7));
out.push(p('Use the word in capitals at the end of each line to form a word that fits in the gap. Write your answer in the gap.'));
out.push(box(null, [
  '**WHAT A ROOM TAKES FOR GRANTED**',
  'Any group of people who have worked together for a while builds up a store of shared **(1)** ______________, and almost none of them is ever written down.   **ASSUME**',
  'The difficulty is that an **(2)** ______________ sentence feels unnecessary to everybody who does not need it, so it is left out of the page.   **EXPLAIN**',
  'What the newcomer receives, therefore, is a document full of **(3)** ______________ references, each of which the writer believed to be obvious.   **EXPLAIN**',
  'Repairing this requires a degree of **(4)** ______________ that most offices find uncomfortable, because somebody has to say what they do not know.   **FRANK**',
  'The most useful sentence in any such document is the **(5)** ______________ that something has been left out, together with an instruction to ask.   **ADMIT**',
  'Without it, the reader is left with the **(6)** ______________ that they ought to have understood, which is the one thing that stops them asking.   **PRESUME**',
  'None of this is a matter of talent. After a certain amount of **(7)** ______________, most writers can produce a page that a stranger can use.   **REHEARSE**',
  'The only reliable **(8)** ______________ that a page works is a reader who was not there when the thing it describes was agreed.   **DEMONSTRATE**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the eight lines for your own workplace, sorted (80 words or more).'));
out.push(p('**WHAT ______________ ALREADY ASSUMES** · ______________   **LINES THAT TRANSFER.** **1** ______________. **2** ______________. **3** ______________.   **LINES THAT ARE HISTORY — dated and explained once.** **4** ______________. _In ______________, ______________; here is what it is._   **A LINE THAT DESCRIBES US AND NOT THEM — rewritten as an instruction.** **5** Was: ______________. Now: ______________.   **A LINE THAT IS TRUE AND NOT FOR WEEK ONE.** **6** ______________. _Keep until about week ______._   **AND THE TEST I USED.** ______________ read it, and could act on ______ of the ______.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three lines that are rules about what to do, with no event in them',
  'Every history line dated and explained in about twenty-five words',
  'The group-describing line rewritten as an instruction',
  'Who tested it, and how many lines they could act on',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1)', 10));
out.push(box(null, [
  '⚠ **You have not been taught how to write this, and that is deliberate.** Write it, keep it, and put today\'s date on it. Unit 3 teaches the essay and **3.7 reads this one again.**',
  'In your English class you have been talking about explaining things at work. Your teacher has asked you to write an **essay**. Write an essay using **all the notes** and giving reasons for your point of view. Write **180–220 words**.',
  '_**"It is always better to explain something fully than to assume that the other person already understands."** Do you agree?_',
  '**Notes — write about:**   **1** time   **2** the person who does not know   **3** ______________ _(your own idea)_',
]));
out.push(...lines(8));
out.push(pb());
out.push(stage('✓', 'Unit 1 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I have read it, and so ___ she.   a) did   b) has   c) have',
  '2  ___, the figures were late — and I am sorry to be blunt about it.   a) Frankly   b) Frankly,   c) To be fair',
  '3  The figures were, ___, late.   a) frankly;   b) frankly,   c) frankly',
  '4  How long ___ doing that before anybody reported it?   a) it had been   b) had it been   c) has it been',
  '5  ___ them is why I accepted them.   a) Want   b) To want   c) Wanting',
  '6  Of the forty-one calls, thirty-four involved a promise. I would not read too much ___ two points.   a) into   b) from   c) in',
  '7  A page that leaves something out needs one more line: the ___ that it has done so.   a) admit   b) admission   c) admitted',
  '8  I take out about ninety a month, ___ I have started counting them.   a) which is why   b) because   c) so that',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 1 style – eight short extracts).** 🔊 **Track 1.15** You will hear eight short extracts. For each question (**1–8**), choose the correct answer **A**, **B** or **C**.'));
[
  '**1**  How many words does the man use the second time?   **A** six   **B** forty-five   **C** ninety',
  '**2**  What does the woman say she has never chosen?   **A** her register   **B** her job   **C** her words',
  '**3**  What does the man say leaves nobody in the letter?   **A** the hedge alone   **B** the verb alone   **C** all three dials up together',
  '**4**  What does the woman say she takes out ninety times a month?   **A** a figure   **B** a word   **C** a paragraph',
  '**5**  Where does the man say the strongest position for a stance adverb is?   **A** at the front   **B** in the middle   **C** at the end',
  '**6**  What were the three words on the observation form?   **A** accuracy not sufficient   **B** range not demonstrated   **C** position not controlled',
  '**7**  How long did the January meeting take?   **A** fourteen months   **B** nine days   **C** eleven minutes',
  '**8**  How many lines does the woman say her department head reads?   **A** four   **B** two   **C** nine',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 1.15  Audio script (read after the check)', [
  ['1  Man', 'About a third of my year is doing a thing for the second time. That is the version for this room — six words. Said to somebody who has never met me it runs to forty-five: eleven places of work, about four hundred and twenty machines, about ninety faults a month, and most of the ninety the same eleven faults coming back.'],
  ['2  Woman', 'Nineteen years in that office and I have never chosen a register. I inherited one. There is a way those letters go and I learnt it in my first eleven weeks from a man who retired in 2011, and he could not tell you why about any of it.'],
  ['3  Man', 'Put the verb up, put the sentence length up and take the hedge off and you have a usable letter. Put all three up together and there is nobody in it — nobody to answer and nothing to answer about. That is the position people think is safe.'],
  ['4  Woman', 'About ninety a month, and I have started counting them. It is not a bad word. It is that in the copy I get it almost never means that something can be argued for — it means the writer would like credit for the claim and not the burden of it.'],
  ['5  Man', 'At the front it frames everything after it, which makes it the strongest and also the most expensive: if the sentence turns out not to matter, you have spent a warning on nothing. In the middle it leans on one word. At the end it is an afterthought and it sounds like one.'],
  ['6  Woman', 'Second observation, November of my first year, in the box at the bottom with nothing else in it. Three words: range not demonstrated. I spent four months learning the names of things and the names were never the problem.'],
  ['7  Man', 'Nine drafts. Fourteen months of chasing it. And the meeting itself was eleven minutes: he asked the question, I gave him the two sentences, he said that is fair and handed me the specification I had asked for twice in writing and never had.'],
  ['8  Woman', 'His assistant told me by accident in July. He reads four lines of anything — about forty words — and then decides whether to read the rest, and about half the time he does not. He has ninety of these a day, so it is not rudeness.'],
]));
out.push(p('**C  Writing.** Write the half-page (180+ words) for a reader who knows your work and has thirty seconds: the figure or the request in the first two sentences, a line across the page, and everything optional below it.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 1)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what I no longer have to explain, and say the same thing in full to a stranger',
  '☐ leave the repeated verb out and keep the auxiliary — and not say _obviously_',
  '☐ name the three dials and move **one** of them on a sentence of my own',
  '☐ put a stance adverb at the front, in the middle or at the end, on purpose',
  '☐ apply the four-second test: take the hedge out and see whether the sentence survives',
  '☐ answer a question in the tense the question needs, in two seconds, without naming it',
  '☐ say the same content again with the clause type moved',
  '☐ put the figure and the request in the first two sentences, and draw the line',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 2 – TAKING THE PERSON OUT', [
  'Unit 1 was about what a reader already has. **Unit 2** is about the opposite and more dangerous skill: taking the person out of a sentence on purpose — **nominalisation** — and keeping the agent findable in the paragraph after the sentence has dropped it.',
  '⚠ **This is the one place where B2 contradicts B1.** Last year you spent two whole cycles learning to put a person into every sentence: 19.1 on the agentless complaint and 23.3 on the impersonal report, with the test _put a person in front of it_. Unit 2 teaches the opposite move and the judgement that chooses between them, and taught badly it produces exactly the committee English you spent a year dismantling. **Bring one page you wrote last year with that test in mind.**',
  '**And bring one official paragraph you cannot read** — a circular, a clause, a notice, anything that has defeated you. 2.7 rewrites one of them for the person it is about, and Mr Barghouti has offered to bring four of his own.',
  '**One more thing to keep.** The essay you have just written badly, with tonight\'s date on it. Do not improve it, do not throw it away, and do not look at it until **3.7**.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 1 · Student\'s Book');
