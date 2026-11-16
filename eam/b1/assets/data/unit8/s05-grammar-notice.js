/* Unit 8 §5 — Part 2 - Grammar, notice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s05', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 2 - Grammar, notice', part: '2', section: '5',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 8.',
  video: 'u08v05',
  prev: 's04-check', prevLabel: 'Part 1 - Check',
  next: 's06-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 8 · Part 2', type: 'study',
      title: 'Read: Notice',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Must / have to (necessary): Every car must pass the check. We have to use '
        + 'genuine parts. Mustn’t (not allowed / dangerous): You mustn’t hand over a '
        + 'car with a fault.' + '</p>'
        + '<p>' + 'Don’t have to (not necessary): If the car is fine, you don’t have to '
        + 'change anything.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Must / have to (necessary): Every car must pass the check. We have to use '
        + 'genuine parts. Mustn’t (not allowed / dangerous): You mustn’t hand over a '
        + 'ca',
        'Don’t have to (not necessary): If the car is fine, you don’t have to '
        + 'change anything.']
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 8 · Part 2', type: 'highlighter',
      title: 'Notice',
      instruction: 'Read these lines. Which say ‘it is necessary’? Which say ‘it is not '
        + 'allowed’? Which say ‘it is not necessary’?',
      textTitle: 'The lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it.',
      paras: [[
        { i: 0, t: 'Must / have to (necessary): Every car must pass the check.' },
        { i: 1, t: 'We have to use genuine parts.' },
        { i: 2, t: 'Mustn’t (not allowed / dangerous): You mustn’t hand over a car with a fault.' },
        { i: 3, t: 'Don’t have to (not necessary): If the car is fine, you don’t have to '
        + 'change anything.' }
      ]],
      answers: [1, 3],
      whyTitle: 'What you have just noticed',
      after: 'Read the lines you underlined together. What they share is the pattern '
        + 'this part of the book is about — the focus box on the next card names it.'
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 8 · Part 2', type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'The book’s own box. Read it once now; the practice that follows comes '
        + 'straight out of it.',
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p>' + 'Remember: must and have to are similar (both = necessary). mustn’t = it is '
        + 'forbidden. don’t have to = it is not necessary (you can if you want)' + '</p>'
        + '<div class="note warm"><h4>Watch out</h4>' + '✗ mustn’t = don’t have to. NO! mustn’t = don’t do it (dangerous); don’t '
        + 'have to = you can choose. ✗ You must to pass. → ✓ You must pass' + '</div>'
        + '</div>',
      visual: { live: 'rule-gate', wide: true,
        caption: 'Two gates that sound alike. “mustn\'t” is locked; “don\'t have to” is '
        + 'open, and you may walk through it or not.' },
      doneLabel: 'I have read it',
      playable: ['Remember: must and have to are similar (both = necessary). mustn’t = it is '
        + 'forbidden. don’t have to = it is no', 'Watch out! ✗ mustn’t = don’t have to. NO! mustn’t = don’t do it '
        + '(dangerous); don’t have to = you can choose. ✗']
    }
  ]
});
