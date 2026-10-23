# HANDOVER — Proactive English · C1 · Book 2 · Syria Edition

Running continuity file for the **C1 Syria Edition** track, Book 2. This file plus the bundle zip
is enough to resume from zero. **Read it beside `HANDOVER_Proactive-English_C1-BK1-SY.md`**, which
holds the cast canon, the register rules and the toolchain in full and is **not** repeated here.

- **File prefix:** `PE-C1-BK2-SY_` · **Tree:** `proactive-english-c1-sy/`
- **Author:** Mo (Mohamad Khorbatli). His parameters are fixed and are not to be improved.
- **Plan of record:** `PE-C1-SY_PLAN_and_Blueprint.docx` (41 pp). **§16 is Book 1 as built and
  §17 is Book 2 as built.** §5's projections are superseded by both.

**STATUS: BOOK 2 IS COMPLETE AND THE C1 TRACK IS CLOSED.** Twenty-four units, one hundred and
sixty-eight cycles, four tests, four bound volumes. **2,093 pages of C1.** Nothing in the level is
planned and unwritten, and the examination debt Book 1 recorded is paid in full.

---

## 0 · Turn log

| turn | what was delivered |
| --- | --- |
| 6 | **Units 13–18 and the Mid-Book Test** (60 marks, 24 · 12 · 12 · 12). Peer review to band 3. The B2 sealed letters opened in Unit 15 — only the ones whose dates had come. |
| 7 | **Units 19–24 and the End-of-Book Test** (100 marks, 40 · 20 · 20 · 20, all eight Reading and Use of English parts). Peer review to band 4, the refusable one. `dlgcheck.py` written and eleven ask-and-self-answer exchanges repaired. Unit 21 found to have shipped a draft with no writer's boxes at all. |
| 8 | **Book 2 closed.** Both bound volumes, plan §17, this handover, Series Bible v1.4, the delivery bundle. The per-unit filenames of Units 16–24 normalised to the Book 1 convention. ⚠ **The mediation-ordinal grep run before closing found eight of the twelve keys wrong in one drift; all seven affected keys were repaired and rebuilt.** |

---

## 1 · What exists on disk

| artefact | pp | file |
| --- | --- | --- |
| Plan and blueprint (both books) | 41 | `PE-C1-SY_PLAN_and_Blueprint.docx` |
| Units 13–24 Student's Book | 49 · 47 · 49 · 52 · 50 · 50 · 51 · 50 · 51 · 52 · 51 · 51 | `PE-C1-BK2-SY_UnitNN_StudentsBook.docx` |
| Units 13–24 Answer Key | 35 · 33 · 33 · 36 · 36 · 35 · 37 · 37 · 34 · 34 · 37 · 34 | `PE-C1-BK2-SY_UnitNN_AnswerKey.docx` |
| Mid-Book Test + key | 11 + 8 | `PE-C1-BK2-SY_MidBookTest[_Key].docx` |
| End-of-Book Test + key | 15 + 10 | `PE-C1-BK2-SY_End-of-Book-Test[_Key].docx` |
| **Bound Student's Book** | **631** | `PE-C1-BK2-SY_StudentsBook_BOUND.docx` |
| **Bound Answer Key** | **440** | `PE-C1-BK2-SY_AnswerKey_COMBINED.docx` |
| Complete delivery bundle | — | `PE-C1-BK2-SY_COMPLETE_DELIVERY.zip` — every .docx, both handovers, and the whole `pipeline/` tree |

**603 pp of units, 421 pp of keys.** Both bound volumes carry the tests in teaching order:
Mid-Book after Unit 18, End-of-Book after Unit 24. ⚠ **The key's arithmetic closes exactly and the
Student's Book's does not** — 421 + 18 key pages + 1 title = 440, but 603 + 26 + 1 = 630 against a
measured **631**. **Unit 17 measures 50 built alone and 51 inside the bound volume**: `bound.js`
puts a `pb()` before every file, the unit's first page therefore carries one line more at the top
than the same unit built on its own, and on a unit sitting exactly on a block boundary that one
line pushes a `cantSplit` block over. **It happened once in twenty-four units. 631 is the true
figure, because the bound volume is what a printer receives.**

