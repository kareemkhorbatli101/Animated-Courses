// Proactive English C1 · Syria Edition · Book 2 · Unit 21 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 21  The Same English, Another Examination — Answer Key'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  '**This is the unit the series has been avoiding for three levels and the key says so in the first paragraph, because the room will feel it.** ⚠ **Mrs Ajouz needs a number for a registration file and has been given the same component mark twice.** **Half of any real class is in her position** — **and the honest thing, which this key asks the teacher to say out loud in 21.1, is that the course has taught the English and left the bookkeeping to a preparation book, and that the bookkeeping is where her file stopped.**',
  '**The unit\'s discipline is mechanical and the key marks it mechanically.** ⚠ **The four criteria named, not the paper.** **Two sentences added and two removed, quoted in full.** **A sentence of the student\'s own beside every descriptor phrase, or an empty space.** **A volume on every line of a description, and no level above the last.** **A counterpart named, or none.** **A rule cited by number.** **Every one of those is checkable in ten seconds.**',
  '**And one warning about 21.5, which is the declared transfer cycle and the only one of its kind in the series.** ⚠ **Do not let it become a lesson about which examination is better.** **The cycle has exactly four findings** — **two tasks with no counterpart and two habits this course itself built** — **and a class that leaves with anything more than those four has been told something the cycle cannot support from two attempts by one student.**',
], C.lblue, C.navy));

