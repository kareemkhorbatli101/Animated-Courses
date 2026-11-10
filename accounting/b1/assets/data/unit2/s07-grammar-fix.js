/* Unit 2 §7 — Part 2, "Correct the sentence".

   The fault in each sentence is the verb, so the verb is chosen from three
   forms and marked; the learner still writes the whole corrected sentence
   in a box that is not scored. Marking a typed sentence against a list of
   accepted spellings fails a learner who corrects it a different right way. */
EAFM.page('u2-s07', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 2', page: 2, section: '7',
          lesson: 'Part 2 · Grammar', title: 'Correct the sentence' },
  objective: 'Find the one mistake, and say which rule it breaks',
  prev: 's06-grammar-gap', prevLabel: 'Controlled practice',
  next: 's08-grammar-freer', nextLabel: 'Freer practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2E',
      bookRef: 'Unit 2 · Part 2 · Correct the sentence', type: 'choiceinline',
      title: 'Each sentence has one mistake',
      instruction: 'In every sentence the fault is the verb. Choose the correct form, then read the whole corrected sentence aloud.',
      visual: { art: 'aux-mirror',
        caption: 'Three of these four break the same rule: no past marker survives next to <i>did</i>.' },
      whyTitle: 'The one mistake, named',
      items: [
        { text: 'Did you {{posted|post|posting}} the entry?', answer: 1,
          why: 'The book’s sentence is "Did you posted the entry?" <i>Did</i> is already past, so the main verb goes back to its base form: <b>post</b>. The corrected sentence is "Did you post the entry?"' },
        { text: 'Fadi {{writed|wrote|was writing}} the report yesterday.', answer: 1,
          why: 'The book’s sentence is "Fadi writed the report yesterday." <i>Write</i> is irregular, so there is no <i>ed</i> form at all: <b>wrote</b>. "Yesterday" closes the action, so the simple rather than the continuous.' },
        { text: 'While he {{counted|was counting}} the cash, the phone rang.', answer: 1,
          why: 'The book’s sentence is "While he counted the cash, the phone rang", and it marks the task "(background action)". The counting is the longer action already under way, so it needs <b>was counting</b> — the ringing is the short one that interrupts it.' },
        { text: "The team didn’t {{closed|close}} the books.", answer: 1,
          why: 'The book’s sentence is "The team didn’t closed the books." Same rule as the first: <i>didn’t</i> carries the past, so the verb is the plain <b>close</b>.' }
      ]
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2E-write',
      bookRef: 'Unit 2 · Part 2 · Correct the sentence', type: 'notes',
      title: 'Now write the four sentences correctly',
      instruction: 'The book asks you to <b>write the sentence correctly</b>. Write each one out in full and say it aloud. This box is not marked — the forms above are.',
      prompts: [
        'Did you posted the entry?',
        'Fadi writed the report yesterday.',
        'While he counted the cash, the phone rang. (background action)',
        'The team didn’t closed the books.'
      ],
      examplesTitle: 'The four sentences, corrected',
      examples: [
        'Did you post the entry?',
        'Fadi wrote the report yesterday.',
        'While he was counting the cash, the phone rang.',
        'The team didn’t close the books.'
      ]
    }
  ]
});
