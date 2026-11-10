/* Unit 9 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Grammar · produce it',
    page: 9,
    section: '08',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · produce it'
  },
  objective: 'Sentence Transformation (Past Simple to Present Perfect)',
  cards: [
    {
      id: 'c1',
      covers: ['2D'],
      ref: '2D',
      bookRef: 'Unit 9 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation (Past Simple to Present Perfect)',
      instruction: 'Rewrite the sentences using the Present Perfect Simple, focusing on the current relevance of the action.',
      text: '<div style="font-size:16px;line-height:2.4">4. Present Perfect: She has [[4]] SAP before.<br>6. Present Perfect: We have [[6]] all our data to the cloud.</div>',
      answers: { '4': ['used'], '6': ['migrated'] },
      bank: ['migrated', 'used'],
      whyTitle: 'What decided each one',
      why: {
        '4': '<b>used</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>migrated</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 4.</b> Present Perfect: She has <u>used</u> SAP before.',
      visual: {
        spot: 'entry',
        caption: 'Grammar · Sentence Transformation (Past Simple to Present Perfect)'
      }
    },
    {
      id: 'c2',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 9 · 2E',
      type: 'discuss',
      title: 'Speaking: Discussing Recent Accomplishments',
      instruction: 'In pairs, describe the following using the Present Perfect Simple with JUST or RECENTLY. There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'Finish a report.' },
        { q: 'Solve a complex reconciliation problem.' },
        { q: 'Learn a new Excel formula (e.g., XLOOKUP).' },
        { q: 'Have a meeting with the Group CFO.' },
        { q: 'Get a new project assigned.' },
        { q: 'Example A: "I have just finished the quarterly variance report."' },
        { q: 'Example B: "We have recently solved a complex VAT issue."' }
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
          'In pairs, describe the following using the Present Perfect Simple with JUST or RECENTLY.',
          'Finish a report.',
          'Solve a complex reconciliation problem.',
          'Learn a new Excel formula (e.g., XLOOKUP).'
        ]
      },
      ideas: ['XLOOKUP'],
      model: 'I have just finished the quarterly variance report.'
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
