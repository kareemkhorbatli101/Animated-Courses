/* Unit 2 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Speaking · role-play',
    page: 2,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: The Missing Invoice',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 2 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: The Missing Invoice',
      instruction: 'Student B (Accountant): Ask what they did with the document, using the Past Simple. (e.g., "Did you file it under the vendor name or the date?")',
      html: '<p><b>Context.</b> You need to find a missing invoice from a colleague.</p><p>Student A (Colleague): Explain what you were doing when you processed the transaction, and what you did next. (e.g., "I was preparing a large batch of expense claims, so I put the invoice on your desk.")</p>',
      playable: [
        {
          t: 'Student A (Colleague): Explain what you were doing when you processed the transaction, and what you did next.',
          role: 'narrator'
        },
        {
          t: ', "I was preparing a large batch of expense claims, so I put the invoice on your desk.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'A role-play. Take one part, let the stage take the other, and say your lines aloud even if nobody is listening.',
      visual: { spot: 'invoice', caption: 'Speaking · Role-Play 1: The Missing Invoice' }
    },
    {
      id: 'c2',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 2 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: Explaining a Review Error',
      instruction: 'Student A (Manager): Ask about the activity using the Past Continuous. (e.g., "What were you doing when you should have been reviewing the ledger?")',
      html: '<p><b>Context.</b> A manager is asking why a major recording error went unnoticed last week.</p><p>Student B (Accountant): Explain the distraction using an interruption scenario (Past Continuous + When + Past Simple).</p><ol><li>"I was performing the journal entry when Mr Farouk came in and asked for the immediate approval of his claim. I had to stop what I was doing."</li></ol>',
      playable: [
        {
          t: 'Student B (Accountant): Explain the distraction using an interruption scenario (Past Continuous + When + Past Simple).',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'entry', caption: 'Speaking · Role-Play 2: Explaining a Review Error', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 2 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: Explaining a Review Error',
      instruction: 'Student A (Manager): Ask about the activity using the Past Continuous. (e.g., "What were you doing when you should have been reviewing the ledger?")',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: '"I was performing the journal entry when Mr Farouk came in and asked for the immediate approval of his claim. I had to stop what I was doing."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Past Simple vs. Past Continuous',
        taught: [
          'Student A (Manager): Ask about the activity using the Past Continuous. (e.g., "What were you doing when you should have been reviewing the ledger?")',
          '"I was performing the journal entry when Mr Farouk came in and asked for the immediate approval of his claim. I had to stop what I was doing."'
        ]
      },
      model: 'I was performing the journal entry when Mr Farouk came in and asked for the immediate approval of his claim, so I stopped, approved it, and then finished the entry.',
      visual: { spot: 'journal', caption: 'Take each card in turn.' },
      remember: [
        'Student B (Accountant): Explain the distraction using an interruption scenario (Past Continuous + When + Past Simple).'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
