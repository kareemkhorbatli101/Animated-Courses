/* Unit 9 · s04-vocab-context — Vocabulary · in context
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s04-vocab-context', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Vocabulary · in context',
    page: 9,
    section: '04',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in context'
  },
  objective: 'Vocabulary in Context: Software and Experience',
  cards: [
    {
      id: 'c1',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 9 · 1C',
      type: 'study',
      source: 'book',
      title: 'Vocabulary in Context: Software and Experience',
      instruction: 'Fill in the blanks with the correct word from the box:',
      html: '<p>"I have worked in this field since 2018. My (1) ________ includes financial reporting and tax planning. I have high (2) ________ in Excel, especially with (3) ________ functions. We recently completed the (4) ________ of our sales software with the General (5) ________. I have also completed several training (6) ________ on new IFRS standards."</p>',
      playable: [
        { t: '"I have worked in this field since 2018.', role: 'narrator' },
        { t: 'My (1) ________ includes financial reporting and tax planning.', role: 'narrator' },
        {
          t: 'I have high (2) ________ in Excel, especially with (3) ________ functions.',
          role: 'narrator'
        },
        {
          t: 'We recently completed the (4) ________ of our sales software with the General (5) ________.',
          role: 'narrator'
        },
        {
          t: 'I have also completed several training (6) ________ on new IFRS standards.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'certification',
        caption: 'Vocabulary · Vocabulary in Context: Software and Experience'
      }
    },
    {
      id: 'c2',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 9 · 1C',
      type: 'cloze',
      title: 'Vocabulary in Context: Software and Experience',
      instruction: 'Fill in the blanks with the correct word from the box: Every word you need is in the bank below.',
      text: '<div style="font-size:16px;line-height:2.2"><p>"I have worked in this field since 2018. My [[1]] includes financial reporting and tax planning. I have high [[2]] in Excel, especially with [[3]] functions. We recently completed the [[4]] of our sales software with the General [[5]]. I have also completed several training [[6]] on new IFRS standards."</p></div>',
      answers: {
        '1': ['portfolio'],
        '2': ['proficiency'],
        '3': ['advanced'],
        '4': ['integration'],
        '5': ['ledger'],
        '6': ['modules']
      },
      bank: ['advanced', 'integration', 'ledger', 'modules', 'portfolio', 'proficiency'],
      whyTitle: 'The completed memo',
      notes: null,
      visual: {
        spot: 'ledger',
        caption: 'Vocabulary · Vocabulary in Context: Software and Experience',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's03-vocab-gaps',
  prevLabel: 'Vocabulary · in use',
  next: 's05-vocab-build',
  nextLabel: 'Word building'
});
