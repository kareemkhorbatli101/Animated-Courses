/* Unit 1 · s17-reading-3 — Reading 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s17-reading-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Reading 3',
    page: 1,
    section: '17',
    lesson: 'Part 5 · Reading',
    title: 'Reading 3'
  },
  objective: 'Reading Passage 3: Procedure Manual (Instructions)',
  cards: [
    {
      id: 'c1',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 1 · 5D',
      type: 'study',
      source: 'book',
      title: 'Reading Passage 3: Procedure Manual (Instructions)',
      instruction: 'Read the steps for "Petty Cash Reimbursement".',
      html: '<p>Standard Operating Procedure: Petty Cash</p><ol><li>The employee completes a voucher form.</li><li>The employee attaches the original receipt to the back of the voucher.</li><li>The manager signs the voucher to authorize the expense.</li><li>The accountant checks the addition, the date, and the currency.</li><li>The accountant gives cash to the employee from the box.</li><li>Finally, the accountant records the expense in the group system.</li></ol>',
      playable: [{ t: 'Standard Operating Procedure: Petty Cash', role: 'narrator' }],
      doneLabel: 'I have read this',
      brief: 'The last text, and the densest. Read the headings first to see how it is organised, then read for the detail the questions ask about.',
      layout: 'text-first',
      visual: { spot: 'receipt', caption: 'Reading · Reading Passage 3: Procedure Manual (Instructions)' }
    },
    {
      id: 'c2',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 1 · 5D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What must the employee attach to the voucher?',
          evidence: 'the passage above',
          options: [
            {
              t: 'The addition, the date and the currency.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the employee attach to the voucher?</i> — it answers <i>What three things does the accountant check?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'From the petty cash box.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the employee attach to the voucher?</i> — it answers <i>Where does the cash come from?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The original receipt, attached to the back of the voucher.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'The manager, by signing the voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must the employee attach to the voucher?</i> — it answers <i>Who authorizes the expense?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. Who authorizes the expense?',
          evidence: 'the passage above',
          options: [
            {
              t: 'The original receipt, attached to the back of the voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who authorizes the expense?</i> — it answers <i>What must the employee attach to the voucher?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The addition, the date and the currency.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who authorizes the expense?</i> — it answers <i>What three things does the accountant check?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'From the petty cash box.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who authorizes the expense?</i> — it answers <i>Where does the cash come from?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The manager, by signing the voucher.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            }
          ]
        },
        {
          q: '3. What three things does the accountant check?',
          evidence: 'the passage above',
          options: [
            {
              t: 'From the petty cash box.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What three things does the accountant check?</i> — it answers <i>Where does the cash come from?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The addition, the date and the currency.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'The original receipt, attached to the back of the voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What three things does the accountant check?</i> — it answers <i>What must the employee attach to the voucher?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The manager, by signing the voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What three things does the accountant check?</i> — it answers <i>Who authorizes the expense?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. Where does the cash come from?',
          evidence: 'Standard Operating Procedure: Petty Cash',
          options: [
            {
              t: 'The original receipt, attached to the back of the voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where does the cash come from?</i> — it answers <i>What must the employee attach to the voucher?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The manager, by signing the voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where does the cash come from?</i> — it answers <i>Who authorizes the expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'From the petty cash box.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Standard Operating Procedure: Petty Cash”'
            },
            {
              t: 'The addition, the date and the currency.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where does the cash come from?</i> — it answers <i>What three things does the accountant check?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. Where does the accountant record the expense?',
          evidence: 'the passage above',
          options: [
            {
              t: 'The original receipt, attached to the back of the voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where does the accountant record the expense?</i> — it answers <i>What must the employee attach to the voucher?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The manager, by signing the voucher.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where does the accountant record the expense?</i> — it answers <i>Who authorizes the expense?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'In the group system.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'The addition, the date and the currency.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where does the accountant record the expense?</i> — it answers <i>What three things does the accountant check?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'source-document', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's16-reading-2',
  prevLabel: 'Reading 2',
  next: 's18-writing-1',
  nextLabel: 'Writing 1'
});
