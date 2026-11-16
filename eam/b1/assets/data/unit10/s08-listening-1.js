/* Unit 10 §8 — Part 3 - Listening 1.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s08', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 3 - Listening 1', part: '3', section: '8',
          lesson: 'Part 3 - Listening 1', title: 'Part 3 - Listening 1' },
  objective: 'Work through Part 3 - Listening 1 of unit 10.',
  video: 'u10v08',
  prev: 's07-grammar-review', prevLabel: 'Part 2 - Grammar, review',
  next: 's09-listening-2', nextLabel: 'Part 3 - Listening 2',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 10 · Part 3', type: 'scene',
      title: 'Listen: Customer Feedback',
      instruction: '<b>Before you listen:</b> why does a garage ask customers for feedback? '
        + 'Press play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u10-dialogue',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Rana: Maher, I called Mr Aboud for his feedback.',
          '2. Maher: What did he say?',
          '3. Rana: He said he was very happy. He told me the car was running perfectly.',
          '4. Maher: Good. Did he say anything about the service?',
          '5. Rana: He said the team was honest and fast. He also asked if we did '
        + 'full services for his brother’s car.',
          '6. Maher: Tell him yes, and thank him. A happy customer is our best '
        + 'advertisement.'
        ]
      },
      after: '<b>Useful phrases:</b> He said (that)… · He told me… · He asked '
        + 'if…<br><span class="wc">The book prints this as Audio Track 10.2. No '
        + 'studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 10 · Part 3', type: 'tristate',
        title: 'Customer Feedback',
        instruction: 'While you listen: write True, False, or Not Given. (0. is done.) Every '
          + 'statement is settled by the text: read it again rather than answering from '
          + 'what you already know.',
        given: { t: 'Rana called Mr Aboud for feedback.', ans: 'T', line: '1',
          why: 'Done for you. The text states it, which is what a True answer looks like.' },
        whyTitle: 'What settles each statement',
        items: [
          { t: 'Mr Aboud said he was unhappy.', ans: 'F',
            why: '<b>False.</b> The text says something that cannot be true at the same time '
          + '— which is what makes this False rather than Not Given. (he was very '
          + 'happy)' },
          { t: 'He said the team was honest and fast.', ans: 'T',
            why: '<b>True.</b> The text says: “He said the team was honest and fast. He also '
          + 'asked if we did full services for his brother’s car.”. A statement is True '
          + 'when the text SAYS it, not when it sounds likely.' },
          { t: 'He asked about a service for his brother’s car.', ans: 'T',
            why: '<b>True.</b> The text says: “He said the team was honest and fast. He also '
          + 'asked if we did full services for his brother’s car.”. A statement is True '
          + 'when the text SAYS it, not when it sounds likely.' }
        ]
      }
    }
  ]
});
