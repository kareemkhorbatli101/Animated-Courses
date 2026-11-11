/* Unit 2 · s03-vocab-gaps — Vocabulary · in use
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s03-vocab-gaps', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Vocabulary · in use',
    page: 2,
    section: '03',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in use'
  },
  objective: 'Action Verbs and Nouns',
  cards: [
    {
      id: 'c1',
      covers: ['1B'],
      ref: '1B',
      bookRef: 'Unit 2 · 1B',
      type: 'cloze',
      title: 'Action Verbs and Nouns',
      instruction: 'Complete the sentences using the correct word from the box.',
      text: '<div style="font-size:16px;line-height:2.4">1. We [[1]] all the pending invoices before the Kraków cut-off.<br>2. All expense claims must be [[2]] by Friday morning, local time.<br>3. The receipt was [[3]] under the incorrect vendor name.<br>4. The accounts payable clerk in Singapore [[4]] 100 transactions yesterday.<br>5. She [[5]] the amount into the wrong column.<br>6. The cash transaction was properly [[6]] in the journal.</div>',
      answers: {
        '1': ['reviewed'],
        '2': ['submitted'],
        '3': ['filed'],
        '4': ['processed'],
        '5': ['entered'],
        '6': ['recorded']
      },
      bank: ['entered', 'filed', 'processed', 'recorded', 'reviewed', 'submitted'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>reviewed</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>submitted</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>filed</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>processed</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>entered</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>recorded</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> We <u>reviewed</u> all the pending invoices before the Kraków cut-off.',
      brief: 'The people and the roles. Match them by what each one DOES, not by which word looks similar.',
      visual: { spot: 'journal', caption: 'Vocabulary · Action Verbs and Nouns' }
    }
  ],
  prev: 's02-vocab-match',
  prevLabel: 'Vocabulary · match',
  next: 's04-vocab-context',
  nextLabel: 'Vocabulary · in context'
});
