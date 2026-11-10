/* Unit 10 · s17-reading-3 — Reading 3
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s17-reading-3', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Reading 3',
    page: 10,
    section: '17',
    lesson: 'Part 5 · Reading',
    title: 'Reading 3'
  },
  objective: 'Reading Passage 3: Email from Tax Consultant',
  cards: [
    {
      id: 'c1',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 10 · 5D',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 3: Email from Tax Consultant',
      instruction: 'Read the email from the company’s tax consultant.',
      playable: [
        { t: 'Urgent Update: New VAT Legislation', role: 'narrator', _key: 'narr' },
        {
          t: 'Please note that the government has published new VAT legislation.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The consultant advised that we must implement the changes by the end of the current month.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'He warned that failure to comply would result in heavy penalties.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'He added that he would send a detailed implementation guide next week.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The team lead inquired whether the new rules applied to services as well as goods.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u10-reading-3-c1',
      passage: '<p>Subject: Urgent Update: New VAT Legislation</p><p>Hi Team,</p><p>Please note that the government has published new VAT legislation. The consultant advised that we must implement the changes by the end of the current month. He warned that failure to comply would result in heavy penalties. He added that he would send a detailed implementation guide next week. The team lead inquired whether the new rules applied to services as well as goods.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: { spot: 'source-document', caption: 'Reading · Reading Passage 3: Email from Tax Consultant' }
    },
    {
      id: 'c2',
      covers: ['5D'],
      ref: '5D',
      bookRef: 'Unit 10 · 5D',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What did the consultant advise they must do by the end of the current month?',
          evidence: 'Subject: Urgent Update: New VAT Legislation',
          options: [
            {
              t: 'A detailed implementation guide.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the consultant advise they must do by the end of the current month?</i> — it answers <i>What did he say he would send the following week?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Whether the new rules applied to services as well as goods.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the consultant advise they must do by the end of the current month?</i> — it answers <i>What did the team lead inquire about?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Heavy penalties.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the consultant advise they must do by the end of the current month?</i> — it answers <i>What did he warn would happen if they failed to comply?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Implement the changes required by the new VAT legislation.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Subject: Urgent Update: New VAT Legislation”'
            }
          ]
        },
        {
          q: '2. What did he warn would happen if they failed to comply?',
          evidence: 'He warned that failure to comply would result in heavy penalties.',
          options: [
            {
              t: 'Whether the new rules applied to services as well as goods.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did he warn would happen if they failed to comply?</i> — it answers <i>What did the team lead inquire about?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Heavy penalties.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “He warned that failure to comply would result in heavy penalties.”'
            },
            {
              t: 'Implement the changes required by the new VAT legislation.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did he warn would happen if they failed to comply?</i> — it answers <i>What did the consultant advise they must do by the end of the current month?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A detailed implementation guide.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did he warn would happen if they failed to comply?</i> — it answers <i>What did he say he would send the following week?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What did he say he would send the following week?',
          evidence: 'He added that he would send a detailed implementation guide next week.',
          options: [
            {
              t: 'Whether the new rules applied to services as well as goods.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did he say he would send the following week?</i> — it answers <i>What did the team lead inquire about?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A detailed implementation guide.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “He added that he would send a detailed implementation guide next week.”'
            },
            {
              t: 'Heavy penalties.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did he say he would send the following week?</i> — it answers <i>What did he warn would happen if they failed to comply?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Implement the changes required by the new VAT legislation.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did he say he would send the following week?</i> — it answers <i>What did the consultant advise they must do by the end of the current month?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What did the team lead inquire about?',
          evidence: 'The team lead inquired whether the new rules applied to services as well as goods.',
          options: [
            {
              t: 'Implement the changes required by the new VAT legislation.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the team lead inquire about?</i> — it answers <i>What did the consultant advise they must do by the end of the current month?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Heavy penalties.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the team lead inquire about?</i> — it answers <i>What did he warn would happen if they failed to comply?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Whether the new rules applied to services as well as goods.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The team lead inquired whether the new rules applied to services as well as goods.”'
            },
            {
              t: 'A detailed implementation guide.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What did the team lead inquire about?</i> — it answers <i>What did he say he would send the following week?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What has the government published according to the email?',
          evidence: 'Subject: Urgent Update: New VAT Legislation',
          options: [
            {
              t: 'A detailed implementation guide.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has the government published according to the email?</i> — it answers <i>What did he say he would send the following week?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'New VAT legislation.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Subject: Urgent Update: New VAT Legislation”'
            },
            {
              t: 'Implement the changes required by the new VAT legislation.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has the government published according to the email?</i> — it answers <i>What did the consultant advise they must do by the end of the current month?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Heavy penalties.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has the government published according to the email?</i> — it answers <i>What did he warn would happen if they failed to comply?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'reporting', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's16-reading-2',
  prevLabel: 'Reading 2',
  next: 's18-writing-1',
  nextLabel: 'Writing 1'
});
