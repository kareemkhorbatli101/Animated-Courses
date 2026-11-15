/* Unit 5 §8 — Part 3 - Listening 1.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s08', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 3 - Listening 1', part: '3', section: '8',
          lesson: 'Part 3 - Listening 1', title: 'Part 3 - Listening 1' },
  objective: 'Work through Part 3 - Listening 1 of unit 5.',
  video: 'u05v08',
  prev: 's07-grammar-review', prevLabel: 'Part 2 - Grammar, review',
  next: 's09-listening-2', nextLabel: 'Part 3 - Listening 2',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 5 · Part 3', type: 'scene',
      title: 'Listen: Explaining the Process',
      instruction: '<b>Before you listen:</b> what is the first step when a car arrives? Press '
        + 'play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u5-dialogue',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Let me explain what happens to your car.',
          '2. First, it is booked in here at reception, and a job card is made.',
          '3. Then it is taken to the workshop, where it is inspected and serviced.',
          '4. If there is a fault, it is diagnosed by our technician.',
          '5. After the work, the car is road-tested and checked by the quality team.',
          '6. Finally, it is cleaned and handed over to you.',
          '7. Every step is written on the job card.'
        ]
      },
      after: '<b>Useful phrases:</b> First, it is… · Then it is… · Finally, it is handed '
        + 'over<br><span class="wc">The book prints this as Audio Track 5.2. No '
        + 'studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 5 · Part 3', type: 'tristate',
        title: 'Explaining the Process',
        instruction: 'While you listen: write True, False, or Not Given. (0. is done.) Every '
          + 'statement is settled by the text: read it again rather than answering from '
          + 'what you already know.',
        given: { t: 'Rana is explaining the service process.', ans: 'T', line: '1',
          why: 'Done for you. The text states it, which is what a True answer looks like.' },
        whyTitle: 'What settles each statement',
        items: [
          { t: 'The car is booked in at reception.', ans: 'T',
            why: '<b>True.</b> The text says: “First, it is booked in here at reception, and '
          + 'a job card is made.”. A statement is True when the text SAYS it, not when '
          + 'it sounds likely.' },
          { t: 'The car is serviced at reception.', ans: 'F',
            why: '<b>False.</b> The text says something that cannot be true at the same time '
          + '— which is what makes this False rather than Not Given. (it is serviced in '
          + 'the workshop)' },
          { t: 'The car is cleaned before handover.', ans: 'T',
            why: '<b>True.</b> The text states it in so many words. A statement is True when '
          + 'the text SAYS it, not when it sounds likely.' }
        ]
      }
    }
  ]
});
