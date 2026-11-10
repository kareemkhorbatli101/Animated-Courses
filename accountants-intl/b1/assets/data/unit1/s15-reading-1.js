/* Unit 1 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Reading 1',
    page: 1,
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
      bookRef: 'Unit 1 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'Why is it important to read the "Subject Line" of an email first?' },
        { q: 'Do you prefer reading physical manuals or digital help guides?' },
        { q: 'What is a "Job Description"?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'accountant',
        caption: 'Daily routines, bookkeeping tasks, and the role of a junior accountant in a shared service centre.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Present Simple vs. Present Continuous.',
        taught: [
          'Discuss:',
          'Why is it important to read the "Subject Line" of an email first?',
          'Do you prefer reading physical manuals or digital help guides?',
          'What is a "Job Description"?'
        ]
      },
      model: 'Because the subject line tells you what the message is about and how urgent it is, so you can decide whether to read it now or after the posting run.'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 1 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: Job Description (Routine Duties)',
      instruction: 'Read the posting for a Junior Accountant.',
      playable: [
        { t: 'Kraków Shared Service Centre', role: 'narrator', _key: 'narr' },
        { t: 'Senior Finance Manager', role: 'narrator', _key: 'narr' }
      ],
      scene: 'u1-reading-1-c2',
      passage: '<p>JOB VACANCY: JUNIOR ACCOUNTANT</p><p>Location: Kraków Shared Service Centre</p><p>Reports to: Senior Finance Manager</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'source-document',
        caption: 'Reading · Reading Passage 1: Job Description (Routine Duties)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 1 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '9. Who does this position report to?',
          evidence: 'Reports to: Senior Finance Manager',
          options: [
            {
              t: 'Daily, in three currencies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who does this position report to?</i> — it answers <i>How often does the accountant reconcile bank accounts, and in how many currencies?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Accounting support for the group\'s six operating companies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who does this position report to?</i> — it answers <i>What kind of support does the accountant provide?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'To protect the organization\'s value.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Who does this position report to?</i> — it answers <i>Why must the accountant keep information confidential?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The Senior Finance Manager.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Reports to: Senior Finance Manager”'
            }
          ]
        },
        {
          q: '10. How often does the accountant reconcile bank accounts, and in how many currencies?',
          evidence: 'the passage above',
          options: [
            {
              t: 'To protect the organization\'s value.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How often does the accountant reconcile bank accounts, and in how many currencies?</i> — it answers <i>Why must the accountant keep information confidential?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Daily, in three currencies.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'Accounting support for the group\'s six operating companies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How often does the accountant reconcile bank accounts, and in how many currencies?</i> — it answers <i>What kind of support does the accountant provide?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The Senior Finance Manager.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How often does the accountant reconcile bank accounts, and in how many currencies?</i> — it answers <i>Who does this position report to?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '11. What kind of support does the accountant provide?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Accounting support for the group\'s six operating companies.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'The Senior Finance Manager.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What kind of support does the accountant provide?</i> — it answers <i>Who does this position report to?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'To protect the organization\'s value.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What kind of support does the accountant provide?</i> — it answers <i>Why must the accountant keep information confidential?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Daily, in three currencies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What kind of support does the accountant provide?</i> — it answers <i>How often does the accountant reconcile bank accounts, and in how many currencies?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '12. Why must the accountant keep information confidential?',
          evidence: 'the passage above',
          options: [
            {
              t: 'The Senior Finance Manager.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why must the accountant keep information confidential?</i> — it answers <i>Who does this position report to?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Daily, in three currencies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why must the accountant keep information confidential?</i> — it answers <i>How often does the accountant reconcile bank accounts, and in how many currencies?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'To protect the organization\'s value.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'Accounting support for the group\'s six operating companies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why must the accountant keep information confidential?</i> — it answers <i>What kind of support does the accountant provide?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '13. What degree is required?',
          evidence: 'the passage above',
          options: [
            {
              t: 'Accounting support for the group\'s six operating companies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What degree is required?</i> — it answers <i>What kind of support does the accountant provide?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A Bachelor\'s degree in Accounting.',
              ok: true,
              why: 'Correct — this is what the passage says, and the only option it supports.'
            },
            {
              t: 'Daily, in three currencies.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What degree is required?</i> — it answers <i>How often does the accountant reconcile bank accounts, and in how many currencies?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The Senior Finance Manager.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What degree is required?</i> — it answers <i>Who does this position report to?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'transaction', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's14-speaking-present',
  prevLabel: 'Speaking · present it',
  next: 's16-reading-2',
  nextLabel: 'Reading 2'
});
