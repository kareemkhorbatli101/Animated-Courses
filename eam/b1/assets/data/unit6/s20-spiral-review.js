/* Unit 6 §20 — Part 10 - Spiral review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s20', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 10 - Spiral review', part: '10', section: '20',
          lesson: 'Part 10 - Spiral review', title: 'Part 10 - Spiral review' },
  objective: 'Work through Part 10 - Spiral review of unit 6.',
  video: 'u06v20',
  prev: 's19-local-case-study', prevLabel: 'Part 9 - Local Case Study',
  next: 's21-can-do-glossary', nextLabel: 'Part 10 - Can-Do and glossary',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 6 · Part 10', type: 'cloze',
      title: 'Spiral Review',
      instruction: 'Complete the review. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. Removing old oil and adding '
        + 'new oil is an oil change.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The parts that press to stop the car are the brake [[1]] .' + '<br>'
        + '2. Moving the tyres so they wear evenly is tyre [[2]] .' + '<br>'
        + '3. “ [[3]] you check the brakes, please?” (a polite request)' + '<br>'
        + '4. “You [[4]] change the worn pads soon.” (advice)' + '<br>'
        + '5. “The car is serviced by the mechanic” uses the [[5]] voice.' + '<br>'
        + '</div>',
      answers: {
        '1': ['pads'],
        '2': ['rotation'],
        '3': ['Could'],
        '4': ['should'],
        '5': ['passive']
      },
      bank: ['pads', 'rotation', 'Could', 'should', 'passive'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>pads</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>rotation</i>, <i>Could</i> in the bank.',
        '2': '<b>rotation</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>pads</i>, <i>Could</i> in the bank.',
        '3': '<b>Could</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>pads</i>, <i>rotation</i> in the bank.',
        '4': '<b>should</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>pads</i>, <i>rotation</i> in the bank.',
        '5': '<b>passive</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>pads</i>, <i>rotation</i> in the bank.'
      }
    }
  ]
});
