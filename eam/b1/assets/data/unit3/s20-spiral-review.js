/* Unit 3 §20 — Part 10 - Spiral review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s20', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 10 - Spiral review', part: '10', section: '20',
          lesson: 'Part 10 - Spiral review', title: 'Part 10 - Spiral review' },
  objective: 'Work through Part 10 - Spiral review of unit 3.',
  video: 'u03v20',
  prev: 's19-local-case-study', prevLabel: 'Part 9 - Local Case Study',
  next: 's21-can-do-glossary', nextLabel: 'Part 10 - Can-Do and glossary',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 3 · Part 10', type: 'cloze',
      title: 'Spiral Review',
      instruction: 'Complete the review. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. You use a spanner to turn '
        + 'nuts and bolts.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. A strong stand that holds the car up safely is an [[1]] .' + '<br>'
        + '2. Safety gear like gloves and glasses is called [[2]] .' + '<br>'
        + '3. “ [[3]] your safety glasses.” (an instruction)' + '<br>'
        + '4. To show the last step, we use the word [[4]] .' + '<br>'
        + '5. The fluid that keeps the engine cool is [[5]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['axle stand'],
        '2': ['PPE'],
        '3': ['Wear'],
        '4': ['finally'],
        '5': ['coolant']
      },
      bank: ['axle stand', 'PPE', 'Wear', 'finally', 'coolant'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>axle stand</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>PPE</i>, <i>Wear</i> in the bank.',
        '2': '<b>PPE</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>axle stand</i>, <i>Wear</i> in the bank.',
        '3': '<b>Wear</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>axle stand</i>, <i>PPE</i> in the bank.',
        '4': '<b>finally</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>axle stand</i>, <i>PPE</i> in the bank.',
        '5': '<b>coolant</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>axle stand</i>, <i>PPE</i> in the bank.'
      }
    }
  ]
});
