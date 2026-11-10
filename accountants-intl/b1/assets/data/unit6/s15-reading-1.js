/* Unit 6 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Reading 1',
    page: 6,
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
      bookRef: 'Unit 6 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'What is the difference between a control deficiency and a material weakness?' },
        { q: 'Why do companies keep a suspense account?' },
        { q: 'What are some examples of transactions that require a reversal?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'discrepancy',
        caption: 'Bank reconciliation, spotting mistakes, internal controls, and fraud prevention.'
      },
      coach: {
        title: 'What this is practising',
        target: 'First and Second Conditionals',
        taught: [
          'Discuss:',
          'What is the difference between a control deficiency and a material weakness?',
          'Why do companies keep a suspense account?',
          'What are some examples of transactions that require a reversal?'
        ]
      },
      model: 'A control deficiency is a weakness that could let an error through. A material weakness is one big enough that a real misstatement could reach the financial statements without anybody noticing.'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 6 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: The Bank Reconciliation Procedure',
      instruction: 'Read the procedure for Bank Reconciliation.',
      playable: [
        {
          t: 'The bank reconciliation must be completed weekly to ensure the accuracy of cash.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The core goal is to identify any discrepancy between the bank statement and the general ledger.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If the totals do not match, the accountant will investigate the unidentified transactions first.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We will check for any omission or duplicate entry.', role: 'narrator', _key: 'narr' },
        {
          t: 'If the difference were over EUR 1,000, it would require the manager\'s authorization to rectify.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'If we find an error in our records, we will adjust the journal entry immediately.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u6-reading-1-c2',
      passage: '<p>The bank reconciliation must be completed weekly to ensure the accuracy of cash. The core goal is to identify any discrepancy between the bank statement and the general ledger. If the totals do not match, the accountant will investigate the unidentified transactions first. We will check for any omission or duplicate entry. If the difference were over EUR 1,000, it would require the manager\'s authorization to rectify. If we find an error in our records, we will adjust the journal entry immediately.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'reconcile',
        caption: 'Reading · Reading Passage 1: The Bank Reconciliation Procedure',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 6 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the goal of bank reconciliation?',
          evidence: 'The core goal is to identify any discrepancy between the bank statement and the general ledger.',
          options: [
            {
              t: 'It would require the manager\'s authorization to rectify.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the goal of bank reconciliation?</i> — it answers <i>What would happen if the difference were over EUR 1,000?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They will adjust the journal entry immediately.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the goal of bank reconciliation?</i> — it answers <i>What will they do if they find an error in their records?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will investigate the unidentified transactions first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the goal of bank reconciliation?</i> — it answers <i>What will the accountant do if the totals do not match?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'To identify any discrepancy between the bank statement and the general ledger.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The core goal is to identify any discrepancy between the bank statement and the general ledger.”'
            }
          ]
        },
        {
          q: '2. What will the accountant do if the totals do not match?',
          evidence: 'If the totals do not match, the accountant will investigate the unidentified transactions first.',
          options: [
            {
              t: 'They will adjust the journal entry immediately.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the accountant do if the totals do not match?</i> — it answers <i>What will they do if they find an error in their records?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will investigate the unidentified transactions first.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If the totals do not match, the accountant will investigate the unidentified transactions first.”'
            },
            {
              t: 'It would require the manager\'s authorization to rectify.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the accountant do if the totals do not match?</i> — it answers <i>What would happen if the difference were over EUR 1,000?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'To identify any discrepancy between the bank statement and the general ledger.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will the accountant do if the totals do not match?</i> — it answers <i>What is the goal of bank reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What would happen if the difference were over EUR 1,000?',
          evidence: 'If the difference were over EUR 1,000, it would require the manager\'s authorization to rectify.',
          options: [
            {
              t: 'It would require the manager\'s authorization to rectify.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If the difference were over EUR 1,000, it would require the manager\'s authorization to rectify.”'
            },
            {
              t: 'To identify any discrepancy between the bank statement and the general ledger.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would happen if the difference were over EUR 1,000?</i> — it answers <i>What is the goal of bank reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will investigate the unidentified transactions first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would happen if the difference were over EUR 1,000?</i> — it answers <i>What will the accountant do if the totals do not match?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They will adjust the journal entry immediately.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What would happen if the difference were over EUR 1,000?</i> — it answers <i>What will they do if they find an error in their records?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What will they do if they find an error in their records?',
          evidence: 'If we find an error in our records, we will adjust the journal entry immediately.',
          options: [
            {
              t: 'To identify any discrepancy between the bank statement and the general ledger.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will they do if they find an error in their records?</i> — it answers <i>What is the goal of bank reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will investigate the unidentified transactions first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will they do if they find an error in their records?</i> — it answers <i>What will the accountant do if the totals do not match?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They will adjust the journal entry immediately.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “If we find an error in our records, we will adjust the journal entry immediately.”'
            },
            {
              t: 'It would require the manager\'s authorization to rectify.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What will they do if they find an error in their records?</i> — it answers <i>What would happen if the difference were over EUR 1,000?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What two types of mistakes will they check for?',
          evidence: 'We will check for any omission or duplicate entry.',
          options: [
            {
              t: 'An omission, and a duplicate entry.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We will check for any omission or duplicate entry.”'
            },
            {
              t: 'To identify any discrepancy between the bank statement and the general ledger.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two types of mistakes will they check for?</i> — it answers <i>What is the goal of bank reconciliation?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It would require the manager\'s authorization to rectify.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two types of mistakes will they check for?</i> — it answers <i>What would happen if the difference were over EUR 1,000?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He will investigate the unidentified transactions first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What two types of mistakes will they check for?</i> — it answers <i>What will the accountant do if the totals do not match?</i> Check what the question actually asks for before you look for it in the text.'
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
