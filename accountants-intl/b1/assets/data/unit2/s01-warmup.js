/* Unit 2 · s01-warmup — Warm-up
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s01-warmup', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Warm-up',
    page: 2,
    section: '01',
    lesson: 'Warm-Up',
    title: 'Warm-up'
  },
  objective: 'Yesterday\'s Work',
  cards: [
    {
      id: 'c1',
      covers: ['0A'],
      ref: '0A',
      bookRef: 'Unit 2 · 0A',
      type: 'study',
      source: 'book',
      title: 'Yesterday\'s Work',
      instruction: 'Discuss in small groups:',
      html: '<p><b>Context.</b> Accountants often spend the first part of the day recording and reconciling transactions from the previous day, week, or month. In a group with six offices, "yesterday" is not the same hour everywhere.</p>',
      playable: [],
      doneLabel: 'I have read this',
      brief: 'A warm-up, so nothing here is marked. Answer from your own desk and your own week — the point is to put you in the situation before the unit starts teaching it.',
      visual: { spot: 'transaction', caption: 'Warm-Up · Yesterday\'s Work' }
    },
    {
      id: 'c2',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 2 · 0B',
      type: 'dragmatch',
      title: 'Transaction Terminology',
      instruction: 'The following terms relate to the processing and recording of past transactions. Match the term on the left to its definition on the right. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        {
          id: 'm-a',
          label: 'a. A detailed report claiming reimbursement for money spent on business-related items.'
        },
        { id: 'm-b', label: 'b. The official documentation that proves a payment has been made.' },
        { id: 'm-c', label: 'c. A bill requesting payment for goods or services supplied.' },
        { id: 'm-d', label: 'd. An entry in the General Ledger that transfers data from a journal.' },
        {
          id: 'm-e',
          label: 'e. The process of matching two independent records to ensure they agree.'
        },
        { id: 'm-f', label: 'f. The original record that provides evidence of a transaction.' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Invoice',
          accept: 'm-c',
          why: '<b>Invoice</b> — A bill requesting payment for goods or services supplied. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Expense Claim',
          accept: 'm-a',
          why: '<b>Expense Claim</b> — A detailed report claiming reimbursement for money spent on business-related items. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Posting',
          accept: 'm-d',
          why: '<b>Posting</b> — An entry in the General Ledger that transfers data from a journal. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Receipt',
          accept: 'm-b',
          why: '<b>Receipt</b> — The official documentation that proves a payment has been made. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Reconciliation',
          accept: 'm-e',
          why: '<b>Reconciliation</b> — The process of matching two independent records to ensure they agree. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Source Document',
          accept: 'm-f',
          why: '<b>Source Document</b> — The original record that provides evidence of a transaction. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Invoice',
        a: 'A bill requesting payment for goods or services supplied. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'invoice', caption: 'Invoice — one of the words on this list.' }
    },
    {
      id: 'c3',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 2 · 0B',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Invoice', 'Expense Claim', 'Posting', 'Receipt', 'Reconciliation', 'Source Document'],
      visual: { spot: 'expense-claim', caption: 'Warm-Up · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['0C'],
      ref: '0C',
      bookRef: 'Unit 2 · 0C',
      type: 'discuss',
      title: 'Dealing with Interruptions',
      instruction: 'Think-Pair-Share: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        {
          q: 'Think: Imagine you were entering 50 invoices yesterday afternoon. What might have interrupted you? (Name two scenarios: e.g., a phone call from Dublin, a colleague\'s question.)'
        },
        {
          q: 'Pair: Discuss with a partner: How do interruptions affect the quality and speed of data entry?'
        },
        {
          q: 'Share: Share your ideas with the class, focusing on how you explain the interruption (e.g., "I was posting the journal entry when the phone rang.").'
        }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'journal',
        caption: 'Processing invoices, expense claims, and receipts from the previous period (historical data entry across the group\'s six'
      },
      coach: {
        title: 'What this is practising',
        target: 'Past Simple vs. Past Continuous',
        taught: [
          'Think-Pair-Share:',
          'Think: Imagine you were entering 50 invoices yesterday afternoon. What might have interrupted you? (Name two scenarios: e.g., a phone call from Dublin, a colleague\'s question.)',
          'Pair: Discuss with a partner: How do interruptions affect the quality and speed of data entry?',
          'Share: Share your ideas with the class, focusing on how you explain the interruption (e.g., "I was posting the journal entry when the phone rang.").'
        ]
      },
      model: 'The phone rang twice and a supplier came to the desk. I was entering the invoices when the first call came, so I lost my place and had to check the last ten entries again.'
    }
  ],
  next: 's02-vocab-match',
  nextLabel: 'Vocabulary · match'
});
