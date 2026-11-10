/* Unit 1 · s04-vocab-context — Vocabulary · in context
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s04-vocab-context', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Vocabulary · in context',
    page: 1,
    section: '04',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in context'
  },
  objective: 'Vocabulary in Context: The New Hire',
  cards: [
    {
      id: 'c1',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 1 · 1C',
      type: 'study',
      source: 'book',
      title: 'Vocabulary in Context: The New Hire',
      instruction: 'Fill in the blanks with the correct word:',
      html: '<p>Internal Email: Welcome to the Team</p><p>To: All Staff</p><p>We are pleased to welcome our new Junior Accountant, Daniel Okoye, who joins the Nairobi office this week.</p><p>His main duties will include data (1) __________ into our group system. He will (2) __________ supplier invoices to the correct ledger accounts.</p><p>Every Friday, he will (3) __________ the petty cash to ensure the physical money matches the records. Please help him with the (4) __________ of physical receipts in the archive room.</p><p>Accuracy is vital, so he will (5) __________ all figures before submitting them to the Senior Accountant in Kraków. Please verify that your supplier details are correct in the (6) __________.</p>',
      playable: [
        { t: 'Welcome to the Team', role: 'narrator' },
        {
          t: 'We are pleased to welcome our new Junior Accountant, Daniel Okoye, who joins the Nairobi office this week.',
          role: 'narrator'
        },
        {
          t: 'His main duties will include data (1) __________ into our group system.',
          role: 'narrator'
        },
        {
          t: 'He will (2) __________ supplier invoices to the correct ledger accounts.',
          role: 'narrator'
        },
        {
          t: 'Every Friday, he will (3) __________ the petty cash to ensure the physical money matches the records.',
          role: 'narrator'
        },
        {
          t: 'Please help him with the (4) __________ of physical receipts in the archive room.',
          role: 'narrator'
        },
        {
          t: 'Accuracy is vital, so he will (5) __________ all figures before submitting them to the Senior Accountant in Kraków.',
          role: 'narrator'
        },
        {
          t: 'Please verify that your supplier details are correct in the (6) __________.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'receipt', caption: 'Vocabulary · Vocabulary in Context: The New Hire' }
    },
    {
      id: 'c2',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 1 · 1C',
      type: 'cloze',
      title: 'Vocabulary in Context: The New Hire',
      instruction: 'Fill in the blanks with the correct word: Every word you need is in the bank below.',
      text: '<div style="font-size:16px;line-height:2.2"><p>Internal Email: Welcome to the Team</p><p>To: All Staff</p><p>We are pleased to welcome our new Junior Accountant, Daniel Okoye, who joins the Nairobi office this week.</p><p>His main duties will include data [[1]] into our group system. He will [[2]] supplier invoices to the correct ledger accounts.</p><p>Every Friday, he will [[3]] the petty cash to ensure the physical money matches the records. Please help him with the [[4]] of physical receipts in the archive room.</p><p>Accuracy is vital, so he will [[5]] all figures before submitting them to the Senior Accountant in Kraków. Please verify that your supplier details are correct in the [[6]].</p></div>',
      answers: {
        '1': ['entry'],
        '2': ['post'],
        '3': ['reconcile'],
        '4': ['filing'],
        '5': ['double-check'],
        '6': ['database']
      },
      bank: ['database', 'double-check', 'entry', 'filing', 'post', 'reconcile'],
      whyTitle: 'The completed memo',
      notes: null,
      visual: { spot: 'entry', caption: 'Vocabulary · Vocabulary in Context: The New Hire', cls: 'vis-sm' }
    }
  ],
  prev: 's03-vocab-gaps',
  prevLabel: 'Vocabulary · in use',
  next: 's05-vocab-build',
  nextLabel: 'Word building'
});
