// Proactive Business English B2 · Syria Edition · Book 1 · Unit 8 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a figure in prose · a round number · a spurious precision · a figure out by a factor of ten · a base year · a comparison on one basis · a compound rate · a moving average · a one-off item · to strip out a one-off · a trend and a blip · to annualise · a percentage point · a percentage change · a denominator · a weighted figure · an unweighted figure · a median and a mean · a single month that carries a year · a seasonal pattern · to restate a figure · a prior-year comparative · a rounding convention · a stated basis · a figure without a basis · a ratio read as a number · a growth figure off a small base · to quote a figure out of its period · a figure the reader can check · a reconciling item · a bridge between two figures · a figure that moves with the question';
const COLLOC = 'to strip out an item · to state a basis · to read off a base · to restate a comparative · to annualise a rate · to quote a period · to bridge two figures · to round to the nearest';
const BACK_AT_B2 = 'trend · figures · provisional figure';

out.push(h1('Unit 8  Numbers in Prose'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**8.1**  give every figure its period, its basis and its source',
  '**8.2**  write three years of trading in eleven sentences, and separate a trend from a blip',
  '**8.3**  use percentages, percentage points and a base without misleading anybody',
  '**8.4**  strip out a one-off item, and say that you have done it',
  '**8.5**  choose between a round number and a precise one, and refuse a spurious precision',
  '**8.6**  write the figure the reader will check, and build the bridge to it',
  '**8.7**  Review & Mediate: the figure Mr Haddad will ask for on the telephone',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The facility paper, and the eleven sentences', [
  '⚠ **Sham Trading has asked its bank for a facility of forty million against its receivables, and the bank has asked for three years of trading described in writing.** **Not accounts** — **the accounts have gone in already, audited by Mr Ziad Attar\'s office.** ⚠ **Eleven sentences of prose, which is what the form allows.**',
  '⚠ **The figures are not in dispute and they are not flattering in the same direction.** **Turnover is 112, 131 and 148 million over the three years. Gross margin went 21.4, 19.8 and 20.1 per cent. Debtor days went 46, 51 and 58.** ⚠ **Two of those three series are good news and one is not, and the one that is not is the one the facility is secured on.**',
  '⚠ **And the paper will be read by the credit committee before Mr Haddad sees it**, **which Unit 6 taught at the cost of a surprise.** **A committee cannot be telephoned, cannot ask a question, and reads eleven sentences in about ninety seconds.**',
  '⚠ **This unit is those eleven sentences.** **The arithmetic is all correct and all of it is already in the audited accounts.** ⚠ **What the unit is about is that the same correct arithmetic can be written four ways, three of which a reader will catch, and the fourth of which is shorter than all of them.**',
], C.lyellow, C.orange));

