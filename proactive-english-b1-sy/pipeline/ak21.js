// Proactive English B1 · Syria Edition · Book 2 · Unit 21 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 21  Negotiating and Compromise — Answer Key'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One distinction carries the whole unit: a _position_ against a _need_.** A position has one shape and can only be met or refused. A need has three or four shapes, and one of them may cost you nothing at all. Ask _why that?_ of every demand a student reports, three times, and the unit teaches itself.',
  '**21.3 is the hardest cycle in the book so far, and not for linguistic reasons.** Saying what you would give up is easy; naming **in exchange for what**, in the same sentence, is almost impossible for most adults, because it feels like bargaining. Expect resistance, and answer it with the evidence in the cycle: a concession with no exchange named is remembered a year later as a **precedent** and not as a kindness.',
  '**21.5 is the other half of 21.3 and is equally resisted.** Students believe that an unstated limit is generous. It is unreadable: the other side cannot tell where the end is, so they keep making arrangements they will have to unmake. Teach the test — **a limit is about what you cannot do; a threat is about what you might do to them** — and make the class sort their own sentences by it.',
  '**What you need in the room.** For 21.1, one negotiation each **and the other side\'s column, in the other side\'s words**. A class that arrives with only its own column spends the cycle discovering it cannot do the task — which is instructive once and a waste of an hour twice, so ask for it in the Unit 20 lesson and ask again.',
  '**And the sentence the unit turns on**, which is Ms Huda\'s in 21.7: _a concession is felt by the person who makes it and merely received by the person it is made to._',
], C.lblue, C.navy));

// ===================== 21.1 =====================
out.push(pb());
out.push(h2('21.1  What they want, and what they need'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the second question is the stage: _are those their words, or yours?_ About half the board will turn out to be the student\'s translation — _he is obstructive_, _she is possessive about her ward_, _they do not care_ — and a translated need cannot be worked with, because it has already been turned into something to refuse.'));
out.push(A('**b** **1** position   **2** need   **3** position   **4** need   **5** position   **6** need. Note the pattern in the three pairs: each need has several shapes and each position has one, and 2, 4 and 6 are the needs underneath 1, 3 and 5.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – what she wants is somebody to lead the report (and take the rota meeting, and not go over her head); what she needs is not to be the only person in the building who can answer a question about nights.'));
out.push(A('**b** **1** Because she had been negotiating against the three **positions**, and all three are shapes of one need — so she had been preparing to refuse one of three demands instead of meeting one need.   **2** A need has three or four shapes, and **one of them may cost you nothing** — which is the only reason two sides ever find an agreement they both prefer to the one they came in with.'));
out.push(NOTE('The practical tool is the question **_why that?_**, asked three times, politely. It turns almost any position into a need, and it is the question people do not ask, because it sounds like a challenge when it is the opposite. The other thing to insist on is Rasha\'s honesty: _I do not know it. I think it, and the way to find out is to ask her._ A need you have inferred and not checked is a theory, and acting on an unchecked theory about somebody\'s motives is how a negotiation becomes an argument about character — which is why 21.1\'s model ends with _I shall not tell her what I think she needs_.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _What the supplier wants is orders a fortnight earlier. What he needs is to know by the Tuesday how many to put on the Thursday lorry. The costless shape: I can tell him a figure on the Tuesday that I am allowed to change by ten per cent._',
  '**2** _What my manager wants is the report. What she needs is not to spend three weekends on it again. The costless shape: I collect the figures, which takes me four hours and her three weekends._',
  '**3** _What the day staff want is the handover at eight. What they need is the three things that matter at the front. The costless shape: three names written at the top by hand, forty seconds._',
  '**4** _What the office wants is the form by the 20th. What they need is to close the month in one batch. The costless shape: I send it on the 18th, which costs me nothing at all._',
  '**5** _What my son wants is the car on Friday. What he needs is not to ask me every week. The costless shape: Fridays are his, written on the calendar, and neither of us mentions it again._',
]));
out.push(A('Item 4 is the one to read out, because the costless shape is **absolutely free** and was invisible for months: the student had been negotiating about a deadline and the other side needed a batch. Ask the room how many of their own positions have a date in them that is a proxy for somebody else\'s batching problem; it is a very common shape.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** What she wants is somebody to lead the September report. Those are her words.',
  '**B:** Why that?',
  '**A:** Because it took her three weekends last year.',
  '**B:** And why that?',
  '**A:** Because there is nobody else who can write it, and there has been nobody else since 2022.',
  '**A:** So what she needs is not to be the only person who can answer a question about nights.',
  '**B:** And which shape of that need would cost you nothing?',
  '**A:** A second person on nights trained on the pump settings. Forty minutes of my own time — and it is the first thing on my own list.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Three or four of the eight will have a costless shape. That is the finding and it is worth writing on the board: **in about half of all negotiations there is a way of meeting the other side\'s need that costs the speaker nothing**, and it is invisible until somebody has asked _why that?_ three times. The three questions take ninety seconds and most people have never asked the second one.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _What I want: the half-sheet back for urgent jobs. What they want, in their words: "everything through the system, so the audit trail is complete" — that is the storeman\'s phrase from October. What I think they need, and I may be wrong: to be able to show, to whoever asks, that nothing was issued without a record. The half-sheet and the system are two shapes of a record, and I have been arguing about paper._',
  '**b** _My partner says the costless shape is a half-sheet with a number on it that is entered in the system at the end of the day — the workshop gets it in the hour, the audit trail is complete, and the only extra cost is four seconds of writing a number. And the one question that would tell me whether the need is real is: could you tell me who asks you for the audit trail, and how often?_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha has been asked to think about the night practice lead post, and the letter says the ward manager will discuss it with her before the end of the year. She has spent a month making a list of what she wants, and this week she made the other list, and the other list has changed everything. Her own is short: the three-night blocks kept, somebody else trained on the pump settings, and the trolley question answered by somebody who is not her. The other list — what the manager wants, in her words as far as Rasha can reconstruct them — is somebody to lead the September report next year, somebody to take the Thursday rota meeting, and somebody who will not go over her head to the directorate. Omar said those are three things she wants from Rasha, and Rasha agreed, and said that when she wrote them down she thought she could give two of the three and the third was impossible — and then she sat with it for two days and now thinks all three are positions. What her manager actually needs is one thing underneath all three: not to be the only person in that building who can answer a question about nights, which she has been for four years. The report, the rota meeting and the directorate are three shapes of the same need, and Rasha had been negotiating against the shapes. Lubna asked how she knows, and she said she does not know it, she thinks it, she can be wrong, and the way to find out is to ask — which she has never done in nine years, because she has spent nine years assuming that what her manager says is what she means. Ms Huda said a position has one shape and can only be met or refused, and a need usually has three or four, and one of them may cost you nothing. Rasha said the first thing on her list is the second thing on her manager\'s, and she has been carrying them as two negotiations.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ What she needs are three things. → ✓ what she needs **is**… _(singular after a_ what_-clause, 19.5)_.   ✗ What she wants is she gets the report. → ✓ _…is somebody to lead the report_.   ✗ She wants that I lead the report. → ✓ _she wants **me to lead** it_ _(18.5)_.   ✗ I think she needs to not be alone. → ✓ _needs **not to be** alone_.   ✗ He is obstructive. _(a translation, not their words)_ → ✓ quote what they said.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** _"Somebody who will not go over my head to the directorate"_ — the manager\'s own phrase, used in October, which Rasha wrote down the same evening because it sounded strange.'));
