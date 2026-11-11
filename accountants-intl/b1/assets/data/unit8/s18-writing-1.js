/* Unit 8 · s18-writing-1 — Writing 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s18-writing-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Writing 1',
    page: 8,
    section: '18',
    lesson: 'Part 6 · Writing',
    title: 'Writing 1'
  },
  objective: 'Guided Writing: Paraphrasing (Passive Voice)',
  cards: [
    {
      id: 'c1',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 8 · 6A',
      type: 'cloze',
      title: 'Guided Writing: Paraphrasing (Passive Voice)',
      instruction: 'Paraphrase the following sentences using the Passive Voice form in parentheses. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. The software generates the trial balance automatically. (Present Passive) -> The trial balance [[2]] automatically.<br>3. The board must approve the financial reports. (Modal Passive) -> The financial reports [[3]] by the board.</div>',
      answers: { '2': ['is generated'], '3': ['must be approved'] },
      bank: ['is generated', 'must be approved'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>is generated</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>must be approved</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> The software generates the trial balance automatically. (Present Passive) -> The trial balance <u>is generated</u> automatically.',
      brief: 'A writing task with a frame: the shape is given and the words are yours. Use the unit\'s grammar on purpose — that is what a reader of your email will notice first.',
      visual: { spot: 'invoice', caption: 'Writing · Guided Writing: Paraphrasing (Passive Voice)' }
    },
    {
      id: 'c2',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 8 · 6A',
      type: 'writer',
      title: 'Guided Writing: Paraphrasing (Passive Voice)',
      instruction: 'Paraphrase the following sentences using the Passive Voice form in parentheses. (Only the first one is done for you).',
      paras: [
        {
          label: 'The accountant closed the temporary accounts last night. (Past Passive) -> The temporary accounts were closed last night.',
          purpose: ''
        },
        {
          label: 'The software generates the trial balance automatically. (Present Passive) -> The trial balance ____________________ automatically.',
          purpose: ''
        },
        {
          label: 'The board must approve the financial reports. (Modal Passive) -> The financial reports ____________________ by the board.',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'The accountant closed the temporary accounts last night. (Past Passive) -> The temporary accounts were closed last night.',
        'The software generates the trial balance automatically. (Present Passive) -> The trial balance ____________________ automatically.',
        'The board must approve the financial reports. (Modal Passive) -> The financial reports ____________________ by the board.'
      ],
      model: 'The temporary accounts were closed last night.',
      coach: {
        title: 'What this is practising',
        target: 'The Passive Voice',
        taught: [
          'Paraphrase the following sentences using the Passive Voice form in parentheses. (Only the first one is done for you).',
          'The accountant closed the temporary accounts last night. (Past Passive) -> The temporary accounts were closed last night.',
          'The software generates the trial balance automatically. (Present Passive) -> The trial balance ____________________ automatically.',
          'The board must approve the financial reports. (Modal Passive) -> The financial reports ____________________ by the board.'
        ]
      },
      visual: { spot: 'closing', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 8 · 6B',
      type: 'study',
      source: 'book',
      title: 'Writing Task 1: The Step-by-Step Procedure',
      instruction: 'Include:',
      html: '<p><b>Context.</b> Write a short section (50–60 words) for a procedure manual describing how the General Ledger is updated.</p><ol><li>Use at least three Passive Voice sentences in sequence (First, then, finally).</li><li>Focus on the documents and data, not the staff.</li><li>Example: "First, the original invoices are digitized. Then, all journal entries are posted from the journals to the General Ledger. Finally, the account balances are checked to ensure accuracy before the next step."</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'ledger',
        caption: 'Writing · Writing Task 1: The Step-by-Step Procedure',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 8 · 6B',
      type: 'writer',
      title: 'Writing Task 1: The Step-by-Step Procedure',
      instruction: 'Include:',
      paras: [
        {
          label: 'Use at least three Passive Voice sentences in sequence (First, then, finally).',
          purpose: ''
        },
        { label: 'Focus on the documents and data, not the staff.', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'Use at least three Passive Voice sentences in sequence (First, then, finally).',
        'Focus on the documents and data, not the staff.'
      ],
      model: 'First, the original invoices are digitized. Then, all journal entries are posted from the journals to the General Ledger. Finally, the account balances are checked to ensure accuracy before the next step.',
      coach: {
        title: 'What this is practising',
        target: 'The Passive Voice',
        taught: [
          'Include:',
          'Use at least three Passive Voice sentences in sequence (First, then, finally).',
          'Focus on the documents and data, not the staff.',
          'Example: "First, the original invoices are digitized. Then, all journal entries are posted from the journals to the General Ledger. Finally, the account balances are checked to ensure accuracy before the next step."'
        ]
      },
      visual: { spot: 'closing', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's17-reading-3',
  prevLabel: 'Reading 3',
  next: 's19-writing-2',
  nextLabel: 'Writing 2'
});
