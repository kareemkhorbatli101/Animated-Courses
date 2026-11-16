/* Unit 6 §8 — Part 3 - Listening 1.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s08', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 3 - Listening 1', part: '3', section: '8',
          lesson: 'Part 3 - Listening 1', title: 'Part 3 - Listening 1' },
  objective: 'Work through Part 3 - Listening 1 of unit 6.',
  video: 'u06v08',
  prev: 's07-grammar-review', prevLabel: 'Part 2 - Grammar, review',
  next: 's09-listening-2', nextLabel: 'Part 3 - Listening 2',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 6 · Part 3', type: 'scene',
      title: 'Listen: Advising the Customer',
      instruction: '<b>Before you listen:</b> what does a service advisor say about a worn '
        + 'part? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u6-dialogue',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Rana: Mr Aboud, we’ve finished the service. Nabil checked everything.',
          '2. Mr Aboud: Good. Is the car OK?',
          '3. Rana: Mostly. But your brake pads are worn. You should change them soon.',
          '4. Mr Aboud: How soon?',
          '5. Rana: In the next month. And your air filter is dirty — shall I replace '
        + 'it today?',
          '6. Mr Aboud: Yes, please.',
          '7. Rana: Could you also bring the car back in a month for the brakes?',
          '8. Mr Aboud: Of course.'
        ]
      },
      after: '<b>Useful phrases:</b> You should… · Shall I…? · Could you…?<br><span '
        + 'class="wc">The book prints this as Audio Track 6.2. No studio recording '
        + 'exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 6 · Part 3', type: 'tristate',
        title: 'Advising the Customer',
        instruction: 'While you listen: write True, False, or Not Given. (0. is done.) Every '
          + 'statement is settled by the text: read it again rather than answering from '
          + 'what you already know.',
        given: { t: 'Rana is advising Mr Aboud.', ans: 'T', line: '1',
          why: 'Done for you. The text states it, which is what a True answer looks like.' },
        whyTitle: 'What settles each statement',
        items: [
          { t: 'The brake pads are new.', ans: 'F',
            why: '<b>False.</b> The text says: “Mostly. But your brake pads are worn. You '
          + 'should change them soon.”. The text says something that cannot be true at '
          + 'the same time — which is what makes this False rather than Not Given. '
          + '(they are worn)' },
          { t: 'Rana offers to replace the air filter today.', ans: 'T',
            why: '<b>True.</b> The text says: “In the next month. And your air filter is '
          + 'dirty — shall I replace it today?”. A statement is True when the text SAYS '
          + 'it, not when it sounds likely.' },
          { t: 'Mr Aboud should bring the car back in a month.', ans: 'T',
            why: '<b>True.</b> The text says: “Could you also bring the car back in a month '
          + 'for the brakes?”. A statement is True when the text SAYS it, not when it '
          + 'sounds likely.' }
        ]
      }
    }
  ]
});