**Series totals, C1:** Student's Books 593 + 631 = **1,224 pp**; Answer Keys 429 + 440 = **869 pp**.

---

## 2 · The twelve units

| # | title | function | exam | inherits |
| --- | --- | --- | --- | --- |
| 13 | The Panel That Has Read Your Writing | answering about a document you wrote eight months ago · the defensible concession under questioning | R2 · W1 · L1 | B2 U13, and Book 1's readiness page and second sheet |
| 14 | Negotiating When Both Sides Are Right | the trade stated as a principle · *in return for which* · the alternative that is not a threat | R6 · W2 report · L2 | B2 U14 |
| 15 | The Letter Whose Date Has Come | reading your own old prose as evidence · *I wrote ___ and I no longer ___* | R7 · W1 · L3 | **B2 24.6 — the envelopes whose dates fall now** |
| 16 | Judging Work You Could Not Do Yourself | the verdict with its competence declared · *within the limits of what I can assess* | R8 · W2 review · L4 | B2 U16 |
| 17 | Chairing People Who Outrank You | the chair's imperative without the chair's authority · *I shall take that as agreed unless* | R1 · W1 · L1 | B2 U19 |
| 18 | Writing to a System You Do Not Belong To | the register of an institution read from outside · the request that fits a form with no field for it | R3 · W2 letter · L2 | B2 U21 and U22 |
| 19 | The Document That Will Be Read in Court | the sentence that cannot be read two ways · the definition that closes · dates and limits | R4 · W1 · L3 | B2 U21, now adversarial |
| 20 | Refusing Without Giving Grounds for Appeal | the refusal whose reason is also its limit · *we are not able to* against *we are not willing to* | R5 · W2 proposal · L4 | B2 U20 |
| 21 | The Same English, Another Examination | the transfer: C1 Advanced tasks against IELTS task types · **21.5 is the mapping cycle** | R6 · W1 · L1 | new — plan §4 says why |
| 22 | The Proposal Nobody Asked For | writing to a reader who has not agreed there is a problem · the cost of doing nothing, costed | R7 · W2 report · L2 | B2 U22, now unsolicited |
| 23 | Five Thousand Words | architecture at length · the turn that is not announced · cohesion across twelve paragraphs | R8 · W1 · L3 | B2 U23 |
| 24 | Handing It On | teaching one move of the method to somebody who has never had it, and reporting what they did not understand | R2 · W2 review · L4 | **B2 24.5, and the whole series** |

⚠ **Three cycles are load-bearing and a reader skimming the book will miss them.**
**21.5** is the declared IELTS mapping cycle and has **exactly four findings** — two tasks that do
not transfer in each direction, and two habits this course built that do: the paraphrase and the
partner. **23.1, 23.4 and 23.5 are an ordered argument** — 23.1 finds the paragraph with no job,
23.4 tests it on two readers in fifteen minutes, 23.5 cuts it and declares the loss — **and the
key says so, because taught out of order the unit proves nothing.** **24.7 is the only cycle in
two books in which somebody without the method speaks.**

---

## 3 · The two declared departures in Unit 24

**Both are printed in ak24's how-to-use box and recorded in the commit, and neither is an error.**

1. ⚠ **Ms Huda states the finding in 24.1, 24.3 and 24.7.** The rule for the whole level is that
   she does not (Book 1 handover §5, QA check 12). **The subject of those three cycles is
   teaching, and a teacher who will not model teaching is withholding the thing being taught.**
   The check is written to allow it in this unit and nowhere else.
2. ⚠ **Miss Dandashi speaks in 24.7** — nineteen, three weeks at Mrs Khoury's paper, her English
   about where Mr Attar's was in 2022. **She is the only voice in the level without the method
   under her.** She has one move, uses it, and cannot say why it works; and what she does not
   understand is the measurement. **That is the unit's answer to its own question.**

---

## 4 · House figures — unchanged from Book 1, and the one band that moved

- **All thirteen measured house figures held for all twelve units**: 15 tracks · dialogue turns
  18–22 · models 480–620 · 4R reports 420–560 · writer's boxes 200–280 · 3R listener tasks 40–85 ·
  7R shares 60–95 · six `**Practise:**` · six `pb()` · eight `dlg()` · ten `NOTE()` per key ·
  seven *Tell the class* reports · six writer's boxes.
