/* Unit 4 · s01-warmup — Warm-up
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s01-warmup', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Warm-up',
    page: 4,
    section: '01',
    lesson: 'Warm-Up',
    title: 'Warm-up'
  },
  objective: 'The Importance of Inventory',
  cards: [
    {
      id: 'c1',
      covers: ['0A'],
      ref: '0A',
      bookRef: 'Unit 4 · 0A',
      type: 'study',
      source: 'book',
      title: 'The Importance of Inventory',
      instruction: 'Discuss in small groups:',
      html: '<p><b>Context.</b> Inventory management ensures the business has enough supplies without holding excessive stock.</p><ol><li>Name three types of inventory an accounting firm might manage (e.g., stationery, computer paper).</li><li>Why is it important for the Finance Department to track the consumption of supplies?</li><li>What does it mean when an item is considered "obsolete" inventory?</li><li>If you find a major discrepancy between the physical count and the ledger record, what action should you take?</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'ledger', caption: 'Warm-Up · The Importance of Inventory' }
    },
    {
      id: 'c2',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 4 · 0B',
      type: 'study',
      source: 'book',
      title: 'Counting and Measuring',
      instruction: 'The following items are common in inventory and supplies. Classify them as Countable (C) or Uncountable (U).',
      html: '<table class="bt"><thead><tr><th>Item</th><th>Classification</th><th>Item</th><th>Classification</th></tr></thead><tbody><tr><td>1. Paper</td><td></td><td>7. Boxes</td><td></td></tr><tr><td>2. Pencils</td><td></td><td>8. Furniture</td><td></td></tr><tr><td>3. Stationery</td><td></td><td>9. Toners</td><td></td></tr><tr><td>4. Software</td><td></td><td>10. Information</td><td></td></tr><tr><td>5. Money</td><td></td><td>11. Advice</td><td></td></tr><tr><td>6. Invoice</td><td></td><td>12. Equipment</td><td></td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'invoice', caption: 'Warm-Up · Counting and Measuring', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['0C'],
      ref: '0C',
      bookRef: 'Unit 4 · 0C',
      type: 'discuss',
      title: 'Ordering Stock',
      instruction: 'Think-Pair-Share: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        {
          q: 'Think: The Kraków office has very little printing paper and too many binder clips. How would you report these levels to the Procurement Manager?'
        },
        {
          q: 'Pair: Discuss with a partner: You need to order some new computer equipment, but you have many unused monitors. How do you justify ordering new items?'
        },
        {
          q: 'Share: Share your sentences with the class, focusing on using quantifiers (e.g., "We have too many binder clips, but we need a lot of new paper.").'
        }
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
          'Think-Pair-Share:',
          'Think: The Kraków office has very little printing paper and too many binder clips. How would you report these levels to the Procurement Manager?',
          'Pair: Discuss with a partner: You need to order some new computer equipment, but you have many unused monitors. How do you justify ordering new items?',
          'Share: Share your sentences with the class, focusing on using quantifiers (e.g., "We have too many binder clips, but we need a lot of new paper.").'
        ]
      },
      ideas: ['We have too many binder clips', 'but we need a lot of new paper'],
      model: 'I would say there is very little printing paper left and too many binder clips. We need a lot of paper this week, so could we place an order today?'
    }
  ],
  next: 's02-vocab-match',
  nextLabel: 'Vocabulary · match'
});
