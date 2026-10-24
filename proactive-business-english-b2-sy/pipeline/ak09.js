// Proactive Business English B2 · Syria Edition · Book 1 · Unit 9 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 9  Somebody Else\'s Draft'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Unit 9 is the first unit in the series whose subject is a document somebody else wrote**, **and it changes the room.** **Every learner has had work edited and most have edited somebody else\'s** — ⚠ **and almost nobody has been taught that the two activities have rules, or that the rules are about provenance rather than about prose.**',
  '⚠ **Six things are taught and they divide in half.** ⚠ **9.1, 9.2 and 9.3 are what you do to somebody\'s draft** — **sort, correct, mark up.** ⚠ **9.4, 9.5 and 9.6 are what you defend in your own** — **the closed line, the reinstatement, the single voice.** **A class that notices the hinge at 9.4 has understood the unit.**',
  '⚠ **The one rule in the unit is in 9.4 and it should be said twice:** ⚠ **quality is not the test; provenance is.** **Two of the four closed lines in this unit are badly written, and all four are closed** — **and a learner who cannot say where a line\'s words came from cannot know whether it is theirs to write.**',
  '⚠ **9.7 reveals the thing the whole unit has been for, and it should not be given away early.** **Mr Hamdan did not know that three of the four lines he changed were closed** — ⚠ **because what makes a line closed is a fact about its history, and the history was in Sham Trading\'s drawer and not in his.** ⚠ **So the remedy is not a better editor.** **It is a sheet of paper in HIS file, which he asks for himself.**',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 1, 40 to 50 words, 10 marks**; **the exam practice is Reading Part 5, error correction, twelve lines, the second time in this book.**',
], C.grey, C.navy));

