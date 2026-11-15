/* Unit 3 §8 — Part 3 - Listening 1.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s08', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 3 - Listening 1', part: '3', section: '8',
          lesson: 'Part 3 - Listening 1', title: 'Part 3 - Listening 1' },
  objective: 'Work through Part 3 - Listening 1 of unit 3.',
  video: 'u03v08',
  prev: 's07-grammar-review', prevLabel: 'Part 2 - Grammar, review',
  next: 's09-listening-2', nextLabel: 'Part 3 - Listening 2',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 3 · Part 3', type: 'scene',
      title: 'Listen: A Safety Briefing',
      instruction: '<b>Before you listen:</b> what does a foreman say before the work starts? '
        + 'Press play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u3-dialogue',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Listen, everyone, before we start.',
          '2. First, always wear your safety glasses and gloves.',
          '3. Then keep your area clean — no oil or rags on the floor.',
          '4. When you lift a car, always chock the wheels first, and always use axle '
        + 'stands.',
          '5. Never work under a car on a jack alone.',
          '6. If you smell fuel, stop and tell me.',
          '7. Safety first, every day.'
        ]
      },
      after: '<b>Useful phrases:</b> First, always… · Never… · If you smell fuel, stop '
        + 'and tell me<br><span class="wc">The book prints this as Audio Track 3.2. '
        + 'No studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 3 · Part 3', type: 'tristate',
        title: 'A Safety Briefing',
        instruction: 'While you listen: write True, False, or Not Given. (0. is done.) Every '
          + 'statement is settled by the text: read it again rather than answering from '
          + 'what you already know.',
        given: { t: 'Nabil is giving a safety briefing.', ans: 'T', line: '1',
          why: 'Done for you. The text states it, which is what a True answer looks like.' },
        whyTitle: 'What settles each statement',
        items: [
          { t: 'You can leave oil on the floor.', ans: 'F',
            why: '<b>False.</b> The text says: “Then keep your area clean — no oil or rags '
          + 'on the floor.”. The text says something that cannot be true at the same '
          + 'time — which is what makes this False rather than Not Given.' },
          { t: 'You must always use axle stands.', ans: 'T',
            why: '<b>True.</b> The text says: “When you lift a car, always chock the wheels '
          + 'first, and always use axle stands.”. A statement is True when the text '
          + 'SAYS it, not when it sounds likely.' },
          { t: 'It is OK to work under a car on a jack alone.', ans: 'F',
            why: '<b>False.</b> The text says: “Never work under a car on a jack alone.”. '
          + 'The text says something that cannot be true at the same time — which is '
          + 'what makes this False rather than Not Given. (never do this)' }
        ]
      }
    }
  ]
});