- ⚠ **The Student's Book page band is amended to 45–52 and this is the last amendment.** Six of
  the twelve went over 45–50: **16 and 22 at 52, and 19, 21, 23 and 24 at 51.** The cause is the
  one plan §16 named — **the page follows the unsplittable block** — and in Book 2 it is always
  the seventh cycle's examination text, whose options must be printed as separate paragraphs and
  cannot be broken across a page without making the task unanswerable: Part 7's seven paragraph
  options (15, 22), Part 8's four accounts (16, 23), Part 6's four texts (14, 21).
  **Unit 16 was trimmed by 150 words to no effect at all.** **Do not gut a cycle to hit a page.**
- **The Answer Key band 33–37 held for twenty-four units across both books without one
  amendment**, because a key has no closing `cantSplit` block and its content is paragraphs.
- **Both test keys came in two pages under Book 1's** (8 against 10, 10 against 12). Nothing was
  cut; recorded rather than corrected.

### Peer-review bands — the series is now complete
**13–18 band 3.** **19–24 band 4**, and band 4 is **the only band in the series that can be
refused**: *name the reader you are being, name what is absent, give the criterion with the line
copied, hand it over unsigned — and then write the one sentence you would put in the writer's
place. The writer answers whether that sentence is theirs, and may refuse it.*
⚠ **The key treats four refusals in ten as the correct rate**, which is the first number the
series has printed for disagreement.

### Exam rotation, as built — the debt is paid
- **Reading and Use of English:** Part 2(13, 24) · Part 6(14, 21) · Part 7(15, 22) · Part 8(16, 23) ·
  Part 1(17) · Part 3(18) · Part 4(19) · Part 5(20).
  ⚠ **With Book 1 this is three passes of all eight parts across twenty-four units.** Nothing owed.
- **Writing:** W1 the essay in every odd unit (six). W2 by genre — report(14, 22), review(16, 24),
  letter(18), proposal(20). **Series: 12 essays, and three each of letter, proposal, report, review.**
- **Listening:** L1(13, 17, 21) · L2(14, 18, 22) · L3(15, 19, 23) · L4(16, 20, 24) — **six passes
  of each part across the level.**
- **Mid-Book Test** (60 marks, after Unit 18): Reading Parts 1, 2, 3, 6, 7, 8 · Writing 1 and 2 ·
  Listening 2, 3, 4 · all four Speaking parts. ⚠ **Listening Part 1 is deliberately held back to
  the End-of-Book Test and the test says so on the page.**
- **End-of-Book Test** (100 marks, 40 · 20 · 20 · 20): **all eight** Reading and Use of English
  parts (5 + 5 + 5 + 6 + 5 + 4 + 4 + 6 marks), Writing 1 and 2 with Part 2 offering all three
  Book 2 genres, all four Listening parts with Part 1 at full length, all four Speaking parts.
  **The key carries four full writing samples (249, 246, 251, 244 words), the four audio scripts,
  the speaking band table, and the three places this class actually loses marks** — Writing
  Part 2's last paragraphs, Reading Part 7's extra paragraph, Listening Part 2's word limits.

