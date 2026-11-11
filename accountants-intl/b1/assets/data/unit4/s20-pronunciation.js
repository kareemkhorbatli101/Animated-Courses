/* Unit 4 · s20-pronunciation — Pronunciation
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s20-pronunciation', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Pronunciation',
    page: 4,
    section: '20',
    lesson: 'Part 7 · Pronunciation',
    title: 'Pronunciation'
  },
  objective: 'Syllable Stress: Inventory Management',
  cards: [
    {
      id: 'c1',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 4 · 7A',
      type: 'choiceinline',
      title: 'Syllable Stress: Inventory Management',
      instruction: 'Choose the syllable that carries the stress. Say each word aloud twice before you choose.',
      whyTitle: 'Where the beat falls',
      items: [
        {
          text: 'In-ven-to-ry → the stress falls on {{In|ven|to|ry}}',
          answer: 0,
          why: 'In-ven-to-ry — say it with the beat on <b>IN</b>.'
        },
        {
          text: 'Con-su-mable → the stress falls on {{Con|su|mable}}',
          answer: 1,
          why: 'Con-su-mable — say it with the beat on <b>SU</b>.'
        },
        {
          text: 'Quan-ti-ty → the stress falls on {{Quan|ti|ty}}',
          answer: 0,
          why: 'Quan-ti-ty — say it with the beat on <b>QUAN</b>.'
        },
        {
          text: 'Ob-so-lete → the stress falls on {{Ob|so|lete}}',
          answer: 0,
          why: 'Ob-so-lete — say it with the beat on <b>OB</b>.'
        }
      ],
      brief: 'Stress is where English hides its meaning. Hear the word, say it back twice, then mark where the beat falls.',
      visual: { spot: 'stock', caption: 'Pronunciation · Syllable Stress: Inventory Management' }
    },
    {
      id: 'c2',
      covers: ['7A'],
      ref: '7A',
      bookRef: 'Unit 4 · 7A',
      type: 'phrasebank',
      title: 'Hear each word',
      instruction: 'Click a word to hear it. Say it back twice before you choose the stressed syllable above.',
      role: 'course',
      phrases: ['Inventory', 'Consumable', 'Quantity', 'Obsolete'],
      visual: { spot: 'reporting', caption: 'Pronunciation · Hear each word', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 4 · 7B',
      type: 'study',
      source: 'book',
      title: 'Linking Sounds: Quantifiers',
      instruction: 'Explanation: When a quantifier ends in a consonant sound and the next word starts with a vowel, the words often link together (e.g., a lot of sounds like a loto-v).',
      html: '<ol><li>a lot of /əˈlɒt əv/ inventory</li><li>a few old assets</li><li>not much ink</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'balance', caption: 'Pronunciation · Linking Sounds: Quantifiers', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['7B'],
      ref: '7B',
      bookRef: 'Unit 4 · 7B',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: ['a lot of /əˈlɒt əv/ inventory', 'a few old assets', 'not much ink', 'some equipment'],
      visual: { spot: 'credit', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c5',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 4 · 7C',
      type: 'study',
      source: 'book',
      title: 'Intonation: Confirming Quantity',
      instruction: 'Practice: Read these questions:',
      html: '<p><b>Context.</b> Use rising intonation when asking a specific question about quantity (How much/many).</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'budget', caption: 'Pronunciation · Intonation: Confirming Quantity', cls: 'vis-sm' }
    },
    {
      id: 'c6',
      covers: ['7C'],
      ref: '7C',
      bookRef: 'Unit 4 · 7C',
      type: 'phrasebank',
      title: 'Listen and repeat',
      instruction: 'Click a line to hear it, then read it aloud after the recording.',
      role: 'narrator',
      phrases: [
        '"How much money is left in the budget? (↗)"',
        '"How many boxes do you need to order? (↗)"',
        '"Are there any new software licenses? (↗)"'
      ],
      visual: { spot: 'bookkeeping', caption: 'Pronunciation · Listen and repeat', cls: 'vis-sm' }
    },
    {
      id: 'c7',
      covers: ['7D'],
      ref: '7D',
      bookRef: 'Unit 4 · 7D',
      type: 'study',
      source: 'book',
      title: 'Fluency Drill: Stocktaking Report',
      instruction: 'Read the following passage, maintaining a clear and analytical tone, ensuring correct use of linking and stress.',
      html: '<p>"The stocktaking is finished. We found a few large variances. We have too many pens, but very little paper for the printers. This shows we have not much control over our consumables. We must do a lot of work to improve our records. How much toner did we use this quarter? I need to check that figure."</p>',
      playable: [
        { t: '"The stocktaking is finished.', role: 'narrator' },
        { t: 'We found a few large variances.', role: 'narrator' },
        { t: 'We have too many pens, but very little paper for the printers.', role: 'narrator' },
        { t: 'This shows we have not much control over our consumables.', role: 'narrator' },
        { t: 'We must do a lot of work to improve our records.', role: 'narrator' },
        { t: 'How much toner did we use this quarter?', role: 'narrator' },
        { t: 'I need to check that figure.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'variance', caption: 'Pronunciation · Fluency Drill: Stocktaking Report', cls: 'vis-sm' }
    }
  ],
  prev: 's19-writing-2',
  prevLabel: 'Writing 2',
  next: 's21-review',
  nextLabel: 'Review'
});
