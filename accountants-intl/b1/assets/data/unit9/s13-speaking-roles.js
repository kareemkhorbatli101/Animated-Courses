/* Unit 9 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Speaking · role-play',
    page: 9,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: The Formal Interview',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 9 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: The Formal Interview',
      instruction: 'Manager (Student A): Ask about their relevant experience and current tasks (How long have you...?).',
      html: '<p><b>Context.</b> A hiring manager (A) is interviewing an accountant (B) for a Financial Analyst position.</p><p>Accountant (Student B): Answer using Present Perfect Simple (I have been/I have worked...).</p>',
      playable: [
        {
          t: 'Accountant (Student B): Answer using Present Perfect Simple (I have been/I have worked...',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'reporting', caption: 'Speaking · Role-Play 1: The Formal Interview' }
    },
    {
      id: 'c2',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 9 · 4B',
      type: 'roleplay',
      title: 'Role-Play 1: The Formal Interview',
      instruction: 'Manager (Student A): Ask about their relevant experience and current tasks (How long have you...?).',
      minWords: 30,
      roles: [
        { who: 'A', notes: 'A: "How long have you been responsible for forecasting revenue?"' },
        {
          who: 'B',
          notes: 'B: "I have developed and managed the forecasting models since the beginning of last quarter."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Present Perfect Simple',
        taught: [
          'Manager (Student A): Ask about their relevant experience and current tasks (How long have you...?).',
          'A: "How long have you been responsible for forecasting revenue?"',
          'B: "I have developed and managed the forecasting models since the beginning of last quarter."'
        ]
      },
      model: 'A: How long have you been responsible for forecasting revenue? — B: I have developed and managed the forecasting models since the beginning of last quarter.',
      visual: { spot: 'certification', caption: 'Take each card in turn.' },
      remember: [
        'Accountant (Student B): Answer using Present Perfect Simple (I have been/I have worked...).'
      ]
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 9 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: Discussing Software Skills',
      instruction: 'Colleague 1 (Student A): Ask if your partner has used Xero or QuickBooks before (Have you ever...?).',
      html: '<p><b>Context.</b> Two colleagues are discussing a new project that requires specific software knowledge.</p><p>Colleague 2 (Student B): Confirm or deny, and describe their current software proficiency (I haven\'t used... yet, but I have mastered...).</p>',
      playable: [
        {
          t: 'Colleague 2 (Student B): Confirm or deny, and describe their current software proficiency (I haven\'t used...',
          role: 'narrator'
        },
        { t: 'yet, but I have mastered...', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'reorder-point',
        caption: 'Speaking · Role-Play 2: Discussing Software Skills',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 9 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: Discussing Software Skills',
      instruction: 'Colleague 1 (Student A): Ask if your partner has used Xero or QuickBooks before (Have you ever...?).',
      minWords: 30,
      roles: [
        { who: 'A', notes: 'A: "Have you ever used Xero for client reporting?"' },
        {
          who: 'B',
          notes: 'B: "No, I haven\'t used Xero yet, but I have worked with QuickBooks for my last three clients."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Present Perfect Simple',
        taught: [
          'Colleague 1 (Student A): Ask if your partner has used Xero or QuickBooks before (Have you ever...?).',
          'A: "Have you ever used Xero for client reporting?"',
          'B: "No, I haven\'t used Xero yet, but I have worked with QuickBooks for my last three clients."'
        ]
      },
      model: 'A: Have you ever used Xero for client reporting? — B: No, I haven\'t used Xero yet, but I have worked with QuickBooks for my last three clients.',
      visual: { spot: 'certification', caption: 'Take each card in turn.' },
      remember: [
        'Colleague 2 (Student B): Confirm or deny, and describe their current software proficiency (I haven\'t used... yet, but I have mastered...).'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