### The declared lexis sets — Book 2
| # | phrasal verbs | word formation | Back at C1 |
| --- | --- | --- | --- |
| 13 | hold one's ground · go after · press home · drive at · lead up to · run up against · reel off · dig in · let on · set straight · answer back · think back to | examine → examination · question → questionable · probe → probing · recall → recollection · attest → attestation · substantiate → unsubstantiated · credible → credibility · tenacious → tenacity · candid → candour | look for · get up · go out |
| 14 | haggle over · hold out against · wring from · beat down · push back on · split the difference · come to terms with · work up to · hold firm on · play up · back off · yield to | mediate → mediation · reciprocate → reciprocal · bilateral → bilaterally · bargain → bargaining · compromise → uncompromising · intransigent → intransigence · entrench → entrenched · adversary → adversarial · equitable → inequitable | come on · put on · look after |
| 15 | cast back · hark back to · date from · cling to · lay aside · dig out · come to light · come across · bring back · live with · grow past · put behind | seal → sealed · archive → archival · custody → custodian · elapse → elapsed · retrospect → retrospective · nostalgia → nostalgic · prophesy → prophetic · endure → endurance · lapse → lapsed | give back · look up · think of |
| 16 | fall outside · come within · speak to · defer to · stop short of · take on trust · go beyond · lay claim to · pass judgement on · set store by · draw the line at · hold out as | scrutinise → scrutiny · appraise → appraisal · adjudicate → adjudication · impartial → impartiality · arbiter → arbitration · expert → expertise · discipline → disciplinary · peripheral → periphery · jurisdiction → jurisdictional | talk about · sit down · get in |
| 17 | call to order · move on to · take as read · put to the vote · bring to a close · cut short · glide past · open with · close on · hand to · come in on · go round the table | chair → chairmanship · preside → presidency · convene → convener · recess → recessed · consensus → consensual · majority → majoritarian · procedure → procedural · hierarchy → hierarchical · senior → seniority | go in · wait for · pay for |
| 18 | fit into · fall under · come under · slot into · work round · get past · put through · send in · write in to · press one's case · go over the head of · let in on | institute → institutional · bureaucracy → bureaucratic · eligible → eligibility · applicant → application · precedent → unprecedented · statute → statutory · anomaly → anomalous · regulate → regulatory · accommodate → accommodation | listen to · hand in · switch on |
| 19 | read as · take to mean · put in issue · stand on · go to · rest on · set out in · provide for · admit of · speak to the point · pin to · confine to | construe → construction · stipulate → stipulation · unequivocal → unequivocally · delimit → delimitation · ascertain → ascertainable · comprehensive → comprehensively · negligent → negligence · admissible → admissibility · testify → testimony | try on · get off · put out |
| 20 | turn down · knock back · hold the line on · see one's way to · put a stop to · stave off · shut out · close off · leave open · hold open · refer back · come down on | decline → declined · reject → rejection · revoke → revocation · conclusive → conclusively · reconsider → reconsideration · accede → accession · capacity → incapacity · practicable → impracticable · sanction → unsanctioned | call back · go away · grow up |
| 21 | sit for · go in for · enter for · scrape through · fall down on · pass for · count towards · bear comparison with · match up to · come up to · get through to · fall between | proficient → proficiency · attain → attainment · benchmark → benchmarked · commensurate → commensurately · validate → validation · apt → aptitude · norm → normative · diagnose → diagnostic · certify → certification | look forward to · put together · go up |
| 22 | raise with · put before · set before · make a case for · take on board · bring on side · win round · get behind · test out · float by · speak up for · jump in | advocate → advocacy · initiate → initiative · solicit → unsolicited · merit → meritorious · viable → viability · incur → incurred · forgo → forgone · budget → budgetary · enumerate → enumeration | think about · get back · write back |
| 23 | extend to · stretch to · open out · broaden out · draw together · tie up · carry forward · plant in · work in · weave in · hold the thread · lose the thread | extend → extensive · protract → protracted · digress → digression · recapitulate → recapitulation · unify → unification · segment → segmentation · truncate → truncated · amplify → amplification · incremental → incrementally | come home · go home · wake up |
| 24 | hand on · pass down · bring on · walk through · unpack · start from · work up from · leave behind · carry away · take away from · set going · bring home to | pedagogy → pedagogical · apprentice → apprenticeship · mentor → mentorship · articulate → articulation · succeed → succession · inherit → inheritance · emulate → emulation · tacit → tacitly · bequeath → bequest | look like · put back · run out of |

**144 phrasal verbs · 108 word-formation pairs · 36 *Back at C1* items.**
**Series, C1: 288 · 216 · 72.** ⚠ **All thirty-six sets were pre-checked in one pass before Unit 13
was written — `lexcheck.py` against the other twenty-three C1 units, against all twenty-four B2
units, and for the *Back at C1* line against occurrence in the delivered A2 and B1 running text
in both directions — and not one item had to be replaced after a unit was drafted.** Book 1 lost
items in four of twelve units at the repair stage. **That is the whole return on the rule, and it
is the one process change Book 2 made that saved time rather than spending it.**

---

