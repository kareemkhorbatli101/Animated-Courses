/* Unit 8 · s10-listening-2 — Listening 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s10-listening-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Listening 2',
    page: 8,
    section: '10',
    lesson: 'Part 3 · Listening',
    title: 'Listening 2'
  },
  objective: 'Passage 2: Explaining a Delay (Operating Context)',
  cards: [
    {
      id: 'c1',
      covers: ['3B'],
      ref: '3B',
      bookRef: 'Unit 8 · 3B',
      type: 'scene',
      source: 'book',
      title: 'Passage 2: Explaining a Delay (Operating Context)',
      instruction: 'Read this before you go on.',
      playable: [
        {
          t: '"The statements were delayed because of an issue with the bank reconciliation.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'A significant difference was found between the bank statement and our cash account.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The error was identified and corrected by the junior accountant this morning.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'The adjusted trial balance is now being prepared, and the final report will be approved by the Group CFO this afternoon.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      brief: 'A second conversation, and this time the statements below are true or false. Decide from what is said, not from what would usually be true in an accounts office.',
      scene: 'u8-listening-2-c1',
      passage: {
        paras: [
          {
            h: '<b>Context.</b> A manager explains why the financial statements are late.',
            speak: false
          },
          {
            h: '"The statements were delayed because of an issue with the bank reconciliation. A significant difference was found between the bank statement and our cash account. The error was identified and corrected by the junior accountant this morning. The adjusted trial balance is now being prepared, and the final report will be approved by the Group CFO this afternoon."',
            say: 'The statements were delayed because of an issue with the bank reconciliation. A significant difference was found between the bank statement and our cash account. The error was identified and corrected by the junior accountant this morning. The adjusted trial balance is now being prepared, and the final report will be approved by the Group CFO this afternoon.'
          }
        ],
        say: { scene: 'u8-listening-2-c1', who: 'narr' },
        hidden: true,
        revealLabel: 'Show the script',
        speak: false
      },
      after: 'Listen first and answer from what you hear. The script is there when you want to check it.',
      layout: 'listen-first',
      visual: {
        spot: 'trial-balance',
        caption: 'Listening · Passage 2: Explaining a Delay (Operating Context)'
      }
    }
  ],
  prev: 's09-listening-1',
  prevLabel: 'Listening 1',
  next: 's11-listening-3',
  nextLabel: 'Listening 3'
});
