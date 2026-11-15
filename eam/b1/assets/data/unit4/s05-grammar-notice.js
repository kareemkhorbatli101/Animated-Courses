/* Unit 4 §5 — Part 2 - Grammar, notice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s05', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 2 - Grammar, notice', part: '2', section: '5',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 4.',
  video: 'u04v05',
  prev: 's04-check', prevLabel: 'Part 1 - Check',
  next: 's06-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 4 · Part 2', type: 'study',
      title: 'Read: Notice',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'This tyre is more worn than that one. The front tyres are newer than the '
        + 'rear tyres. The rear left tyre is the most worn. Today the battery is '
        + 'lower than yesterday. This is the best reading of the four.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['This tyre is more worn than that one. The front tyres are newer than the '
        + 'rear tyres. The rear left tyre is the most worn. Today the battery is '
        + 'lower t']
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 4 · Part 2', type: 'highlighter',
      title: 'Notice',
      instruction: 'Read these lines from a tyre check. Underline the comparative and '
        + 'superlative forms.',
      textTitle: 'The lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it.',
      paras: [[
        { i: 0, t: 'This tyre is more worn than that one.' },
        { i: 1, t: 'The front tyres are newer than the rear tyres.' },
        { i: 2, t: 'The rear left tyre is the most worn.' },
        { i: 3, t: 'Today the battery is lower than yesterday.' },
        { i: 4, t: 'This is the best reading of the four.' }
      ]],
      answers: [1, 3],
      whyTitle: 'What you have just noticed',
      after: 'Read the lines you underlined together. What they share is the pattern '
        + 'this part of the book is about — the focus box on the next card names it.'
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 4 · Part 2', type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'The book’s own box. Read it once now; the practice that follows comes '
        + 'straight out of it.',
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p>' + 'Remember: Short adjective + -er / -est (low → lower → the lowest). Long '
        + 'adjective: more / the most (worn → more worn → the most worn)' + '</p>'
        + '<div class="note warm"><h4>Watch out</h4>' + '✗ gooder / more good → ✓ better / the best. ✗ badder → ✓ worse / the '
        + 'worst. Don’t forget than after a comparative' + '</div>'
        + '</div>',
      visual: { live: 'tense-timeline', wide: true,
        caption: 'When a measurement was taken matters as much as what it says.' },
      doneLabel: 'I have read it',
      playable: ['Remember: Short adjective + -er / -est (low → lower → the lowest). Long '
        + 'adjective: more / the most (worn → mor', 'Watch out! ✗ gooder / more good → ✓ better / the best. ✗ badder → ✓ worse '
        + '/ the worst. Don’t forget than after']
    }
  ]
});
