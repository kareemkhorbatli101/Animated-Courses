/* Unit 5 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Reading 1',
    page: 5,
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
      bookRef: 'Unit 5 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'What is the relationship between credit terms and cash flow?' },
        { q: 'What is the term for an invoice that is not paid after 120 days?' },
        { q: 'Why is it important to monitor the total credit exposure to a single client?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'payment-run',
        caption: 'Scheduling payments, chasing debts, managing collections, and cash flow planning across currencies.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'Discuss:',
          'What is the relationship between credit terms and cash flow?',
          'What is the term for an invoice that is not paid after 120 days?',
          'Why is it important to monitor the total credit exposure to a single client?'
        ]
      },
      model: 'Credit terms decide when the money arrives. Long terms keep the customer happy but delay the cash, so the company pays its own suppliers before it has been paid itself.'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 5 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: AP Standard Operating Procedure',
      instruction: 'Read the procedure for Accounts Payable.',
      playable: [
        {
          t: 'The Accounts Payable team is responsible for ensuring timely payment to all suppliers.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'The standard credit terms are Net 30 days.', role: 'narrator', _key: 'narr' },
        {
          t: 'All invoices must be approved before they are included in the weekly payment run.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We are going to run the payment run every Tuesday afternoon, Central European Time.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We will prioritize payments to major vendors.', role: 'narrator', _key: 'narr' },
        {
          t: 'If a vendor requests a delay, the AP Manager will review the request.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We are not going to delay payments without authorization.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'This strict schedule will ensure we maintain excellent vendor relationships.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u5-reading-1-c2',
      passage: '<p>The Accounts Payable team is responsible for ensuring timely payment to all suppliers. The standard credit terms are Net 30 days. All invoices must be approved before they are included in the weekly payment run. We are going to run the payment run every Tuesday afternoon, Central European Time. We will prioritize payments to major vendors. If a vendor requests a delay, the AP Manager will review the request. We are not going to delay payments without authorization. This strict schedule will ensure we maintain excellent vendor relationships.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'debtor',
        caption: 'Reading · Reading Passage 1: AP Standard Operating Procedure',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 5 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the responsibility of the Accounts Payable team?',
          evidence: 'The Accounts Payable team is responsible for ensuring timely payment to all suppliers.',
          options: [
            {
              t: 'Ensuring timely payment to all suppliers.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The Accounts Payable team is responsible for ensuring timely payment to all suppliers.”'
            },
            {
              t: 'Net 30 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the responsibility of the Accounts Payable team?</i> — it answers <i>What are the standard credit terms?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That the company will maintain excellent vendor relationships.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the responsibility of the Accounts Payable team?</i> — it answers <i>What will the strict schedule ensure?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will review the request.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the responsibility of the Accounts Payable team?</i> — it answers <i>What will the AP Manager do if a vendor requests a delay?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What are the standard credit terms?',
          evidence: 'The standard credit terms are Net 30 days.',
          options: [
            {
              t: 'He will review the request.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are the standard credit terms?</i> — it answers <i>What will the AP Manager do if a vendor requests a delay?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That the company will maintain excellent vendor relationships.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are the standard credit terms?</i> — it answers <i>What will the strict schedule ensure?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Net 30 days.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The standard credit terms are Net 30 days.”'
            },
            {
              t: 'Ensuring timely payment to all suppliers.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are the standard credit terms?</i> — it answers <i>What is the responsibility of the Accounts Payable team?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What will the AP Manager do if a vendor requests a delay?',
          evidence: 'If a vendor requests a delay, the AP Manager will review the request.',
          options: [
            {
              t: 'That the company will maintain excellent vendor relationships.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the AP Manager do if a vendor requests a delay?</i> — it answers <i>What will the strict schedule ensure?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will review the request.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If a vendor requests a delay, the AP Manager will review the request.”'
            },
            {
              t: 'Ensuring timely payment to all suppliers.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the AP Manager do if a vendor requests a delay?</i> — it answers <i>What is the responsibility of the Accounts Payable team?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Net 30 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the AP Manager do if a vendor requests a delay?</i> — it answers <i>What are the standard credit terms?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What will the strict schedule ensure?',
          evidence: 'This strict schedule will ensure we maintain excellent vendor relationships.',
          options: [
            {
              t: 'That the company will maintain excellent vendor relationships.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “This strict schedule will ensure we maintain excellent vendor relationships.”'
            },
            {
              t: 'Ensuring timely payment to all suppliers.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the strict schedule ensure?</i> — it answers <i>What is the responsibility of the Accounts Payable team?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will review the request.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the strict schedule ensure?</i> — it answers <i>What will the AP Manager do if a vendor requests a delay?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Net 30 days.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the strict schedule ensure?</i> — it answers <i>What are the standard credit terms?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'credit', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's14-speaking-present',
  prevLabel: 'Speaking · present it',
  next: 's16-reading-2',
  nextLabel: 'Reading 2'
});
