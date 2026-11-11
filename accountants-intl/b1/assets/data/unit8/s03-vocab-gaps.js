/* Unit 8 · s03-vocab-gaps — Vocabulary · in use
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s03-vocab-gaps', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Vocabulary · in use',
    page: 8,
    section: '03',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in use'
  },
  objective: 'Verbs for Accounting Actions',
  cards: [
    {
      id: 'c1',
      covers: ['1B'],
      ref: '1B',
      bookRef: 'Unit 8 · 1B',
      type: 'study',
      source: 'book',
      title: 'Verbs for Accounting Actions',
      instruction: 'Complete the sentences using the correct verb from the box.',
      html: '<p>Verbs: Derived, reconciled, audited, posted, compiled, reviewed</p>',
      playable: [
        { t: 'Verbs: Derived, reconciled, audited, posted, compiled, reviewed', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      brief: 'The people and the roles. Match them by what each one DOES, not by which word looks similar.',
      visual: { spot: 'closing', caption: 'Vocabulary · Verbs for Accounting Actions' }
    },
    {
      id: 'c2',
      covers: ['1B'],
      ref: '1B',
      bookRef: 'Unit 8 · 1B',
      type: 'cloze',
      title: 'Verbs for Accounting Actions',
      instruction: 'Complete the sentences using the correct verb from the box.',
      text: '<div style="font-size:16px;line-height:2.4">1. All transactions must be [[1]] to the General Ledger before the trial balance.<br>2. The final accounts will be [[2]] by an external firm next month.<br>4. The final financial statements are [[4]] from the adjusted trial balance.<br>5. All the month-end reports were [[5]] by the senior accountant in Kraków.<br>6. The quarterly results are [[6]] by the Group CFO before release.</div>',
      answers: { '1': ['posted'], '2': ['audited'], '4': ['prepared'], '5': ['reviewed'], '6': ['approved'] },
      bank: ['approved', 'audited', 'posted', 'prepared', 'reviewed'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>posted</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>audited</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>prepared</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>reviewed</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>approved</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> All transactions must be <u>posted</u> to the General Ledger before the trial balance.',
      visual: { spot: 'bookkeeping', caption: 'Vocabulary · Verbs for Accounting Actions', cls: 'vis-sm' }
    }
  ],
  prev: 's02-vocab-match',
  prevLabel: 'Vocabulary · match',
  next: 's04-vocab-context',
  nextLabel: 'Vocabulary · in context'
});
