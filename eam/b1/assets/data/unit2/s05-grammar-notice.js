/* Unit 2 §5 — Part 2 - Grammar, notice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s05', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 2 - Grammar, notice', part: '2', section: '5',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 2.',
  video: 'u02v05',
  prev: 's04-check', prevLabel: 'Part 1 - Check',
  next: 's06-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 2 · Part 2', type: 'highlighter',
      title: 'Notice',
      instruction: 'Read these lines from the workshop. Underline there is / there are. When '
        + 'do we use some, any, much, and many?',
      textTitle: 'The lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it.',
      paras: [[
        { i: 0, t: 'There is a battery under the bonnet.' },
        { i: 1, t: 'There are two filters in the box.' },
        { i: 2, t: 'There is some oil, but there isn’t much coolant.' },
        { i: 3, t: 'Are there any clean filters?' },
        { i: 4, t: 'How many hoses are there?' }
      ]],
      answers: [1, 3],
      whyTitle: 'What you have just noticed',
      after: 'Read the lines you underlined together. What they share is the pattern '
        + 'this part of the book is about — the focus box on the next card names it.'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 2 · Part 2', type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'The book’s own box. Read it once now; the practice that follows comes '
        + 'straight out of it.',
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p>' + 'Remember: some → + sentences. any → questions and – sentences. much + '
        + 'uncountable (oil, coolant). many + countable (filters, hoses)' + '</p>'
        + '<div class="note warm"><h4>Watch out</h4>' + '✗ There are much oil. → ✓ There is much oil (oil is uncountable). ✗ How '
        + 'much filters? → ✓ How many filters?' + '</div>'
        + '</div>',
      visual: { live: 'two-actions', wide: true,
        caption: 'Two things happening at once, and the words that join them.' },
      doneLabel: 'I have read it',
      playable: ['Remember: some → + sentences. any → questions and – sentences. much + '
        + 'uncountable (oil, coolant). many + count', 'Watch out! ✗ There are much oil. → ✓ There is much oil (oil is '
        + 'uncountable). ✗ How much filters? → ✓ How many']
    }
  ]
});