## 5 · Cast — Book 1's canon, plus the figures Book 2 named

**The ten students and Ms Huda Saleh are unchanged. Book 1 handover §5 is the canon and Book 2
contradicts none of it.** What Book 2 adds is outside figures, and they are now numerous enough
that **a new name must be grepped against all four trees before it is used**.

| who | where | what they are |
| --- | --- | --- |
| **Mr Deeb** | 15.x | The keeper of Mr Attar's B2 sealed letter. Held it two years and three months, **wrote the date he handed it over although nobody asked him to**, and the two dates together are the only evidence in the cycle. |
| **Mrs Hallak** | 15.x | Keeper of a second envelope, held longer, **and she has never asked what the date is for.** The cycle's declared counter-case: a letter whose date has not come. |
| **Mrs Haddad** | 18.x | The governorate's property-section officer, annexe building, second floor. ⚠ **A direction and not an offer** — and in the same cycle the thing to be checked is that she is still in the post. |
| **Mrs Semaan** | 18.x (key) | The directorate officer who takes applications in writing. The key's sample names her, which is the point: **a named officer is what makes a request answerable.** |
| **Mr Sabbagh** | 18.x | The recipient of the adviser's note **entire** — a note sent in summary would arrive as the good half. |
| **Mr Zeidan** | 22.x | Finance director. **Disputed Mr Attar's second figure, had the stock controller test it, and it came back higher than claimed** — which is the unit's finding about the reader who argues with your arithmetic. |
| **Mr Fattal** | 22.x | Depot manager. His telephone answer is one of the proposal's four sources, **all of which the office already held.** |
| **Mrs Lattouf** | 22.x | Depot clerk; the four days the proposal does not ask to remove. ⚠ **She and Mrs Mouawad are not in the class** — see §7, fault 3. |
| **Mrs Mouawad** | 22.x | Stock controller. Tested the twenty-six and came back with forty-five. |
| **Dr Kheir** | Track 23.15 | Has supervised theses for twenty-two years. The Listening Part 3 long interview. |
| **Dr Mansour** | 16.x (key) | Supervises in the field the reviewer cannot assess, **and answered the same afternoon** — the key's model for declaring a limit and then closing it. |
| **Mr Kaddour** | 24.x | A colleague at Mrs Khoury's paper whose page was late. **Miss Dandashi told him so as a fact with no *sorry* in it, and he has not spoken to her since** — which is the cost the last unit refuses to hide. |
| **Miss Dandashi** | 24.7 | 19, three weeks at Mrs Khoury's paper. **The only voice in the level without the method.** See §3. |
| **Mr Haddad** | throughout | Firas Haddad, Mr Attar's team lead — **Book 1 canon, unchanged.** |

---

## 6 · Devices planted in Book 1 and paid off in Book 2

| planted | where | paid off |
| --- | --- | --- |
| the readiness page, with its harder-version column | **12.5**, addressed to a teacher nobody had met | **13.1 onwards — the column is Book 2's syllabus** |
| the second sheet: the items that are not about English, with the office and the date | **12.5** | **13.x opens on it** |
| the B2 sealed letters of 24.6, dates set by their writers | B2 | ⚠ **15.x — and only the envelopes whose dates had come.** Mr Deeb's two years and three months; Mrs Hallak's longer and still unopened; a declared task for the students who have none |
| the *cannot yet* list | **1.2**, from B2's folder of eleven | **24.5 — with a test, a date and a named witness, and no next teacher to hand it to** |
| the mediation series, twelve in Book 1 | 1.7–12.7 | **13.7–24.7, twenty-four in all; each x.7 still names its own place in the series** |
| the examination debt — Parts 2, 6, 7, 8 owing two passes and 1, 3, 4, 5 owing one | Book 1 §16 | **paid exactly, and the End-of-Book Test was built from the twelve unit scripts and not from the plan** |
| *It is not from simple to complicated, it is from visible to invisible* — a student's sentence in a delivered book | A2 | ⚠ **24.7, where a nineteen-year-old receives one move cold and what she cannot see is the measurement** |

---

## 7 · Faults found and fixed in Book 2 — watch for these again

