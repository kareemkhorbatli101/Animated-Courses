/* Unit 4 §20 — Part 10 - Spiral review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s20', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 10 - Spiral review', part: '10', section: '20',
          lesson: 'Part 10 - Spiral review', title: 'Part 10 - Spiral review' },
  objective: 'Work through Part 10 - Spiral review of unit 4.',
  video: 'u04v20',
  prev: 's19-local-case-study', prevLabel: 'Part 9 - Local Case Study',
  next: 's21-can-do-glossary', nextLabel: 'Part 10 - Can-Do and glossary',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 4 · Part 10', type: 'cloze',
      title: 'Spiral Review',
      instruction: 'Complete the review. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. A tool that shows a '
        + 'measurement is a gauge.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. How hard the air pushes inside a tyre is the tyre [[1]] .' + '<br>'
        + '2. The correct level, or allowed range, for a reading is the [[2]] .' + '<br>'
        + '3. “This tyre is [[3]] worn than that one.” (comparative)' + '<br>'
        + '4. “This is the [[4]] worn tyre of all four.” (superlative)' + '<br>'
        + '5. Safety gear like gloves and glasses is called [[5]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['pressure'],
        '2': ['tolerance'],
        '3': ['more'],
        '4': ['most'],
        '5': ['PPE']
      },
      bank: ['pressure', 'tolerance', 'more', 'most', 'PPE'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>pressure</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>tolerance</i>, <i>more</i> in the bank.',
        '2': '<b>tolerance</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>pressure</i>, <i>more</i> in the bank.',
        '3': '<b>more</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>pressure</i>, <i>tolerance</i> in the bank.',
        '4': '<b>most</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>pressure</i>, <i>tolerance</i> in the bank.',
        '5': '<b>PPE</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>pressure</i>, <i>tolerance</i> in the bank.'
      }
    }
  ]
});
