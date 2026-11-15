/* Unit 4 §8 — Part 3 - Listening 1.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s08', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 3 - Listening 1', part: '3', section: '8',
          lesson: 'Part 3 - Listening 1', title: 'Part 3 - Listening 1' },
  objective: 'Work through Part 3 - Listening 1 of unit 4.',
  video: 'u04v08',
  prev: 's07-grammar-review', prevLabel: 'Part 2 - Grammar, review',
  next: 's09-listening-2', nextLabel: 'Part 3 - Listening 2',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 4 · Part 3', type: 'scene',
      title: 'Listen: Checking the Tyres',
      instruction: '<b>Before you listen:</b> how does a mechanic know a tyre is too worn? '
        + 'Press play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u4-dialogue',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Let me check these tyres.',
          '2. The front left has good tread, about six millimetres.',
          '3. The front right is the same.',
          '4. But look — the rear left is more worn than the others, only two '
        + 'millimetres.',
          '5. That’s too low.',
          '6. The rear right is a little better, three millimetres.',
          '7. So the rear left is the most worn, and we should change it.',
          '8. Always compare all four.'
        ]
      },
      after: '<b>Useful phrases:</b> … is more worn than… · the most worn · a little '
        + 'better<br><span class="wc">The book prints this as Audio Track 4.2. No '
        + 'studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 4 · Part 3', type: 'tristate',
        title: 'Checking the Tyres',
        instruction: 'While you listen: write True, False, or Not Given. (0. is done.) Every '
          + 'statement is settled by the text: read it again rather than answering from '
          + 'what you already know.',
        given: { t: 'Lina is checking the tyres.', ans: 'T', line: '1',
          why: 'Done for you. The text states it, which is what a True answer looks like.' },
        whyTitle: 'What settles each statement',
        items: [
          { t: 'The front tyres have good tread.', ans: 'T',
            why: '<b>True.</b> The text says: “The front left has good tread, about six '
          + 'millimetres.”. A statement is True when the text SAYS it, not when it '
          + 'sounds likely.' },
          { t: 'The rear left tyre has the deepest tread.', ans: 'F',
            why: '<b>False.</b> The text says: “The front left has good tread, about six '
          + 'millimetres.”. The text says something that cannot be true at the same '
          + 'time — which is what makes this False rather than Not Given. (it is the '
          + 'most worn)' },
          { t: 'The rear left tyre should be changed.', ans: 'T',
            why: '<b>True.</b> The text says: “So the rear left is the most worn, and we '
          + 'should change it.”. A statement is True when the text SAYS it, not when it '
          + 'sounds likely.' }
        ]
      }
    }
  ]
});