1. ⚠ **A speaker asking a question and answering it himself. Eleven exchanges, across Units 20,
   21, 22 and 23.** One cast member puts a question and takes it back in the next turn, which
   reads as a monologue broken in two. **No word-count check can see it.** Fixed by giving the
   question to Ms Huda or to a student who does not answer it — **and the matching 4R report
   attribution has to be changed with it.** ⚠ **Unit 21's fix had to be applied to `unit21.js`
   *and* `ak21.js`, because `ak_reports.py` had already copied the report text into the key.**
   **The tool is `dlgcheck.py`** (scratchpad `fix/`): it parses `dlg()` blocks and reports
   consecutive identical speakers and speakers who are not in the cast. **Consecutive same-speaker
   turns are a house device** — a short remark then its expansion, or an answer then a 🔊 final
   line — **so the check reports and the writer judges. The ask-and-self-answer pair is always a
   fault.**
2. ⚠ **`qa.sh` passes an empty list.** **Unit 21 was built with no writer's box at all** and the
   harness printed `writers box : [] OK`, because a check that measures the words in each box has
   nothing to object to when there are no boxes. Caught only by reading the unit against the house
   pattern; repaired by inserting six `writers([...])` boxes after each cycle's third `item()`
   anchor, **and the page count went 45 → 51.** **Every house count must assert the count before
   it measures the contents.**
3. ⚠ **Classroom dialogue given to people who are not in the class.** Unit 22 had Mrs Lattouf and
   Mrs Mouawad speaking in the room; they belong to the unit's fiction. **Repaired by giving their
   words to a student as reported speech, with a question turn inserted** — which is what a C1
   class does with them anyway. `dlgcheck.py` reports non-cast speakers for this reason.
4. **Book 2's models came in short, by 50 to 170 words, in nine units of twelve.** The genres are
   short documents — a two-page note, a one-page report, a refusal, a scope paragraph — and an
   authentic one does not reach 480 words. ⚠ **Never inflate the document.** The repair that
   worked every time is **an in-fiction paragraph in the same box, in the same hand**: *the thing
   I had not expected*, *what I am not claiming*, *note on my own copy, 1/2*. For Unit 24's open
   cloze the continuation is declared in the rubric — *then read the rest of the note, which has
   no gaps in it*.
5. **Over-long model boxes** — unit20 m7 at 749 words, unit22 m7 at 775. **Move the examination
   questions and the Part 7 options out of the `model()` box** into their own
   `out.push(p(..., { indent: 200, after: 60 }))` paragraphs, then top the remaining text back
   into the band.
6. **Examination items with a second valid answer. Eight, against fifteen in Book 1.** Unit 14:
   Part 6 items 1 and 4 both resolved to extract D, a check item admitted two readings, two
   Listening gaps shared the answer *eleven*. Unit 21: Part 6 writer A was silent on admitting
   documents where item 2 needs all four to hold a view; Listening Q3 option A (*four years*) was
   not supported by the script; Q6 asked what the teacher says where only the candidate spoke.
   Unit 22: Part 7's main text said 45 duplicates where option F corrects twenty-six to forty-five.
   End-of-Book: Part 6 had three C keys and one writer with no view, so **all four texts were
   rewritten to keys C B D B**, and two Listening option orders were respread.
   ⚠ **The fall from fifteen to eight is the return on checking the three shapes while the item is
   written rather than after it is built.**
7. **Unterminated `**` runs from appended paragraphs — about fifteen, across Units 20–24 and their
   keys, in two shapes only:** `— **and ...` after a run that was never closed, and
   `**_quoted phrase_ — **continuation`. **Close the run before the dash:**
   `_phrase_** — **continuation`.
8. **Fix-script needles.** The rules from Book 1 held and cost four failures when broken:
   ⚠ **never begin or end a needle with `**` unless the bold run actually starts or ends there**,
   apostrophes are stored as `\'` so **use raw triple-quoted Python strings**, and a needle that
   also occurs in its own replacement will fail the single-occurrence assert — edit the fix script
   with `sed` in that case.
