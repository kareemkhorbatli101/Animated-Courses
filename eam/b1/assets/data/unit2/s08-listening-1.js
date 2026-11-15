/* Unit 2 §8 — Part 3 - Listening 1.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s08', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 3 - Listening 1', part: '3', section: '8',
          lesson: 'Part 3 - Listening 1', title: 'Part 3 - Listening 1' },
  objective: 'Work through Part 3 - Listening 1 of unit 2.',
  video: 'u02v08',
  prev: 's07-grammar-review', prevLabel: 'Part 2 - Grammar, review',
  next: 's09-listening-2', nextLabel: 'Part 3 - Listening 2',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 2 · Part 3', type: 'scene',
      title: 'Listen: Checking the Fluids',
      instruction: '<b>Before you listen:</b> which fluid does a mechanic check first? Press '
        + 'play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u2-dialogue',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Right, let’s check the fluids.',
          '2. First, I check the engine oil with the dipstick.',
          '3. There is enough oil, good.',
          '4. Now the coolant — hmm, there isn’t much coolant, so I’ll top it up.',
          '5. Is there any brake fluid?',
          '6. Yes, the level is fine.',
          '7. Finally, the washer fluid is low, so I’ll add some.',
          '8. Always check the fluids at every service.'
        ]
      },
      after: '<b>Useful phrases:</b> First, I check… · There is / isn’t much… · I’ll top '
        + 'it up<br><span class="wc">The book prints this as Audio Track 2.2. No '
        + 'studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 2 · Part 3', type: 'tristate',
        title: 'Checking the Fluids',
        instruction: 'While you listen: write True, False, or Not Given. (0. is done.) Every '
          + 'statement is settled by the text: read it again rather than answering from '
          + 'what you already know.',
        given: { t: 'Nabil is checking the fluids.', ans: 'T', line: '1',
          why: 'Done for you. The text states it, which is what a True answer looks like.' },
        whyTitle: 'What settles each statement',
        items: [
          { t: 'There is enough engine oil.', ans: 'T',
            why: '<b>True.</b> The text says: “First, I check the engine oil with the '
          + 'dipstick.”. A statement is True when the text SAYS it, not when it sounds '
          + 'likely.' },
          { t: 'There is a lot of coolant.', ans: 'F',
            why: '<b>False.</b> The text says something that cannot be true at the same time '
          + '— which is what makes this False rather than Not Given. (there isn’t much)' },
          { t: 'The washer fluid is full.', ans: 'F',
            why: '<b>False.</b> The text says: “Finally, the washer fluid is low, so I’ll '
          + 'add some.”. The text says something that cannot be true at the same time — '
          + 'which is what makes this False rather than Not Given. (it is low)' }
        ]
      }
    }
  ]
});
