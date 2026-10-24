// Proactive Business English B2 · Syria Edition · Book 1 · Unit 11 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a sentence that costs you · to say it first · to say it to the person it costs · an unsoftened sentence · a hedge that changes the meaning · a hedge that changes only the tone · to count the cost before saying it · the cost of not saying it · a disclosure · a voluntary disclosure · a thing they would have found · a thing they would never have found · to put a figure on a loss · an offer made in the same breath · to separate the telling from the asking · a concession you have not been asked for · to be the first to know · to be the last to know · a person it is not yours to tell · a true thing that is somebody else\'s to say · an apology with a date in it · an apology with no undertaking · an undertaking you can keep · an undertaking with a date · to name what you will do differently · to name what you will not do · a pattern you knew about · three occurrences written up separately · to be told by somebody else first · the version that arrives second · to ask for nothing today · a conversation you cannot un-have';
const COLLOC = 'to count a cost · to make a disclosure · to give an undertaking · to hold back an ask · to break news · to keep a date · to soften a sentence · to withdraw an offer';
const BACK_AT_B2 = 'apology · undertaking · to admit';

out.push(h1('Unit 11  The Thing You Have To Say'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**11.1**  write the sentence down before you say it, and take the hedges out',
  '**11.2**  count what it costs, and what not saying it costs',
  '**11.3**  say it first, and to the person it costs you with',
  '**11.4**  separate the telling from the asking, and offer nothing in the same breath',
  '**11.5**  leave out the true things that are somebody else\'s to say',
  '**11.6**  give an undertaking you can keep, with a date in it',
  '**11.7**  Review & Mediate: the thing you have to say, said',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Three times, and nobody put them side by side', [
  '⚠ **The root-cause paper established something that nobody at Sham Trading set out to establish.** **Eleven cartons went short in March 2024, in August 2024 and in March this year** — ⚠ **all three to Ms Tannous, all three on nights when the lorry came early, and all three written up separately as a hurried count.**',
  '⚠ **The condition has been there since April 2023 and it is a pallet fifty millimetres narrow.** **So for two years a known condition has been short-delivering one customer, about eleven cartons at a time**, ⚠ **and the only reason nobody saw a pattern is that each occurrence was a different man\'s write-up in a different month.**',
  '⚠ **Ms Tannous knows about March.** **She does not know about March 2024 or August 2024.** ⚠ **Nothing in her agreement requires us to tell her, nobody has asked, and her April order of 320 cartons has already moved once.**',
  '⚠ **This unit is that conversation.** **It is the only unit in this book where the right thing to write is the sentence that costs you money** — ⚠ **and the whole difficulty is that nobody is making you say it.**',
], C.lyellow, C.orange));

