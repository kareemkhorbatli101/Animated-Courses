/* Unit 5 §5 — Part 2 - Grammar, notice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s05', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 2 - Grammar, notice', part: '2', section: '5',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 5.',
  video: 'u05v05',
  prev: 's04-check', prevLabel: 'Part 1 - Check',
  next: 's06-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 5 · Part 2', type: 'study',
      title: 'Read: Notice',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Active: The mechanic services the car. Passive: The car is serviced. We '
        + 'often use the passive for a process: The car is booked in. It is '
        + 'inspected. The oil is changed. It is handed over.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Active: The mechanic services the car. Passive: The car is serviced. We '
        + 'often use the passive for a process: The car is booked in. It is '
        + 'inspected. Th']
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 5 · Part 2', type: 'highlighter',
      title: 'Notice',
      instruction: 'Read these pairs. In which sentence is the doer important? In which is the '
        + 'action important?',
      textTitle: 'The lines from the workshop',
      hintText: 'Click a sentence to underline it. Click it again to remove it.',
      paras: [[
        { i: 0, t: 'Active: The mechanic services the car.' },
        { i: 1, t: 'Passive: The car is serviced.' },
        { i: 2, t: 'We often use the passive for a process: The car is booked in.' },
        { i: 3, t: 'It is inspected.' },
        { i: 4, t: 'The oil is changed.' },
        { i: 5, t: 'It is handed over.' }
      ]],
      answers: [1, 3, 5],
      whyTitle: 'What you have just noticed',
      after: 'Read the lines you underlined together. What they share is the pattern '
        + 'this part of the book is about — the focus box on the next card names it.'
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 5 · Part 2', type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'The book’s own box. Read it once now; the practice that follows comes '
        + 'straight out of it.',
      html: '<div style="font-size:16px;line-height:1.95">'
        + '<p>' + 'Remember: Passive = is / are + past participle (checked, serviced, done, '
        + 'handed over). Use by + doer only if you need it. The passive is common for '
        + 'a process' + '</p>'
        + '<div class="note warm"><h4>Watch out</h4>' + '✗ The car serviced. → ✓ The car is serviced. ✗ The tyres is checked. → ✓ '
        + 'The tyres are checked (plural)' + '</div>'
        + '</div>',
      visual: { live: 'passive-focus', wide: true,
        caption: 'The same action, with the doer fading out of it — which is what the '
        + 'passive does.' },
      doneLabel: 'I have read it',
      playable: ['Remember: Passive = is / are + past participle (checked, serviced, done, '
        + 'handed over). Use by + doer only if y', 'Watch out! ✗ The car serviced. → ✓ The car is serviced. ✗ The tyres is '
        + 'checked. → ✓ The tyres are checked (plu']
    }
  ]
});