out.push(A('**2** That the manager may simply want the report written, because writing it took her three weekends last year. She would rather find that out in the meeting than guess it now, because if that is the need the answer is still hers to give and it is a smaller answer.'));
out.push(A('**3** She will not tell the manager what she thinks she needs. If she opens with her theory about her, the meeting becomes a conversation about the manager\'s character and she will lose it in two minutes, and deserve to.'));
out.push(A('The paragraph to teach from this model is **how I could be wrong**. Nobody writes it, and it prevents the commonest disaster in negotiation, which is arriving with a theory about somebody and then defending the theory instead of pursuing the agreement. Note also that Rasha\'s alternative explanation is **more** flattering to the other side, not less; a writer who can only imagine unflattering alternatives has not got out of their own chair.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**BEFORE THE MEETING · the half-sheet** · F. Haddad · December',
  '**What I want.** The half-sheet reinstated for urgent jobs only, in parallel with the system entry.',
  '**What they want, in their words.** "Everything through the system, so the audit trail is complete" — the storeman\'s phrase, 3 October.',
  '**What I think they need, and I may be wrong.** To be able to show, to whoever asks, that nothing left the stores without a record. The system and the half-sheet are two shapes of a record, and I have been arguing about paper.',
  '**How I could be wrong about it.** He may simply dislike loose paper, having spent 2021 chasing half-sheets that were never entered. If that is it, the answer is a numbered pad and not an argument.',
  '**The shape that costs me nothing.** A half-sheet with a number on it, entered in the system the same day. The workshop sees the job in the hour and the record exists. Four seconds of writing.',
  '**The question I shall ask first.** "Could you tell me who asks you for the audit trail, and how often?"',
  '**And what I shall not do.** I shall not say that the system is slow. It is not slow; it is released once a day, which is a different sentence and not his fault.',
]));
out.push(S('Stage 7 · Write freely (sample, 187 words)'));
out.push(SAMPLE([
  '**BEFORE THE MEETING · the night practice lead** · R. Barakat · for nobody but me · 14 December',
  '**What I want.** Three things. The three-night blocks kept beyond the trial. One other person on nights trained on the pump settings. And the trolley question answered by somebody who is not me.',
  '**What she wants, in her words.** Somebody to lead the September report next year. Somebody to take the Thursday rota meeting. And — this is the phrase she used in October and I wrote it down the same evening — "somebody who will not go over my head to the directorate".',
  '**What I think she needs, and I may be wrong.** Not to be the only person in that building who can answer a question about nights. She has been the only one since 2022. All three of the things she wants are shapes of that, and I had been treating them as three demands.',
  '**How I could be wrong about it.** She may simply want the report written, because writing it took her three weekends last year. If that is the need, the answer is still mine to give and it is a smaller answer, and I should rather find that out in the meeting than guess it now.',
  '**The shape that costs me nothing.** A second person on nights trained on the pump settings. Forty minutes of my own time, unpaid, and it is the first thing on my own list.',
  '**The question I shall ask first, and I have never asked it in nine years.** "Which of the three matters most to you, and why that one?"',
  '**And what I shall not do.** I shall not tell her what I think she needs. If I open with my theory about her, the meeting becomes a conversation about her character and I shall lose it in two minutes, and deserve to.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On their words and not yours: the October phrase is quoted and dated, and it is the only line on the page I could not have predicted. On want against need: the three-shapes argument is convincing, and the sentence that makes it so is that you had been negotiating against the shapes. On how you could be wrong: it is there and it is generous, and I would add what you will do in the first two minutes if the three weekends turn out to be the whole of it — because at present the page has one plan and two theories."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts. How many had a second column before today — usually two or three out of eleven. And how many found that something on their own list is also a shape of the other side\'s need: about half. In each of those cases two people have been carrying one item as two separate negotiations, sometimes for years, and neither has found out. That is the figure to leave on the board.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked her which of the three mattered most and why that one. She said the rota meeting, which I had put third, and the reason is not what I expected: the Thursday meeting is where the directorate\'s scheme is explained to the ward, and she has explained it alone eleven times and been contradicted twice by people who had not read it. So the need is not quite what I wrote. It is not to be the only person in the room who has read the scheme. That is a smaller thing than I had guessed and I can do it this month, and I would never have reached it from my own column.']));

// ===================== 21.2 =====================
out.push(pb());
out.push(h2('21.2  Provided that, and as long as'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The second half — what the student wishes they had attached — is the stage, and it will be concrete in every case: a day, a name, a diary entry, a line in a minute. Nobody ever wishes they had attached a feeling.'));
out.push(A('**b** **1** _…provided that the agenda comes to me on the Tuesday._   **2** _…as long as it is in the January rota._   **3** _…provided that the order is confirmed in writing._   **4** _…as long as it is the last time this month._   **5** _…provided that somebody else collects the figures._ ⚠ All five take the **present** after the conjunction.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – forty minutes each for two colleagues, provided that the January letter is attached to the request so that the date in it belongs to somebody besides her.'));
out.push(A('**b** **1** Her September offer had nothing attached to it: nothing happened, she was thanked in front of eleven people in October, and in November the offer appeared in the department\'s return to the directorate as evidence of in-house training that had not taken place.   **2** It gives them **something to do** — _a condition is the part of the offer the other person can act on_.'));
out.push(NOTE('This is the counter-intuitive cycle and the sentence to put on the board is Umm Kinan\'s: _without a condition the deputy head could not have refused and could not have arranged it either — she had nothing to arrange._ An unconditional offer is a **feeling**: kind, sincere, and containing nothing for anybody to do, so nothing is done and later it is quoted. The second argument is the one students find persuasive once they hear it: a condition **protects the other person too** — _if I am ill in January, the diary entry is still there and somebody else can do it._ A condition turns a personal offer into an arrangement that survives the person who made it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I will cover the Thursday handover for the month, provided that it is in the rota by Friday._',
  '**2** _I will show one person the pump settings, as long as the forty minutes is in somebody\'s diary before the review._',
  '**3** _I will write the January piece, provided that the figures reach me by the 10th._',
  '**4** _You may use the room on Thursdays, provided that the key is signed out in the book._',
]));
out.push(A('Every condition is **doable in under a minute** by the person it is addressed to: a line in a rota, a diary entry, a signature. Make the class apply that test to their own, because the commonest failure here is a condition that needs a meeting — which is not a condition but a second negotiation, and it is why an offer that looked generous ends in nothing.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I will show two colleagues how to use the projector.',
  '**B:** And what am I supposed to do with that?',
  '**A:** I will show two colleagues how to use the projector, provided that the two forty-minute slots are in the cover diary before the end of term, with the names against them.',
  '**B:** Then I shall put them in the cover diary, and I can do it this afternoon.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Mark each condition **doable in under a minute** or not. The ones that are will be met; the others are second negotiations wearing a condition\'s clothes. Then make the point that matters outside the room: a student whose condition fails this test should make it **smaller**, not drop it — the answer to _provided that the department agrees a policy_ is _provided that it is in the rota by Friday_.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _In June I offered to read anybody\'s English letters before they sent them. Nothing was attached. Two people asked me in June, nobody since, and in October a colleague told a meeting that "there is support available in the department for English correspondence", which is now a sentence in somebody\'s plan. Remade: I will read up to three letters a month, provided that they reach me by the Wednesday and that whoever sends one tells me when it has to go._',
  '**b** _My partner says the Wednesday is doable in under a minute and the second half is not quite — "tells me when it has to go" is a thing they do while sending, so it is free. She says the real condition should be a number: three a month, which is the part that makes it refusable and therefore real._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['In September Umm Kinan offered to show two colleagues how to use the projector — forty minutes each, in her own room, in her own time. Nobody asked her to and she meant it entirely. And nothing happened; and in October the deputy head thanked her for it in front of eleven people; and in November her offer appeared in a paragraph of the department\'s return to the directorate as evidence that in-house training is taking place — without one minute of it having taken place. She is not angry with anybody, because an offer with nothing attached to it is a sentence somebody else can use. What should have been attached is a day: "I will show two colleagues how to use the projector, provided that the forty minutes is in somebody\'s diary before the end of term." Thirteen words, and the paragraph in the return could not have been written. Now there is a letter naming the twentieth of January, so this time the offer has the condition in it: she will run the forty minutes provided that the January letter is attached to the request, so that the date belongs to somebody besides her. Lubna asked whether a condition does not look as though you are being difficult, and Umm Kinan said that is what she believed for twenty-four years and she now thinks it is the other way round: without a condition the deputy head could not have refused and could not have arranged it either — the condition is what gives her something to do. Ms Huda said a condition is not a defence, it is the part of the offer the other person can act on. And it protects them too: if Umm Kinan is ill in January, the diary entry is still there and somebody else can do it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ provided that the letter will be attached → ✓ **is** attached.   ✗ as long the order is confirmed → ✓ as long **as**.   ✗ on the condition the room is free → ✓ on **condition that** / on **the** condition **that**.   ✗ provided that it is taken seriously _(a wish)_ → ✓ a condition they can do.   ✗ I will do it in case the slots are in the diary. → ✓ **provided that**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That the two forty-minute slots are entered in the cover diary before the end of term, with the two names against them — _two lines in the cover diary and two names. I should think under a minute._'));
out.push(A('**2** Nothing happened; and in November it appeared in the department\'s return as evidence of in-house training that had not happened. She describes it as: _a sentence with no date in it is available to whoever needs a sentence._'));
out.push(A('**3** _If I am ill in January, the diary entry is still there and somebody else can take them_ — which an offer in her name alone could never have survived.'));
out.push(A('The move students will want to omit is _what it does for me, and I may as well say it_: **the visibility is the whole of what I am asking for.** A condition whose purpose is hidden is read as suspicion; a condition whose purpose is stated is read as a term. And the sentence about the November return is worth studying as a model of describing a wrong without accusing anybody — it attributes the whole thing to a property of the sentence rather than to a person, and it is both true and unanswerable.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO THE WARD MANAGER · the pump settings** · R. Barakat · December',
  'I offered in October to show somebody else on nights how to change the pump settings. I am making the offer again, with one condition attached.',
  '**The offer.** I will take one other member of the night staff through the pump settings, for forty minutes, on a night I am on anyway.',
  '**The condition.** Provided that the name and the night are in the rota before the review in January.',
  '**Why the condition and not simply the offer.** Because in October the offer gave you nothing to arrange. You could not refuse it and you could not organise it, and in December "pump training" appeared as a line in the ward\'s own return with nothing behind it.',
  '**What the condition costs you.** One name and one date in a rota you are writing anyway. Under a minute.',
  '**What it does for me, and I may as well say it.** If it does not happen, that will be visible in January, and the visibility is the whole of what I am asking for.',
  '**And what it does for you.** If I am on leave when the review comes, the rota entry still exists and the training is still somebody\'s.',
]));
out.push(S('Stage 7 · Write freely (sample, 182 words)'));
out.push(SAMPLE([
  '**TO THE DEPUTY HEAD · the forty minutes** · S. Dibo · 15 December',
  'I offered in September to show two colleagues how to use the projector — forty minutes each, in my room, in my own time. I am making the offer again, and this time with one condition attached to it, for a reason I shall give at the end.',
  '**The offer.** I will take two colleagues, separately, for forty minutes each, in Room 9, in January.',
  '**The condition.** Provided that the two forty-minute slots are entered in the cover diary before the end of this term, with the two names against them.',
  '**Why the condition and not simply the offer.** Because an offer with nothing attached to it gave you nothing to arrange. You could not refuse it and you could not organise it, and in November it appeared in the department\'s return to the directorate as evidence of in-house training that has not yet happened. I am not raising that as a complaint and I do not think anybody did it deliberately: a sentence with no date in it is available to whoever needs a sentence.',
  '**What the condition costs you.** Two lines in the cover diary and two names. I should think under a minute.',
  '**What it does for me, and I may as well say it.** It means that if the forty minutes does not happen, that will be visible, and the visibility is the whole of what I am asking for. I have offered things in that building for twenty-four years and I have never once attached a day to one.',
  '**And what it does for you.** If I am ill in January, the diary entry is still there and somebody else can take them.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On the condition being doable in under a minute: two diary lines and two names is as small as a condition can be, and the smallness is what will get it done. On the cost stated in time: putting _under a minute_ in the fourth line answers the only question the reader actually has. On what the condition does for them: the illness sentence is the one I would move up, because it is the part that makes the condition sound like care rather than like caution."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the unconditional offers made in the last year, and then count how many produced anything. The second number is much the smaller, and the reason is not ingratitude — an unconditional offer contains nothing to do. Then the uncomfortable half: how many were later quoted by somebody as evidence of something? In an adult class there is usually at least one, and it changes how the room writes offers for the rest of the course.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The standing offer I have never put a day on is to help my sister-in-law with her son\'s English. I have been offering it for about two years. I wrote one sentence: "I will do an hour with him every Saturday at eleven in December and January, provided that he brings the book from school." She answered in four minutes, which is faster than she has ever answered anything, and said that she had not known whether I meant it. Two years of meaning it, and the sentence that made it real had a time of day in it.']));

