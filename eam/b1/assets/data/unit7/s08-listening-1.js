/* Unit 7 §8 — Part 3 - Listening 1.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s08', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 3 - Listening 1', part: '3', section: '8',
          lesson: 'Part 3 - Listening 1', title: 'Part 3 - Listening 1' },
  objective: 'Work through Part 3 - Listening 1 of unit 7.',
  video: 'u07v08',
  prev: 's07-grammar-review', prevLabel: 'Part 2 - Grammar, review',
  next: 's09-listening-2', nextLabel: 'Part 3 - Listening 2',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 7 · Part 3', type: 'scene',
      title: 'Listen: Booking a Service',
      instruction: '<b>Before you listen:</b> what does an advisor say when a customer books a '
        + 'service? Press play. You can slow it down, loop a line, and turn the '
        + 'Arabic on.',
      scene: 'u7-dialogue',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Rana: Cham Motors, good morning.',
          '2. Mr Aboud: Hello, I’d like to book a service.',
          '3. Rana: Of course. I’ll book you in. Which day?',
          '4. Mr Aboud: Tuesday, if possible.',
          '5. Rana: Tuesday is fine. We’re going to be busy, so please come at nine.',
          '6. Mr Aboud: OK. How long will it take?',
          '7. Rana: About three hours. Your car will be ready at twelve. We’ll call you.',
          '8. Mr Aboud: Thank you.'
        ]
      },
      after: '<b>Useful phrases:</b> I’ll book you in… · We’re going to be busy… · Your '
        + 'car will be ready at…<br><span class="wc">The book prints this as Audio '
        + 'Track 7.2. No studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 7 · Part 3', type: 'tristate',
        title: 'Booking a Service',
        instruction: 'While you listen: write True, False, or Not Given. (0. is done.) Every '
          + 'statement is settled by the text: read it again rather than answering from '
          + 'what you already know.',
        given: { t: 'Mr Aboud is booking a service.', ans: 'T', line: '1',
          why: 'Done for you. The text states it, which is what a True answer looks like.' },
        whyTitle: 'What settles each statement',
        items: [
          { t: 'Rana books him for Tuesday.', ans: 'T',
            why: '<b>True.</b> The text states it in so many words. A statement is True when '
          + 'the text SAYS it, not when it sounds likely.' },
          { t: 'The car will be ready at nine.', ans: 'F',
            why: '<b>False.</b> The text says: “About three hours. Your car will be ready at '
          + 'twelve. We’ll call you.”. The text says something that cannot be true at '
          + 'the same time — which is what makes this False rather than Not Given. '
          + '(ready at twelve)' },
          { t: 'Rana will call him when it’s ready.', ans: 'T',
            why: '<b>True.</b> The text says: “About three hours. Your car will be ready at '
          + 'twelve. We’ll call you.”. A statement is True when the text SAYS it, not '
          + 'when it sounds likely.' }
        ]
      }
    }
  ]
});
