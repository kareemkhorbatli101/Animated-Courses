/* Unit 1 · s08-grammar-produce — Grammar · produce it
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s08-grammar-produce', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Grammar · produce it',
    page: 1,
    section: '08',
    lesson: 'Part 2 · Grammar',
    title: 'Grammar · produce it'
  },
  objective: 'Sentence Transformation',
  cards: [
    {
      id: 'c1',
      covers: ['2D'],
      ref: '2D',
      bookRef: 'Unit 1 · 2D',
      type: 'cloze',
      title: 'Sentence Transformation',
      instruction: 'Change the sentences from Routine (Simple) to Current/Temporary (Continuous), or vice versa.',
      text: '<div style="font-size:16px;line-height:2.4">6. Current: [[6]]<br>8. Routine: [[8]]</div>',
      answers: {
        '6': ['We are paying the suppliers at the moment.'],
        '8': ['I learn how to use new modules every year.']
      },
      bank: [],
      whyTitle: 'What decided each one',
      why: {
        '6': '<b>We are paying the suppliers at the moment.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '8': '<b>I learn how to use new modules every year.</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 6.</b> Current: <u>We are paying the suppliers at the moment.</u>',
      brief: 'Rewrite each sentence. The meaning must survive the change — if it does not, you have changed more than the grammar.',
      visual: { spot: 'entry', caption: 'Grammar · Sentence Transformation' }
    },
    {
      id: 'c2',
      covers: ['2E'],
      ref: '2E',
      bookRef: 'Unit 1 · 2E',
      type: 'discuss',
      title: 'Speaking: The "Busy Office" Game',
      instruction: 'In pairs, ask and answer: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'General Duty: "What do you do?" (Use Present Simple).' },
        { q: 'Response: "I am a bookkeeper. I record transactions."' },
        { q: 'Current Activity: "What are you doing at the moment?" (Use Present Continuous).' },
        { q: 'Response: "I am searching for a missing receipt under my desk."' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'accountant',
        caption: 'Daily routines, bookkeeping tasks, and the role of a junior accountant in a shared service centre.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Present Simple vs. Present Continuous.',
        taught: [
          'In pairs, ask and answer:',
          'General Duty: "What do you do?" (Use Present Simple).',
          'Response: "I am a bookkeeper. I record transactions."',
          'Current Activity: "What are you doing at the moment?" (Use Present Continuous).'
        ]
      },
      model: 'I am a bookkeeper in the Kraków service centre. I enter invoices, check receipts and reconcile the petty cash every morning. Right now I am learning the new consolidation module.'
    }
  ],
  prev: 's07-grammar-practice',
  prevLabel: 'Grammar · practice',
  next: 's09-listening-1',
  nextLabel: 'Listening 1'
});
