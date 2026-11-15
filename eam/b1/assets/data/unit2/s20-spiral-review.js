/* Unit 2 §20 — Part 10 - Spiral review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s20', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 10 - Spiral review', part: '10', section: '20',
          lesson: 'Part 10 - Spiral review', title: 'Part 10 - Spiral review' },
  objective: 'Work through Part 10 - Spiral review of unit 2.',
  video: 'u02v20',
  prev: 's19-local-case-study', prevLabel: 'Part 9 - Local Case Study',
  next: 's21-can-do-glossary', nextLabel: 'Part 10 - Can-Do and glossary',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 2 · Part 10', type: 'cloze',
      title: 'Spiral Review',
      instruction: 'Complete the review. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. The machine that makes the '
        + 'car move is the engine.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. A liquid that keeps the engine parts moving smoothly is [[1]] .' + '<br>'
        + '2. The part that holds the coolant and lets heat escape is the [[2]] .' + '<br>'
        + '3. “There [[3]] two filters in the box.”' + '<br>'
        + '4. “There [[4]] some oil on the floor.”' + '<br>'
        + '5. much is for uncountable nouns; [[5]] is for countable nouns.' + '<br>'
        + '</div>',
      answers: {
        '1': ['oil'],
        '2': ['radiator'],
        '3': ['are'],
        '4': ['is'],
        '5': ['many']
      },
      bank: ['oil', 'radiator', 'are', 'is', 'many'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>oil</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>radiator</i>, <i>are</i> in the bank.',
        '2': '<b>radiator</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>oil</i>, <i>are</i> in the bank.',
        '3': '<b>are</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>oil</i>, <i>radiator</i> in the bank.',
        '4': '<b>is</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>oil</i>, <i>radiator</i> in the bank.',
        '5': '<b>many</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>oil</i>, <i>radiator</i> in the bank.'
      }
    }
  ]
});
