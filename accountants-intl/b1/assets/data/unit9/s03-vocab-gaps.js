/* Unit 9 · s03-vocab-gaps — Vocabulary · in use
   Built by tools/build-unit.py from the author's own blocks and tools/key/u09.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u9-s03-vocab-gaps', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 9 · Vocabulary · in use',
    page: 9,
    section: '03',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in use'
  },
  objective: 'Verbs for Professional Activity',
  cards: [
    {
      id: 'c1',
      covers: ['1B'],
      ref: '1B',
      bookRef: 'Unit 9 · 1B',
      type: 'study',
      source: 'book',
      title: 'Verbs for Professional Activity',
      instruction: 'Complete the sentences using the correct verb from the box.',
      html: '<p>Verbs: Obtained, utilized, implemented, mastered, streamlined, audited</p>',
      playable: [
        { t: 'Obtained, utilized, implemented, mastered, streamlined, audited', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'certification', caption: 'Vocabulary · Verbs for Professional Activity' }
    },
    {
      id: 'c2',
      covers: ['1B'],
      ref: '1B',
      bookRef: 'Unit 9 · 1B',
      type: 'cloze',
      title: 'Verbs for Professional Activity',
      instruction: 'Complete the sentences using the correct verb from the box.',
      text: '<div style="font-size:16px;line-height:2.4">1. We have just [[1]] a new cloud-based ERP system in all six offices.<br>2. She has [[2]] the use of Pivot Tables in Excel.<br>3. The new accountant has already [[3]] their CPA license.<br>4. The whole team has [[4]] the closing process, cutting the time in half.<br>5. Our data has been [[5]] by the external firm for two weeks.<br>6. For three years, I have [[6]] QuickBooks for small business clients.</div>',
      answers: {
        '1': ['implemented'],
        '2': ['mastered'],
        '3': ['obtained'],
        '4': ['streamlined'],
        '5': ['audited'],
        '6': ['used']
      },
      bank: ['audited', 'implemented', 'mastered', 'obtained', 'streamlined', 'used'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>implemented</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>mastered</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>obtained</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>streamlined</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>audited</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>used</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> We have just <u>implemented</u> a new cloud-based ERP system in all six offices.',
      visual: { spot: 'closing', caption: 'Vocabulary · Verbs for Professional Activity', cls: 'vis-sm' }
    }
  ],
  prev: 's02-vocab-match',
  prevLabel: 'Vocabulary · match',
  next: 's04-vocab-context',
  nextLabel: 'Vocabulary · in context'
});