// ===================== 21.3 =====================
out.push(pb());
out.push(h2('21.3  I would be prepared to, if you would'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and write only the **second** halves on the board. Several students will not have one, and a few will produce something that is not a thing — _if you would be reasonable about it_, _if you appreciate it_. Those are the material for the cycle: an exchange that cannot be written in a document is not an exchange.'));
out.push(A('**b** Open; insist that each second half is a **thing**. Specimens: **1** _…if the Friday is mine for the rest of the month._   **2** _…in exchange for the urgent jobs going straight to the workshop._   **3** _…as long as the price is held until March._   **4** _…in exchange for one figure from the workshop log._   **5** _…if somebody else collects the figures._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the second training day in January, in exchange for the last forty minutes of both days being unminuted.'));
out.push(A('**b** **1** Each time, the thing he gave up became the **new starting point** and the thing he got became a **favour**. In 2022 he took on two extra towns and said nothing, and two towns is now simply what a representative does there — nobody decided it; he conceded it and did not say so.   **2** Not a negotiation but a **retreat** — and it is remembered afterwards as a **precedent**, not as a kindness.'));
out.push(NOTE('The argument for one sentence rather than two paragraphs is the one to teach, because it is about paper and not about trust, and therefore cannot offend anybody: **in a year neither side will have both paragraphs; they will each have one, and whichever one they have will be the whole agreement.** Say it in those words. Then the harder half: everybody can name what they would give up, and naming what they want for it feels like bargaining — which is why **the second half is the only part of this cycle worth practising**, and why Stage 3 asks the question _in exchange for what?_ eight times.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I would be prepared to work the Thursday evenings in January, in exchange for the Friday mornings being mine for the rest of the year._',
  '**2** _I would be prepared to wait six weeks instead of four, in exchange for the delivery date being put in writing._',
  '**3** _I would be prepared to enter every urgent job in the system, in exchange for the half-sheet going to the workshop at the same time._',
  '**4** _I would stop asking about the trolley, in return for one figure from the workshop log each quarter._',
  '**5** _I could take the September report on, as long as somebody else collects the figures._',
]));
out.push(A('Every second half is a **thing** that could be written into a minute: a morning, a date in writing, a sheet, a figure, a person collecting figures. Test the class\'s versions against that single question — _could a clerk write that into a minute?_ — and reject _in exchange for some flexibility_, _in return for a bit of goodwill_ and _as long as it is appreciated_, which are the three commonest non-things.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I would be prepared to give up the extra day in January.',
  '**B:** In exchange for what?',
  '**A:** I would be prepared to take the second day in January, in exchange for the last forty minutes of both days being unminuted and unreported.',
  '**B:** And what happened the last time you gave something up without saying that?',
  '**A:** 2022. Two extra towns. Two towns is now what a representative does here, and nobody decided it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Most of the eight can name what happened the **last** time they conceded without an exchange, and the shape is almost always identical: the thing given up became the new starting point and the thing received became a favour. Let four or five of them be said out loud with the years attached — 2022, 2019, five years ago — because the pattern is only persuasive when the room hears that it is not one person\'s bad luck.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The biggest thing I ever conceded without naming an exchange was in 2021: I took the night handover for the whole ward instead of my own bay, because the sister who did it left and nobody replaced her. I said nothing about an exchange because it was six weeks "until they appoint". It is four years. It is now what the night sister does, and it is in no job description anywhere. What I am negotiating now is the post, and the sentence is: I would be prepared to lead the September report, in exchange for one other person on nights being trained on the pump settings before the review._',
  '**b** _My partner says my second half is a thing — a name and a date in a rota — and that the first half is too big: leading a report is three weekends and training somebody is forty minutes, so I should ask for more. I think she is right and I shall add the figures clause._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Fares has had the answer about the forty minutes and it is a half. They will do the forty minutes unminuted — and they want the second day in January, which he asked for in the letter he threw away, and they want it because the new product training lands in January and they are short of days. He is being offered the thing he wanted and asked to take on a day he also wanted, and the two are not connected in their letter at all — which means that if he says yes to both, in a year the forty minutes will be a thing they gave him and the second day will be a thing he asked for, and both of those will be wrong. Nour asked whether that matters if he gets both, and he said it matters in the next negotiation, which is in a year, and he has been in this trade eleven years and every year he has the same conversation from a worse position. The last three times he gave something up he said nothing about an exchange, because naming one felt like bargaining and he thought he was above it. Each time the thing he gave up became the new starting point and the thing he got became a favour: in 2022 he took on two extra towns and said nothing, and two towns is now what a representative does — nobody decided that, he conceded it and did not say so. So the sentence is one sentence with both halves in it: "I would be prepared to take the second day in January, in exchange for the last forty minutes of both days being unminuted and unreported." Not two paragraphs — because in a year nobody will have both paragraphs, they will have one, and whichever one they have will be the whole agreement. Ms Huda said a concession with no exchange named is not a negotiation, it is a retreat, and it is remembered afterwards as a precedent and not as a kindness. And Fares said the second half is the hard one: he can say what he would give up all day. Ms Huda said everybody can, which is why the second half is the only part of the cycle worth practising.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ in exchange of → ✓ in exchange **for**.   ✗ in exchange for the minutes are not taken → ✓ for the minutes **not being** taken.   ✗ I would be prepared take it → ✓ prepared **to** take it.   ✗ if you would to agree → ✓ if you **would agree**.   ✗ in exchange for some flexibility _(not a thing)_ → ✓ name the thing a clerk could minute.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because in a year neither of them will have both paragraphs: they will each have one. If the two things are agreed separately, the forty minutes becomes something they gave him and the second day something he asked for, and both will be untrue and neither will be able to show otherwise.'));
out.push(A('**2** He took on two extra towns without naming an exchange. _Two towns is now simply what a representative does here — nobody decided it, I conceded it and did not say so._'));
out.push(A('**3** That he does not know whether forty unminuted minutes will bring the two representatives back — _I think it will and I may be wrong_ — and he would rather put it in writing now than be asked in March why it has not worked.'));
out.push(A('Two things to teach. The **story of the earlier concession, with its year**: it explains why the letter is exact and it is the only part a reader will remember, and without it the exactness reads as suspicion. And the **ending on something he may be wrong about, with a month**: a letter that claims its exchange will certainly work invites exactly the question it is trying to avoid, and the date is what turns a risk into a review.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO THE WARD MANAGER · the September report** · R. Barakat · December',
  'Thank you for the twenty minutes on Tuesday. I am writing one sentence of agreement and then the reason it is one sentence.',
  '**The sentence.** I would be prepared to lead the September report next year, in exchange for one other member of the night staff being named and trained on the pump settings before the January review.',
  '**Why it is one sentence and not two paragraphs.** Because in a year neither of us will have both. If they are agreed separately, the report becomes something I took on and the training becomes something I asked for, and in next December\'s conversation both of those will be wrong.',
  '**What I am not doing.** I am not making the report conditional on the blocks, and I am not asking for anything for the forty minutes of training itself, which I shall do on a night I am on anyway.',
  '**Why I am being this exact, which is about me.** In 2021 I took the night handover for the whole ward instead of my own bay, because the sister who did it left. It was six weeks "until they appoint". It is four years, it is in no job description, and nobody decided it — I conceded it and said nothing.',
  '**What this gives you.** The report written by somebody who has the figures, and a second person on nights who can change a pump setting.',
  '**And one thing I may be wrong about.** I do not know whether one more trained person is enough. I think it is and I would rather say so now than be asked in June.',
]));
out.push(S('Stage 7 · Write freely (sample, 191 words)'));
out.push(SAMPLE([
  '**TO THE TRAINING MANAGER · your letter of 12 December** · F. Kayyali · 16 December',
  'Thank you for the answer on the forty minutes. I am writing one sentence of agreement and then the reason it is one sentence.',
  '**The sentence.** I would be prepared to take the second training day in January, in exchange for the last forty minutes of **both** days being held with the door shut, unminuted and unreported, from January onwards.',
  '**Why it is one sentence and not two paragraphs.** Because in a year neither of us will have both paragraphs. We shall each have one. If the two things are agreed separately, then in a year the forty minutes is something you gave me and the second day is something I asked for, and both of those will be untrue and neither of us will be able to show otherwise.',
  '**What I am not doing.** I am not making the second day conditional on anything else, and I am not asking for it to be paid differently. The exchange is the forty minutes and nothing beside it.',
  '**Why I am being this exact, which is about me and not about you.** Three times in eleven years I have given something up and said nothing about an exchange, because naming one felt like bargaining. In 2022 I took on two extra towns that way. Two towns is now simply what a representative does here — nobody decided it, I conceded it and did not say so, and I have negotiated from a worse position every year since.',
  '**What this gives you.** A second day in January, which you need because the new product training lands in the same month, and a representative who will take it without a further conversation.',
  '**And one thing I should say about the two who stopped asking questions.** I do not know whether forty unminuted minutes will bring them back. I think it will and I may be wrong, and I would rather put that in writing now than be asked in March why it has not worked.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On both halves in one sentence: it is one sentence, the hinge is _in exchange for_, and there is nothing else inside it, which is the part most people cannot manage. On the exchange being a thing: _unminuted and unreported_ is minutable, and that is the test. On your own earlier concession: the two towns with the year on them is why the whole letter reads as exactness rather than as hardness, and I would not cut a word of it."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Let the years be said out loud. The conclusion to offer, and it is not about character: nobody in the room is a weak negotiator. They gave things up without naming an exchange because naming one felt like bargaining, and a year later a page existed and the page said what it said. The remedy is one sentence with a hinge in the middle of it, and it takes four seconds longer to write.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['2021, the night handover for the whole ward. The sentence I would write now: "I would be prepared to take the handover for the whole ward from the first of March, in exchange for it being written into the night sister\'s duties when the post is next advertised." Twenty-eight words. If I had written it in 2021 the post would have been advertised in 2022 with the handover in it, and the person who takes it after me would be paid for a thing I have done free for four years.']));

// ===================== 21.4 =====================
out.push(pb());
out.push(h2('21.4  In that case'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Several students will have said _all right_ to the last counter-offer they were given, and that is the honest answer the stage is after. The follow-up question to ask each of them is _and what did it turn out to be worth?_ — about half will not know.'));
out.push(A('**b** **1** _…that would mean the proof moving to the Friday._   **2** _…that would mean losing the second half of the order._   **3** _…that would mean two hours each way and a day out of the proof week._   **4** _…that would mean waiting for a letter that takes a fortnight._   **5** _…that would mean two deliveries instead of one, and two lots of paperwork._ ⚠ All five: _mean_ + a noun or an _-ing_, never an infinitive.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – registration in the January batch instead of February if he resubmits before the end of December; and he works out that it is **nine working days**, and that resubmitting in December would cost a day out of the ministry proof week.'));
out.push(A('**b** **1** _In March I would have said thank you and resubmitted on the twenty-eighth, because a month earlier is obviously better._   **2** It turns a counter-offer into a **calculation** instead of a kindness — it accepts the premise for one sentence while the arithmetic is done out loud.'));
out.push(NOTE('The finding to give the class is quantitative and it transfers everywhere: **almost every counter-offer contains one unit that means something different to the two sides** — a month, a batch, a working week, a shift, a delivery, a "day". Bassel\'s batches are named after the month of **submission**, not of confirmation, so a month was nine working days. The arithmetic takes an evening and is always worth it, and the commonest reason it is not done is that an offer which sounds generous feels rude to measure. The second half of the cycle is the indirect question at the end (19.3), which turns the thing he had to discover into a thing that is written down.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _In that case the delivery arrives after the proof date. That would mean three men on one job for an extra day, and I would rather take the later price._',
  '**2** _In that case we should be taking half now. That would mean two deliveries and two sets of paperwork, and if that is the position I would rather wait for the whole order in March._',
  '**3** _In that case only one of the two is agreed. That would mean the pump settings staying with one person, and I shall ask about the second again in April._',
  '**4** _In that case it goes through the other office. That would mean a fortnight for a letter that takes them four minutes, and could you tell me whether the other office accepts a copy by email?_',
  '**5** _In that case the money is not available until April. That would mean the survey being done in the rain, and I shall move the survey rather than the scaffold._',
]));
out.push(A('In all five the cost is expressed in the **speaker\'s** units — men on a job, sets of paperwork, a person carrying a skill, a fortnight, rain. None of them says _inconvenient_ or _a delay_. That is the whole discipline: a cost in the other side\'s units cannot be argued with, because it is their arithmetic, and a cost in your own units is information they did not have.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** We can do it a month earlier if you resubmit this month.',
  '**B:** In that case the resubmission has to be in the week of the 22nd.',
  '**B:** That would mean a day out of the proof week, for nine working days of registration.',
  '**B:** If that is the position, I would rather resubmit in the first week of January for the February batch.',
  '**B:** And could you tell me whether a batch is named after the month of submission or the month of confirmation?',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Three or four of the eight costs will still be in the other side\'s units. Point at them, because the correction is one sentence: not _it would be difficult_ but _it would mean three men on one job for a day_. The second thing to count is how many pairs reached an **indirect question** at the end; it is the move students drop first when they are concentrating on the arithmetic, and it is the one that stops the same mistake happening in the spring.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The counter-offer was: we can hold the price until March if you take the whole quantity now. In my units that would mean six weeks of stock in a room that holds four, and two of the fifteen models going out of date before they are sold. The unit that means two things is "the whole quantity" — for them it is one delivery and one invoice; for me it is floor space I do not have._',
  '**b** _My partner\'s indirect question for me: could you tell me whether the March price applies to a second order placed before March, or only to this one? Which is the thing I have assumed for two years and have never asked._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The registry has come back to Bassel, and it is not a refusal and it is not what he asked for either: if he resubmits before the end of December with the originating office\'s reference, they will process it in the January batch instead of February. Omar said that is a month earlier and that is good. Bassel said it sounds like a month earlier, and he has spent an evening working out what it would actually mean — and this is what he would not have done in March, when he would have said thank you and resubmitted on the twenty-eighth. The January batch is confirmed in the last week of January; the February batch in the second week of February. That is nine working days, not a month, because the batches are named after the month they are submitted in and not the month they are confirmed in — and nobody told him, and it is not in the notes. And resubmitting before the end of December means getting the reference from the originating office in the week of the twenty-second, which is the week three of his fourteen men are on the ministry proof and he is the only person who can go to that office, two hours each way. So what he says is: "In that case, resubmitting in December would mean a day out of the proof week for nine working days of registration, and I would rather not. I shall resubmit in the first week of January with the reference, for the February batch." And then the sentence that is the actual point: "Could you tell me whether a batch is named after the month of submission or the month of confirmation, so that I do not make the same arithmetic mistake in the spring?" Ms Huda said in that case takes a counter-offer and makes it a calculation instead of a kindness: they offered a month, he has worked out that it is nine days and said so, and he has declined it without declining them. Bassel said they may be annoyed, and Ms Huda said they may — and the alternative is a day lost in the proof week for nine days he had valued at thirty, which is the price of saying thank you to an offer you have not costed.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ On that case → ✓ **In** that case.   ✗ That would mean to lose a day. → ✓ **losing** a day.   ✗ In that case, I agree. _(it is not agreement)_ → ✓ _in that case_ + the consequence.   ✗ It would be very inconvenient. → ✓ a cost in your own units.   ✗ If that is the position, you are being unreasonable. → ✓ decline the offer, not the person.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** _The arithmetic is the whole of my answer and none of it is a criticism of your office._'));
out.push(A('**2** Nine working days, not a month — because the January batch is confirmed in the last week of January and the February batch in the second week of February, and **a batch is named after the month of submission and not the month of confirmation**.'));
out.push(A('**3** _In March I would have said thank you and resubmitted on the 28th, because a month earlier is obviously better. It is not obviously anything, and I now cost an offer before I accept it._'));
out.push(A('Two things worth naming. _Nothing is required from you_ — the sentence that lets a reader put a letter down, and a reader who can put a letter down answers the question at the end of it. And the closing sentence about who he used to be, which is what stops the arithmetic reading as cleverness: a letter full of correct figures and no humility is answered slowly, and this one has one paragraph of each.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO THE DISTRIBUTOR · your offer of 8 December** · M. Hariri · December',
  'Thank you for the offer of the March price. I have costed it and I am going to decline it. The arithmetic is the whole of my answer and none of it is a criticism.',
  '**What I understood the offer to be.** The present price held until March if I take the whole quantity now.',
  '**What it appears to be when I work it out.** Six weeks of stock in a room that holds four weeks. That is not a discount; it is storage I do not have.',
  '**What accepting it would mean.** Two of the fifteen models going out of date before they are sold, on last year\'s figures, which is about 240,000 — more than the price being held is worth.',
  '**What I shall do instead.** Order four weeks now and four weeks in February at whatever the price then is. Nothing is required from you.',
  '**The question I should be grateful if you would answer.** Could you tell me whether the March price applies to a second order placed before March, or only to the order it is quoted against?',
  '**And one sentence about last year.** Last February I took a whole quantity on the same offer and I did not cost it, and I have never worked out what it came to. I shall work it out this month.',
]));
out.push(S('Stage 7 · Write freely (sample, 190 words)'));
out.push(SAMPLE([
  '**TO THE REGISTRY · your letter of 14 December · supplier registration** · B. Tahhan · 17 December',
  'Thank you for the offer of the January batch. I have costed it and I am going to decline it, and I should like to explain the arithmetic, because the arithmetic is the whole of my answer and none of it is a criticism of your office.',
  '**What I understood the offer to be.** Registration a month earlier if I resubmit, with the reference, before the end of December.',
  '**What it appears to be when I work it out.** The January batch is confirmed in the last week of January and the February batch in the second week of February. That is nine working days, not a month — because a batch is named after the month of submission and not the month of confirmation, which I had not understood until this week.',
  '**What resubmitting in December would mean.** The reference has to be collected from the originating office, which is two hours each way and which only I can do. The available week is that of 22 December, which is the week three of my fourteen people are on a ministry proof with a weekly date. So it would mean a day out of the proof week, for nine working days of registration.',
  '**What I shall do instead.** Resubmit in the first week of January, with the reference, for the February batch. Nothing is required from you.',
  '**The question I should be grateful if you would answer.** Could you tell me whether a batch is named after the month of submission or the month of confirmation? I have assumed the first from your letter and I may have it wrong — and if I have it right, those nine words are not in the guidance notes.',
  '**And one sentence about March.** In March I would have said thank you and resubmitted on the 28th, because a month earlier is obviously better. It is not obviously anything, and I now cost an offer before I accept it.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On the cost in your own units: _a day out of the proof week, for nine working days of registration_ is the sentence that does the whole job, and it is in their arithmetic nowhere. On declining the offer without declining the person: the first paragraph does it and the last paragraph makes it stick. On the indirect question: it is the most valuable line in the letter, and I would put the nine words you want added to the notes in the letter itself, so that somebody could paste them in."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the units that meant two things — a month, a batch, a working week, a shift, a delivery, a "day". Almost all of them. Then the sentence to end on: the arithmetic takes an evening, the evening is always worth it, and the commonest reason it is not done is that an offer which sounds generous feels rude to measure.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The offer I accepted without costing it was in August: the depot offered to let me change my rest day from a Monday to a Wednesday, which I had asked for in June. I said thank you. Costed now: a Wednesday rest day means I work the Tuesday and the Thursday, and the Harasta road on a Thursday is the heaviest day of the week, and I have driven it eighteen times since August instead of nine. So what I actually accepted was nine extra Thursdays in exchange for a day off I use in the same way. I would still take it, and I would have asked for something.']));

// ===================== 21.5 =====================
out.push(pb());
out.push(h2('21.5  Whatever else we agree'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and write nothing down — say so, because the second question (_does the other side know that?_) is answered more honestly when nothing is being recorded. The usual answer is no, in seven or eight cases out of eleven.'));
out.push(A('**b** **1** limit   **2** threat   **3** limit   **4** threat   **5** limit. Items **2** and **4** are the pair to dwell on: _I shall go to the directorate_ is an obvious threat, and _I shall have to think about my position_ is the same thing in a grey coat — it makes the other side wonder what you might do, which is the definition.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – releasing a patient result on lot 4471 while the storage temperature is unresolved; and the limit belongs at the **beginning** and not at the end.'));
out.push(A('**b** **1** Because the other side cannot tell where the end is, so they keep arranging, and every arrangement is one they will have to unmake — _I was not being accommodating on Tuesday. I was being unreadable, and it cost him twenty minutes of planning._   **2** A limit is about what **you** can do; a threat is about what you will do **to them**. The first is information and can be planned round; the second is a move that ends the negotiation whether or not anybody carries it out.'));
out.push(NOTE('Two rules and a test. **Put the limit first**, because a limit at the end of twenty minutes of what you can do arrives as an obstacle to a plan built on your own goodwill, and the other person has to unmake four arrangements. **Say it once**, because _a limit repeated three times has become a threat without a single word changing_. And the test for a sentence the student is unsure about: **does it say what you cannot do, or does it make the other side wonder what you might do?** _I am not sure I can continue like this_ and _that would put me in a very difficult position_ both fail it, and both are offered in good faith by people who would never dream of threatening anybody.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Whatever else we agree, I am not able to sign a proof I set myself. Everything else is open: I can set it and have Abu Rashid sign, I can set it the day before, or I can hand it to the foreman to set._',
  '**2** _Whatever else we agree, I am not able to work a fifth consecutive night. Everything else is open: I will take any three, I will swap with anybody, and I will cover a fourth in an emergency and say so on the sheet._',
  '**3** _Whatever else we agree, I am not able to say a figure has been checked when I have not checked it. Everything else is open: I can check it in the morning, I can report it as unchecked, or somebody else can sign for it._',
  '**4** _Whatever else we agree, I am not able to speak for the other two men. Everything else is open: I can ask them tonight and tell you tomorrow._',
  '**5** _Whatever else we agree, I am not able to submit a survey with an unphotographed elevation in it. Everything else is open: I can photograph on a Sunday, I can photograph through the scaffold and mark it, or I can delay my own submission._',
]));
out.push(A('All five keep the limit about the speaker and all five give alternatives in the same breath. Item 5 is the one to read out, because the third alternative — _I can delay my own submission_ — costs the speaker and not the other side, and a limit that is accompanied by at least one alternative which costs the speaker is almost never argued with.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Whatever else we agree, I am not able to release a patient result on this lot until the temperature is settled.',
  '**A:** Everything else is open, and here are four things I can do: run it for the controls, run both lots in parallel and report the old one, do the extra forty minutes a day that takes, and write to the agent again on 5 January.',
  '**B:** Is that about you or about me? About you — it is what your signature can mean.',
  '**B:** Then I can plan the fortnight round it, and I shall tell the ward today rather than on Friday.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Two or three of the eight are threats in grey coats, and the speakers believe them to be limits because they contain no explicit consequence. Sort them on the board with the test. Then say the thing that surprises people: the students who produce the grey-coat sentences are usually the most conflict-averse in the room — a plain limit feels rude to them, so they reach for a sentence that sounds softer and is in fact a threat.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Whatever else we agree, I am not able to quote a price on a repair I have not opened. Everything else is open: I can look at it while the customer waits, I can give a range with the top of the range in writing, or I can keep it and telephone within the hour. Does the other side know it? No. I have been giving ranges for four years and calling it a price, which is worse than the limit would have been._',
  '**b** _My partner says my limit is about me and that I have been putting it nowhere at all — not at the end, nowhere — and that the distributor would plan round it in a minute, because a range in writing is cheaper for them than a price they will argue about in March._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The agent has answered two of Yara\'s three questions and the third — which of the two storage temperatures is right — is "under review with the manufacturer". And the ward wants the lot used, because the alternative is sending samples to Damascus and waiting two days. So everything is negotiable except one thing: she can run the lot for the controls, she can run it in parallel with the old lot and report both, and she can do the extra forty minutes a day that running two lots costs, which nobody has asked her to do and she will. What she is not able to do is release a patient result on a lot whose storage temperature nobody can state. She said it on Tuesday, at the end, after twenty minutes of what she could do — and that was wrong, and she has spent two days seeing why: by the time she got to it, Dr Shaaban had already arranged four of the things she had offered, and the limit arrived as an obstacle to a plan built on her own goodwill. It should have been the first sentence, and then he builds the plan round the limit instead of into it. Jad asked whether saying it first does not sound like a refusal, and she said that is what she thought for three years and it is the opposite: a negotiation with no stated limit is unreadable, so he keeps arranging and every arrangement is one he will have to unmake — she was not being accommodating on Tuesday, she was being unreadable, and it cost him twenty minutes of planning. Ms Huda gave the difference between a limit and a threat: a limit is about what you can do, a threat is about what you will do to them; the first is information and can be planned round, the second is a move that ends the negotiation whether or not anybody carries it out. And Yara added that the limit has to come with the other side of it in the same breath, or it is heard as a no with decorations. Ms Huda said: say it level, say it once, and go back to what you can do — because a limit repeated three times has become a threat without a single word changing.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ However else we agree → ✓ **Whatever** else we agree.   ✗ I am not able that I sign it. → ✓ not able **to sign** it.   ✗ I shall have to consider my position. _(a threat)_ → ✓ say what you cannot do.   ✗ I am not able to release it, and I want you to understand that. → ✓ cut the second half; it is the beginning of a threat.   ✗ I cannot do it, I cannot do it, I cannot do it. → ✓ once.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** In the first paragraph, and she says why in the heading itself: _on Tuesday I put it last and that was my mistake._'));
out.push(A('**2** The third — the extra forty minutes a day that running two lots takes: _nobody has asked me to and I am not asking for anything for it._'));
out.push(A('**3** It is not a view about the agent, who has answered two of three questions in eleven days; it is not about the ward, and she knows what two days to Damascus costs; and it is not a bargaining position — _it is one sentence about what my signature can mean._'));
out.push(A('Those three negatives are the move to teach, because they are the three things a limit is always misread as: a judgement on a third party, indifference to the other side\'s problem, and a tactic. Three lines prevent all three readings, and a limit that has been misread once cannot be unmisread. Note also the numbering: one alternative looks like a condition and four look like a negotiation, and they let the other person choose — which is the only way a limit is experienced as a shape rather than as a wall.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO THE DEPOT MANAGER · the morning check** · T. Ayoub · December',
  '**The one thing first.** Whatever else we agree about the sheets, I am not able to sign a check sheet for a check I have not done.',
  '**Everything else is open.** There are four things I can do and I am offering all four.',
  '**One.** Do the check at the bus and hand the sheet in at the window afterwards, which is what I asked for in September.',
  '**Two.** Do the check at the bus and telephone the office with the three figures before I leave the yard.',
  '**Three.** Come in ten minutes earlier so that the check is done before the window opens. Nobody has asked me to and I am not asking for anything for it.',
  '**Four.** Hand the sheet in unsigned, with the three figures on it, and sign it at the window when the clerk has seen it.',
  '**Why I have put the limit at the top.** Because in September I put it at the end of a letter about collection points, and the letter was answered as if the collection point were the whole of it.',
  '**And what the limit is not.** It is not a view about the clerk, who has never asked anybody to sign anything untrue. It is not about the window, which I no longer mind. It is one sentence about what my signature means on a vehicle, and it is the only sentence here that is not negotiable.',
]));
out.push(S('Stage 7 · Write freely (sample, 193 words)'));
out.push(SAMPLE([
  '**TO DR SHAABAN · lot 4471, and what I can and cannot do** · Y. Mansour · 18 December',
  '**The one thing first, because on Tuesday I put it last and that was my mistake.** Whatever else we agree, I am not able to release a patient result produced on lot 4471 until the agent has stated which of the two storage temperatures is correct.',
  '**Everything else is open.** There are four things I can do and I am offering all four.',
  '**One.** Run lot 4471 for the daily controls, which uses it, keeps it moving and tells us within a week whether it is behaving differently from the old lot.',
  '**Two.** Run both lots in parallel on every sample for a fortnight and report the old lot\'s figure, with the new lot\'s figure recorded beside it in the worksheet.',
  '**Three.** Do the extra forty minutes a day that running two lots takes. Nobody has asked me to and I am not asking for anything for it.',
  '**Four.** Write to the agent again on 5 January if the temperature question is still under review, and copy it to you.',
  '**Why I have put the limit at the top this time.** On Tuesday I gave you twenty minutes of what I could do and then the one thing I could not, and by then you had arranged four of them. The limit arrived as an obstacle to a plan built on what I had offered. That was not accommodating of me; it was unreadable, and it cost you twenty minutes.',
  '**And I should say what the limit is not.** It is not a view about the agent, who has answered two of three questions in eleven days. It is not about the ward, and I know what two days to Damascus costs. It is one sentence about what my signature can mean.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On the limit being about you and not about them: _what my signature can mean_ is the exact right size of claim, and there is nothing in the note that touches the agent or the ward. On the alternatives numbered: four is the right number and the third one costs you and not him, which is what makes the other three believable. On what the limit is not: the three negatives are the best paragraph here, and I would put them immediately after the limit rather than at the end, because the misreadings happen in the first ten seconds."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the limits the other side does not know about — seven or eight of eleven is usual. Then the sentence that surprises the room: an unstated limit is not generosity, it is unreadability, and it costs the other side more than the limit ever would, because every arrangement they make in ignorance of it is one they will have to unmake. Several students will have thought of themselves as accommodating for years.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I said it on a level tone, once, at the start, and then went back to the four things. He did not argue with it at all — he said "that is fair" and then rearranged the fortnight in about four minutes: the controls on the new lot from Monday, parallel running on the two wards that ask for figures rather than on everything, and he is telephoning the agent himself on the fifth, which I had not offered and had not thought of. Twenty minutes of planning on Tuesday produced nothing. Four minutes on Thursday produced a fortnight, and the only difference was where the sentence went.']));

// ===================== 21.6 =====================
out.push(pb());
out.push(h2('21.6  The two-column page'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The exercise is harder than it looks and the failure is the lesson: most students cannot state more than two of the other side\'s needs from the other side\'s chair, and the two they can state are the two that collide with their own. The other two are the cheap ones.'));
out.push(A('**b** **1** need _(mine)_   **2** need _(his)_   **3** can give   **4** cannot give _(it is not his to move)_   **5** need _(mine)_   **6** can give _(his — the key is a thing he can hand over)_. Item **4** is the one to discuss: _the survey date moved_ is a thing **neither** side can give, because the date belongs to a third party, and items of that kind must be identified early or they absorb the whole negotiation.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the Sunday before the scaffold goes up: row 1, the photographs against the scaffold week.'));
out.push(A('**b** **1** _A list of your own needs produces a request. Two columns produce a row._   **2** That the row where the columns touch is almost never what either side has been arguing about — _it is one morning, or one line, or one name, and it is invisible until both lists are on the same sheet of paper._'));
out.push(NOTE('Two findings, and the second is the one students will use for the rest of their working lives. **Most items do not touch anything:** three of Lubna\'s four were things the owner did not care about, and two of his three cost her nothing — the usual result is that **one** row collides and the argument has been about four or five items that are not in conflict at all. And **the strange item is the cheap one:** _"not to have the family asking me every week what is happening"_ sounded odd, was written down because of that, and turned out to cost ten minutes a week. A need that does not fit your idea of what the other side wants is a need you have not yet translated — and because you have not translated it, you have not yet reduced it to something you would have to refuse.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _At work: the row is the Thursday — her rota meeting and my night off are the same afternoon. What settles it: the meeting at four instead of five, which costs her nothing and gives me the evening._',
  '**2** _With the supplier: the row is the delivery day — his lorry runs on a Tuesday and my counter is busiest on a Tuesday. What settles it: the lorry unloaded at seven instead of ten, which is one name on his schedule._',
  '**3** _With the office: the row is the 20th — their batch and my proof week. What settles it: submission on the 18th, which costs me nothing at all._',
  '**4** _At home: the row is Friday morning — her mother\'s visit and my only quiet four hours. What settles it: the quiet four hours on Saturday, which I had never considered because I had decided Friday was the only possible day._',
  '**5** _With the junior: the row is who signs the sheet — he wants to and I am responsible for it. What settles it: he fills it in and I sign it beside him, which costs four minutes and was his actual need, not the signature._',
]));
out.push(A('Item 5 is the one to read out: the junior\'s **position** was the signature and his **need** was to be the person who did the work visibly — which is 21.1 arriving inside 21.6. Items 3 and 4 are the pair to point at for the costless row: in both cases the settlement costs the writer nothing, and in both cases it was invisible for months because only one column was ever on the paper.'));
out.push(S('Stage 3 · Practise (sample)'));
out.push(SAMPLE([
  '**A:** They need the scaffold up on the sixth, the render done before the rain, and not to have the family asking every week what is happening. I need four elevations photographed before the scaffold, access to flat four, two days of ceiling heights, and the survey in by the twenty-sixth.',
  '**A:** I can give them four lines every Friday for nothing, and a photograph of the render joint for their own file. They can give me a Sunday and a note to the aunt.',
  '**B:** Then the only row that touches is the photographs against the scaffold week.',
  '**B:** And what one morning, line or name would settle it?',
  '**A:** Sunday the fifth.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('One row collides, in six or seven cases out of eight. Write the two figures side by side on the board: **rows that collide: 1. Items being argued about before today: four or five.** The four or five are items that do not touch anything on the other list, and they are what nearly every negotiation in a workplace is actually spent on — which is the single most useful thing in Unit 21 and the reason the page is worth forty minutes.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _What the distributor needs: orders that fit one lorry, payment inside thirty days, and — his phrase from last March — "not to be the one who finds out from the shop that a model is bad". What I need: the batch specification, four-week stock and not six, the price held until March, and somebody to telephone who can answer about adhesive. The only row that collides is the quantity: his one lorry against my four weeks of floor space._',
  '**b** _My partner found the strange item: "not to be the one who finds out from the shop that a model is bad". It costs me nothing at all — I can send him the fault count from my own book every month, which takes four minutes and which I have had in a book since 2017 and never shown anybody._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The second building is owned by a family and the man Lubna deals with is the son. He wants the scaffold up on the sixth of January, because the render has to be done before the rain and the contractor has one week free; and she needs the four elevations photographed before the scaffold goes up, which is the whole of what she lost on the first building. She made the page on Saturday, it took forty minutes, and it has changed what she is asking for completely: four columns, really — what he needs, what she needs, what each can give, and what each cannot. What he needs, in his words: the scaffold up on the sixth, the render done before the rain, and — the one she would not have thought of — "not to have the family asking me every week what is happening", which he said in November and which she wrote down because it sounded strange. What she needs: four elevations photographed before the scaffold; access to flat four, which is his aunt; the ceiling heights, which take two days; and the survey in by the twenty-sixth of January. Only one row collides: the photographs and the scaffold are the same week, and nothing else on either list touches anything on the other. Three of her four he does not care about at all, and two of his three she can give him for nothing. So the row where they touch is one morning — Sunday the fifth: if she photographs all four elevations on the Sunday, his scaffold goes up on the Monday and nobody has given anything up. The two of his she can give for nothing are the aunt, to whom she will write a note with her name on it a week beforehand, and the weekly question, for which she will send him four lines every Friday — ten minutes, and the thing he actually asked for in November and which she heard as a complaint. Ms Huda said a list of your own needs produces a request, and two columns produce a row — and the row where the columns touch is almost never what either side has been arguing about. Lubna said she had been going to ask him to delay the scaffold by a week.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ What he needs are three things. → ✓ **is** three things _(or list them)_.   ✗ He needs that the scaffold goes up. → ✓ _he needs **the scaffold to go up**_.   ✗ He is unreasonable about the date. _(your translation)_ → ✓ his words.   ✗ Nothing else touch. → ✓ nothing else **touches**.   ✗ The row where the columns touches → ✓ **touch** _(the subject is_ columns_)_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** One — row 1. _Nothing else on either list touches anything on the other._ Three of her four are things he does not care about; two of his three cost her nothing.'));
out.push(A('**2** A photograph of the render joint for his own file, which he will need in the spring and has not thought of.'));
out.push(A('**3** His third need — _"not to have the family asking me every week what is happening"_ — which she wrote down **because it sounded strange**, and which is the cheapest thing on the page to meet.'));
out.push(A('The structural move is the physical layout: **two columns side by side on one sheet**, not a list followed by a list. A list followed by a list is two requests; two columns can be read **across**, and the reading across is where the row is found. Students will want to write theirs as prose; do not let them, because the finding is a property of the layout and not of the writing.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**COUNTER 2 AND THE DISTRIBUTOR · WHAT EACH OF US NEEDS** · M. Hariri · December',
  '**What he needs.** **1** Orders that fill one lorry. **2** Payment inside thirty days. **3** "Not to be the one who finds out from the shop that a model is bad" _(his words, March)_.',
  '**What I need.** **1** The adhesive specification for the January-to-March batch. **2** Four weeks of stock, not six. **3** Somebody to telephone who can answer about adhesive.',
  '**What each of us can give easily.** He can give me a name in the factory, which costs him one email. I can give him the fault count from my own book every month — four minutes, and I have kept that book since 2017 and never shown it to anybody.',
  '**What neither of us can give.** He cannot change the lorry\'s route; it is not his. I cannot take six weeks of stock; the room holds four.',
  '**The one row where the lists touch.** His row 1 against my row 2 — one lorry against four weeks of floor space. Nothing else on either list touches anything.',
  '**What settles it.** A lorry split between my shop and the Mezzeh branch, which Abu Fadi has wanted for two years and which neither of us has ever mentioned to the distributor.',
  '**And the item I nearly missed.** His third. It sounded like a complaint about me in March and I have remembered it as one for nine months. It is the cheapest thing on this page.',
]));
out.push(S('Stage 7 · Write freely (sample, 186 words)'));
out.push(SAMPLE([
  '**22 SHARIA BAGHDAD · WHAT EACH OF US NEEDS** · L. Sweidan · for the meeting of 20 December',
  '**What Mr Rifai needs.** **1** The scaffold up on 6 January — the contractor has one week free. **2** The render finished before the rain. **3** "Not to have the family asking me every week what is happening" _(his words, November)_.',
  '**What I need.** **1** All four elevations photographed **before** the scaffold goes up. **2** Access to flat four — two dimensions on the second floor. **3** Ceiling heights at two points in every room — two days. **4** The survey submitted by 26 January.',
  '**What each of us can give easily.** He can give me a Sunday and a note to his aunt. I can give him four lines every Friday — ten minutes a week — and a photograph of the render joint for his own file, which he will need in the spring and has not thought of.',
  '**What neither of us can give.** He cannot move the contractor\'s week; it is not his to move. I cannot submit a survey with an unphotographed elevation in it, which is what I did on the first building and shall not do again.',
  '**The one row where the two lists touch.** Row 1. The photographs and the scaffold are the same week, and nothing else on either list touches anything on the other. Three of my four are things he does not care about; two of his three cost me nothing.',
  '**What settles row 1, and it is one morning.** I photograph all four elevations on Sunday 5 January. His scaffold goes up on the Monday. Neither of us has given anything up.',
  '**And the item I nearly missed.** His third need sounded strange to me in November and I wrote it down because of that. It is the cheapest thing on this page to meet — four lines on a Friday — and I had been hearing it as a complaint about me.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On their column in their words: the November sentence in quotation marks is the only line on the page that could not have been invented, and it is also the most useful one. On the single colliding row: saying explicitly that nothing else touches is what turns the page from a comparison into an agreement, and I would put that sentence in bold. On the item nearly missed: the admission that you heard it as a complaint about yourself is the part I shall copy, because I have at least two of those."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Put the two counts side by side: rows that collide, and items that were being argued about before today. One against four or five, almost every time. Then the sentence that sends the room away: the four or five are items that do not touch anything on the other list, and they are what nearly every negotiation in a workplace is spent on — which is not a failure of goodwill, it is a failure of layout.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['He agreed that his column was right, with one correction, and the correction is the useful part. His second need is not "the render finished before the rain": it is that the render is finished before his father comes back from Homs at the end of January, because the father does not know the work has started. The rain was the reason he gives people. So the item I had got wrong was the one I thought was the most straightforward, and the real one is about a person and not about the weather — which means a Sunday photograph settles even more than I thought it did.']));

// ===================== 21.7 =====================
out.push(pb());
out.push(h2('21.7  Review & Mediate: Two people who both compromised'));
out.push(S('Stage 1 · Unit 21 quiz – corrections'));
out.push(A('**1** Provided that the letter **is** attached.   **2** I would be prepared **to take it in exchange for** the forty minutes.   **3** That would mean **losing** a day.   **4** **In** that case I would rather wait.   **5** What she needs **is** not to be the only one.   **6** I will hold the stock as long **as** the order is confirmed.'));
out.push(A('Items **1**, **3** and **5** are the three that must not survive into Unit 22: ⚠ a future after _provided that_, ⚠ an infinitive after _mean_, and ⚠ a plural verb after a _what_-clause.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** Bassel knew about **one** of their four — the Thursday. They knew about **two** of his four, and those two are the two he **said out loud in front of them** in June. The thing on neither list is the older machine: three of the fourteen are on one job, so none of the three has touched it since September, and two of those three are the only people in the shop who know it — and it is the machine in which the engineer has found a bearing starting twice this year (19.2).'));
out.push(A('Note also the item that appears on **both** lists seen from two sides: Abu Rashid carrying the authorisation. On Bassel\'s list it is a thing he gave away; on theirs it is an extra man the other two have to find before anything moves. That is not a disagreement about facts. It is the same fact from two chairs, and neither party can see it until the two columns are on one sheet of paper.'));
out.push(NOTE('The explanation to give the class is mechanical and it removes the moral question entirely: **a concession is felt by the person who makes it and merely received by the person it is made to.** You know what it cost you to give something up; the other side knows only that the thing is now different, which feels like a fact about the world rather than a gift from a person — and nobody thanks anybody for a fact about the world. So each side leaves with four things it gave and no account of what it got. Neither is dishonest and neither has a bad memory. And the corollary is the practical one: **the two items of Bassel\'s that the men knew about are the two he announced**, which is the whole argument for 21.3 — a concession made silently is not received as a concession, however real it was.'));
out.push(S('Language box – mediating between two accounts'));
out.push(A('No exercises; it is the checklist for Stages 3 and 4. Ask both sides the same question, **separately, on the same day, in writing**: _what have you given up?_ Separately matters — asked together, the second answer is built out of the first. Then expect two lists with nothing in common and both true; count how many of each other\'s items each side already knew about; look for the item on **neither** list; and find the item that appears on both seen from two sides.'));
out.push(A('The remedy is one sheet, both columns, read aloud, and it takes twenty minutes. Say why nobody does it: **at the moment of agreement neither side wants to go back over what it cost them** — which is exactly the moment at which both of them still remember. Six months later neither does, and the twenty minutes has become unavailable.'));
out.push(S('Stage 3 · Practise (sample – Pair A, a ward and its pharmacy)'));
out.push(SAMPLE([
  'Two lists of two, and not one item in common.',
  '**The item that appears on both lists from two sides.** The ward gave up the second check at the bed; the pharmacy now checks every chart twice before issue. That is one change seen from two chairs — the check did not disappear, it moved — and each side has recorded only its own half.',
  '**How many each side knew about.** The ward knew about the Friday closing, because it was announced in a notice. The pharmacy knew about nothing on the ward\'s list, because the ward changed its own practice and told nobody — which is the whole pattern: the announced concession is received and the quiet one is not.',
  '**What is on neither list.** Who telephones whom at two in the morning. Neither side has had to do it yet, so neither has given it up, so it is on no list — and it is the thing that will decide whether the arrangement survives the first bad night.',
  '**The one item for the joint sheet.** The two-in-the-morning line, written now, by both of them, while nothing has gone wrong.',
  '**Our twenty-minute remedy.** Both sides write their list separately on the same afternoon, then read them aloud in one room, then write one sheet. My partner would add a date to re-read it; I would not, and I now think she is right.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In both pairs the item on neither list is **what happens when the arrangement fails at the worst moment** — who telephones whom at two in the morning, who pays when a pallet is short. That is the same finding as 16.7: the row that decides everything is the one about what happens when the thing goes wrong, and it is on nobody\'s list of concessions because neither side has yet had to make it. Write it in the terms the class will remember: **you cannot have given up something you have not yet had to do.**'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own agreement. The three questions are the assessment: _did you say it out loud at the time?_, _which item is the same fact from two chairs?_ and _what are you both frightened of?_ The third question is the one that finds the item on neither list, and it works because both sides are usually frightened of the same thing and neither has mentioned it.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Lubna\'s page made Bassel do something he has been avoiding since March. He asked the three men on the ministry order to write down what they have given up, and wrote his own on the same evening without seeing theirs. There is not one item in common, and both lists are true. His is four things and every one is something he took away: a rule he had made that was stricter than the ministry\'s, withdrawn in front of them in June; the authorisation, which he named Abu Rashid for, so he is no longer the man they wait for at seven; condition four, which he put back after crossing it out; and the order itself, which he could have refused. Theirs is four things and every one is something they took on: a Thursday nobody can leave early, eleven signatures a day each, and Abu Rashid carrying the authorisation — which Bassel had thought of as a gift to all three and which means the other two now have to find him before anything moves. Omar said that is the same item on both lists seen from two sides, and Bassel said it is, and he did not see it until it was on one sheet: he gave away a thing he thought was his to give, and two of them received an extra man to find, and neither is wrong. He knew about one of their four, the Thursday; they knew about two of his, and the two they knew about are the two he said out loud in front of them in June. And the fourth thing on their list they did not write: Abu Rashid said it when the lists were read out, and it is the only item either side was frightened of. Three of them are on one job, so none of the three has touched the older machine since September — and two of those three are the only people in that shop who know it, and it is the machine the engineer has found a bearing starting in twice this year. Ms Huda said that is the row where the two columns touch and it was on neither list: a concession is felt by the person who makes it and merely received by the person it is made to, so each side leaves with four things it gave and no account of what it got — and a year later the two records do not meet at any point, and the argument becomes one about who has been reasonable, which cannot be won by anybody.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 6'));
out.push(A('**1** **without**   **2** **up**   **3** **like**   **4** **at**   **5** **by**   **6** **rather**'));
out.push(A('_Notes:_ **1** _with **without** a single item in common_ — the double preposition looks wrong to candidates and is correct. **2** _give **up**_, a phrasal verb. **3** _feels **like** a fact_ — ⚠ not _as_, which would need a clause. **4** _do not meet **at** any point_. **5** the passive agent after _cannot be won_. **6** _would **rather** … than_ — the structure is split across eight words and candidates who read only the gap\'s neighbours miss the _than_.'));
out.push(NOTE('Reading Part 6 is an open cloze of six single words and it is almost entirely **grammar and fixed phrases**, not vocabulary: here a preposition, a phrasal-verb particle, a comparison word, two more prepositions and half of a _would rather … than_. Two habits: read the **whole sentence** before writing, because three of these six are decided by a word further along (the _than_ in item 6 is eight words away); and if a gap could take two words, write the shorter and commoner one — _at_ before _in_, _like_ before _as if_ — because Part 6 tests the ordinary word and not the clever one.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE MINISTRY ORDER · WHAT EACH SIDE BELIEVES IT GAVE** _(written separately, 18 December)_ · B. Tahhan',
  '**What I say I gave.** **1** Named Abu Rashid in writing to authorise, in June, so that I am no longer the man they wait for at seven. **2** Withdrew a rule of my own that was stricter than the ministry\'s, in front of them, on a Thursday in June. **3** Put condition four back after crossing it out.',
  '**What they say they gave.** **1** A weekly proof date — a Thursday on which none of them can leave early. **2** Eleven signatures a day each. **3** Abu Rashid now carries the authorisation, so the other two have to find him before anything moves.',
  '**Items in common:** none.',
  '**The item that appears on both lists from two sides.** Abu Rashid and the authorisation — which I thought of as a gift to all three of them, and which the other two experience as an extra man to find.',
  '**How many we each already knew about.** I knew one of their three. They knew two of mine, and those are the two I said out loud in front of them in June. The one I did not announce, they had no idea about.',
  '**The item on neither list.** The older machine. Three of them are on one job, so none of the three has touched it since September, and two of those three are the only people here who know it.',
  '**What we are putting on one sheet, and when.** All seven items and the machine, on one page, on the Thursday before the January proof, read aloud.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 1 (sample, 169 words)'));
out.push(A('Out of 20, **140 words or more**, and all **four** notes must be covered: why both believe it and that neither is lying; what to put on one sheet and when to write it; what to do with the column that is not his; and the one item to look for, with an example. A script that gives the advice without the example has not covered the fourth note.'));
out.push(SAMPLE([
  'Dear Sam,',
  'Neither of you is lying and neither of you has a bad memory. A concession is **felt** by the person who makes it and merely **received** by the person it is made to — so you know exactly what it cost you to give something up, and your colleague knows only that the thing is now different, which feels like a fact about the office rather than a gift from you. Nobody thanks anybody for a fact about the office.',
  'So do this. Each of you writes, separately and on the same afternoon, a list of what you gave up. Separately matters: asked together, the second list is built out of the first. Then put both columns on one sheet of paper and read them aloud, at the same pace.',
  'The column that is not yours is the one to spend your time on. Count how many of its items you already knew about — it is usually one or two of four — and you will find that the ones you knew about are the ones your colleague **said out loud** at the time.',
  'And look for the item that is on **neither** list. There almost always is one, and it is the thing you are both quietly afraid of. In a shop I know of, two sides wrote four things each and neither wrote down that the oldest machine had not been touched since September, because neither of them had given that up — it had simply happened.',
  'Twenty minutes, one sheet. Better than next September.',
  'Yara',
]));
out.push(NOTE('Writing Part 1 is an email with four notes and the mark is lost on **coverage**. The habits are the same as ever: number the notes in the margin, tick each as it is answered, and give each one its own paragraph. Here the fourth note asks for an example, and the example is what most scripts omit — a script may analyse the problem beautifully and still fall to band 4 for giving no instance of the item on neither list.'));
out.push(S('Unit 21 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** c   **2** a   **3** b   **4** a   **5** c   **6** b   **7** b   **8** c'));
out.push(A('_Notes:_ **1** _provided that_ — _in case_ changes the meaning and _unless_ reverses it. **2** the present after _provided that_. **3** _in exchange **for**_ — ⚠ _in exchange of_ is the commonest version of this error in the room. **4** _mean_ + _-ing_. **6** _whatever else_ — _however_ and _whichever_ do not take _else_ in this frame. **7** singular after a _what_-clause (19.5). **8** _as long **as**_.'));
out.push(S('Unit 21 check  ·  B  Listening (Part 1, seven extracts) – Track 21.15'));
out.push(A('**1** A   **2** B   **3** C   **4** A   **5** C   **6** B   **7** B'));
out.push(A('Extracts **1** and **4** are the pair to replay. In **1** all three options are spoken — the report, the rota meeting and the directorate are named as what she **wants**, and the answer is the need underneath them; candidates who hear a matching phrase stop listening. In **4** the figure asked for is the **second** one in the extract: _a month_ is said first and contradicted, which is the commonest trap in Part 1 and the reason the question-reading habit matters.'));
out.push(NOTE('Listening Part 1 is seven short extracts with three word-or-phrase options, and the single most valuable habit is to read the **question** in the pause and not the options. The question tells you what to listen for; the options tell you what to be confused by. Expect at least two extracts in which **all three** options are said aloud, and expect at least one in which the right figure is the second one mentioned because the first is being corrected.'));
out.push(S('Unit 21 check  ·  C  Writing (sample, 180 words)'));
out.push(SAMPLE([
  '**THE DEPOT AND THE OFFICE · WHAT EACH OF US NEEDS** · T. Ayoub · December',
  '**What the clerk needs.** **1** To see every sheet signed, because of what happened in 2019. **2** The sheets in one place at one time, so that he can take them to the directorate in a batch. **3** "Not to be asked in March about something in November" _(his words, December)_.',
  '**What I need.** **1** Not to lose twenty minutes at the window at the end of a shift. **2** To do the check at the bus, where the bus is. **3** Not to sign for a check I have not done.',
  '**What each of us can give easily.** He can give me a tin at the gate, which existed until 2019 and costs nothing. I can give him the three figures by telephone before I leave the yard, which is forty seconds, and a note of the date on every sheet, which he has never asked for and would answer his third need entirely.',
  '**What neither of us can give.** He cannot drop the signature; it is the directorate\'s and not his. I cannot sign at the window for a check done at the bus.',
  '**The one row where the lists touch.** His row 1 against my row 3 — the signature against where the check is done. Nothing else on either list touches anything.',
  '**What settles it.** Sign at the bus, hand in at the window: one line on the sheet saying where it was signed. His signature, my check, and one line.',
  '**And the item I nearly missed.** His third. I had heard it as impatience for two years.',
]));
out.push(S('I can… (Unit 21)'));
out.push(A('Self-assessment; no answers. The four that matter are the first, the third, the fifth and the sixth: telling a position from a need, naming the exchange in the same sentence, stating a limit that is about you, and building the two-column page. A class that ticks _provided that_ and _as long as_ and not those four has learnt two conjunctions and will concede the same things next year.'));
out.push(box('Looking ahead to Unit 22', [
  'Unit 21 put two columns on one sheet. **Unit 22** turns the same discipline on the student: answering a question about their own work so that the answer is **checkable**, and asking the questions that get somebody else to do it.',
  '**22.1 brings back the four questions from 1.3** — _How did you end up…? · What is the hardest part? · What would you change? · What do people get wrong about it?_ — and this time the student answers them, about their own work, at B1 length and with a number in each answer. Ask them to find their Unit 1 notes before the lesson; the comparison between the week-one answer and the December answer is half the cycle.',
  '**22.4 is the cycle to prepare for**: answering the question you hope will not be asked. **22.6** writes the one page about yourself that somebody could check — which is the nine lines of 18.4 again, four units on and for a stranger instead of a colleague.',
  '**Ask the class now for 22.1:** the four answers written out, **and one question they have been asked about their own work that they answered badly.** 22.1 is built on the bad answer and not on the good ones, and a class that brings only the four answers has a cycle about self-presentation instead of a cycle about the moment it goes wrong.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 21 · Answer Key');
