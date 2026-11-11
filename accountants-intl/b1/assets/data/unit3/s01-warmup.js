/* Unit 3 · s01-warmup — Warm-up
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s01-warmup', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Warm-up',
    page: 3,
    section: '01',
    lesson: 'Warm-Up',
    title: 'Warm-up'
  },
  objective: 'The Petty Cash Fund',
  cards: [
    {
      id: 'c1',
      covers: ['0A'],
      ref: '0A',
      bookRef: 'Unit 3 · 0A',
      type: 'study',
      source: 'book',
      title: 'The Petty Cash Fund',
      instruction: 'Discuss in small groups:',
      html: '<p><b>Context.</b> Petty cash is a small amount of cash kept on hand for minor expenses and emergencies. Each Northwind office keeps its own float, in its own currency.</p>',
      playable: [],
      doneLabel: 'I have read this',
      brief: 'A warm-up, so nothing here is marked. Answer from your own desk and your own week — the point is to put you in the situation before the unit starts teaching it.',
      visual: { spot: 'cash-box', caption: 'Warm-Up · The Petty Cash Fund' }
    },
    {
      id: 'c2',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 3 · 0B',
      type: 'dragmatch',
      title: 'Procurement Terminology',
      instruction: 'The following terms relate to small-scale purchasing and supplier interactions. Match the term on the left to its definition on the right. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. An amount set aside to cover the cost of small expenditures.' },
        {
          id: 'm-b',
          label: 'b. The process of giving money back to an employee for out-of-pocket expenses.'
        },
        { id: 'm-c', label: 'c. A document used to record a payment made from the small cash box.' },
        {
          id: 'm-d',
          label: 'd. The individual responsible for operating and tracking the small cash box.'
        },
        {
          id: 'm-e',
          label: 'e. A system where the fund is restored to its fixed amount periodically.'
        },
        {
          id: 'm-f',
          label: 'f. Low-value, non-inventory items needed for daily administrative work (e.g., paper, pens).'
        }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Reimbursement',
          accept: 'm-b',
          why: '<b>Reimbursement</b> — The process of giving money back to an employee for out-of-pocket expenses. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Petty Cash Voucher',
          accept: 'm-c',
          why: '<b>Petty Cash Voucher</b> — A document used to record a payment made from the small cash box. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Fund Custodian',
          accept: 'm-d',
          why: '<b>Fund Custodian</b> — The individual responsible for operating and tracking the small cash box. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Imprest System',
          accept: 'm-e',
          why: '<b>Imprest System</b> — A system where the fund is restored to its fixed amount periodically. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Replenishment',
          accept: 'm-a',
          why: '<b>Replenishment</b> — An amount set aside to cover the cost of small expenditures. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Office Supplies',
          accept: 'm-f',
          why: '<b>Office Supplies</b> — Low-value, non-inventory items needed for daily administrative work (e.g., paper, pens). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Reimbursement',
        a: 'The process of giving money back to an employee for out-of-pocket expenses. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'payment-run', caption: 'Reimbursement — one of the words on this list.' }
    },
    {
      id: 'c3',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 3 · 0B',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: [
        'Reimbursement',
        'Petty Cash Voucher',
        'Fund Custodian',
        'Imprest System',
        'Replenishment',
        'Office Supplies'
      ],
      visual: { spot: 'accountant', caption: 'Warm-Up · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['0C'],
      ref: '0C',
      bookRef: 'Unit 3 · 0C',
      type: 'discuss',
      title: 'Dealing with Difficult Requests',
      instruction: 'Think-Pair-Share: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        {
          q: 'Think: An employee asks you to reimburse them for a coffee they bought for themselves, but they lost the receipt. How do you politely request the original receipt?'
        },
        {
          q: 'Pair: Discuss with a partner: A vendor offers a small, unrecorded discount for paying cash immediately. How would you politely refuse the offer and request a formal invoice?'
        },
        {
          q: 'Share: Share your ideas with the class, focusing on using polite language (e.g., "Would you be able to provide the original receipt?" or "Could we please stick to the formal invoicing process?").'
        }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'petty-voucher',
        caption: 'Handling small payments, requesting approvals, dealing with suppliers for low-value goods, and processing reimbursement.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Modals of Request and Offer',
        taught: [
          'Think-Pair-Share:',
          'Think: An employee asks you to reimburse them for a coffee they bought for themselves, but they lost the receipt. How do you politely request the original receipt?',
          'Pair: Discuss with a partner: A vendor offers a small, unrecorded discount for paying cash immediately. How would you politely refuse the offer and request a formal invoice?',
          'Share: Share your ideas with the class, focusing on using polite language (e.g., "Would you be able to provide the original receipt?" or "Could we please stick to the formal invoicing process?").'
        ]
      },
      model: 'I would say: “I am sorry, I cannot reimburse this without the receipt. Could you ask the café for a copy? If they can send one today, I can process it in this week\'s run.”'
    }
  ],
  next: 's02-vocab-match',
  nextLabel: 'Vocabulary · match'
});
