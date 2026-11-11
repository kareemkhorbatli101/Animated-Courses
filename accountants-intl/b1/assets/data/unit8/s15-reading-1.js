/* Unit 8 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Reading 1',
    page: 8,
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
      bookRef: 'Unit 8 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'What is the difference between an unadjusted and an adjusted trial balance?' },
        { q: 'Why are adjusting entries so important for accrual accounting?' },
        { q: 'How does a post-closing trial balance differ from the final trial balance?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'closing',
        caption: 'Closing the books, trial balance, preparing financial statements, and year-end procedures.'
      },
      coach: {
        title: 'What this is practising',
        target: 'The Passive Voice',
        taught: [
          'Discuss:',
          'What is the difference between an unadjusted and an adjusted trial balance?',
          'Why are adjusting entries so important for accrual accounting?',
          'How does a post-closing trial balance differ from the final trial balance?'
        ]
      },
      model: 'The unadjusted trial balance is taken straight from the ledger. The adjusted one is produced after the accruals, deferrals and depreciation have been entered, so it is the one the statements are prepared from.',
      brief: 'Before you read: these are opinion questions, so there is no answer to find. Answering them first makes the passage easier, because you will already be looking for something.'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 8 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: Monthly Closing Checklist',
      instruction: 'Read the excerpt from the procedures manual.',
      playable: [
        { t: 'Section 4: Monthly Closing Procedures', role: 'narrator', _key: 'narr' },
        {
          t: 'The General Ledger must be reconciled by the 10th day of the following month.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'First, the bank and subsidiary ledgers are reconciled.', role: 'narrator', _key: 'narr' },
        {
          t: 'Then, all accrual and deferral adjustments are entered into the system.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Before the statements are generated, the account balances are verified by the senior analyst.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Only after these steps are completed can the books be officially closed.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u8-reading-1-c2',
      passage: {
        paras: [
          { h: 'Section 4: Monthly Closing Procedures' },
          {
            h: 'The General Ledger must be reconciled by the 10th day of the following month. First, the bank and subsidiary ledgers are reconciled. Then, all accrual and deferral adjustments are entered into the system. Before the statements are generated, the account balances are verified by the senior analyst. Only after these steps are completed can the books be officially closed.'
          }
        ],
        say: { scene: 'u8-reading-1-c2', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: {
        spot: 'ledger',
        caption: 'Reading · Reading Passage 1: Monthly Closing Checklist',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 8 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. When must the General Ledger be reconciled?',
          evidence: 'The General Ledger must be reconciled by the 10th day of the following month.',
          options: [
            {
              t: 'By the 10th day of the following month.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The General Ledger must be reconciled by the 10th day of the following month.”'
            },
            {
              t: 'All accrual and deferral adjustments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When must the General Ledger be reconciled?</i> — it answers <i>What are entered into the system after reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The senior analyst.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When must the General Ledger be reconciled?</i> — it answers <i>Who verifies the account balances?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Only after all of the earlier steps are completed.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When must the General Ledger be reconciled?</i> — it answers <i>When can the books be officially closed?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What are entered into the system after reconciliation?',
          evidence: 'Then, all accrual and deferral adjustments are entered into the system.',
          options: [
            {
              t: 'Only after all of the earlier steps are completed.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are entered into the system after reconciliation?</i> — it answers <i>When can the books be officially closed?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'All accrual and deferral adjustments.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Then, all accrual and deferral adjustments are entered into the system.”'
            },
            {
              t: 'The senior analyst.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are entered into the system after reconciliation?</i> — it answers <i>Who verifies the account balances?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'By the 10th day of the following month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are entered into the system after reconciliation?</i> — it answers <i>When must the General Ledger be reconciled?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. Who verifies the account balances?',
          evidence: 'Before the statements are generated, the account balances are verified by the senior analyst.',
          options: [
            {
              t: 'By the 10th day of the following month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who verifies the account balances?</i> — it answers <i>When must the General Ledger be reconciled?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'All accrual and deferral adjustments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who verifies the account balances?</i> — it answers <i>What are entered into the system after reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Only after all of the earlier steps are completed.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who verifies the account balances?</i> — it answers <i>When can the books be officially closed?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The senior analyst.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Before the statements are generated, the account balances are verified by the senior analyst.”'
            }
          ]
        },
        {
          q: '4. When can the books be officially closed?',
          evidence: 'Only after these steps are completed can the books be officially closed.',
          options: [
            {
              t: 'All accrual and deferral adjustments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When can the books be officially closed?</i> — it answers <i>What are entered into the system after reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The senior analyst.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When can the books be officially closed?</i> — it answers <i>Who verifies the account balances?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Only after all of the earlier steps are completed.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Only after these steps are completed can the books be officially closed.”'
            },
            {
              t: 'By the 10th day of the following month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When can the books be officially closed?</i> — it answers <i>When must the General Ledger be reconciled?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What must be reconciled first?',
          evidence: 'First, the bank and subsidiary ledgers are reconciled.',
          options: [
            {
              t: 'All accrual and deferral adjustments.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must be reconciled first?</i> — it answers <i>What are entered into the system after reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The senior analyst.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must be reconciled first?</i> — it answers <i>Who verifies the account balances?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The bank and subsidiary ledgers.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “First, the bank and subsidiary ledgers are reconciled.”'
            },
            {
              t: 'By the 10th day of the following month.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must be reconciled first?</i> — it answers <i>When must the General Ledger be reconciled?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'reconcile', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's14-speaking-present',
  prevLabel: 'Speaking · present it',
  next: 's16-reading-2',
  nextLabel: 'Reading 2'
});
