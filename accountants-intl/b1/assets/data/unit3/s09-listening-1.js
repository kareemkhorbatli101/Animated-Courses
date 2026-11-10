/* Unit 3 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Listening 1',
    page: 3,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: Requesting Reimbursement (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 3 · 3A',
      type: 'scene',
      source: 'book',
      title: 'Passage 1: Requesting Reimbursement (Functional)',
      instruction: 'Read this before you go on.',
      playable: [
        {
          t: 'Could you please process my reimbursement for the printer toner? It was an out-of-pocket expense of EUR 65. I have the original receipt here. I also need to request authorization for a EUR 100 payment for new courier services. Would you mind calling the Financial Controller for approval?',
          role: 'spk:Employee',
          who: 'Employee',
          _key: 'employee'
        },
        {
          t: 'Can I see the receipt first? Thank you. I can offer to process the toner payment immediately. However, for the EUR 100 courier service, you must complete a purchase voucher first.',
          role: 'spk:Custodian',
          who: 'Custodian',
          _key: 'custodian'
        }
      ],
      scene: 'u3-listening-1-c1',
      passage: '<p><b>Context.</b> An employee asks the petty cash custodian for money back.</p><div class="script"><p>Employee: "Could you please process my reimbursement for the printer toner? It was an out-of-pocket expense of EUR 65. I have the original receipt here. I also need to request authorization for a EUR 100 payment for new courier services. Would you mind calling the Financial Controller for approval?"</p><p>Custodian: "Can I see the receipt first? Thank you. I can offer to process the toner payment immediately. However, for the EUR 100 courier service, you must complete a purchase voucher first."</p></div>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'receipt', caption: 'Listening · Passage 1: Requesting Reimbursement (Functional)' }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 3 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What could the employee request the custodian do?',
          evidence: 'Employee: "Could you please process my reimbursement for the printer toner?',
          options: [
            {
              t: 'Printer toner, an out-of-pocket expense of EUR 65.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could the employee request the custodian do?</i> — it answers <i>What did the employee pay for as an out-of-pocket expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She can offer to process the toner payment immediately.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could the employee request the custodian do?</i> — it answers <i>What can the custodian offer to do immediately?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He must complete a purchase voucher first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What could the employee request the custodian do?</i> — it answers <i>What must the employee do for the EUR 100 courier payment?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He could request that the custodian process his reimbursement for the printer toner.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Employee: "Could you please process my reimbursement for the printer toner?”'
            }
          ]
        },
        {
          q: '2. What did the employee pay for as an out-of-pocket expense?',
          evidence: 'It was an out-of-pocket expense of EUR 65.',
          options: [
            {
              t: 'Printer toner, an out-of-pocket expense of EUR 65.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “It was an out-of-pocket expense of EUR 65.”'
            },
            {
              t: 'He could request that the custodian process his reimbursement for the printer toner.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the employee pay for as an out-of-pocket expense?</i> — it answers <i>What could the employee request the custodian do?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He must complete a purchase voucher first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the employee pay for as an out-of-pocket expense?</i> — it answers <i>What must the employee do for the EUR 100 courier payment?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She can offer to process the toner payment immediately.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the employee pay for as an out-of-pocket expense?</i> — it answers <i>What can the custodian offer to do immediately?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What can the custodian offer to do immediately?',
          evidence: 'I can offer to process the toner payment immediately.',
          options: [
            {
              t: 'He must complete a purchase voucher first.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What can the custodian offer to do immediately?</i> — it answers <i>What must the employee do for the EUR 100 courier payment?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She can offer to process the toner payment immediately.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I can offer to process the toner payment immediately.”'
            },
            {
              t: 'Printer toner, an out-of-pocket expense of EUR 65.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What can the custodian offer to do immediately?</i> — it answers <i>What did the employee pay for as an out-of-pocket expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He could request that the custodian process his reimbursement for the printer toner.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What can the custodian offer to do immediately?</i> — it answers <i>What could the employee request the custodian do?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What must the employee do for the EUR 100 courier payment?',
          evidence: 'However, for the EUR 100 courier service, you must complete a purchase voucher first.',
          options: [
            {
              t: 'He must complete a purchase voucher first.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “However, for the EUR 100 courier service, you must complete a purchase voucher first.”'
            },
            {
              t: 'He could request that the custodian process his reimbursement for the printer toner.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the employee do for the EUR 100 courier payment?</i> — it answers <i>What could the employee request the custodian do?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Printer toner, an out-of-pocket expense of EUR 65.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the employee do for the EUR 100 courier payment?</i> — it answers <i>What did the employee pay for as an out-of-pocket expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'She can offer to process the toner payment immediately.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the employee do for the EUR 100 courier payment?</i> — it answers <i>What can the custodian offer to do immediately?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What did the employee ask the custodian to do regarding the Financial Controller?',
          evidence: 'Would you mind calling the Financial Controller for approval?',
          options: [
            {
              t: 'She can offer to process the toner payment immediately.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the employee ask the custodian to do regarding the Financial Controller?</i> — it answers <i>What can the custodian offer to do immediately?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He asked whether she would mind calling the Financial Controller for approval.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Would you mind calling the Financial Controller for approval?”'
            },
            {
              t: 'Printer toner, an out-of-pocket expense of EUR 65.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the employee ask the custodian to do regarding the Financial Controller?</i> — it answers <i>What did the employee pay for as an out-of-pocket expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'He could request that the custodian process his reimbursement for the printer toner.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the employee ask the custodian to do regarding the Financial Controller?</i> — it answers <i>What could the employee request the custodian do?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'expense-claim', caption: 'Listening · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's08-grammar-produce',
  prevLabel: 'Grammar · produce it',
  next: 's10-listening-2',
  nextLabel: 'Listening 2'
});
