/* Unit 5 · s04-vocab-context — Vocabulary · in context
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s04-vocab-context', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Vocabulary · in context',
    page: 5,
    section: '04',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in context'
  },
  objective: 'Vocabulary in Context: Cash Flow Meeting',
  cards: [
    {
      id: 'c1',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 5 · 1C',
      type: 'study',
      source: 'book',
      title: 'Vocabulary in Context: Cash Flow Meeting',
      instruction: 'Fill in the blanks with the correct word from the box:',
      html: '<p>The Accounts Payable team in Kraków is preparing for the weekly (1) ________. We must prioritize payments to suppliers to reduce our financial (2) ________. On the Accounts Receivable side, we have a major (3) ________ whose settlement is critical to our cash (4) ________. We need to contact them to discuss the final (5) ________. We must also review the standard credit (6) ________ given to new customers.</p>',
      playable: [
        {
          t: 'The Accounts Payable team in Kraków is preparing for the weekly (1) ________.',
          role: 'narrator'
        },
        {
          t: 'We must prioritize payments to suppliers to reduce our financial (2) ________.',
          role: 'narrator'
        },
        {
          t: 'On the Accounts Receivable side, we have a major (3) ________ whose settlement is critical to our cash (4) ________.',
          role: 'narrator'
        },
        { t: 'We need to contact them to discuss the final (5) ________.', role: 'narrator' },
        {
          t: 'We must also review the standard credit (6) ________ given to new customers.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'credit', caption: 'Vocabulary · Vocabulary in Context: Cash Flow Meeting' }
    },
    {
      id: 'c2',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 5 · 1C',
      type: 'cloze',
      title: 'Vocabulary in Context: Cash Flow Meeting',
      instruction: 'Fill in the blanks with the correct word from the box: Every word you need is in the bank below.',
      text: '<div style="font-size:16px;line-height:2.2"><p>The Accounts Payable team in Kraków is preparing for the weekly [[1]]. We must prioritize payments to suppliers to reduce our financial [[2]]. On the Accounts Receivable side, we have a major [[3]] whose settlement is critical to our cash [[4]]. We need to contact them to discuss the final [[5]]. We must also review the standard credit [[6]] given to new customers.</p></div>',
      answers: {
        '1': ['payment run'],
        '2': ['exposure'],
        '3': ['debtor'],
        '4': ['inflow'],
        '5': ['settlement'],
        '6': ['terms']
      },
      bank: ['debtor', 'exposure', 'inflow', 'payment run', 'settlement', 'terms'],
      whyTitle: 'The completed memo',
      notes: null,
      visual: {
        spot: 'debtor',
        caption: 'Vocabulary · Vocabulary in Context: Cash Flow Meeting',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's03-vocab-gaps',
  prevLabel: 'Vocabulary · in use',
  next: 's05-vocab-build',
  nextLabel: 'Word building'
});
