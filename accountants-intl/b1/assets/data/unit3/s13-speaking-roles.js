/* Unit 3 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Speaking · role-play',
    page: 3,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: Requesting Authorization',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 3 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: Requesting Authorization',
      instruction: 'Student A (Accountant): Ask for authorization politely (Could). Explain why you need it quickly.',
      html: '<p><b>Context.</b> Ask the Financial Controller for authorization for a EUR 450 payment to a vendor (above petty cash limit).</p><p>Student B (Financial Controller): Ask a clarifying question (Can/Would you mind). Grant the approval (Can).</p>',
      playable: [
        {
          t: 'Student B (Financial Controller): Ask a clarifying question (Can/Would you mind).',
          role: 'narrator'
        },
        { t: 'Grant the approval (Can).', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'debtor', caption: 'Speaking · Role-Play 1: Requesting Authorization' }
    },
    {
      id: 'c2',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 3 · 4B',
      type: 'roleplay',
      title: 'Role-Play 1: Requesting Authorization',
      instruction: 'Student A (Accountant): Ask for authorization politely (Could). Explain why you need it quickly.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "Could you approve this EUR 450 payment to the stationery vendor? We need the supplies urgently.'
        },
        {
          who: 'B',
          notes: 'B: "Would you mind double-checking that the account code is correct? If it is, I can authorize it right away."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Modals of Request and Offer',
        taught: [
          'Student A (Accountant): Ask for authorization politely (Could). Explain why you need it quickly.',
          'A: "Could you approve this EUR 450 payment to the stationery vendor? We need the supplies urgently.',
          'B: "Would you mind double-checking that the account code is correct? If it is, I can authorize it right away."'
        ]
      },
      model: 'A: Could you approve this EUR 450 payment to the stationery vendor? We need the supplies urgently. — B: Would you mind double-checking that the account code is correct? If it is, I can authorize it right away. — B: Ask a clarifying question (Can/Would you mind). Grant the approval (Can).',
      visual: { spot: 'petty-voucher', caption: 'Take each card in turn.' },
      remember: [
        'Student B (Financial Controller): Ask a clarifying question (Can/Would you mind). Grant the approval (Can).'
      ]
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 3 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: The Missing Receipt',
      instruction: 'Student B (Employee): Offer an alternative (Would). Explain what happened to the original.',
      html: '<p><b>Context.</b> A colleague is demanding reimbursement but only has a photocopy of the receipt.</p><p>Student A (Custodian): Explain that you require the original receipt. Request the original politely (Could). Offer to process the reimbursement quickly once received (Can offer).</p>',
      playable: [
        {
          t: 'Student A (Custodian): Explain that you require the original receipt.',
          role: 'narrator'
        },
        { t: 'Request the original politely (Could).', role: 'narrator' },
        {
          t: 'Offer to process the reimbursement quickly once received (Can offer).',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'receipt', caption: 'Speaking · Role-Play 2: The Missing Receipt', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 3 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: The Missing Receipt',
      instruction: 'Student B (Employee): Offer an alternative (Would). Explain what happened to the original.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "Could you please provide the original receipt? We must document the expense. I can offer to process the reimbursement as soon as you bring it in.'
        },
        {
          who: 'B',
          notes: 'B: "I lost the original. Would you accept a signed note from my manager instead?'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Modals of Request and Offer',
        taught: [
          'Student B (Employee): Offer an alternative (Would). Explain what happened to the original.',
          'A: "Could you please provide the original receipt? We must document the expense. I can offer to process the reimbursement as soon as you bring it in.',
          'B: "I lost the original. Would you accept a signed note from my manager instead?'
        ]
      },
      model: 'A: Could you please provide the original receipt? We must document the expense. I can offer to process the reimbursement as soon as you bring it in. — B: I lost the original. Would you accept a signed note from my manager instead? — A: Explain that you require the original receipt. Request the original politely (Could). Offer to process the reimbursement quickly once received (Can offer).',
      visual: { spot: 'petty-voucher', caption: 'Take each card in turn.' },
      remember: [
        'Student A (Custodian): Explain that you require the original receipt. Request the original politely (Could). Offer to process the reimbursement quickly once received (Can offer).'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
