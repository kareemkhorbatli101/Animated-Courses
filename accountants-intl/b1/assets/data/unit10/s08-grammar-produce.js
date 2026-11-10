/* Unit 10 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Grammar · produce it',
    page: 10,
    section: '08',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · produce it'
  },
  objective: 'Sentence Transformation (Reported Speech)',
  cards: [
    {
      id: 'c1',
      covers: ['2D'],
      ref: '2D',
      bookRef: 'Unit 10 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation (Reported Speech)',
      instruction: 'Report the sentences, changing the time words where necessary.',
      text: '<div style="font-size:16px;line-height:2.4">4. Reported: The Auditor stated that she [[4]] the review the next day.<br>6. Reported: The Manager said that he [[6]] in a meeting the day before.</div>',
      answers: { '4': ['would complete'], '6': ['had been'] },
      bank: ['had been', 'would complete'],
      whyTitle: 'What decided each one',
      why: {
        '4': '<b>would complete</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>had been</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 4.</b> Reported: The Auditor stated that she <u>would complete</u> the review the next day.',
      visual: { spot: 'entry', caption: 'Grammar · Sentence Transformation (Reported Speech)' }
    },
    {
      id: 'c2',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 10 · 2E',
      type: 'discuss',
      title: 'Speaking: Relaying Instructions',
      instruction: 'In pairs, take turns giving and reporting instructions. There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'Student A (Manager): Give a direct instruction using Simple Present or Future.' },
        { q: 'Example: "I need the P&L statement now."' },
        {
          q: 'Student B (Accountant): Report the instruction to a third colleague using Reported Speech.'
        },
        { q: 'Example: "The Manager said that he needed the P&L statement immediately."' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'reporting',
        caption: 'Passing on information, management accounts, summarizing meetings, and conveying decisions.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Reported Speech',
        taught: [
          'In pairs, take turns giving and reporting instructions.',
          'Student A (Manager): Give a direct instruction using Simple Present or Future.',
          'Example: "I need the P&L statement now."',
          'Student B (Accountant): Report the instruction to a third colleague using Reported Speech.'
        ]
      },
      model: 'I need the P&L statement now.'
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
