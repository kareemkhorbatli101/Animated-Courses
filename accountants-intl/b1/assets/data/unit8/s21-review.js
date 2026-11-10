/* Unit 8 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Review',
    page: 8,
    section: '21',
    lesson: 'Part 8 · Review',
    title: 'Review'
  },
  objective: 'Vocabulary Quiz',
  cards: [
    {
      id: 'c1',
      covers: ['8A'],
      ref: '8A',
      bookRef: 'Unit 8 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the item to the relevant action in the accounting cycle. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Action — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. To close revenue and expense accounts' },
        { id: 'm-b', label: 'b. To compare the bank statement to the cash account' },
        { id: 'm-c', label: 'c. To summarize debits and credits' },
        { id: 'm-d', label: 'd. To record depreciation or accruals' },
        { id: 'm-e', label: 'e. To record transactions in the journal' },
        { id: 'm-f', label: 'f. To collect the initial transaction details' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Trial Balance',
          accept: 'm-c',
          why: '<b>Trial Balance</b> — To summarize debits and credits. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Source Documents',
          accept: 'm-f',
          why: '<b>Source Documents</b> — To collect the initial transaction details. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Adjusting Entries',
          accept: 'm-d',
          why: '<b>Adjusting Entries</b> — To record depreciation or accruals. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Bank Reconciliation',
          accept: 'm-b',
          why: '<b>Bank Reconciliation</b> — To compare the bank statement to the cash account. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Closing Entries',
          accept: 'm-a',
          why: '<b>Closing Entries</b> — To close revenue and expense accounts. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Journal Entries',
          accept: 'm-e',
          why: '<b>Journal Entries</b> — To record transactions in the journal. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Trial Balance',
        a: 'To summarize debits and credits. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'trial-balance', caption: 'Trial Balance — one of the words on this list.' }
    },
    {
      id: 'c2',
      covers: ['8A'],
      ref: '8A',
      bookRef: 'Unit 8 · 8A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: [
        'Trial Balance',
        'Source Documents',
        'Adjusting Entries',
        'Bank Reconciliation',
        'Closing Entries',
        'Journal Entries'
      ],
      visual: { spot: 'entry', caption: 'Review · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 8 · 8B',
      type: 'cloze',
      title: 'Grammar Quiz (Passive Voice)',
      instruction: 'Complete the sentence with the correct Passive Voice form of the verb in parentheses. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. The financial statements [[2]] (prepare) by the end of the week.<br>3. The figures was not correctly [[3]] (derive) from the ledger.<br>4. The invoices should [[4]] (file) in the archives.<br>5. All transactions are [[5]] (post) to the General Ledger daily.</div>',
      answers: { '2': ['will be prepared'], '3': ['derived'], '4': ['be filed'], '5': ['posted'] },
      bank: ['be filed', 'derived', 'posted', 'will be prepared'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>will be prepared</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>derived</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>be filed</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>posted</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> The financial statements <u>will be prepared</u> (prepare) by the end of the week.',
      visual: { spot: 'auditor', caption: 'Review · Grammar Quiz (Passive Voice)', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 8 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Audit Inquiry',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> An external auditor (A) is inquiring about a specific process to verify controls with a financial analyst (B).</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'debit', caption: 'Review · Real-Life Simulation: The Audit Inquiry', cls: 'vis-sm' }
    },
    {
      id: 'c5',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 8 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Audit Inquiry',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Auditor (Student A): Ask how the fixed assets register is maintained (Use: is maintained?).'
        },
        {
          who: 'B',
          notes: 'Analyst (Student B): Explain the steps using the Passive Voice (The assets are recorded...).'
        },
        {
          who: 'C',
          notes: 'Auditor (Student A): Ask if the final report is checked by a supervisor (Is it checked...?).'
        },
        { who: 'D', notes: 'Example:' },
        { who: 'E', notes: 'A: "How is the fixed assets register maintained?"' },
        {
          who: 'F',
          notes: 'B: "First, the asset is tagged and recorded. Then, depreciation is calculated monthly. Finally, the register is updated."'
        }
      ],
      coach: { title: 'What this is practising', target: 'The Passive Voice', taught: [] },
      model: 'A: How is the fixed assets register maintained? — B: First, the asset is tagged and recorded. Then, depreciation is calculated monthly. Finally, the register is updated.',
      visual: { spot: 'closing', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c6',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 8 · 8D',
      type: 'study',
      source: 'book',
      title: 'Extension Writing: Explaining Net Income Derivation',
      instruction: 'Write a short paragraph (80 words) explaining how Net Income is calculated.',
      html: '<p>Style: Use the Passive Voice to describe the calculation.</p>',
      playable: [{ t: 'Use the Passive Voice to describe the calculation.', role: 'narrator' }],
      doneLabel: 'I have read this',
      visual: {
        spot: 'obsolete',
        caption: 'Review · Extension Writing: Explaining Net Income Derivation',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c7',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 8 · 8D',
      type: 'writer',
      title: 'Extension Writing: Explaining Net Income Derivation',
      instruction: 'Write a short paragraph (80 words) explaining how Net Income is calculated.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'Net Income is derived from Total Revenue. First, the Cost of Goods Sold is subtracted to get Gross Profit. Then, operating expenses are deducted. Finally, the tax expense is calculated and subtracted, leaving the Net Income for the period. This figure is then transferred to Retained Earnings.',
      coach: {
        title: 'What this is practising',
        target: 'The Passive Voice',
        taught: [
          'Write a short paragraph (80 words) explaining how Net Income is calculated.',
          'Example: "Net Income is derived from Total Revenue. First, the Cost of Goods Sold is subtracted to get Gross Profit. Then, operating expenses are deducted. Finally, the tax expense is calculated and subtracted, leaving the Net Income for the period. This figure is then transferred to Retained Earnings."'
        ]
      },
      visual: { spot: 'closing', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c8',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 8 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can use vocabulary related to the accounting cycle (ledger, trial balance). [ ]' },
        { t: 'I can identify and use the Passive Voice (is/are made, was/were prepared). [ ]' },
        { t: 'I can describe a sequence of accounting steps using the Passive Voice. [ ]' },
        { t: 'I can explain how a financial figure is derived (calculated) impersonally. [ ]' }
      ],
      visual: { spot: 'ledger', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
