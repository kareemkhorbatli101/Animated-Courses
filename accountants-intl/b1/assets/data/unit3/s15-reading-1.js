/* Unit 3 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Reading 1',
    page: 3,
    section: '15',
    lesson: 'Part 5 · Reading',
    title: 'Reading 1'
  },
  objective: 'Pre-Reading Discussion',
  cards: [
    {
      id: 'c1',
      covers: ['5A'],
      ref: '5A',
      bookRef: 'Unit 3 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'What is the difference between a petty cash voucher and a petty cash receipt?' },
        { q: 'Why is it important to have an established limit for petty cash expenditures?' },
        { q: 'How can poor management of the float affect the final financial statements?' }
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
          'Discuss:',
          'What is the difference between a petty cash voucher and a petty cash receipt?',
          'Why is it important to have an established limit for petty cash expenditures?',
          'How can poor management of the float affect the final financial statements?'
        ]
      },
      model: 'The voucher is our own record of a payment out of the box; the receipt is the shop\'s proof that the money was spent. The voucher is written by us, the receipt is given to us.',
      brief: 'Before you read: these are opinion questions, so there is no answer to find. Answering them first makes the passage easier, because you will already be looking for something.'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 3 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: Setting the Fund Limit',
      instruction: 'Read the policy on establishing and maintaining the petty cash fund.',
      playable: [
        {
          t: 'The Finance Department set the petty cash float at a maximum limit of EUR 500, or the local equivalent in each office.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'This imprest system ensures that cash is available for minor expenses, such as courier services and small office supplies.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The custodian may request replenishment when the cash on hand falls to EUR 100.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Could the custodian ensure that all payments are documented with a signed voucher?',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The general cashier can only issue cash for replenishment if the total vouchers plus the cash on hand equals the float limit.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u3-reading-1-c2',
      passage: {
        paras: [
          {
            h: 'The Finance Department set the petty cash float at a maximum limit of EUR 500, or the local equivalent in each office. This imprest system ensures that cash is available for minor expenses, such as courier services and small office supplies. The custodian may request replenishment when the cash on hand falls to EUR 100. Could the custodian ensure that all payments are documented with a signed voucher? The general cashier can only issue cash for replenishment if the total vouchers plus the cash on hand equals the float limit.'
          }
        ],
        say: { scene: 'u3-reading-1-c2', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: {
        spot: 'cash-box',
        caption: 'Reading · Reading Passage 1: Setting the Fund Limit',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 3 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the maximum limit for the float?',
          evidence: 'The Finance Department set the petty cash float at a maximum limit of EUR 500, or the local equivalent in each office.',
          options: [
            {
              t: 'EUR 500, or the local equivalent in each office.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The Finance Department set the petty cash float at a maximum limit of EUR 500, or the local equivalent in each office.”'
            },
            {
              t: 'He may request a replenishment.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the maximum limit for the float?</i> — it answers <i>What may the custodian request when the cash on hand falls to EUR 100?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That all payments are documented with a signed voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the maximum limit for the float?</i> — it answers <i>What could the custodian ensure is done with all payments?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The float limit — EUR 500.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the maximum limit for the float?</i> — it answers <i>What must the vouchers plus the cash on hand equal?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What may the custodian request when the cash on hand falls to EUR 100?',
          evidence: 'The custodian may request replenishment when the cash on hand falls to EUR 100.',
          options: [
            {
              t: 'That all payments are documented with a signed voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What may the custodian request when the cash on hand falls to EUR 100?</i> — it answers <i>What could the custodian ensure is done with all payments?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The float limit — EUR 500.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What may the custodian request when the cash on hand falls to EUR 100?</i> — it answers <i>What must the vouchers plus the cash on hand equal?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'EUR 500, or the local equivalent in each office.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What may the custodian request when the cash on hand falls to EUR 100?</i> — it answers <i>What is the maximum limit for the float?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He may request a replenishment.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The custodian may request replenishment when the cash on hand falls to EUR 100.”'
            }
          ]
        },
        {
          q: '3. What could the custodian ensure is done with all payments?',
          evidence: 'Could the custodian ensure that all payments are documented with a signed voucher?',
          options: [
            {
              t: 'That all payments are documented with a signed voucher.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Could the custodian ensure that all payments are documented with a signed voucher?”'
            },
            {
              t: 'EUR 500, or the local equivalent in each office.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could the custodian ensure is done with all payments?</i> — it answers <i>What is the maximum limit for the float?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The float limit — EUR 500.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could the custodian ensure is done with all payments?</i> — it answers <i>What must the vouchers plus the cash on hand equal?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He may request a replenishment.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could the custodian ensure is done with all payments?</i> — it answers <i>What may the custodian request when the cash on hand falls to EUR 100?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What must the vouchers plus the cash on hand equal?',
          evidence: 'The Finance Department set the petty cash float at a maximum limit of EUR 500, or the local equivalent in each office.',
          options: [
            {
              t: 'He may request a replenishment.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the vouchers plus the cash on hand equal?</i> — it answers <i>What may the custodian request when the cash on hand falls to EUR 100?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That all payments are documented with a signed voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the vouchers plus the cash on hand equal?</i> — it answers <i>What could the custodian ensure is done with all payments?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'EUR 500, or the local equivalent in each office.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the vouchers plus the cash on hand equal?</i> — it answers <i>What is the maximum limit for the float?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The float limit — EUR 500.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The Finance Department set the petty cash float at a maximum limit of EUR 500, or the local equivalent in each office.”'
            }
          ]
        },
        {
          q: '5. What can the general cashier issue cash for?',
          evidence: 'The general cashier can only issue cash for replenishment if the total vouchers plus the cash on hand equals the float limit.',
          options: [
            {
              t: 'He may request a replenishment.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What can the general cashier issue cash for?</i> — it answers <i>What may the custodian request when the cash on hand falls to EUR 100?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That all payments are documented with a signed voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What can the general cashier issue cash for?</i> — it answers <i>What could the custodian ensure is done with all payments?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Replenishment, but only if the vouchers plus the cash on hand equal the float limit.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The general cashier can only issue cash for replenishment if the total vouchers plus the cash on hand equals the float limit.”'
            },
            {
              t: 'EUR 500, or the local equivalent in each office.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What can the general cashier issue cash for?</i> — it answers <i>What is the maximum limit for the float?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'source-document', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's14-speaking-present',
  prevLabel: 'Speaking · present it',
  next: 's16-reading-2',
  nextLabel: 'Reading 2'
});
