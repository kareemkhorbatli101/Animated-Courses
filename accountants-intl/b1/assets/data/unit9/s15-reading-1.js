/* Unit 9 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Reading 1',
    page: 9,
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
      bookRef: 'Unit 9 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'What is the main purpose of CPE in accounting?' },
        { q: 'How often do accountants need to report their CPE hours?' },
        { q: 'What are the benefits of up-skilling in software technology?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'certification',
        caption: 'Career history, software skills (Excel, QuickBooks, Xero), recent achievements, and continuous professional education (C'
      },
      coach: {
        title: 'What this is practising',
        target: 'Present Perfect Simple',
        taught: [
          'Discuss:',
          'What is the main purpose of CPE in accounting?',
          'How often do accountants need to report their CPE hours?',
          'What are the benefits of up-skilling in software technology?'
        ]
      },
      model: 'To keep a qualified accountant current. The rules change every year, and CPE is how the profession checks that its members have kept up with them.'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 9 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: Mandatory CPE Requirements',
      instruction: 'Read the excerpt from a professional body\'s guidelines.',
      playable: [
        {
          t: 'The annual license renewal is dependent on the completion of Continuous Professional Education (CPE).',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'All certified members must have completed a minimum of 40 hours of CPE per calendar year.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The hours must be documented and reported by December 31st.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Since the new regulations were introduced, many accountants have chosen online courses to fulfill their requirements.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We have not approved any extensions for members who have not met the deadline yet this year.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u9-reading-1-c2',
      passage: '<p>The annual license renewal is dependent on the completion of Continuous Professional Education (CPE). All certified members must have completed a minimum of 40 hours of CPE per calendar year. The hours must be documented and reported by December 31st. Since the new regulations were introduced, many accountants have chosen online courses to fulfill their requirements. We have not approved any extensions for members who have not met the deadline yet this year.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'source-document',
        caption: 'Reading · Reading Passage 1: Mandatory CPE Requirements',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 9 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. How many CPE hours must certified members have completed?',
          evidence: 'All certified members must have completed a minimum of 40 hours of CPE per calendar year.',
          options: [
            {
              t: 'By December 31st.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many CPE hours must certified members have completed?</i> — it answers <i>When must the CPE hours be reported?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A minimum of 40 hours per calendar year.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “All certified members must have completed a minimum of 40 hours of CPE per calendar year.”'
            },
            {
              t: 'Any extensions.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many CPE hours must certified members have completed?</i> — it answers <i>What has not been approved for members who missed the deadline?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They have chosen online courses to fulfil their requirements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How many CPE hours must certified members have completed?</i> — it answers <i>What have many accountants chosen to do since the new regulations were introduced?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '2. What have many accountants chosen to do since the new regulations were introduced?',
          evidence: 'Since the new regulations were introduced, many accountants have chosen online courses to fulfill their requirements.',
          options: [
            {
              t: 'By December 31st.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What have many accountants chosen to do since the new regulations were introduced?</i> — it answers <i>When must the CPE hours be reported?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They have chosen online courses to fulfil their requirements.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Since the new regulations were introduced, many accountants have chosen online courses to fulfill their requirements.”'
            },
            {
              t: 'A minimum of 40 hours per calendar year.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What have many accountants chosen to do since the new regulations were introduced?</i> — it answers <i>How many CPE hours must certified members have completed?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Any extensions.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What have many accountants chosen to do since the new regulations were introduced?</i> — it answers <i>What has not been approved for members who missed the deadline?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What has not been approved for members who missed the deadline?',
          evidence: 'We have not approved any extensions for members who have not met the deadline yet this year.',
          options: [
            {
              t: 'By December 31st.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has not been approved for members who missed the deadline?</i> — it answers <i>When must the CPE hours be reported?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Any extensions.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We have not approved any extensions for members who have not met the deadline yet this year.”'
            },
            {
              t: 'They have chosen online courses to fulfil their requirements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has not been approved for members who missed the deadline?</i> — it answers <i>What have many accountants chosen to do since the new regulations were introduced?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A minimum of 40 hours per calendar year.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has not been approved for members who missed the deadline?</i> — it answers <i>How many CPE hours must certified members have completed?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. When must the CPE hours be reported?',
          evidence: 'The hours must be documented and reported by December 31st.',
          options: [
            {
              t: 'By December 31st.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The hours must be documented and reported by December 31st.”'
            },
            {
              t: 'A minimum of 40 hours per calendar year.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When must the CPE hours be reported?</i> — it answers <i>How many CPE hours must certified members have completed?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They have chosen online courses to fulfil their requirements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When must the CPE hours be reported?</i> — it answers <i>What have many accountants chosen to do since the new regulations were introduced?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Any extensions.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>When must the CPE hours be reported?</i> — it answers <i>What has not been approved for members who missed the deadline?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What is the annual license renewal dependent on?',
          evidence: 'The annual license renewal is dependent on the completion of Continuous Professional Education (CPE).',
          options: [
            {
              t: 'On the completion of Continuous Professional Education (CPE).',
              ok: true,
              why: 'Correct. The passage says it in so many words: “The annual license renewal is dependent on the completion of Continuous Professional Education (CPE).”'
            },
            {
              t: 'A minimum of 40 hours per calendar year.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the annual license renewal dependent on?</i> — it answers <i>How many CPE hours must certified members have completed?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'They have chosen online courses to fulfil their requirements.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the annual license renewal dependent on?</i> — it answers <i>What have many accountants chosen to do since the new regulations were introduced?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Any extensions.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the annual license renewal dependent on?</i> — it answers <i>What has not been approved for members who missed the deadline?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'budget', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's14-speaking-present',
  prevLabel: 'Speaking · present it',
  next: 's16-reading-2',
  nextLabel: 'Reading 2'
});
