# -*- coding: utf-8 -*-
"""Set BAS 001-010 - Build a Sentence - Relative clauses."""

ITEM = {
 'id': 'BAS 001–010', 'task': 'BUILD A SENTENCE', 'time': '10 items · ~6½ minutes',
 'function': 'Family 1 of 12 — relative clauses',
 'payload': {
   'Strategy':   'read the cue first: the reply must answer the question actually asked',
   'Grammar':    'the ten relative-clause structures, ending in the agreement trap',
   'Vocabulary': 'heads that select who, which, where, when or whose',
   'Convention': 'defining versus non-defining, and what the commas are doing',
 },

 'intro': [
   'In this task you see one complete sentence, then a reply with its words and '
   'phrases out of order. You move them into a sentence that is both grammatical '
   'and a sensible answer to the cue. There is no partial credit, so a reply that '
   'is grammatical but answers the wrong question scores nothing.',
   'All ten items below are built on relative clauses, which do more work in '
   'academic English than any other single structure — and which reappear in '
   'the email and discussion tasks every time you need to identify something '
   'precisely without starting a new sentence.',
 ],

 # ------------------------------------------------------------ preview
 'preview': [
  ('P1', 'The rule you will need ten times', [
     ['In a relative clause the relative pronoun ', ('is', {'italic': True}),
      ' one of the parts of the clause. Decide which of these is wrong, and '
      'say why:'],
     ('mono', ['(i)  The student who collected the data is confident.',
               '(ii) The student who he collected the data is confident.']),
   ]),
  ('P2', 'Choose the right pronoun', [
     ['Which relative word does each head noun want — ',
      ('who · which · where · when · whose', {'italic': True}), '?'],
     ('mono', ['the year ______        the applicant ______ portfolio',
               'the village ______     the figures ______',
               'the volunteer ______']),
   ]),
  ('P3', 'Spot the trap before you meet it', [
     ['In the sentence below, which noun does ', ('that', {'italic': True}),
      ' refer to — and therefore, is it ', ('was', {'italic': True}),
      ' or ', ('were', {'italic': True}), ' refurbished?'],
     ('mono', ['The microscopes in the lab that ____ refurbished last year',
               'are not covered.']),
     ('note', 'This is the single commonest way candidates lose a Build a '
              'Sentence item, and it is exactly what the official ETS sample '
              'tests. Item 10 returns to it.'),
   ]),
 ],

 # ------------------------------------------------------------ the ten items
 'items': [
  (1, 'subject relative', 'Which of the volunteers should we thank first?',
   ['until midnight', 'The one', 'stayed', 'on Friday', 'who'],
   'The one who stayed until midnight on Friday deserves the most credit.',
   'deserves the most credit.',
   'who replaces the subject of its clause, so there is no second subject: '
   'never who he stayed.'),

  (2, 'object relative', 'Did you find that article useful?',
   ['you sent me', 'The one', 'last week', 'that'],
   'The one that you sent me last week was far more useful.',
   'was far more useful.',
   'Here the relative is the object of sent, so the clause already has its own '
   'subject (you). Because it is an object relative it could be deleted '
   'altogether: the one you sent me last week.'),

  (3, 'preposition + which', 'Why did the committee reject the proposal?',
   ['it was rejected', 'The grounds', 'which', 'on'],
   'The grounds on which it was rejected were never made clear.',
   'were never made clear.',
   'Fronting the preposition is the formal option. The everyday equivalent is '
   'the grounds that it was rejected on. Note were, agreeing with grounds.'),

  (4, 'whose + noun', 'Which applicant impressed you?',
   ['we reviewed', 'The candidate', 'portfolio', 'last', 'whose'],
   'The candidate whose portfolio we reviewed last stood out.',
   'stood out.',
   'whose is a possessive and attaches directly to its noun: whose portfolio, '
   'never whose the portfolio.'),

  (5, 'when / where relative', 'Do you remember the summer we first met?',
   ['the festival', 'That was the year', 'was cancelled', 'when'],
   'That was the year when the festival was cancelled because of the storm.',
   'because of the storm.',
   'when for time, where for place. In a defining clause both can be replaced '
   'by that, or dropped: the year the festival was cancelled.'),

  (6, 'reduced relative, -ing', 'Which students should I contact about the trip?',
   ['with the group', 'Anyone', 'travelling'],
   'Anyone travelling with the group needs to sign the form.',
   'needs to sign the form.',
   'Full form: anyone who is travelling. Delete who is and the participle is '
   'left. Only possible when the relative pronoun is the subject.'),

  (7, 'reduced relative, past participle', 'Are all the results reliable?',
   ['in the summary', 'The figures', 'quoted'],
   'The figures quoted in the summary have not been checked.',
   'have not been checked.',
   'Full form: the figures which were quoted. The bare participle carries '
   'passive meaning, which is why no auxiliary is needed.'),

  (8, 'non-defining', 'Who is leading the review?',
   ['chaired the last one,', 'Dr Oyelaran,', 'who'],
   'Dr Oyelaran, who chaired the last one, has agreed to take it on.',
   'has agreed to take it on.',
   'The commas mark the clause as extra information. In a non-defining clause '
   'that is impossible — only who, which, whose.'),

  (9, 'which = the whole clause', 'How did the audience react?',
   ['before the interval,', 'Half of them', 'left', 'which'],
   'Half of them left before the interval, which says a great deal.',
   'says a great deal.',
   'This which refers to the entire preceding clause, not to a noun. Learners '
   'whose first language uses a what-word here very often write what says a '
   'great deal, which is wrong in English.'),

  (10, 'agreement across the clause', 'Is the equipment in the labs insured?',
   ['that was refurbished', 'The microscopes', 'last year', 'in the lab'],
   'The microscopes in the lab that was refurbished last year are not covered.',
   'are not covered.',
   'Two separate agreement decisions. that was agrees with the lab, the noun '
   'it sits next to; are not covered agrees with the microscopes, the real '
   'subject of the main clause. Getting one right and the other wrong is the '
   'classic half-failure.'),
 ],

 # ------------------------------------------------------------ follow-up
 'followup': [
  ('F1', 'Which ones could lose the pronoun?', [
     'In two of the ten answers the relative pronoun could be deleted without '
     'making the sentence wrong. Find them, and state the rule that covers both '
     'and excludes the other eight.',
   ]),
  ('F2', 'Error autopsy', [
     'Each of these came from a real learner. Name the fault and repair it.',
     ('mono', [
       '(a) The report which I read it last night was very detailed.',
       '(b) My brother, that works in Dubai, is visiting next week.',
       '(c) The buildings was damaged in the storm have been repaired.',
       '(d) She passed the exam, what surprised everybody.']),
   ]),
  ('F3', 'Build them yourself', [
     'Join each pair into one sentence using a relative clause. Then say which of '
     'the ten structures above you used.',
     ('mono', [
       '(a) The tutor is on leave. We submitted our drafts to her.',
       '(b) The scheme was cancelled. It had run for twelve years.',
       '(c) Several students arrived late. Their train had been delayed.']),
   ]),
 ],

 # ------------------------------------------------------------ keys
 'keys': [
  ('P1', [
    [('(ii) is wrong.', {'bold': True}), ' ', ('who', {'italic': True}),
     ' already ', ('is', {'italic': True}), ' the subject of ',
     ('collected', {'italic': True}), ', so adding ', ('he', {'italic': True}),
     ' gives the clause two subjects. This is the most frequent relative-clause '
     'error worldwide, because many languages do keep the pronoun.'],
  ]),
  ('P2', [
    ['the year ', ('when', {'bold': True}), ' · the applicant ',
     ('whose', {'bold': True}), ' portfolio · the village ',
     ('where', {'bold': True}), ' · the figures ',
     ('which', {'bold': True}), ' · the volunteer ',
     ('who', {'bold': True}), '.'],
  ]),
  ('P3', [
    [('that', {'italic': True}), ' sits immediately after ',
     ('the lab', {'italic': True}), ', so it refers to the lab — ',
     ('was', {'bold': True}), ' refurbished. The main verb, however, belongs to ',
     ('the microscopes', {'italic': True}), ': ', ('are', {'bold': True}),
     ' not covered.'],
    ['The principle: a relative pronoun attaches to the nearest suitable noun, '
     'but the main verb reaches back to the real subject of the sentence. '
     'Find the main subject by deleting the whole relative clause and seeing '
     'what is left.'],
  ]),
  ('F1', [
    ['Items ', ('2', {'bold': True}), ' and ', ('5', {'bold': True}), '.'],
    ['The rule: a relative pronoun may be dropped only when it is the ',
     ('object', {'bold': True}), ' of its own clause (item 2, ',
     ('you sent me', {'italic': True}),
     ') or an adverbial relative in a defining clause (item 5, ',
     ('the year the festival was cancelled', {'italic': True}),
     '). It can never be dropped when it is the ',
     ('subject', {'bold': True}),
     ' of its clause (items 1, 6, 7, 9, 10) or in a non-defining clause '
     '(item 8).'],
  ]),
  ('F2', [
    ['(a) Resumptive pronoun: delete ', ('it', {'bold': True}),
     '. → The report which I read last night was very detailed.'],
    ['(b) ', ('that', {'bold': True}), ' in a non-defining clause. → My '
     'brother, ', ('who', {'bold': True}), ' works in Dubai, is visiting next week.'],
    ['(c) A finite verb left where a participle belongs. → The buildings ',
     ('damaged', {'bold': True}), ' in the storm have been repaired (or: ',
     ('which were damaged', {'italic': True}), '). Note the agreement error '
     'this produced as well.'],
    ['(d) ', ('what', {'bold': True}), ' for clausal ',
     ('which', {'bold': True}), '. → She passed the exam, ',
     ('which', {'bold': True}), ' surprised everybody.'],
  ]),
  ('F3', [
    ['(a) The tutor ', ('to whom we submitted our drafts', {'bold': True}),
     ' is on leave. — structure 3 (preposition + which/whom). The '
     'everyday form is ', ('who we submitted our drafts to', {'italic': True}), '.'],
    ['(b) The scheme, ', ('which had run for twelve years', {'bold': True}),
     ', was cancelled. — structure 8 (non-defining; commas required, ',
     ('that', {'italic': True}), ' impossible).'],
    ['(c) Several students ', ('whose train had been delayed', {'bold': True}),
     ' arrived late. — structure 4 (', ('whose', {'italic': True}),
     ' + noun).'],
  ]),
 ],
}
