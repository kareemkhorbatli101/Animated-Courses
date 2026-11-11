/* Unit 9 · s09-listening-1 — Listening 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s09-listening-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Listening 1',
    page: 9,
    section: '09',
    lesson: 'Part 3 · Listening',
    title: 'Listening 1'
  },
  objective: 'Passage 1: Software Proficiency (Functional)',
  cards: [
    {
      id: 'c1',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 9 · 3A',
      type: 'scene',
      source: 'book',
      title: 'Passage 1: Software Proficiency (Functional)',
      instruction: 'Comprehension Questions:',
      playable: [
        { t: '"Ryan, your review is excellent.', role: 'narrator', _key: 'narr' },
        { t: 'I see that you have used QuickBooks for over four years.', role: 'narrator', _key: 'narr' },
        {
          t: 'However, you haven\'t had any experience with our new SAP ERP system yet.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We have scheduled you for a training session next month.', role: 'narrator', _key: 'narr' },
        {
          t: 'You have shown great aptitude in other areas, so we expect you will master it quickly.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'You will hear two or three people at work, once through at normal speed. Listen for WHO wants what — the questions below are about the facts, not the words, so you do not need every word to answer them.',
      scene: 'u9-listening-1-c1',
      passage: {
        paras: [
          { h: '<b>Context.</b> A manager is discussing an employee\'s software skills.', speak: false },
          {
            h: '"Ryan, your review is excellent. I see that you have used QuickBooks for over four years. That\'s great. However, you haven\'t had any experience with our new SAP ERP system yet. We have scheduled you for a training session next month. You have shown great aptitude in other areas, so we expect you will master it quickly."',
            say: 'Ryan, your review is excellent. I see that you have used QuickBooks for over four years. That\'s great. However, you haven\'t had any experience with our new SAP ERP system yet. We have scheduled you for a training session next month. You have shown great aptitude in other areas, so we expect you will master it quickly.'
          }
        ],
        say: { scene: 'u9-listening-1-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: { spot: 'reporting', caption: 'Listening · Passage 1: Software Proficiency (Functional)' }
    },
    {
      id: 'c2',
      covers: ['3A'],
      ref: '3A',
      bookRef: 'Unit 9 · 3A',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. How long has Ryan used QuickBooks?',
          evidence: 'I see that you have used QuickBooks for over four years.',
          options: [
            {
              t: 'The new SAP ERP system.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How long has Ryan used QuickBooks?</i> — it answers <i>What software has Ryan not used yet?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A training session.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How long has Ryan used QuickBooks?</i> — it answers <i>What has been scheduled for Ryan next month?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Master the SAP ERP system.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>How long has Ryan used QuickBooks?</i> — it answers <i>What does the manager expect Ryan to do quickly?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'For over four years.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “I see that you have used QuickBooks for over four years.”'
            }
          ]
        },
        {
          q: '2. What software has Ryan not used yet?',
          evidence: 'However, you haven\'t had any experience with our new SAP ERP system yet.',
          options: [
            {
              t: 'The new SAP ERP system.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “However, you haven\'t had any experience with our new SAP ERP system yet.”'
            },
            {
              t: 'For over four years.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What software has Ryan not used yet?</i> — it answers <i>How long has Ryan used QuickBooks?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A training session.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What software has Ryan not used yet?</i> — it answers <i>What has been scheduled for Ryan next month?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Master the SAP ERP system.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What software has Ryan not used yet?</i> — it answers <i>What does the manager expect Ryan to do quickly?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What has been scheduled for Ryan next month?',
          evidence: 'We have scheduled you for a training session next month.',
          options: [
            {
              t: 'A training session.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We have scheduled you for a training session next month.”'
            },
            {
              t: 'For over four years.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has been scheduled for Ryan next month?</i> — it answers <i>How long has Ryan used QuickBooks?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Master the SAP ERP system.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has been scheduled for Ryan next month?</i> — it answers <i>What does the manager expect Ryan to do quickly?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The new SAP ERP system.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has been scheduled for Ryan next month?</i> — it answers <i>What software has Ryan not used yet?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What does the manager expect Ryan to do quickly?',
          evidence: 'However, you haven\'t had any experience with our new SAP ERP system yet.',
          options: [
            {
              t: 'The new SAP ERP system.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What does the manager expect Ryan to do quickly?</i> — it answers <i>What software has Ryan not used yet?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A training session.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What does the manager expect Ryan to do quickly?</i> — it answers <i>What has been scheduled for Ryan next month?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Master the SAP ERP system.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “However, you haven\'t had any experience with our new SAP ERP system yet.”'
            },
            {
              t: 'For over four years.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What does the manager expect Ryan to do quickly?</i> — it answers <i>How long has Ryan used QuickBooks?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What has Ryan shown in other areas?',
          evidence: 'You have shown great aptitude in other areas, so we expect you will master it quickly.',
          options: [
            {
              t: 'Great aptitude.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “You have shown great aptitude in other areas, so we expect you will master it quickly.”'
            },
            {
              t: 'For over four years.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has Ryan shown in other areas?</i> — it answers <i>How long has Ryan used QuickBooks?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The new SAP ERP system.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has Ryan shown in other areas?</i> — it answers <i>What software has Ryan not used yet?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'A training session.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What has Ryan shown in other areas?</i> — it answers <i>What has been scheduled for Ryan next month?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        }
      ],
      visual: { spot: 'certification', caption: 'Listening · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's08-grammar-produce',
  prevLabel: 'Grammar · produce it',
  next: 's10-listening-2',
  nextLabel: 'Listening 2'
});
