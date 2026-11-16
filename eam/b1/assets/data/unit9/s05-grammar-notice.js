/* Unit 9 §5 — Part 2 - Grammar, notice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s05', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 2 - Grammar, notice', part: '2', section: '5',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 9.',
  video: 'u09v05',
  prev: 's04-check', prevLabel: 'Part 1 - Check',
  next: 's06-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 9 · Part 2', type: 'study',
      title: 'Read: Notice',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Past simple (finished time): I replaced the pads yesterday. He diagnosed '
        + 'it last week. Present perfect (experience / unfinished time / result now): '
        + 'Have you ever repaired a gearbox? I’ve already checked the brakes.' + '</p>'
        + '<p>' + 'The car has come back.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Past simple (finished time): I replaced the pads yesterday. He diagnosed '
        + 'it last week. Present perfect (experience / unfinished time / result now): '
        + 'Ha',
        'The car has come back.']
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 9 · Part 2', type: 'highlighter',
      title: 'Notice',
      instruction: 'Read these lines. Which have a finished time? Which talk about experience '
        + 'or a result now?',
      textTitle: 'The lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it.',
      paras: [[
        { i: 0, t: 'Past simple (finished time): I replaced the pads yesterday.' },
        { i: 1, t: 'He diagnosed it last week.' },
        { i: 2, t: 'Present perfect (experience / unfinished time / result now): Have you ever '
        + 'repaired a gearbox?' },
        { i: 3, t: 'I’ve already checked the brakes.' },
        { i: 4, t: 'The car has come back.' }
      ]],
      answers: [1, 3],
      whyTitle: 'What you have just noticed',
      after: 'Read the lines you underlined together. What they share is the pattern '
        + 'this part of the book is about — the focus box on the next card names it.'
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 9 · Part 2', type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'The book’s own box. Read it once now; the practice that follows comes '
        + 'straight out of it.',
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p>' + 'Remember: Past simple with a finished time word (yesterday, last week). '
        + 'Present perfect for experience (ever), unfinished time (today), and a '
        + 'result now (already, just, yet)' + '</p>'
        + '<div class="note warm"><h4>Watch out</h4>' + '✗ I have replaced it yesterday. → ✓ I replaced it yesterday (finished '
        + 'time). ✗ Have you diagnose it? → ✓ Have you diagnosed it?' + '</div>'
        + '</div>',
      visual: { live: 'perfect-line', wide: true,
        caption: 'The same repair on the same timeline. The form changes with the time word, '
        + 'not with the work.' },
      doneLabel: 'I have read it',
      playable: ['Remember: Past simple with a finished time word (yesterday, last week). '
        + 'Present perfect for experience (ever),', 'Watch out! ✗ I have replaced it yesterday. → ✓ I replaced it yesterday '
        + '(finished time). ✗ Have you diagnose it']
    }
  ]
});
