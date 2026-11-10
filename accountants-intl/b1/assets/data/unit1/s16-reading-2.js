/* Unit 1 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Reading 2',
    page: 1,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: Internal Email (Current Projects)',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 1 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: Internal Email (Current Projects)',
      instruction: 'Read the email from the IT Manager.',
      playable: [
        { t: 'URGENT: Server Maintenance Today', role: 'narrator', _key: 'narr' },
        { t: 'Finance Team, All Offices', role: 'narrator', _key: 'narr' },
        {
          t: 'Please note that we are performing maintenance on the accounting server today between 12:00 PM and 2:00 PM Central European Time.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'During this time, the ledger module is running very slowly.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We are installing a security patch to protect our data.', role: 'narrator', _key: 'narr' },
        { t: 'Please save your work locally.', role: 'narrator', _key: 'narr' },
        {
          t: 'If you are working on the shared drive, you might lose data.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Currently, our technicians are testing the backup system.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We expect everything to return to normal by 2:30 PM.', role: 'narrator', _key: 'narr' },
        {
          t: 'Colleagues in Singapore, please note that this is the end of your working day.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'Thanks for your patience.', role: 'narrator', _key: 'narr' }
      ],
      scene: 'u1-reading-2-c1',
      passage: '<p>Subject: URGENT: Server Maintenance Today</p><p>From: IT Support</p><p>To: Finance Team, All Offices</p><p>Hi Team,</p><p>Please note that we are performing maintenance on the accounting server today between 12:00 PM and 2:00 PM Central European Time.</p><p>During this time, the ledger module is running very slowly. We are installing a security patch to protect our data.</p><p>Please save your work locally. If you are working on the shared drive, you might lose data.</p><p>Currently, our technicians are testing the backup system. We expect everything to return to normal by 2:30 PM. Colleagues in Singapore, please note that this is the end of your working day.</p><p>Thanks for your patience.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'ledger', caption: 'Reading · Reading Passage 2: Internal Email (Current Projects)' }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 1 · 5C',
      type: 'cloze',
      title: 'Reading Passage 2: Internal Email (Current Projects)',
      instruction: 'Read the email from the IT Manager.',
      text: '<div style="font-size:16px;line-height:2.4">6. Maintenance -> [[6]]<br>7. Patch -> [[7]]<br>8. Locally -> [[8]]<br>9. Technicians -> [[9]]</div>',
      answers: {
        '6': ['servicing — repair and checking work on a system'],
        '7': ['a fix — a small update that closes a security hole'],
        '8': ['on your own computer, not on the shared drive'],
        '9': ['IT specialists — the people who look after the systems']
      },
      bank: [],
      whyTitle: 'What decided each one',
      why: {
        '6': '<b>servicing — repair and checking work on a system</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '7': '<b>a fix — a small update that closes a security hole</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '8': '<b>on your own computer, not on the shared drive</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '9': '<b>IT specialists — the people who look after the systems</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 6.</b> Maintenance -> <u>servicing — repair and checking work on a system</u>',
      visual: {
        spot: 'source-document',
        caption: 'Reading · Reading Passage 2: Internal Email (Current Projects)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 1 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is happening today between 12:00 and 2:00 PM?',
          evidence: 'Please note that we are performing maintenance on the accounting server today between 12:00 PM and 2:00 PM Central European Time.',
          options: [
            {
              t: 'The IT team is performing maintenance on the accounting server.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Please note that we are performing maintenance on the accounting server today between 12:00 PM and 2:00 PM Central European Time.”'
            },
            {
              t: 'It is running very slowly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is happening today between 12:00 and 2:00 PM?</i> — it answers <i>How is the ledger module behaving during this time?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Save your work locally, because you might lose data.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is happening today between 12:00 and 2:00 PM?</i> — it answers <i>What should you do if you are working on the shared drive?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are installing a security patch to protect the company\'s data.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is happening today between 12:00 and 2:00 PM?</i> — it answers <i>Why are they doing this maintenance?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. How is the ledger module behaving during this time?',
          evidence: 'During this time, the ledger module is running very slowly.',
          options: [
            {
              t: 'They are installing a security patch to protect the company\'s data.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is the ledger module behaving during this time?</i> — it answers <i>Why are they doing this maintenance?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Save your work locally, because you might lose data.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is the ledger module behaving during this time?</i> — it answers <i>What should you do if you are working on the shared drive?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The IT team is performing maintenance on the accounting server.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How is the ledger module behaving during this time?</i> — it answers <i>What is happening today between 12:00 and 2:00 PM?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is running very slowly.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “During this time, the ledger module is running very slowly.”'
            }
          ]
        },
        {
          q: '3. Why are they doing this maintenance?',
          evidence: 'We are installing a security patch to protect our data.',
          options: [
            {
              t: 'Save your work locally, because you might lose data.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why are they doing this maintenance?</i> — it answers <i>What should you do if you are working on the shared drive?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are installing a security patch to protect the company\'s data.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We are installing a security patch to protect our data.”'
            },
            {
              t: 'It is running very slowly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why are they doing this maintenance?</i> — it answers <i>How is the ledger module behaving during this time?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The IT team is performing maintenance on the accounting server.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>Why are they doing this maintenance?</i> — it answers <i>What is happening today between 12:00 and 2:00 PM?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What should you do if you are working on the shared drive?',
          evidence: 'Please save your work locally.',
          options: [
            {
              t: 'Save your work locally, because you might lose data.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Please save your work locally.”'
            },
            {
              t: 'The IT team is performing maintenance on the accounting server.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What should you do if you are working on the shared drive?</i> — it answers <i>What is happening today between 12:00 and 2:00 PM?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are installing a security patch to protect the company\'s data.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What should you do if you are working on the shared drive?</i> — it answers <i>Why are they doing this maintenance?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'It is running very slowly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What should you do if you are working on the shared drive?</i> — it answers <i>How is the ledger module behaving during this time?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What are the technicians doing right now?',
          evidence: 'Currently, our technicians are testing the backup system.',
          options: [
            {
              t: 'It is running very slowly.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are the technicians doing right now?</i> — it answers <i>How is the ledger module behaving during this time?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are installing a security patch to protect the company\'s data.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are the technicians doing right now?</i> — it answers <i>Why are they doing this maintenance?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The IT team is performing maintenance on the accounting server.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are the technicians doing right now?</i> — it answers <i>What is happening today between 12:00 and 2:00 PM?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They are testing the backup system.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Currently, our technicians are testing the backup system.”'
            }
          ]
        }
      ],
      visual: { spot: 'accountant', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's15-reading-1',
  prevLabel: 'Reading 1',
  next: 's17-reading-3',
  nextLabel: 'Reading 3'
});