// ======================= CYCLE 8.1 =======================
out.push(pb());
out.push(h2('8.1  A figure needs a basis'));
out.push(p('**Function:** giving a figure its period, its basis and its source   ·   **Grammar:** _X in the year to 31 December, on the same basis as the prior year_   ·   **Pronunciation:** a figure and its period said as one phrase'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a figure about your work. ⚠ Then say its period, what is in it, and where it comes from.'));
out.push(p('**b**  Which can be checked? _Turnover is 148 million. · Turnover was 148.2 million in the year to 31 December 2025, on the same basis as 2024, from the audited accounts at page 4._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say a figure without a basis is?   **A** wrong   **B** an invitation to the reader to supply a basis, and his will be the worst one   **C** fine in a short paper'));
out.push(p('**b**  Listen again. **1** What three things does he say every figure carries? **2** What does he say about the figure Nour has quoted twice?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.1  "Period, basis, source"', [
  ['Nour', 'Turnover is 148 million. That is the first sentence.'],
  ['Mr Attar', '⚠ **Whose 148, over what, and compared with what?**'],
  ['Nour', 'Ours. Last year.'],
  ['Mr Attar', '⚠ **Which last year? Your year ends on the 31st of December and the bank\'s facility year runs to the end of June.** ⚠ **A committee reading *last year* will pick one, and it will not tell you which.**'],
  ['Nour', 'So: turnover was 148 million in the year to 31 December 2025.'],
  ['Mr Attar', '⚠ **Now the basis. Is that the same basis as the year before it?**'],
  ['Nour', 'The same, except that 2023 has the Homs clearance in it — the store opened in 2019 and closed in 2021, and the stock came down in a fortnight.'],
  ['Mr Attar', '⚠ **Then 2025 and 2024 are comparable and 2023 is not, and that sentence belongs in the paper and not in your head.** ⚠ **Every figure carries three things: its period, its basis, and where a reader can go and see it.**'],
  ['Nour', 'The source is the audited accounts.'],
  ['Mr Attar', '⚠ **Page?**'],
  ['Nour', 'Page 4.'],
  ['Mr Attar', '⚠ **Then write page 4.** ⚠ **A figure a reader can check in ten seconds is believed; a figure he has to hunt for is read as a figure you hoped he would not look up.**'],
  ['Nour', 'And the 148 — I have used it twice, in two papers.'],
  ['Mr Attar', '⚠ **Then go and look at both, because one of them says 148.2 and the other says 148, and the committee has both.** ⚠ **The same figure rounded two ways in two documents is read as two figures.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Period, basis, source**',
  table(['', 'Write', 'Because'], [
    ['⚠ **period**', '⚠ *in the year to 31 December 2025*', '⚠ **your year and the reader\'s year are not the same year** — **the bank\'s runs to June**'],
    ['⚠ **basis**', '⚠ *on the same basis as 2024*', '⚠ **and where it is not, say so: 2023 carries the Homs clearance**'],
    ['⚠ **source**', '⚠ *audited accounts, page 4*', '⚠ **a figure checkable in ten seconds is believed; one that must be hunted for is read as one you hoped he would not look up**'],
    ['**all three**', '*Turnover was 148.2 million in the year to 31 December 2025, on the same basis as 2024 — audited accounts, page 4.*', '**twenty-two words, and nothing in it can be misread**'],
  ], [1.1, 3.6, 2.6]),
  '⚠ **A figure without a basis is an invitation to the reader to supply one, and his will be the worst one available.** ⚠ *Last year* **is two different years to you and to a bank**, **and the reader picks and does not tell you.**',
  '⚠ **Say where the basis is NOT the same.** ⚠ *2025 and 2024 are comparable; 2023 carries the Homs clearance.* **One sentence, and it protects all three figures** — **8.4 is how to strip the clearance out and why you say that you have.**',
  '⚠ **Give the page.** **Not *the accounts*** — ⚠ *page 4.* **The cost of the page number is three characters and it is the difference between a figure and a claim.**',
  '⚠ **And use one rounding of a figure in every document you write.** ⚠ **148.2 in one paper and 148 in another is read as two figures**, **and the reader who notices does not ask — he discounts both.** **8.5 is where rounding is decided.**',
  '**Practise:** Take four figures from your work. Give each its period, its basis and its source with a page or a reference.',
  '**Useful phrases:**  in the year to  ·  on the same basis as  ·  audited accounts, page  ·  which year?  ·  the same figure rounded two ways',
  '**Pronunciation – a figure and its period as one phrase.** 🔊 **Track 8.2** Listen twice. ⚠ **The first says *148.2 million in the year to 31 December* in one phrase with no pause.** ⚠ **The second pauses after the number.** **Paused, the period sounds like an afterthought a listener may discard; unpaused, the figure has no existence without its year.** Say it four times with no pause.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a figure; B asks for its three parts.'));
out.push(dlg(null, [
  ['A', '__________ is __________.'],
  ['B', '⚠ **Whose, over what, and compared with what?**'],
  ['A', 'Ours. Last year.'],
  ['B', '⚠ **Which last year? Your year ends __________ and ours ends __________.**'],
  ['A', '__________ was __________ in the year to __________.'],
  ['B', '⚠ **Now the basis. The same as the year before?**'],
  ['A', 'The same, except that __________ has __________ in it.'],
  ['B', '⚠ **Then that sentence goes in the paper. And the source?**'],
  ['A', '__________, page __________.'],
]));
out.push(table(['Role card 1 — which year?', 'Role card 2 — the same figure rounded twice'], [[
  '⚠ **A says *last year*.** ⚠ **B\'s accounting year ends in June and A\'s ends in December, so *last year* means two different twelve-month periods that overlap by six.** ⚠ **Make A say the date.** **Then make A say which of the three years are on one basis and which is not.**',
  '⚠ **A has quoted the same turnover as 148.2 in one document and 148 in another, and both are with the reader.** ⚠ **B\'s job is not to ask which is right** — **both are right** — **but to point out that a reader with two documents has two figures.** ⚠ **One rounding, every document, decided once.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the figure with all three of its parts. ⚠ Then say which of the speaker\'s years are on one basis, and which is not.'));
out.push(PHRASE_CARD(['in the year to', 'on the same basis as', 'accounts, page', 'which last year?', 'one rounding everywhere']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** figures you use at work. Give each its three parts.'));
out.push(table(['The figure', 'Its period', 'Its basis — and where it differs', 'Its source, with a page'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.5, 2.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The figure is _______ in the year to _______, on the same basis as _______ except for _______. The source is _______, page _______._'));
out.push(p('**Listener task:** count how many figures had no page behind them. ⚠ Then ask how many had been quoted twice with two different roundings, and expect more than the room expects.'));
out.push(p('**Board clinic:** your teacher writes three figures on the board — look for *last year*, and a figure with no source. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FACILITY PAPER — THE FIGURES AND WHERE THEY COME FROM. 12 May. N. Mansour. A working note, not for the bank.**',
  table(['The figure', 'Period', 'Basis', 'Source'], [
    ['**turnover 112.4 / 131.0 / 148.2 million**', '**years to 31 December 2023, 2024, 2025**', '⚠ **2024 and 2025 one basis; 2023 includes the Homs clearance of 6.1**', '**audited accounts, page 4**'],
    ['**gross margin 21.4 / 19.8 / 20.1 per cent**', '**the same three years**', '⚠ **one basis throughout** — **the stock valuation did not change**', '**audited accounts, page 6, and my working at appendix 2**'],
    ['**debtor days 46 / 51 / 58**', '⚠ **at each 31 December, not an average of the year**', '⚠ **closing receivables over the year\'s sales, times 365**', '⚠ **my calculation from the accounts; it is not a figure the accounts print**'],
    ['**the facility asked for: 40 million**', '**the twelve months from 1 July 2026**', '⚠ **the bank\'s year, not ours** — **this is the one figure on their period**', '**their form, box 3**'],
  ], [2.1, 1.7, 2.5, 1.7]),
  '⚠ **The third row is the one to be careful with and it is the row the facility turns on.** **Debtor days are not in the accounts.** ⚠ **I have calculated them, and the basis I used** — **closing receivables rather than an average of the twelve months** — **gives a higher number than an average would.** **It is the harder basis and I have used it because the committee will use it.**',
  '⚠ **The fourth row is on somebody else\'s period and must say so.** **Our year ends in December and the facility year starts in July**, ⚠ **so the three years of trading in the paper and the twelve months the money is for do not overlap at all.** **A committee that works that out for itself works out something else as well: that we did not.**',
  '⚠ **And the second row has two sources, which is not a fault.** **The margin is on page 6 and my working is at appendix 2** — ⚠ **because page 6 gives the margin for each year and does not give the three side by side, and the comparison is mine.** **A figure that is partly the accounts and partly my arithmetic says so.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which figure is not in the accounts, and what did the writer have to choose?'));
out.push(item('2', 'Why does the fourth row name a different period, and what would a committee work out?'));
out.push(item('3', 'Why does the margin row have two sources?'));
out.push(box('Writer\'s box', [
  '**Figures and where they come from — four parts:** **a table of *figure · period · basis · source*** → ⚠ **the row you calculated yourself, with the basis you chose and why** → ⚠ **the row on somebody else\'s period** → ⚠ **and the row that is partly yours.**',
  '⚠ **Where a figure is your calculation and not the document\'s, say so and name the basis.** ⚠ *Closing receivables over the year\'s sales, times 365.* **A ratio with no stated basis can be computed four ways and a reader will assume the one that suits him.**',
  '⚠ **Choose the harder basis when the reader will use it.** ⚠ **Closing receivables give a worse number than a twelve-month average** — **and the committee will use closing, so using the average first and being corrected costs more than the three days ever would.**',
  '⚠ **Name the period that is not yours.** ⚠ **Three years of trading to December and a facility year from July do not overlap at all** — **and a reader who notices that before you do also notices that you did not.**',
  '⚠ **And let a figure have two sources.** ⚠ **The accounts for each year, your appendix for the comparison** — **because a page that gives three figures separately does not give the comparison, and the comparison is yours.**',
  '⚠ **Every row gets a page, a box or an appendix.** **No row is allowed to say *the accounts*.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the figures-and-sources note for something at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE FIGURES AND WHERE THEY COME FROM. ______________. A working note.**   **______________** | **______________** | ⚠ **______________** | **______________, page ______________**   **______________** | **______________** | ⚠ **______________** | **______________**   **______________** | ⚠ **______________** | ⚠ **______________** | ⚠ **my calculation; it is not a figure ______________ prints**   ⚠ **The ______________ row is the one to be careful with.** ⚠ **I have calculated it, and the basis I used** — **______________ rather than ______________** — **gives ______________.** **It is the harder basis and I have used it because ______________.**   ⚠ **The ______________ row is on somebody else\'s period and must say so.** ⚠ **______________ and ______________ do not overlap**, **so ______________.**   ⚠ **And the ______________ row has two sources, which is not a fault:** **______________ and ______________** — ⚠ **because ______________ and the comparison is mine.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A period on every figure, with a date and not *last year*', ''],
  ['A basis on every figure, and the one that differs named', ''],
  ['A page, box or appendix on every source', ''],
  ['The calculated figure declared, with the basis chosen and why', ''],
  ['The figure on somebody else\'s period named as such', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their calculated row. ⚠ The class asks what other basis was available — and if there was only one, it was not a choice and the row is a document\'s figure after all.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a figure at your work that everybody quotes and nobody can source (**200 to 240 words**). Say what it is, who quotes it, what period it is supposed to cover, whether anybody has looked for it, and what it would take to put a page behind it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what period does it actually cover?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could nobody say what period the figure covered? Usually all three — ⚠ **and in two of three the figure turns out to be two or three years old and to have been repeated every year since.**'));
out.push(box('Homework', ['Write your final text. Then take three figures you used last week, and give each one its period, its basis and a page (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.2 =======================
out.push(pb());
out.push(h2('8.2  The trend and the blip'));
out.push(p('**Function:** writing three years as a shape, not as nine numbers   ·   **Grammar:** _X then Y then Z, which is A per cent a year compound · a single month that carries a year_   ·   **Pronunciation:** three figures read as a direction'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say three years of one figure at your work. ⚠ Then say in one word what the three of them do.'));
out.push(p('**b**  Which is the trend and which is the blip? _Turnover 112, 131, 148. · April 2025 sales of 9.4 million against 11.8 in March._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say nine numbers do to a committee?   **A** convince it   **B** make it pick the two it happens to notice   **C** bore it'));
out.push(p('**b**  Listen again. **1** What is the compound rate over the two years and why is it the better figure? **2** What does she say to do with the April blip?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.3  "Eleven sentences, not nine numbers"', [
  ['Nour', 'I have the three years of turnover, the three margins and the three debtor figures. Nine numbers.'],
  ['Nadia', '⚠ **And a committee reading nine numbers in ninety seconds picks the two it happens to notice.** ⚠ **Usually the biggest and the worst.**'],
  ['Nour', 'So what do I write?'],
  ['Nadia', '⚠ **A direction and a rate.** ⚠ *Turnover rose from 112.4 million to 148.2 million over the three years, which is fifteen per cent a year compound.* **One sentence, and it has all three years in it.**'],
  ['Nour', 'Seventeen per cent then thirteen. Why is the compound figure better than giving both?'],
  ['Nadia', '⚠ **Because *seventeen then thirteen* invites a reader to extrapolate the second one and he will write twelve in his own notes for next year.** ⚠ **Fifteen a year compound is what happened, and it is one number, and it cannot be read as a deceleration.**'],
  ['Nour', 'It is a deceleration, though. Seventeen to thirteen.'],
  ['Nadia', '⚠ **It is two observations, and two observations are not a trend.** ⚠ **Say both if you want to** — **but say what they are: two years, not a direction.** **A deceleration needs four points and we have three.**'],
  ['Nour', 'And April? Sales were 9.4 against 11.8 in March.'],
  ['Nadia', '⚠ **April is a blip and you say so, in the same sentence as the figure.** ⚠ *April was 9.4 million against a monthly average of 12.3, the plater having been out of service for eleven days.* **A figure with its cause attached stops being evidence of a decline.**'],
  ['Nour', 'And if I leave April out?'],
  ['Nadia', '⚠ **Then the committee finds it in the monthly schedule, which is attached, and it becomes the only month they look at.** ⚠ **A blip you name is one sentence; a blip they find is the whole meeting.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three years as a shape**',
  table(['', 'Not', 'Write'], [
    ['⚠ **the series**', '**112.4, 131.0, 148.2**', '⚠ *rose from 112.4 to 148.2 over the three years, which is fifteen per cent a year compound*'],
    ['⚠ **the two steps**', '**seventeen per cent then thirteen**', '⚠ **only with the words *two years, not a direction*** — **a deceleration needs four points**'],
    ['⚠ **the blip**', '**April 9.4** — **or April left out**', '⚠ *April was 9.4 against a monthly average of 12.3, the plater having been out of service for eleven days*'],
    ['**the margin**', '**21.4, 19.8, 20.1**', '⚠ *fell 1.6 points in 2024 and recovered 0.3 in 2025* — **8.3 is why *points* and not *per cent***'],
  ], [1.3, 2.3, 3.7]),
  '⚠ **Nine numbers in ninety seconds means a committee picks two, and they will be the biggest and the worst.** ⚠ **Give a direction and a rate instead: one sentence carries all three years.**',
  '⚠ **Prefer the compound rate to the two steps.** ⚠ **_Seventeen then thirteen_ invites a reader to extrapolate the thirteen** — **and he will write twelve in his own notes for next year, and you will never see him do it.** **Fifteen a year compound is what happened and cannot be read as a deceleration.**',
  '⚠ **Two observations are not a trend, and say so where you give them.** ⚠ **A deceleration needs four points and three years give you two steps.** **_Two years, not a direction_ is six words and it is honest in both directions.**',
  '⚠ **Name the blip, with its cause, in the same sentence as the figure.** ⚠ **A figure with its cause attached stops being evidence of a decline** — **and Unit 7 is where the cause comes from.**',
  '⚠ **And never leave a blip out when the monthly schedule is attached.** ⚠ **A blip you name is one sentence; a blip they find is the whole meeting.**',
  '**Practise:** Take three years of one figure. Write the direction and the compound rate in one sentence, then name any blip with its cause.',
  '**Useful phrases:**  rose from X to Y over the three years  ·  per cent a year compound  ·  two years, not a direction  ·  against a monthly average of  ·  the plater having been out of service',
  '**Pronunciation – three figures read as a direction.** 🔊 **Track 8.4** Listen twice. ⚠ **The first says *112, 131, 148* rising in pitch across the three, as one movement.** ⚠ **The second says them flat and equal.** **Flat, they are three facts a listener must assemble; rising, they are one fact.** Read three figures as one movement, four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has nine numbers; B turns them into sentences.'));
out.push(dlg(null, [
  ['A', 'I have __________ numbers.'],
  ['B', '⚠ **A committee reads them in ninety seconds and picks __________. Give me a direction and a rate.**'],
  ['A', '__________ rose from __________ to __________ over __________, which is __________ a year compound.'],
  ['B', '⚠ **Good. And the two steps?**'],
  ['A', '__________ then __________.'],
  ['B', '⚠ **Which is two years and not a direction. Say that if you give them. Now the worst month.**'],
  ['A', '__________ was __________ against a monthly average of __________.'],
  ['B', '⚠ **And the cause, in the same sentence.**'],
  ['A', '__________, __________ having __________.'],
]));
out.push(table(['Role card 1 — the deceleration that is not one', 'Role card 2 — the blip left out'], [[
  '⚠ **A wants to write *seventeen per cent then thirteen* because it is true.** ⚠ **B agrees it is true and asks how many points a deceleration needs.** ⚠ **Four, and three years give two steps.** ⚠ **So either the compound rate alone, or both steps with *two years, not a direction* attached** — **and the second version is the braver and the longer.**',
  '⚠ **A has left April out, and the monthly schedule is attached to the paper.** ⚠ **B is the committee: he finds April in ten seconds and spends the meeting on it.** ⚠ **Then B reads A the one-sentence version with the cause in it** — **9.4 against an average of 12.3, the plater down eleven days** — **and asks which of the two conversations A would rather have had.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the direction-and-rate sentence. ⚠ Then write the blip with its cause, and count the words in each.'));
out.push(PHRASE_CARD(['a direction and a rate', 'per cent a year compound', 'two years, not a direction', 'against a monthly average of', 'a blip they find']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** series from your work. Write each as a shape.'));
out.push(table(['The three figures', 'The direction and the rate, in one sentence', 'The worst point, with its cause'], [['', '', ''], ['', '', ''], ['', '', '']], [1.5, 2.8, 2.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It rose from _______ to _______ over _______, which is _______ a year compound. The worst point was _______ against an average of _______, because _______._'));
out.push(p('**Listener task:** count how many series had fewer than four points. ⚠ Then ask how many of those had been described as accelerating or decelerating anyway, which is almost all of them.'));
out.push(p('**Board clinic:** your teacher writes three descriptions on the board — look for a deceleration drawn from two steps, and a blip with no cause attached. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THREE YEARS OF TRADING. 14 May. N. Mansour. Facility application, box 7 — eleven sentences.**',
  '**1**  _Turnover rose from 112.4 million in the year to 31 December 2023 to 148.2 million in the year to 31 December 2025, which is fifteen per cent a year compound._',
  '**2**  ⚠ _The 2023 figure includes 6.1 million from the clearance of the Homs stock on the closure of that store; excluding it, the three-year rate is eighteen per cent a year._',
  '**3**  _Growth was seventeen per cent in 2024 and thirteen per cent in 2025 — two years, and not a direction._',
  '**4**  ⚠ _Gross margin fell 1.6 percentage points in 2024, from 21.4 to 19.8 per cent, and recovered 0.3 of a point in 2025._',
  '**5**  ⚠ _The 2024 fall is accounted for by the Baghdad Street counter, which opened on 8 June and traded at a lower margin for its first seven months, and by nothing else; the margin on the established counters did not move._',
  '**6**  ⚠ _Debtor days at 31 December were 46, 51 and 58, calculated on closing receivables over the year\'s sales._',
  '**7**  ⚠ _This is the series that has moved against us and it is the series this facility is secured on; the cause is the two export accounts opened in 2024, which pay at sixty days by agreement._',
  '**8**  _Stripping out those two accounts, debtor days were 46, 47 and 48._',
  '**9**  ⚠ _April 2025 sales were 9.4 million against a monthly average of 12.3, the plating press having been out of service for eleven days._',
  '**10**  _No other month in the three years is more than eight per cent from its year\'s average._',
  '**11**  ⚠ _All figures are from the audited accounts at pages 4 and 6, except debtor days, which are my calculation and are set out at appendix 2._',
  '⚠ **Eleven sentences, and four of them exist only to stop a reader reaching a conclusion the figures do not support.** **Sentence 2 stops the growth figure being flattered by a one-off. Sentence 3 stops a deceleration being read from two steps.** ⚠ **Sentence 8 stops the debtor-days series being read as a collapse in collection, which it is not.** **And sentence 10 stops April being read as a trend, which is the only thing a single month can never be.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which four sentences exist to stop a conclusion, and which conclusion does each stop?'));
out.push(item('2', 'What does sentence 8 do to the debtor-days series, and what is left of it?'));
out.push(item('3', 'Why is sentence 10 there, and what does it cost?'));
out.push(box('Writer\'s box', [
  '**Three years in eleven sentences:** ⚠ **direction and rate first** → ⚠ **the one-off named and the rate restated without it** → ⚠ **the steps, labelled as two years** → **the margin in points, with its cause** → ⚠ **the series that moved against you, named as such** → ⚠ **the blip with its cause** → **the bound on every other month** → **and the sources, with pages.**',
  '⚠ **Put the series that has gone against you in the paper yourself, and say that the facility is secured on it.** ⚠ **A committee that finds it is a committee asking why it was not told** — **and the answer, however good, is now an answer to a question about you and not about debtors.**',
  '⚠ **Strip the one-off out and give both rates.** ⚠ **Fifteen with the Homs clearance, eighteen without** — **and the honest figure is the better one, which is normal and is not a reason to leave the first one out.** **8.4 is the method.**',
  '⚠ **Bound the months you are not discussing.** ⚠ *No other month is more than eight per cent from its year\'s average.* **Eleven words, and it converts April from a possible trend into the only exception** — **and a reader cannot test a silence, so give him a bound instead.**',
  '⚠ **Write *percentage points* for a movement in a percentage and *per cent* for a movement in a quantity.** **1.6 points, not 1.6 per cent** — ⚠ **8.3 is why, and a committee of bankers is the audience least likely to forgive the confusion.**',
  '⚠ **And let the last sentence be the sources, with the one calculated figure named.** **It is the sentence that makes the other ten checkable.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write three years of something at your work in eleven sentences (**80 words or more**). Use the frame.'));
out.push(p('**______________. ______________. ______________ — eleven sentences.**   **1** _______________ rose from ______________ to ______________, which is ______________ a year compound._   **2** ⚠ _The ______________ figure includes ______________; excluding it, the rate is ______________._   **3** _Growth was ______________ and ______________ — two years, and not a direction._   **4** ⚠ _______________ fell ______________ percentage points and recovered ______________._   **5** ⚠ _The fall is accounted for by ______________, and by nothing else._   **6** ⚠ _______________ were ______________, calculated on ______________._   **7** ⚠ _This is the series that has moved against us; the cause is ______________._   **8** _Stripping out ______________, they were ______________._   **9** ⚠ _______________ was ______________ against an average of ______________, ______________ having ______________._   **10** _No other ______________ is more than ______________ from its ______________._   **11** ⚠ _All figures are from ______________, except ______________, which is my calculation._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A direction and a rate in the first sentence', ''],
  ['The one-off named, and the rate restated without it', ''],
  ['Two steps labelled *two years, and not a direction*', ''],
  ['The series that moved against you, named by you', ''],
  ['A bound on every point you are not discussing', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their sentence 7 — the series that moved against them. ⚠ The class says whether the cause is in the same sentence, and whether the writer or the reader would have found it first.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a single month or week at your work that has been treated as a trend (**200 to 240 words**). Say what the figure was, what the average is, what caused it, who treated it as a trend, and what was decided because of it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how many points were there in the trend?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was a decision taken on fewer than four points? Usually all three — ⚠ **and in two of three the decision is still in force and the figure went back to its average the following month.**'));
out.push(box('Homework', ['Write your final text. Then take a series of three or more figures from your work and write its direction and compound rate in one sentence (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.3 =======================
out.push(pb());
out.push(h2('8.3  Per cent, points and the base'));
out.push(p('**Function:** making a percentage say what you mean   ·   **Grammar:** _fell 1.6 percentage points, from 21.4 to 19.8 per cent · from two customers to six_   ·   **Pronunciation:** *per cent* and *percentage points* distinguished'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a percentage you use at work. ⚠ Then say what the hundred is — the thing it is a percentage of.'));
out.push(p('**b**  Which is right? _The margin fell 1.6 per cent, from 21.4 to 19.8. · The margin fell 1.6 percentage points, from 21.4 to 19.8 per cent._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say about a percentage with no base?   **A** it is unclear   **B** it is the one mistake a bank will not forgive, because the bank\'s whole trade is bases   **C** it is acceptable in prose'));
out.push(p('**b**  Listen again. **1** What is wrong with *the Beirut account grew three hundred per cent*? **2** What does he say to write instead of a big percentage off a small base?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.5  "A percentage of what?"', [
  ['Nour', 'The Beirut account grew three hundred per cent in 2025.'],
  ['Bassel', '⚠ **From what to what?**'],
  ['Nour', 'Two customers to six.'],
  ['Bassel', '⚠ **Then it grew two hundred per cent, or it trebled, or it is three times what it was.** ⚠ **Three hundred per cent growth from two is eight.** **And a committee of bankers will see that in two seconds and spend the next twenty minutes on arithmetic instead of on Beirut.**'],
  ['Nour', 'Then: it trebled.'],
  ['Bassel', '⚠ **Better, and I would not write it at all.** ⚠ *From two customers to six.* **Four words, no percentage, and nobody can argue with it.**'],
  ['Nour', 'It sounds smaller.'],
  ['Bassel', '⚠ **It is smaller. It is four customers.** ⚠ **A percentage off a small base is arithmetic dressed as a result, and the reader who undresses it trusts nothing else on the page.**'],
  ['Nour', 'And the margin? I have written that it fell 1.6 per cent.'],
  ['Bassel', '⚠ **It fell 1.6 percentage points.** ⚠ **A fall of 1.6 per cent from 21.4 would be 21.1, which is not what happened.** **The thing that fell is itself a percentage, so the movement is in points.**'],
  ['Nour', 'Does anybody really read it that closely?'],
  ['Bassel', '⚠ **A bank does. A bank\'s entire trade is the difference between a rate and a movement in a rate.** ⚠ **It is the one mistake they will not forgive, because they cannot tell whether you do not know or you are hoping.**'],
  ['Nour', 'And nine per cent of sales — I have used that for the Ghouta run, which has gone out on Mondays and Wednesdays since 1 March.'],
  ['Bassel', '⚠ **Nine per cent of which sales?** ⚠ **Nine per cent of turnover is 13.3 million; nine per cent of cartons is a different number and a different argument.** **Name the hundred, every time.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Per cent, points and the base**',
  table(['', 'Not', 'Write'], [
    ['⚠ **a movement in a percentage**', '**the margin fell 1.6 per cent**', '⚠ *the margin fell 1.6 percentage points, from 21.4 to 19.8 per cent*'],
    ['⚠ **growth off a small base**', '**grew three hundred per cent**', '⚠ *from two customers to six* — **four words, and nobody can argue with it**'],
    ['⚠ **a percentage with no base**', '**nine per cent of sales**', '⚠ *nine per cent of turnover, which is 13.3 million* — **name the hundred**'],
    ['**a ratio**', '**58 days late**', '⚠ *58 debtor days* — **which is not lateness; it is receivables over sales**'],
  ], [1.9, 2.1, 3.3]),
  '⚠ **A movement in a percentage is measured in percentage points.** ⚠ **A fall of 1.6 per cent from 21.4 is 21.1, which is not what happened.** **The thing that moved is itself a percentage.**',
  '⚠ **This is the one arithmetical mistake a bank will not forgive**, **because its whole trade is the difference between a rate and a movement in a rate** — ⚠ **and a reader cannot tell whether you do not know or you are hoping.**',
  '⚠ **A percentage off a small base is arithmetic dressed as a result.** ⚠ **From two to six is two hundred per cent and it is four customers.** **Write the two numbers and no percentage: it is smaller, and it is what happened.**',
  '⚠ **Name the hundred.** ⚠ **Nine per cent of turnover is 13.3 million; nine per cent of cartons is a different number and a different argument** — **and a percentage with no denominator is a figure that moves with the question.**',
  '⚠ **And do not let a ratio be read as a quantity.** ⚠ **58 debtor days is not 58 days late** — **it is receivables over sales times 365, and most of those days are agreed terms.** **8.6 is how to make that visible.**',
  '**Practise:** Take four percentages from your work. Name the base of each, convert one movement to points, and rewrite one small-base percentage as two numbers.',
  '**Useful phrases:**  percentage points  ·  from X to Y  ·  per cent of turnover, which is  ·  name the hundred  ·  which is not lateness',
  '**Pronunciation – *per cent* against *percentage points*.** 🔊 **Track 8.6** Listen twice. ⚠ **The first says *one point six percentage points* with the stress on *points*.** ⚠ **The second says *one point six per cent*.** **The two sound similar and mean different numbers, so the stress on *points* is doing real work.** Say both four times, alternating.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a percentage; B asks for the base.'));
out.push(dlg(null, [
  ['A', '__________ grew __________ per cent.'],
  ['B', '⚠ **From what to what?**'],
  ['A', '__________ to __________.'],
  ['B', '⚠ **Then it grew __________ per cent, and I would write the two numbers instead. Why?**'],
  ['A', 'Because __________.'],
  ['B', '⚠ **And the margin. You have written it fell __________ per cent.**'],
  ['A', '__________ percentage points, from __________ to __________ per cent.'],
  ['B', '⚠ **And *__________ per cent of sales* — which sales?**'],
  ['A', '__________ per cent of __________, which is __________.'],
]));
out.push(table(['Role card 1 — three hundred per cent of two', 'Role card 2 — a percentage of nothing named'], [[
  '⚠ **A has written that an account grew three hundred per cent, from two customers to six.** ⚠ **B does the arithmetic aloud: three hundred per cent of two added to two is eight.** ⚠ **The growth is two hundred per cent, and the right sentence has no percentage in it at all** — ***from two customers to six*** — **and is four words long.**',
  '⚠ **A says *the Ghouta run is nine per cent of sales*.** ⚠ **B asks for the hundred, and A does not have it: nine per cent was calculated on cartons two years ago and has been repeated on turnover ever since.** ⚠ **Nine per cent of cartons and nine per cent of 148.2 million are two different arguments** — **and the one in the paper is the one A never chose.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the small-base figure as two numbers. ⚠ Then write the margin movement in points, and name the base of the third percentage.'));
out.push(PHRASE_CARD(['percentage points', 'from two to six', 'name the hundred', 'per cent of turnover, which is', 'not lateness']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** percentages you use at work. Repair each.'));
out.push(table(['The percentage as it is used', 'What the hundred is', 'Per cent or points?', 'How I will write it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.5, 1.1, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I use _______ per cent of _______. The hundred is _______. It is a movement in _______, so it is _______. And I will write it as _______._'));
out.push(p('**Listener task:** count how many percentages had no base that anybody could name. ⚠ Then ask how many had been calculated on one base and are now quoted on another, which is the fault that never gets found.'));
out.push(p('**Board clinic:** your teacher writes three figures on the board — look for a movement in a percentage given in per cent, and a big percentage off a base of two or three. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**FOUR PERCENTAGES IN THE FACILITY PAPER, AND WHAT EACH IS A PERCENTAGE OF. 16 May. N. Mansour. Working note, appendix 3.**',
  table(['The figure as first drafted', 'The fault', 'As it now reads'], [
    ['**the margin fell 1.6 per cent**', '⚠ **a movement in a percentage given in per cent; 1.6 per cent of 21.4 is 0.34, so the sentence says the margin went to 21.06**', '⚠ *fell 1.6 percentage points, from 21.4 to 19.8 per cent*'],
    ['**the Beirut account grew three hundred per cent**', '⚠ **wrong arithmetic as well as wrong register: three hundred per cent of two is six, added to two is eight.** **We went from two customers to six.**', '⚠ *from two customers to six, which are now 4.1 per cent of turnover*'],
    ['**the Ghouta run is nine per cent of sales**', '⚠ **no base.** **Nine per cent was calculated on cartons in 2023 and has been repeated since as though it were turnover, which it is not: on turnover the run is 6.2 per cent.**', '⚠ *6.2 per cent of turnover, and 9.1 per cent of cartons*'],
    ['**debtor days are 58**', '⚠ **a ratio that reads as a quantity.** **Three readers in four take it as *our customers pay 58 days late*, which is not what it is.**', '⚠ *58 debtor days — closing receivables over the year\'s sales, of which 60 days are agreed terms on the two export accounts*'],
  ], [2.1, 3.5, 2.8]),
  '⚠ **The third row is the one that has done real damage and it had nothing to do with this paper.** **Nine per cent of cartons became *nine per cent of sales* in a letter in 2023, and has been repeated eleven times since**, ⚠ **including twice to the bank** — **and the true figure on turnover is 6.2, so for two years we have been overstating the importance of the Ghouta run by about half.**',
  '⚠ **Nobody did it deliberately and that is the point.** **A percentage with its base stated once and then repeated without it drifts to whichever base the next writer assumes**, ⚠ **and nothing in any document ever says the base changed, because nobody ever decided it.**',
  '⚠ **And the fourth row is the expensive one in this paper, because it is the series the facility is secured on.** **58 debtor days reads as sixty days of lateness to a reader who does not work in accounts** — ⚠ **and the sentence that fixes it is the clause about agreed terms, which is eleven words and belongs in the same sentence as the figure.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is wrong with the first row, and what does the sentence actually say?'));
out.push(item('2', 'How did the Ghouta figure drift, and by how much is it wrong?'));
out.push(item('3', 'Why is the fourth row the expensive one here?'));
out.push(box('Writer\'s box', [
  '**Repairing a percentage — four parts:** **a table of *as drafted · the fault · as it now reads*** → ⚠ **the one that drifted, with how many times it has been repeated** → ⚠ **the sentence that nobody decided** → ⚠ **and the ratio that reads as a quantity.**',
  '⚠ **Do the arithmetic of your own sentence before you defend it.** ⚠ **_Fell 1.6 per cent_ from 21.4 says the margin went to 21.06.** **Read the sentence as a reader computes it, not as you meant it.**',
  '⚠ **Count the repetitions of a drifted figure.** ⚠ **Eleven times, twice to the bank** — **because a reader needs to know whether he is being corrected on a new figure or on one he has been given before**, **and the second is a different letter.**',
  '⚠ **Say that nobody decided it.** ⚠ **A percentage whose base is stated once and then repeated without it drifts to whichever base the next writer assumes** — **and no document ever records the change, because there was no change, only an omission repeated.**',
  '⚠ **Put the clause that stops a ratio reading as a quantity in the same sentence as the ratio.** ⚠ *58 debtor days — of which 60 days are agreed terms on the two export accounts.* **Eleven words, and the figure stops being an accusation against your customers.**',
  '⚠ **And where you give two bases, give both figures.** ⚠ *6.2 per cent of turnover, and 9.1 per cent of cartons.* **Two numbers end an argument that one number starts.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Repair four percentages from your work (**80 words or more**). Use the frame.'));
out.push(p('**FOUR PERCENTAGES IN ______________, AND WHAT EACH IS A PERCENTAGE OF. ______________. Working note.**   **______________** | ⚠ **______________** | ⚠ **______________**   **______________** | ⚠ **______________** | ⚠ **______________**   **______________** | ⚠ **no base. ______________ was calculated on ______________ and has been repeated since as though it were ______________** | ⚠ **______________**   **______________** | ⚠ **a ratio that reads as a quantity** | ⚠ **______________**   ⚠ **The ______________ row is the one that has done real damage.** ⚠ **It became ______________ in ______________ and has been repeated ______________ times since**, **including ______________** — **and the true figure is ______________.**   ⚠ **Nobody did it deliberately and that is the point.** ⚠ **A percentage with its base stated once and then repeated without it drifts to whichever base the next writer assumes.**   ⚠ **And the ______________ row is the expensive one, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The arithmetic of the drafted sentence computed, not the intention', ''],
  ['A movement in a percentage written in points', ''],
  ['A small-base percentage replaced by two numbers', ''],
  ['The drifted figure, with the number of repetitions', ''],
  ['A clause stopping a ratio from reading as a quantity', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their drifted percentage. ⚠ The class asks how many times it has been repeated — and where nobody knows, that is the answer and it should go in the note as *at least*.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a percentage at your work whose base nobody can name (**200 to 240 words**). Say what it is, where it came from, what it has been used to argue, what the true figure is on each possible base, and what the difference would have changed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _which base was it first calculated on?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the figure been used to argue for something? Usually two of three — ⚠ **and in those two the decision was taken on the base the writer assumed and not on the base the figure was calculated from.**'));
out.push(box('Homework', ['Write your final text. Then take one percentage you used last month, name its hundred, and recalculate it on the other base that was available (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.4 =======================
out.push(pb());
out.push(h2('8.4  Stripping out the one-off'));
out.push(p('**Function:** removing a one-off item and saying that you have   ·   **Grammar:** _excluding X, the figure is Y · stripping out the two export accounts_   ·   **Pronunciation:** an exclusion read as part of the figure'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a figure at your work that has something unusual inside it. ⚠ Then say the figure without it.'));
out.push(p('**b**  Which version is safer to send? _Turnover grew fifteen per cent a year. · Turnover grew fifteen per cent a year; excluding the Homs clearance in the base year, eighteen._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say about a one-off that flatters you?   **A** leave it in   **B** strip it out and say so, exactly as you would one that flatters you not at all   **C** mention it if asked'));
out.push(p('**b**  Listen again. **1** What happens to the growth rate when the Homs clearance comes out? **2** What does he say is the test of a one-off?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.7  "Both figures, and say which is which"', [
  ['Nour', 'The three-year rate is fifteen per cent. If I take the Homs clearance out of the base year it is eighteen.'],
  ['Mr Attar', '⚠ **So the honest figure is the better one.**'],
  ['Nour', 'Which is why I was going to leave it as fifteen. It looks less like arranging the numbers.'],
  ['Mr Attar', '⚠ **It is arranging the numbers.** ⚠ **You have found a one-off in the base year and decided not to mention it because mentioning it helps you.** **That is a decision about presentation and not about arithmetic.**'],
  ['Nour', 'And if I give eighteen, somebody will say I have stripped out the inconvenient year.'],
  ['Mr Attar', '⚠ **Then give both, and say which is which.** ⚠ *Fifteen per cent a year; excluding the clearance of the Homs stock in the base year, eighteen.* **Nineteen words and there is nothing left to allege.**'],
  ['Nour', 'What is the test? Anything can be called a one-off.'],
  ['Mr Attar', '⚠ **Two questions. Did it happen for a reason that has gone, and will it not happen again?** ⚠ **The Homs store closed; its stock was cleared once; there is no Homs store.** **That is a one-off.**'],
  ['Nour', 'And the plater in April?'],
  ['Mr Attar', '⚠ **The plater is nine years old and it has broken twice.** ⚠ **That is not a one-off, it is a frequency** — **and a frequency stripped out of a figure is the commonest dishonest adjustment there is.**'],
  ['Nour', 'So April stays in.'],
  ['Mr Attar', '⚠ **April stays in the figure and gets a sentence.** ⚠ **It is a blip, which is a thing you explain, and not a one-off, which is a thing you remove.** **And the difference between those two words is about four million.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A one-off, and what is not one**',
  table(['', 'The test', 'Here'], [
    ['⚠ **a one-off**', '⚠ **it happened for a reason that has gone, and it will not happen again**', '⚠ **the Homs clearance** — **the store closed, the stock was cleared once, there is no Homs store**'],
    ['⚠ **not a one-off**', '⚠ **it will happen again at some rate** — **a frequency, not an event**', '⚠ **the plater** — **nine years old and broken twice.** **It stays in, and gets a sentence**'],
    ['**a blip**', '**a thing you explain**', '**April, with the eleven days attached**'],
    ['**a one-off**', '**a thing you remove, and say you removed**', '⚠ *excluding the clearance of the Homs stock in the base year, eighteen*'],
  ], [1.4, 2.9, 3.3]),
  '⚠ **Strip out a one-off that flatters you exactly as you would one that does not.** ⚠ **Finding a one-off in the base year and not mentioning it because mentioning it helps you is a decision about presentation**, **and a reader who finds it later reads every other figure as presented too.**',
  '⚠ **Give both figures and say which is which.** ⚠ *Fifteen per cent a year; excluding the clearance of the Homs stock in the base year, eighteen.* **Nineteen words, and there is nothing left to allege in either direction.**',
  '⚠ **The test is two questions: did it happen for a reason that has gone, and will it not happen again?** **Both, not either.**',
  '⚠ **A frequency is not a one-off, and a frequency stripped out of a figure is the commonest dishonest adjustment there is.** ⚠ **A press nine years old that has broken twice will break again** — **it stays in the figure.**',
  '⚠ **Keep *blip* and *one-off* apart.** ⚠ **A blip is a thing you explain; a one-off is a thing you remove and declare.** **Confusing them in this paper is worth about four million.**',
  '**Practise:** Take three unusual items in your figures. Apply both questions to each and decide: remove and declare, or keep and explain.',
  '**Useful phrases:**  excluding X, the figure is  ·  stripping out  ·  a reason that has gone  ·  that is a frequency, not an event  ·  it stays in and gets a sentence',
  '**Pronunciation – an exclusion as part of the figure.** 🔊 **Track 8.8** Listen twice. ⚠ **The first says *fifteen per cent; excluding the Homs clearance, eighteen* as one unit, with a short semicolon pause.** ⚠ **The second says the second half after a long pause, as a correction.** **As a correction it sounds like a retreat; as one unit it is one fact with two measurements.** Say it four times as one unit.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an unusual item; B applies the two questions.'));
out.push(dlg(null, [
  ['A', 'The rate is __________. If I take __________ out it is __________.'],
  ['B', '⚠ **So the honest figure is the __________ one. Were you going to mention it?**'],
  ['A', 'No, because __________.'],
  ['B', '⚠ **Then give both and say which is which. Now the test. Did it happen for a reason that has gone?**'],
  ['A', '__________.'],
  ['B', '⚠ **And will it not happen again?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then it is a __________. And __________ — is that a one-off or a frequency?**'],
  ['A', '⚠ **A frequency. It stays in and gets a sentence.**'],
]));
out.push(table(['Role card 1 — the one-off that flatters you', 'Role card 2 — the frequency dressed as an event'], [[
  '⚠ **A has found a 6.1 million clearance in the base year and the adjustment raises the growth rate from fifteen to eighteen.** ⚠ **A does not want to mention it, because an adjustment that helps you looks arranged.** ⚠ **B\'s answer: not mentioning it is also an arrangement, and the only version with nothing left to allege is both figures with their labels.**',
  '⚠ **A wants to strip out the April plater stoppage as a one-off.** ⚠ **B asks how old the press is and how many times it has broken.** **Nine years, twice.** ⚠ **So it will happen again at some rate, which makes it a frequency** — **and a frequency stripped out of a figure is the commonest dishonest adjustment there is.** **April stays in and gets a sentence.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two figures with their labels. ⚠ Then write which item was kept, and the two questions that kept it in.'));
out.push(PHRASE_CARD(['excluding X, the figure is', 'both figures, labelled', 'a reason that has gone', 'a frequency, not an event', 'it stays in with a sentence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** unusual items inside your figures. Decide each.'));
out.push(table(['The item', 'A reason that has gone?', 'Will it not happen again?', 'Remove and declare, or keep and explain'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.4, 1.4, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The item is _______. It happened because _______, which has _______. It _______ happen again. So I will _______, and the two figures are _______ and _______._'));
out.push(p('**Listener task:** count how many items were frequencies rather than one-offs. ⚠ Then ask how many of those had been stripped out of a figure by somebody already, and expect at least one.'));
out.push(p('**Board clinic:** your teacher writes three adjusted figures on the board — look for a frequency stripped out, and an adjustment made without being declared. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FOUR ADJUSTMENTS, AND THE TWO I HAVE NOT MADE. 18 May. N. Mansour. Working note, appendix 4.**',
  table(['The item', 'Reason gone?', 'Will not recur?', 'Decision'], [
    ['**the Homs stock clearance, 6.1 million, in the base year**', '⚠ **yes** — **the store closed in 2021**', '⚠ **yes** — **there is no Homs store**', '⚠ **removed, and declared: the rate goes from fifteen to eighteen**'],
    ['**the two export accounts, on sixty-day terms**', '⚠ **no** — **they are current customers and we want more of them**', '⚠ **no**', '⚠ **kept, and the series given twice: 46/51/58 and, without them, 46/47/48**'],
    ['**the April plater stoppage, eleven days**', '⚠ **no** — **the press is nine years old and has broken twice**', '⚠ **no** — **that is a frequency**', '⚠ **kept, and explained in one sentence**'],
    ['**the Baghdad Street opening margin, first seven months**', '⚠ **yes** — **a new counter trades thin while it fills**', '⚠ **no** — **we intend to open more**', '⚠ **kept, and named as the cause of the 1.6-point fall**'],
  ], [2.6, 2.1, 1.9, 3.1]),
  '⚠ **Three of the four fail the test and one passes, which is the normal proportion and is worth saying in the note.** **Everything in a set of figures looks unusual when you are looking for reasons**, ⚠ **and the two questions exist to stop a writer removing the four items that happen to be inconvenient.**',
  '⚠ **The fourth row is the interesting one, because it passes the first question and fails the second.** **A new counter does trade at a thin margin while it fills, and that reason has gone for Baghdad Street.** ⚠ **But we intend to open more counters, so the item will recur** — **and an adjustment that assumes we will never do again the thing we are asking the bank to fund is not an adjustment, it is an argument against the application.**',
  '⚠ **The second row is kept and given twice, which is the compromise this unit is built on.** **46/51/58 is the figure; 46/47/48 is the figure without the two export accounts.** ⚠ **Both are printed and neither is called the real one** — **because the committee is lending against the receivables as they actually are, and it is also entitled to know that the collection performance has not moved.**',
  '⚠ **And the two adjustments I have NOT made are the ones a reader will think of.** **I have not restated 2023 for the stock valuation change, because there was none.** ⚠ **And I have not annualised the four months of 2026 we have, because four months of a seasonal trade annualised is a figure that means nothing** — **and if the committee wants them, they are at appendix 5 as four months.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the four items passed the test, and why is that proportion worth stating?'));
out.push(item('2', 'Which row passes one question and fails the other, and what follows?'));
out.push(item('3', 'What two adjustments were not made, and why not?'));
out.push(box('Writer\'s box', [
  '**Adjustments — four parts:** **a table of *item · reason gone? · will not recur? · decision*** → ⚠ **the proportion that failed** → ⚠ **the row that passes one question and fails the other** → ⚠ **and the adjustments you did NOT make.**',
  '⚠ **State how many items failed the test.** ⚠ **Three of four is the normal proportion** — **and saying so tells a reader that the two questions were applied to everything and not only to the items you wanted out.**',
  '⚠ **Watch the row that passes the first question and fails the second.** ⚠ **A new counter\'s thin margin has a reason that has gone, and we intend to open more counters** — **so an adjustment for it assumes we will never again do the thing we are asking the bank to fund.**',
  '⚠ **Where a series is contested, print it twice and call neither the real one.** ⚠ **46/51/58 and 46/47/48.** **The lender is lending against the receivables as they are, and is also entitled to know the collection has not moved.**',
  '⚠ **And list the adjustments you did not make, especially the ones a reader will think of.** ⚠ **No restatement for a stock-valuation change, because there was none; no annualising of four months of a seasonal trade** — **with the four months at an appendix in case he wants them.**',
  '⚠ **Never annualise part of a seasonal year.** ⚠ **Four months of a trade with a seasonal pattern, multiplied by three, is a figure that means nothing** — **and the reader who multiplies it back finds out that you knew.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the adjustments note for a set of figures at your work (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ ADJUSTMENTS, AND THE ______________ I HAVE NOT MADE. ______________. Working note.**   **______________** | ⚠ **yes** — **______________** | ⚠ **yes** — **______________** | ⚠ **removed, and declared: ______________**   **______________** | ⚠ **no** — **______________** | ⚠ **no** | ⚠ **kept, and given twice: ______________ and ______________**   **______________** | ⚠ **no** — **______________** | ⚠ **no** — **that is a frequency** | ⚠ **kept, and explained in one sentence**   **______________** | ⚠ **yes** — **______________** | ⚠ **no** — **______________** | ⚠ **kept, and named as the cause of ______________**   ⚠ **______________ of the ______________ fail the test and ______________ passes, which is the normal proportion.** ⚠ **The two questions exist to stop a writer removing the items that happen to be inconvenient.**   ⚠ **The ______________ row passes the first question and fails the second**, **and ______________.**   ⚠ **And the adjustments I have NOT made: ______________, because ______________; and ______________, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both questions applied to every item, not only the removed ones', ''],
  ['The proportion that failed the test, stated', ''],
  ['A removal declared, with both figures given', ''],
  ['A frequency kept, and named as a frequency', ''],
  ['The adjustments not made, with reasons', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their removed item and both figures. ⚠ The class applies the two questions to it — and where the second answer is *it might*, the item goes back in.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an adjustment made at your work that nobody declared (**200 to 240 words**). Say what was taken out of what figure, who took it out, whether it was a one-off or a frequency, who found out and when, and what the undeclared version was used to argue.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the item a one-off or a frequency?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the item a frequency? Usually two of three — ⚠ **and in those two the adjusted figure is still being quoted, because an adjustment that was never declared cannot be withdrawn.**'));
out.push(box('Homework', ['Write your final text. Then take one figure you report monthly, find the most unusual thing inside it, and apply both questions to it in writing (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.5 =======================
out.push(pb());
out.push(h2('8.5  The round number and the spurious precision'));
out.push(p('**Function:** choosing how precise a figure should be   ·   **Grammar:** _about forty million · 148.2 million · to the nearest hundred thousand_   ·   **Pronunciation:** a rounded figure said without hedging'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a figure at your work to the precision you normally use. ⚠ Then say how precisely it is actually known.'));
out.push(p('**b**  Which claims more than it knows? _We expect 173.6 million next year. · We expect about 170 million next year._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say a decimal place on a forecast tells a banker?   **A** that you are careful   **B** that you do not know the difference between a measurement and a guess   **C** nothing'));
out.push(p('**b**  Listen again. **1** What rule do they settle on for actuals and for forecasts? **2** What does he say about the forty million?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.9  "Precision is a claim about method"', [
  ['Nour', 'The forecast says we expect 173.6 million next year.'],
  ['Mr Ayoub', '⚠ **Point six. Where did the point six come from?**'],
  ['Nour', 'From the model. Fifteen per cent on 148.2 and then the Beirut accounts added.'],
  ['Mr Ayoub', '⚠ **So the point six is arithmetic on a guess.** ⚠ **A decimal place on a forecast tells a banker that we do not know the difference between a measurement and a guess** — **which is the one thing about us he is actually assessing.**'],
  ['Nour', 'Then: about 170.'],
  ['Mr Ayoub', '⚠ **About 170. And the 148.2 stays as 148.2, because that one is measured and audited.** ⚠ **Precision is a claim about method, and the claim has to be true.**'],
  ['Nour', 'So actuals precise and forecasts round.'],
  ['Mr Ayoub', '⚠ **Actuals to the nearest hundred thousand, which is one decimal in millions, and the same rounding in every document.** ⚠ **Forecasts to the nearest ten million, with *about* in front.** **Write both rules at the top of the appendix so nobody has to guess what we meant.**'],
  ['Nour', 'And the facility itself. Forty million.'],
  ['Mr Ayoub', '⚠ **Forty million exactly, with no *about* and no *approximately*.** ⚠ **It is not an estimate, it is a request.** **A man asking for about forty million is a man who has not decided what he needs, and the committee will decide for him.**'],
  ['Nour', 'And the debtor days? 58.1.'],
  ['Mr Ayoub', '⚠ **58. A tenth of a day is eight hours and nobody measures receivables to eight hours.** ⚠ **The decimal does not make it more accurate, it makes the reader wonder what else we have dressed up.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**How precise, and why**',
  table(['', 'Rule', 'Here'], [
    ['⚠ **an actual**', '⚠ **as measured** — **and the same rounding in every document**', '**148.2 million, to the nearest hundred thousand**'],
    ['⚠ **a forecast**', '⚠ **round, with *about* in front**', '⚠ *about 170 million* — **not 173.6, which is arithmetic on a guess**'],
    ['⚠ **a request**', '⚠ **exact, with no hedge at all**', '⚠ **forty million** — **not *about* forty: it is not an estimate, it is a request**'],
    ['⚠ **a ratio**', '**to the precision anybody measures it**', '⚠ **58 debtor days, not 58.1** — **a tenth of a day is eight hours**'],
  ], [1.3, 2.9, 3.4]),
  '⚠ **Precision is a claim about method, and the claim has to be true.** ⚠ **A decimal place on a forecast tells a reader that you do not know the difference between a measurement and a guess** — **which, in a lending decision, is the thing he is assessing.**',
  '⚠ **Round a forecast and say *about*.** **_About 170_ is honest and shorter.** ⚠ **_173.6_ is fifteen per cent applied to an audited figure and then dressed in a decimal it did not earn.**',
  '⚠ **Never hedge a request.** ⚠ **Forty million, with no *about* and no *approximately*** — **a man asking for about forty million has not decided what he needs, and the committee will decide for him.**',
  '⚠ **A decimal on a ratio nobody measures that finely subtracts credibility rather than adding accuracy.** ⚠ **58.1 debtor days claims a measurement to eight hours**, **and the reader wonders what else has been dressed up.**',
  '⚠ **And write your rounding rules down, at the top of the appendix.** ⚠ **Actuals to the nearest hundred thousand; forecasts to the nearest ten million with *about*** — **so that nobody has to guess what you meant, and so that 8.1\'s fault (one figure rounded two ways) cannot happen.**',
  '**Practise:** Take four figures. Decide the precision of each by its kind — actual, forecast, request, ratio — and write the rule you used.',
  '**Useful phrases:**  to the nearest  ·  about 170  ·  forty million, exactly  ·  precision is a claim about method  ·  nobody measures it that finely',
  '**Pronunciation – a rounded figure without hedging.** 🔊 **Track 8.10** Listen twice. ⚠ **The first says *forty million* falling to a full stop.** ⚠ **The second says *forty million?* with a rise at the end.** **Risen, it is a question about whether forty is allowed; fallen, it is a request.** Say it four times falling.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a figure; B asks where the precision came from.'));
out.push(dlg(null, [
  ['A', 'We expect __________ next year.'],
  ['B', '⚠ **Where did the __________ come from?**'],
  ['A', 'From __________ applied to __________.'],
  ['B', '⚠ **So it is arithmetic on a guess. What does the decimal tell a reader?**'],
  ['A', '⚠ **That I do not know the difference between __________ and __________.**'],
  ['B', '⚠ **Say it again, rounded.**'],
  ['A', 'About __________.'],
  ['B', '⚠ **And the __________ you are asking for?**'],
  ['A', '⚠ **__________, exactly. It is not an estimate, it is a request.**'],
]));
out.push(table(['Role card 1 — the decimal on the guess', 'Role card 2 — the hedged request'], [[
  '⚠ **A has 173.6 million as next year\'s turnover, got by applying fifteen per cent to an audited 148.2 and adding the Beirut accounts.** ⚠ **B\'s one question: which part of that is measured?** ⚠ **The 148.2 is; the fifteen per cent is not; so the product is a guess wearing a decimal.** ⚠ ***About 170*** — **and the shorter version is the more credible one.**',
  '⚠ **A asks for *about forty million*.** ⚠ **B is the committee and asks whether thirty would do, since A does not seem to know.** ⚠ **A has no answer, because *about* has already conceded that the number is negotiable.** **The request is exact or it is somebody else\'s decision.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four kinds of figure and the precision each takes. ⚠ Then say which of the speaker\'s figures was precise and which was dressed, and how you could tell.'));
out.push(PHRASE_CARD(['to the nearest', 'about 170', 'exactly, no about', 'arithmetic on a guess', 'nobody measures it that finely']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** figures from your work, one of each kind. Decide the precision.'));
out.push(table(['The figure', 'Actual · forecast · request · ratio', 'The precision I will use', 'The rule I used'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.6, 1.6, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The figure is _______. It is a _______, so it goes to _______. The rule is _______. And the one I had dressed up was _______._'));
out.push(p('**Listener task:** count how many forecasts carried a decimal place. ⚠ Then ask how many requests carried the word *about*, and name what that word concedes.'));
out.push(p('**Board clinic:** your teacher writes three figures on the board — look for a decimal on a forecast, and *approximately* in front of an amount being asked for. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ROUNDING AND PRECISION IN THIS APPLICATION. 20 May. N. Mansour. Appendix 1, first page — the conventions.**',
  '⚠ **This appendix exists because the same figure appeared as 148.2 in one draft and 148 in another, and both drafts had gone out.** **The conventions below apply to every figure in the application and in all four appendices.**',
  table(['Kind of figure', 'Precision', 'Example', 'Why'], [
    ['**an audited actual**', '⚠ **to the nearest hundred thousand**', '**148.2 million**', '⚠ **it is measured, and the accounts carry it to that precision**'],
    ['**a calculated ratio**', '⚠ **whole numbers**', '**58 debtor days**', '⚠ **nobody measures receivables to a tenth of a day, which is eight hours**'],
    ['**a forecast**', '⚠ **to the nearest ten million, with *about***', '⚠ ***about 170 million***', '⚠ **fifteen per cent applied to an audited figure is a guess, and a decimal would dress it**'],
    ['**the amount requested**', '⚠ **exact, no hedge**', '⚠ **40 million**', '⚠ **it is a request and not an estimate; *about* concedes that it is negotiable**'],
    ['**a percentage**', '**one decimal**', '**20.1 per cent, 6.2 per cent**', '**the margin moves within a point, so the decimal is doing work**'],
  ], [1.7, 2.1, 1.6, 3.1]),
  '⚠ **The one line in this table that will be argued with is the forecast.** **Mr Haddad\'s own form has a box for next year\'s turnover and the box is wide enough for a decimal.** ⚠ **We are putting *about 170* in it, in words, and a committee that wanted a point in there can ask** — **and will get the method rather than a number, which is the honest answer and the one we would rather give in writing than on a telephone.**',
  '⚠ **The percentage line goes the other way and it is worth saying why.** **One decimal on a margin is not precision for its own sake: the margin moved 1.6 points over three years, so the decimal is the difference between 20.1 and 19.8** — ⚠ **and a table of margins rounded to whole numbers would show 21, 20, 20 and hide the recovery entirely.**',
  '⚠ **And the request line is the one that matters most and took the longest to agree.** **Forty million, exact, in every place it appears.** ⚠ **Mr Ayoub\'s sentence, which is in the file: a man asking for about forty million has not decided what he needs, and the committee will decide for him.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does this appendix exist at all?'));
out.push(item('2', 'Which line goes the other way, and what would whole numbers hide?'));
out.push(item('3', 'What is the argument for an exact request?'));
out.push(box('Writer\'s box', [
  '**A rounding convention — four parts:** ⚠ **why the appendix exists** → **a table of *kind · precision · example · why*** → ⚠ **the line that will be argued with** → ⚠ **and the line that goes the other way.**',
  '⚠ **Say why the conventions exist, and name the fault that produced them.** ⚠ *The same figure appeared as 148.2 in one draft and 148 in another, and both had gone out.* **A convention with a reason attached is followed; one without is a style note.**',
  '⚠ **Decide precision by the KIND of figure and not by the figure.** ⚠ **Audited actual, calculated ratio, forecast, request, percentage** — **five kinds, five rules, and the rules are not in order of size.**',
  '⚠ **Keep a decimal where it is doing work and drop it where it is dressing.** ⚠ **A margin that moved 1.6 points over three years needs its decimal** — **whole numbers would print 21, 20, 20 and hide the recovery.** **A forecast does not.**',
  '⚠ **Name the line a reader will argue with, before he does.** ⚠ **The bank\'s form has a wide box for next year\'s turnover and we are putting three words in it** — **and saying so in the appendix turns a refusal into a method.**',
  '⚠ **And never hedge the amount you are asking for.** ⚠ **Exact, in every place it appears** — **because *about* concedes that the number is negotiable before anybody has negotiated.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the rounding conventions for a document of yours (**80 words or more**). Use the frame.'));
out.push(p('**ROUNDING AND PRECISION IN ______________. ______________. The conventions.**   ⚠ **This note exists because ______________.**   **______________** | ⚠ **______________** | **______________** | ⚠ **______________**   **______________** | ⚠ **______________** | **______________** | ⚠ **______________**   **______________** | ⚠ **______________, with *about*** | ⚠ **______________** | ⚠ **______________**   **the amount requested** | ⚠ **exact, no hedge** | ⚠ **______________** | ⚠ **it is a request and not an estimate**   ⚠ **The one line that will be argued with is ______________.** **______________, and a reader who wants ______________ can ask** — ⚠ **and will get the method rather than a number.**   ⚠ **The ______________ line goes the other way:** **______________ is not precision for its own sake**, ⚠ **because ______________ would hide ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The fault that produced the conventions, named', ''],
  ['Precision decided by the kind of figure, not its size', ''],
  ['A decimal kept where it is doing work', ''],
  ['The line a reader will argue with, named first', ''],
  ['The request exact, in every place it appears', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their forecast line. ⚠ The class asks which part of the forecast was measured — and where any of it is, that part keeps its precision and the rest does not.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a figure at your work that is quoted more precisely than it is known (**200 to 240 words**). Say what it is, how it is produced, what precision it is quoted to, what precision it deserves, and what the extra digits have been used to suggest.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _which part of it was measured?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the over-precise figure a forecast or a target? Usually all three — ⚠ **and in two of three the precision was inherited from a spreadsheet and nobody chose it at all.**'));
out.push(box('Homework', ['Write your final text. Then write the rounding rule for each kind of figure you use, and check one document of yours against it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.6 =======================
out.push(pb());
out.push(h2('8.6  The figure the reader will check'));
out.push(p('**Function:** reconciling your figure to the document the reader already has   ·   **Grammar:** _X per the accounts, less Y, gives Z · the difference is accounted for by_   ·   **Pronunciation:** a reconciliation read as a short list'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a figure you send out. ⚠ Then say what document the reader already has that shows the same thing differently.'));
out.push(p('**b**  Which does a bank already know? _Our sales were 148.2 million. · The money that came through the account was 138.4 million._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say the committee has that Nour had forgotten?   **A** the accounts   **B** three years of the bank statement, which shows lodgements and not sales   **C** the Tannous agreement'));
out.push(p('**b**  Listen again. **1** What are the two parts of the 9.8 million difference? **2** What does she say about a difference the reader finds first?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.11  "They have three years of your bank statement"', [
  ['Hala', 'Your first sentence says turnover of 148.2 million. What does the committee already have in front of it?'],
  ['Nour', 'The audited accounts.'],
  ['Hala', '⚠ **And three years of your bank statement**, **because the account is with them.**'],
  ['Nour', '…Which shows what came in. Lodgements.'],
  ['Hala', '⚠ **138.4 million last year.** ⚠ **So the committee has a figure that is 9.8 million below yours, from its own records, and you have not mentioned it.**'],
  ['Nour', 'They are different things. Sales are not receipts.'],
  ['Hala', '⚠ **You know that and I know that, and the committee knows it too** — **and it will still want the 9.8 explained, because that is its job.** ⚠ **The question is whether it reads your explanation or writes its own.**'],
  ['Nour', 'So I give the bridge.'],
  ['Hala', '⚠ **Two lines. Receivables rose 5.3 million over the year** — **so that much of the sales has not been paid yet.** ⚠ **And 4.5 million of the Beirut customers pay into the Beirut account, which is not with you.** **5.3 and 4.5 is 9.8.**'],
  ['Nour', 'It adds exactly.'],
  ['Hala', '⚠ **Then say so: *the difference is accounted for in full.*** ⚠ **A bridge that adds up exactly is the strongest four lines in any paper of figures**, **because it proves two separate records agree.**'],
  ['Nour', 'And the Beirut account — do I want to raise that with them?'],
  ['Hala', '⚠ **They can see 4.5 million that is not arriving.** ⚠ **A difference the reader finds first is a question about you; a difference you hand him with its arithmetic is a demonstration that you read your own statements.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The bridge**',
  table(['', 'What it is', 'Here'], [
    ['⚠ **your figure**', '**what you are telling him**', '**sales 148.2 million**'],
    ['⚠ **his figure**', '⚠ **what he already has from his own records**', '⚠ **lodgements through the account, 138.4 million**'],
    ['⚠ **the gap**', '**your figure minus his, named**', '**9.8 million**'],
    ['⚠ **the bridge**', '⚠ **the items that make up the gap, adding exactly**', '⚠ **receivables up 5.3 · Beirut receipts elsewhere 4.5** — **5.3 and 4.5 is 9.8**'],
    ['⚠ **the sentence**', '⚠ *the difference is accounted for in full*', '**four lines, and two records now agree**'],
  ], [1.3, 2.6, 3.5]),
  '⚠ **Ask what document the reader already has.** ⚠ **A bank has three years of your statement** — **a customer has your invoices, an auditor has your ledger, a tax office has your returns.** **Every one of them shows the same trade measured a different way.**',
  '⚠ **Name his figure in your paper, before he does.** ⚠ **Not because it contradicts yours** — **it does not** — **but because he will reconcile the two whether you help him or not, and the only question is whose arithmetic he uses.**',
  '⚠ **Make the bridge add exactly.** ⚠ **5.3 and 4.5 against 9.8.** **A bridge that adds up is the strongest four lines in any paper of figures, because it proves that two independent records agree** — **and no amount of prose does that.**',
  '⚠ **Say so.** ⚠ *The difference is accounted for in full.* **Six words, and they are only available to a writer whose bridge adds up.**',
  '⚠ **And hand him the uncomfortable item yourself.** ⚠ **4.5 million of receipts going to an account that is not his is visible to him already** — **found by him it is a question about you; handed over with its arithmetic it is a demonstration that you read your own statements.**',
  '**Practise:** Take a figure you send out. Name the document the reader already has, compute the gap, and build a bridge that adds exactly.',
  '**Useful phrases:**  what does he already have?  ·  per the accounts, less  ·  the difference is accounted for in full  ·  two records agree  ·  a difference he finds first',
  '**Pronunciation – a reconciliation as a short list.** 🔊 **Track 8.12** Listen twice. ⚠ **The first says *receivables up 4.3; Beirut receipts 4.5; total 8.8* as three equal items and a sum.** ⚠ **The second explains each one as it goes.** **Explained, it sounds defensive; listed, it sounds like arithmetic.** Say the three items and the sum four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B asks what the reader already has; A builds the bridge.'));
out.push(dlg(null, [
  ['B', '⚠ **Your figure is __________. What does the reader already have?**'],
  ['A', '__________.'],
  ['B', '⚠ **Which shows __________ and not __________. What is his number?**'],
  ['A', '__________.'],
  ['B', '⚠ **So there is a gap of __________ and you have not mentioned it. Build the bridge.**'],
  ['A', '__________ of __________, and __________ of __________.'],
  ['B', '⚠ **Does it add exactly?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then write the six words.**'],
  ['A', '⚠ **The difference is accounted for in full.**'],
]));
out.push(table(['Role card 1 — the bridge that adds up', 'Role card 2 — the item you would rather not raise'], [[
  '⚠ **Sales 148.2; lodgements through the bank 138.4; gap 9.8.** ⚠ **Receivables rose 5.3 and the Beirut customers pay 4.5 into another bank.** ⚠ **5.3 and 4.5 is 9.8 exactly** — **and B\'s job is to make A say the six words, because a writer whose bridge adds up and who does not say so has thrown away the only sentence in the paper that proves two records agree.**',
  '⚠ **A does not want to mention the Beirut account, which is with another bank.** ⚠ **B points out that 4.5 million of receipts not arriving is already visible on their own statement**, **and that the committee reconciles whether A helps or not.** ⚠ **Found by them it is a question about A; handed over with its arithmetic it is evidence that A reads the statements.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two figures, the gap, and the items of the bridge. ⚠ Then check the arithmetic yourself, and say what the writer may claim if it adds.'));
out.push(PHRASE_CARD(['what does he already have?', 'lodgements, not sales', 'the gap is', 'accounted for in full', 'two records agree']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** figures you send out. Build a bridge for each.'));
out.push(table(['My figure', 'The document the reader has', 'His figure and the gap', 'The bridge — does it add?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.8, 1.6, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My figure is _______. The reader already has _______, which shows _______. His figure is _______, so the gap is _______. The bridge is _______ and _______, which adds to _______._'));
out.push(p('**Listener task:** count how many bridges added exactly at the first attempt. ⚠ Then ask what the remainder was in the others, and expect it to be a real thing nobody had noticed.'));
out.push(p('**Board clinic:** your teacher writes three reconciliations on the board — look for a bridge with a *balance* or *other* line in it, and a gap named without any items. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**SALES AND LODGEMENTS: THE BRIDGE. 22 May. N. Mansour. Facility application, appendix 2.**',
  '⚠ **The committee has three years of our statement and will compare it with the sales figures in box 7. The two do not match and are not meant to. This appendix is the arithmetic.**',
  table(['Year to 31 December', '2023', '2024', '2025'], [
    ['**sales per the audited accounts, page 4**', '**112.4**', '**131.0**', '**148.2**'],
    ['**lodgements through your account**', '**108.9**', '**123.4**', '**138.4**'],
    ['⚠ **difference**', '**3.5**', '**7.6**', '**9.8**'],
    ['**movement in receivables (accounts, page 5)**', '**3.5**', '**4.1**', '**5.3**'],
    ['⚠ **receipts to the Beirut account (opened May 2024)**', '⚠ **nil**', '**3.5**', '**4.5**'],
    ['⚠ **bridge total**', '⚠ **3.5**', '⚠ **7.6**', '⚠ **9.8**'],
  ], [3.2, 1.3, 1.3, 1.3]),
  '⚠ **The difference is accounted for in full in all three years.** **There is no balancing item and no line called *other*.**',
  '⚠ **On the Beirut account, which the committee can see is not with you.** **It was opened in May 2024 because the two export customers pay in Lebanese banking hours and a Damascus clearing added four days to every receipt.** ⚠ **It holds nothing: it is swept to you weekly, and the sweeps are on your statement under *transfer, Beirut*.** ⚠ **Which means the 4.5 million is on your statement twice** — **once as a sweep and once not as a lodgement** — **and that is the sort of thing a committee finds in nine minutes and remembers for nine years.**',
  '⚠ **The 2023 line is the one I checked three times, because the two numbers are the same.** **The difference that year is 3.5 and the receivables movement is 3.5.** ⚠ **It is a coincidence to one decimal place** — **the real figures are 3.52 and 3.47** — **and I have left both at 3.5 because our convention is one decimal and changing it for one cell to avoid looking neat would be worse.**',
  '⚠ **And the sentence I will not write is that the gap proves our collection is weakening.** **Lodgements rose more slowly than sales in both years, which is what any growing book with a lengthening period does arithmetically** — ⚠ **and the whole of the lengthening is the two export accounts on sixty-day terms, which 8.4 keeps in the figure and prints twice at 46/51/58 and 46/47/48.** **The gap is arithmetic and not a finding.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the Beirut account for, and why is the 4.5 million on the statement twice?'));
out.push(item('2', 'Why did the writer check the 2023 line three times, and what did she decide?'));
out.push(item('3', 'What sentence will she not write, and what is the gap actually made of?'));
out.push(box('Writer\'s box', [
  '**A bridge — four parts:** ⚠ **your figure and his, side by side for every year** → **the difference, then the items, then the total** → ⚠ **the uncomfortable item, explained in full** → ⚠ **and the coincidence you decided not to tidy.**',
  '⚠ **Build the bridge for every year, not only the last.** ⚠ **Three years that each add exactly is a different claim from one year that does** — **it says the two records have agreed continuously, which no single reconciliation can.**',
  '⚠ **Have no balancing item and no line called *other*.** ⚠ **A bridge with an *other* line in it is not a bridge, it is a gap with a name** — **and a reader goes straight to it.**',
  '⚠ **Explain the uncomfortable item completely, including the part that looks worse.** ⚠ **The Beirut sweeps mean the 4.5 million is on his statement twice, once as a sweep and once as an absence** — **and that is the kind of thing a committee finds in nine minutes and remembers for nine years.**',
  '⚠ **Declare a coincidence rather than tidying it.** ⚠ **Two cells that read 3.5 and 3.5 are 3.52 and 3.47** — **and changing the convention for one cell to avoid looking neat is worse than looking neat.**',
  '⚠ **And refuse the conclusion your own bridge seems to offer.** ⚠ **Lodgements rising more slowly than sales is what a growing book with a lengthening period does arithmetically** — **it is not evidence that collection has weakened, and the lengthening itself has a stated cause.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Build a bridge between a figure of yours and the reader\'s own record (**80 words or more**). Use the frame.'));
out.push(p('**______________: THE BRIDGE. ______________. Appendix ______________.**   ⚠ **The reader has ______________ and will compare it with ______________. The two do not match and are not meant to. This appendix is the arithmetic.**   **______________** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | **______________**   ⚠ **difference** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | **______________**   ⚠ **bridge total** | ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **The difference is accounted for in full.** **There is no balancing item and no line called *other*.**   ⚠ **On ______________, which the reader can see.** **It exists because ______________.** ⚠ **Which means ______________** — **and that is the sort of thing a reader finds in nine minutes.**   ⚠ **And the sentence I will not write is ______________**, **because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The reader\'s own figure named, beside yours', ''],
  ['A bridge for every period, not only the latest', ''],
  ['No *other* line and no balancing item', ''],
  ['The uncomfortable item explained, including the worse part', ''],
  ['A conclusion the bridge seems to offer, refused', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their bridge items and the total. ⚠ The class does the arithmetic aloud — and where it does not add, the missing amount is named rather than absorbed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a reader reconciled two of your figures before you did (**200 to 240 words**). Say what the two documents were, what the difference was, who found it, what the explanation turned out to be, and what it cost to give the explanation second instead of first.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did the explanation turn out to be innocent?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the explanation innocent? Usually all three — ⚠ **and in all three the cost was not the difference but the fortnight spent proving that there was nothing in it.**'));
out.push(box('Homework', ['Write your final text. Then take one figure you send out regularly, find the reader\'s own record of the same trade, and compute the gap (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 8.7 =======================
out.push(pb());
out.push(h2('8.7  Review & Mediate: the figure Mr Haddad will ask for'));
out.push(p('**Function:** giving a figure on the telephone that is worse than the one in the paper   ·   **Review:** period, basis, source · trend and blip · points and bases · the one-off · precision · the bridge'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 8 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What three things does every figure carry?',
  '**2** How many points does a trend need, and what do three years give you?',
  '**3** What is the difference between *per cent* and *percentage points*, and when is each right?',
  '**4** What are the two questions that test a one-off, and what fails them?',
  '**5** What precision does a forecast take, and what precision does a request take?',
  '**6** What is a bridge, and what single sentence is only available if it adds up?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Haddad ask for?   **A** the audited accounts   **B** the debtor days this month, not the year-end   **C** a meeting'));
out.push(p('**b**  Listen again. **1** What is the figure, and how does it compare with the paper? **2** Why does he say he asked rather than calculating it himself?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.13  "What are they today?"', [
  ['Mr Haddad', 'The paper is the best one I have had from anybody this year. One question. The debtor days are 58 at December. What are they today?'],
  ['Nour', '⚠ **Sixty-one.**'],
  ['Mr Haddad', '⚠ **You did not have to think about that.**'],
  ['Nour', '⚠ **I calculated it on Tuesday, because it was the question I would have asked.** **Sixty-one at the end of April, on the same basis as the paper** — **closing receivables over the trailing twelve months\' sales.**'],
  ['Mr Haddad', '⚠ **And it is worse than the figure in your application.**'],
  ['Nour', '⚠ **Three days worse.** ⚠ **The two export accounts invoice in April and pay in June, so April and May are always the worst two months of our year** — **and April last year was sixty and April the year before was fifty-four.**'],
  ['Mr Haddad', '⚠ **So there is a seasonal pattern in it.**'],
  ['Nour', '⚠ **There is, and it is not in the paper, because three Aprils is three points and I did not want to call it a pattern on three.** ⚠ **The three figures are at appendix 2, page 2, and the committee can call it what it likes.**'],
  ['Mr Haddad', '⚠ **I could have worked the sixty-one out myself from the aged list you attached.**'],
  ['Nour', 'You could.'],
  ['Mr Haddad', '⚠ **Which is why I asked.** ⚠ **I was not finding out what your debtor days are, I was finding out whether you would tell me the worse number on a telephone without a pause.** **The committee meets on Thursday.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the worse figure, on a telephone**',
  table(['What he asks', 'What you give', 'What it tests'], [
    ['⚠ **the figure today, not the one in the paper**', '⚠ **the figure, first, with no preface** — *sixty-one*', '⚠ **whether you knew it before he asked**'],
    ['**nothing — he waits**', '⚠ **the basis, in one clause** — *on the same basis as the paper*', '**whether today\'s figure and the paper\'s are comparable at all**'],
    ['⚠ **is it worse?**', '⚠ *three days worse* — **the comparison said by you, in the direction that is against you**', '⚠ **whether he has to extract it**'],
    ['**why?**', '⚠ **the cause, and the two earlier Aprils** — **sixty and fifty-four**', '⚠ **whether the number is a pattern or an event**'],
    ['⚠ **why is it not in the paper?**', '⚠ **three points is not a pattern, and the three figures are at appendix 2, page 2**', '⚠ **whether you decide what the reader may conclude** — **you do not**'],
  ], [1.9, 3, 2.3]),
  '⚠ **Calculate the question you would ask, before he asks it.** ⚠ **A figure given without a pause proves it was known; the same figure after four seconds proves it was not** — **and he is listening for the four seconds, not for the number.**',
  '⚠ **Give the worse figure first and the reason second.** ⚠ *Sixty-one. Three days worse.* **Reason first is a preface, and a preface in front of a bad number is heard as a reason you had prepared** — **which it is.**',
  '⚠ **Say the comparison yourself, in the direction that is against you.** ⚠ **_Three days worse_ costs nothing to say and everything to have extracted from you.**',
  '⚠ **And where you have declined to draw a conclusion, say where the data is and let the reader draw it.** ⚠ **Three Aprils is three points and 8.2 forbids calling that a pattern** — **so the three figures go in an appendix with a page number, and the committee calls it what it likes.**',
  '⚠ **The thing he is testing is never the figure.** **He can compute your debtor days from the aged list you attached in about four minutes.** ⚠ **He is finding out whether you will say the worse number on a telephone without a pause** — **and that is the only part of a facility application that cannot be written.**',
  '**Practise:** Work out the one figure your reader will ask for that is not in your paper. Calculate it. Then say it, worse first.',
  '**Useful phrases:**  sixty-one  ·  on the same basis as the paper  ·  three days worse  ·  three points is not a pattern  ·  it is at appendix 2, page 2',
  '**Pronunciation – the worse figure said without a pause.** 🔊 **Track 8.14** Listen twice. ⚠ **The first answers *sixty-one* immediately and then stops.** ⚠ **The second pauses, then says *well, about sixty-one, but*.** **The pause and the *but* are the whole of what is being assessed.** Answer four times with no pause and no *but*.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the lender; B has written the paper. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A praises the paper and then asks for one figure that is not in it, and which is worse than the one that is.** ⚠ **A says nothing after the answer and counts the seconds before B explains.** ⚠ **Then A asks the three follow-ups: is it worse, why, and why is it not in the paper?** **A ends by saying what was actually being tested.**',
  '⚠ **B gives the figure, then the basis, then the comparison in the direction against himself, then the cause with two earlier years.** ⚠ **B must not preface.** ⚠ **And for the last question B must say that three points is not a pattern and name the appendix and page** — **not decide for the reader what the three figures mean.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the four parts of the answer in order. ⚠ Then say what was being tested, and at which of the four parts the speaker could have lost it.'));
out.push(PHRASE_CARD(['the figure, first, no preface', 'on the same basis as the paper', 'three days worse', 'three points is not a pattern', 'appendix 2, page 2']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a one-page set of figures. Work out the **two** questions a reader will ask that the page does not answer. Calculate both. Then answer them aloud.'));
out.push(table(['The question I would be asked', 'The figure', 'Is it better or worse than the page?', 'The cause, and two earlier periods'], [['', '', '', ''], ['', '', '', '']], [1.8, 1.1, 1.5, 2.1]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the figures. This is the **eighth** unit of this book, and the unwritten thing is this: ⚠ **a reader with any experience does not ask you for a figure in order to learn the figure, because he can usually compute it from what you have already given him** — **he asks in order to find out, in the second and a half before you answer, whether you knew it, whether you knew it was the worse one, and whether you had decided to say it; and that second and a half is the whole of what a set of figures is for, which is why the paper exists to make the telephone call possible rather than to replace it.**'));
out.push(p('_The question was _______. The figure is _______, which is _______ than the page. The cause is _______, and the two earlier periods were _______ and _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _a stated basis · a base year · a percentage point · a one-off item · a spurious precision · a bridge between two figures_. ⚠ Forty-eight items now, and it runs to Unit 12.'));
out.push(p('**Board clinic:** your teacher writes three answers on the board — look for a reason given before the figure, and a conclusion drawn from three points. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 4)', 10));
out.push(p('⚠ **This unit is Part 4: multiple-choice cloze, fifteen gaps, four options each, and it is the second time in this book.** Read the text and choose the best word for each gap. ⚠ **Part 4 tests collocation and grammar in roughly equal measure, so read the whole sentence each time and not only the gap.**'));
out.push(box(null, [
  '**WHAT A LENDER IS READING FOR — from a bank\'s own guidance to applicants.**',
  'Every set of figures a company sends to a bank is read **(1)** ______ one question in mind: can this business repay. The reader is not interested in the figures **(2)** ______ themselves, and he has no time **(3)** ______ assemble them. He wants a direction, a rate, and an account **(4)** ______ anything that moves against it.',
  'Three faults **(5)** ______ up more often than any others. The first is a figure with no basis: a reader who is not told which twelve months **(6)** ______ meant will choose, and will not say which he chose. The second is a percentage **(7)** ______ base has been lost, so that a figure calculated on quantities is quoted **(8)** ______ it were money. And the third is precision that the method cannot **(9)** ______: a forecast given to one decimal place tells a lender that the writer cannot distinguish a measurement **(10)** ______ a guess.',
  'The remedy in each case is cheap. **(11)** ______ every figure its period, its basis and a page. Round a forecast and **(12)** ______ *about* in front of it. And **(13)** ______ out any one-off item, saying that you have done so, **(14)** ______ the adjustment flatters you or not.',
  'Above all, build the bridge to the reader\'s own records. A reconciliation that adds up exactly is worth more **(15)** ______ any sentence of prose, because it shows that two separate sets of books agree.',
]));
out.push(table(['', 'A', 'B', 'C', 'D'], [
  ['**1**', 'by', 'with', 'in', 'on'],
  ['**2**', 'for', 'in', 'at', 'of'],
  ['**3**', 'for', 'of', 'to', 'in'],
  ['**4**', 'about', 'of', 'for', 'on'],
  ['**5**', 'turn', 'come', 'bring', 'make'],
  ['**6**', 'is', 'be', 'are', 'were'],
  ['**7**', 'whose', 'which', 'that', 'what'],
  ['**8**', 'like', 'so', 'as though', 'even'],
  ['**9**', 'carry', 'hold', 'stand', 'support'],
  ['**10**', 'to', 'from', 'of', 'with'],
  ['**11**', 'Put', 'Set', 'Give', 'Make'],
  ['**12**', 'put', 'place', 'set', 'lay'],
  ['**13**', 'take', 'draw', 'pull', 'strip'],
  ['**14**', 'if', 'whether', 'though', 'when'],
  ['**15**', 'then', 'that', 'than', 'as'],
], [0.6, 1.4, 1.4, 1.6, 1.4]));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a report, 120 to 140 words, 20 marks.** **Four content points, all four present, and a report takes headings.** ⚠ **This is the fourth Part 2 in the book; the odd units take Part 1.**',
  '⚠ **A report of figures takes three short headings and nothing else:** ⚠ **_The figures_ · _The series that has moved against us_ · _What I recommend_.** **Headings cost six words and they are what makes 130 words readable.**',
  '⚠ **In 130 words you can carry four figures and no more.** **Choose them: a direction with a rate, the one that moved against you, the adjustment, and the figure the reader already has.** ⚠ **A fifth figure costs a sentence of explanation and you do not have one.**',
  '⚠ **Give every figure its period in the same clause.** **_In the year to 31 December_ is six words and it is not optional** — ⚠ **and in a report the examiner is reading for exactly the kind of precision 8.1 teaches.**',
  '⚠ **Part 4 tip, for the cloze above.** **Eight of the fifteen gaps are fixed phrases you either know or do not** — *with one question in mind · interested in the figures for themselves · distinguish X from Y · worth more than* — ⚠ **and the other seven are grammar.** **Do the grammar ones first: they are recoverable from the sentence, and the phrases are not.**',
  '⚠ **And gap 9 is the one to look at twice.** **Three of its four options collocate with something** — *carry a figure · hold a view · stand up to scrutiny* — ⚠ **but only one of them takes *precision* as its object.** **Read the gap with its own noun, not with a noun you expect.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Your manager has asked for a short report on the figures a lender or a customer has requested. Write the report (**120 to 140 words**). Include **the figures, with a direction and a rate** · **the series that has moved against you** · **one adjustment, declared** · and **what you recommend**.'));
out.push(p('**______________**   ______________ rose from ______________ to ______________ in the ______________, which is ______________ a year compound. ⚠ **Excluding ______________, ______________.**   **______________**   ⚠ **______________ went ______________, ______________ and ______________, calculated on ______________.** **The cause is ______________.** **Stripping out ______________, ______________.**   **______________**   ⚠ **I recommend ______________**, **because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three headings, and nothing else by way of structure', ''],
  ['A direction with a rate, not a list of figures', ''],
  ['The series that moved against you, named by you', ''],
  ['One adjustment, declared, with both figures', ''],
  ['A period on every figure — and 120 to 140 words', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the figure your reader would ask you for on the telephone (**200 to 240 words**). Say who the reader is, what the figure is, whether it is in anything you have sent, what it is today, how it compares with what you did send, and what you would say first.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then calculate the one figure a reader will ask you for that is not in your last report, and write the four-part answer out loud (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 8 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Turnover rose ___ 112 million to 148 million.   a) of   b) from   c) by',
  '2  The margin fell 1.6 percentage ___.   a) point   b) per cents   c) points',
  '3  ___ the Homs clearance, the rate is eighteen per cent.   a) Excluding   b) Except   c) Exclusive',
  '4  Debtor days ___ calculated on closing receivables.   a) is   b) are   c) was',
  '5  There is no record ___ the base used in 2023.   a) for   b) of   c) about',
  '6  Four months of a seasonal year ___ not be annualised.   a) shall   b) ought   c) should',
  '7  The press is nine years old and ___ broken twice.   a) has   b) have   c) had',
  '8  A figure ___ to one decimal claims a measurement.   a) quote   b) quoting   c) quoted',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 8.15** Listen to a telephone call about a set of figures. Complete the note.   The figure asked for: ______   The figure given: ______   How it compares with the paper: ______   The cause: ______   The two earlier Aprils: ______   Why it is not in the paper: ______   What was actually being tested: ______'));
out.push(p('**C  Reading.** Read the bridge at 8.6 again. What are the two items, do they add exactly, and what single sentence does that allow the writer to use?'));
out.push(p('**D  Writing.** Take a figure from your work. Write its period, basis and source in one sentence; then the direction and compound rate of three periods of it in a second; then one adjustment, declared, in a third (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 8.15  Audio script (read after the check)', [
  ['Mr Haddad', 'The paper is the best one I have had from anybody this year. One question. The debtor days are 58 at December. What are they today?'],
  ['Nour', '⚠ **Sixty-one.**'],
  ['Mr Haddad', '⚠ **You did not have to think about that.**'],
  ['Nour', '⚠ **I calculated it on Tuesday, because it was the question I would have asked.** **Sixty-one at the end of April, on the same basis as the paper.**'],
  ['Mr Haddad', '⚠ **And it is worse than the figure in your application.**'],
  ['Nour', '⚠ **Three days worse.** ⚠ **The two export accounts invoice in April and pay in June, so April and May are always the worst two months of our year** — **and April last year was sixty and April the year before was fifty-four.**'],
  ['Mr Haddad', '⚠ **So why is that not in the paper?**'],
  ['Nour', '⚠ **Because three Aprils is three points, and I did not want to call it a pattern on three.** ⚠ **The three figures are at appendix 2, page 2, and the committee can call it what it likes.**'],
  ['Mr Haddad', '⚠ **I could have worked the sixty-one out myself from the aged list you attached.** ⚠ **Which is why I asked.** **I was not finding out what your debtor days are** — ⚠ **I was finding out whether you would tell me the worse number on a telephone without a pause.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**8.1** give a figure its period, its basis and a page, and use one rounding everywhere',
  '**8.2** write three years as a direction and a rate, and name a blip with its cause',
  '**8.3** write points for a movement, name the hundred, and refuse a percentage off a base of two',
  '**8.4** apply both questions to an unusual item, and keep a frequency in the figure',
  '**8.5** set a precision by the kind of figure, and never hedge a request',
  '**8.6** build a bridge to the reader\'s own record that adds exactly',
  '**8.7** say the worse figure on a telephone, first, with no preface',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 9 — **Somebody Else\'s Draft**: the twelve lines Mr Dallal\'s office sent back, and the four you may not change._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 8 · Student\'s Book');
module.exports = out;
