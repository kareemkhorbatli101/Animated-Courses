/* Unit 6 §5 — Part 2 - Grammar, notice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s05', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 2 - Grammar, notice', part: '2', section: '5',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 6.',
  video: 'u06v05',
  prev: 's04-check', prevLabel: 'Part 1 - Check',
  next: 's06-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 6 · Part 2', type: 'study',
      title: 'Read: Notice',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Requests: Can you check the brakes? Could you bring the car back? Offers: '
        + 'Shall I top up the coolant? Can I book you in? Advice: You should change '
        + 'the pads. You shouldn’t drive on worn tyres.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Requests: Can you check the brakes? Could you bring the car back? Offers: '
        + 'Shall I top up the coolant? Can I book you in? Advice: You should change '
        + 'the']
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 6 · Part 2', type: 'highlighter',
      title: 'Notice',
      instruction: 'Read these lines. Which are requests? Which are offers? Which give advice?',
      textTitle: 'The lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it.',
      paras: [[
        { i: 0, t: 'Requests: Can you check the brakes?' },
        { i: 1, t: 'Could you bring the car back?' },
        { i: 2, t: 'Offers: Shall I top up the coolant?' },
        { i: 3, t: 'Can I book you in?' },
        { i: 4, t: 'Advice: You should change the pads.' },
        { i: 5, t: 'You shouldn’t drive on worn tyres.' }
      ]],
      answers: [1, 3, 5],
      whyTitle: 'What you have just noticed',
      after: 'Read the lines you underlined together. What they share is the pattern '
        + 'this part of the book is about — the focus box on the next card names it.'
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 6 · Part 2', type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'The book’s own box. Read it once now; the practice that follows comes '
        + 'straight out of it.',
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p>' + 'Remember: Could and Would are more polite than Can. Shall I…? offers help. '
        + 'should = advice; shouldn’t = advice not to' + '</p>'
        + '<div class="note warm"><h4>Watch out</h4>' + '✗ You should to change the oil. → ✓ You should change the oil (no to). ✗ '
        + 'Can you to check? → ✓ Can you check?' + '</div>'
        + '</div>',
      visual: { live: 'modal-ladder', wide: true,
        caption: 'The same request, four ways — and the customer\'s face, which is the only '
        + 'place the difference between them shows.' },
      doneLabel: 'I have read it',
      playable: ['Remember: Could and Would are more polite than Can. Shall I…? offers help. '
        + 'should = advice; shouldn’t = advice', 'Watch out! ✗ You should to change the oil. → ✓ You should change the oil '
        + '(no to). ✗ Can you to check? → ✓ Can']
    }
  ]
});
