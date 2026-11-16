/* Unit 8 §8 — Part 3 - Listening 1.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s08', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 3 - Listening 1', part: '3', section: '8',
          lesson: 'Part 3 - Listening 1', title: 'Part 3 - Listening 1' },
  objective: 'Work through Part 3 - Listening 1 of unit 8.',
  video: 'u08v08',
  prev: 's07-grammar-review', prevLabel: 'Part 2 - Grammar, review',
  next: 's09-listening-2', nextLabel: 'Part 3 - Listening 2',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 8 · Part 3', type: 'scene',
      title: 'Listen: The Quality Check',
      instruction: '<b>Before you listen:</b> what must a car pass before it is handed over? '
        + 'Press play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u8-dialogue',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Nabil: Tarek, before we hand over this car, we have to do the quality '
        + 'check. First, the road test — the car must be safe to drive.',
          '2. Tarek: It drove well.',
          '3. Nabil: Good. Now check the fluids and the brakes. Every job on the '
        + 'sheet must be ticked.',
          '4. Tarek: There’s a small mark on the finish here.',
          '5. Nabil: Then we mustn’t hand it over yet. We must fix it first. A car '
        + 'goes back perfect, or it doesn’t go back.',
          '6. Tarek: I understand.'
        ]
      },
      after: '<b>Useful phrases:</b> we have to… · the car must be… · we mustn’t hand it '
        + 'over yet<br><span class="wc">The book prints this as Audio Track 8.2. No '
        + 'studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 8 · Part 3', type: 'tristate',
        title: 'The Quality Check',
        instruction: 'While you listen: write True, False, or Not Given. (0. is done.) Every '
          + 'statement is settled by the text: read it again rather than answering from '
          + 'what you already know.',
        given: { t: 'Nabil and Tarek are doing a quality check.', ans: 'T', line: '1',
          why: 'Done for you. The text states it, which is what a True answer looks like.' },
        whyTitle: 'What settles each statement',
        items: [
          { t: 'The car must be safe to drive.', ans: 'T',
            why: '<b>True.</b> The text says: “Tarek, before we hand over this car, we have '
          + 'to do the quality check. First, the road test — the car must be safe to…”. '
          + 'A statement is True when the text SAYS it, not when it sounds likely.' },
          { t: 'They can hand over the car with the mark.', ans: 'F',
            why: '<b>False.</b> The text says: “Tarek, before we hand over this car, we have '
          + 'to do the quality check. First, the road test — the car must be safe to…”. '
          + 'The text says something that cannot be true at the same time — which is '
          + 'what makes this False rather than Not Given. (they mustn’t)' },
          { t: 'Every job on the sheet must be ticked.', ans: 'T',
            why: '<b>True.</b> The text says: “Good. Now check the fluids and the brakes. '
          + 'Every job on the sheet must be ticked.”. A statement is True when the text '
          + 'SAYS it, not when it sounds likely.' }
        ]
      }
    }
  ]
});