// ===================== 9.1 =====================
out.push(h2('9.1  Substance and presentation'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half of the question is the one that teaches.** **Most learners can describe the change and have never asked whether it altered what the document committed them to** — **and about a third discover, saying it aloud, that one did.**'));
out.push(p('**b**  ⚠ **_Shall_ for *will* is presentation** — **two forms of the same commitment, and nothing moves.** ⚠ **_We expect to deliver_ for *we will deliver* is substance:** **a promise becomes a forecast, and the whole difference is carried by one verb.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Does it alter what we are committed to? And does it alter only the rhythm?**  2 ⚠ **It means we have not looked** — **and we looked in four named files, so the hedge throws away the strongest thing in the paper.** **It moves a finding to a statement about our own state of knowledge.**'));
out.push(p('⚠ **The sentence to put on the board is the one about the comma, and it should be read twice:** ⚠ **a change of substance is normally made as a change of style, because nobody argues about a comma.** **Six words in front of a sentence about a count is where it goes.**'));
out.push(p('⚠ **And the second half of that is what keeps the cycle usable:** ⚠ **it was not necessarily deliberate.** **Their office has a house phrase and house phrases travel into documents where they do damage.** ⚠ **A class that treats every substantive change as an attack will reject nine improvements to catch three insertions** — **and the two questions exist precisely so that intention never has to be guessed at.**'));
out.push(p('**Language box – Practise (sample, three of the six):**  _**1** *the Company* **for** *we*, **throughout** — ⚠ **obligation: no. Rhythm: yes. Accept, and do not mention it.**  **2** *we aim to deliver by the 30th* **for** *we will deliver on the 30th* — ⚠ **obligation: YES.** **Reject, one sentence: this converts a delivery date into an intention.**  **3** **a paragraph moved from third to first** — ⚠ **obligation: no, and theirs reads better.** **Accept.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'They have moved my second paragraph to the top and it is better there.'],
  ['B', 'Then accept it.'],
  ['A', 'I will. I was going to add that my order worked too, because the chronology was deliberate.'],
  ['B', 'Was it deliberate?'],
  ['A', 'Yes. I put the dates first so the sequence was clear.'],
  ['B', 'And is their version unclear?'],
  ['A', 'No. The dates are all still there.'],
  ['B', 'So what does your extra sentence tell him?'],
  ['A', 'That I thought about it.'],
  ['B', 'It tells him you minded. Those are not the same thing and only one of them is in the sentence.'],
]));
out.push(note('This exchange is short and it is the one learners remember, because the impulse it names is universal: the sentence that accepts an improvement and then explains that the original was defensible too. It has one piece of content and the content is not what the writer intends. The practical instruction is a count — in a reply to a marked draft, every sentence should be doing one of three things: accepting, rejecting with a reason, or flagging. A sentence that does none of those three is a sentence about the writer, and it should come out. Where a class resists, make them read their own extra sentence aloud in the voice of the person receiving it.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **The two questions and the decision for each change, and the change that was substance dressed as style with its word count.** ⚠ **Six words or fewer is the usual size** — **and the size is the reason it works.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The change', 'Alters the obligation?', 'Alters only the rhythm?', 'Decision'], [
  ['**_the Company_ for _we_**', '**no**', '⚠ **yes**', '**accept, no comment**'],
  ['⚠ **_we aim to deliver_ for _we will deliver_**', '⚠ **YES**', '**no**', '⚠ **reject** — **a date becomes an intention**'],
  ['**a paragraph moved to the top**', '**no**', '⚠ **yes, and theirs is better**', '**accept, no comment**'],
  ['⚠ **_about 3,140_ for _3,140_**', '⚠ **YES** — **the figure is in the signed schedule**', '**no**', '⚠ **does not arise; 9.4**'],
  ['**a semicolon for a dash**', '**no**', '**yes**', '**accept**'],
  ['⚠ **_in due course_ for _by 14 June_**', '⚠ **YES**', '**no**', '⚠ **reject** — **and this is the worst of the six**'],
], [2.2, 1.5, 1.5, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**They changed *we will deliver on the 30th* to *we aim to deliver by the 30th*. It alters what we are committed to and it does not alter only the rhythm. So I will reject it, and the sentence I would write is: this converts a delivery date into an intention, and the date was agreed with the customer on 18 April.**_'));
out.push(p('⚠ **The listener count is the useful one.** **How many changes altered only the rhythm: usually two thirds of them.** ⚠ **And how many of those the speaker had intended to argue about: at least two in most cases** — **which is the cycle\'s real finding.** **A reader\'s instinct is to defend his own prose, and the two questions are what stop it.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **Five accepted, three rejected, four that do not arise** — ⚠ **and five and three and four is twelve, which she adds up in the note.** **A sort of twelve changes into three piles that does not add back to twelve has lost a change somewhere**, **and the person it is lost by is the person doing the sorting.** ⚠ **Unit 8 is where that habit comes from.**'));
out.push(p('**2**  ⚠ **To accept their better paragraph order and add a sentence saying her own order was also defensible.** ⚠ **The extra sentence has one piece of content: that she minded.** **It does not say she thought about it, although that is what it is meant to say.**'));
out.push(p('**3**  ⚠ **Because she cannot sort it.** **_We regret_ and *we apologise for* are not the same in a document that may be read later by somebody who was not there** — ⚠ **and whether the difference helps or hurts is a question for Mr Sayegh and not for her.** ⚠ **A line you cannot sort is a line you ask about, not a line you guess at** — **and the working note is where it waits.**'));
out.push(stage('6', 'Write with help – sample (152 words)'));
out.push(sample(null, [
  '**THE SIX CHANGES, SORTED. 2 June. L. Barakat. Working note before the reply.**',
  '**1** **_the Company_ for _we_ throughout** | **no** | **accept; their house style**',
  '**2** **the opening two paragraphs reversed** | **no** | ⚠ **accept; theirs is better and I will not say so**',
  '**3** ⚠ **_about 3,140 cartons_ for _3,140 cartons_** | ⚠ **YES** — **the figure is in the signed schedule of 4 May** | ⚠ **does not arise**',
  '**4** ⚠ **_we aim to deliver_ for _we will deliver_** | ⚠ **YES** — **a date becomes an intention** | ⚠ **reject, one sentence**',
  '**5** **_consignment_ for _load_** | **no** | ⚠ **accept; and theirs is the right word**',
  '**6** ⚠ **_in due course_ for _by 14 June_** | ⚠ **YES, and this is the worst of the six** | ⚠ **reject, one sentence**',
  '⚠ **Three accepted, two rejected, one that does not arise, and three and two and one is six.**',
  '⚠ **Change 2 is the one to notice.** **Theirs is better and I am accepting it with nothing added.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Their numbering and their order kept', '**✓**'],
  ['A reason given only where the answer is *yes*', '**✓** — **the three *no*s carry none**'],
  ['An improvement accepted in silence', '**✓** — **change 2**'],
  ['A change flagged as unsortable, with who decides', '⚠ **✗** — **the sample sorts all six, which may be true and should then be said**'],
  ['The three counts stated', '**✓** — **and added up, which the unit\'s own model does too**'],
], [5, 1]));
out.push(note('The fourth line is the interesting failure, because it is a failure of reporting rather than of judgement. A writer who genuinely could sort all six should say so — one line, "all six sorted; none referred" — because otherwise a reader cannot tell whether there was nothing to refer or whether the writer guessed. That distinction matters more in this unit than anywhere else in Book 1: the whole method rests on the writer knowing the limits of their own authority, and a silence looks identical whether it is confidence or an assumption.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class asks what the suppressed sentence would have told the reader.** ⚠ **Expect learners to defend it as *showing I had a reason*** — **and the answer is that a reason offered for a point you have conceded is not a reason, it is a regret.**'));
out.push(stage('7', 'Write freely – sample (226 words)'));
out.push(sample(null, [
  'Two years ago somebody in this office changed four words in a quotation we give customers, and it cost us about ninety thousand a year for eighteen months.',
  'What I had written was "the price holds for thirty days from the date of this quotation". What went out, after the letter had been retyped by somebody being helpful, was "the price holds for thirty days from the date of your order".',
  'Nine words to nine words. Nothing in the layout changed and nothing looked different.',
  'What it altered is which day the clock starts on. From our quotation, thirty days is thirty days of our exposure to a fuel price. From the customer\'s order, the customer can sit on a quotation for two months, order on the sixtieth day, and still hold us to a price we calculated in March.',
  'I do not think it was deliberate for a moment. Somebody retyping a letter thought "your order" was the friendlier phrase, and in every other sentence of that letter it would have been.',
  'It was found in November, when a customer did exactly that, politely, with our own letter in front of him, and he was entirely right.',
  'And what I did was nothing for six weeks, because I could not prove which version had gone to whom. Then we reissued the form with the clause in bold and a note of the change, which is where it should have started.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *how many words* question produces the finding of the stage**, **and in the sample the answer is nine for nine with nothing visibly altered.** ⚠ **The follow-up worth asking is who made the change** — **almost always somebody being helpful, retyping or shortening, with no view about the clause at all.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect the change to be under ten words in all three, and in two of three to have been accepted at the time and understood later.** ⚠ **The sentence to close on: a change of substance that looks like a change of style is not usually anybody\'s plan** — **it is what a helpful person does to a sentence whose load they cannot see.**'));

// ===================== 9.2 =====================
out.push(pb());
out.push(h2('9.2  The silent correction and the flagged one'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Most learners have corrected something silently and about half have corrected a date or a figure that way** — **which is the one habit this cycle exists to stop.**'));
out.push(p('**b**  ⚠ **The second.** **A misspelt *February* only needs to be right.** ⚠ **A date that says 28 February where the letter was 28 January is a fact somebody may rely on**, **and a silent correction can invent a letter that does not exist.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A date, a figure and a name.**  2 ⚠ **Because somebody may rely on a date, and because the corrector may be wrong about which letter was meant** — **in which case the silent correction has invented one.**'));
out.push(p('⚠ **The question is the cycle and it is worth drilling until it is automatic:** ⚠ **does the author need to know he was wrong, or does it only need to be right?** **Most small things only need to be right** — **and the instinct to flag them is a point being scored, which is exactly what a correspondence about a disputed consignment cannot afford.**'));
out.push(p('⚠ **The three always-flagged items are not a courtesy and the reason should be given as Hala gives it.** ⚠ **A date, a figure and a name are each a fact somebody may act on**, **and in each case the corrector may be the one who is wrong.** ⚠ **The words-against-digits case is the sharpest:** ***twelve* in words and *11* in digits is not a typing error, it is two numbers**, **and the author knows which he meant.**'));
out.push(p('⚠ **And the placing is the part nobody expects to matter.** ⚠ **Four flags at the top of a reply is a reply about his mistakes; the same four at the bottom under *small points* is housekeeping.** ⚠ **Identical content, different document** — **and it is worth reading the two versions aloud to the class, because the effect is immediate and cannot be argued with.**'));
out.push(p('**Language box – Practise (sample, six sorted):**  _**1** *recieved* → ⚠ **silent.**  **2** a doubled full stop → ⚠ **silent.**  **3** *14 April* where the delivery note says 14 March → ⚠ **flagged:** *line 3 reads 14 April; the delivery note is dated 14 March.*  **4** *3,410* where the schedule says *3,140* → ⚠ **flagged, and not corrected** — **the digits are transposed either here or there.**  **5** *Mr Haddad* where the letter was signed by somebody else → ⚠ **flagged** — **a name is never corrected silently.**  **6** *practise* for *practice* → ⚠ **silent.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Their page says twelve cartons in words and 11 in digits. The agreed figure is eleven, so I will make it eleven.'],
  ['B', 'Why is eleven the agreed figure?'],
  ['A', 'Because it is in their own letter of 20 February.'],
  ['B', 'So the one number in this correspondence that is settled is eleven.'],
  ['A', 'Yes. Which is why the correction is obvious.'],
  ['B', 'It is why the correction is unavailable. If you make his twelve into eleven, you have decided on his behalf that his twelve was a slip.'],
  ['A', 'It must be a slip.'],
  ['B', 'Probably. And if it is not — if somebody in his office has twelve from somewhere — you have silently deleted the only sign of it.'],
  ['A', 'So I flag both and choose neither.'],
  ['B', 'In one line, at the end, with no adjective in it.'],
]));
out.push(note('The move to teach here is the refusal, and it is harder than it looks because the correction really is almost certainly right. The argument is not about probability, it is about what a silent correction destroys: the discrepancy itself, which is the only evidence that somebody somewhere has a different figure. A learner who grasps this generalises it quickly — a silently corrected date destroys the evidence of a letter you have not seen, a silently corrected name destroys the evidence that two people are being confused. The flag preserves the discrepancy at a cost of one line.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **Six errors sorted, one flag written as a single line, and the line checked for adjectives.** ⚠ **The adjective to hunt is *obvious*, *clearly* or *presumably*** — **all three convert a flag into a comment on the author.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The error', 'Silent or flagged?', 'Why', 'The flag, in one line'], [
  ['**_recieved_, twice**', '**silent**', '⚠ **it only needs to be right**', '—'],
  ['**_14 April_ for _14 March_**', '⚠ **flagged**', '⚠ **a date; somebody may rely on it**', '⚠ *line 3 reads 14 April; the delivery note is dated 14 March*'],
  ['**_3,410_ against the schedule\'s _3,140_**', '⚠ **flagged**', '⚠ **a figure, and the digits are transposed on one page or the other**', '⚠ *line 7 reads 3,410; the schedule of 4 May reads 3,140. I have not chosen between them.*'],
  ['**_Mr Haddad_ as the signatory**', '⚠ **flagged**', '⚠ **a name** — **and I may be correcting it to the wrong person**', '⚠ *line 9 names Mr Haddad; the letter of 12 May is signed by another hand I cannot read.*'],
], [1.6, 1.2, 1.6, 2.4]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**The error was 3,410 against the schedule\'s 3,140. It is flagged because it is a figure and because the digits are transposed on one page or the other. And the flag reads: line 7 reads 3,410; the schedule of 4 May reads 3,140; I have not chosen between them.**_'));
out.push(p('⚠ **Both counts are diagnostic.** **How many flags had an adjective in them: usually about half, at the first attempt.** ⚠ **And how many flagged items were a date, a figure or a name: the honest answer in most rooms is that about a third of the flags were points being scored** — **and the way to see it is to ask what the flag would cost if it were silent instead, which for a spelling is nothing.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **Because two spellings and a stray full stop listed one by one would be three more rows in a table of four real points** — ⚠ **and a reader counting rows would read a page with four points that matter as a page with seven mistakes on it.** **One row, *corrected silently, not listed individually*, does the whole job.**'));
out.push(p('**2**  ⚠ **Because the agreed figure is eleven, which is exactly why their *twelve* has to go back to them.** ⚠ **A silent correction to eleven decides, on their behalf, that their twelve was a slip** — **and the one thing in the page any reader will check is that number.**'));
out.push(p('**3**  ⚠ **The note is dated 26 May and refers to *last week\'s* meeting, which was on 19 May.** ⚠ **_Last week_ is clear to two people on 26 May and meaningless in September** — **and the correspondence has already run five months, so September is when it will be read.** ⚠ **It is the flag nobody would make and everybody should.**'));
out.push(stage('6', 'Write with help – sample (147 words)'));
out.push(sample(null, [
  '**SMALL POINTS. 3 June. L. Barakat. The last section of the reply to the hire company.**',
  '⚠ **Small points, for the file rather than for an answer.**',
  '**1** | **line 3** | **the date reads 14 April; the delivery note is dated 14 March** | ⚠ **flagged, not changed**',
  '**2** | **line 7** | ⚠ **_3,410_ cartons; the schedule of 4 May reads _3,140_** | ⚠ **flagged, and I have not chosen between them**',
  '**3** | **line 9** | ⚠ **the signatory is given as Mr Haddad** | ⚠ **flagged** — **a name is never corrected silently, and I cannot read the signature**',
  '**4** | **throughout** | **two spellings and a doubled full stop** | ⚠ **corrected silently; not listed individually**',
  '⚠ **Three flags and one silent class, and the silent class is deliberately not itemised.**',
  '⚠ **Point 2 is the one I will not resolve.** **The digits are transposed on one page or the other and the schedule is the signed document**, ⚠ **which is a reason to believe 3,140 and not a reason for me to write it into their letter.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Small points*, at the end, with what it is for', '**✓**'],
  ['Silent corrections in one row, not itemised', '**✓**'],
  ['A figure flagged without being resolved', '**✓** — **and the reason for believing one of them stated without acting on it, which is the strongest version**'],
  ['A name flagged rather than guessed', '**✓**'],
  ['No adjectives in any flag', '⚠ **✗** — **_deliberately_ in the counting sentence is harmless, but *I cannot read the signature* is a judgement about their handwriting and could be *the signature is not legible to me***'],
], [5, 1]));
out.push(note('That last mark is worth making even though it looks fussy, because it is the distinction the whole cycle turns on. "I cannot read the signature" is about the reader; "the signature is not legible to me" is about the document, and only the second survives being read by the person who signed it. The general rule to give the class: a flag describes the page, not the author and not the marker. Where a learner cannot phrase a flag without a judgement in it, the flag is probably a point being scored and should be silent or absent.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class counts the adjectives and asks what each flag would lose by dropping its adjective** — **which is almost always nothing.** ⚠ **The one exception worth allowing is a quantified adjective** — *three times in two pages* — **because that is a count and not an opinion.**'));
out.push(stage('7', 'Write freely – sample (229 words)'));
out.push(sample(null, [
  'In February somebody in this office silently corrected a customer\'s name on a delivery note from Hamwi to Hamawi, and the two are different companies on the same street.',
  'What was changed was one letter. The note said Hamwi Brothers and the typed version said Hamawi Brothers, and the second is a customer of ours and the first, at that time, was not.',
  'Who changed it was the clerk preparing the week\'s notes, who knew Hamawi Brothers well, had never heard of Hamwi, and reasonably assumed a typing error in a hand-written order.',
  'Why she thought it was an error is the part I keep returning to. She was right about everything except the fact: we had no Hamwi account, the handwriting was poor, and nine times out of ten she would have been correcting a slip.',
  'What it actually was is a new customer, four doors down from the old one, placing a first order through a driver.',
  'When it was discovered: eleven days later, when Hamawi Brothers queried an invoice for goods they had not ordered and Hamwi telephoned to ask where their delivery was.',
  'And the thing that makes it a rule rather than a story is that there was nothing wrong with her reasoning. A name is never corrected silently, not because clerks are careless, but because the one case in ten is the case where the correction destroys the only evidence that something new has happened.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *date, figure or name* question is answered yes in nearly every text**, **and the sample shows the strongest version of the lesson:** ⚠ **the corrector\'s reasoning was sound and the correction was still wrong**, **because a silent correction destroys the evidence of the case it did not consider.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three silently corrected items to be a date, a figure or a name, and in two of three the corrector to have been entirely reasonable.** ⚠ **The sentence to close on: the rule is not for careless people; it is for the one case in ten that the careful person has no way of knowing about.**'));

// ===================== 9.3 =====================
out.push(pb());
out.push(h2('9.3  Editing a line whose author will read it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the one that produces silence.** **Most learners have had a sentence rewritten and most did not know why** — ⚠ **and a sentence rewritten without a reason teaches nothing, which means it will be written the same way again.**'));
out.push(p('**b**  ⚠ **The second.** **A crossed-out sentence with a replacement gives the author two versions and no information.** ⚠ **A line left standing with *this reads as though we chose the date; we did not* gives him the problem**, **and he can then accept your sentence, write a better one, or tell you that you are wrong about the fact.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **What the line as it stands says, and then the suggestion.**  2 ⚠ **That three consecutive rewrites is no longer a mark-up but a redraft of a paragraph** — **and a man reading a redraft of his paragraph stops reading your reasons.**'));
out.push(p('⚠ **The two-part form is the cycle and it should be drilled as a formula before it is discussed.** ⚠ *The line as it stands reads as though X; in fact Y. Suggest: Z.* **Three times as long as a rewrite, and the only version an author can act on.**'));
out.push(p('⚠ **The reason it is worth the length is the third of the three things it makes possible, and learners miss it:** ⚠ **he can tell you that you are wrong about the fact.** ⚠ **A rewrite cannot be contradicted, only resisted** — **and in the series\' own trial, one mark-up in six turned out to rest on something the marker had misunderstood.** **The two-part form is how that gets found before the document goes.**'));
out.push(p('⚠ **And the three-in-a-row rule is practical rather than diplomatic.** ⚠ **Rewrite the worst of three, annotate the other two, and name the dependency** — *the paragraph may need rebuilding once line 7 is settled.* **Eleven words, and the rebuilding stays with its author, who is the only person who can do it without changing what the paragraph was for.**'));
out.push(p('**Language box – Practise (sample, four marked and one rewritten):**  _**Line 2:** ⚠ *the line as it stands reads as though the van failed without anybody noticing; the yard telephoned at seven. Suggest: the yard telephoned the hire company at seven, when no van had arrived.*  **Line 3:** ⚠ *annotated: line 3 may need rebuilding once line 2 is settled.*  **Line 5:** ⚠ *as it stands this says we accepted the substitute; we were not offered one. Suggest: no substitute was offered.*  **Line 8:** ⚠ *“consignment” for “load”, for consistency with the schedule.*_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Theirs: *the delivery date was moved to 2 May*. Mine: *we agreed with Ms Tannous to move the delivery to 2 May*.'],
  ['B', 'Yours is better and he cannot see why. What does his line say?'],
  ['A', 'It says the date moved.'],
  ['B', 'Moved by whom?'],
  ['A', 'By nobody. There is nobody in the sentence.'],
  ['B', 'So write that down, in those words.'],
  ['A', '*The line as it stands reads as though the date moved by itself.*'],
  ['B', 'And what is true?'],
  ['A', '*We agreed it with the customer on 18 April.*'],
  ['B', 'Now he has the problem, and he can fix it, or tell you the date did move by itself and you have the wrong file.'],
]));
out.push(note('Unit 2 is doing the work in this role card and it is worth saying so aloud: the agentless construction is the thing the class learned to write deliberately, and here it is learned to detect in somebody else\'s prose. The two skills are the same skill in opposite directions, and learners who met the passive as a tool for not blaming a person are often surprised to find it used to remove a customer from a sentence where the customer is the whole point. The question that finds it every time is "moved by whom?" — and the answer "by nobody; there is nobody in the sentence" is the first part of the mark-up, already written.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **A mark-up in both parts, and the three things the author can do with it** — ⚠ **accept the suggestion, write a better sentence, or say that the marker has the fact wrong.** **The third is the one a class will not produce unprompted and is the reason for the whole form.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Line', 'What it says as it stands', 'The suggestion', 'Rewrite or annotate?'], [
  ['**2**', '⚠ **that the van failed without anybody noticing**', '⚠ *the yard telephoned the hire company at seven, when no van had arrived*', '**rewrite**'],
  ['**3**', '⚠ **that the two customers were told** — **they were not**', '—', '⚠ **annotate** — **consecutive with line 2**'],
  ['**5**', '⚠ **that we accepted a substitute van**', '⚠ *no substitute was offered*', '**rewrite**'],
  ['**8**', '**_load_ where the schedule says _consignment_**', '⚠ *consignment, for consistency with the schedule*', '**rewrite**'],
], [0.7, 2.4, 2.4, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**Line 2 as it stands reads as though the van failed without anybody noticing; in fact the yard telephoned at seven. I suggest: the yard telephoned the hire company at seven, when no van had arrived. And I have annotated line 3 rather than rewritten it, because it is consecutive with line 2 and the paragraph may need rebuilding once line 2 is settled.**_'));
out.push(p('⚠ **The second count is the one that reframes the cycle.** **How many first parts turned out to be about a fact rather than about style: usually most of them** — ⚠ **which tells a class that what feels like a preference for one\'s own prose is usually a disagreement about what happened**, **and that the two-part form is what makes the disagreement visible.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **Because lines 6 and 7 are consecutive, and rewriting both would be a redraft of the paragraph.** ⚠ **Line 6 is rewritten (the hedge deleted) and line 7 is annotated:** *line 7 may need rebuilding once line 6 is settled.*'));
out.push(p('**2**  ⚠ **That she left line 12 alone** — *we trust this is satisfactory* — ⚠ **and that it is not wrong and alters no obligation, although she would never write it.** ⚠ **Noting it tells a reader that her silences are decisions**, **which is what makes the six mark-ups credible rather than a list of things that caught her eye.**'));
out.push(p('**3**  ⚠ **Because a company that *notes* a shortfall was told about it, and a company that *identifies* one found it.** ⚠ **The whole value of the root-cause paper is that Sham Trading found the shortfall, counted it, and reported it on the day** — **which is not style; it is the first fact in the file.**'));
out.push(stage('6', 'Write with help – sample (150 words)'));
out.push(sample(null, [
  '**THE FEBRUARY LETTER, LINES 1 TO 10. 4 June. L. Barakat. For Nour before it goes.**',
  '⚠ **Line 2.** _“no van arrived on the Monday”_ — **the line as it stands reads as though nobody noticed until the customers complained; the yard telephoned the hire company at seven that morning.** ⚠ *Suggest: the yard telephoned the hire company at seven on the Monday, no van having arrived.*',
  '⚠ **Line 3.** _“the customers were informed”_ — ⚠ **they were not informed; they telephoned us.** ⚠ *Annotated, not rewritten: line 3 may need rebuilding once line 2 is settled.*',
  '⚠ **Line 5.** _“a substitute was not used”_ — **this reads as though one was offered and declined.** ⚠ *Suggest: no substitute was offered.*',
  '⚠ **Line 9.** _“we are sorry for any inconvenience”_ — ⚠ **I have left this alone and I want it noted that I left it alone.** **It is a sentence I would never write and nothing in it alters an obligation.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The author\'s words quoted exactly before being discussed', '**✓**'],
  ['A first part about the reading, not about the writing', '**✓** — **all three say what the line reads as**'],
  ['Of two consecutive lines, one annotated', '**✓** — **lines 2 and 3**'],
  ['A line left alone, with a note that it was left', '**✓** — **line 9**'],
  ['The mark-up that will be read as a preference, named', '⚠ **✗** — **line 5 is the candidate (*not used* against *not offered*) and the sample does not flag it as such**'],
], [5, 1]));
out.push(note('Line 5 is the one to teach from in that sample, because it is the unit in miniature: "a substitute was not used" and "no substitute was offered" look like two ways of saying the same thing, and they differ on who had the opportunity. A reader who thinks the marker is fussing about words will reject it; a reader who is told in advance that this one will look like a preference and is not will read the reason. Naming your own weakest-looking mark-up before the author does is the same move as naming the series that has moved against you in Unit 8, and it is worth connecting the two out loud.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class reads only the first parts and says what each line commits the author to.** ⚠ **Where a first part says *this is unclear*, it is about the marker and not the line** — **and the repair is to say what a reader would take from it, which is always a sentence and never an adjective.**'));
out.push(stage('7', 'Write freely – sample (231 words)'));
out.push(sample(null, [
  'Four years ago I wrote that a customer had "not been contacted", and somebody changed it to "could not be reached", and I have never found out who or why.',
  'What I wrote was that the customer had not been contacted. It was accurate and it was about us: nobody had telephoned.',
  'What came back, in the version that went out, was that the customer could not be reached. That is about the customer, and it says somebody tried.',
  'What I guessed the reason was: that "not been contacted" sounded like an admission and "could not be reached" sounded better in a letter going to a manager. I still think that is probably right.',
  'Whether I asked: no. I was eight months into the job, the letter had gone, and the difference seemed like a matter of tone that I would have had to make a case about.',
  'What the reason turned out to be I only learned two years later, from the same person, in a different context: their office had a rule that no letter should state a thing we had failed to do without stating what we had done instead. Which is a real rule, with a reason behind it, and it was never written down anywhere I could find.',
  'And the cost of not knowing is that I wrote "could not be reached" myself, twice, in the following year, about customers nobody had telephoned.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *did you ever find out* question is answered no in most texts, and the sample shows the cost exactly:** ⚠ **the writer went on to make the same substitution herself, about customers nobody had telephoned**, **because a rewrite with no reason attached teaches the new sentence and not the rule behind it.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three writers never to have found out, and in those two for the writer to have adopted the rewritten form afterwards.** ⚠ **The sentence to close on: an unexplained rewrite does not correct a writer, it trains one** — **and what it trains is the surface of a sentence rather than the judgement underneath it.**'));

// ===================== 9.4 =====================
out.push(pb());
out.push(h2('9.4  The line you may not improve'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is where the cycle begins.** **Most learners can name a line nobody may change and about half cannot say why not** — ⚠ **and a line that is closed for no nameable reason is a custom, which is the opposite fault and costs the same.**'));
out.push(p('**b**  ⚠ **The first.** **A clumsy sentence in a covering letter is yours.** ⚠ **A clumsy sentence that quotes eleven words of your own January letter is not a sentence at all** — **it is a quotation, and a quotation that has been improved is not a quotation.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **An agreed figure · a quoted undertaking · a term of art · a negotiated hedge.**  2 ⚠ **That it means the letter cannot be put in front of a court as an admission, and that it means that because those two words are there** — **delete them and the protection goes with them.**'));
out.push(p('⚠ **This is the hinge of the unit and the sentence to put on the board is Mr Sayegh\'s:** ⚠ **quality is not the test.** ⚠ **Two of the four closed lines are badly written and all four are closed** — **and the test is where the words came from.**'));
out.push(p('⚠ **The term of art is the one that costs something to defend, and the cost should be admitted rather than argued away.** ⚠ *Without prejudice* **reads like nonsense to anybody who does not know it.** **That is a real cost.** ⚠ **It is worth paying because the two words do in two words what a paragraph would do badly and still leave arguable** — **and the remedy for a reader who does not know is a footnote, never a deletion.**'));
out.push(p('⚠ **And the two hedges are the hardest discrimination in Book 1, so give the class the test rather than the answer.** ⚠ **Line 6\'s hedge was ADDED to a finding and weakens it; line 11\'s was NEGOTIATED against a liability and limits it.** ⚠ **Same grammar, opposite function** — **and the two things that tell them apart are who asked for it and what it is attached to.** **A hedge attached to a thing you have evidenced is a loss; a hedge attached to an assertion about the whole world is a protection.**'));
out.push(p('**Language box – Practise (sample, four closed lines):**  _**1** **the quantity in the signed schedule of 4 May** — ⚠ **an agreed figure.** **Six words: *the figure is in the signed schedule*.**  **2** **the nine words quoted from our quotation of 2 March** — ⚠ **a quoted undertaking.** **Six words: *those nine words are a quotation*.**  **3** *carriage paid* — ⚠ **a term of art; it fixes who pays and where risk passes.** **Six words: *carriage paid is a term of art*.**  **4** *to the extent that stock permits* — ⚠ **a negotiated hedge, agreed with the customer in January.** **Six words: *that clause was agreed in January*.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Line 6 has a hedge in it and line 11 has a hedge in it. Why is one of them ours to delete and the other not?'],
  ['B', 'Who asked for each?'],
  ['A', 'Line 6 is theirs. Line 11 was Mr Sayegh\'s, agreed in March.'],
  ['B', 'That is half the answer and it is the half that sounds like ownership. What is each one attached to?'],
  ['A', 'Line 6 is attached to the apron sentence. Which we evidenced, in four named files.'],
  ['B', 'And line 11?'],
  ['A', 'To a general assertion about what happened. Which we cannot evidence, because it is about everything.'],
  ['B', 'So one hedge is in front of something you can prove and the other is in front of something nobody could.'],
  ['A', 'And the first one gives away what I have and the second one limits what I am claiming.'],
  ['B', 'Same grammar. Opposite function. And you can tell without knowing who wrote either.'],
]));
out.push(note('That last line is the point of the role card and it is why the test is taught rather than the ownership. A learner who sorts hedges by who wrote them will defend their own and delete the other side\'s, which is a position and not a method. The test — what is the hedge attached to? — works on a document whose history you do not know, which is the normal case. A hedge in front of a finding you have evidenced throws the evidence away. A hedge in front of an assertion about the world limits a liability you could not otherwise bound. Where a class can apply that to a page they have never seen before, the cycle has worked.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **The four kinds, and the difference between the two hedges with what each is attached to.** ⚠ **The answer that uses only *ours* and *theirs* has not understood it**, **and should be sent back to the question.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The line', 'Which kind', 'Where the words came from', 'The six words for the reply'], [
  ['**the quantity, 3,140**', '⚠ **an agreed figure**', '**the schedule signed on 4 May**', '⚠ *the figure is in the signed schedule*'],
  ['**nine words about delivery dates**', '⚠ **a quoted undertaking**', '**our own quotation of 2 March**', '⚠ *those nine words are a quotation*'],
  ['⚠ **_carriage paid_**', '⚠ **a term of art**', '⚠ **trade usage; it fixes who pays and where risk passes**', '⚠ *carriage paid is a term of art*'],
  ['⚠ **_to the extent that stock permits_**', '⚠ **a negotiated hedge**', '⚠ **agreed with the customer in January, by letter**', '⚠ *that clause was agreed in January*'],
], [2, 1.3, 1.7, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**The line is *to the extent that stock permits*. It is a negotiated hedge, because the words came from the exchange of letters in January. If it were changed we would be promising stock we do not hold. And the reply will say: that clause was agreed in January.**_'));
out.push(p('⚠ **The second count is the one that produces the useful silence.** **How many closed lines are badly written: usually half.** ⚠ **And how many have already been improved by somebody: at least one in every room** — **and the cost is worth collecting, because it is normally discovered months later by somebody outside the company.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **Lines 8 and 11** — *without prejudice* **and the nine-word hedge.** ⚠ **The reply says *line 8 is a term of art* and *line 11 was agreed in March*** — **twelve words for two lines, with no adjectives and no apology.**'));
out.push(p('**2**  ⚠ **Because the eleven was agreed in their own letter of 20 February, and an *about* in front of it turns the one number nobody disputes back into a number.** ⚠ **The whole of the root-cause paper rests on the eleven being settled so that the argument can be about why** — **and *about* is five letters and the smallest word on the page.**'));
out.push(p('**3**  ⚠ **It limits what the Company asserts to what the Company has searched for** — ⚠ **so that a document nobody has seen, in a file the Company does not hold, cannot later be said to contradict it.** **Nine words of apparent fog, forty minutes on a telephone in March.**'));
out.push(stage('6', 'Write with help – sample (154 words)'));
out.push(sample(null, [
  '**THE FOUR LINES THAT DO NOT ARISE. 5 June. L. Barakat. For the reply, and for the file.**',
  '**3** | ⚠ **_about 3,140_ for _3,140_** | ⚠ **an agreed figure** — **the schedule signed on 4 May** | ⚠ **the one quantity both sides have signed stops being agreed**',
  '**6** | ⚠ **nine quoted words replaced by _as quoted_** | ⚠ **a quoted undertaking from our quotation of 2 March** | ⚠ **in September we hold a reference to a file instead of the words we wrote**',
  '**9** | ⚠ **_carriage paid_ deleted** | ⚠ **a term of art** — **it fixes who pays carriage and where risk passes** | ⚠ **both of those, and neither is anywhere else in the document**',
  '**11** | ⚠ **_to the extent that stock permits_ deleted** | ⚠ **a negotiated hedge** — **agreed by letter in January** | ⚠ **we would be promising stock we do not hold**',
  '⚠ **Lines 9 and 11 are badly written and both are closed, and the reply says so in six words each and does not apologise.**',
  '⚠ **Line 3 is the one I nearly missed, because *about* is the smallest word on the page.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Provenance, with a date, for every closed line', '⚠ **✓** — **three have dates; *carriage paid* has trade usage instead, which is the right answer and should say so**'],
  ['What the change would cost, for each', '**✓**'],
  ['A badly written closed line protected without apology', '**✓**'],
  ['The smallest word on the page, examined', '**✓** — **the *about***'],
  ['What the negotiated hedge does, written out for the file', '⚠ **✗** — **the cost is given and the function is not; the next editor will delete it again**'],
], [5, 1]));
out.push(note('The fifth line is the failure that matters and it is the one 9.7 turns on. Writing down what a closed line costs to change protects it in this exchange; writing down what it DOES protects it in the next one, with a different editor, in two years. The two sentences are not the same: "we would be promising stock we do not hold" is a consequence, and "this clause limits the promise to stock actually held at the date of order" is a function. The second is what belongs in the file. A learner who writes only the consequence has defended the line once; the whole argument of 9.7 is that once is not enough, because the person who deletes it next will not have read this reply.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class asks whether the provenance would survive somebody asking for the document.** ⚠ **Where there is no document, the line is a custom and not a closed line** — **and that discovery is the most useful thing that happens in this stage.** **A custom treated as a term is defended for years by people who cannot say why, and it is the mirror image of the fault the cycle teaches.**'));
out.push(stage('7', 'Write freely – sample (230 words)'));
out.push(sample(null, [
  'Every quotation this company sends carries a sentence about the price being subject to confirmation on the day of order, and everybody treats it as untouchable, and I cannot find where it came from.',
  'The line is: "prices quoted are subject to confirmation at the date of order". It is in every quotation, in the same position, in the same words, and it has been since before I joined.',
  'Who says it cannot change is everybody. Nadia says it is a legal requirement. The office says it has always been there. Mr Ayoub says it was put in after something that happened with a fuel price, which he thinks was in 2017 or 2018.',
  'What kind of closed line it is supposed to be: a term of art, by the way people talk about it. "Subject to confirmation" is treated as though it were a phrase with a fixed meaning that must not be paraphrased.',
  'Whether there is a document behind it: I have looked in the standing-forms file, the 2017 and 2018 correspondence and the minute book, and there is nothing. The oldest quotation I can find carrying it is from March 2018.',
  'What I found, in the end, is that it is probably a custom with a real reason underneath it. The reason — a fuel price that moved between quotation and order — is a good one, and nobody has written it down in eight years, which means the sentence is one helpful retyping away from disappearing.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *is there a document behind it* question is answered no in most texts, and the sample ends in the right place:** ⚠ **a custom with a real reason underneath it, undocumented for eight years, one helpful retyping from disappearing.** **That is the same mechanism as 9.1\'s drifted percentage and 9.7\'s deleted clause, and it is worth naming as one thing.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect a document behind the closed line in about one of three, and the other two to be customs treated as terms.** ⚠ **The sentence to close on: a line nobody can source is defended by habit, and habit protects it until the day somebody tidy arrives** — **which is the opposite fault from improving a quotation and costs exactly as much.**'));

// ===================== 9.5 =====================
out.push(pb());
out.push(h2('9.5  Reinstating a deletion'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second question is the discipline:** **does the document still work without it?** ⚠ **In most cases it does, which is why the three-reinstatement limit is not an arbitrary rule.**'));
out.push(p('**b**  ⚠ **The second.** **A sentence of explanation nobody needs is a sentence you let go.** ⚠ **The date on which you first reported the shortfall is the fact the whole correspondence rests on** — **and *promptly* in its place is an adjective about yourself.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A date, a named search, and a word that carries a comparison.**  2 ⚠ **_I have reinstated X; without it the sentence reads as Y._**'));
out.push(p('⚠ **The opening assumption is the one that keeps a reply usable, and it should be stated as Nadia states it:** ⚠ **most deletions are an editor shortening a paragraph without knowing what one clause was carrying.** ⚠ **Treat them that way in writing whatever you suspect** — **it is usually true, and it is always the cheaper assumption, because the alternative puts an accusation in a document that will be read by people who were not there.**'));
out.push(p('⚠ **The three always-reinstated items should be learned as a set, because none of them looks load-bearing.** ⚠ **A date, a named search, a comparison.** ⚠ *Promptly* **for *on 14 March*; *we have no record* for the four named files; *that day* for *the same day*** — **and the third is four letters.**'));
out.push(p('⚠ **And the arithmetic of restraint is the part learners resist and the part that decides whether the reinstatements land.** ⚠ **A reply that puts back four cuts is a reply from somebody who cannot be edited** — ⚠ **and the cost of that is not paid on the sentence you did not need; it is paid on the date.** **Let the long sentence go, and say so.**'));
out.push(p('**Language box – Practise (sample, three of four reinstated):**  _**1** ⚠ *I have reinstated “on 9 February”; without it the sentence reads as though the booking had no date.*  **2** ⚠ *I have reinstated the clause naming the three places I looked; without it we are claiming to have no record rather than having searched.*  **3** ⚠ *I have reinstated “still”; without it “the van had not arrived” loses the comparison with seven o\'clock.*  **4** **the thirty-word sentence about the racking** — ⚠ **let go, and nothing said about it.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I want the weighbridge sentence back. I wrote it and it is accurate.'],
  ['B', 'Is their version inaccurate?'],
  ['A', 'No. Theirs is nine words and mine was thirty-one.'],
  ['B', 'Is anything lost?'],
  ['A', 'Nothing is lost. Mine explains how the weighing works.'],
  ['B', 'Does the document need to explain how weighing works?'],
  ['A', '…No.'],
  ['B', 'Then you have four reinstatements, and three of them are a date, a search and a comparison.'],
  ['A', 'And the fourth makes the other three look like a reflex.'],
  ['B', 'The fourth makes all four look like a man who cannot be edited. And the price of that is not paid on the weighbridge.'],
]));
out.push(note('The sentence to lift out of this is the last one: the price of over-reinstating is paid on the date, not on the sentence you did not need. Learners understand the principle and still find the restraint difficult, because the sentence they wrote is usually genuinely good. The practical test is the one B uses — does the document need this? — asked of the document\'s purpose rather than of the sentence\'s quality. And there is a second-order benefit worth naming: the declared surrender ("thirty-one words to nine, nothing lost, theirs better") is itself what makes the other three reinstatements read as judgements, so letting one go is not only a cost, it is the evidence for the rest.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **Three reinstatements in the two-part form, the cut that was let go, and what letting it go bought.** ⚠ **The answer to the last is the credibility of the other three**, **and a class that can say that has understood why the proportion goes in the reply.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The cut', 'What it was carrying', 'Reinstate?', 'The sentence'], [
  ['⚠ **_promptly_ for _on 9 February_**', '⚠ **a date in a file**', '⚠ **yes**', '⚠ *I have reinstated “on 9 February”; promptly is an adjective about us.*'],
  ['**the three places I looked**', '⚠ **a search rather than a claim**', '⚠ **yes**', '⚠ *without it we are claiming to have no record.*'],
  ['⚠ **_still_, deleted**', '⚠ **a comparison with seven o\'clock**', '⚠ **yes** — **five letters**', '⚠ *without it “the van had not arrived” loses the time it is measured against.*'],
  ['**thirty-one words on the racking**', '**an explanation nobody needs**', '⚠ **no**', '⚠ **nothing said, anywhere**'],
], [1.6, 1.9, 1, 2.3]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**They cut *still*. It was carrying the comparison with seven o\'clock. I have reinstated it, and the sentence reads: at nine the van had still not arrived. And the one I let go was the racking sentence, because theirs is nine words, nothing is lost, and the document does not need to explain how weighing works.**_'));
out.push(p('⚠ **The second count is the finding of the stage.** **How many cuts were a single word: usually two of four.** ⚠ **And how many of those single words were carrying a comparison or a date: nearly all of them** — ⚠ **because a single word that can be cut without damaging a sentence grammatically is exactly the kind of word that is doing semantic work nobody notices.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **_That day_ means the day of the count; *the same day* means the same day as the count.** ⚠ **Only the second says that nothing was held back for consideration** — **and it is four letters.**'));
out.push(p('**2**  ⚠ **Line 7, the thirty-one-word weighbridge sentence, reduced to nine.** ⚠ **Nothing is lost and theirs is better, and she says nothing about it anywhere in the reply.** ⚠ **Letting it go bought the credibility of the other three** — **because a reply that reinstates all four is a reply from somebody who cannot be edited, and the cost of that is paid on the date.**'));
out.push(p('**3**  ⚠ **Because a reinstatement defended in advance reads as one the writer expects to lose.** ⚠ **The answer exists and is one sentence** — *the document is about whether we delayed, and “the same day” is the only phrase in it that answers that question* — **and it is held back until asked for.**'));
out.push(stage('6', 'Write with help – sample (149 words)'));
out.push(sample(null, [
  '**THREE REINSTATEMENTS. 6 June. L. Barakat. Section 2 of the reply.**',
  '⚠ **1. Line 2. I have reinstated “on 9 February”.** **Their version reads *booked in good time*.** ⚠ *In good time* **is an adjective about ourselves and 9 February is a date on a slip** — **and the question in this correspondence is whether six days was enough notice.**',
  '⚠ **2. Line 5. I have reinstated the clause naming the three places I looked.** **Their version reads *there is no record of a reply*.** ⚠ **Three named places is a search; *no record* is a claim.**',
  '⚠ **3. Line 8. I have reinstated “still”.** **Their version reads *at nine the van had not arrived*.** ⚠ **_Still_ carries the comparison with the seven o\'clock call** — **and without it the sentence is a fact about nine o\'clock instead of a sequence.** **It is five letters.**',
  '⚠ **And one cut I have not reinstated:** **thirty-one words on the racking, reduced to nine, nothing lost.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Their cut version quoted as well as yours', '**✓** — **all three**'],
  ['A second part about use, not about preference', '**✓** — **and reinstatement 1 names the question the document is about, which is the strongest form**'],
  ['One cut let go, and declared', '**✓**'],
  ['The proportion stated', '⚠ **✗** — **the sample never says four cuts and three reinstatements as a count**'],
  ['The defence of the smallest reinstatement kept back', '⚠ **✗** — **the five-letter one is defended in place, which is the fault the unit names**'],
], [5, 1]));
out.push(note('The fifth failure is the subtle one and it is worth not letting pass, because the sample\'s defence of "still" is good — it is the kind of sentence a learner should be able to produce — and the point is that producing it is not the same as sending it. A four- or five-letter reinstatement defended in the reply announces that the writer expects an argument about it, which invites one. Have the sentence, keep it in the working note, and send the reinstatement bare. The same discipline appears at 9.3 in the mark-up that will be read as a preference, and the two are worth teaching as one habit: say the thing that will be doubted, and do not pre-argue the thing that will probably be accepted.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class says what the four or five letters were carrying** — **and where nobody can say, the reinstatement is a preference and should be let go.** ⚠ **Expect one learner in three to find that their smallest reinstatement is not carrying anything**, **which is the cheapest discovery in the cycle.**'));
out.push(stage('7', 'Write freely – sample (227 words)'));
out.push(sample(null, [
  'Somebody shortening a letter in 2023 cut the word "written" from the phrase "written confirmation", and it took fourteen months and a dispute about a tonne of sugar for anybody to notice.',
  'What was cut was one word. The clause had read "subject to written confirmation by the office"; it went out, and has gone out ever since, as "subject to confirmation by the office".',
  'Who cut it was whoever retyped the standing order form in the spring of 2023, and I do not know who that was.',
  'Why they cut it is not a mystery. "Confirmation by the office" is shorter and reads better, and in ordinary use nobody would notice a difference, because confirmations are usually written anyway.',
  'When the absence was noticed: in May this year, when a customer said that a telephone call from the office had confirmed an order, which it had, and which under the original clause would not have counted.',
  'What it cost was the tonne of sugar and about three weeks. The customer was entirely within the words as they now stand and we paid for the goods.',
  'And what I keep thinking about is that the clause is still only as good as the next person to retype it. We have put "written" back in bold, which helps, and nothing in the file says why it is in bold, which is where I would start if I were doing it properly.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *how long was the thing that was cut* question is answered *one word* in most texts, and the sample is the clearest case in the unit:** ⚠ **one word, fourteen months, a tonne of sugar.** **And the last paragraph is 9.7 arriving early** — **the repair is in bold and the reason for the bold is in nobody\'s file.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect the cut thing to be shorter than a sentence in two of three, and in all three for the person who cut it to have been shortening something with no view about the clause at all.** ⚠ **The sentence to close on: the words that get cut are the words a sentence still works without** — **which is exactly the test for a word that is carrying something other than grammar.**'));

// ===================== 9.6 =====================
out.push(pb());
out.push(h2('9.6  One document, two authors, one voice'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Almost every learner can name such a document and almost all of them say a reader could tell** — **and then cannot say how.** ⚠ **The three signs are what the cycle supplies.**'));
out.push(p('**b**  ⚠ **The second is the join.** *Furthermore · it is submitted · in respect thereof* — ⚠ **a connective nobody in the building says, a passive with no agent, and a word belonging to one trade, all in one sentence.** **The first sentence is the voice of the document.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A connective nobody here says · a passive with no agent · a word that belongs to one trade.**  2 ⚠ **It gets marked rather than blended** — **quoted and attributed, or set out as a numbered term.**'));
out.push(p('⚠ **Read it aloud is the whole method and it should be done in the room, with the door shut, before anything is explained.** ⚠ **The ear finds in one reading what a comparison of drafts takes an hour to find**, **because the eye reads for sense and skips the connectives** — ⚠ **and the connectives are exactly where the seams are.**'));
out.push(p('⚠ **The rewrite is the part to insist on doing in full, because learners will plain the sentence and lose half the content.** ⚠ *We do not accept that the Company is liable for the shortfall, and we have set out why at paragraph 9* **carries everything that *it is submitted that no liability attaches to the Company in respect thereof* carries** — **the refusal, the subject, and a cross-reference that the original did not have.**'));
out.push(p('⚠ **And the clause that cannot be rewritten is where 9.4 and 9.6 meet.** ⚠ **Smoothing a negotiated clause into the surrounding prose either changes its words, which 9.4 forbids, or hides that one clause is in another voice.** ⚠ **So it is quoted and attributed, or set out as a numbered term** — **and Mr Ayoub\'s sentence is the one to leave on the board: a seam you can see is a construction; a seam you cannot see is a document that changes its mind halfway down, and there is nothing in between.**'));
out.push(p('**Language box – Practise (sample, three joins and one marking):**  _**1** ⚠ *Accordingly, it was determined that the hire be effected through a third party.* → ⚠ *We hired the van through Shaheen\'s, as we have before.* **(all three signs.)**  **2** ⚠ *The said van was duly ordered.* → ⚠ *We ordered the van on 9 February.* **(two signs — and *duly* was standing where the date should be.)**  **3** ⚠ *In the premises, we invite reconsideration.* → ⚠ *We ask you to reconsider.* **(one sign.)**  **4** ⚠ *“to the extent that stock permits”* → ⚠ **marked, not blended: quoted and attributed to the January exchange.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', '*We counted the consignment on 14 March and reported it the same day. Furthermore, it is submitted that no liability attaches to the Company in respect thereof.*'],
  ['B', 'Stop. Three signs in the second sentence. Name them.'],
  ['A', '*Furthermore*, which nobody here says. *It is submitted*, which has nobody in it. And *thereof*.'],
  ['B', 'So say it in the voice of the first sentence, and lose nothing.'],
  ['A', '*We do not accept that the Company is liable for the shortfall.*'],
  ['B', 'You have lost something.'],
  ['A', '…The reason. It was in paragraph 9 and the original pointed nowhere.'],
  ['B', 'So the rewrite can be better than the original as well as plainer.'],
  ['A', '*We do not accept that the Company is liable for the shortfall, and we have set out why at paragraph 9.*'],
  ['B', 'One voice, and a cross-reference the other version never had.'],
]));
out.push(note('The useful discovery in this role card is that translating a borrowed register usually improves the content rather than only the sound, and it happens for a structural reason: a formula like "it is submitted that no liability attaches" is complete in itself and therefore never needs to point at evidence, while a plain sentence in the first person almost demands the "and we have set out why at paragraph 9". Make the class check every rewrite for what it has lost, and then for what the plain version now obviously needs. In the series\' own trial, three learners in five added a cross-reference or a date at this point without being asked to.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **The three signs and the rewritten sentence, checked clause by clause for content.** ⚠ **The check to insist on is the reverse one** — **what does the plain version now need that the formula did not?** — **because that is where the date or the cross-reference appears.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence', 'Which of the three signs', 'Rewritten in one voice', 'Or marked, because'], [
  ['⚠ *Accordingly it was determined that the hire be effected through a third party.*', '⚠ **all three**', '⚠ *We hired the van through Shaheen\'s, as we have before.*', '—'],
  ['⚠ *The said van was duly ordered.*', '⚠ **two** — *the said* · *duly*', '⚠ *We ordered the van on 9 February.*', '⚠ **and the date arrives free, because *duly* stood where it should have been**'],
  ['⚠ *In the premises, we invite reconsideration.*', '⚠ **one**', '⚠ *We ask you to reconsider.*', '—'],
  ['⚠ *“to the extent that stock permits”*', '⚠ **a different voice on purpose**', '—', '⚠ **a negotiated clause** — **quoted and attributed to the January exchange**'],
], [2.2, 1.4, 2.2, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(p('_**The join is at *the said van was duly ordered*. The signs are *the said* and *duly*. In one voice it reads: we ordered the van on 9 February. And the clause I have marked instead is *to the extent that stock permits*, because it was agreed with the customer in January and cannot be reworded.**_'));
out.push(p('⚠ **The second count is the one that surprises a room.** **How many documents had a second author nobody had been told about: usually two or three** — ⚠ **and the way they are found is not by asking but by reading aloud**, **which means the information was available to every reader of those documents all along.**'));
out.push(stage('5', 'Read'));
out.push(p('**1**  ⚠ **_Duly_ was doing the work of a date:** **it told a reader that the count was done properly without saying when.** ⚠ **Removing it left a hole exactly the size of *on 14 March*** — **which is the one fact in the correspondence they most want in every paragraph.** ⚠ **Most trade words are standing where a fact should be.**'));
out.push(p('**2**  ⚠ **Because it is a negotiated clause and 9.4 forbids rewording it** — **so blending it would either change the words or hide that one clause is in another voice.** ⚠ **The footnote is three lines and says who agreed the clause and when: the telephone agreement of 24 March.** ⚠ **An unexplained change of register reads as carelessness; the same clause quoted and dated reads as a term.**'));
out.push(p('**3**  ⚠ **Because paragraph 4 is Mr Sayegh\'s throughout and reads as his.** ⚠ **A whole paragraph in one voice is not a join** — **it is a section, and a section may be attributed at its head.** ⚠ **The fault is a voice that changes INSIDE a paragraph**, **and twice inside one sentence is worse than once between two.**'));
out.push(stage('6', 'Write with help – sample (151 words)'));
out.push(sample(null, [
  '**THE FEBRUARY LETTER, READ ALOUD. 7 June. L. Barakat. Four joins and what I did with each.**',
  '**para 1** | ⚠ *Accordingly it was determined that the hire be effected through a third party.* | ⚠ **all three** — *accordingly* · *it was determined* · *effected* | ⚠ *We hired the van through Shaheen\'s, as we have before.*',
  '**para 2** | ⚠ *The said van was duly ordered.* | ⚠ **two** — *the said* · *duly* | ⚠ *We ordered the van on 9 February.* — **and the date arrives free**',
  '**para 4** | ⚠ *In the premises, we invite your reconsideration.* | ⚠ **one** — *in the premises* | ⚠ *We ask you to reconsider.*',
  '**para 5** | ⚠ *“to the extent that stock permits”* | ⚠ **a different voice on purpose** | ⚠ **marked, not blended** — **quoted, and attributed to the exchange of letters of 11 and 14 January**',
  '⚠ **_Duly_ was doing the work of a date, and taking it out left a hole exactly the size of *on 9 February*.**',
  '⚠ **The whole exercise took nine minutes, out loud** — **and I found four joins the eye had missed in two readings.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The signs counted for each sentence', '**✓** — **three, two, one, and one marking**'],
  ['A rewrite that revealed a fact standing behind a vague word', '**✓** — ***duly* and 9 February**'],
  ['A clause marked and dated rather than blended', '**✓** — **and dated to two letters rather than one, which is better**'],
  ['A whole section in one voice left alone', '⚠ **✗** — **nothing is said about whether any section was left; a silence here reads as not having looked**'],
  ['How long it took, and that it was done aloud', '**✓** — **nine minutes**'],
], [5, 1]));
out.push(note('That fourth mark is the same point as the left-alone line in 9.3 and the declared surrender in 9.5, and by this stage a class should be able to see the three as one habit: record what you decided not to touch. In a document with two authors it matters more than elsewhere, because a reader who sees four joins marked and nothing said about the rest cannot tell whether the rest is clean or unread. One line does it — "paragraph 3 is in one voice throughout and I have left it" — and it converts the whole exercise from a list of catches into a reading.'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Students read their worst join aloud, in the original.** ⚠ **The class says where it hesitated and whether the hesitation came at the connective** — **and it usually does, which is the demonstration that the method is the ear and not the eye.**'));
out.push(stage('7', 'Write freely – sample (232 words)'));
out.push(sample(null, [
  'The paper that got the fourth store its shelving had two authors, and everybody who read it could tell, and nobody said so to either of us.',
  'What it was: a two-page request for about three hundred thousand of racking, written in 2023.',
  'Who wrote which parts: I wrote the first page, which was the stock figures and the floor plan. Nadia wrote the second, which was the costing and the argument about insurance.',
  'What gave it away was one paragraph in the middle, which we had both written in turn over about four days. My sentences were short and had dates in them. Hers had *in addition* and *it should be noted that* and one *the aforementioned shelving*. Read aloud, the paragraph changes voice three times in eleven lines.',
  'Whether anybody said so: no. What happened is that Mr Ayoub asked, in the meeting, which of us he should ask about the insurance figure — and that is the question a reader asks when he can hear two authors.',
  'What the reader concluded, as far as I can reconstruct it, is that the paper was two papers. He approved the racking and he asked for the insurance costing again, separately, in writing, from Nadia — which is exactly what you would do if you could not tell whose document you were holding.',
  'It cost about three weeks and it would have cost nothing if either of us had read it out loud once.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The *what gave the second author away* question is answered with a connective or a passive in nearly every text**, **and the sample has the exact diagnostic question a reader asks:** ⚠ ***which of you should I ask about this figure?*** **A reader who can hear two authors does not complain about prose; he asks a question about authority, which is what Mr Ayoub asks in 9.6.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect the giveaway to be a connective or a passive in all three, and in two of three nobody to have said anything to the authors.** ⚠ **The sentence to close on: the cost of two voices is never a comment about style** — **it is a question about which author the reader is dealing with, and that question is answered by somebody else, later, without you.**'));

// ===================== 9.7 =====================
out.push(pb());
out.push(h2('9.7  Review & Mediate: the four you may not change'));
out.push(stage('1', 'Get ready – Unit 9 quiz'));
out.push(p('**1** ⚠ **Does it alter what we are committed to? And does it alter only the rhythm?**'));
out.push(p('**2** ⚠ **A date, a figure and a name** — **because each is a fact somebody may act on, and because in each case the corrector may be the one who is wrong.**'));
out.push(p('**3** ⚠ **What the line as it stands says, and then the suggestion.**'));
out.push(p('**4** ⚠ **An agreed figure · a quoted undertaking · a term of art · a negotiated hedge.** ⚠ **Quality is NOT the test; provenance is.**'));
out.push(p('**5** ⚠ **A date, a named search, and a word that carries a comparison.** ⚠ **A fourth reinstatement costs you one of the three that matter** — **and the cost is paid on the date.**'));
out.push(p('**6** ⚠ **A connective nobody here says · a passive with no agent · a word belonging to one trade.** ⚠ **A clause that cannot be rewritten is marked, not blended** — **quoted and attributed, or set out as a numbered term.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The term of art at line 8.** **His board does not know what *without prejudice* means and he did not want to explain two words in a meeting** — **and he puts it back anyway, because he knows what it does.**  2 ⚠ **He asks for the four lines on a separate sheet with the dates on them, to go in his file** — **so that the next person to edit the document does not do what he has just done.** ⚠ **It tells you that his office keeps files and that this document\'s provenance was in nobody\'s.**'));
out.push(p('⚠ **This track is the answer to a question the unit has been building for six cycles and the answer is not the one a class expects.** ⚠ **Three of the four changes were made by somebody who did not know the lines were closed** — **a house style rule, a shortened sentence, a clause whose history was in a note he had not got.** ⚠ **None of it was a position and none of it was carelessness.**'));
out.push(p('⚠ **The deliberate one is the most instructive, because the reason is good.** ⚠ *My board does not know what “without prejudice” means and I did not want to explain two words in a meeting.* **That is a genuine difficulty with a real cost** — ⚠ **and it is answered by a footnote, not by deleting the protection.** **He arrives at that himself, which is what reading it to him made possible.**'));
out.push(p('⚠ **And the failure at line 11 is partly Sham Trading\'s, which the class should be made to say out loud.** ⚠ **A clause agreed by telephone in March, with the note in Nour\'s drawer, is a clause the next editor will delete again** — **and he will be right to, on the information he has.** ⚠ **So the remedy is not the reply.** **It is the separate sheet in HIS file** — **and he asks for it, which nobody in Sham Trading had thought of.**'));
out.push(p('**Language box – Practise (sample, the separate sheet):**  _**Lines closed in the note of 26 May, with provenance.**  **Line 3** — ⚠ **the quantity of eleven cartons. Agreed in writing, your letter of 20 February.**  **Line 5** — ⚠ **eleven words quoted from our letter of 28 January; a quotation, not a summary.**  **Line 8** — ⚠ **_without prejudice_ in the heading. A term of art: the letter cannot be produced as an admission.**  **Line 11** — ⚠ **_so far as the Company has been able to establish_. Agreed clause by clause, telephone, 24 March, with Mr K. Sayegh.**  ⚠ **Four lines, four dates, one page, and it goes in both files.**_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['Nour', 'Line 3. *About eleven cartons.* The eleven was agreed in writing, in your letter of 20 February.'],
  ['Mr Hamdan', 'Then that is a mistake. Our office puts *about* in front of every quantity, as a style rule. Nobody told me the figure was agreed.'],
  ['Nour', 'Thank you.'],
  ['Mr Hamdan', 'Is there more?'],
  ['Nour', 'Line 5. You have put *as set out in correspondence* where we had eleven words quoted from our letter of 28 January.'],
  ['Mr Hamdan', 'Also a mistake. I shortened a long sentence and did not see the quotation marks. Put them back.'],
  ['Nour', 'Thank you. Line 8 is *without prejudice*, deleted from the heading.'],
  ['Mr Hamdan', 'That one I did deliberately, and I will put it back, and I will tell you why I did it.'],
  ['Nour', 'Please.'],
  ['Mr Hamdan', 'Because my board does not know what it means. Which is my problem and not yours, and the answer is a footnote.'],
]));
out.push(note('The thing to draw out of pair 2 is what Nour does NOT say. She does not explain what the change would have cost, she does not say that their office\'s style rule is a bad one, and when a point is accepted she says thank you and goes on to the next line. An accepted point explained further is an accepted point reopened, and in the series\' own trial this was the single most common fault in the mediation: a learner wins a line and then argues it. Drill the sequence — line, provenance, date, stop — and drill the thank you. The explanation is held in reserve for the one point that is resisted, which in this track is none of them.'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task:** ⚠ **The four lines, what the author said about each, whose failure line 11 was, and what the separate sheet is for.** ⚠ **The last part is the one to insist on: it is not for this exchange** — **it is for the next editor, in two years, who will have the page and not the history.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The closed line', 'Its provenance and date', 'What the author said', 'Whose failure it was'], [
  ['⚠ **the quantity, 3,140 cartons**', '**the schedule signed 4 May**', '⚠ *I did not know it was signed* — **and he withdraws the *about***', '⚠ **mine** — **the schedule is not referred to anywhere in the note**'],
  ['⚠ **_to the extent that stock permits_**', '⚠ **the letters of 11 and 14 January**', '⚠ *I thought it was a hedge somebody had left in* — **and he reinstates it**', '⚠ **mine** — **the January letters are in my file and not in his**'],
], [1.6, 1.6, 2.1, 1.2]));
out.push(stage('4R', 'Report – mediation'));
out.push(p('_**The line was *to the extent that stock permits*. Its provenance is the exchange of letters of 11 and 14 January. The author said he had thought it was a hedge somebody had left in, and he has reinstated it. And the failure was mine, because the January letters are in my file and not in his.**_'));
out.push(p('⚠ **The word list reaches fifty-four items with this unit\'s six:** ⚠ **_a tracked change · a substantive change · a closed line · a quoted undertaking · a silent correction · a reinstatement_.** **Collect them on the board under the forty-eight from Units 1 to 8, and say that it runs to Unit 12 and to seventy-two.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(p('⚠ **B2 Business Vantage Reading Part 5** — **error correction, twelve lines, six with an extra word and six correct.** **The second Part 5 in this book.**'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'CORRECT', 'BEEN', 'CORRECT', 'WHAT', 'THE', 'CORRECT']], [1, 1.5, 1.1, 1.5, 1.1, 1.1, 1.5]));
out.push(table(['Q', '7', '8', '9', '10', '11', '12'], [['Answer', 'CORRECT', 'WHICH', 'WERE', 'CORRECT', 'CORRECT', 'THAN']], [1, 1.5, 1.1, 1.1, 1.5, 1.5, 1.1]));
out.push(p('⚠ **Line 2, BEEN:** *we have been accepted* **for** *we have accepted* — **a perfect passive where a perfect active belongs, and the commonest Part 5 error type there is.** ⚠ **Line 4, WHAT:** *better than what our own version did* — **a free relative where a plain comparison belongs.** ⚠ **Line 5, THE:** *and the our reasons* — **a determiner stacked on a possessive, which is impossible in English and easy to read past.**'));
out.push(p('⚠ **Line 8, WHICH:** *a figure which agreed between us* — **a relative pronoun with no verb to govern it; the figure was agreed, it did not agree.** ⚠ **Line 9, WERE:** *eleven words were quoted from our letter* **inside a list of noun phrases** — **the item is *eleven words quoted from our letter*, and the finite verb breaks the list.** ⚠ **Line 12, THAN:** *rather than for than an answer* — **a doubled conjunction, and the kind of error that survives three readings because the eye supplies the sense.**'));
out.push(p('⚠ **The marking note that matters: six correct and six with an extra word, and the examination never says how many of either.** ⚠ **A candidate who has found three has not finished; one who has found nine has invented three** — **and the test for every candidate answer is whether the line is GRAMMATICALLY wrong without the removal, not whether it reads better.**'));
out.push(stage('6', 'Write with help – sample exam answer (44 words)'));
out.push(sample(null, [
  '**Mr Sayegh — Dallal\'s office has returned the note with twelve amendments.** ⚠ **We have accepted five without comment and asked them to reconsider three.** ⚠ **Four do not arise: a figure, a quotation, a term of art and your March clause.** **It goes back on Friday.**',
]));
out.push(p('⚠ **Forty-four words, three content points: the number accepted · the number queried · the date it goes back.** ⚠ **The four closed lines are named by KIND and not by content** — **ten words for four lines, and the reader recognises all four kinds because 9.4 is the same four everywhere.** ⚠ **And *your March clause* does in three words what a sentence of explanation would do**, **because the reader is the man who negotiated it.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The number accepted', '**✓** — **five**'],
  ['The number you are asking them to reconsider', '**✓** — **three**'],
  ['The closed lines by kind, not by content', '**✓** — **and the fourth named by its owner, which is shorter still**'],
  ['A date it goes back, not *shortly*', '**✓** — **Friday**'],
  ['40 to 50 words — count them', '**✓** — **44**'],
], [5, 1]));
out.push(note('Mark a Part 1 answer for its three points first and its length second, and expect the commonest failure to be a candidate who describes two of the amendments instead of counting all twelve. The examination is testing selection under a word limit: a manager who is told "five, three, four" knows whether to read any of it, and a manager who is told what two of the changes were does not. Note also that a Part 1 answer at this level should carry a date rather than *shortly* or *in due course* — one word longer, and it is the only part of the message that commits the writer to anything.'));
out.push(stage('7', 'Write freely – sample (235 words)'));
out.push(sample(null, [
  'The closed line at my work whose provenance is in nobody\'s file is the clause about confirmation at the date of order, and the only person who knows where it came from is Mr Ayoub, and he is not certain either.',
  'The line is: "prices quoted are subject to confirmation at the date of order". Everybody treats it as a term. Nobody can produce a document.',
  'Who knows where it came from: Mr Ayoub, approximately. He thinks it was put in after a fuel price moved between a quotation and an order, in 2017 or 2018, and he thinks the wording came from somebody at the bank.',
  'What would happen if he left: the clause would survive until the next person retyped the standing form, and then it would survive or not depending on whether that person thought it read well. Nobody else in the building could say why it is there.',
  'What a new editor would do with it is exactly what Mr Hamdan did with our March clause: delete it as a piece of inherited fog, reasonably, on the information available.',
  'And what the sheet of paper would say is four lines. The clause, in quotation marks. What it does — it lets us re-price between quotation and order. Where it came from — a fuel movement in 2017 or 2018, source not traced. And who to ask: Mr Ayoub, while he is here.',
  'The last line is the one that makes it worth writing this month rather than next year.',
]));
out.push(p('⚠ **This is the sample to read aloud if only one is read, and the last line is why.** ⚠ **The whole of 9.7 is that provenance lives in a person until somebody writes it down**, **and the sentence *who to ask: Mr Ayoub, while he is here* is Unit 7\'s decision whose author has left, arriving as a thing that can still be prevented.**'));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 9 check'));
out.push(p('**A  Language — the answers.**'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'a', 'b', 'b', 'a', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('⚠ **Q1 is the fixed phrase of the unit** — *the amendments do not arise* — **and the infinitive after *do not* is bare.** ⚠ **Q3 is *as it stands*, which learners write as *how it stands* and *like it stands*; it is the phrase the whole of 9.3 is built on.** ⚠ **Q5 is *without prejudice*, and it is worth asking the class what the other two options would mean, which is nothing at all** — **a term of art has one form.** ⚠ **Q8 is *ask somebody TO do*, and it is tested because Vantage Reading Part 4 tests verb patterns and this is the pattern of the whole unit\'s business.**'));
out.push(p('**B  Listening (Track 9.15).**   **How many the author did not know were closed:** ⚠ **three of the four.**   **The reason for the *about*:** ⚠ **his office puts *about* in front of every quantity, as a style rule, and nobody had told him the figure was agreed.**   **Why the quotation was summarised:** ⚠ **he shortened a long sentence and did not see the quotation marks.**   **Why the term of art was deleted, and what he does:** ⚠ **his board does not know what it means and he did not want to explain two words in a meeting** — **and he puts it back, because he knows what it does.**   **Why the March clause was deleted:** ⚠ **he thought it was nine words of fog, and he did not have the March note.**   **What he asks for at the end:** ⚠ **the four lines on a separate sheet with the dates on them, for his file, so that the next person to edit the document does not repeat it.**'));
out.push(p('**C  Reading.**  ⚠ **The four kinds: an agreed figure · a quoted undertaking · a term of art · a negotiated hedge.** ⚠ **The two badly written ones are *without prejudice*, which reads like nonsense to anybody who does not know it, and the nine-word hedge at line 11.** ⚠ **And the test is not quality but provenance** — **where the words came from** — **so that none of the four is improved by being better written.** **Give the mark for *provenance* or for any sentence that says where the words came from; do not give it for *importance* or for *the lawyers decide*.**'));
out.push(p('**D  Writing – sample (91 words).**'));
out.push(sample(null, [
  '⚠ **Line 4 as it stands reads as though the date moved by itself; we agreed it with the customer on 18 April.** ⚠ *Suggest: we agreed the revised date of 2 May with Ms Tannous on 18 April.*',
  '⚠ **I have reinstated “on 14 March”; without it the sentence reads as though we were told of the shortfall rather than having found it.**',
  '⚠ **Line 11 is closed: *so far as the Company has been able to establish* was agreed clause by clause by telephone on 24 March, and it limits what we assert to what we have searched for.**',
]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one for each gap. ⚠ **Give the fourth mark only for both halves** — **the reason AND that he puts it back.** **A learner who records only the reason has heard a man defending a deletion, which is the opposite of what happens.**',
  '**C  Reading — 5 marks:** the four kinds (2) · the two badly written ones (1) · ⚠ **that the test is provenance and not quality (2)** — **and the last two marks are the unit, so do not give them for a paraphrase that leaves out where the words came from.**',
  '**D  Writing — 6 marks:** a two-part mark-up, both parts present (2) · ⚠ **a reinstatement in the form *I have reinstated X; without it the sentence reads as Y* (2)** · ⚠ **a closed line with its provenance AND a date (2)** — **no marks for a closed line asserted without a date.**',
  '**Total 25.** ⚠ **The profile to expect: A high, B high, C and D split.** **C fails where a learner lists the four kinds and then says the test is importance**, ⚠ **which is the fault the whole unit is against.** **D fails on the date: learners write *agreed in March* and the whole value of a provenance is that it can be looked up.**',
], C.lteal, C.navy));
out.push(note('Teacher\'s note. Four faults to watch, and the remedy for each. First, rejecting a change that altered only the rhythm. It is the commonest fault in the room and it is not vanity, it is that a writer reading their own edited sentence cannot easily tell a loss of meaning from a loss of their own voice. The remedy is mechanical and should be applied aloud to every change: does it alter what we are committed to? If the answer is no, the change is accepted and not mentioned, and the sentence explaining that the original was also defensible does not get written. Second, the silent correction of a date, a figure or a name. Learners do this out of helpfulness and the argument against it is not about deference: a silent correction destroys the discrepancy, which is the only evidence that somebody somewhere has a different figure, a different letter or a different company in mind. Make them write the flag instead, in one line, with no adjective, at the end under small points. Third, the rewrite with no first part. A crossed-out sentence with a replacement gives an author two versions and no information, and it teaches nothing, so the same sentence comes back next month. Drill the two-part form as a formula before discussing it — what the line as it stands says, then the suggestion — and make the point that the form exists mainly for the third thing it allows, which is for the author to tell you that you have the fact wrong. In the series\' own trial that happened to one mark-up in six. Fourth, and this is the one the unit exists for: improving a line that is not yours to write. Two of the four closed lines in this unit are badly written, and a learner who sorts lines by quality will improve a quotation, soften an agreed figure and delete a term of art, every time, and be reasonable in doing it. Teach the four kinds and teach the question — where did these words come from? — and watch for the mirror fault in 9.4\'s free writing, which is a custom that has been treated as a term for years by people who cannot say why. Both faults come from the same absence. One practical note on 9.7. The separate sheet is the only artefact in Unit 9 that outlives the exchange, and it is worth setting as the homework it already is: every closed line in a document of theirs, with where the words came from and the date, one line each. The sentence to leave a class with is the one from 9.7\'s free-writing sample — "who to ask: Mr Ayoub, while he is here" — because provenance lives in a person until somebody writes it down, and Unit 7 is what happens afterwards.'));
out.push(sp());
out.push(p('_Next: **Unit 10 — The Meeting You Did Not Call**: four people, three agendas, and the minute that decides what happened._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 9 · Answer Key');
module.exports = out;
