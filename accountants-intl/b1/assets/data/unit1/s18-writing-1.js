/* Unit 1 · s18-writing-1 — Writing 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s18-writing-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Writing 1',
    page: 1,
    section: '18',
    lesson: 'Part 6 · Writing',
    title: 'Writing 1'
  },
  objective: 'Guided Writing: Completing the Email',
  cards: [
    {
      id: 'c1',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 1 · 6A',
      type: 'study',
      source: 'book',
      title: 'Guided Writing: Completing the Email',
      instruction: 'You are a Junior Accountant. You are sending an invoice to a customer.',
      html: '<p>[ is attached / Please find / due date / contact me / reference number ]</p><p>Subject: Invoice #1045 - Services Rendered</p><p>Dear Ms Byrne,</p><p>Sincerely,</p><p>Daniel Okoye</p><p>Junior Accountant</p>',
      playable: [
        {
          t: '[ is attached / Please find / due date / contact me / reference number ]',
          role: 'narrator'
        },
        { t: 'Subject: Invoice #1045 - Services Rendered', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      brief: 'A writing task with a frame: the shape is given and the words are yours. Use the unit\'s grammar on purpose — that is what a reader of your email will notice first.',
      visual: { spot: 'invoice', caption: 'Writing · Guided Writing: Completing the Email' }
    },
    {
      id: 'c2',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 1 · 6A',
      type: 'writer',
      title: 'Guided Writing: Completing the Email',
      instruction: 'You are a Junior Accountant. You are sending an invoice to a customer.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'Please find attached Invoice #1045 for the services provided in January. The total amount is EUR 450.00. The due date for payment is February 28th. A detailed breakdown of the costs is attached to this email. Please quote the reference number (#1045) when you make the bank transfer. If you have any questions, please contact me directly.',
      coach: {
        title: 'What this is practising',
        target: 'Present Simple vs. Present Continuous.',
        taught: ['You are a Junior Accountant. You are sending an invoice to a customer.']
      },
      visual: { spot: 'accountant', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 1 · 6B',
      type: 'study',
      source: 'book',
      title: 'Writing Task 1: My Daily Routine (Functional)',
      instruction: 'Write a paragraph (50–60 words) describing your job.',
      html: '<p><b>Context.</b> You are writing a short bio for the company newsletter.</p><ol><li>Your job title and your office.</li><li>Three things you do every day (Present Simple).</li><li>One thing you are learning currently (Present Continuous).</li><li>Example: "I am a Bookkeeper in the Nairobi office. I enter data, check receipts, and answer the phone. Currently, I am learning the new group reporting system..."</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'receipt',
        caption: 'Writing · Writing Task 1: My Daily Routine (Functional)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 1 · 6B',
      type: 'writer',
      title: 'Writing Task 1: My Daily Routine (Functional)',
      instruction: 'Write a paragraph (50–60 words) describing your job.',
      paras: [
        { label: 'Your job title and your office.', purpose: '' },
        { label: 'Three things you do every day (Present Simple).', purpose: '' },
        { label: 'One thing you are learning currently (Present Continuous).', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'Your job title and your office.',
        'Three things you do every day (Present Simple).',
        'One thing you are learning currently (Present Continuous).'
      ],
      model: 'I am a Bookkeeper in the Nairobi office. I enter data, check receipts, and answer the phone. Currently, I am learning the new group reporting system...',
      coach: {
        title: 'What this is practising',
        target: 'Present Simple vs. Present Continuous.',
        taught: [
          'Write a paragraph (50–60 words) describing your job.',
          'Your job title and your office.',
          'Three things you do every day (Present Simple).',
          'One thing you are learning currently (Present Continuous).'
        ]
      },
      visual: { spot: 'accountant', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's17-reading-3',
  prevLabel: 'Reading 3',
  next: 's19-writing-2',
  nextLabel: 'Writing 2'
});
