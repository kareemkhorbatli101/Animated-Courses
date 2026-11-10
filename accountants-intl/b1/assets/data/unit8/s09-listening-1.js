/* Unit 8 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Listening 1',
    page: 8,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: The Standard Procedure (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 8 · 3A',
      type: 'scene',
      source: 'book',
      title: 'Passage 1: The Standard Procedure (Functional)',
      instruction: 'Comprehension Questions:',
      playable: [
        {
          t: '"First, all original source documents are scanned and uploaded.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Then, the transactions are analyzed to determine their effect on the accounting equation.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'Following this, the journal entries are recorded.', role: 'narrator', _key: 'narr' },
        { t: 'Finally, the data is posted to the General Ledger.', role: 'narrator', _key: 'narr' },
        {
          t: 'All of these steps must be completed before the trial balance can be generated.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u8-listening-1-c1',
      passage: '<p><b>Context.</b> An instruction manual is being read aloud.</p><div class="script"><p>"First, all original source documents are scanned and uploaded. Then, the transactions are analyzed to determine their effect on the accounting equation. Following this, the journal entries are recorded. Finally, the data is posted to the General Ledger. All of these steps must be completed before the trial balance can be generated."</p></div>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'trial-balance',
        caption: 'Listening · Passage 1: The Standard Procedure (Functional)'
      }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 8 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is done with the source documents?',
          evidence: '"First, all original source documents are scanned and uploaded.',
          options: [
            {
              t: 'Their effect on the accounting equation.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is done with the source documents?</i> — it answers <i>What is determined by analyzing the transactions?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'To the General Ledger.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is done with the source documents?</i> — it answers <i>Where is the data posted?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'All of the steps — scanning and uploading, analysis, recording the journal entries, and posting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is done with the source documents?</i> — it answers <i>What must be completed before the trial balance is generated?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are scanned and uploaded.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “"First, all original source documents are scanned and uploaded.”'
            }
          ]
        },
        {
          q: '2. What is determined by analyzing the transactions?',
          evidence: 'Then, the transactions are analyzed to determine their effect on the accounting equation.',
          options: [
            {
              t: 'To the General Ledger.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is determined by analyzing the transactions?</i> — it answers <i>Where is the data posted?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'All of the steps — scanning and uploading, analysis, recording the journal entries, and posting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is determined by analyzing the transactions?</i> — it answers <i>What must be completed before the trial balance is generated?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are scanned and uploaded.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is determined by analyzing the transactions?</i> — it answers <i>What is done with the source documents?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Their effect on the accounting equation.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Then, the transactions are analyzed to determine their effect on the accounting equation.”'
            }
          ]
        },
        {
          q: '3. Where is the data posted?',
          evidence: 'Finally, the data is posted to the General Ledger.',
          options: [
            {
              t: 'To the General Ledger.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Finally, the data is posted to the General Ledger.”'
            },
            {
              t: 'They are scanned and uploaded.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where is the data posted?</i> — it answers <i>What is done with the source documents?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'All of the steps — scanning and uploading, analysis, recording the journal entries, and posting.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where is the data posted?</i> — it answers <i>What must be completed before the trial balance is generated?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Their effect on the accounting equation.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Where is the data posted?</i> — it answers <i>What is determined by analyzing the transactions?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What must be completed before the trial balance is generated?',
          evidence: 'the passage above',
          options: [
            {
              t: 'They are scanned and uploaded.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must be completed before the trial balance is generated?</i> — it answers <i>What is done with the source documents?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Their effect on the accounting equation.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must be completed before the trial balance is generated?</i> — it answers <i>What is determined by analyzing the transactions?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'All of the steps — scanning and uploading, analysis, recording the journal entries, and posting.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'To the General Ledger.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What must be completed before the trial balance is generated?</i> — it answers <i>Where is the data posted?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What modal verb is used to express necessity?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Their effect on the accounting equation.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What modal verb is used to express necessity?</i> — it answers <i>What is determined by analyzing the transactions?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'To the General Ledger.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What modal verb is used to express necessity?</i> — it answers <i>Where is the data posted?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are scanned and uploaded.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What modal verb is used to express necessity?</i> — it answers <i>What is done with the source documents?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'must',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            }
          ]
        }
      ],
      visual: { spot: 'transaction', caption: 'Listening · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's08-grammar-produce',
  prevLabel: 'Grammar · produce it',
  next: 's10-listening-2',
  nextLabel: 'Listening 2'
});
