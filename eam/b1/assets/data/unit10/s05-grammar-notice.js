/* Unit 10 §5 — Part 2 - Grammar, notice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s05', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 2 - Grammar, notice', part: '2', section: '5',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 10.',
  video: 'u10v05',
  prev: 's04-check', prevLabel: 'Part 1 - Check',
  next: 's06-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 10 · Part 2', type: 'study',
      title: 'Read: Notice',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Direct: “The car is ready.” → Reported: She said (that) the car was ready. '
        + 'Direct: “Change the oil.” → Reported: He told me to change the oil. '
        + 'Direct: “Is the car ready?” → Reported: He asked if the car was ready.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Direct: “The car is ready.” → Reported: She said (that) the car was ready. '
        + 'Direct: “Change the oil.” → Reported: He told me to change the oil. '
        + 'Direct:']
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 10 · Part 2', type: 'highlighter',
      title: 'Notice',
      instruction: 'Read these pairs. How does the sentence change when we report it?',
      textTitle: 'The lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it.',
      paras: [[
        { i: 0, t: 'Direct: “The car is ready.” → Reported: She said (that) the car was ready.' },
        { i: 1, t: 'Direct: “Change the oil.” → Reported: He told me to change the oil.' },
        { i: 2, t: 'Direct: “Is the car ready?” → Reported: He asked if the car was ready.' }
      ]],
      answers: [1],
      whyTitle: 'What you have just noticed',
      after: 'Read the lines you underlined together. What they share is the pattern '
        + 'this part of the book is about — the focus box on the next card names it.'
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 10 · Part 2', type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'The book’s own box. Read it once now; the practice that follows comes '
        + 'straight out of it.',
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p>' + 'Remember: Backshift: is→was, will→would, can→could, present→past. Reported '
        + 'questions use if / whether and normal word order (no do, no ?)' + '</p>'
        + '<div class="note warm"><h4>Watch out</h4>' + '✗ She said me. → ✓ She told me / She said (to me). ✗ He asked is the car '
        + 'ready. → ✓ He asked if the car was ready' + '</div>'
        + '</div>',
      visual: { live: 'report-relay', wide: true,
        caption: 'The sentence travels from the customer to the manager. Watch the three '
        + 'words that have to change on the way.' },
      doneLabel: 'I have read it',
      playable: ['Remember: Backshift: is→was, will→would, can→could, present→past. Reported '
        + 'questions use if / whether and norm', 'Watch out! ✗ She said me. → ✓ She told me / She said (to me). ✗ He asked '
        + 'is the car ready. → ✓ He asked if the']
    }
  ]
});
