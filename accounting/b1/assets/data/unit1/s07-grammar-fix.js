/* Unit 1 §7 — Part 2, "Correct the sentence".

   The book says "Each sentence has one mistake. Find it and write the
   sentence correctly." Typing the whole corrected sentence and matching it
   against a list of accepted spellings fails a learner who corrects it a
   different right way, so the FAULT is chosen from three forms and marked,
   and the learner still writes and says the whole sentence in a box that is
   not scored. That is the answer policy applied: the part with one right
   answer is marked, the part that is the learner's own is not. */
EAFM.page('u1-s07', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 2', page: 1, section: '7',
          lesson: 'Part 2 · Grammar', title: 'Correct the sentence' },
  objective: 'Find the one mistake in a sentence, and say why it is wrong',
  prev: 's06-grammar-gap', prevLabel: 'Controlled practice',
  next: 's08-grammar-freer', nextLabel: 'Freer practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2E', bookRef: 'Unit 1 · Part 2 · Correct the sentence', type: 'choiceinline',
      title: 'Each sentence has one mistake',
      instruction: 'In every sentence the fault is the verb. Choose the correct form, then read the whole corrected sentence aloud.',
      visual: { art: 'aux-mirror',
        caption: 'Two rules collide in these four: the s on he/she/it, and am/is/are before an -ing form.' },
      whyTitle: 'The one mistake, named',
      items: [
        { text: 'Fadi {{record|records|is record}} the cash every day.', answer: 1,
          why: 'The book’s sentence is "Fadi record the cash every day." <i>Fadi</i> is he and "every day" is a routine, so the present simple needs its s: <b>records</b>. Nothing else in the sentence is wrong.' },
        { text: 'Right now, he {{check|checks|is checking}} the bank balance.', answer: 2,
          why: 'The book’s sentence is "Right now, he check the bank balance." Adding the s would fix the agreement but keep the wrong tense — "Right now" needs the continuous: <b>is checking</b>. This is the trap: the obvious repair is not the right one.' },
        { text: 'The team {{prepare|prepares|are preparing}} a report every month.', answer: 1,
          why: 'The book’s sentence is "The team prepare a report every month." <i>The team</i> is one thing, so <b>prepares</b>. "Every month" keeps it in the simple; <i>are preparing</i> would move it to this moment.' },
        { text: 'At the moment, I am {{work|working|works}} on the budget.', answer: 1,
          why: 'The book’s sentence is "At the moment, I am work on the budget." The <i>am</i> is already there and correct, so the verb must be the -ing form: <b>working</b>. An -ing form always needs am/is/are, and am/is/are always needs an -ing form.' }
      ]
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2E-write', bookRef: 'Unit 1 · Part 2 · Correct the sentence', type: 'notes',
      title: 'Now write the four sentences correctly',
      instruction: 'The book asks you to <b>write the sentence correctly</b>. Write each one out in full and say it aloud. This box is not marked — the forms above are.',
      prompts: [
        'Fadi record the cash every day.',
        'Right now, he check the bank balance.',
        'The team prepare a report every month.',
        'At the moment, I am work on the budget.'
      ],
      examplesTitle: 'The four sentences, corrected',
      examples: [
        'Fadi records the cash every day.',
        'Right now, he is checking the bank balance.',
        'The team prepares a report every month.',
        'At the moment, I am working on the budget.'
      ]
    }
  ]
});
