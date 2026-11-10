/* Unit 6 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Speaking · role-play',
    page: 6,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: The Missing Receipt',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 6 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: The Missing Receipt',
      instruction: 'Student A (Colleague): Explain the situation. Ask what will happen (First Conditional).',
      html: '<p><b>Context.</b> A colleague (A) has lost a cash receipt.</p><p>Student B (Accountant): Explain the real consequence (First Conditional - e.g., We won\'t be able to claim the expense). Give advice on how to rectify it (Second Conditional).</p>',
      playable: [
        {
          t: 'Student B (Accountant): Explain the real consequence (First Conditional - e.',
          role: 'narrator'
        },
        { t: ', We won\'t be able to claim the expense).', role: 'narrator' },
        { t: 'Give advice on how to rectify it (Second Conditional).', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'receipt', caption: 'Speaking · Role-Play 1: The Missing Receipt' }
    },
    {
      id: 'c2',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 6 · 4B',
      type: 'roleplay',
      title: 'Role-Play 1: The Missing Receipt',
      instruction: 'Student A (Colleague): Explain the situation. Ask what will happen (First Conditional).',
      minWords: 30,
      roles: [
        { who: 'A', notes: 'A: "I can\'t find the receipt. What will happen if I can\'t provide it?"' },
        {
          who: 'B',
          notes: 'B: "If you can\'t provide it, we will have an unsubstantiated expense. If I were you, I would ask for a copy from the vendor."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'First and Second Conditionals',
        taught: [
          'Student A (Colleague): Explain the situation. Ask what will happen (First Conditional).',
          'A: "I can\'t find the receipt. What will happen if I can\'t provide it?"',
          'B: "If you can\'t provide it, we will have an unsubstantiated expense. If I were you, I would ask for a copy from the vendor."'
        ]
      },
      model: 'A: I can\'t find the receipt. What will happen if I can\'t provide it? — B: If you can\'t provide it, we will have an unsubstantiated expense. If I were you, I would ask for a copy from the vendor. — B: Explain the real consequence (First Conditional - e.g., We won\'t be able to claim the expense). Give advice on how to rectify it (Second Conditional).',
      visual: { spot: 'discrepancy', caption: 'Take each card in turn.' },
      remember: [
        'Student B (Accountant): Explain the real consequence (First Conditional - e.g., We won\'t be able to claim the expense). Give advice on how to rectify it (Second Conditional).'
      ]
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 6 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: The Audit Scenario',
      instruction: 'Student A: Set the hypothetical situation (Second Conditional). Ask what the auditor would do.',
      html: '<p><b>Context.</b> Two colleagues are discussing how an auditor would react to a scenario.</p><p>Student B: Explain the hypothetical outcome (Second Conditional). Give advice (Second Conditional).</p>',
      playable: [
        {
          t: 'Explain the hypothetical outcome (Second Conditional). Give advice (Second Conditional).',
          role: 'spk:Student B',
          who: 'Student B'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'reporting', caption: 'Speaking · Role-Play 2: The Audit Scenario', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 6 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: The Audit Scenario',
      instruction: 'Student A: Set the hypothetical situation (Second Conditional). Ask what the auditor would do.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "If we didn\'t reconcile the bank for three months, what would the auditor say?"'
        },
        {
          who: 'B',
          notes: 'B: "If they discovered that, they would issue a serious warning. If I were the company, I would hire another person just for reconciliation."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'First and Second Conditionals',
        taught: [
          'Student A: Set the hypothetical situation (Second Conditional). Ask what the auditor would do.',
          'A: "If we didn\'t reconcile the bank for three months, what would the auditor say?"',
          'B: "If they discovered that, they would issue a serious warning. If I were the company, I would hire another person just for reconciliation."'
        ]
      },
      model: 'A: If we didn\'t reconcile the bank for three months, what would the auditor say? — B: If they discovered that, they would issue a serious warning. If I were the company, I would hire another person just for reconciliation. — B: Explain the hypothetical outcome (Second Conditional). Give advice (Second Conditional).',
      visual: { spot: 'discrepancy', caption: 'Take each card in turn.' },
      remember: [
        'Student B: Explain the hypothetical outcome (Second Conditional). Give advice (Second Conditional).'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
