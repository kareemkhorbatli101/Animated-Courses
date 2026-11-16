/* Unit 7 §5 — Part 2 - Grammar, notice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s05', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 2 - Grammar, notice', part: '2', section: '5',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 7.',
  video: 'u07v05',
  prev: 's04-check', prevLabel: 'Part 1 - Check',
  next: 's06-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 7 · Part 2', type: 'study',
      title: 'Read: Notice',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Will (a decision now, a promise): I’ll call you when it’s ready. Going to '
        + '(a plan): We’re going to order the part. Present continuous (an '
        + 'arrangement): The van is arriving at ten tomorrow.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Will (a decision now, a promise): I’ll call you when it’s ready. Going to '
        + '(a plan): We’re going to order the part. Present continuous (an '
        + 'arrangement)']
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 7 · Part 2', type: 'highlighter',
      title: 'Notice',
      instruction: 'Read these lines. Which is a promise? Which is a plan? Which is a fixed '
        + 'arrangement?',
      textTitle: 'The lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it.',
      paras: [[
        { i: 0, t: 'Will (a decision now, a promise): I’ll call you when it’s ready.' },
        { i: 1, t: 'Going to (a plan): We’re going to order the part.' },
        { i: 2, t: 'Present continuous (an arrangement): The van is arriving at ten tomorrow.' }
      ]],
      answers: [1],
      whyTitle: 'What you have just noticed',
      after: 'Read the lines you underlined together. What they share is the pattern '
        + 'this part of the book is about — the focus box on the next card names it.'
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 7 · Part 2', type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'The book’s own box. Read it once now; the practice that follows comes '
        + 'straight out of it.',
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p>' + 'Remember: will = decide now / promise. going to = already planned. present '
        + 'continuous = a fixed arrangement (with a time)' + '</p>'
        + '<div class="note warm"><h4>Watch out</h4>' + '✗ I will to call you. → ✓ I’ll call you. ✗ We going to order. → ✓ We’re '
        + 'going to order' + '</div>'
        + '</div>',
      visual: { live: 'future-diary', wide: true,
        caption: 'Three ways to talk about the same Thursday. What changes is not the day — '
        + 'it is when the decision was made.' },
      doneLabel: 'I have read it',
      playable: ['Remember: will = decide now / promise. going to = already planned. present '
        + 'continuous = a fixed arrangement (w', 'Watch out! ✗ I will to call you. → ✓ I’ll call you. ✗ We going to order. → '
        + '✓ We’re going to order']
    }
  ]
});
