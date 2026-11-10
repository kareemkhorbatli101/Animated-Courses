/* Unit 10 · s03-vocab-gaps — Vocabulary · in use
   Built by tools/build-unit.py from the author's own blocks and tools/key/u10.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u10-s03-vocab-gaps', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 10 · Vocabulary · in use',
    page: 10,
    section: '03',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in use'
  },
  objective: 'Management Accounts Terminology',
  cards: [
    {
      id: 'c1',
      covers: ['1B'],
      ref: '1B',
      bookRef: 'Unit 10 · 1B',
      type: 'cloze',
      title: 'Management Accounts Terminology',
      instruction: 'Complete the sentences using the correct word from the box.',
      text: '<div style="font-size:16px;line-height:2.4">1. The Group CFO asked for a brief summary of the meeting’s [[1]] before leaving.<br>2. We need to analyze the sales [[2]] to understand why revenue was lower than budgeted.<br>3. The first section of the report provides detailed [[3]] on the quarterly results.<br>4. The bank is reviewing our debt-to-equity [[4]] to assess our financial health.<br>5. Our primary goal is to improve gross [[5]] by cutting material costs.<br>6. The latest cash flow [[6]] suggests a shortfall in Q3.</div>',
      answers: {
        '1': ['key takeaways'],
        '2': ['variance'],
        '3': ['commentary'],
        '4': ['ratio'],
        '5': ['profitability'],
        '6': ['forecast']
      },
      bank: ['commentary', 'forecast', 'key takeaways', 'profitability', 'ratio', 'variance'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>key takeaways</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>variance</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>commentary</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>ratio</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>profitability</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>forecast</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> The Group CFO asked for a brief summary of the meeting’s <u>key takeaways</u> before leaving.',
      visual: { spot: 'forecast', caption: 'Vocabulary · Management Accounts Terminology' }
    }
  ],
  prev: 's02-vocab-match',
  prevLabel: 'Vocabulary · match',
  next: 's04-vocab-context',
  nextLabel: 'Vocabulary · in context'
});