9. ⚠ **The mediation ordinals, a third level in a row — and this time the grep caught it.** Each
   x.7 key declares its mediation's place in the series. **Unit 15's key declared no ordinal at
   all**, so Unit 16 called itself *the third of Book 2 and the sixteenth of the level* — a
   contradiction inside one sentence — and every key after it ran a step low until **Units 21 and
   22 both claimed the ninth**. Repaired by giving 15.7 its ordinal in the Stage 4R note and
   renumbering 16, 17, 18, 22, 23 and 24; the series now reads **first to twelfth with no gap and
   no repeat**, and each key's distinguishing claim (*the first in which…*, *the only one in
   which…*) is unique. ⚠ **The finding is one step further back than B2 and Book 1 suggested: the
   drift begins at the cycle that omits the claim, not at the cycle that writes it wrongly.**
   **Grep for a gap in the sequence, not for a wrong number, and check each key's two claims
   against each other.**
10. **`testqa.sh` reports `long sents : OVER 45w` on both test files and both are false positives.**
   The regex concatenates across box paragraphs in `pdftotext` output. The reading passages are
   reused from units that passed the per-model 45-word check. **Recorded so that nobody "fixes"
   a sentence that does not exist.**

---

## 8 · Toolchain — what Book 2 added

**Book 1 handover §8 is the toolchain and it is unchanged.** `lib.js` is still frozen and
byte-identical across all four trees. Additions:

- `PE_BOOK=2 bash pipeline/build.sh <bare-script> <Out.docx>` for every Book 2 artefact;
  **`PE_BOOK=2 bash pipeline/build.sh bound`** writes both bound volumes (docx only — convert by
  hand to count pages). `bound.js` is still the one parameterised script across all four trees:
  with `PE_BOOK=2` it binds units 13–24 and inserts `midtest2`/`midkey2` after Unit 18 and
  `endtest2`/`endkey2` at the end.
- **`dlgcheck.py`** — see §7, fault 1. **Run it after every unit, before the key is written.**
- **`testqa.sh <pdf> <source.js>`** — the unit checks that apply to a test file, minus the
  seven-cycle house figures.
- **`lex_bk2.py`** — the twelve pre-checked lexis sets as data, written before Unit 13. **This is
  the shape to copy for any future book:** pre-check all of the level's sets in one pass.
- **Per-unit filenames.** Units 16–24 were first written as `_UnitNN.docx` and `_UnitNN-AK.docx`
  and have been **renamed to the Book 1 convention** — `_UnitNN_StudentsBook.docx` and
  `_UnitNN_AnswerKey.docx`. **Use that convention for everything.**

---

## 9 · Open items

1. **Nothing is owed inside C1.** The examination rotation is complete, the lexis is closed at
   288 · 216 · 72, both tests are built and keyed, and all four bound volumes exist.
2. ✔ **The Series Bible is at version 1.4** and this item is closed. It lives at
   `proactive-english-a2-b2-sy/pipeline/bible.js`, builds to
   `proactive-english-a2-b2-sy/out/PE-SY_SERIES_BIBLE.docx` with
   `node pipeline/bible.js out/PE-SY_SERIES_BIBLE.docx`, and now records C1 complete: the amended
   Student's Book band of **45–52** with the unsplittable-block reason, the Answer Key's 33–37 held
   for twenty-four units, the **40 · 20 · 20 · 20** test split, the three Book 2 faults that are new
   to the series (the ask-and-self-answer dialogue, the house count that passes an empty list, and
   the short-genre model), the four peer-review bands with band 4's refusal rate, and ⚠ **the
   mediation-ordinal fault restated — found at three levels in a row, and what C1 Book 2 adds is
   that the drift starts at the cycle whose claim is missing.**
   ⚠ **It is not in this book's delivery bundle**, because it belongs to the series and not to
   this level.
3. ⚠ **If a fifth level is ever built, three things in this book are the ones worth copying before
   anything else:** pre-checking the whole level's lexis in one pass before the first unit;
   asserting house *counts* before house *bands*; and reading each finished unit against the house
   pattern — the cast list, the six boxes, the seven reports, the eight dialogues — **because a
   unit that has drifted off the pattern looks right line by line.**
4. **The one unexplained page.** Unit 17 at 50 alone and 51 bound. See §1. It is a packing
   artefact of `bound.js`, not a defect in the unit, and it is the only figure in either book that
   the per-unit measurements do not account for.
