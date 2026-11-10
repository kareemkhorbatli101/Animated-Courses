/* Unit 10 · s16-reading-2 — Reading 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s16-reading-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Reading 2',
    page: 10,
    section: '16',
    lesson: 'Part 5 · Reading',
    title: 'Reading 2'
  },
  objective: 'Reading Passage 2: Minutes of a Budget Meeting',
  cards: [
    {
      id: 'c1',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 10 · 5C',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 2: Minutes of a Budget Meeting',
      instruction: 'Read the key section from the minutes of a strategic budget review meeting.',
      playable: [
        { t: '2025 Capital Expenditure Review', role: 'narrator', _key: 'narr' },
        {
          t: 'Mr Farouk stated that the new machinery budget of EUR 2.5 million was approved. He emphasized that future expenditure would be closely monitored. The Head of Operations asked if the Finance Department would review all current leasing agreements. Mr Farouk said that Finance had already begun that review the previous week.',
          role: 'spk:Group Finance Manager',
          who: 'Group Finance Manager',
          _key: 'groupfinancemanager'
        }
      ],
      scene: 'u10-reading-2-c1',
      passage: '<p>Date: October 25, 2024</p><p>Topic: 2025 Capital Expenditure Review</p><p>Group Finance Manager: Mr Farouk stated that the new machinery budget of EUR 2.5 million was approved. He emphasized that future expenditure would be closely monitored. The Head of Operations asked if the Finance Department would review all current leasing agreements. Mr Farouk said that Finance had already begun that review the previous week.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'budget', caption: 'Reading · Reading Passage 2: Minutes of a Budget Meeting' }
    },
    {
      id: 'c2',
      covers: ['5C'],
      ref: '5C',
      bookRef: 'Unit 10 · 5C',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What did Mr Farouk state was approved?',
          evidence: 'Group Finance Manager: Mr Farouk stated that the new machinery budget of EUR 2.',
          options: [
            {
              t: 'The new machinery budget of EUR 2.5 million.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Group Finance Manager: Mr Farouk stated that the new machinery budget of EUR 2.”'
            },
            {
              t: 'That it would be closely monitored.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did Mr Farouk state was approved?</i> — it answers <i>What did he emphasize about future expenditure?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Whether it would review all current leasing agreements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did Mr Farouk state was approved?</i> — it answers <i>What did the Head of Operations ask the Finance Department?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That Finance had already begun that review the previous week.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did Mr Farouk state was approved?</i> — it answers <i>What did Mr Farouk reply about the leasing agreements?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What did he emphasize about future expenditure?',
          evidence: 'He emphasized that future expenditure would be closely monitored.',
          options: [
            {
              t: 'That Finance had already begun that review the previous week.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did he emphasize about future expenditure?</i> — it answers <i>What did Mr Farouk reply about the leasing agreements?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That it would be closely monitored.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “He emphasized that future expenditure would be closely monitored.”'
            },
            {
              t: 'Whether it would review all current leasing agreements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did he emphasize about future expenditure?</i> — it answers <i>What did the Head of Operations ask the Finance Department?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The new machinery budget of EUR 2.5 million.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did he emphasize about future expenditure?</i> — it answers <i>What did Mr Farouk state was approved?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What did the Head of Operations ask the Finance Department?',
          evidence: 'The Head of Operations asked if the Finance Department would review all current leasing agreements.',
          options: [
            {
              t: 'Whether it would review all current leasing agreements.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The Head of Operations asked if the Finance Department would review all current leasing agreements.”'
            },
            {
              t: 'The new machinery budget of EUR 2.5 million.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Head of Operations ask the Finance Department?</i> — it answers <i>What did Mr Farouk state was approved?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That it would be closely monitored.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Head of Operations ask the Finance Department?</i> — it answers <i>What did he emphasize about future expenditure?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That Finance had already begun that review the previous week.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the Head of Operations ask the Finance Department?</i> — it answers <i>What did Mr Farouk reply about the leasing agreements?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What did Mr Farouk reply about the leasing agreements?',
          evidence: 'Mr Farouk said that Finance had already begun that review the previous week.',
          options: [
            {
              t: 'That Finance had already begun that review the previous week.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Mr Farouk said that Finance had already begun that review the previous week.”'
            },
            {
              t: 'The new machinery budget of EUR 2.5 million.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did Mr Farouk reply about the leasing agreements?</i> — it answers <i>What did Mr Farouk state was approved?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Whether it would review all current leasing agreements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did Mr Farouk reply about the leasing agreements?</i> — it answers <i>What did the Head of Operations ask the Finance Department?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'That it would be closely monitored.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did Mr Farouk reply about the leasing agreements?</i> — it answers <i>What did he emphasize about future expenditure?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What was the topic of the meeting?',
          evidence: 'Topic: 2025 Capital Expenditure Review',
          options: [
            {
              t: 'That it would be closely monitored.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the topic of the meeting?</i> — it answers <i>What did he emphasize about future expenditure?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Whether it would review all current leasing agreements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the topic of the meeting?</i> — it answers <i>What did the Head of Operations ask the Finance Department?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The new machinery budget of EUR 2.5 million.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What was the topic of the meeting?</i> — it answers <i>What did Mr Farouk state was approved?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The 2025 Capital Expenditure Review.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Topic: 2025 Capital Expenditure Review”'
            }
          ]
        }
      ],
      visual: { spot: 'source-document', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's15-reading-1',
  prevLabel: 'Reading 1',
  next: 's17-reading-3',
  nextLabel: 'Reading 3'
});
