/* Unit 3 §5 — Part 2 - Grammar, notice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s05', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 2 - Grammar, notice', part: '2', section: '5',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 3.',
  video: 'u03v05',
  prev: 's04-check', prevLabel: 'Part 1 - Check',
  next: 's06-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 3 · Part 2', type: 'highlighter',
      title: 'Notice',
      instruction: 'Read these safety rules. Underline the verbs. Which words show the order '
        + 'of the steps?',
      textTitle: 'The lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it.',
      paras: [[
        { i: 0, t: 'First, put on your gloves.' },
        { i: 1, t: 'Then check the tools.' },
        { i: 2, t: 'Next, chock the wheels.' },
        { i: 3, t: 'Always use axle stands.' },
        { i: 4, t: 'Never work under a car on a jack alone.' },
        { i: 5, t: 'Finally, clean your area.' }
      ]],
      answers: [1, 3, 5],
      whyTitle: 'What you have just noticed',
      after: 'Read the lines you underlined together. What they share is the pattern '
        + 'this part of the book is about — the focus box on the next card names it.'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 3 · Part 2', type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'The book’s own box. Read it once now; the practice that follows comes '
        + 'straight out of it.',
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p>' + 'Remember: Negative imperative = Don’t / Never + verb. Use sequencers to '
        + 'show the order of the steps' + '</p>'
        + '<div class="note warm"><h4>Watch out</h4>' + '✗ You put on gloves. (as a rule) → ✓ Put on your gloves. ✗ First raise the '
        + 'car, then chock. → ✓ First chock the wheels, then raise the car (the safe '
        + 'order matters)' + '</div>'
        + '</div>',
      visual: { live: 'safe-order', wide: true,
        caption: 'The job, played step by step — and again in the wrong order, so you can '
        + 'see what the order was for.' },
      doneLabel: 'I have read it',
      playable: ['Remember: Negative imperative = Don’t / Never + verb. Use sequencers to '
        + 'show the order of the steps', 'Watch out! ✗ You put on gloves. (as a rule) → ✓ Put on your gloves. ✗ '
        + 'First raise the car, then chock. → ✓ Fir']
    }
  ]
});