// ===================== 21.1 =====================
out.push(pb());
out.push(h2('21.1  What it asks, and what it is measuring'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The number, and then what the examination was measuring** — **not what it asked them to do.** **Nine of ten described the task and had to be asked again, which is not a failure of attention: the task is printed and the construct is not.** **Two columns on the board, and the second one stays mostly empty for the first ten minutes, which is the cycle made visible.**'));
out.push(A('**b** Say what is being measured: **2** and **4**. ⚠ **Four weighted criteria, and a part that measures whether two given points can be evaluated and chosen between.** **1, 3 and 5 are the task, the paper and the clock** — **and the room should be asked which of the three it prepared for last time, which is usually all three.**'));
out.push(NOTE('⚠ **Say the uncomfortable thing in the first ten minutes, because the room already knows it.** **This course has taught the English for ninety-six units and has left the examination bookkeeping to somebody else, and for the student in the room with a registration deadline that is where the file stopped.** **Mrs Ajouz asked this question in 1.1 and the key gave Ms Huda no good answer to it.** ⚠ **The better answer is this unit, and it has to be said as a correction and not as a defence: the English was never the problem, four pieces of bookkeeping were, and nobody had set them out.** **A teacher who defends the course here will lose the half of the class that is in Mrs Ajouz\'s position.**'));
out.push(NOTE('⚠ **The ninety hours are the figure to protect, in both directions.** **Do not let the room conclude that the vocabulary work was wasted** — **it served one of four criteria and 21.3 shows that it served it badly rather than needlessly.** **And do not let anybody comfort her either.** **The finding is arithmetical: one quarter of one paper, and nobody had told her which quarter was costing her, because the report gives one number and the script is not returned.** ⚠ **Run the arithmetic on the board — ninety hours, four criteria, one number — and then ask the room how many hours each of them has spent on a criterion they could not name.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** _Discuss both views_ → ⚠ **task.**   **2** _Whether the question was answered_ → **construct; the first of four criteria.**   **3** _Two passages and forty questions_ → ⚠ **the paper, which is neither.**   **4** _The range of the vocabulary_ → **construct; one quarter.**   **5** _Forty minutes_ → ⚠ **the clock, and the room will call it a construct, because time feels like a skill.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**Row 1** **Task.** ⚠ **Marked against task response, which is the first of four and the one a candidate who writes beautifully can still lose entirely.**',
  '**Row 2** ⚠ **Construct already.** **Set as _to what extent do you agree?_** — **and the room must supply the task, which is harder than supplying the criterion and is the point of the row.**',
  '**Row 3** **Task.** ⚠ **Register, organisation, and whether a decision is offered** — **which this course has been marking since Unit 16 under other names.**',
  '**Row 4** ⚠ **Construct, and it belongs to every writing task there is.** **Set as: any of them.**',
  '**Row 5** **Task, and the hardest row.** ⚠ **The criterion is selection of the main features and comparison** — **and a candidate who describes every figure in the chart has failed a criterion the task does not mention, which is 21.5\'s non-transfer arriving a cycle early.**',
]));
out.push(S('Stage 3 · Practise (sample – Card B)'));
out.push(SAMPLE([
  '**Row 1** **Task, and the room will want to call it a construct because it contains the word _opinion_.** ⚠ **An opinion is asked for; what is marked is whether the question was answered.**',
  '**Row 2** ⚠ **Construct.** **And the second reading of it is the examiner\'s, which is 19.1 and is 21.3 in two cycles\' time.**',
  '**Row 3** **Task.**',
  '**Row 4** ⚠ **Construct, and this is the fourth construct of ten on the two cards** — **which is about the real proportion: a task list is printed everywhere and a criterion list is published once and read by nobody.**',
  '**Row 5** **Task.** ⚠ **The criterion is comparison, and the room should be asked what happens to a candidate who compares nothing: the other three criteria cannot carry it, because they are weighted the same.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('**Rows 2 and 4 on both cards are constructs and the room will call them tasks** — **because a criterion written in the examination\'s own words reads like an instruction.** ⚠ **Rows 5 are the pair that matter**: the task is a description and the criterion is selection, **and a candidate who describes everything has failed a criterion the task never mentioned.** **Say that this row is 21.5 and leave it.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**The task as it was set.** _Some people believe that written examinations are the fairest way to select candidates. To what extent do you agree?_ **Two hundred and fifty words, forty minutes.**',
  '**The four criteria.** ⚠ **Task response · coherence and cohesion · lexical resource · grammatical range and accuracy.** **Equally weighted, which I did not know until this week.**',
  '**Which criterion my number was about.** **The first.** ⚠ **I gave both sides and no extent.**',
  '**b** ⚠ **What I prepared was vocabulary, which serves the third.** **And my partner\'s question was the one nobody had asked me: which of the four did the ninety hours serve?**',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mrs Ajouz has sat the same test twice, fourteen months apart, and the writing was 6.5 both times, and the registration file needs 7.0 in every component: she has 7.5 in reading, 7.0 in listening, 7.0 in speaking and 6.5 in writing, and between the two tests she did about ninety hours of work, all of it on vocabulary. Mrs Khoury asked what the four things being marked are, and task response, coherence and cohesion, lexical resource, and grammatical range and accuracy, each weighted the same, so vocabulary is one of four, and ninety hours on one quarter of the mark when nobody had told her which quarter was costing her is the most ordinary mistake in examination preparation and is not her fault. Mr Attar asked whether the report said which one, and the report gives one number for writing and nothing else: no component marks, no comments and no script returned, so she rewrote the second answer from memory in August to find out what had been in it. Mrs Oueidat asked what was in it, and both sides of the question in four paragraphs and no position of her own anywhere, because she had been taught that an examination essay should be balanced, and the task had asked to what extent she agreed. Mrs Khoury said that is the cycle and it is not about her English at all, since the task asked one thing and she answered a different thing she had been taught to answer, and no amount of vocabulary repairs an unanswered question. Dr Qabbani asked what a score is, and a prediction about a person made by two strangers from one performance on four criteria in forty minutes, which is reasonable and is not a skill. Mrs Ajouz said she writes eleven queries to manufacturers a year and two recall notices, all in English and all acted on, and the registration board will not look at any of them. Mr Shihabi asked whether the number is wrong, and Mrs Oueidat said it is not wrong and it is narrow and the room must hold both. Mrs Tarabishi asked what a reader does with a number, and trusts it, because it is one number and a document is four pages. And Mrs Khoury said nobody at the examination will tell her which criterion the number was about, and the descriptors will, against her own script, which is the only route there is: you take the band you want, read its four criteria, and find in your own answer the sentence that earns each one, and where there is no sentence you have found the criterion that is costing you, which is a measurement and not an impression.']));
out.push(A('⚠ **Two things in the report are the teaching and neither is about her English.** **Ninety hours spent on one quarter of a mark, by somebody who could not have known which quarter** — **and a report that gives one number, no component marks and no script.** **Ask the room who has prepared for an examination without knowing the criteria, and count the hands before anybody speaks.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**1** ⚠ **The task given as the construct** → **nine of ten, on the first attempt.**   **2** **The clock given as the construct** → **time feels like a skill.**   **3** ⚠ **The number argued with** → **it measured what it measured.**   **4** **The number treated as a description of the person** → **it is a prediction from one performance.**   **5** ⚠ **Preparation chosen before the criteria were read** → **six of ten prepared vocabulary.**   **6** **The apology attached to the figure** → **say it flat; the file needs a plan, not sympathy.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **About ninety hours, all of it on vocabulary** — **lists of academic words, a collocation notebook and forty essays\' worth of copied phrases.** **It served lexical resource, which is one of four criteria, equally weighted** — **and 21.3 finds that it served even that one badly, which the key should not spoil here.**'));
out.push(A('**2** ⚠ **She rewrote the second answer from memory, in an hour, in August.** **It was necessary because the report gives one number and nothing else: no component marks, no comments and no returned script** — **so the rewritten answer is the only evidence she has about her own performance, and it is admissible evidence because she wrote it.**'));
out.push(A('**3** ⚠ **She is not saying that the number is wrong**: it measured what it measured, accurately, from what she wrote, and it did not measure the eleven queries and never claimed to. **And what she will do differently is not more vocabulary** — **it is to answer the question in the first sentence and keep answering it, with the balance inside the position instead of in place of it.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**R. TARABISHI** · _note on the registration of the thesis topic_ · **20 September**',
  '**What the file needs.** **A language certificate at the faculty\'s own figure, or an interview in English with two members of the panel.** ⚠ **I have the second and have never been offered it.**',
  '**What I did between the two attempts.** **About forty hours, all of it reading.** ⚠ **And reading is not one of the four criteria of the paper I sat.**',
  '**What the report tells me.** **Four component figures and nothing else.**',
]));
out.push(S('Stage 7 · Write freely (sample, 281 words)'));
out.push(SAMPLE([
  '**M. OUEIDAT** · _note on an examination I sat in 2009 and have never sat again_ · **27 September**',
  '**What the file needed.** **A certificate at a named figure, for a translators\' register abroad that I have never joined.** ⚠ **I sat the paper once, was given a figure half a band under, and did not sit it again** — **and I have interpreted in court for fourteen years on the strength of nothing but four hundred sittings.**',
  '**What I did before it.** **Six weeks, all of it on legal vocabulary, which I already had.** ⚠ **I was a working interpreter preparing for an examination by studying the one thing my work had already given me** — **because it was the only part of the preparation I could see how to do.**',
  '**What the report told me.** **Four figures and no commentary.** ⚠ **The one under the line was the writing, which is the skill I use least and the one nobody in a courtroom has ever asked me for.**',
  '**What was in the answer.** **I do not know and cannot reconstruct it after fourteen years.** ⚠ **That is the honest entry and it is also the warning: Mrs Ajouz rewrote hers in August, nine weeks after the test, and could do it.** **Mine is gone.**',
  '**What it cost under the criterion.** **I cannot say, and that is the point of the note.** ⚠ **A candidate who does not reconstruct the answer within a month has nothing to examine for the rest of their life** — **and I have carried an opinion about my own English since 2009 that rests on a figure I cannot interrogate.**',
  '**What I am not saying.** **That the figure was wrong.** ⚠ **Two strangers read one performance against four criteria and reported it accurately.**',
  '**What I shall do differently.** **Nothing: I am not sitting it again.** ⚠ **But I have written the description in 21.4, which is the document I should have had in 2009** — **and it took forty minutes against six weeks.**',
  '**And the thing I have not resolved.** **The register abroad would still refuse me.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 4, with the writer\'s answer)'));
out.push(SAMPLE([
  '**THE SLIP, unsigned.** **Reader: an interpreter of two years\' standing, reading this note.** **Absent: what to do within a month of a test.** **Criterion — the line copied:** _"A candidate who does not reconstruct the answer within a month has nothing to examine for the rest of their life."_ ⚠ **The note states the finding and gives no instruction, and this is the one sentence in it that another person could act on.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** ⚠ _Rewrite the answer from memory within a week of the test, before the result arrives, and keep it._',
  '**THE WRITER\'S ANSWER.** ⚠ _It is mine, and the clause about the result is better than anything I had: the result changes what you remember writing._ **Accepted.**',
  '**A second slip, unsigned.** **Reader: the translators\' register abroad.** **Absent: any account of the four hundred sittings.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** _A register that requires a certificate and admits no record of practice is measuring the wrong thing._',
  '**THE WRITER\'S ANSWER.** ⚠ _Refused: it is an argument with a rule in a note about my own preparation, and it is 21.7\'s forbidden sentence in advance._ **Not written; the register is named in the last line instead, with no comment attached.**',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two counts and the new band.** **How many could name the four criteria of an examination they had sat?** **Three of ten** — **and the seven should hear it said without comment, because it is a fact about examinations and not about them.** **Then: what did each prepare, and which criterion did it serve?** **Six of ten prepared vocabulary.** ⚠ **Then the band: four of ten supplied sentences refused is the right rate, and a refusal needs no grounds.**'));

// ===================== 21.2 =====================
out.push(pb());
out.push(h2('21.2  One answer, two mark schemes'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Content given, or content yours.** **Eight of ten had never noticed the difference, and the two who had were both sitting two examinations at once** — **and the board wants the ten tasks marked with nothing but those two words, which takes four minutes and does the whole of Stage 1.**'));
out.push(A('**b** Require a position of your own: **2** and **4**. ⚠ **_To what extent_ and _do you agree_.** **1 and 5 hand you the content and ask you to evaluate and select; 3 hands you data and asks for selection and comparison** — **and 3 is the task with no counterpart, which the room will meet properly in 21.5.**'));
out.push(NOTE('⚠ **The cycle is one method and the key marks the method and not the opinions.** **Write the body once; add two sentences for one scheme and two for the other; move the paragraph that buries the position.** **The figure to put on the board is the time: three to nine minutes in this class, and nobody needed a new body.** ⚠ **Then watch for the fault that this cycle creates, because it is new and it is the teacher\'s to catch.** **Three students in this class added both framings to one answer.** **It reads as confusion and not as range** — **and the test is mechanical: a reader given the first and last sentences alone must be able to say which examination the answer is for.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** **Two given points** → ⚠ **comparison plus selection.**   **2** **A statement** → **position in the first sentence, same position in the last.**   **3** ⚠ **A position buried in paragraph three** → **move it; a marker working at speed will not find it.**   **4** **Both framings in one answer** → **strike one.**   **5** ⚠ **Two hundred and seventy-one words** → **safe in one scheme and thin in the other, which is bookkeeping and still costs marks.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**Row 1** **Content given.** ⚠ _Of the two points above, the second is the more useful, because a procedure can be changed by one committee in a term._ **And at the end:** _For that reason I should keep the second and not the first._',
  '**Row 2** ⚠ **Neither framing.** **A data description is marked on selection of the main features and comparison** — **and the room will try to force a position into it, which is the commonest fault of a class that has just learnt the two framings.**',
  '**Row 3** **Content yours.** ⚠ _I agree with the view that certificates have displaced experience, and in this answer I shall say where experience is genuinely harder to read._',
  '**Row 4** ⚠ **Neither framing.** **A review is marked on register, on the recommendation and on whether a reader could act on it** — **which is Unit 16, and the room has written one.**',
  '**Row 5** **The fault, one way.** ⚠ **Both sides and no choice: it answers neither scheme and the room will defend it as balanced, which is the word the whole cycle exists to take away.**',
]));
out.push(S('Stage 3 · Practise (sample – Card B)'));
out.push(SAMPLE([
  '**Row 1** **Content yours.** ⚠ **Position first and last, and the balance inside the position.**',
  '**Row 2** ⚠ **Neither: a report for a named reader, marked on the decision it offers.**',
  '**Row 3** **Content given, and the word _evaluate_ is the giveaway.** ⚠ **Compare, then recommend one in the last sentence.**',
  '**Row 4** ⚠ **Neither: a letter of application, marked on register and on what it points the reader at** — **which is 21.6 and should be named, because a student has written one this week.**',
  '**Row 5** **The fault, the other way.** ⚠ **A position held all the way and a given point untouched** — **and the marker\'s sentence for it is in the dialogue: an excellent answer to a question nobody asked.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('**Rows 2 and 4 on both cards are neither framing**: a data description, a report, a review and a letter are marked on selection, register and the decision offered, **and the room will try to force a position into all four.** ⚠ **Rows 5 are the pair the cycle turns on**: they are the two faults, one each way, **and both are answers nobody asked for.** **Read the marker\'s sentence out after row 5 and not before.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**The answer as written.** **Two hundred and eighty words for the scheme that supplies the content: two given points compared, one selected.**',
  '**Reframed.** ⚠ **Out: the comparison sentence and the selection.** **In:** _I agree that a single figure is the only workable shortcut, and in this answer I shall say what it costs._ **And the same position at the end.**',
  '**The paragraph I moved.** **Paragraph three to paragraph one.** ⚠ **The position had been in the middle of it.**',
  '**Time.** **Six minutes.** ⚠ **b** **My partner read the first and last sentences and named the scheme correctly, and then found that I had left the word _of the two_ in paragraph two, which is the old framing showing through.**',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mrs Ajouz brought one answer of two hundred and seventy-one words, rewritten from memory, and had it marked against both schemes in this class: under the one it loses on the first criterion because she never took a position, and under the other it loses on content because she never compared the two points she had been given, and both markers wrote almost the same sentence about it. Mrs Khoury said the first scheme gives you the content, two or three printed points with a line of somebody\'s opinion under each, and the task is to take two of them and handle them, comparing, evaluating and selecting, with a conclusion that actually chooses, and your own opinion is welcome and is not the thing being marked. Mr Attar asked about the other, and it gives a statement and asks how far you agree, so the content is yours and the criterion is whether you take a position and hold it from the first sentence to the last. Mrs Tarabishi said hers went the other way, a strong position held all the way and the second given point ignored, and the marker\'s note was that she had written an excellent answer to a question nobody had asked. Mrs Oueidat said so the two are opposite, and Mrs Khoury said they are not opposite and the room will want them to be, because the English is the same English and one place differs, which is where the content comes from. Dr Qabbani asked about the length, and that is bookkeeping and costs marks anyway: one counts the words and deducts below the figure it names, and the other gives a range and marks short answers through the content. Mr Shihabi said two answers, then, and Mrs Khoury said one answer and two added sentences, which is the whole method: write the body once, and for the one add a comparison and a selection, and for the other add a position in the first sentence and the same position in the last. Mr Tayara asked what happens if you add both, and Mrs Oueidat said then you have selected between two points nobody gave you, or asserted an opinion and never touched the input, and adding both reads as confusion rather than as range. Mrs Rizk asked how long the switch takes, and about four minutes, timed. And Mrs Ajouz said the thing she will take away is the marker\'s sentence about Mrs Tarabishi\'s answer, which is both of their faults in one line and is never a fault of English.']));
out.push(A('⚠ **The report contains the only sentence from this unit that students quote back a year later, and it is a marker\'s.** **_An excellent answer to a question nobody asked._** **It is the fault in both directions and it is never a fault of English** — **and the room should be asked which of the two directions is theirs, because almost everybody has one.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**1** ⚠ **Both framings in one answer** → **three of ten; confusion, not range.**   **2** **The position buried in paragraph three** → **a marker at speed will not find it.**   **3** ⚠ **A position forced into a data description or a report** → **rows 2 and 4.**   **4** **_Balanced_ defended as a virtue** → **it is the word the cycle takes away.**   **5** ⚠ **A new body written for the second scheme** → **nobody needed one.**   **6** **The old framing left showing** → **_of the two_ in a position answer.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because she had been given two printed points and used neither.** **The body of the answer is about a third point of her own, which is interesting and is not the task** — **and the loss is on content and not on language, which is the distinction the cycle exists to make.**'));
out.push(A('**2** ⚠ **Where the content comes from.** **One prints the points and marks how they are handled; the other prints a statement and marks whether a position is held** — **and everything about paragraphs, register and accuracy serves both without alteration.**'));
out.push(A('**3** ⚠ **Four minutes, timed, and one paragraph moved.** **She thinks the reframed answer is better than either original because a sentence that has to select, or a sentence that has to hold, forces the paragraphs under it to be about something** — **and the hedge _I think_ is the honest part of that and should be left in.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**The answer.** **Two hundred and eighty words, four paragraphs, written for the faculty\'s practice paper.**',
  '**Marked against the scheme that supplies the content.** **It loses nothing: it was written for that scheme.** ⚠ **The two given points are both handled and the last sentence selects.**',
  '**Marked against the scheme that asks for a position.** **It loses on the first criterion.** ⚠ **There is no position anywhere: the selection is between two points of somebody else\'s, which is not the same thing and reads as evasion.**',
]));
out.push(S('Stage 7 · Write freely (sample, 283 words)'));
out.push(SAMPLE([
  '**R. TARABISHI** · _one answer, two mark schemes_ · _with the four added sentences_ · **4 October**',
  '**The answer.** **Two hundred and eighty-six words, four paragraphs, written in forty minutes for the scheme that asks for a position.** ⚠ **A position in the first sentence, the same position at the end, and two objections answered in the middle.**',
  '**Marked against the scheme that asks for a position.** **It loses almost nothing, and the one loss is paragraphing.** ⚠ **My third paragraph answers two objections and should be two paragraphs, which is a cohesion matter and not a position one.**',
  '**Marked against the scheme that supplies the content.** **It loses on content, heavily.** ⚠ **I was given three printed points with an opinion under each, and my answer uses one of them as a prompt and ignores the other two** — **and the marker\'s note was that I had written an excellent answer to a question nobody had asked, which is the sentence of this unit.**',
  '**The one place the two genuinely differ.** **Where the content comes from.** ⚠ **Not the register, not the length, not the accuracy, not the organisation** — **and I had believed for two years that the other scheme wanted a more academic style, which is a belief I got from a preparation book and never tested.**',
  '**The two sentences for the content-given scheme.** _Of the two points above, the second matters more, because a procedure can be altered by a committee in a term where a public habit cannot._ **And:** _I should therefore keep the second and let the first go._',
  '**The two sentences for the position scheme.** _I agree that a single figure is the only workable shortcut, and I shall say what it costs._ **And:** _My position is unchanged, and the cost is the one in paragraph three._',
  '**What the switch took.** **Seven minutes and one paragraph split.** ⚠ **And my partner found the words _of the two_ still standing in paragraph two, which is the old framing showing through a new frame.**',
  '**And the thing I had not expected.** **The two added sentences for the content scheme are the hardest two sentences I have written in English.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 4, with the writer\'s answer)'));
out.push(SAMPLE([
  '**THE SLIP, unsigned.** **Reader: a candidate preparing for both examinations.** **Absent: why the selection sentence is hard.** **Criterion — the line copied:** _"the hardest two sentences I have written in English."_ ⚠ **The note ends on the claim and does not say what makes them hard, and that is the one thing a reader in the same position needs.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** ⚠ _They are hard because selecting between two points of somebody else\'s requires a criterion, and I had never been asked to state one._',
  '**THE WRITER\'S ANSWER.** ⚠ _It is mine and it is the sentence the note was reaching for._ **Accepted, as the last line.**',
  '**A second slip, unsigned.** **Reader: the preparation book\'s author.** **Absent: which page the belief about academic style came from.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** _The belief came from page 14 of a book I have never checked against a published descriptor._',
  '**THE WRITER\'S ANSWER.** ⚠ _Refused: I do not know that it was page 14 and I shall not invent a citation in a note about evidence._ **Replaced with: _a belief I got from a preparation book and never tested, and I cannot now say which._**',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two counts and the band.** **How long did the switch take?** **Three to nine minutes, and nobody needed a new body** — **and four of ten found the reframed version was the better answer, which should be said and not explained away.** **Then: how many answers had both framings in them?** **Three, and all three readers called it confusion and not range.** ⚠ **Then the marker\'s sentence, and which direction each student\'s fault runs in.**'));

// ===================== 21.3 =====================
out.push(pb());
out.push(h2('21.3  The descriptor, and the sentence that earns it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **A phrase read out exactly, and then a sentence of their own read aloud.** **Seven of ten produced a judgement about themselves and had to be asked again** — **and the second column of the board stays empty until somebody supplies a sentence, which is worth waiting out in silence because the silence is the finding.**'));
out.push(A('**b** Evidence: **2** and **4**. ⚠ **A quoted sentence with a reason, and a count of nineteen sentences.** **1, 3 and 5 are judgements** — **mine, mine, and somebody else\'s** — **and the room should be asked what an examiner could do with any of the three, which is nothing at all.**'));
out.push(NOTE('⚠ **This cycle is the hinge of the unit and it fails in one way: students will tick phrases without writing the sentence out.** **Insist on the sentence, copied, in full.** **Half the ticks do not survive being copied, and that minute is the most useful in the exercise.** **The average in this class was four sentences for seven phrases, the best was six** — ⚠ **and the figure to watch for is the student who claims seven, which has happened twice in the series and both times the sentences were paraphrases of the descriptor rather than quotations from the script.** **Ask such a student to read the sentence and the phrase one after the other, aloud, and let the room hear the resemblance.**'));
out.push(NOTE('⚠ **Protect the disproof, which is this cycle\'s invention and the hardest thing in it.** **A sentence can disprove a phrase: four paragraphs opening with _however_, _moreover_, _in addition_ and _furthermore_ is a range of cohesive devices deployed by position rather than by meaning, and it is evidence against the phrase.** **Two students in this class found one.** ⚠ **A disproof is worse than a gap and more useful than either, and it is found only by this method** — **so when one appears, stop the lesson, put it on the board, and let the writer say out loud that it is in their own handwriting.** **Then say that nobody is to look for one in somebody else\'s script.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** _My grammar is accurate_ → ⚠ **judgement.**   **2** _Eleven of nineteen sentences have no error_ → **evidence, and the honest entry names who counted.**   **3** ⚠ _I use good linking words_ → **judgement, and usually a disproof waiting to be found.**   **4** _Paragraph three: the conditional_ → **evidence.**   **5** ⚠ _This phrase has no sentence_ → **evidence, of the most useful kind, and the room will hear it as a confession.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**Row 1** **Earned.** ⚠ _Examinations are used to select candidates for registration, and the question is how far that use is justified._ **Paragraph one names both parts of the task.**',
  '**Row 2** ⚠ **Disproved.** **The four mechanical paragraph openings** — **and _however_ at the head of paragraph two contradicts nothing in paragraph one, which is the detail that makes it a disproof rather than a weakness.**',
  '**Row 3** **Earned.** ⚠ _Had the registration board been able to read the eleven queries, the question of the certificate would not have arisen._ **One inversion, doing work.**',
  '**Row 4** ⚠ **Disproved.** **Paragraph three contains two ideas and paragraph four contains none** — **and the room should be made to say which of the two is the worse fault, which is the empty paragraph.**',
  '**Row 5** **Nothing at all.** ⚠ **The phrase belongs to a task the writer has not attempted** — **and the honest entry is that, and not a guess.**',
]));
out.push(S('Stage 3 · Practise (sample – Card B)'));
out.push(SAMPLE([
  '**Row 1** **Nothing.** ⚠ **Four paragraphs, two each way, and a summary that both views have merit** — **and _merit_ is not an extent.** **The job: a position first and last.**',
  '**Row 2** ⚠ **Disproved, and this is the entry that corrects the writer.** **_Plethora_ and _myriad_ in an answer about selection procedures, both out of a list** — **the first half of the phrase met and the second failed.**',
  '**Row 3** **Earned, on a partner\'s reading: eleven of nineteen.** ⚠ **And the writer cannot mark this one, which must be said in the entry.**',
  '**Row 4** ⚠ **Disproved: the empty paragraph again, from the other side.**',
  '**Row 5** **Nothing.** ⚠ **The same finding as Card A row 5 and the room will take several minutes to accept it** — **because a phrase with no sentence feels like a failure and is in fact a task that has not been set.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('**Rows 2 and 4 on both cards are disproved by a sentence in the sample** — **the four mechanical openings, the two list words, one paragraph with two ideas and one with none.** ⚠ **Rows 5 are the pair from the other paper**: nothing in the sample answers them at all, **and the honest answer is that the phrase belongs to a task the writer has not attempted**, which is 21.5 and should be named and left.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**1 · Addresses all parts of the task.** **Earned.** ⚠ _The faculty requires evidence of English and this page is that evidence._',
  '**2 · Presents a clear position throughout.** **Nothing.** **The job: a position first and last.**',
  '**3 · A range of cohesive devices used appropriately.** ⚠ **Disproved: three paragraphs begin with _furthermore_.**',
  '**4 · A variety of complex structures.** **Earned: the concessive in paragraph two.**',
  '**b** ⚠ **My partner struck entry 1, because the sentence I had quoted is a paraphrase of the phrase and not a sentence from my answer.** **Three jobs: the position, the openings, and one sentence I cannot mark myself.**',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mrs Ajouz has taken the descriptors apart: seven phrases for the band she needs, four of them with a sentence of hers beside them, and three with nothing at all, which are a clear position held throughout, cohesive devices used appropriately, and less common items used with some awareness of style. Mrs Khoury asked about the fourteen months of vocabulary, and Mrs Ajouz said this is the part she did not expect and will say plainly, because in the first cycle she had said her vocabulary was the one thing that did not need the work, and that was wrong: the phrase has no sentence, not because the words are missing but because they are in the wrong register, since she has plethora and myriad in an answer about selection procedures and both came out of a list. Mr Attar said so the hours were not wasted, and Mrs Khoury said the hours were on the right criterion and did the wrong thing, which is a different and more useful finding, because a list gives you items and the descriptor asks for items used with awareness of style, which a list cannot build. Mrs Oueidat said the phrases read like clauses, and they are clauses and can be read two ways, which is 19.1 arriving in a document about her: she had read a range of cohesive devices used appropriately as a range, and the examiner reads it as appropriately, and her four paragraphs begin with however, moreover, in addition and furthermore. Dr Qabbani said that is four devices in four places, and Mrs Khoury said it is a range deployed mechanically, which is the commonest thing a marker sees, and it is evidence against the phrase rather than for it. Mrs Tarabishi asked about the four that did have sentences, and they were read out with the phrase beside each, and the whole answer took forty minutes, which told her more than the ninety hours did. Mr Shihabi asked whether anybody can do this without a marker, and anybody can and almost nobody does, because it requires your own script, which is not returned, so you write the answer again from memory. Mr Tayara asked what you do with the three gaps, and they are the plan and they are three jobs and not ninety hours. Mrs Rizk asked whether the gap has to be said out loud, and Mrs Oueidat said said flat, as a gap, because a verdict about a person cannot be worked on where a gap can be closed on Tuesday. And Mrs Ajouz said the descriptors were published the whole time, four pages, free, for fourteen months, and she had read them four times and never once put them beside a sentence of her own.']));
out.push(A('⚠ **The report corrects a sentence Mrs Ajouz said in 21.1 and the room must see that the correction came from evidence and not from a change of mind.** **In 21.1 she said her vocabulary was the one thing that did not need the work.** **The inventory shows the phrase has no sentence** — **the words are present and in the wrong register** — **so the ninety hours were on the right criterion and did the wrong thing, which is a more useful finding than either of the two it replaces.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**1** ⚠ **The phrase ticked and no sentence written** → **half the ticks do not survive copying.**   **2** **The descriptor paraphrased and offered as the sentence** → **read both aloud.**   **3** ⚠ **A judgement in an inventory** → **no examiner has ever marked one.**   **4** **Seven of seven claimed** → **twice in the series, both times paraphrases.**   **5** ⚠ **The gap stated as a weakness of the person** → **a verdict cannot be worked on.**   **6** **The error count marked by the writer** → **name who counted, or leave it.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The published descriptors, four pages, and her own answer rewritten from memory** — **phrase by phrase, in order, with the sentence written out beside each one or the space left empty.** **Forty minutes, against the ninety hours, and the comparison is the note.**'));
out.push(A('**2** ⚠ **Because her own writing disproves it rather than leaving it unanswered.** **The four paragraph openings are a range deployed by position rather than by meaning, and _however_ at the head of paragraph two contradicts nothing before it** — **so a marker reading for that phrase finds evidence against her, which is worse than finding none.**'));
out.push(A('**3** ⚠ **Entry 6 corrects what she said in 21.1 about her vocabulary.** **_Plethora_ and _myriad_, in an answer about selection procedures, both out of a list** — **and the job is to take them out and put in the register of the subject: _eligibility_, _component_, _compensation_, which she uses at work every day and had not thought of as vocabulary.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**How this was done.** **The published descriptors for the band the faculty asks for, and my practice answer of 286 words.** ⚠ **Phrase by phrase, with the sentence beside each or the space empty.** **Thirty-five minutes.**',
  '**1 · Addresses all parts of the task.** **Earned.** ⚠ _Supervision in this department is conducted in English, and this page is about whether mine is adequate to it._',
  '**2 · Uses paragraphing sufficiently and appropriately.** **Nothing.** ⚠ **My third paragraph answers two objections.** **The job: split it, which takes one line.**',
]));
out.push(S('Stage 7 · Write freely (sample, 282 words)'));
out.push(SAMPLE([
  '**J. ATTAR** · _seven phrases, five sentences_ · _against the practice answer of 2 October_ · **11 October**',
  '**How this was done.** **The published descriptors and my own answer, which I still had because I wrote it in class.** ⚠ **Phrase by phrase, in order, the sentence copied out or the space left blank.** **Thirty minutes, and twelve of those were spent on one phrase.**',
  '**1 · Addresses all parts of the task.** **Earned.** ⚠ _The question is whether a single figure serves a reader with eighty files, and whether anything else could._ **Both parts, in the first sentence.**',
  '**2 · Presents a clear position throughout.** **Earned, narrowly.** ⚠ **The position is in the first sentence and the last and disappears in paragraph three, where I answer an objection and forget to come back** — **and I have marked it earned because a marker would find it twice, which is the honest entry and not a generous one.**',
  '**3 · A range of cohesive devices used appropriately.** **Disproved.** ⚠ **_Moreover_ opens paragraphs two and three and adds nothing to either** — **and I have used _moreover_ in every examination answer I have written since school, about forty of them, without once asking what it was doing.**',
  '**4 · A variety of complex structures.** **Earned.** _Were the figure accompanied by any commentary at all, the over-reading its users are blamed for would be harder to perform._',
  '**5 · Frequent error-free sentences.** **Not mine to mark.** ⚠ **Mrs Tarabishi found four errors in twenty-two sentences and I have left her count in her words.**',
  '**6 · Less common items with awareness of style.** **Nothing.** ⚠ **I have no less common items at all: the longest word in the answer is _commentary_** — **and that is a gap and not a disproof, which is the better of the two to have.**',
  '**7 · Logically organises information.** **Earned.**',
  '**What the inventory gives me.** **Two jobs: _moreover_, and the register of my own field.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 4, with the writer\'s answer)'));
out.push(SAMPLE([
  '**THE SLIP, unsigned.** **Reader: a marker who has the whole answer in front of them.** **Absent: what happens to entry 2 if the marker reads paragraph three first.** **Criterion — the line copied:** _"the position disappears in paragraph three."_ ⚠ **The inventory marks it earned on the ground that a marker would find it twice, and a marker who begins in the middle finds it nowhere.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** ⚠ _Earned on two sentences out of five paragraphs, which is thin, and the job is a clause in paragraph three rather than a rewrite._',
  '**THE WRITER\'S ANSWER.** ⚠ _It is mine, and it turns one entry into a third job, which is what I was avoiding._ **Accepted.**',
  '**A second slip, unsigned.** **Reader: the writer in a year\'s time.** **Absent: the forty answers with _moreover_ in them.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** _I have been writing the same paragraph opening for eleven years and nobody has ever mentioned it._',
  '**THE WRITER\'S ANSWER.** ⚠ _Refused: the eleven years are in the entry already and the sentence adds a grievance about teachers, which is not what the inventory is for._ **Not written.**',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two counts and the band.** **How many phrases out of seven had a sentence?** **An average of four, the best six** — **and two students found a disproof, which is the most valuable finding in the unit and is read aloud by its writer.** **Then: how many jobs did each gap produce, and how long is each?** **Nobody needed more than a fortnight.** ⚠ **Then the four free pages, read four times in fourteen months and never put beside a sentence.**'));

// ===================== 21.4 =====================
out.push(pb());
out.push(h2('21.4  What my English is, without a level'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and stop every student at the first level, year or certificate. ⚠ **Eight of ten named a level in the first sentence and six gave years of study.** **The board stays empty until somebody names a document, which took four minutes in this class** — **and the four minutes of silence are the cycle, so do not fill them and do not rescue anybody.**'));
out.push(A('**b** Survive with no certificate: **2** and **4**. ⚠ **A volume of reading with the writing that comes out of it, and fourteen years of a practice with the absence of an examination stated.** **1, 3 and 5 are a level, a length of teaching and an impression** — **and all three vanish if the paper is withdrawn, which can be demonstrated in ten seconds and is not comfortable.**'));
out.push(NOTE('⚠ **The limit is the hard part of this cycle and the room will resist it for the whole ninety minutes.** **A description with no limit in it reads as a claim, and a reader who has seen one honest limit stops looking for the dishonest ones.** **Say that, and then protect the limit from being an apology** — **_I cannot follow a conference talk without the slides_ is a fact, and said quickly it becomes a request for reassurance, and reassurance destroys the description because the reader has been asked to disagree with the writer about themselves.** ⚠ **Practise the delivery, flat, twice, out loud.** **In this class three students needed three attempts each and all three heard the difference on the recording before they heard it in the room.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **A volume: thirty-one dossiers, four hundred sittings, sixty papers.**   **2** **What you write, and to whom: eleven queries, four manufacturers.**   **3** ⚠ **What you do with people, with a figure: a call a fortnight, one six-minute account.**   **4** **One limit, flat.**   **5** ⚠ **The level, last and in its own line, as a fact about a file** — **and the room will put it first again on the next draft, which is worth predicting out loud.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**Row 1** **Does not survive.** ⚠ **Rewritten:** _I read about sixty papers a year in English and have written one abstract; the abstract is at annexe 1._',
  '**Row 2** ⚠ **Survives, and the part doing the work is the absence** — **fourteen years of a practice with no examination in it, which is a stronger sentence than any certificate would be and the room will not believe that until it is read twice.**',
  '**Row 3** **Does not survive.** ⚠ **Twelve years measures the teaching.** **Rewritten as a volume: what was read in those years, and what was written.**',
  '**Row 4** ⚠ **Survives, and it carries both a volume and a limit** — **which is the complete shape and should be marked as the model row of the card.**',
  '**Row 5** **_I am fluent_ has nothing in it at all.** ⚠ **The room will try to rescue it by adding a volume** — **and the useful observation is that there is nothing to add it to, because the sentence names no activity.**',
]));
out.push(S('Stage 3 · Practise (sample – Card B)'));
out.push(SAMPLE([
  '**Row 1** **Does not survive: an impression with an adverb in it.**',
  '**Row 2** ⚠ **Survives.** **A volume and a lopsidedness, and the lopsidedness is information: it tells a supervisor what to give the writer and what not to.**',
  '**Row 3** **Does not survive.** ⚠ **An intensive course in 2019 is a receipt.**',
  '**Row 4** ⚠ **Survives: two volumes and a named reader, and the recall notices can be opened.**',
  '**Row 5** **_I can read anything but I cannot write_ is half a description** — ⚠ **a limit with no volume, which is the commoner half and the one the room is most willing to say.** **Ask why the limit comes more easily than the volume.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('**Rows 2 and 4 on both cards survive already, and the room must name which part carries them** — **a volume in three of the four and a limit in the fourth.** ⚠ **Rows 5 are the pair the cycle turns on**: _I am fluent_ has nothing in it at all, **and _I can read anything but I cannot write_ has a limit and no volume, which is half a description and the commoner half.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**What I read in it.** **About sixty papers in the last year, of eight to thirty pages, and the three handbooks for the method.** ⚠ **A thirty-page paper takes me about ninety minutes with the glossary.**',
  '**What I write in it.** **One conference abstract, two hundred and forty words, accepted.** ⚠ **And nothing else longer than a page since 2021.**',
  '**What I do in it with people.** **One seminar question a month, and I have never chaired anything in English.**',
  '**The limit.** ⚠ **I cannot write continuous prose at length and my supervisor will find that out in week three.**',
  '**b** ⚠ **My partner applied the test and every sentence survived, because there is no certificate in it anywhere.** **The sentence she would act on is the abstract, because it is the only thing anybody can open.**',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda asked the room to say what their English is without a level, and Mrs Ajouz said she reads thirty-one product dossiers a year of between forty and ninety pages and writes the queries that come out of them, eleven last year to four manufacturers and two recall notices, and that she cannot follow a conference talk without the slides, which she found out in Beirut in 2022. Mrs Khoury said that is the cycle done in two sentences, documents, a volume and a limit and no label anywhere, and the room should notice what the volume does, because thirty-one dossiers is a fact a reader can weigh where I read a lot of technical material can be written by somebody who reads none. Mrs Oueidat said she has no certificate at all: fourteen years of interpreting in court and no examination since 2009, and what she has instead is a list of about four hundred sittings, two hundred and seventy of them criminal, and the certificates of accuracy she signs. Mr Attar asked whether a certificate would help her, and it would help a reader who does not know what a court interpreter does and would tell them less than one sitting would, and she is not against the number. Dr Qabbani asked about years of study, and Mrs Khoury said years of study measure the teaching and not the English, and six of ten in the room offered them. Mrs Tarabishi said hers is almost all reading, four hundred papers for the literature review and sixty in the last year and one conference abstract, which is a lopsided description and is hers, and the lopsidedness is the useful part because it tells a supervisor what to give her. Mr Shihabi asked whether a limit does not harm you, and Mrs Khoury said a limit named is the thing that makes the rest believable, because a description with no limit reads as a claim. Mr Tayara asked where the level goes, and last, if at all, and in a line of its own. Mrs Rizk asked how you know the description is any good, and Mrs Oueidat gave the test: would every sentence still be true if the certificate were withdrawn tomorrow. And Mrs Ajouz said the thing she will take away is that nobody in fourteen months of preparation had asked her a single question about what she actually does in English, including herself, because Mrs Tarabishi had asked her how long one dossier takes and it is about two hours for ninety pages with the monograph open beside it, which she had never timed.']));
out.push(A('⚠ **The last sentence of the report is the finding of the cycle and it is about the whole series, not about Mrs Ajouz.** **Nobody in fourteen months of preparation had asked her a single question about what she actually does in English, including herself** — **and the room should be asked the same question about their own preparation, and given time to answer it.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**1** ⚠ **The level in the first sentence** → **eight of ten.**   **2** **Years of study** → **they measure the teaching.**   **3** ⚠ **A volume with no source** → **it becomes a claim.**   **4** **The limit said quickly** → **an apology, and it invites reassurance.**   **5** ⚠ **The lopsidedness smoothed out** → **a balanced description that is untrue says nothing.**   **6** **No limit at all** → **the description reads as a claim throughout.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Nothing in continuous prose longer than a page since 2016, apart from two examination answers.** **The two gaps are the same gap because the examination found the thing her working life had not required of her for eight years** — **and she had been treating the examination gap and the working gap as two separate facts about herself.**'));
out.push(A('**2** ⚠ **She cannot follow a conference talk without slides; she has never written anything intended for publication; and she has never had to defend a document of hers in English in a room with somebody who disagreed.** **The third is the one she calls the thing she is least able to do** — **and it is the whole of Book 2, which should be said and then left alone.**'));
out.push(A('**3** ⚠ **_I shall sit the test again in January and the registration file needs 7.0 in writing._** **She says the page is worth writing because nothing above that line changes whether the number arrives or not** — **which is the test of the cycle, and she had not understood it in June.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**What I read in it.** **About nine supplier catalogues a quarter and the product inserts, which are the hardest reading I do.** ⚠ **An insert is four hundred words and takes me twenty minutes.**',
  '**What I write in it.** **Two orders a month and about fifteen short messages to representatives.** ⚠ **Nothing longer than a hundred words in eleven years.**',
  '**What I have not written in it.** **Anything that anybody keeps.**',
]));
out.push(S('Stage 7 · Write freely (sample, 283 words)'));
out.push(SAMPLE([
  '**F. ZAHREDDINE** · _what my English is_ · _written with no level in it_ · **18 October**',
  '**What I read in it.** **Two standards a month, of between forty and two hundred pages, and the manufacturers\' technical sheets that go with them.** ⚠ **About thirty sheets a month, of a page or two each.** **And four expert statements by other engineers last year, three of them against mine.**',
  '**How long a standard takes me.** **A two-hundred-page standard is a week of evenings and I do not read it through.** ⚠ **I read the clause I need and the definitions it depends on, which is about nine pages, and that takes two hours** — **and I had never described my own reading that way until this exercise.**',
  '**What I write in it.** **Four expert statements last year, of between nine hundred and four thousand words.** ⚠ **Twenty-six letters to solicitors.** **And the scope paragraph, which I have written forty-one times since Unit 19 and which is the single thing in my English that has changed this year.**',
  '**What I do in it with people.** **One examination in court in English, in 2023, for three hours.** ⚠ **It went badly and the reason it went badly is in 19.1.** **About a call a week with a loss adjuster in Dubai, which is the easiest English I do and the only part I enjoy.**',
  '**The limits, and there are two.** **I cannot write quickly: four thousand words took me eleven evenings.** ⚠ **And I cannot argue in English at speed** — **which is a different limit from the first and is the one that cost me the three hours in court, and it is not a vocabulary matter.**',
  '**What a reader can do with this.** **Give me a document and a fortnight.** ⚠ **Do not put me in a room with an advocate and a deadline on the same day** — **and if that cannot be avoided, give me the questions in writing the week before, which any court will do if asked and which I did not know in 2023.**',
  '**And the line about the certificate.** **I have none and nobody has asked me for one in nineteen years.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 4, with the writer\'s answer)'));
out.push(SAMPLE([
  '**THE SLIP, unsigned.** **Reader: a solicitor instructing him for the first time.** **Absent: what the fortnight is for.** **Criterion — the line copied:** _"Give me a document and a fortnight."_ ⚠ **A solicitor reading that will assume the fortnight is slowness, and the note says elsewhere that it is eleven evenings of writing.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** ⚠ _A four-thousand-word statement is eleven evenings of writing, and the fortnight is the writing and not the thinking._',
  '**THE WRITER\'S ANSWER.** ⚠ _It is mine, and it moves a figure from the middle of the note to the place where it is needed._ **Accepted.**',
  '**A second slip, unsigned.** **Reader: the writer, before the court appearance of 2023.** **Absent: the request for the questions in writing.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** _Ask for the questions in writing a week before, which any court will do._',
  '**THE WRITER\'S ANSWER.** ⚠ _It is mine and it is already in the last paragraph, where it belongs, and putting it twice would make the note a complaint about 2023._ **Refused, and the reader agreed on reading the paragraph again.**',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two counts and the band.** **How many descriptions named a level in the first sentence before the cycle?** **Eight of ten, and the eight first sentences are struck on the board.** **Then: which sentence would a reader act on?** **A volume in six cases, a limit in three, and in one case nothing at all.** ⚠ **Then the test, applied to every description in the room: would every sentence survive the certificate being withdrawn tomorrow?**'));

// ===================== 21.5 =====================
out.push(pb());
out.push(h2('21.5  The same English, the other examination'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **One task type from each paper, and whether they could do the other one tomorrow with no preparation.** **Seven of ten could do most of the other paper tomorrow, and all ten named the same two things they could not** — **and writing those two on the board before anybody opens a task list is the cycle\'s whole claim, proved by the room in four minutes.**'));
out.push(A('**b** No counterpart at all: **2** and **4**. ⚠ **The data description and the two-minute turn.** **1, 3 and 5 all cross: multiple matching is matching information to paragraphs, a multiple-choice interview is a multiple-choice section, and sentence completion is sentence completion with a word limit over it** — **and the room should be told that the names differ and the listening does not.**'));
out.push(NOTE('⚠ **The cycle has exactly four findings and the key asks the teacher to write them on the board and refuse everything else.** **Two tasks with no counterpart: the data description and the two-minute turn, in one direction, and the transformation and the collaborative task in the other.** **Two habits this course itself built: the paraphrase, which scores nothing in a completion item, and the partner, which earns a courteous nothing from an examiner.** ⚠ **Everything else the room produces will be an impression about two examinations from one or two attempts, and this key will not support it.** **The sentence to use, out loud, is Mrs Khoury\'s: it has taught two good habits that are wrong in one room, which is not the same as two bad habits** — **because the first can be switched off in a sentence and the second would have to be unlearnt.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** **Multiple matching** → ⚠ **moves; matching information to paragraphs.**   **2** **The data description** → **no counterpart, and a third of that writing component.**   **3** ⚠ **Sentence completion** → **moves, with a word limit and spelling over it.**   **4** **The collaborative task** → **no counterpart, in the other direction.**   **5** ⚠ **_Not Given_** → **moves from 19.4 and from nowhere else in either paper.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**Row 1** **Counterpart: matching information to paragraphs.** ⚠ **Bookkeeping: forty questions in sixty minutes with no transfer time, against fifty-six in ninety.**',
  '**Row 2** ⚠ **No counterpart.** **Nothing in the other paper tests grammar directly at all** — **and the room should notice that this is the one non-transfer that costs a transferring candidate nothing, because a skill nobody tests is a skill nobody can fail.**',
  '**Row 3** **Counterpart: sentence completion.** ⚠ **Bookkeeping: the word limit, the spelling, and ten minutes afterwards to copy the answers across.**',
  '**Row 4** ⚠ **No counterpart.** **Fifteen minutes in pairs against eleven to fourteen alone** — **and this is where the second habit costs marks.**',
  '**Row 5** **A cousin and no twin.** ⚠ **The gapped text is a cohesion task and the other paper has nothing of the kind** — **and the room will want to pair it with matching headings, which tests a different thing and should be looked at side by side for thirty seconds and then separated.**',
]));
out.push(S('Stage 3 · Practise (sample – Card B)'));
out.push(SAMPLE([
  '**Row 1** **Counterpart: a multiple-choice section.** ⚠ **The listening is the same listening and the names differ.**',
  '**Row 2** ⚠ **No counterpart, and this is the one that matters.** **A hundred and fifty words in twenty minutes about a chart, carrying a third of the component, because the essay counts twice** — **and most candidates in this class have attempted it fewer than five times.**',
  '**Row 3** **Counterpart: the essay, with the two sentences from 21.2.**',
  '**Row 4** ⚠ **No counterpart: the two-minute turn, alone, from a card, with one minute to prepare** — **and the room should be asked when any of them last spoke for two minutes without being interrupted, which in this class was nobody within a year.**',
  '**Row 5** **_True_, _False_ or _Not Given_.** ⚠ **It is 19.4 in an examination room and the room must say so in those words** — **and _False_ for _Not Given_ is concluding from silence, which this course spends six cycles forbidding.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('**Rows 2 and 4 on both cards have no counterpart**: the transformation, the data description, the collaborative task and the two-minute turn, **and those four are the whole of the non-transfer.** ⚠ **Rows 5 are the pair that matter**: the gapped text has a cousin and no twin, **and _Not Given_ is 19.4 in an examination room**, which the room should be made to say in those words rather than hear from the front.'));
out.push(S('Board – the two papers, mapped'));
out.push(A('⚠ **Run this at 21.5 Stage 2a with the first two columns filled and the third empty.** **The room fills the third.** **Nobody is to fill a row for a paper they have not sat** — **and the four rows with _none_ in the third column are the only four things this cycle claims, so leave the table on the board for 21.6 and 21.7.**'));
out.push(table(['THE TASK', 'ITS COUNTERPART', 'WHAT DIFFERS, OR NONE'], [
  ['**Reading parts 5–8**', '**Matching, opinion and detail items**', '⚠ **40 items in 60 minutes, no transfer time**'],
  ['**Reading parts 1–4**', '**Nothing**', '**None: grammar is not tested directly there**'],
  ['**Nothing here**', '**_True_, _False_ or _Not Given_**', '⚠ **19.4: a finding about absence of evidence**'],
  ['**Writing Part 1, the essay**', '**The 250-word essay**', '**Where the content comes from (21.2)**'],
  ['**Nothing here**', '**The 150-word data description**', '⚠ **None: a third of that component**'],
  ['**Writing Part 2: proposal, report, review**', '**Nothing**', '**None**'],
  ['**Listening, four parts**', '**Four sections**', '⚠ **Word limit, spelling, 10 minutes to transfer**'],
  ['**Speaking, 15 minutes in pairs**', '**11–14 minutes, alone**', '**The partner, and the two-minute turn**'],
], [2, 2, 3]));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**The skill: listening.** **Thirty questions in about forty minutes, against forty in about thirty with ten minutes afterwards to copy them.**',
  '**What moves.** ⚠ **The matching and the completion, which are the same listening under different names.**',
  '**What has no counterpart.** **Labelling a plan, which I have never done.**',
  '**The habit that will cost me marks.** ⚠ **The paraphrase, built by every report stage in this course since Unit 1** — **and in the practice set I wrote _the money ran out_ for _the funding ceased_, which is better English and scores nothing.**',
  '**b** ⚠ **My partner asked how many times I had labelled a plan.** **None.** **Against about two hundred report stages.**',
]));
out.push(S('Stage 4R · Report – the mapping (sample)'));
out.push(SAMPLE(['Mrs Khoury put the two task lists side by side and said the claim of the cycle is that the English is the same English and the bookkeeping differs: four things do not transfer, two tasks and two habits, and everything else in both papers is reading, listening, writing and speaking. On the reading, eight parts and fifty-six questions in ninety minutes against three passages and forty questions in sixty, with parts five to eight moving across almost whole, because multiple matching is matching information to paragraphs and the cross-text part is an opinion question under another name, while parts one to four have no counterpart at all. Mr Attar asked about the other direction, and Mrs Oueidat said True, False or Not Given, and that this course has one unit of preparation for it and does not know it, because Not Given is a finding about the absence of evidence, which is 19.4, and answering False for Not Given is concluding from silence. Mrs Tarabishi said the writing is where she expected trouble, and Mrs Khoury said it is the one genuine non-transfer: the essay moves across with the two sentences from 21.2, and nothing in C1 Advanced asks anybody to describe a chart, while the other paper has no proposal, no report and no review. Dr Qabbani asked about the third, and Mrs Ajouz said the essay counts twice what the chart task counts and the chart task is a hundred and fifty words in twenty minutes, so the arithmetic is not frightening and the novelty is. Mrs Rizk asked about the listening, and thirty questions in about forty minutes against forty in about thirty with ten minutes afterwards to transfer them, and labelling a plan has no counterpart here. Mrs Ajouz named the first habit, the paraphrase, and Mrs Khoury said a completion item wants the speaker\'s word inside the word limit and spelled correctly, and a paraphrase scores nothing however good, and four of ten in the class wrote three words where the rubric said two. Mr Shihabi asked about the second habit, and Mrs Oueidat said the partner: fifteen minutes in pairs there and eleven to fourteen alone here, with a two-minute turn from a card, and inviting the other person\'s view gets a courteous nothing from an examiner. Mr Tayara said so the course has taught her two bad habits, and Mrs Khoury said it has taught her two good habits that are wrong in one room, which is not the same thing, and both can be switched off in a sentence. And Mrs Ajouz said the thing she will take away is the validity: one certificate does not expire and the other is usually accepted for two years, and her first 6.5 is fourteen months old.']));
out.push(A('⚠ **Two sentences in the report are the ones to carry out of the cycle.** **The first is that the course has taught two good habits that are wrong in one room, which is not the same as two bad habits.** **The second is the validity: a component mark fourteen months old has about ten months left in it** — **and nobody, including the candidate, had looked at the date.** **Ask the room for the date on their own most recent mark.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**1** ⚠ **A verdict about which examination is harder** → **the cycle cannot support it.**   **2** **A counterpart invented for the data description** → **there is none.**   **3** ⚠ **_False_ written for _Not Given_** → **concluding from silence; 19.4.**   **4** **The paraphrase in a completion item** → **better English, no mark.**   **5** ⚠ **The examiner invited to agree** → **a courteous nothing.**   **6** **Three words where the rubric says two** → **four of ten in this class.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The transformation and the collaborative task on one side; the data description and the two-minute turn on the other** — **and within the reading, _True_, _False_ or _Not Given_, which she had been answering wrongly since 2019.** **Four things, and she adds that nobody had told her which four, including the preparation book she bought.**'));
out.push(A('**2** ⚠ **Answering _False_ where the passage is silent** — **which is concluding from silence, and she had been calling it carelessness since 2019.** **The cycle renames it: it is a finding about the absence of evidence, which is the discipline of 19.4, and she has the discipline and had not seen that it applied.**'));
out.push(A('**3** ⚠ **The validity: her first component mark is fourteen months old and the mark is usually read for two years.** **So the board has been refusing her file on a number with about ten months left in it** — **and it changes the plan from an effort into a date, which she calls 20.4 pointed at herself.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Reading.** **Fifty-six questions in ninety minutes, against forty in sixty with no transfer time.** ⚠ **Parts 5 to 8 move across almost whole.** **Parts 1 to 4 have no counterpart.**',
  '**The item I have no preparation for.** **_True_, _False_ or _Not Given_.** ⚠ **It is 19.4 under another name.**',
  '**The habit that will cost me marks.** **The paraphrase, and this course built it.**',
]));
out.push(S('Stage 7 · Write freely (sample, 284 words)'));
out.push(SAMPLE([
  '**N. AJOUZ** · _the mapping, written again in October for two colleagues_ · **25 October**',
  '**What I set out to find.** **Whether the work I have done for one examination counts towards the other.** ⚠ **It counts almost entirely, and the two colleagues I wrote this for had both been told by a preparation book that they would need to start again** — **which is the most expensive untrue sentence in this subject.**',
  '**Reading.** **Fifty-six questions in ninety minutes against forty in sixty, with no transfer time in either.** ⚠ **The last four parts cross almost whole; the first four have no counterpart and nothing there tests grammar directly.** **And the item I had no preparation for is _True_, _False_ or _Not Given_, which is 19.4 and which I had been getting wrong for five years while calling it carelessness.**',
  '**Writing.** **The essay crosses with two sentences.** ⚠ **The data description has no counterpart anywhere in this course: a hundred and fifty words in twenty minutes, carrying a third of the component because the essay counts twice, and I have attempted four in my life.** **That is where my component mark lives and I had never once looked at it.**',
  '**Listening.** **The same listening, with a word limit, spelling, and ten minutes afterwards to copy the answers over.** ⚠ **Labelling a plan is a task I have never attempted.**',
  '**The two habits.** **The paraphrase, which every report stage in this course has built and which scores nothing in a completion item.** ⚠ **And the partner: fifteen minutes in pairs there, and a two-minute turn alone here, with one minute to prepare** — **and I have not spoken for two uninterrupted minutes in English since the recall meeting in March.**',
  '**The bookkeeping nobody had checked.** **My first component mark is fourteen months old and is usually read for two years.** ⚠ **Ten months left, and the plan becomes a date.**',
  '**And what the mapping is not.** **It is not a claim that the two examinations are the same.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 4, with the writer\'s answer)'));
out.push(SAMPLE([
  '**THE SLIP, unsigned.** **Reader: one of the two colleagues sitting the paper in March.** **Absent: what to do about the data description.** **Criterion — the line copied:** _"I have attempted four in my life."_ ⚠ **The note names the gap four times and never says how many attempts would be enough, which is the only question a colleague in March has.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** ⚠ _Attempt one a week under time between now and March, which is twenty, and mark each against the published descriptors as in 21.3._',
  '**THE WRITER\'S ANSWER.** ⚠ _It is mine, and the figure is better than the instruction: twenty is a number they can refuse or halve, and "practise more" is not._ **Accepted.**',
  '**A second slip, unsigned.** **Reader: the preparation book\'s publisher.** **Absent: which book said they would have to start again.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** _The book that told them to start again should be named._',
  '**THE WRITER\'S ANSWER.** ⚠ _Refused: I have not seen the book and am repeating what two people told me, which is 19.5 and not an observation of mine._ **Replaced with: _both had been told by a preparation book, which I have not read._**',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two counts and the band.** **How many times has each student attempted the task with no counterpart?** **Four, two, one and none** — **against ninety hours of vocabulary, and the comparison stays on the board for the rest of the unit.** **Then: which habit will cost you marks?** **Ten named the paraphrase, six the partner, and two found a third of their own, both about timing.** ⚠ **Then the date on everybody\'s most recent mark.**'));

// ===================== 21.6 =====================
out.push(pb());
out.push(h2('21.6  The page for the reader who has eighty files'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Who reads it, how many they read, and how long they spend.** **Nine of ten did not know and Mrs Tarabishi did, because she had telephoned and asked** — **and the fact to put on the board is the asymmetry: five weeks on the application and four minutes on the telephone call that would have reordered it.**'));
out.push(A('**b** For a reader with four minutes: **2** and **4**. ⚠ **One names the requirement by paragraph and the other names the post and a volume in the same sentence.** **1, 3 and 5 ask for an impression, an indulgence and a favour** — **and the room should be asked what any of the three can be ticked against, which is nothing.**'));
out.push(NOTE('⚠ **The cycle turns on a fact the room will not believe, so prove it with the clock rather than asserting it.** **Four minutes, by the clock, and then the reader says the three items from memory with the page face down.** **Seven of ten pages passed; the three that failed all had the number in the second paragraph.** ⚠ **Then handle the objection that will come, which is that hiding the number is dishonest.** **It is** — **and that is 21.7\'s Pair B, where a page with no number at all was set aside as incomplete.** **The rule the unit gives is narrow and defensible: the number goes in the last line, which is neither first nor absent, and a student who wants it elsewhere must say which of those two failures they prefer.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **A faculty: _supervision in this department is conducted in English and this page is about whether mine is adequate to it._**   **2** **A post: _the evidence of professional English required by paragraph 4._**   **3** ⚠ **A registration file: the component and the date, and nothing else.**   **4** **The limit, placed where the reader would find it anyway.**   **5** ⚠ **The last line, as bookkeeping, read flat and quickly.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**Row 1** **Unusable.** ⚠ **Rewritten:** _This page is the evidence of professional English required by paragraph 4; the three items are below._',
  '**Row 2** ⚠ **Usable, and the decision it is built on is a requirement** — **the reader has to decide whether paragraph 4 is satisfied, and the sentence tells her which box it fills.**',
  '**Row 3** **Unusable: an improvement with no measure attached.**',
  '**Row 4** ⚠ **Usable, and the decision is whether the work can happen in English** — **which is a different decision from a requirement and the room should be made to say how.**',
  '**Row 5** **The fault.** ⚠ **A request, and a reader with four minutes cannot tick a request** — **and the room will defend it as politeness, which is exactly what it is and is why it is there.**',
]));
out.push(S('Stage 3 · Practise (sample – Card B)'));
out.push(SAMPLE([
  '**Row 1** **Unusable: a preamble.**',
  '**Row 2** ⚠ **Usable: the post, a volume and the decision in one sentence.**',
  '**Row 3** **Unusable.** ⚠ **_I attach my certificates_ describes the envelope.**',
  '**Row 4** ⚠ **Usable, and it is the strongest first sentence on either card** — **four hundred sittings and an annexe, with no adjective anywhere.**',
  '**Row 5** **The other fault: the number first.** ⚠ **A reader who finds a figure in the first line stops reading, and everything the page was for is below that line** — **and this row and Card A row 5 have the same effect by opposite means, which is the finding of the card.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('**Rows 2 and 4 on both cards are usable and the room must say which decision each is built on** — **two are about a requirement and two about whether the work can happen in English.** ⚠ **Rows 5 are the pair the cycle turns on**: one asks for an impression and one opens with the number, **and both have the same effect, which is that nothing after them is read.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**First sentence.** _This page is the evidence of English required at paragraph 7 of the registration schedule; the three items are below._',
  '**Three items with sources.** ⚠ **Four hundred court sittings, of which the 2024 list is at annexe 1.** **Two hundred and sixty certificates of accuracy, one of which is at annexe 2.** **And the eleven-session assessment of June, at annexe 3.**',
  '**The limit.** **I have written nothing for publication and I do not intend to.**',
  '**The last line.** ⚠ **I hold no language certificate and have sat no examination since 2009.**',
  '**b** ⚠ **My partner read it for four minutes and named the three items.** **And she said the last line is the strongest sentence on the page, which I had put there expecting it to be the weakest.**',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mrs Tarabishi telephoned the admissions office and was told that the reader spends four minutes a file and reads about eighty in a fortnight, and that she is one person with a list of three things to find, and the whole conversation took four minutes after five weeks of work on the application. Mrs Khoury asked what the three were, and that the English is good enough for the supervision to happen in it, that somebody has read something of hers in English, and that there is a number on file if the faculty is ever asked, in that order, with the number third, and she had built the whole page around the number. Mr Attar said so the page is reordered, and Mrs Khoury said the page is ordered by the decision the reader has to take, which is the whole cycle, so the first sentence names the decision and the evidence sits under it and the writer\'s history goes nowhere at all. Mrs Ajouz said hers is a post and not a faculty, and the advertisement says evidence of professional English at paragraph 4 and the certificate is one admissible item of several, which she had not read properly until this week, so her first sentence names the paragraph and the three items are the dossiers, the eleven queries and the two recall notices. Mrs Oueidat asked whether the reader believes the figures, and Mrs Khoury said a reader believes a figure that can be checked and discounts one that cannot, so thirty-one dossiers is a claim and thirty-one dossiers with the list at annexe 2 is evidence, and the annexe will not be opened, which is not the point. Dr Qabbani asked whether the page asks for anything, and Mrs Oueidat said nothing, because a page that ends by hoping for favourable consideration has asked the reader to form an impression, and a reader with four minutes finds items and ticks them. Mr Shihabi asked where the level goes, and last, in a line of its own, as bookkeeping, because a reader who finds a number first stops reading. Mr Tayara said that is a strange place for it, and Mrs Khoury said it is the only honest place for it. Mrs Rizk asked about the limit from 21.4, and one of them, the one the reader would find out in the first month anyway. And Mrs Ajouz said the thing she will take away is the four minutes, because her four earlier versions were built for a reader who does not exist.']));
out.push(A('⚠ **The report ends on four versions of a page written for a reader who does not exist, and that is the sentence to leave the room with.** **Every one of them was built for somebody who would read all of it carefully** — **and the version she is sending has the three items in the first eighty words and could be read standing up.** **Ask who in the room has written such a page, and for which reader.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**1** ⚠ **The page opened on the writer** → **four of the reader\'s four minutes gone.**   **2** **A figure with no source** → **a claim, not evidence.**   **3** ⚠ **A request at the end** → **nothing to tick.**   **4** **The number in the second paragraph** → **three failures of ten.**   **5** ⚠ **The limit omitted** → **the page reads as a claim throughout.**   **6** **Preparation listed as evidence** → **a chief pharmacist has no use for it.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Thirty-one dossiers with the dated list at annexe 2; eleven queries and two recall notices at annexe 3, with the inspector named as a reader of the second; and a call a fortnight plus the six-minute account, with the inspector\'s own note at annexe 4.** **Every figure has somewhere a reader could open** — **and the point is not that the annexes will be opened but that they could be.**'));
out.push(A('**2** ⚠ **Nothing in continuous prose longer than a page since 2016** — **and she names it because the reader would find it in her first month.** **The sentence after it is the one that makes the naming safe: the queries at annexe 3 are the longest continuous English she has written in eight years, so the limit arrives with its own evidence attached.**'));
out.push(A('**3** ⚠ **Open annexe 3 and read nine hundred words of her English about a product she had to recall** — **written in one evening under pressure, which is the condition the post is advertised for.** **That is the whole argument of the page in one sentence, and it asks the reader to do something that takes four minutes.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**What this page is.** **The evidence of English required by paragraph 7 of the registration schedule.** ⚠ **Three items, each with its source.**',
  '**Item one: what I read in English, and how much.** **About sixty papers a year, of eight to thirty pages.** ⚠ **The 2024 reading list is at annexe 1.**',
  '**Item two: what I write in English, and who has read it.** **One abstract of two hundred and forty words, accepted for the Amman conference and read by two referees.**',
]));
out.push(S('Stage 7 · Write freely (sample, 287 words)'));
out.push(SAMPLE([
  '**R. TARABISHI** · _page 2 of the application for doctoral registration_ · _evidence of English_ · **1 November**',
  '**What this page is.** **The evidence that supervision in this department can be conducted in English.** ⚠ **Three items, each with its source, and one limit.** **The certificate position is in the last line.**',
  '**Item one: what I read in English, and how much.** **About sixty papers in the year to September, of between eight and thirty pages, and the three handbooks for the method.** ⚠ **The reading list with dates is at annexe 1.** **A thirty-page paper takes me about ninety minutes with the glossary open.**',
  '**Item two: what I write in English, and who has read it.** **One conference abstract of two hundred and forty words, accepted for the Amman meeting in June and read by two referees.** ⚠ **It is at annexe 2 and it is the only piece of my English that anybody outside this country has assessed.**',
  '**Item three: what I do in English with people.** **A seminar question about once a month, in a department where the seminar is in Arabic.** ⚠ **And one twenty-minute discussion of my method with a visiting researcher in March, whose electronic message about it is at annexe 3 and names the two points she thought were weak.**',
  '**The limit, which you would find in my first month.** **I have written nothing in continuous English prose longer than a page since 2021.** ⚠ **The abstract took me nine evenings** — **and if the first year requires a chapter in English, that is the part I shall be slow at, and I would rather say so now than in week three.**',
  '**What a reader can do with this page.** **Open annexe 3 and read what a researcher who had no reason to be kind thought was weak in my method, in English, in my presence.** ⚠ **It is two hundred words and it is the hardest document in this file.**',
  '**And the certificate position.** **I hold a certificate at one band under the faculty\'s figure, dated March, and I sit the paper again in February.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 4, with the writer\'s answer)'));
out.push(SAMPLE([
  '**THE SLIP, unsigned.** **Reader: the admissions officer, at file sixty of eighty.** **Absent: what happens to the chapter if February goes badly.** **Criterion — the line copied:** _"I sit the paper again in February."_ ⚠ **The page names a date and no alternative, and 20.4 says an alternative needs a date, a figure and a name, or the sentence that there is none.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** ⚠ _If February does not reach the figure, the panel interview at paragraph 9 is the route I shall ask for, and I have not been offered it._',
  '**THE WRITER\'S ANSWER.** ⚠ _It is mine and it is the item 6 of this unit: a route in the schedule that nobody has mentioned to me in two years._ **Accepted, and it goes in the last line.**',
  '**A second slip, unsigned.** **Reader: the visiting researcher of annexe 3.** **Absent: her name.**',
  '**THE SENTENCE I WOULD PUT IN YOUR PLACE.** _The researcher should be named, with her institution._',
  '**THE WRITER\'S ANSWER.** ⚠ _Refused for the page and accepted for the annexe: she is named in the message itself, and naming her in the page would read as borrowing her standing._ **Unchanged.**',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two counts and the band.** **Descriptions against pages: four hundred and ten words against two hundred and eighty** — **and the room should say what came out, which was almost entirely the writer\'s history and which nobody missed.** **Then: after four minutes by the clock, how many readers could name the three items?** **Seven of ten, and the three failures all had the number in the second paragraph.** ⚠ **Then the four minutes and the eighty files, and whose telephone call produced them.**'));

// ===================== 21.7 =====================
out.push(pb());
out.push(h2('21.7  Review & Mediate: a score, a document, and a reader who trusts the wrong one'));
out.push(S('Stage 1 · Get ready – Unit 21 quiz'));
out.push(A('**1** _…not one more than **the others**._   **2** _**Had I known** which criterion it was…_   **3** _The descriptors **have been published for** fourteen months._   **4** _Nothing in the course asks **anybody** to describe a chart._   **5** _A paraphrase scores nothing, **however** good it is._   **6** _The mark is usually accepted **for** two years._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **That the board does not understand what the score measures.** **It is true — nobody there has read the descriptors and the clerk has never seen a script** — **and it tells a roomful of people they are ignorant while asking them to apply a rule in your favour, which is 20.6 with the concession removed.**'));
out.push(NOTE('⚠ **This is the ninth mediation of Book 2 and the one in which the rule is on the applicant\'s side and nobody in the story knows it.** **Item 6 of the schedule admits professional documentation with an endorsement; the one-page summary the clerk works from does not mention documents; and the provision has never been cited since it was written in 2021.** **Do not let the room make the clerk negligent** — **she is applying the rule she was given, which is 18.4, and ninety files have gone the same way.** ⚠ **Then make the room notice whose fault it is not: not the clerk\'s, not the board\'s, not the pharmacist\'s, and not Mrs Ajouz\'s, who spent fourteen months on the only route her summary mentioned.** **A provision nobody cites stops being visible, which is the finding and is in the audio script in the supervisor\'s own words.**'));
out.push(NOTE('⚠ **The second finding is Pair B and it is the harder of the two, because it contradicts what the room has just learnt.** **In 21.6 the number went last.** **On Pair B a page left the number out altogether and the reader set the file aside as incomplete** — **so omission is not honesty, and the unit\'s rule is narrower than the room will have taken it: last, not absent.** ⚠ **Run Pair A first and Pair B second, and after Pair B put the two failures side by side on the board: the number first, which stops the reading, and the number absent, which stops the file.** **A student who prefers one of those two should say which, out loud, and give the reader\'s four minutes as the reason.**'));
out.push(S('Stage 3 · Practise (sample – Pair A, the file and the schedule)'));
out.push(SAMPLE([
  '**The document nobody has read.** ⚠ **The board\'s own schedule of admissible evidence, item 6: professional documentation endorsed by a registered superintendent.** **Written in 2021, never cited.**',
  '**The letters and the date.** **To the clerk, one sentence with the item number and the enclosures.** ⚠ **To the superintendent, a request for the endorsement in item 6\'s own words and with no adjectives in it.** **To whoever maintains the one-page summary, a note that will not help this file.** **And January, which stands whatever the other three do.**',
  '**What must not be said.** _That the board does not understand what the score measures._',
  '⚠ **And the ground, stated for the room: the clerk can act on a numbered item and can act on nothing else** — **not because she is obstructive but because the item number is the only thing in the letter that is inside her power.**',
]));
out.push(S('Stage 3 · Practise (sample – Pair B, the file and the faculty)'));
out.push(SAMPLE([
  '**What is different.** ⚠ **Nothing is missing from the page.** **The three items were there with their sources and the reader set the file aside as incomplete** — **and the room will hunt for an absent document for several minutes, which is the point of the card.**',
  '**The finding.** **The page had no number anywhere.** ⚠ **The reader needed it third and needed it: a file with no figure cannot be put in the pile that goes forward, so it goes in the pile that is asked for more** — **and that pile is read after the others, in the following fortnight, if at all.**',
  '**The repair, and it is 21.6.** _I hold a certificate at one band under the faculty\'s figure, dated March, and I sit the paper again in February._ ⚠ **Last line, as bookkeeping.**',
  '**What must not be said.** _That the reader should have asked._ ⚠ **She has eighty files and four minutes each, and a page that requires a question has already failed.**',
  '⚠ **And the pair exists so that the room cannot leave the unit with the wrong rule.** **Last, not absent** — **and the two failures are the number first and the number nowhere.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('**On Pair B nothing is missing and the room will keep looking** — **and the finding is that the page carried the evidence and no number, so a reader with four minutes set it aside as incomplete.** ⚠ **Run Pair A first and Pair B second, and after Pair B say the two findings side by side: cite the rule by number to the person who applies it, and put the bookkeeping in the last line, because leaving it out is not honesty.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**The file refused on a number.** **My application to the translators\' register abroad, refused in 2010 on a component figure.**',
  '**Four accounts.** **Mine: half a band under, and I did not sit it again.** **The register\'s clerk: a figure in a schedule, applied.** ⚠ **The judge who had used me for four years and would have written anything I asked: no route by which his letter counts.** **And the document nobody has read: the register\'s own rules, which I have never opened in fifteen years.**',
  '**The rule, by number.** ⚠ **I do not know whether there is one, which is the honest entry, and I shall open the rules this week** — **and if there is an item 6 in them I shall have carried an opinion about my own English since 2009 for no reason at all.**',
  '**b** ⚠ **My partner\'s letters and date, and the sentence I must not write is that the register is measuring the wrong thing** — **which is true, and is an argument with a rule in a letter asking for the rule to be applied.**',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Mrs Khoury said there are three letters and a date, and one of the four is not about her file at all: a letter to the clerk citing item 6 by number, a request to the superintendent for the endorsement item 6 requires in item 6\'s own words, a note to whoever maintains the one-page summary, and the January date, which stands whatever the other three do. Mrs Ajouz said what must not be said is that the board does not understand what the score measures, and Mrs Khoury said that is exactly it and it is true, which is the difficulty of the unit in one sentence, because nobody at that board has read the descriptors and the clerk has never seen a script, and a letter that says so tells a roomful of people they are ignorant while asking them to apply a rule in her favour. Mrs Oueidat asked whether anybody is at fault, and Mr Attar said nobody, and this is the ninth time in Book 2: the clerk applies the list she was given, the pharmacist has read the best evidence in the file and has no standing, and the board wrote item 6 in 2021 and then summarised itself on one page without it. Dr Qabbani said so the letter to the clerk is the whole repair, and Mrs Ajouz said it is one of four and the only one that can produce a registration this year, which is not the same as being the repair. Mrs Tarabishi asked why nothing is said about the summary, and Mrs Khoury said because the clerk did not write it and cannot change it, which is 18.5, so the note about the summary goes to whoever maintains it and will not help this file. Mr Shihabi asked about the January date, and Mrs Ajouz said it stands whatever happens to item 6, because item 6 depends on somebody reading a document and the number depends on nobody reading anything. Mrs Rizk said that is 20.4, and Mrs Khoury said it is 20.4 pointed at herself, a plan with a date, a figure and a name, and the name is hers. Mr Tayara asked what the superintendent writes, and Mrs Oueidat said what item 6 asks for and not what he feels, with no adjectives about her ability, because a schedule that admits documents does not admit opinions. And Mrs Ajouz said item 6 has been there since 2021 and has never once been used, and both documents were free, public and available throughout, which is the whole of what the unit has taught her and is not about English at all.']));
out.push(A('⚠ **Three lines to carry out of the unit, and the order is the teaching.** **First: nobody is at fault, and this is the ninth time in Book 2 — the clerk applies the list she was given, the pharmacist has read the best evidence in the file and has no standing, and the board summarised itself on one page without item 6.** **Second: the letter cites the rule by number and says nothing about the summary, because the clerk did not write it and cannot change it.** **Third, and last: the January date stands, because item 6 needs a reader and the number needs nobody** — **which is 20.4 pointed at herself and is the only part of the plan that does not depend on anybody\'s reading.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**1** ⚠ _The board does not understand the score_ → **true, and it calls nine people ignorant.**   **2** **The defect in the summary put to the clerk** → **she cannot change it; 18.5.**   **3** ⚠ **The endorsement written with adjectives** → **a schedule that admits documents does not admit opinions.**   **4** **The January date dropped once item 6 is found** → **it needs nobody\'s reading.**   **5** ⚠ **Pair B answered by inventing a missing document** → **the number was absent.**   **6** **The number moved to the first line after Pair B** → **last, not first and not absent.**'));
out.push(S('Board – the four accounts, and what each one can and cannot see'));
out.push(A('⚠ **Run this at 21.7 Stage 2a with the four accounts on the board and the last column empty.** **The room fills it.** **The fourth row is the one that changes the file, and it is the board\'s own schedule** — **public, in force since 2021, and never cited by anybody on either side of the desk, which is 20.7\'s shape with the document moved from the writer\'s drawer to the reader\'s.**'));
out.push(table(['WHO', 'WHAT THEY CAN SEE', 'WHAT THEY CANNOT'], [
  ['**Mrs Ajouz**', '**One component mark, and her own annexes**', '⚠ **That the schedule admits them**'],
  ['**The registration clerk**', '**A one-page list of figures and deadlines**', '**The eleven items behind it**'],
  ['**The chief pharmacist**', '**Nine hundred words of her English**', '⚠ **Any route by which his reading counts**'],
  ['**The schedule of 2021**', '**Item 6: documentation, endorsed, admissible**', '**Nothing — and nobody has ever cited it**'],
], [1, 3, 3]));
out.push(S('Traceability – which earlier move each cycle makes harder'));
out.push(A('⚠ **Book 2\'s axis at its seventh unit: the reader is a scale, and your document is not admissible unless a rule says it is.** **The table says which earlier move each cycle takes and what changes when the reader is a number.**'));
out.push(table(['CYCLE', 'THE EARLIER MOVE', 'WHAT CHANGES WHEN THE READER IS A SCALE'], [
  ['**21.1**', '**20.1** — a decision told from an incapacity', '⚠ **A score is a decision and reads as a capacity.**'],
  ['**21.2**', '**18.2** — the document built for its reader', '**Two readers, two sentences, four minutes.**'],
  ['**21.3**', '**19.1** — the clause read two ways', '⚠ **The examiner\'s reading is the second one.**'],
  ['**21.4**', '**16.1** — what falls outside what I can assess', '**The limit is now about yourself.**'],
  ['**21.5**', '**19.4** — what I did not examine', '⚠ **_Not Given_ is that discipline, scored.**'],
  ['**21.6**', '**19.3** — three facts in one sentence', '**Three items in eighty words, with sources.**'],
  ['**21.7**', '**20.7** — the sentence the defender needs', '⚠ **The rule is on your side and uncited.**'],
], [1, 3, 3]));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 6)'));
out.push(A('**1** **B**   **2** **C**   **3** **A**   **4** **D**'));
out.push(A('⚠ **Part 6 is answered by finding the one writer who is out of step on each topic, and candidates in this class lose marks by answering from the writer\'s tone rather than from the proposition.** **At 1 all four address scripts and only B says they need not be returned, on the ground that the descriptors let a candidate reconstruct** — **and B\'s warmth makes candidates read agreement where there is none.** **At 2 the topic is admitting documents: A, B and D admit them and C refuses on a ground of comparability, which is the only reasoned refusal in the four texts.** ⚠ **At 3 the topic is telling a candidate which criterion a mark concerns: B, C and D all say the board should, and A says it is not the board\'s business and that a teacher is for that.** **At 4 the words are D\'s own — _I would not call that anybody\'s fault_ — and the trap is A, who blames the boards in a sentence that sounds like resignation.** **Tell the class to mark each text against each topic in the margin before answering: four texts and four topics is a grid of sixteen, and the grid takes two minutes and prevents all four errors.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To the clerk.** ⚠ _The schedule of admissible evidence at item 6 admits professional documentation endorsed by a registered superintendent; the endorsement and the documents are enclosed._',
  '**To the superintendent.** _I have read the recall notice of 14 March, which is nine hundred words of the applicant\'s own English, and I endorse it as professional documentation under item 6._ ⚠ **No adjectives.**',
  '**To whoever maintains the summary.** **The one-page list omits items 5 to 11 of the schedule, and item 6 has not been cited since 2021.** ⚠ **This will not help my file.**',
  '**And the date.** **The writing component, January.**',
  '**The working.** **The sentence that must not be written:** _the board does not understand what the score measures._ ⚠ **Why: it is true, and it tells the people applying a rule that they are ignorant.**',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 1: the essay, sample 249 words)'));
out.push(SAMPLE([
  '**I shall take the first and second points — the usefulness of a single score to a reader with many files, and whether documents from working life should count as evidence — and I shall argue that the second matters more, because the first is already settled in practice.**',
  '**That a single score is useful is not in doubt, and the opinion quoted puts it as well as it can be put: one line does beat four pages when there are eighty files. ⚠ A reader with four minutes needs somewhere to begin, and a procedure that gave her four pages per candidate would not be read at all, which helps nobody and least of all the candidate whose evidence is in the four pages. The objection to a score is almost never that it exists. It is that it arrives with no commentary and is then read as a description of a person.**',
  '**The second point is where something can actually be changed, and the objection to it is serious. A dossier and a court file cannot be compared, and a reader who admits both has admitted something she cannot apply evenly between two candidates. ⚠ But comparability is not the only thing a procedure needs, and a rule that admits a document under a stated condition — endorsed, dated, in the candidate\'s own hand — buys a reader information that no figure contains, at the price of some unevenness.**',
  '**Of the two, the second is the more important, for a reason that has nothing to do with fairness: the first cannot be altered by anybody reading this essay, and the second is a line in a schedule that somebody wrote and somebody could rewrite.**',
]));
out.push(A('⚠ **Part 1 is marked on the ground for the choice, on development and on the final comparison, and this sample is at the top of the band for the last of the three.** **Look at what the closing paragraph does: it selects on a criterion the room has not been given** — **what can be altered by the reader of the essay** — **and that criterion is the same move 20.6 makes with a counter-proposal.** **Candidates who select on _fairness_ or _importance_ have selected on the question\'s own word and earn less.** ⚠ **Then note the concession in the middle: _a reader who admits both has admitted something she cannot apply evenly._** **It is the strongest objection to the writer\'s own position and it is stated in full, which is what the band for development asks for** — **and the three samples at 16.7, 19.7 and here should be read side by side at the end of the unit.**'));
out.push(S('Stage ✓ · Unit 21 check'));
out.push(A('**A  Grammar and vocabulary.**   **1** b   **2** c   **3** a   **4** b   **5** c   **6** a   **7** b   **8** a'));
out.push(A('**B  Listening.**   **1** **B**   **2** **C**   **3** **A**   **4** **C**   **5** **B**   **6** **A**'));
out.push(A('⚠ **Part 1 gives two questions per extract and this class loses marks on the second of each pair, because the answer arrives in the last sentence of the extract.** **At 1 the pharmacist says he wrote paragraph 4 himself _so that a certificate would not be the only thing we could look at_, which is B** — **and A attracts because the paragraph does exclude some applicants, which is not what it was for.** **At 2 the key is the personnel officer\'s own words: the annexe answered a question the component mark _did not and could not_.** ⚠ **At 3 accept only A: four years, since she came to the desk.** **B is wrong at the moment she speaks, which candidates find hard, because she knows it by the end of the extract.** **At 4 the supervisor excludes both distractors explicitly — not withdrawn, no committee — and says nobody has cited it since 2021.** **At 5 the candidate read the descriptors four times _the way you read a notice_, which is B.** **And at 6 the answer is the teacher\'s last sentence and not the candidate\'s: January is the route that needs nobody else at all.**'));
out.push(S('Homework / After Unit 21 (sample)'));
out.push(SAMPLE([
  '**The letter sent, and what came back.**',
  '**To the clerk, 3 November, one sentence with the item number.** ⚠ **A reply on the eleventh: the file has gone to the board\'s legal officer for a ruling on item 6, which has never been applied.**',
  '**To the superintendent.** **The endorsement, in item 6\'s own words, with no adjectives, signed on the sixth.**',
  '**To whoever maintains the summary.** **Sent, and no reply, which I had expected.** ⚠ **It will not help my file and it may help the next ninety.**',
  '**And January.** **Entered and paid for.** ⚠ **Nineteen data descriptions attempted so far, one a day, each marked against the four published phrases** — **and the first gap closed after eleven, which I know because the phrase that had no sentence has one now.**',
  '⚠ **And the arithmetic to carry into Unit 22.** **A construct told from a task, one answer framed two ways, a descriptor put beside my own sentence, my English said without a level, four things that do not transfer, a page for a reader with four minutes, and a rule cited by number.** **Unit 22 writes the proposal nobody asked for** — **and the first thing it asks is who, in your organisation, has the power to say yes to it, which is a question this unit has just spent seven cycles teaching the room to ask of a reader.**',
]));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 21 · Answer Key');
