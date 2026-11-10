/* Unit 10 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Speaking · role-play',
    page: 10,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: The Urgent Report',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 10 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: The Urgent Report',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> The Audit Partner (A) gives an urgent instruction to the Team Lead (B).</p><p>Partner (Student A): Give three urgent instructions in Direct Speech (e.g., "I need the general ledger immediately," "The deadline is tomorrow," "You must use the new template.").</p><p>Team Lead (Student B): Immediately turn around and report these three instructions to a colleague using Reported Speech and different reporting verbs (said, mandated, insisted).</p>',
      playable: [
        {
          t: 'Partner (Student A): Give three urgent instructions in Direct Speech (e.',
          role: 'narrator'
        },
        {
          t: ', "I need the general ledger immediately," "The deadline is tomorrow," "You must use the new template.',
          role: 'narrator'
        },
        {
          t: 'Team Lead (Student B): Immediately turn around and report these three instructions to a colleague using Reported Speech and different reporting verbs (said, mandated, insisted).',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'ledger', caption: 'Speaking · Role-Play 1: The Urgent Report' }
    },
    {
      id: 'c2',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 10 · 4B',
      type: 'roleplay',
      title: 'Role-Play 1: The Urgent Report',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'B: "The Partner mandated that we get the general ledger immediately. He also insisted that the deadline was the next day."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Reported Speech',
        taught: [
          'B: "The Partner mandated that we get the general ledger immediately. He also insisted that the deadline was the next day."'
        ]
      },
      model: 'The Partner mandated that we get the general ledger immediately. He also insisted that the deadline could not move.',
      visual: { spot: 'reporting', caption: 'Take each card in turn.' },
      remember: [
        'Partner (Student A): Give three urgent instructions in Direct Speech (e.g., "I need the general ledger immediately," "The deadline is tomorrow," "You must use the new template.").',
        'Team Lead (Student B): Immediately turn around and report these three instructions to a colleague using Reported Speech and different reporting verbs (said, mandated, insisted).'
      ]
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 10 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: Summarizing Management Accounts',
      instruction: 'Junior Accountant (Student A): Summarize two key figures and explain the variance (e.g., Sales are up 5%, but expenses increased by 15% because of X).',
      html: '<p><b>Context.</b> A Junior Accountant (A) presents the management accounts to a Department Manager (B).</p><p>Department Manager (Student B): Report the summary to a colleague who just entered the room using Reported Speech and financial vocabulary (e.g., She reported that sales were up, but she clarified that the expense variance had increased).</p>',
      playable: [
        {
          t: 'Department Manager (Student B): Report the summary to a colleague who just entered the room using Reported Speech and financial vocabulary (e.',
          role: 'narrator'
        },
        {
          t: ', She reported that sales were up, but she clarified that the expense variance had increased).',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'variance',
        caption: 'Speaking · Role-Play 2: Summarizing Management Accounts',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 10 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: Summarizing Management Accounts',
      instruction: 'Junior Accountant (Student A): Summarize two key figures and explain the variance (e.g., Sales are up 5%, but expenses increased by 15% because of X).',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'B: "She just reported that sales were up, but she emphasized that the expense ratio had increased significantly due to shipping costs."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Reported Speech',
        taught: [
          'Junior Accountant (Student A): Summarize two key figures and explain the variance (e.g., Sales are up 5%, but expenses increased by 15% because of X).',
          'B: "She just reported that sales were up, but she emphasized that the expense ratio had increased significantly due to shipping costs."'
        ]
      },
      model: 'She reported that sales were up, but she emphasised that the expense ratio had increased significantly, and she asked whether we would review the leasing agreements.',
      visual: { spot: 'reporting', caption: 'Take each card in turn.' },
      remember: [
        'Department Manager (Student B): Report the summary to a colleague who just entered the room using Reported Speech and financial vocabulary (e.g., She reported that sales were up, but she clarified that the expense variance had increased).'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
