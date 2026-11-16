/* Unit 9 §8 — Part 3 - Listening 1.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s08', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 3 - Listening 1', part: '3', section: '8',
          lesson: 'Part 3 - Listening 1', title: 'Part 3 - Listening 1' },
  objective: 'Work through Part 3 - Listening 1 of unit 9.',
  video: 'u09v08',
  prev: 's07-grammar-review', prevLabel: 'Part 2 - Grammar, review',
  next: 's09-listening-2', nextLabel: 'Part 3 - Listening 2',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 9 · Part 3', type: 'scene',
      title: 'Listen: Finding the Fault',
      instruction: '<b>Before you listen:</b> what are the first signs of a fault? Press play. '
        + 'You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u9-dialogue',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Nabil: Lina, what’s the symptom?',
          '2. Lina: There’s a warning light and a strange noise from the engine.',
          '3. Nabil: Have you diagnosed it yet?',
          '4. Lina: Yes. I connected the computer an hour ago. It’s a sensor.',
          '5. Nabil: Have you checked the wiring too?',
          '6. Lina: I checked it this morning — it’s fine. The sensor has failed.',
          '7. Nabil: Good work. Replace the sensor, then road-test it again.',
          '8. Lina: I’ve already ordered the part.'
        ]
      },
      after: '<b>Useful phrases:</b> Have you diagnosed it yet? · I connected… an hour '
        + 'ago · the sensor has failed<br><span class="wc">The book prints this as '
        + 'Audio Track 9.2. No studio recording exists yet, so the cast speaks '
        + 'it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 9 · Part 3', type: 'tristate',
        title: 'Finding the Fault',
        instruction: 'While you listen: write True, False, or Not Given. (0. is done.) Every '
          + 'statement is settled by the text: read it again rather than answering from '
          + 'what you already know.',
        given: { t: 'Lina is finding a fault.', ans: 'T', line: '1',
          why: 'Done for you. The text states it, which is what a True answer looks like.' },
        whyTitle: 'What settles each statement',
        items: [
          { t: 'There is a warning light and a noise.', ans: 'T',
            why: '<b>True.</b> The text says: “There’s a warning light and a strange noise '
          + 'from the engine.”. A statement is True when the text SAYS it, not when it '
          + 'sounds likely.' },
          { t: 'Lina has not diagnosed the problem yet.', ans: 'F',
            why: '<b>False.</b> The text says: “Have you diagnosed it yet?”. The text says '
          + 'something that cannot be true at the same time — which is what makes this '
          + 'False rather than Not Given. (she has diagnosed it)' },
          { t: 'The problem is a failed sensor.', ans: 'T',
            why: '<b>True.</b> The text says: “I checked it this morning — it’s fine. The '
          + 'sensor has failed.”. A statement is True when the text SAYS it, not when '
          + 'it sounds likely.' }
        ]
      }
    }
  ]
});
