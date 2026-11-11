/* Unit 3 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Review',
    page: 3,
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
      bookRef: 'Unit 3 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the term to the correct concept. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Concept — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. Out-of-Pocket' },
        { id: 'm-b', label: 'b. Reimbursement' },
        { id: 'm-c', label: 'c. Petty Cash' },
        { id: 'm-d', label: 'd. Imprest System' },
        { id: 'm-e', label: 'e. Authorization' },
        { id: 'm-f', label: 'f. Voucher' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'The small cash amount.',
          accept: 'm-c',
          why: '<b>The small cash amount.</b> — Petty Cash. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Formal consent to pay.',
          accept: 'm-e',
          why: '<b>Formal consent to pay.</b> — Authorization. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Paid by the employee first.',
          accept: 'm-a',
          why: '<b>Paid by the employee first.</b> — Out-of-Pocket. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Getting money back from the company.',
          accept: 'm-b',
          why: '<b>Getting money back from the company.</b> — Reimbursement. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'System where the fund is fixed.',
          accept: 'm-d',
          why: '<b>System where the fund is fixed.</b> — Imprest System. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Document for a cash withdrawal.',
          accept: 'm-f',
          why: '<b>Document for a cash withdrawal.</b> — Voucher. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. The small cash amount.',
        a: 'Petty Cash. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      brief: 'A quick check of the unit\'s vocabulary. If a term has gone, the glossary at the top of the screen has it.',
      visual: { spot: 'trial-balance', caption: 'Review · Vocabulary Quiz' }
    },
    {
      id: 'c2',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 3 · 8B',
      type: 'choiceinline',
      title: 'Grammar Quiz',
      instruction: 'Choose the correct structure for the modal verb. (Only the first one is done for you). One of the two is right in each line.',
      whyTitle: 'The rule behind each one',
      items: [
        {
          text: 'Would you mind {{signing|to sign}} the voucher?',
          answer: 0,
          why: 'After <i>mind</i> the verb takes <b>-ing</b>. This is the one the book does for you.'
        },
        {
          text: 'Could you {{to check|check}} the account code for me?',
          answer: 1,
          why: 'After a modal — <i>could</i>, <i>can</i>, <i>may</i>, <i>would</i> — the verb has no <b>to</b>.'
        },
        {
          text: 'May I {{to request|request}} the official approval?',
          answer: 1,
          why: 'Same rule: <i>may</i> is a modal, so <b>request</b>, not <i>to request</i>.'
        },
        {
          text: 'Would you be able {{to find|find}} the original receipt?',
          answer: 0,
          why: '<i>Be able</i> is not a modal, it is an adjective phrase — and it DOES take <b>to</b>. That is the contrast the exercise is built on.'
        }
      ],
      visual: { spot: 'receipt', caption: 'Review · Grammar Quiz', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 3 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Annual Audit',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> An external auditor is checking the petty cash records and asks you about the procedures.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'journal', caption: 'Review · Real-Life Simulation: The Annual Audit', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 3 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Annual Audit',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Auditor (Student A): Use polite modals to request documents and ask about the process. ("Could you provide the voucher from March 12th? May I ask who the fund custodian is?")'
        },
        {
          who: 'B',
          notes: 'Accountant (Student B): Use Can to offer documents and Would to explain the procedure. ("I can get you that voucher immediately. Would you like me to explain the replenishment procedure?")'
        }
      ],
      coach: { title: 'What this is practising', target: 'Modals of Request and Offer', taught: [] },
      model: 'Could you provide the vouchers for March, please? May I also see the replenishment record? I can offer to copy them this afternoon if that is easier for you.',
      visual: { spot: 'petty-voucher', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c5',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 3 · 8D',
      type: 'writer',
      title: 'Extension Writing: Instructions for Suppliers',
      instruction: 'Write a short instruction sheet (80 words) to a new vendor, explaining the company\'s requirements for payment documentation. Use Modals of Request.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'To our new vendors: Could you please ensure that all invoices are itemized? Would you mind sending the original invoice as a PDF? We can process payment within 14 days, but we must have the correct P.O. number for authorization. Could you also confirm the bank account details and the currency on the invoice?',
      coach: {
        title: 'What this is practising',
        target: 'Modals of Request and Offer',
        taught: [
          'Write a short instruction sheet (80 words) to a new vendor, explaining the company\'s requirements for payment documentation. Use Modals of Request.',
          'Example: "To our new vendors: Could you please ensure that all invoices are itemized? Would you mind sending the original invoice as a PDF? We can process payment within 14 days, but we must have the correct P.O. number for authorization. Could you also confirm the bank account details and the currency on the invoice?"'
        ]
      },
      visual: { spot: 'petty-voucher', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c6',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 3 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can explain the role of petty cash and the imprest system.' },
        { t: 'I can define and use vocabulary related to reimbursement and authorization.' },
        { t: 'I can use Can/May to ask for permission or make an offer.' },
        { t: 'I can use Could/Would to make a polite professional request.' },
        { t: 'I can politely request a missing original receipt from a colleague.' }
      ],
      visual: { spot: 'payment-run', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    },
    {
      id: 'c7',
      covers: ['8F'],
      ref: '8F',
      bookRef: 'Unit 3 · 8F',
      type: 'discuss',
      title: 'Final Thought',
      instruction: 'Last thing. There is no single right answer — say what you think, in English, using the grammar of this unit.',
      minWords: 25,
      questions: [
        {
          q: 'In a modern digital accounting system, is a physical petty cash float still necessary? Why or why not? What could a company do to replace the float system? Would this change make the process more or less secure?'
        }
      ],
      model: 'I think a small float is still necessary, because some payments cannot wait for a bank transfer — a taxi, a courier, a replacement part. A company could replace it with a prepaid company card, which is more secure because every transaction leaves a record automatically, but it is also slower when the card is declined and nobody has cash.',
      visual: { spot: 'forecast', caption: 'Review · Final Thought', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