// ======================= CYCLE 11.1 =======================
out.push(pb());
out.push(h2('11.1  The sentence, written down first'));
out.push(p('**Function:** writing the sentence before saying it   ·   **Grammar:** _it has happened three times · we knew the condition and did not connect them_   ·   **Pronunciation:** an unsoftened sentence said at one speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you had to tell somebody that cost you. ⚠ Then say the first version you thought of.'));
out.push(p('**b**  Which hedge changes the meaning? _It appears that it has happened three times. · It has happened three times, and we did not connect them._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say about writing the sentence down?   **A** it is slower   **B** a sentence you have not written is a sentence you will soften while you are saying it   **C** it is for lawyers'));
out.push(p('**b**  Listen again. **1** Which two hedges change the meaning? **2** What does she say about *unfortunately*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.1  "Write it, then take things out"', [
  ['Nour', 'I know what I have to tell Ms Tannous. I do not need to write it down.'],
  ['Hala', '⚠ **Then say it to me now, as you will say it to her.**'],
  ['Nour', 'There appears to have been a pattern, going back, which unfortunately we may not have picked up as early as we might have.'],
  ['Hala', '⚠ **Thirty words, and I cannot tell from them whether anything happened.** ⚠ **A sentence you have not written is a sentence you will soften while you are saying it** — **and you will not notice, because softening is what a mouth does under pressure.**'],
  ['Nour', 'Then: it has happened three times.'],
  ['Hala', '⚠ **Better. Write the whole thing and then take things out, in this order.** ⚠ **First *appears*. Second *may*. Third *unfortunately*.**'],
  ['Nour', 'Why in that order?'],
  ['Hala', '⚠ **Because *appears* and *may* change the meaning and *unfortunately* only changes the tone.** ⚠ **_There appears to have been_ says we are not sure, and we are sure: three dates, three receiving notes.** ⚠ **_May not have picked up_ says perhaps we did** — **and we did not.**'],
  ['Nour', 'And *unfortunately* is harmless?'],
  ['Hala', '⚠ **It is harmless and it is doing nothing.** ⚠ **It tells her that we regret it, which she will assume anyway, and it uses a word at the front of a sentence where she is waiting for a fact.** **Take it out and put it somewhere it can carry a date** — **which is 11.6.**'],
  ['Nour', 'So the sentence is: it has happened three times, all three to you, and we did not connect them.'],
  ['Hala', '⚠ **Nineteen words. Read it twice and then stop reading it**, **because the fourth time you read a sentence like that you start improving it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Write it, then take things out**',
  table(['Take out', 'Because', 'Order'], [
    ['⚠ *there appears to have been*', '⚠ **it says we are not sure, and we are sure** — **three dates, three receiving notes**', '⚠ **first** — **it changes the meaning**'],
    ['⚠ *we may not have picked up*', '⚠ **it says perhaps we did** — **and we did not**', '⚠ **second** — **it changes the meaning**'],
    ['**_unfortunately_**', '⚠ **it changes only the tone, and it uses the front of a sentence where she is waiting for a fact**', '⚠ **third** — **and it goes to 11.6, where it can carry a date**'],
    ['⚠ **the result**', '⚠ *it has happened three times, all three to you, and we did not connect them*', '**nineteen words**'],
  ], [2.2, 3.4, 2.4]),
  '⚠ **A sentence you have not written is a sentence you will soften while you are saying it** — **and you will not notice, because softening is what a mouth does under pressure.**',
  '⚠ **Write the whole thing, then take things out in order: meaning first, tone last.** ⚠ **A hedge that changes the meaning is a different sentence; a hedge that changes the tone is a word you can afford to move.**',
  '⚠ **The test for a hedge: could the hedged version be true if the unhedged one is false?** ⚠ **_There appears to have been a pattern_ is true even if there was no pattern** — **which is exactly why it will not do.**',
  '⚠ **Take the regret out of the front of the sentence.** **She will assume it.** ⚠ **The front of a sentence is where a fact goes**, **and regret with a date in it is worth four times regret at the front** — **11.6 is where it goes.**',
  '⚠ **And read the finished sentence twice, then stop.** ⚠ **The fourth time you read a sentence that costs you something, you start improving it** — **and every improvement is a softening.**',
  '**Practise:** Take three things you have had to tell somebody. Write each in full, then take out the hedges in order and count the words.',
  '**Useful phrases:**  it has happened three times  ·  we did not connect them  ·  that hedge changes the meaning  ·  read it twice and stop  ·  the front of a sentence is for a fact',
  '**Pronunciation – an unsoftened sentence at one speed.** 🔊 **Track 11.2** Listen twice. ⚠ **The first says *it has happened three times, all three to you, and we did not connect them* at one speed, with no pause before *three times*.** ⚠ **The second slows before the number.** **Slowed, the number sounds like a confession being braced for; level, it is a fact.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says the softened version; B takes things out.'));
out.push(dlg(null, [
  ['A', 'There appears to have been __________, which unfortunately we may not have __________.'],
  ['B', '⚠ **How many words, and can I tell from them whether anything happened?**'],
  ['A', '__________.'],
  ['B', '⚠ **Take out *appears*. Are you sure or not?**'],
  ['A', '⚠ **I am sure. __________ and __________.**'],
  ['B', '⚠ **Now *may*. Did you or did you not?**'],
  ['A', '⚠ **We did not.**'],
  ['B', '⚠ **And *unfortunately* goes where?**'],
  ['A', '⚠ **Into the undertaking, with a date.**'],
]));
out.push(table(['Role card 1 — the hedge that changes the meaning', 'Role card 2 — the fourth reading'], [[
  '⚠ **A says *there appears to have been a pattern*.** ⚠ **B applies the test: could that be true if there was no pattern?** ⚠ **Yes** — **which is why it will not do.** ⚠ **Then *we may not have picked it up*: could that be true if they did pick it up? Yes.** **Both are different sentences and both have to go.**',
  '⚠ **A has the nineteen-word sentence and reads it aloud four times.** ⚠ **B\'s job is to write down each version.** ⚠ **By the fourth reading A will have added a word** — *at the time*, *as far as we can see*, *historically* — **and B reads the four versions back in order.** ⚠ **Nobody plans the fourth version; it arrives.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the softened version and the final one, with word counts. ⚠ Then say which hedges changed the meaning and which changed only the tone.'));
out.push(PHRASE_CARD(['it has happened three times', 'we did not connect them', 'that changes the meaning', 'read it twice and stop', 'the front is for a fact']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things you have had to tell somebody. Write each twice.'));
out.push(table(['The softened version I thought of first', 'Words', 'The version with the hedges out', 'Words'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.6, 0.7, 2.6, 0.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The first version was _______, which was _______ words. The hedges were _______ and _______. The version with them out is _______, which is _______ words._'));
out.push(p('**Listener task:** count how many first versions began with a hedge. ⚠ Then ask how many of the final versions were shorter, and by how much, and expect about a third.'));
out.push(p('**Board clinic:** your teacher writes three sentences on the board — look for *it appears that*, and a regret standing where a fact should be. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE SENTENCE, IN FOUR DRAFTS. 8 June. N. Mansour. Not to be sent.**',
  '⚠ **Draft 1, written Monday evening, forty-one words:** _There appears to have been a recurrence of the shortfall issue going back some time, which unfortunately may not have been picked up as early as it might have been, and which we are now in a position to explain more fully._',
  '⚠ **Draft 2, *appears* and *may* out, twenty-eight words:** _The shortfall has occurred before, going back some time, and it was not picked up, and we are now in a position to explain it more fully._',
  '⚠ **Draft 3, the vague quantities out, twenty-four words:** _It has happened three times — March 2024, August 2024 and March this year — all three to you, and it was not picked up._',
  '⚠ **Draft 4, the passive out, nineteen words:** _It has happened three times: March 2024, August 2024 and March this year, all three to you, and we did not connect them._',
  table(['', 'What came out', 'What it was doing'], [
    ['**1 → 2**', '⚠ *appears* · *may*', '⚠ **saying we were not sure, when we have three receiving notes**'],
    ['**2 → 3**', '⚠ *going back some time* · *the shortfall issue*', '⚠ **standing where three dates belong, and standing where the word *short* belongs**'],
    ['**3 → 4**', '⚠ *it was not picked up*', '⚠ **an agentless passive** — **Unit 2 in reverse: here the agent is us and must be in the sentence**'],
    ['⚠ **kept throughout**', '⚠ *all three to you*', '⚠ **the three words that make it her loss and not our statistic**'],
  ], [0.8, 3, 4.2]),
  '⚠ **Draft 4 is twenty-two words shorter than draft 1 and says more.** **Every cut was a word doing work I did not want it to do.** ⚠ **_It was not picked up_ was the last and the hardest, because it is true, and because Unit 2 spent a whole unit teaching me to write exactly that** — **and in Unit 2 the agent was a night man and here the agent is us.**',
  '⚠ **The three words I will not cut are *all three to you*.** **Without them this is a sentence about our pallets.** ⚠ **With them it is a sentence about thirty-three of her cartons over two years**, **which is what it is.**',
  '⚠ **And draft 4 is not being sent, because this is not a letter.** ⚠ **It is the sentence I am going to say out loud on Wednesday, and the reason it is written down is 11.1:** **a sentence I have not written is one I will soften while I am saying it.** **The page goes in my pocket.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What came out between drafts 2 and 3, and what was it standing in for?'));
out.push(item('2', 'Which cut was the hardest, and why is Unit 2 mentioned?'));
out.push(item('3', 'Why is draft 4 not being sent?'));
out.push(box('Writer\'s box', [
  '**A sentence in four drafts — four parts:** ⚠ **the full version with its word count** → ⚠ **a draft for each kind of cut** → ⚠ **a table of *what came out · what it was doing*** → ⚠ **and the words you will not cut.**',
  '⚠ **Write the first draft badly and keep it.** ⚠ **Forty-one words with every hedge in it** — **because the hedges you would have used are information about where you will soften, and they are only visible on paper.**',
  '⚠ **Cut in the order meaning, quantity, agent.** ⚠ **_Appears_ and *may* first; then *going back some time*, which is standing where three dates belong; then the agentless passive, which is the hardest.**',
  '⚠ **Name the Unit 2 collision when it happens.** ⚠ **_It was not picked up_ is the construction Unit 2 taught, used where the agent is you** — **and the rule there was never *use the passive*, it was *do not put a person in a sentence that is about a system*.** **Here the agent is the firm, and a firm belongs in its own sentence.**',
  '⚠ **Keep the words that make it the other person\'s loss.** ⚠ *All three to you* **is three words, and without them the sentence is about your pallets** — **with them it is about thirty-three of her cartons over two years.**',
  '⚠ **And write it even when you are going to say it rather than send it.** ⚠ **The page goes in your pocket** — **and the point of writing it is not the letter, it is that a sentence you have written is one you can say without improving.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own sentence in four drafts (**80 words or more**). Use the frame.'));
out.push(p('**THE SENTENCE, IN FOUR DRAFTS. ______________. Not to be sent.**   ⚠ **Draft 1, ______________ words:** _______________._   ⚠ **Draft 2, *appears* and *may* out, ______________ words:** _______________._   ⚠ **Draft 3, the vague quantities out, ______________ words:** _______________._   ⚠ **Draft 4, the passive out, ______________ words:** _______________._   **1 → 2** | ⚠ **______________** | ⚠ **______________**   **2 → 3** | ⚠ **______________** | ⚠ **______________**   **3 → 4** | ⚠ **______________** | ⚠ **an agentless passive** — **and here the agent is ______________**   ⚠ **kept throughout** | ⚠ **______________** | ⚠ **______________**   ⚠ **Draft 4 is ______________ words shorter than draft 1 and says more.**   ⚠ **The words I will not cut are ______________.** **Without them this is a sentence about ______________.**   ⚠ **And draft 4 is not being sent: it is the sentence I am going to say out loud on ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four drafts, each with a word count', ''],
  ['The meaning-hedges cut first', ''],
  ['A vague quantity replaced by dates or figures', ''],
  ['The agentless passive named, with who the agent is', ''],
  ['The words that make it the other person\'s loss, kept', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read draft 1 and draft 4 only. ⚠ The class says which draft they would rather receive — and then which one they would rather have had to say, which is usually the other one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you softened while you were saying it (**200 to 240 words**). Say what you had meant to say, what came out, when you noticed, what the other person understood, and what it cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _when did you notice you had softened it?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer notice at the time? Usually one of three — ⚠ **and in the other two they found out weeks later, from what the other person had understood.**'));
out.push(box('Homework', ['Write your final text. Then take something you have to tell somebody this month, write it in full, and take the hedges out in order (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.2 =======================
out.push(pb());
out.push(h2('11.2  Counting the cost'));
out.push(p('**Function:** pricing the sentence and the silence   ·   **Grammar:** _it costs us X · not saying it costs Y, and Y is not a number_   ·   **Pronunciation:** a figure said without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you decided not to tell somebody. ⚠ Then say what it would have cost to tell them.'));
out.push(p('**b**  Which cost is a number? _thirty-three cartons at 1,450 each · the chance that she moves her account_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about the two costs?   **A** they are the same kind of thing   **B** one is a number and one is not, and the one that is not is usually larger   **C** only the first matters'));
out.push(p('**b**  Listen again. **1** What is the figure for the thirty-three cartons? **2** What does he say about the cost of her finding out from somebody else?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.3  "One of them is a number"', [
  ['Mr Ayoub', 'Before you tell her anything, tell me what it costs.'],
  ['Nour', '⚠ **Thirty-three cartons over two years. At 1,450 a carton that is 47,850, and she will ask for it and she is entitled to it.**'],
  ['Mr Ayoub', '⚠ **That is a number and it is the small one.** **What else?**'],
  ['Nour', 'The April order. Three hundred and twenty cartons, which has already moved once.'],
  ['Mr Ayoub', '⚠ **She may hold it. Put a figure on that too, even a rough one.**'],
  ['Nour', 'Four hundred and sixty-four thousand of turnover, at 1,450 a carton.'],
  ['Mr Ayoub', '⚠ **So about half a million of turnover at risk, and the 47,850 is certain and is ours to pay.** ⚠ **Now the other side. What does not telling her cost?**'],
  ['Nour', 'Nothing, today.'],
  ['Mr Ayoub', '⚠ **And on the day she finds out from somebody else?**'],
  ['Nour', '…She finds out from Beirut, from her own storeman, who has the three receiving notes.'],
  ['Mr Ayoub', '⚠ **He has had them all along.** ⚠ **So the question is not whether she finds out, it is whether she finds out from us or from her own files** — **and the second one is not a number.**'],
  ['Nour', 'It is the agreement.'],
  ['Mr Ayoub', '⚠ **It is the agreement, which runs twelve months from 1 May, and it is nineteen years of her taking our word for a count she does not check.** ⚠ **Write the number down and write the thing that is not a number next to it** — **and do not pretend the second one is bigger than it is, and do not pretend it is a number.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Two costs, and only one is a number**',
  table(['', 'The cost of saying it', 'The cost of not saying it'], [
    ['⚠ **certain**', '⚠ **thirty-three cartons at 1,450 = 47,850** — **and she is entitled to it**', '**nothing, today**'],
    ['⚠ **possible**', '⚠ **the April order held: 320 cartons, 464,000 of turnover at 1,450 a carton**', '⚠ **that she finds out from her own storeman, who has had the three receiving notes all along**'],
    ['⚠ **the kind of thing**', '⚠ **a number** — **and it is the small one**', '⚠ **not a number** — **an agreement running twelve months from 1 May, and nineteen years of her taking our word for a count she does not check**'],
    ['⚠ **the real question**', '⚠ **not whether she finds out** — **whether she finds out from us or from her own files**', '—'],
  ], [1.2, 3.4, 4]),
  '⚠ **Count both costs before you say anything, and write them next to each other.** ⚠ **One will be a number and one will not be** — **and the one that is not is usually the larger, and it is the one you will discount because you cannot add it up.**',
  '⚠ **Put a figure on the possible loss as well as the certain one.** ⚠ **_464,000 of turnover at 1,450 a carton_ is a rough figure and a rough figure is a figure** — **and a decision between a number and a blank is not a decision.**',
  '⚠ **Then ask the only question that matters:** ⚠ **not whether they find out, but whether they find out from you or from their own files.** **Where the evidence is already in their possession, *not telling* is not an option that exists** — **it is a choice about who tells them.**',
  '⚠ **And do not inflate the thing that is not a number.** ⚠ **_Nineteen years of trust_ is real and it is not infinite** — **a person who claims that every disclosure is existential will not be believed on the one that is.**',
  '⚠ **Say the figure without apology.** ⚠ **_47,850, and she is entitled to it_ is the whole sentence** — **and *I am afraid it comes to about 47,000* invites a negotiation about a sum that is not in dispute.**',
  '**Practise:** Take three things you have not said. Count the certain cost, the possible cost, and the cost of their finding out another way.',
  '**Useful phrases:**  that is a number and it is the small one  ·  put a figure on it, even a rough one  ·  not whether, but from whom  ·  he has had them all along  ·  and she is entitled to it',
  '**Pronunciation – a figure said without apology.** 🔊 **Track 11.4** Listen twice. ⚠ **The first says *forty-seven thousand eight hundred and fifty, and she is entitled to it* level, in one breath.** ⚠ **The second drops at the end.** **Dropped, it sounds like the opening of a negotiation; level, it is a sum being handed over.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B asks for both costs; A supplies them.'));
out.push(dlg(null, [
  ['B', '⚠ **Before you tell anybody anything, what does it cost?**'],
  ['A', '__________, which at __________ is __________.'],
  ['B', '⚠ **That is a number. What else?**'],
  ['A', '__________, which may __________.'],
  ['B', '⚠ **Put a figure on it, even a rough one.**'],
  ['A', '__________.'],
  ['B', '⚠ **Now the other side. What does not saying it cost?**'],
  ['A', '⚠ **Nothing today. And on the day they find out from __________ —**'],
  ['B', '⚠ **Who has had the evidence how long?**'],
  ['A', '⚠ **__________. All along.**'],
]));
out.push(table(['Role card 1 — the rough figure', 'Role card 2 — from us or from their files'], [[
  '⚠ **A can price the certain loss and says the possible one cannot be quantified.** ⚠ **B refuses that: a rough figure is a figure, and a decision between a number and a blank is not a decision.** ⚠ **320 cartons at 1,450 a carton is 464,000 of turnover** — **and now the two costs can be compared, which is all a figure is for.**',
  '⚠ **A says the cost of not telling her is nothing.** ⚠ **B asks who else has the three receiving notes.** ⚠ **Her own storeman in Beirut, who has had them all along.** ⚠ **So *not telling* is not an option that exists** — **it is a choice about who tells her, and B makes A say that sentence out loud.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both costs, with figures. ⚠ Then write the sentence about who finds out, and say who has had the evidence and for how long.'));
out.push(PHRASE_CARD(['that is the small one', 'a rough figure is a figure', 'not whether, but from whom', 'he has had them all along', 'and she is entitled to it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things you have not said at work. Count both costs.'));
out.push(table(['The thing', 'The certain cost, as a figure', 'The possible cost, roughly', 'Who else has the evidence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 1.8, 1.8, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The thing is _______. Saying it costs _______ certainly and about _______ at the outside. Not saying it costs nothing today. And _______ has had _______ since _______._'));
out.push(p('**Listener task:** count how many of the unsaid things were already evidenced in somebody else\'s files. ⚠ Then ask how many of those the speaker had thought of as *secret*, and expect most of them.'));
out.push(p('**Board clinic:** your teacher writes three costs on the board — look for a possible cost with no figure at all, and a cost of silence given as *nothing*. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT IT COSTS TO SAY IT, AND WHAT IT COSTS NOT TO. 9 June. N. Mansour. For Mr Ayoub, one page.**',
  table(['', 'Saying it', 'Not saying it'], [
    ['**certain, today**', '⚠ **47,850** — **thirty-three cartons at 1,450, which she is entitled to**', '**nil**'],
    ['**probable**', '⚠ **the April order held: 320 cartons, 464,000 of turnover at 1,450 a carton**', '⚠ **that her storeman in Beirut puts the three receiving notes side by side** — **he has had all three since March**'],
    ['**possible, outside**', '⚠ **the agreement not renewed on 1 May next year: about 2.1 million of annual turnover**', '⚠ **the same, and at a point we do not choose, and after a conversation in which we have already been wrong once**'],
    ['⚠ **not a number at all**', '⚠ **nothing** — **everything on this side has a figure**', '⚠ **nineteen years of a customer taking our word for a count she does not check**'],
  ], [1.3, 3.5, 3.8]),
  '⚠ **The left column adds up and the right column does not, and that is not a reason to prefer the left.** **It is the thing to be careful about.** ⚠ **A column of figures beside a column of sentences will win an argument in any room**, **and the right-hand column contains the only item here that cannot be bought back.**',
  '⚠ **The second row is the one that decides it.** **Her storeman has had the three receiving notes since March and he files them by customer, not by month.** ⚠ **He will put them side by side the first time anybody asks him about short deliveries** — **and somebody will ask, because the April order moved.**',
  '⚠ **So the choice is not whether she learns it.** ⚠ **It is whether she learns it from us in June, with a figure and an undertaking, or from her own files in September, with neither** — **and the September version arrives with a question about why we did not say.**',
  '⚠ **And the bottom right is the item I have refused to put a figure on, after trying.** **Nineteen years of a customer accepting our counts is not 2.1 million a year, it is the reason the 2.1 million exists** — ⚠ **and a figure in that cell would have made this page a calculation, which it is not.** **It is a page with one number in the wrong place and I have left the cell empty on purpose.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is the left column adding up not a reason to prefer it?'));
out.push(item('2', 'Which row decides it, and what does the storeman do with his files?'));
out.push(item('3', 'Which cell is deliberately empty, and why?'));
out.push(box('Writer\'s box', [
  '**Costing both sides — four parts:** **a table of *saying it · not saying it*, in rows of certainty** → ⚠ **the warning about the column that adds up** → ⚠ **the row that decides it** → ⚠ **and the cell you have left empty on purpose.**',
  '⚠ **Put the two costs in two columns and sort the rows by certainty, not by size.** ⚠ **Certain · probable · possible · not a number at all** — **because the argument is almost always between a certain small number and an uncertain large one.**',
  '⚠ **Warn the reader about your own table.** ⚠ **A column of figures beside a column of sentences will win in any room** — **and saying so is the only defence the sentences have.**',
  '⚠ **Name who already holds the evidence, and how they file it.** ⚠ **Her storeman files by customer and not by month** — **which is why he will see three short deliveries the first time anybody asks him a question.** **How somebody files is the whole of whether a pattern is visible to them.**',
  '⚠ **Convert the question from *whether* to *from whom and when*.** ⚠ *From us in June with a figure and an undertaking, or from her own files in September with neither.* **And name what the second version arrives with, which is a question about your silence.**',
  '⚠ **And leave the unquantifiable cell empty, having tried.** ⚠ **A figure in it would make the page a calculation** — **and *I tried to price it and could not* is a stronger line than any number you could invent.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Cost both sides of something you have not said (**80 words or more**). Use the frame.'));
out.push(p('**WHAT IT COSTS TO SAY IT, AND WHAT IT COSTS NOT TO. ______________. One page.**   **certain, today** | ⚠ **______________** | **______________**   **probable** | ⚠ **______________** | ⚠ **______________** — **______________ has had it since ______________**   **possible, outside** | ⚠ **______________** | ⚠ **the same, and at a point we do not choose**   ⚠ **not a number at all** | ⚠ **nothing** — **everything on this side has a figure** | ⚠ **______________**   ⚠ **The left column adds up and the right column does not, and that is not a reason to prefer the left.** ⚠ **A column of figures beside a column of sentences will win in any room.**   ⚠ **The ______________ row is the one that decides it:** **______________ files by ______________ and not by ______________.**   ⚠ **So the choice is whether they learn it from us in ______________, with ______________, or from ______________ in ______________, with neither.**   ⚠ **And the bottom right is the cell I have left empty, after trying.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Rows sorted by certainty, not by size', ''],
  ['A rough figure on the probable cost', ''],
  ['The holder of the evidence, and how they file it', ''],
  ['*Whether* converted to *from whom and when*', ''],
  ['An unquantifiable cell left empty, having been tried', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *not saying it* column. ⚠ The class asks who holds the evidence — and where nobody does, that is a genuinely different decision and should be said so.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something somebody found out about your work from their own records (**200 to 240 words**). Say what it was, what records they had, how long they had had them, what triggered the question, and what it cost that they found it rather than being told.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how long had they had the records?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the records been in the other party\'s hands for more than a year? Usually two of three — ⚠ **and in all three the cost was not the thing itself but the silence around it.**'));
out.push(box('Homework', ['Write your final text. Then take one thing you have not said, and write who else holds the evidence and how they file it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.3 =======================
out.push(pb());
out.push(h2('11.3  Saying it first, and to the right person'));
out.push(p('**Function:** choosing who hears it and when   ·   **Grammar:** _I would rather you heard it from me · before you hear it from anybody else_   ·   **Pronunciation:** an opening that does not ask for permission'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you heard about somebody\'s work from a third person. ⚠ Then say what you thought of them for not telling you.'));
out.push(p('**b**  Which opening works? _There is something I should probably mention at some point. · There is something you need to know and I would rather you heard it from me._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about telling the junior first?   **A** it is kinder   **B** it makes the senior the second person to know, and the second person to know remembers it   **C** it is faster'));
out.push(p('**b**  Listen again. **1** Who must hear it, and in what order? **2** What does she say about *at some point*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.5  "Who is the second person to know?"', [
  ['Nour', 'I will tell her storeman first. He has the notes and he will understand it in a minute.'],
  ['Nadia', '⚠ **And then Ms Tannous is the second person in her own company to know a thing about her own account.**'],
  ['Nour', 'She would hear it the same afternoon.'],
  ['Nadia', '⚠ **She would hear it the same afternoon from her own storeman**, **and for the rest of the agreement she would remember that she was the second to know.** ⚠ **The second person to know remembers it, and nothing you do afterwards changes the order.**'],
  ['Nour', 'So her first.'],
  ['Nadia', '⚠ **Her first, and the storeman the same day, and in that order, and not by letter.** ⚠ **A letter arrives at a desk she may not be at** — **and a thing like this read in a letter is a thing that was sent rather than said.**'],
  ['Nour', 'And how do I open it?'],
  ['Nadia', '⚠ **_There is something you need to know and I would rather you heard it from me._** ⚠ **Thirteen words, no permission asked, and the second half is the only part that is about you.**'],
  ['Nour', 'What about *there is something I should probably mention at some point*?'],
  ['Nadia', '⚠ **That is three hedges and an escape route.** ⚠ *Should* — **so perhaps not.** *Probably* — **so perhaps not.** *At some point* — **so perhaps not today.** **And a listener hears all three and prepares to be told something small.**'],
  ['Nour', 'And then she is told something that is not small.'],
  ['Nadia', '⚠ **Which is worse than not softening it, because you have moved her twice.** ⚠ **Once to *this is small* and once back.** **A sentence that costs you something is told at one size, which is its own.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**First, and to whom**',
  table(['', 'Do', 'Because'], [
    ['⚠ **the order**', '⚠ **the principal first, then her people, the same day**', '⚠ **the second person to know remembers it, and nothing afterwards changes the order**'],
    ['**the channel**', '⚠ **said, not sent** — **and a letter afterwards if one is wanted**', '⚠ **a thing read in a letter is a thing that was sent rather than said**'],
    ['⚠ **the opening**', '⚠ *there is something you need to know and I would rather you heard it from me*', '**thirteen words, no permission asked** — **and only the second half is about you**'],
    ['⚠ **not**', '⚠ *there is something I should probably mention at some point*', '⚠ **three hedges and an escape route** — **and the listener prepares to be told something small**'],
  ], [1.2, 3.5, 3.8]),
  '⚠ **Tell the principal first, and her people the same day, in that order.** ⚠ **The second person in a company to know a thing about their own account remembers being second** — **and no apology, figure or undertaking afterwards changes the order.**',
  '⚠ **Say it; do not send it.** ⚠ **A letter arrives at a desk she may not be at, and a thing like this read in a letter is a thing that was sent rather than said** — **put the letter afterwards, with the dates in it, which is 11.6.**',
  '⚠ **Open without asking permission.** ⚠ *There is something you need to know and I would rather you heard it from me.* **Thirteen words** — **and the second half is the only part of the sentence that is about you, which is the right proportion.**',
  '⚠ **Three hedges make an escape route and the listener hears it.** ⚠ *Should* · *probably* · *at some point* — **each one says *perhaps not*, and a listener who has heard three of them is preparing to be told something small.**',
  '⚠ **And moving somebody twice is worse than softening once.** ⚠ **_This is small_ and then back again costs you the whole of the conversation** — **a sentence that costs you something is told at its own size, once.**',
  '**Practise:** Take three things you have to tell somebody. Name who hears it first, who hears it the same day, and write the thirteen-word opening.',
  '**Useful phrases:**  I would rather you heard it from me  ·  before you hear it from anybody else  ·  the second person to know remembers it  ·  said, not sent  ·  at its own size',
  '**Pronunciation – an opening that does not ask permission.** 🔊 **Track 11.6** Listen twice. ⚠ **The first says *there is something you need to know* as a statement, falling.** ⚠ **The second rises, as though checking whether now is convenient.** **Risen, it hands her the choice of hearing it, and she will take it** — **and then it is told at a time she chooses, in a corridor.** Say it four times, falling.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A plans the order; B tests it.'));
out.push(dlg(null, [
  ['A', 'I will tell __________ first, because __________.'],
  ['B', '⚠ **And then who is the second person in their company to know?**'],
  ['A', '__________.'],
  ['B', '⚠ **How long will they remember being second?**'],
  ['A', '__________.'],
  ['B', '⚠ **So the order is?**'],
  ['A', '⚠ **__________ first, then __________, the same day.**'],
  ['B', '⚠ **Said or sent?**'],
  ['A', '⚠ **Said. And the opening is: __________.**'],
]));
out.push(table(['Role card 1 — the second person to know', 'Role card 2 — three hedges'], [[
  '⚠ **A wants to tell the storeman first because he will understand it quickest.** ⚠ **B agrees that he will, and asks what Ms Tannous will remember.** ⚠ **That she was the second person in her own company to know about her own account** — ⚠ **and B makes the point that the order cannot be repaired afterwards by anything at all.**',
  '⚠ **A opens with *there is something I should probably mention at some point*.** ⚠ **B counts the hedges out loud: *should*, *probably*, *at some point* — three *perhaps nots*.** ⚠ **Then B plays the listener, relaxes visibly, and is told that thirty-three cartons have gone missing over two years** — **and names what has just happened: she has been moved twice.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the order of telling and the thirteen-word opening. ⚠ Then count the hedges in the bad version and say what each one says.'));
out.push(PHRASE_CARD(['I would rather you heard it from me', 'the second person remembers', 'said, not sent', 'three hedges, three perhaps nots', 'at its own size']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things you have to tell somebody. Plan the order.'));
out.push(table(['The thing', 'Who hears it first', 'Who hears it the same day', 'Said or sent, and the opening'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 1.6, 2.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The thing is _______. _______ hears it first, because _______. _______ hears it the same day. It is _______ and not _______, and the opening is _______._'));
out.push(p('**Listener task:** count how many plans had the principal hearing it second. ⚠ Then ask how many of the speakers had chosen that order because the other person was easier to tell, and expect most of them.'));
out.push(p('**Board clinic:** your teacher writes three openings on the board — look for *at some point*, and an opening that rises at the end. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE ORDER OF TELLING. 9 June. N. Mansour. Wednesday, and nothing before Wednesday.**',
  table(['', 'Who', 'When', 'Why in that place'], [
    ['**1**', '⚠ **Ms Tannous, in person, in Beirut**', '⚠ **Wednesday morning, 11 June**', '⚠ **it is her account and her loss** — **and the second person in her company to know would remember being second for the rest of the agreement**'],
    ['**2**', '**her storeman, the same day, after her**', '**Wednesday afternoon**', '⚠ **he has the three receiving notes and he is the person who will be asked to confirm it** — **and he must not be confirming something he was told first**'],
    ['**3**', '**Mr Dallal\'s office**', '⚠ **Thursday, and only if Ms Tannous has not objected to it**', '⚠ **the same pallet condition is in his paper** — **and he is entitled to know that it has happened three times, but not before she does**'],
    ['**4**', '**the bank**', '⚠ **not at all, and not by us**', '⚠ **it is not ours to tell** — **11.5**'],
  ], [0.4, 2.3, 2.1, 4.4]),
  '⚠ **Row 1 is in Beirut because she is in Beirut, and the journey is five hours each way and I am taking it.** ⚠ **A telephone call would be faster and a telephone call is what you use for an occasion**, **and this is not an occasion** — **it is thirty-three cartons over two years and a condition we knew about.**',
  '⚠ **Row 2 is the one I had in the wrong place on Monday.** **I had the storeman first, because he has the notes and would have understood it in a minute.** ⚠ **Which is exactly why he must be second:** **the first thing he will be asked by his own employer is whether it is true, and he cannot be answering that about something he heard before she did.**',
  '⚠ **Row 3 has a condition attached to it and the condition is hers.** **Mr Dallal\'s paper contains the same pallet finding and he is entitled to know the number of occurrences.** ⚠ **But he is a customer of ours and she is a customer of ours, and telling him about her consignments before she has decided what she wants done is a thing I cannot undo.** **If she objects, he gets the condition and not the count.**',
  '⚠ **And row 4 is in this table so that it is in this table.** **The bank is not told by us, this week or any week** — ⚠ **not because it does not matter but because it is not ours to tell**, **and 11.5 is the whole of that.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is the writer going to Beirut rather than telephoning?'));
out.push(item('2', 'Which row was in the wrong place, and what is the argument that moved it?'));
out.push(item('3', 'What condition is attached to row 3, and why?'));
out.push(box('Writer\'s box', [
  '**The order of telling — four parts:** **a table of *who · when · why in that place*** → ⚠ **why you are going rather than telephoning** → ⚠ **the row you had in the wrong place** → ⚠ **and the row that is in the table so that it is in the table.**',
  '⚠ **Write *why in that place* for every row and make it a reason about the hearer.** ⚠ **_She would remember being second_ · *he will be asked to confirm it*** — **a reason about your own convenience is how the wrong order gets chosen.**',
  '⚠ **Decide said against sent, and say why.** ⚠ **A telephone call is what you use for an occasion, and this is not an occasion** — **and where the journey is five hours each way, taking it is part of what is being said.**',
  '⚠ **Expect to have had one row in the wrong place, and keep the reason you moved it.** ⚠ **The person who would understand it quickest is often the person who must hear it second**, **because he is the one who will be asked whether it is true.**',
  '⚠ **Attach a condition where the next person\'s right to know is real but not yours to exercise.** ⚠ **He is entitled to the condition and not to her count** — **and *only if she has not objected* is a clause that costs nothing to write and cannot be recovered if left out.**',
  '⚠ **And put the person you are NOT telling in the table.** ⚠ **_Not at all, and not by us_** — **because a row that is missing reads as a person who was forgotten, and a row that says *not ours to tell* is a decision.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the order of telling for something of yours (**80 words or more**). Use the frame.'));
out.push(p('**THE ORDER OF TELLING. ______________. ______________, and nothing before ______________.**   **1** | ⚠ **______________** | ⚠ **______________** | ⚠ **______________** — **and the second person to know would remember it**   **2** | **______________, the same day, after ______________** | **______________** | ⚠ **______________ will be asked to confirm it, and must not be confirming something they were told first**   **3** | **______________** | ⚠ **______________, and only if ______________** | ⚠ **______________**   **4** | **______________** | ⚠ **not at all, and not by us** | ⚠ **it is not ours to tell**   ⚠ **Row 1 is ______________ because ______________, and ______________.** ⚠ **A telephone call is what you use for an occasion, and this is not an occasion.**   ⚠ **Row 2 is the one I had in the wrong place.** **I had ______________ first, because ______________.** ⚠ **Which is exactly why they must be second.**   ⚠ **And row 4 is in this table so that it is in this table.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Why in that place* for every row, about the hearer', ''],
  ['Said or sent, with a reason', ''],
  ['A row you moved, with the argument that moved it', ''],
  ['A condition on a row where somebody else\'s right is involved', ''],
  ['The person you are not telling, in the table', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their first row and its reason. ⚠ The class says whether the reason is about the hearer or about the speaker — and where it is about the speaker, the order is probably wrong.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were the second person to know something about your own work (**200 to 240 words**). Say what it was, who told you, who had known first, how you found out about the order, and what you thought of the person who chose it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how long ago was it?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could the writer still name the order, years later? Usually all three — ⚠ **and that is the whole of 11.3: the order is the part nobody forgets.**'));
out.push(box('Homework', ['Write your final text. Then take one thing you have to tell somebody, write who hears it first and why, and write the thirteen-word opening (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.4 =======================
out.push(pb());
out.push(h2('11.4  Telling, and not asking'));
out.push(p('**Function:** keeping an ask out of a disclosure   ·   **Grammar:** _I am not asking for anything today · that is for you to decide and not today_   ·   **Pronunciation:** a silence held after the fact'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a time somebody told you bad news and asked you for something in the same conversation. ⚠ Then say which of the two you remember.'));
out.push(p('**b**  Which belongs in the telling? _It has happened three times. · It has happened three times, and we hope this will not affect the April order._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say an ask does to a disclosure?   **A** nothing   **B** it turns the disclosure into the price of the ask, and she will then price it   **C** it saves a meeting'));
out.push(p('**b**  Listen again. **1** What are the two things that must not be in the same breath? **2** What does he say to do with the silence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.7  "Do not sell her anything in the same breath"', [
  ['Nour', 'And at the end I say that we hope it will not affect the April order.'],
  ['Mr Sayegh', '⚠ **Then you have sold her something in the same breath as telling her, and she will price it.**'],
  ['Nour', 'I am not asking for anything. I am saying I hope.'],
  ['Mr Sayegh', '⚠ **_We hope this will not affect the April order_ is an ask with the verb taken out.** ⚠ **She hears: here is a bad thing, and here is what we want from you about it** — **and a thing you want is a thing she can withhold.**'],
  ['Nour', 'So I say nothing about the order.'],
  ['Mr Sayegh', '⚠ **You say *I am not asking for anything today*, and then you say nothing about the order, and then you let the silence sit.**'],
  ['Nour', 'How long?'],
  ['Mr Sayegh', '⚠ **Until she speaks. And she will speak, and the first thing she says will be what she actually minds about** — ⚠ **which you cannot know in advance and will get wrong if you guess.**'],
  ['Nour', 'And if she asks about the order herself?'],
  ['Mr Sayegh', '⚠ **Then it is her question and the whole conversation is different.** **Answer it plainly, and do not offer anything she has not asked for.**'],
  ['Nour', 'What about the 47,850? Do I offer it?'],
  ['Mr Sayegh', '⚠ **You state it. That is not an offer, it is arithmetic she is entitled to** — ⚠ **and there is a difference between *we owe you 47,850* and *we would be prepared to credit you 47,850*.** **The first is a fact; the second is a negotiation, and she did not open one.**'],
  ['Nour', 'And the undertaking?'],
  ['Mr Sayegh', '⚠ **After she has spoken, not before.** ⚠ **An undertaking offered before she has said what she minds about is an undertaking about what YOU mind about** — **and 11.6 is where it belongs.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Telling, and not asking**',
  table(['', 'Not', 'Say'], [
    ['**the hope**', '⚠ *we hope this will not affect the April order*', '⚠ **nothing about the order** — **and *I am not asking for anything today***'],
    ['**the money**', '⚠ *we would be prepared to credit you 47,850*', '⚠ *we owe you 47,850* — **a fact, not an offer**'],
    ['⚠ **the undertaking**', '**offered in the same breath**', '⚠ **after she has spoken** — **11.6**'],
    ['⚠ **the silence**', '**filled**', '⚠ **held until she speaks** — **and the first thing she says is what she actually minds about**'],
  ], [1.4, 3.2, 3.9]),
  '⚠ **An ask in the same breath turns the disclosure into the price of the ask, and she will price it.** ⚠ **_We hope this will not affect the April order_ is an ask with the verb taken out** — **and a thing you want is a thing she can withhold.**',
  '⚠ **Say *I am not asking for anything today*, and then mean it.** ⚠ **It is seven words, it is true, and it is the only sentence in the conversation that buys you anything** — **because it is the one that cannot be priced.**',
  '⚠ **State a sum you owe; do not offer it.** ⚠ **_We owe you 47,850_ is arithmetic she is entitled to.** **_We would be prepared to credit you 47,850_ opens a negotiation she had not opened**, **and in a negotiation a sum that was certain becomes a position.**',
  '⚠ **Hold the silence until she speaks.** ⚠ **The first thing she says is what she actually minds about** — **and it is not always the money, and it is not always the pattern, and you will get it wrong if you guess.**',
  '⚠ **And keep the undertaking back until after.** ⚠ **An undertaking offered before she has said what she minds about is an undertaking about what you mind about** — **which is a different document and a worse one.**',
  '**Practise:** Take three disclosures. Write the ask you were going to attach, take it out, and write the seven words instead.',
  '**Useful phrases:**  I am not asking for anything today  ·  we owe you  ·  an ask with the verb taken out  ·  hold it until she speaks  ·  that is for you to decide, and not today',
  '**Pronunciation – a silence held after the fact.** 🔊 **Track 11.8** Listen twice. ⚠ **The first says the fact, then *I am not asking for anything today*, and then stops** — **and the recording runs on for nine seconds of nothing.** ⚠ **The second fills the nine seconds.** **Listen to what the filling does: it makes the fact smaller and the speaker busier.** Practise stopping, and count nine.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A tells; B says nothing for nine seconds.'));
out.push(dlg(null, [
  ['A', '__________. And we owe you __________.'],
  ['B', '…'],
  ['A', '⚠ **I am not asking for anything today.**'],
  ['B', '…'],
  ['A', '…'],
  ['B', '⚠ **__________.**'],
  ['A', '⚠ **That is for you to decide, and not today.**'],
  ['B', '⚠ **And the April order?**'],
  ['A', '⚠ **Her question, so I answer it plainly and offer nothing she has not asked for.**'],
]));
out.push(table(['Role card 1 — the ask with the verb taken out', 'Role card 2 — nine seconds'], [[
  '⚠ **A ends with *we hope this will not affect the April order*.** ⚠ **B\'s job is to price it out loud, as Ms Tannous would:** ***so you are telling me this and you want me to keep the order.*** ⚠ **Then A says it without the hope, and with the seven words, and B notices that there is nothing to price.**',
  '⚠ **A says the fact and the sum, then *I am not asking for anything today*, and then must say nothing.** ⚠ **B counts nine seconds silently and then speaks** — **and what B says first is chosen by B, not by A.** ⚠ **Afterwards, A says what they expected B to raise, and compares it with what B actually raised.** **They are different about half the time.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the ask that was taken out. ⚠ Then write what the listener raised first, and whether the teller had expected it.'));
out.push(PHRASE_CARD(['I am not asking for anything today', 'we owe you', 'an ask with the verb out', 'hold it nine seconds', 'yours to decide, not today']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things you have to tell somebody. Take the ask out of each.'));
out.push(table(['The thing', 'The ask I was going to attach', 'What it would have cost', 'What I say instead'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 2, 1.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The thing is _______. The ask I was going to attach was _______. It would have cost _______. And instead I say _______, and then nothing._'));
out.push(p('**Listener task:** count how many asks were disguised as hopes. ⚠ Then ask how many were disguised as apologies, which is the harder one to see.'));
out.push(p('**Board clinic:** your teacher writes three disclosures on the board — look for *we hope*, and a sum offered rather than stated. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT I AM NOT GOING TO SAY ON WEDNESDAY. 10 June. N. Mansour.**',
  table(['', 'What I had in the draft', 'What it is', 'What it would cost'], [
    ['**1**', '⚠ *we hope this will not affect the April order*', '⚠ **an ask with the verb taken out**', '⚠ **it makes the disclosure the price of the order, and she will price it**'],
    ['**2**', '⚠ *we would be prepared to credit the thirty-three cartons*', '⚠ **an offer where a fact belongs**', '⚠ **it turns 47,850, which is certain, into a position in a negotiation she had not opened**'],
    ['**3**', '⚠ *we have already changed the way counts are made*', '⚠ **an undertaking, offered before she has spoken**', '⚠ **it is an undertaking about what I mind about** — **and she has not yet said what she minds about**'],
    ['**4**', '⚠ *I am sure you will understand that the pallets were cheaper*', '⚠ **a defence, wearing an apology**', '⚠ **it asks her to agree that the decision was reasonable, which is not hers to do and not today**'],
  ], [0.4, 3.3, 2.3, 3.8]),
  '⚠ **All four were in the draft and all four are things I would have said without noticing.** **Three of them are asks and the fourth is worse.** ⚠ **_I am sure you will understand_ asks her to approve of us while she is being told that we have been short-delivering her for two years** — **and she might have said it, out of politeness, and then I would have had her agreement to something she had had four seconds to consider.**',
  '⚠ **Row 3 is the one I had to be argued out of, because it is the thing I am proudest of.** **We HAVE changed the way counts are made.** ⚠ **And offering it before she has spoken makes it an answer to a question she has not asked** — **and if what she minds about turns out to be the April date rather than the counting, my undertaking has told her that I was not listening before she started.**',
  '⚠ **What is left, after the four come out, is about ninety seconds of talking.** **The three dates, the thirty-three cartons, the 47,850 we owe, the condition and when we knew it, and *I am not asking for anything today*.** ⚠ **And then nothing, for as long as it takes.**',
  '⚠ **And the sentence I have written on the back of the page, for myself:** ⚠ **the first thing she says will be what she actually minds about.** **I have guessed three times this week and had three different answers** — **which is how I know not to guess.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which of the four is not an ask, and what does it ask her to do?'));
out.push(item('2', 'Why is row 3 the hardest to leave out?'));
out.push(item('3', 'What is left after the four come out, and how long does it take?'));
out.push(box('Writer\'s box', [
  '**What you are not going to say — four parts:** **a table of *what was in the draft · what it is · what it would cost*** → ⚠ **the one that is not an ask** → ⚠ **the one you had to be argued out of** → ⚠ **and what is left, timed.**',
  '⚠ **Write the four things you would have said without noticing.** ⚠ **A hope · an offer where a fact belongs · an undertaking too early · a defence wearing an apology.** **They are the same four every time, and they are only visible in a draft.**',
  '⚠ **Name the defence that wears an apology.** ⚠ *I am sure you will understand that the pallets were cheaper* **asks her to approve of you while she is being told** — **and she might say yes out of politeness, which gives you an agreement she had four seconds to consider.**',
  '⚠ **Keep back the thing you are proudest of.** ⚠ **A remedy already in place, offered before she has spoken, is an answer to a question she has not asked** — **and if what she minds about turns out to be something else, it tells her you were not listening before she started.**',
  '⚠ **Then time what is left.** ⚠ **Ninety seconds: the dates, the quantity, the sum you owe, the condition and when you knew it, and the seven words** — **and a disclosure that takes ninety seconds has nothing in it that is for you.**',
  '⚠ **And write the line for yourself on the back of the page.** ⚠ **_The first thing she says will be what she actually minds about_** — **and if you have guessed three times and had three answers, that is the evidence not to guess.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what I am not going to say* for a disclosure of yours (**80 words or more**). Use the frame.'));
out.push(p('**WHAT I AM NOT GOING TO SAY ON ______________. ______________.**   **1** | ⚠ *______________* | ⚠ **an ask with the verb taken out** | ⚠ **______________**   **2** | ⚠ *______________* | ⚠ **an offer where a fact belongs** | ⚠ **______________**   **3** | ⚠ *______________* | ⚠ **an undertaking, offered before they have spoken** | ⚠ **______________**   **4** | ⚠ *______________* | ⚠ **a defence, wearing an apology** | ⚠ **______________**   ⚠ **All four were in the draft and all four are things I would have said without noticing.**   ⚠ **Row ______________ is the one I had to be argued out of, because ______________.**   ⚠ **What is left, after the four come out, is about ______________ of talking:** **______________, ______________, ______________, and *I am not asking for anything today*.** ⚠ **And then nothing, for as long as it takes.**   ⚠ **And on the back of the page, for myself:** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four things taken out, each named by kind', ''],
  ['The defence that wears an apology, identified', ''],
  ['The undertaking held back, with why it is hard', ''],
  ['What is left, timed', ''],
  ['The seven words, present', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the row they had to be argued out of. ⚠ The class says whether it was the thing the writer was proudest of — and it usually is, which is worth saying out loud as a pattern.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time somebody told you something and asked you for something in the same conversation (**200 to 240 words**). Say what they told you, what they asked for, which you remember, what you did about each, and what you think of the pairing now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _which half do you remember?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many does the writer remember the ask better than the news? Usually two of three — ⚠ **and in those two the news was the more important of the two and has been remembered as its packaging.**'));
out.push(box('Homework', ['Write your final text. Then take one disclosure you have to make, write the ask you were going to attach, and take it out (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.5 =======================
out.push(pb());
out.push(h2('11.5  The true things that are not yours to say'));
out.push(p('**Function:** leaving out what belongs to somebody else   ·   **Grammar:** _that is for them to tell you · it is true and it is not ours_   ·   **Pronunciation:** a refusal that does not hint'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something true about another company that you know from your work. ⚠ Then say who it belongs to.'));
out.push(p('**b**  Which is yours to say? _our pallets have been fifty millimetres narrow since 2023 · Mr Dallal\'s office has made the same change to two of our letters_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about a true thing that belongs to somebody else?   **A** say it if asked   **B** leave it out entirely, and do not hint at it, because a hint is the same disclosure with deniability attached   **C** mention it generally'));
out.push(p('**b**  Listen again. **1** What are the three things that are true and not hers to say? **2** What does he say about the sentence that *gestures*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.9  "True, and not yours"', [
  ['Nour', 'There are three things I know that would help her understand this, and none of them is about us.'],
  ['Mr Sayegh', '⚠ **Name them.**'],
  ['Nour', '⚠ **That Mr Dallal has a claim about the same pallets. That the bank has asked us for three years of trading. And that her own storeman has had the three receiving notes since March.**'],
  ['Mr Sayegh', '⚠ **The first is Mr Dallal\'s, the second is the bank\'s and ours together, and the third is hers.** ⚠ **Which of the three may you tell her?**'],
  ['Nour', 'The third. It is her own company.'],
  ['Mr Sayegh', '⚠ **And you will tell her the notes exist, because she needs to be able to check what you are saying.** ⚠ **You will not tell her that he has had them since March and said nothing** — **that is a thing between her and her own storeman and it is not ours to start.**'],
  ['Nour', 'And the first two?'],
  ['Mr Sayegh', '⚠ **Out. Entirely.** ⚠ **Not softened, not generalised, and above all not hinted at.**'],
  ['Nour', 'I was going to say that we have had the same question from another customer.'],
  ['Mr Sayegh', '⚠ **That is the hint, and it is the worst of the three options.** ⚠ **She will ask who, and you will either tell her, which is the disclosure you decided against, or refuse, which is the disclosure with a refusal attached** — **and she now knows there is one and cannot be told.**'],
  ['Nour', 'So a hint is a disclosure.'],
  ['Mr Sayegh', '⚠ **A hint is the same disclosure with deniability attached, and the deniability is for you and not for her.** ⚠ **If a thing is not yours to say, there is no version of it that is yours to say** — **including the version that gestures at it and lets her do the work.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**True, and whose**',
  table(['The fact', 'Whose it is', 'What you do'], [
    ['⚠ **Mr Dallal has a claim about the same pallets**', '⚠ **his**', '⚠ **out entirely** — **not softened, not generalised, not hinted at**'],
    ['⚠ **the bank has asked for three years of trading**', '⚠ **the bank\'s and ours**', '⚠ **out** — **and 10.3 is why it is not even in the room**'],
    ['⚠ **her storeman has the three receiving notes**', '⚠ **hers**', '⚠ **tell her they exist, so she can check you** — **and not that he has had them since March and said nothing**'],
    ['⚠ **the hint**', '⚠ *we have had the same question from another customer*', '⚠ **the worst of the three options** — **she will ask who**'],
  ], [3.1, 1.6, 3.8]),
  '⚠ **A true thing that belongs to somebody else is left out entirely.** ⚠ **Not softened, not generalised, and above all not hinted at** — **because a hint is the same disclosure with deniability attached, and the deniability is for you.**',
  '⚠ **Where you decline to say a thing, do not leave a shape where it was.** ⚠ *We have had the same question from another customer* **puts her in a position where she must ask who** — **and then you tell her, which is the disclosure, or refuse, which is the disclosure plus a refusal.**',
  '⚠ **Tell somebody about their own company\'s documents** — **so that they can check you** — ⚠ **and do not tell them about their own people.** **The notes exist: hers to know.** **Her storeman has said nothing since March: between her and him.**',
  '⚠ **The test is one question: if she asks who, what happens?** ⚠ **A sentence with no good answer to *who* is a sentence that should not be said** — **and *I would rather not say* after a hint is worse than silence before one.**',
  '⚠ **And do not use somebody else\'s fact to make your own disclosure easier.** ⚠ **_It has happened to another customer too_ would make Wednesday much easier for me** — **which is exactly the reason to be suspicious of it.**',
  '**Practise:** Take four true things you know from work. Say whose each one is, and what you do with it. Then write the hint you were tempted by.',
  '**Useful phrases:**  that is for them to tell you  ·  true, and not ours  ·  a hint with deniability attached  ·  if she asks who  ·  out entirely',
  '**Pronunciation – a refusal that does not hint.** 🔊 **Track 11.10** Listen twice. ⚠ **The first simply does not mention the other customer at all; the sentence goes from the dates to the sum.** ⚠ **The second pauses where the other customer would have been.** **The pause is a hint** — **and a listener hears a pause exactly where a name has been taken out.** Read the sentence four times with no gap.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a fact; B asks whose it is.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '⚠ **Whose fact is that?**'],
  ['A', '__________\'s.'],
  ['B', '⚠ **So what do you do with it?**'],
  ['A', '⚠ **Out entirely.**'],
  ['B', '⚠ **And the version you were tempted by?**'],
  ['A', '⚠ *__________.*'],
  ['B', '⚠ **If she asks who, what happens?**'],
  ['A', '⚠ **I tell her, which is the disclosure, or I refuse, which is __________.**'],
]));
out.push(table(['Role card 1 — if she asks who', 'Role card 2 — her documents, not her people'], [[
  '⚠ **A offers *we have had the same question from another customer*.** ⚠ **B asks the one question: if she asks who, what happens?** ⚠ **Either A names Mr Dallal, which is the disclosure A decided against, or A refuses** — **and then she knows a thing exists and that she may not be told it, which is worse than not knowing.**',
  '⚠ **A is unsure how much to say about the storeman.** ⚠ **B draws the line:** **the three receiving notes exist and are in her own office, and she must be told so, because otherwise she cannot check anything A says.** ⚠ **That her own storeman has had them since March and has not mentioned them is a conversation inside her company** — **and starting it is not A\'s to do.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the facts and whose each one is. ⚠ Then write the hint that was refused, and what happens if the listener asks who.'));
out.push(PHRASE_CARD(['whose fact is that?', 'out entirely', 'a hint with deniability', 'if she asks who', 'her documents, not her people']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** true things you know from your work. Sort them.'));
out.push(table(['The fact', 'Whose it is', 'What I do with it', 'The hint I was tempted by'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.2, 1.1, 1.6, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The fact is _______. It belongs to _______. So I _______. The hint I was tempted by was _______, and if they ask who, _______._'));
out.push(p('**Listener task:** count how many of the facts were about a third party. ⚠ Then ask how many of the hints would have made the speaker\'s own conversation easier, and expect all of them.'));
out.push(p('**Board clinic:** your teacher writes three sentences on the board — look for *another customer*, and a pause left where a name was removed. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**FOUR TRUE THINGS I AM LEAVING OUT. 10 June. N. Mansour. For the file, and for Mr Sayegh.**',
  table(['', 'The fact', 'Whose', 'Why it is not mine'], [
    ['**1**', '⚠ **Mr Dallal has made a claim arising from the same pallet condition**', '**his**', '⚠ **his claim, his decision when to make it public** — **and he is a customer of ours exactly as she is**'],
    ['**2**', '⚠ **the bank has the three years of trading, and the pallet finding is in the paper behind it**', '⚠ **the bank\'s and ours**', '⚠ **a customer told that her short deliveries are in a bank file learns something about our borrowing and nothing about her cartons**'],
    ['**3**', '⚠ **her storeman has held the three receiving notes since March**', '⚠ **hers** — **and his**', '⚠ **the notes: hers, and I will say they exist.** **That he said nothing: a conversation inside her company, and not mine to start**'],
    ['**4**', '⚠ **the man who bought the narrow pallets left in July 2024**', '⚠ **ours** — **and it is true and useless**', '⚠ **it explains nothing she needs and answers a question she has not asked** — **and it is Unit 7\'s refusal, applied to a conversation**'],
  ], [0.4, 3.4, 1.4, 4.1]),
  '⚠ **Row 4 is the one that is mine and is still coming out, and it is the one worth writing down.** **The decision had no author present and the man has gone.** ⚠ **Saying so on Wednesday would move the conversation to a person she has never met**, **and it would sound exactly like what it would be: an explanation of why it is not quite our fault.** **Unit 7 refused to put his name in a paper; 11.5 refuses to put it in a room.**',
  '⚠ **Row 2 is the one I would not have thought of a month ago.** **A customer who is told that her short deliveries appear in a bank file learns one thing about our borrowing and nothing at all about her cartons** — ⚠ **and she did not ask to know about our borrowing.** **The fact that something is awkward for us does not make it hers.**',
  '⚠ **And the hint I had written and have cut is in row 1\'s margin:** ⚠ *we have been asked a similar question elsewhere.* **Nine words, true, and it is Mr Dallal\'s claim with his name taken out.** ⚠ **If she asks where, I either name him or refuse** — **and she will ask, because anybody would.**',
  '⚠ **The test I have used on all four is the same one, and it is one question:** ⚠ **if she asks *who* or *where*, is there an answer I can give?** **For three of the four there is not, and for row 3 there is and it is her own office.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row is the writer\'s own fact, and why is it still being left out?'));
out.push(item('2', 'What does row 2 teach about a fact that is awkward for you?'));
out.push(item('3', 'What is the single test used on all four?'));
out.push(box('Writer\'s box', [
  '**The true things you leave out — four parts:** **a table of *the fact · whose · why it is not mine*** → ⚠ **the row that is yours and still comes out** → ⚠ **the row you would not have thought of** → ⚠ **and the hint you had written and have cut.**',
  '⚠ **Write down what you are leaving out, with whose it is.** ⚠ **A fact left out and recorded is a decision; a fact left out and not recorded is something you will say by accident in six weeks** — **because you will not remember deciding.**',
  '⚠ **Expect one of the rows to be yours.** ⚠ **_The man who bought the pallets has left_ is true, is ours, and is useless** — **it moves the conversation to a person she has never met and sounds like an explanation of why it is not quite your fault.**',
  '⚠ **An awkward fact is not thereby somebody else\'s business.** ⚠ **A customer told that her shortfalls are in a bank file learns about your borrowing and nothing about her cartons** — **and awkwardness for you is not a reason to disclose, in either direction.**',
  '⚠ **Keep the hint you cut, in the margin, with its word count.** ⚠ *We have been asked a similar question elsewhere* — **nine words, true, and somebody else\'s claim with the name taken out.** **Keeping it is how you recognise the next one.**',
  '⚠ **And apply one test to all of them:** ⚠ **if they ask *who* or *where*, is there an answer you can give?** **Where there is not, the sentence does not get said in any form.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the true things you are leaving out (**80 words or more**). Use the frame.'));
out.push(p('**______________ TRUE THINGS I AM LEAVING OUT. ______________. For the file.**   **1** | ⚠ **______________** | **______________\'s** | ⚠ **______________**   **2** | ⚠ **______________** | ⚠ **______________** | ⚠ **______________ learns something about ______________ and nothing about ______________**   **3** | ⚠ **______________** | ⚠ **theirs** | ⚠ **the document: theirs, and I will say it exists.** **The rest: a conversation inside their company, and not mine to start**   **4** | ⚠ **______________** | ⚠ **ours** — **and it is true and useless** | ⚠ **______________**   ⚠ **Row 4 is the one that is mine and is still coming out.** ⚠ **Saying it would move the conversation to ______________**, **and it would sound like ______________.**   ⚠ **Row 2 is the one I would not have thought of a month ago.** ⚠ **The fact that something is awkward for us does not make it theirs.**   ⚠ **And the hint I had written and have cut:** ⚠ *______________* — **______________ words, true, and ______________ with the name taken out.**   ⚠ **The test for all four: if they ask who or where, is there an answer I can give?**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every omission recorded, with whose fact it is', ''],
  ['One row that is the writer\'s own and still comes out', ''],
  ['An awkward fact not treated as somebody else\'s business', ''],
  ['The hint, kept in the margin with its word count', ''],
  ['The *if they ask who* test applied to all of them', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the hint they cut. ⚠ The class asks *who?* out loud — and the writer has to answer, in front of everybody, which is the fastest way to learn why the hint is the worst of the three options.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a hint somebody dropped to you about a third party (**200 to 240 words**). Say what was said, what you worked out, whether you asked, what you were told, and what you thought of the person who hinted.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did you ask who?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer ask? Usually all three — ⚠ **and in two of three they were refused, and remember the refusal better than anything else in the conversation.**'));
out.push(box('Homework', ['Write your final text. Then take four true things you know from work, write whose each one is, and write the hint you would have been tempted by (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.6 =======================
out.push(pb());
out.push(h2('11.6  The undertaking, with a date in it'));
out.push(p('**Function:** promising only what you can keep   ·   **Grammar:** _from 1 July · I will send you X on Y · what we will not do_   ·   **Pronunciation:** a date said as the main word in the sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say an undertaking somebody gave you at work. ⚠ Then say whether it had a date in it, and whether it was kept.'));
out.push(p('**b**  Which can be checked? _counts will in future be made more carefully · from 1 July the gate sheet carries a column for a part pallet, and I will send you the first month\'s sheets on 1 August_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say about an undertaking with no date?   **A** it is still worth giving   **B** it is a sentence about intentions, and the person receiving it knows that   **C** it is dishonest'));
out.push(p('**b**  Listen again. **1** What are the three parts of an undertaking that can be kept? **2** What does she say about the apology?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.11  "Give her something she can check"', [
  ['Nour', 'And then the undertaking. Counts will in future be made more carefully.'],
  ['Hala', '⚠ **That is an undertaking aimed at a man at two in the morning, and Unit 7 settled what happens to those.** ⚠ **It is also undatable, and an undertaking with no date is a sentence about intentions** — **and she knows that while you are saying it.**'],
  ['Nour', 'Then: from 1 July the gate sheet carries a column for a part pallet.'],
  ['Hala', '⚠ **A date and a thing. Better. Can you keep it?**'],
  ['Nour', 'The sheets are printed in Damascus and take about two weeks. Yes.'],
  ['Hala', '⚠ **Then three parts.** ⚠ **What changes, with a date. What you will send her, with a date. And what you will NOT do.**'],
  ['Nour', 'What I will not do?'],
  ['Hala', '⚠ **_We are not changing the pallets._** ⚠ **She will assume we are, because it is the obvious answer, and in September she will ask why the pallets are still 1,150** — **and then the undertaking we did keep is heard as the one we did not.**'],
  ['Nour', 'And the sending.'],
  ['Hala', '⚠ **_I will send you the first month\'s sheets on 1 August._** ⚠ **It is the only sentence in the whole conversation she can test**, **and it costs you one envelope.** ⚠ **An undertaking you can prove you kept is worth four you merely kept.**'],
  ['Nour', 'And the apology?'],
  ['Hala', '⚠ **Here, and nowhere earlier, and with a date attached to it.** ⚠ *I am sorry; it should have been found in August 2024, when it happened the second time.* ⚠ **An apology with a date in it is an admission of a specific failure.** **_We regret the inconvenience_ is an apology for her feelings, and she did not report her feelings, she reported eleven cartons.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**An undertaking with three parts**',
  table(['', 'Write', 'Not'], [
    ['⚠ **what changes, dated**', '⚠ *from 1 July the gate sheet carries a column for a part pallet*', '⚠ *counts will in future be made more carefully* — **aimed at a man, and undatable**'],
    ['⚠ **what you will send, dated**', '⚠ *I will send you the first month\'s sheets on 1 August*', '**nothing** — **and then she has only your word for it**'],
    ['⚠ **what you will NOT do**', '⚠ *we are not changing the pallets*', '**silence** — **and she will assume you are, because it is the obvious answer**'],
    ['⚠ **the apology**', '⚠ *it should have been found in August 2024, when it happened the second time*', '⚠ *we regret the inconvenience* — **an apology for her feelings, which she did not report**'],
  ], [1.9, 3.5, 3.1]),
  '⚠ **An undertaking with no date is a sentence about intentions, and the person receiving it knows that while you are saying it.**',
  '⚠ **Never undertake a thing that is aimed at a person.** ⚠ **_Counts will be made more carefully_ meets a man with a lorry on the apron at one in the morning** — **Unit 7 settled it, and here it would be a promise that fails by June.**',
  '⚠ **Undertake to SEND something, on a date.** ⚠ **It is the only part of the conversation she can test, and it costs one envelope** — **and an undertaking you can prove you kept is worth four you merely kept.**',
  '⚠ **Say what you will not do.** ⚠ **_We are not changing the pallets_** — **because she will assume you are, and in September the undertaking you did keep will be heard as the one you did not.**',
  '⚠ **And put the apology here, with a date in it.** ⚠ **_It should have been found in August 2024_ is an admission of a specific failure, and it is checkable** — **where *we regret the inconvenience* apologises for feelings she did not report.**',
  '**Practise:** Take three undertakings. Give each a date, a thing you will send, and a thing you will not do.',
  '**Useful phrases:**  from 1 July  ·  I will send you X on Y  ·  we are not changing  ·  it should have been found in  ·  one envelope',
  '**Pronunciation – a date as the main word.** 🔊 **Track 11.12** Listen twice. ⚠ **The first says *I will send you the first month\'s sheets on 1 August* with the stress on *August*.** ⚠ **The second stresses *send*.** **Stressed on the verb, it is a promise about yourself; stressed on the date, it is a thing in her diary.** Say it four times, stressing the date.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives an undertaking; B dates it.'));
out.push(dlg(null, [
  ['A', '__________ will in future be __________.'],
  ['B', '⚠ **Who does that, and on what day?**'],
  ['A', '…'],
  ['B', '⚠ **Then it is aimed at a person. Give me a thing and a date.**'],
  ['A', '⚠ **From __________, __________.**'],
  ['B', '⚠ **Can you keep it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now what will you send her, and when?**'],
  ['A', '⚠ **I will send __________ on __________.**'],
  ['B', '⚠ **And what will you not do?**'],
  ['A', '⚠ **__________.**'],
]));
out.push(table(['Role card 1 — the undertaking aimed at a man', 'Role card 2 — what you will not do'], [[
  '⚠ **A offers *counts will in future be made more carefully*.** ⚠ **B asks who does that and on what day, and there is no answer.** ⚠ **Then B asks what would have to be true instead** — **a document, a place or a thing, which is Unit 7** — **and A produces the column on the gate sheet, which has a date and a printer.**',
  '⚠ **A has the column and the sending and thinks the undertaking is complete.** ⚠ **B plays Ms Tannous in September:** ***so the pallets are still 1,150?*** ⚠ **A has never said they would change and she has assumed it throughout** — **and B\'s point is that the sentence costs six words now and the whole undertaking in three months.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three parts of the undertaking. ⚠ Then write the apology with its date, and say what failure it admits.'));
out.push(PHRASE_CARD(['from 1 July', 'I will send you X on Y', 'we are not changing', 'it should have been found in', 'one envelope']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** undertakings you could give at your work. Build each.'));
out.push(table(['What changes, with a date', 'What I will send, with a date', 'What I will not do', 'Can I keep it?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.1, 2.1, 1.7, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _From _______, _______. I will send _______ on _______. We are not _______. And the apology is: it should have been found in _______, when _______._'));
out.push(p('**Listener task:** count how many undertakings were aimed at a person. ⚠ Then ask how many had something to be sent on a date, and expect fewer than half.'));
out.push(p('**Board clinic:** your teacher writes three undertakings on the board — look for *in future* with no date, and an apology for somebody\'s feelings. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**TO MS MAYSA TANNOUS. 12 June. N. Mansour. The letter after the conversation.**',
  '**Dear Ms Tannous,**',
  '⚠ **This confirms what I told you yesterday morning, so that you have it in writing and can check it.**',
  '⚠ **The facts. Eleven cartons were short in March 2024, eleven in August 2024 and eleven in March this year, all three to you.** **The condition is that our pallets have been 1,150 millimetres wide since April 2023 against racks built for 1,200, and eleven cartons is one layer of the short pallet.** ⚠ **We did not connect the three occurrences because each was written up separately as a hurried count.**',
  '⚠ **The sum. Thirty-three cartons at 1,450 is 47,850, which we owe you.** **It has been credited to your account today and appears on your June statement.**',
  '⚠ **What changes. From 1 July the gate sheet carries a column for a part pallet, and no lorry leaves this yard without a figure written in it.** ⚠ **The rack drawing has been reissued in ink at 1,150 and dated, and any future change to a stated dimension will be reissued in the same way.**',
  '⚠ **What I will send you. The first month\'s gate sheets, on 1 August.** **Then nothing further unless you ask for it.**',
  '⚠ **What we are not doing. We are not changing the pallets.** **They are nine per cent cheaper and they fit a lorry better, and the racks are what will be altered, in the autumn, at our cost.**',
  '⚠ **I am sorry. It should have been found in August 2024, when it happened the second time, and the reason it was not is in our own filing and not anywhere else.**',
  '**I have asked you for nothing in this letter and there is nothing in it that needs an answer.**',
  '⚠ **Six paragraphs, two dates, one sum, and one sentence saying what we are not doing** — **and the last line is there because a letter of this kind arrives on a desk where somebody is deciding what it wants from them, and the answer is nothing.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the two dates in the letter, and what is each for?'));
out.push(item('2', 'Why does the letter say what the firm is not doing?'));
out.push(item('3', 'Why does the last line exist?'));
out.push(box('Writer\'s box', [
  '**The letter after the conversation — six paragraphs:** ⚠ **the facts, with dates** → **the sum, with where it appears** → ⚠ **what changes, with a date** → ⚠ **what you will send, with a date** → ⚠ **what you are not doing** → ⚠ **and the apology, with the date of the failure.**',
  '⚠ **Open by saying what the letter is for.** ⚠ *This confirms what I told you yesterday, so that you have it in writing and can check it.* **Seventeen words, and they tell her the letter is not a new event.**',
  '⚠ **Say where the money appears, not only that it is owed.** ⚠ *Credited today and appears on your June statement* — **because a sum she has to ask for twice is a sum she remembers differently.**',
  '⚠ **Give the undertaking a thing, a date, and an end.** ⚠ *The first month\'s sheets on 1 August; then nothing further unless you ask.* **An undertaking with no end becomes a monthly obligation nobody meant to create** — **and the one you forget in November is the one she remembers.**',
  '⚠ **Say what you are not doing and why, with the cost.** ⚠ **_We are not changing the pallets_, nine per cent cheaper, and the racks are what will be altered, in the autumn, at our cost** — **so the thing she would have assumed is answered before she assumes it.**',
  '⚠ **Date the apology to the failure, not to the event.** ⚠ *It should have been found in August 2024, when it happened the second time* — **and name where the reason lies: in your own filing and nowhere else.**',
  '⚠ **And close by saying that nothing is asked.** ⚠ **A letter of this kind lands on a desk where somebody is working out what it wants from them** — **and the answer, in this one, is nothing.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter after a conversation of yours (**80 words or more**). Use the frame.'));
out.push(p('**TO ______________. ______________. The letter after the conversation.**   ⚠ **This confirms what I told you ______________, so that you have it in writing and can check it.**   ⚠ **The facts. ______________.** **The condition is ______________.** ⚠ **We did not ______________ because ______________.**   ⚠ **The sum. ______________, which we owe you.** **It has been ______________ today and appears on ______________.**   ⚠ **What changes. From ______________, ______________.**   ⚠ **What I will send you. ______________, on ______________.** **Then nothing further unless you ask for it.**   ⚠ **What we are not doing. We are not ______________.** **______________, and ______________ is what will be altered, at our cost.**   ⚠ **I am sorry. It should have been found in ______________, when ______________, and the reason it was not is ______________.**   **I have asked you for nothing in this letter and there is nothing in it that needs an answer.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An opening saying what the letter is for', ''],
  ['The sum, with where it appears', ''],
  ['An undertaking with a thing, a date and an end', ''],
  ['What you are not doing, with the cost', ''],
  ['An apology dated to the failure, not to the event', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what we are not doing* paragraph. ⚠ The class says what the reader would have assumed without it — and where nobody can name an assumption, the paragraph may be unnecessary and should be tested rather than cut.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an undertaking at your work that was given and not kept (**200 to 240 words**). Say what was promised, whether it had a date, who was supposed to do it, when it was noticed, and what the person who had been promised did.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did the undertaking have a date in it?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the undertaking have a date? Usually one of three — ⚠ **and in the two without one, nobody could say whether it had been broken or was merely late, which is why it was never raised.**'));
out.push(box('Homework', ['Write your final text. Then take one undertaking you have given, add a thing you will send and a date, and write the sentence saying what you will not do (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.7 =======================
out.push(pb());
out.push(h2('11.7  Review & Mediate: the thing you have to say, said'));
out.push(p('**Function:** holding the shape of a disclosure in the room   ·   **Review:** the written sentence · both costs · the order of telling · telling without asking · what is not yours · the undertaking'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 11 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Why do you write the sentence down, and in what order do the hedges come out?',
  '**2** What are the two costs, and which of them is not a number?',
  '**3** Who hears it first, and what does the second person to know remember?',
  '**4** What are the seven words, and what does an ask in the same breath do?',
  '**5** What do you do with a true thing that belongs to somebody else, and why is a hint the worst option?',
  '**6** What are the three parts of an undertaking, and where does the apology go?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Tannous ask about first?   **A** the money   **B** the April order   **C** which of her own people knew'));
out.push(p('**b**  Listen again. **1** What does she say about the 47,850? **2** What does she ask for at the end, and what does she not ask for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.13  "Who in my office knew?"', [
  ['Nour', '⚠ **It has happened three times: March 2024, August 2024 and March this year, all three to you, and we did not connect them.** ⚠ **Thirty-three cartons. At 1,450 that is 47,850, which we owe you.** ⚠ **I am not asking for anything today.**'],
  ['Ms Tannous', '…'],
  ['Nour', '…'],
  ['Ms Tannous', '⚠ **Who in my office knew?**'],
  ['Nour', '⚠ **Your storeman has the three receiving notes. They are in your own files and you can check everything I have said against them.**'],
  ['Ms Tannous', '⚠ **Since when?**'],
  ['Nour', '⚠ **The third one since March.** **What he did with the first two I do not know and it is not mine to say.**'],
  ['Ms Tannous', '⚠ **That is the right answer and I will deal with it.** ⚠ **Now the money. I am not interested in the 47,850.**'],
  ['Nour', 'It is owed.'],
  ['Ms Tannous', '⚠ **It is owed and you have credited it and that is the end of it.** ⚠ **What I mind about is that I have been quoting your counts to my own customers for nineteen years** — **and three times I have passed on a figure that was wrong and apologised for it myself.**'],
  ['Nour', '⚠ **I had not thought of that.**'],
  ['Ms Tannous', '⚠ **No. You thought I would mind about the cartons.** ⚠ **Send me the gate sheets, as you said, on the first of August.** **And send me a note I can give to the two customers who were short in March, in your name and not in mine.**'],
  ['Nour', 'And the April order?'],
  ['Ms Tannous', '⚠ **You did not ask me about the April order and I am not going to raise it.** ⚠ **It is three hundred and twenty cartons on the second of May and it has not changed.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the disclosure in the room**',
  table(['What happens', 'What she says', 'What it teaches'], [
    ['⚠ **the silence, held**', '⚠ *who in my office knew?* — **not the money and not the order**', '⚠ **the first thing she says is what she actually minds about** — **and nobody had guessed it**'],
    ['⚠ **her own people**', '⚠ *since when?*', '⚠ **the notes are hers and the conduct of her storeman is hers** — *what he did with the first two I do not know and it is not mine to say*'],
    ['⚠ **the money**', '⚠ *I am not interested in the 47,850; you have credited it and that is the end of it*', '⚠ **the certain number was the small one, exactly as 11.2 said** — **and it is settled in one sentence because it was stated and not offered**'],
    ['⚠ **the real loss**', '⚠ *three times I have passed on a figure that was wrong and apologised for it myself*', '⚠ **nobody in Sham Trading had thought of it, and it is not on either side of the cost page**'],
    ['⚠ **what she asks for**', '⚠ **the sheets on 1 August, and a note for her own two customers in your name**', '⚠ **both are things to be sent** — **and the second is an undertaking she invented and you can keep**'],
  ], [1.8, 3.2, 3.4]),
  '⚠ **Hold the silence and the first thing said will be what they actually mind about.** ⚠ **Here it is not the cartons, not the money and not the order** — **it is that she has been passing on your counts to her own customers for nineteen years and has apologised three times for a figure of yours.**',
  '⚠ **Nobody had guessed it, and the cost page did not contain it.** ⚠ **That is not a failure of the cost page** — **it is why 11.4 says not to guess, and why the nine seconds are the most valuable part of the conversation.**',
  '⚠ **The money settled in one sentence because it had been stated and not offered.** ⚠ *You have credited it and that is the end of it.* **A sum offered would have been a position; a sum credited is arithmetic.**',
  '⚠ **The line to learn by heart is the refusal:** ⚠ *what he did with the first two I do not know and it is not mine to say.* ⚠ **Seventeen words, and 11.5 is all of it** — **and she answers it with *that is the right answer*, which is the only compliment in Unit 11.**',
  '⚠ **And the undertaking she asks for is better than the one you prepared.** ⚠ **A note for her own two customers, in your name and not in hers** — **and it costs an afternoon and discharges the loss that was not on your page.**',
  '**Practise:** Say your sentence, hold the silence, and write down the first thing the other person says. Then compare it with what you expected.',
  '**Useful phrases:**  who knew?  ·  it is not mine to say  ·  you have credited it and that is the end of it  ·  I had not thought of that  ·  in your name and not in mine',
  '**Pronunciation – holding a silence after a figure.** 🔊 **Track 11.14** Listen twice. ⚠ **The first says the three sentences and stops; there are eleven seconds of nothing.** ⚠ **The second fills them with *obviously we are very sorry about this*.** **Count what the filling costs: it answers the question she had not asked and delays the one she had.** Say the three sentences and count eleven.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes the disclosure; B is the customer. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A says the dates, the quantity, the sum owed and the seven words, and then stops and counts to eleven.** ⚠ **A answers what is asked and nothing else.** ⚠ **When asked about B\'s own people, A says what documents exist and refuses the rest in the form of 11.5.** ⚠ **And A does not mention the April order at any point.**',
  '⚠ **B does not ask about the money first.** ⚠ **B asks who in B\'s own company knew, and then *since when*, and then says the money is settled.** ⚠ **B then names a loss that is not on A\'s page** — **something B has had to say to B\'s own customers** — **and asks for one thing that can be sent.** ⚠ **B raises the next order only to say that it has not changed.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the first thing the customer asked. ⚠ Then write the loss that was not on the cost page, and the undertaking the customer invented.'));
out.push(PHRASE_CARD(['who knew?', 'it is not mine to say', 'that is the end of it', 'I had not thought of that', 'in your name and not mine']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a disclosure to make. Say it to **two** people. Hold the silence each time.'));
out.push(table(['Who I said it to', 'What I expected them to raise first', 'What they raised first', 'What they asked to be sent'], [['', '', '', ''], ['', '', '', '']], [1.2, 2, 2, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the conversation. This is the **eleventh** unit of this book, and the unwritten thing is this: ⚠ **you cannot know what the loss is until you have said the sentence and stopped talking** — **because the loss belongs to them and they are the only person who has been carrying it; so every page you write beforehand, with its two columns and its figures, exists to make it possible to stay silent for eleven seconds, and the eleven seconds are where the actual information is.**'));
out.push(p('_I expected _______. They raised _______. The loss I had not counted is _______. And what they asked me to send is _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _a voluntary disclosure · an unsoftened sentence · the cost of not saying it · an undertaking with a date · a concession not asked for · a conversation you cannot un-have_. ⚠ Sixty-six items now, and one unit remains.'));
out.push(p('**Board clinic:** your teacher writes three exchanges on the board — look for a silence filled with an apology, and a guess at what the other person minds about. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 1)', 10));
out.push(p('⚠ **This unit is Part 1: matching, seven questions against five short texts, and it is the third time in this book.** Read the five extracts and answer questions **1–7**. ⚠ **A text may be the answer to more than one question, and the five texts are deliberately similar** — **so hunt for the difference and not for the subject.**'));
out.push(box(null, [
  '**FIVE EXTRACTS FROM LETTERS SENT AFTER A SHORTFALL.**',
  '**A**  _We have credited your account with 47,850, which is the value of the cartons not delivered. We are not asking you to decide anything about the April order today, and there is nothing in this letter that needs an answer._',
  '**B**  _The count will in future be made inside the store rather than on the apron. The yard has been instructed accordingly and the foreman has confirmed that he understands the position._',
  '**C**  _From 1 July the gate sheet carries a column for a part pallet, and no lorry leaves without a figure written in it. I will send you the first month\'s sheets on 1 August._',
  '**D**  _We regret the inconvenience caused to you by this matter and trust that it may now be regarded as closed._',
  '**E**  _The rack drawing has been reissued in ink at 1,150 millimetres and dated. Any future change to a stated dimension will be reissued in the same way, and I will confirm to you when the first such change occurs._',
]));
out.push(p('**1**  This firm has given a date on which it will send evidence.'));
out.push(p('**2**  This firm has made a change and has told somebody else to keep to it.'));
out.push(p('**3**  This firm has paid money and asked for nothing.'));
out.push(p('**4**  This firm has undertaken something about an event that has not happened yet and may not.'));
out.push(p('**5**  This firm has apologised and has offered no undertaking at all.'));
out.push(p('**6**  This firm\'s undertaking depends on a person remembering.'));
out.push(p('**7**  This firm says that the matter is at an end.'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **Three content points, all three present.** ⚠ **This is the sixth and last Part 1 in the book; the even units take Part 2.**',
  '⚠ **For a message reporting a disclosure you have made, the three points are: what you told them · what they raised · and what you have undertaken.** ⚠ **Not how it went** — **_she took it well_ is a sentence about you, and it is the first thing a tired candidate writes.**',
  '⚠ **Report what they raised, not what you expected.** ⚠ *She asked only about April* **or** *she asked who in her office knew* — **because the whole value of a disclosure to the person who sent you is the information that came back.**',
  '⚠ **Put the undertaking in with its date, and say what you did NOT undertake.** ⚠ *The sheets on 1 August and nothing else.* **Four words for the second half, and they stop your manager inventing a second promise.**',
  '⚠ **Part 1 tip, for the five extracts above.** ⚠ **The five letters are about the same shortfall and four of the seven questions turn on a single word.** ⚠ **_Instructed_ in B is a rule aimed at a person; *no lorry leaves without a figure* in C is a thing** — **and question 6 is answered by that one difference.**',
  '⚠ **And watch question 4.** **Three of the five texts contain a promise, and only one of them is about an event that may never occur** — ⚠ **_any future change to a stated dimension_** — **where C\'s promise is about every lorry, which will certainly happen.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** You have made a difficult disclosure to a customer or a supplier. Write an internal message to your manager (**40 to 50 words**). Say **what you told them** · **what they raised** · and **what you have undertaken, with a date**.'));
out.push(p('______________ — I told ______________ this ______________: ⚠ **______________, ______________, and the ______________ we owe.** ⚠ **______________ asked only about ______________.** ⚠ **I have undertaken to send ______________ on ______________ and nothing else.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What you told them, as facts', ''],
  ['What they raised, not what you expected', ''],
  ['The undertaking, with a date', ''],
  ['What you did not undertake', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that somebody has to say and nobody has said (**200 to 240 words**). Say what it is, who has to say it, who has to hear it, what it costs to say, what not saying it costs, and who already holds the evidence.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then say the sentence you have been not saying, to the person it is about, and write down the first thing they say (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 11 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  It has ___ three times.   a) happen   b) happened   c) happening',
  '2  I am not asking ___ anything today.   a) of   b) to   c) for',
  '3  We ___ you 47,850.   a) owe   b) owing   c) owed',
  '4  I would rather you ___ it from me.   a) hear   b) heard   c) hearing',
  '5  That is for you ___ decide.   a) to   b) for   c) of',
  '6  The gate sheet ___ carry a column from 1 July.   a) will   b) would   c) shall',
  '7  It is true and it is not ___ to say.   a) our   b) ours   c) us',
  '8  ___ she asks who, there is no answer I can give.   a) Unless   b) If   c) Whether',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 11.15** Listen to a disclosure and the reply. Complete the note.   What the first three sentences contain: ______   What she asks about first: ______   What she is told about her own storeman, and what she is not: ______   What she says about the money: ______   The loss nobody had counted: ______   The two things she asks to be sent: ______   What she says about the next order: ______'));
out.push(p('**C  Reading.** Read the letter at 11.6 again. Name its six paragraphs in order, and say what the last line is for.'));
out.push(p('**D  Writing.** Take something you have to tell somebody. Write the sentence with the hedges out; then the two costs, one as a figure; then an undertaking with a date and a thing you will not do (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 11.15  Audio script (read after the check)', [
  ['Nour', '⚠ **It has happened three times: March 2024, August 2024 and March this year, all three to you, and we did not connect them.** ⚠ **Thirty-three cartons, which at 1,450 is 47,850, and we owe it to you.** ⚠ **I am not asking for anything today.**'],
  ['Ms Tannous', '⚠ **Who in my office knew?**'],
  ['Nour', '⚠ **Your storeman has the three receiving notes, in your own files, and you can check everything I have said against them.** ⚠ **The third since March. What he did with the first two I do not know and it is not mine to say.**'],
  ['Ms Tannous', '⚠ **That is the right answer and I will deal with it.** ⚠ **I am not interested in the 47,850** — **you have credited it and that is the end of it.** ⚠ **What I mind about is that I have been quoting your counts to my own customers for nineteen years, and three times I have passed on a figure that was wrong and apologised for it myself.**'],
  ['Nour', '⚠ **I had not thought of that.**'],
  ['Ms Tannous', '⚠ **No. You thought I would mind about the cartons.** ⚠ **Send me the gate sheets on the first of August, as you said.** ⚠ **And send me a note I can give to the two customers who were short in March, in your name and not in mine.** ⚠ **You did not ask me about the April order and I am not going to raise it** — **three hundred and twenty cartons on the second of May, unchanged.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**11.1** write the sentence in full and take the hedges out, meaning first and tone last',
  '**11.2** count the certain cost and the one that is not a number, and name who holds the evidence',
  '**11.3** tell the principal first, in person, and say the thirteen words',
  '**11.4** say the seven words, state a sum rather than offer it, and hold the silence',
  '**11.5** leave out a true thing that is not yours, in every version including the hint',
  '**11.6** give an undertaking with a thing, a date and an end, and date the apology to the failure',
  '**11.7** say it, stop, and write down the first thing they say',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 12 — **The Decision You Take**: Beirut or Damascus, the four papers behind it, and the sentence you will be held to._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 11 · Student\'s Book');
module.exports = out;
