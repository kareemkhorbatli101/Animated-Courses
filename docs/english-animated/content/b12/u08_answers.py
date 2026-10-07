"""B1.2 Unit 8 - answer key."""
ANSWERS = [
('0B', dict(text='The finance screen and the clinical coding screen. Both are showing the same '
  'Tuesday and the totals differ by about four hundred, because finance counts a day case as '
  'an admission and coding does not. Each is correct inside its own definition, and neither '
  'screen says which definition it is using.')),

('1B', dict(sort={
  'dataset': 'the thing', 'record': 'the thing', 'category': 'the thing',
  'criterion': 'the rule', 'classification': 'the rule', 'boundary': 'the rule',
  'ambiguity': 'the problem', 'overlap': 'the problem', 'abstraction': 'the problem'},
  text='**The one that exists only because of carelessness:** *ambiguity*. A criterion and a '
  'boundary drawn precisely leave none; *the patients* is ambiguous because nobody wrote down '
  'which patients, and the ambiguity is the residue of two rules that were never reconciled.')),

('2A', dict(mcq=['38 to 58', 'nowhere', 'the patients', 'nobody owns the report'],
  text='**Table** — Finance reads *the patients* as everybody with a bed number: 1,740 people, '
  '41 days. Clinical coding reads it as overnight admissions only: 1,340, 47 days. The ward '
  'reads it as whoever was on the board at 08.00: 1,610, 38 days. The regional office reads it '
  'as the coding population but counts from referral received: 1,340, 58 days.\n\n'
  '**Everybody:** sentence 1 (*Patients wait too long* — zero article, generic). '
  '**A group:** sentence 2 (*The patients waited 41 days*). **A type:** sentence 3 '
  '(*A patient waits 41 days*). **One person:** sentence 4 (*The patient waited 41 days*).')),

('3D', dict(text='1 — *(zero)* · 2 The · 3 the · 4 the · 5 a · 6 the · 7 The · 8 the')),

('3E', dict(text='1 Patients are waiting longer. *(zero article — generic)*\n'
  '2 The 1,340 patients in this report waited 41 days. *(definite, with the population named)*\n'
  '3 Every patient is entitled to an interpreter. *(or* A patient is entitled… *as a rule)*\n'
  '4 The patient is not consulted. *(definite singular — the category, formal register)*\n'
  '5 Such patients are excluded. *(pointing back to the previous sentence)*')),

('3H', dict(text='1 — *(zero)* · 2 The · 3 A · 4 The · 5 Such · 6 The *(four departments)* '
  '— accept *The four* · 7 the latter · 8 For')),

('5C', dict(text='1 Whether day cases should be counted as admissions.\n'
  '2 Finance: the tariff is paid on an admission basis, so a day case not counted is a day '
  'case not paid for. Clinical coding: the national standard defines an admission as requiring '
  'an overnight stay, and a local variation would make the hospital\'s returns incomparable '
  'with every other hospital\'s.\n'
  '3 That both positions were correct.\n'
  '4 That each department would keep its own definition for its own purposes, to be reviewed '
  'when a single reporting system arrived. Mr Vergara pointed out that this effectively meant '
  'the hospital had two admission figures.\n'
  '5 That it had always had two admission figures and the meeting had simply written that '
  'down. The force of it is that the ambiguity predates the decision — the minute records a '
  'state of affairs rather than creating one.\n'
  '6 The information manager was to prepare a note setting out both definitions for '
  'circulation to all departments.\n'
  '7 No note was circulated. The single reporting system arrived in 2019 and uses the finance '
  'definition without saying so. The coding definition remains in use for national returns. '
  'Item 7 has not been reviewed.\n'
  '8 Both. The finance definition is in the reporting system; the coding definition is in the '
  'national returns. The system does **not** say which it is using.')),

('5D', dict(text='**on an admission basis** — paid per admission, so the count is the money · '
  '**a local variation** — a definition used here and nowhere else · **incomparable** — not '
  'able to be set beside another hospital\'s figures · **effectively meant** — the practical '
  'consequence, whatever the minute says · **without stating that it does so** — the system '
  'makes a choice and does not declare it, which is the whole finding')),

('5E', dict(text='1 "The patients waited an average of 41 days from referral to first '
  'appointment." It does not say which patients, how they were counted, or from which referral '
  'date.\n'
  '2 Finance 41 days (1,740 people); clinical coding 47 (1,340); the ward 38 (1,610); the '
  'regional return 58 (1,340). The range is 38 to 58 days.\n'
  '3 Nowhere on the page, and nowhere in the report. The regional difference — counting from '
  'referral received rather than referral dated, worth about eleven days — is documented in '
  'the regional guidance and nowhere here.\n'
  '4 Clinical coding\'s population (1,340), with the regional counting rule, giving 58 days. '
  'The headline uses finance.\n'
  '5 "Which patients? — asked 2011, 2016, 2019, and now," in the information manager\'s hand.')),

('6A', dict(sort={
  'specific': 'narrowing', 'particular': 'narrowing', 'certain': 'narrowing',
  'given': 'narrowing', 'any': 'narrowing',
  'as a whole': 'generalising', 'generic': 'generalising',
  'such': 'pointing back', 'the latter': 'pointing back', 'the former': 'pointing back',
  'respective': 'pointing back'},
  text='*Any* narrows in a formula (*any given month*) and generalises in ordinary use (*any '
  'patient may ask*), so expect it in two columns. *Certain* narrows in form and withholds in '
  'fact — it is the one 6C is about.')),

('6B', dict(text='1 aggregate · 2 of · 3 of · 4 question · 5 for · 6 to')),

('6C', dict(text='1 **Certain** — some patients, and the sentence is not saying which, which '
  'is exactly the fault the unit is about. *Particular* would promise to name them; *given* '
  'would make no sense.\n'
  '2 **given** — specified, in a formula: for whichever month you specify. *Certain* would '
  'mean some months and not others; *particular* would mean one named month.\n'
  '3 **particular** — this one as opposed to the other three. *Certain* would be evasive; '
  '*given* would be formulaic.')),

('6D', dict(text='**Welcome:** *The report says the patients waited 41 days. Finance has 41 '
  'and coding has 47.* — **Which patients, exactly?** — *Then we should put the population in '
  'the sentence before this goes to the board.* **Unwelcome:** *The paper is agreed and we are '
  'twenty minutes over. Any final comments?* — **Which patients, exactly?** — *Can we take '
  'that offline?*')),

('6E', dict(clinic={
  '______ patient waits 41 days': 'A — the indefinite singular, meaning a representative type.',
  '______ patient is rarely consulted':
    'The — the definite singular, meaning the category; formal register.',
  '______ departments produced their own figures':
    'The respective — or *The four*; each department its own.',
  'Of the two, ______ is lower': 'the latter — the second of two already named.',
  'For a ______ month, the return is due on the fifth':
    'given — specified, in a formula.',
  '______ patients waited 41 days': 'The — this group, already identified.',
  '______ patients wait too long': '— *(zero article)* — generic; patients in general.',
  '______ patients are excluded': 'Such — of the kind just described.'})),

('7C', dict(text='*It\'s a definition* — one of several. In the 2011 minutes that is the true '
  'one: paragraph 7.4 agrees that both positions are correct, and 7.5 lets both stand. The '
  '2019 reporting system behaves as though the second were true, and says nothing.')),

('12A', dict(text='1 — *(zero)* · 2 The · 3 A · 4 definition · 5 purposes · 6 under · '
  '7 down · 8 of · 9 thinking · 10 is having · 11 — *(zero)* · 12 None')),
]
