/* Unit 1 · s20-pronunciation — Pronunciation
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s20-pronunciation', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Pronunciation',
    page: 1,
    section: '20',
    lesson: 'Part 7 · Pronunciation',
    title: 'Pronunciation'
  },
  objective: 'Syllable Stress: Accounting Terms',
  cards: [
    {
      id: 'c1',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 1 · 7A',
      type: 'choiceinline',
      title: 'Syllable Stress: Accounting Terms',
      instruction: 'Choose the syllable that carries the stress. Say each word aloud twice before you choose.',
      whyTitle: 'Where the beat falls',
      items: [
        {
          text: 'Ac-count-ant → the stress falls on {{Ac|count|ant}}',
          answer: 1,
          why: 'Ac-count-ant — say it with the beat on <b>COUNT</b>.'
        },
        {
          text: 'Cal-cu-late → the stress falls on {{Cal|cu|late}}',
          answer: 0,
          why: 'Cal-cu-late — say it with the beat on <b>CAL</b>.'
        },
        {
          text: 'Ledg-er → the stress falls on {{Ledg|er}}',
          answer: 0,
          why: 'Ledg-er — say it with the beat on <b>LEDG</b>.'
        },
        {
          text: 'Li-a-bil-i-ty → the stress falls on {{Li|a|bil|i|ty}}',
          answer: 2,
          why: 'Li-a-bil-i-ty — say it with the beat on <b>BIL</b>.'
        },
        {
          text: 'Trans-ac-tion → the stress falls on {{Trans|ac|tion}}',
          answer: 1,
          why: 'Trans-ac-tion — say it with the beat on <b>AC</b>.'
        },
        {
          text: 'Rec-on-cile → the stress falls on {{Rec|on|cile}}',
          answer: 0,
          why: 'Rec-on-cile — say it with the beat on <b>REC</b>.'
        }
      ],
      visual: { spot: 'reporting', caption: 'Pronunciation · Syllable Stress: Accounting Terms' }
    },
    {
      id: 'c2',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 1 · 7A',
      type: 'phrasebank',
      title: 'Hear each word',
      instruction: 'Click a word to hear it. Say it back twice before you choose the stressed syllable above.',
      role: 'course',
      phrases: ['Accountant', 'Calculate', 'Ledger', 'Liability', 'Transaction', 'Reconcile'],
      visual: { spot: 'ledger', caption: 'Pronunciation · Hear each word', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 1 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Lists',
      instruction: 'Practice:',
      html: '<p><b>Context.</b> When reading a list of tasks, go UP on each item, and DOWN on the last one.</p><p>"I need to check the invoice (↗), call the bank (↗), and file the receipts (↘)."</p><p>"We manage assets (↗), liabilities (↗), and equity (↘)."</p>',
      playable: [
        {
          t: '"I need to check the invoice (↗), call the bank (↗), and file the receipts (↘).',
          role: 'narrator'
        },
        { t: '"We manage assets (↗), liabilities (↗), and equity (↘).', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'receipt', caption: 'Pronunciation · Intonation: Lists', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 1 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Lists',
      instruction: 'Practice:',
      html: '<p><b>Context.</b> When reading a list of tasks, go UP on each item, and DOWN on the last one.</p><p>"I need to check the invoice (↗), call the bank (↗), and file the receipts (↘)."</p><p>"We manage assets (↗), liabilities (↗), and equity (↘)."</p>',
      playable: [
        {
          t: '"I need to check the invoice (↗), call the bank (↗), and file the receipts (↘).',
          role: 'narrator'
        },
        { t: '"We manage assets (↗), liabilities (↗), and equity (↘).', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'invoice', caption: 'Pronunciation · Intonation: Lists', cls: 'vis-sm' }
    },
    {
      id: 'c5',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 1 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: The Rapid Check',
      instruction: 'Read the following sequence as clearly as possible.',
      html: '<p>"Invoice number one-five-six. Date: January 30th. Total amount: fifty euros and fifteen cents. Status: Paid."</p>',
      playable: [
        { t: '"Invoice number one-five-six.', role: 'narrator' },
        { t: 'Date: January 30th.', role: 'narrator' },
        { t: 'Total amount: fifty euros and fifteen cents.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'accountant', caption: 'Pronunciation · Fluency Drill: The Rapid Check', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 1 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: The Rapid Check',
      instruction: 'Read the following sequence as clearly as possible.',
      html: '<p>"Invoice number one-five-six. Date: January 30th. Total amount: fifty euros and fifteen cents. Status: Paid."</p>',
      playable: [
        { t: '"Invoice number one-five-six.', role: 'narrator' },
        { t: 'Date: January 30th.', role: 'narrator' },
        { t: 'Total amount: fifty euros and fifteen cents.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'statement', caption: 'Pronunciation · Fluency Drill: The Rapid Check', cls: 'vis-sm' }
    }
  ],
  prev: 's19-writing-2',
  prevLabel: 'Writing 2',
  next: 's21-review',
  nextLabel: 'Review'
});
