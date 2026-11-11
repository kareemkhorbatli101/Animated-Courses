/* Unit 2 · s17-reading-3 — Reading 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s17-reading-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Reading 3',
    page: 2,
    section: '17',
    lesson: 'Part 5 · Reading',
    title: 'Reading 3'
  },
  objective: 'Reading Passage 3: Reconciliation and Discrepancy',
  cards: [
    {
      id: 'c1',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 2 · 5D',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 3: Reconciliation and Discrepancy',
      instruction: 'Read the explanation of the bank reconciliation process.',
      playable: [
        {
          t: 'Bank reconciliation is vital to ensure the cash balance in the Ledger matches the bank statement.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'A discrepancy often occurs due to cheques that are outstanding or deposits in transit.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Yesterday afternoon, Aoife was trying to reconcile the month-end statement for Dublin when she noticed a EUR 5,000 difference.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'She immediately traced the amount back through the journal entries and found that a deposit had been recorded twice.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'She corrected the error and prepared the final report.', role: 'narrator', _key: 'narr' }
      ],
      brief: 'The last text, and the densest. Read the headings first to see how it is organised, then read for the detail the questions ask about.',
      scene: 'u2-reading-3-c1',
      passage: {
        paras: [
          {
            h: 'Bank reconciliation is vital to ensure the cash balance in the Ledger matches the bank statement. A discrepancy often occurs due to cheques that are outstanding or deposits in transit. Yesterday afternoon, Aoife was trying to reconcile the month-end statement for Dublin when she noticed a EUR 5,000 difference. She immediately traced the amount back through the journal entries and found that a deposit had been recorded twice. She corrected the error and prepared the final report.'
          }
        ],
        say: { scene: 'u2-reading-3-c1', who: 'narr' }
      },
      after: 'Read it, then play it. Each paragraph has its own play button, and <b>0.6×</b> slows any line down.',
      layout: 'text-first',
      visual: { spot: 'reconcile', caption: 'Reading · Reading Passage 3: Reconciliation and Discrepancy' }
    },
    {
      id: 'c2',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 2 · 5D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the purpose of bank reconciliation?',
          evidence: 'Bank reconciliation is vital to ensure the cash balance in the Ledger matches the bank statement.',
          options: [
            {
              t: 'To ensure the cash balance in the Ledger matches the bank statement.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Bank reconciliation is vital to ensure the cash balance in the Ledger matches the bank statement.”'
            },
            {
              t: 'She was trying to reconcile the month-end statement for Dublin.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the purpose of bank reconciliation?</i> — it answers <i>What was Aoife doing when she noticed the difference?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She traced the amount back through the journal entries, corrected the error and prepared the final report.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the purpose of bank reconciliation?</i> — it answers <i>What did she do immediately after finding the error?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A deposit had been recorded twice.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the purpose of bank reconciliation?</i> — it answers <i>What was the cause of the EUR 5,000 difference she found?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What was Aoife doing when she noticed the difference?',
          evidence: 'Yesterday afternoon, Aoife was trying to reconcile the month-end statement for Dublin when she noticed a EUR 5,000 difference.',
          options: [
            {
              t: 'To ensure the cash balance in the Ledger matches the bank statement.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was Aoife doing when she noticed the difference?</i> — it answers <i>What is the purpose of bank reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A deposit had been recorded twice.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was Aoife doing when she noticed the difference?</i> — it answers <i>What was the cause of the EUR 5,000 difference she found?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She was trying to reconcile the month-end statement for Dublin.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Yesterday afternoon, Aoife was trying to reconcile the month-end statement for Dublin when she noticed a EUR 5,000 difference.”'
            },
            {
              t: 'She traced the amount back through the journal entries, corrected the error and prepared the final report.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was Aoife doing when she noticed the difference?</i> — it answers <i>What did she do immediately after finding the error?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What was the cause of the EUR 5,000 difference she found?',
          evidence: 'She immediately traced the amount back through the journal entries and found that a deposit had been recorded twice.',
          options: [
            {
              t: 'A deposit had been recorded twice.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “She immediately traced the amount back through the journal entries and found that a deposit had been recorded twice.”'
            },
            {
              t: 'To ensure the cash balance in the Ledger matches the bank statement.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the cause of the EUR 5,000 difference she found?</i> — it answers <i>What is the purpose of bank reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She was trying to reconcile the month-end statement for Dublin.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the cause of the EUR 5,000 difference she found?</i> — it answers <i>What was Aoife doing when she noticed the difference?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She traced the amount back through the journal entries, corrected the error and prepared the final report.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the cause of the EUR 5,000 difference she found?</i> — it answers <i>What did she do immediately after finding the error?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What did she do immediately after finding the error?',
          evidence: 'She immediately traced the amount back through the journal entries and found that a deposit had been recorded twice.',
          options: [
            {
              t: 'To ensure the cash balance in the Ledger matches the bank statement.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she do immediately after finding the error?</i> — it answers <i>What is the purpose of bank reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She was trying to reconcile the month-end statement for Dublin.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she do immediately after finding the error?</i> — it answers <i>What was Aoife doing when she noticed the difference?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A deposit had been recorded twice.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did she do immediately after finding the error?</i> — it answers <i>What was the cause of the EUR 5,000 difference she found?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She traced the amount back through the journal entries, corrected the error and prepared the final report.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “She immediately traced the amount back through the journal entries and found that a deposit had been recorded twice.”'
            }
          ]
        },
        {
          q: '5. What two things often cause a discrepancy?',
          evidence: 'A discrepancy often occurs due to cheques that are outstanding or deposits in transit.',
          options: [
            {
              t: 'Cheques that are outstanding, and deposits in transit.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “A discrepancy often occurs due to cheques that are outstanding or deposits in transit.”'
            },
            {
              t: 'To ensure the cash balance in the Ledger matches the bank statement.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two things often cause a discrepancy?</i> — it answers <i>What is the purpose of bank reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She was trying to reconcile the month-end statement for Dublin.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two things often cause a discrepancy?</i> — it answers <i>What was Aoife doing when she noticed the difference?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A deposit had been recorded twice.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two things often cause a discrepancy?</i> — it answers <i>What was the cause of the EUR 5,000 difference she found?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'discrepancy', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's16-reading-2',
  prevLabel: 'Reading 2',
  next: 's18-writing-1',
  nextLabel: 'Writing 1'
});
