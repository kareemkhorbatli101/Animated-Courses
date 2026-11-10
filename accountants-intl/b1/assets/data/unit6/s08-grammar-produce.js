/* Unit 6 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Grammar · produce it',
    page: 6,
    section: '08',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · produce it'
  },
  objective: 'Sentence Transformation',
  cards: [
    {
      id: 'c1',
      covers: ['2D'],
      ref: '2D',
      bookRef: 'Unit 6 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation',
      instruction: 'Rewrite the sentences using the conditional in parentheses.',
      text: '<div style="font-size:16px;line-height:2.4">4. Conditional: If the auditor [[4a]] the error, he [[4b]] accept it.<br>6. Conditional: If I [[6a]] you, I [[6b]] the journal entry.</div>',
      answers: { '4a': ['found'], '4b': ['would not'], '6a': ['were'], '6b': ['would reverse'] },
      bank: ['found', 'were', 'would not', 'would reverse'],
      whyTitle: 'What decided each one',
      why: {
        '4a': '<b>found</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4b': '<b>would not</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6a': '<b>were</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6b': '<b>would reverse</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 4.</b> Conditional: If the auditor <u>found</u> the error, he ____________________ accept it.',
      visual: { spot: 'entry', caption: 'Grammar · Sentence Transformation' }
    },
    {
      id: 'c2',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 6 · 2E',
      type: 'discuss',
      title: 'Speaking: Discussing Risk and Advice',
      instruction: 'In pairs, practice using the Conditionals for these scenarios. There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        {
          q: 'Scenario 1 (Real Consequence): Not checking the supplier details -> Duplicate payment.'
        },
        {
          q: 'Example: "If you don\'t check the supplier details, you will make a duplicate payment."'
        },
        { q: 'Scenario 2 (Hypothetical Advice): You find an omission -> What would you do?' },
        { q: 'Scenario 3 (Real Consequence): Failing to reverse the error -> Misstated profits.' },
        {
          q: 'Scenario 4 (Hypothetical Situation): If you were in charge of all internal controls -> What would you change?'
        }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'discrepancy',
        caption: 'Bank reconciliation, spotting mistakes, internal controls, and fraud prevention.'
      },
      coach: {
        title: 'What this is practising',
        target: 'First and Second Conditionals',
        taught: [
          'In pairs, practice using the Conditionals for these scenarios.',
          'Scenario 1 (Real Consequence): Not checking the supplier details -> Duplicate payment.',
          'Example: "If you don\'t check the supplier details, you will make a duplicate payment."',
          'Scenario 2 (Hypothetical Advice): You find an omission -> What would you do?'
        ]
      },
      model: 'If you don\'t check the supplier details, you will make a duplicate payment.'
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
