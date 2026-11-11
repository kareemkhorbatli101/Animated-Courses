/* Unit 4 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Grammar · produce it',
    page: 4,
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
      bookRef: 'Unit 4 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation',
      instruction: 'Rewrite the sentences using the quantifier in parentheses.',
      text: '<div style="font-size:16px;line-height:2.4">4. Quantifier: There are [[4]] in the supply room.<br>6. Quantifier: The manager said we spend [[6]] money on supplies.</div>',
      answers: { '4': ['There are a few boxes of paper in the supply room.'], '6': ['too much'] },
      bank: ['too much'],
      whyTitle: 'What decided each one',
      why: {
        '4': '<b>There are a few boxes of paper in the supply room.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>too much</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 4.</b> Quantifier: There are <u>There are a few boxes of paper in the supply room.</u> in the supply room.',
      brief: 'Rewrite each sentence. The meaning must survive the change — if it does not, you have changed more than the grammar.',
      visual: { spot: 'entry', caption: 'Grammar · Sentence Transformation' }
    },
    {
      id: 'c2',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 4 · 2E',
      type: 'discuss',
      title: 'Speaking: Discussing Inventory Problems',
      instruction: 'In pairs, practice reporting these inventory issues. Use the correct quantifiers. There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'Problem 1: Too much dust in the storage area (U).' },
        { q: 'Example: "There is too much dust in the storage area. We need to clean it."' },
        { q: 'Problem 2: Not enough new calculators (C).' },
        { q: 'Problem 3: Very little liquid soap for the bathrooms (U).' },
        { q: 'Problem 4: A few broken chairs that need disposal (C).' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'stock',
        caption: 'Stocktaking, counting assets, ordering office stationery, and managing consumables across the group\'s offices.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: [
          'In pairs, practice reporting these inventory issues. Use the correct quantifiers.',
          'Problem 1: Too much dust in the storage area (U).',
          'Example: "There is too much dust in the storage area. We need to clean it."',
          'Problem 2: Not enough new calculators (C).'
        ]
      },
      model: 'There is too much dust in the storage area. We need to clean it.'
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
