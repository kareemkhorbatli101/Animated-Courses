/* Unit 8 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Grammar · produce it',
    page: 8,
    section: '08',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · produce it'
  },
  objective: 'Sentence Transformation (Active to Passive)',
  cards: [
    {
      id: 'c1',
      covers: ['2D'],
      ref: '2D',
      bookRef: 'Unit 8 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation (Active to Passive)',
      instruction: 'Rewrite the sentences in the Passive Voice, moving the focus from the actor to the action or document.',
      text: '<div style="font-size:16px;line-height:2.4">4. Passive: The inventory count [[4]] by the auditors.<br>6. Passive: The financial results [[6]] every quarter.</div>',
      answers: { '4': ['was verified by the auditors'], '6': ['are published every quarter'] },
      bank: ['are published every quarter', 'was verified by the auditors'],
      whyTitle: 'What decided each one',
      why: {
        '4': '<b>was verified by the auditors</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>are published every quarter</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 4.</b> Passive: The inventory count <u>was verified by the auditors</u> by the auditors.',
      brief: 'Rewrite each sentence. The meaning must survive the change — if it does not, you have changed more than the grammar.',
      visual: { spot: 'entry', caption: 'Grammar · Sentence Transformation (Active to Passive)' }
    },
    {
      id: 'c2',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 8 · 2E',
      type: 'discuss',
      title: 'Speaking: Explaining the Process',
      instruction: 'In pairs, describe the following steps using the Passive Voice (Present Simple). There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'Journalizing the transactions.' },
        { q: 'Preparing the income statement.' },
        { q: 'Making the adjusting entries.' },
        { q: 'Closing the revenue and expense accounts.' },
        { q: 'Reconciling the bank account.' },
        { q: 'Filing the final report.' },
        { q: 'Example A: "The transactions are journalized daily."' },
        { q: 'Example B: "The revenue and expense accounts are closed at period end."' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'closing',
        caption: 'Closing the books, trial balance, preparing financial statements, and year-end procedures.'
      },
      coach: {
        title: 'What this is practising',
        target: 'The Passive Voice',
        taught: [
          'In pairs, describe the following steps using the Passive Voice (Present Simple).',
          'Journalizing the transactions.',
          'Preparing the income statement.',
          'Making the adjusting entries.'
        ]
      },
      model: 'The transactions are journalized daily.'
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
