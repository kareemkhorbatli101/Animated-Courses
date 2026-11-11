/* Unit 6 · s03-vocab-gaps — Vocabulary · in use
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s03-vocab-gaps', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Vocabulary · in use',
    page: 6,
    section: '03',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in use'
  },
  objective: 'Actions to Resolve Errors',
  cards: [
    {
      id: 'c1',
      covers: ['1B'],
      ref: '1B',
      bookRef: 'Unit 6 · 1B',
      type: 'cloze',
      title: 'Actions to Resolve Errors',
      instruction: 'Complete the sentences using the correct word from the box.',
      text: '<div style="font-size:16px;line-height:2.4">1. We must [[1]] the journal entry before the trial balance is prepared.<br>2. The Audit team will [[2]] the source of the suspicious transaction.<br>3. Always [[3]] the invoice amount against the purchase order.<br>4. We need to [[4]] the prepaid expense account at the end of the month.<br>5. Please [[5]] any transaction over EUR 10,000 for senior review.<br>6. We must [[6]] the risk of overpayment through better controls.</div>',
      answers: {
        '1': ['rectify'],
        '2': ['investigate'],
        '3': ['cross-check'],
        '4': ['adjust'],
        '5': ['flag'],
        '6': ['mitigate']
      },
      bank: ['adjust', 'cross-check', 'flag', 'investigate', 'mitigate', 'rectify'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>rectify</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>investigate</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>cross-check</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>adjust</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>flag</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>mitigate</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> We must <u>rectify</u> the journal entry before the trial balance is prepared.',
      brief: 'The people and the roles. Match them by what each one DOES, not by which word looks similar.',
      visual: { spot: 'discrepancy', caption: 'Vocabulary · Actions to Resolve Errors' }
    }
  ],
  prev: 's02-vocab-match',
  prevLabel: 'Vocabulary · match',
  next: 's04-vocab-context',
  nextLabel: 'Vocabulary · in context'
});
