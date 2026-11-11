/* Unit 1 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Speaking · role-play',
    page: 1,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: The Daily Routine (Routine Focus)',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 1 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: The Daily Routine (Routine Focus)',
      instruction: 'Student A (New Employee): Ask questions using Present Simple.',
      html: '<p><b>Context.</b> A new employee asks you what you do every day.</p><p>Student B (Junior Accountant): Answer based on your real (or imagined) routine.</p>',
      playable: [
        {
          t: 'Student B (Junior Accountant): Answer based on your real (or imagined) routine.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'A role-play. Take one part, let the stage take the other, and say your lines aloud even if nobody is listening.',
      visual: { spot: 'reporting', caption: 'Speaking · Role-Play 1: The Daily Routine (Routine Focus)' }
    },
    {
      id: 'c2',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 1 · 4B',
      type: 'roleplay',
      title: 'Role-Play 1: The Daily Routine (Routine Focus)',
      instruction: 'Student A (New Employee): Ask questions using Present Simple.',
      minWords: 30,
      roles: [
        { who: 'A', notes: '"What time do you start?"' },
        { who: 'B', notes: '"Do you handle cash?"' }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Present Simple vs. Present Continuous.',
        taught: [
          'Student A (New Employee): Ask questions using Present Simple.',
          '"What time do you start?"',
          '"Do you handle cash?"',
          '"How often do you file receipts?"'
        ]
      },
      model: 'I start at half past eight. I check the overnight emails first, then I open the ledger. No, I do not handle cash — the custodian does. At the moment I am covering her filing while she is on leave.',
      visual: { spot: 'accountant', caption: 'Take each card in turn.' },
      remember: ['Student B (Junior Accountant): Answer based on your real (or imagined) routine.']
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 1 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: The Interruption (Continuous Focus)',
      instruction: 'Student A (Colleague): Try to chat about lunch or the weekend.',
      html: '<p><b>Context.</b> You are very busy. A colleague tries to talk to you.</p><p>Student B (Busy Accountant): Politely refuse because you are doing something right now. Use Present Continuous.</p><ol><li>Sample: "I\'m sorry, I can\'t talk. I am calculating the tax and I need to focus."</li><li>Sample: "Not now, I am searching for an error before Singapore goes home."</li></ol>',
      playable: [
        {
          t: 'Student B (Busy Accountant): Politely refuse because you are doing something right now.',
          role: 'narrator'
        },
        { t: 'Use Present Continuous.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'debit',
        caption: 'Speaking · Role-Play 2: The Interruption (Continuous Focus)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 1 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: The Interruption (Continuous Focus)',
      instruction: 'Student A (Colleague): Try to chat about lunch or the weekend.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Sample: "I\'m sorry, I can\'t talk. I am calculating the tax and I need to focus."'
        },
        {
          who: 'B',
          notes: 'Sample: "Not now, I am searching for an error before Singapore goes home."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Present Simple vs. Present Continuous.',
        taught: [
          'Student A (Colleague): Try to chat about lunch or the weekend.',
          'Sample: "I\'m sorry, I can\'t talk. I am calculating the tax and I need to focus."',
          'Sample: "Not now, I am searching for an error before Singapore goes home."'
        ]
      },
      model: 'I\'m sorry, I can\'t talk. I am calculating the tax and I need to focus.',
      visual: { spot: 'accountant', caption: 'Take each card in turn.' },
      remember: [
        'Student B (Busy Accountant): Politely refuse because you are doing something right now. Use Present Continuous.'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
