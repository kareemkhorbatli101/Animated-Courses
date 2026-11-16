/* Unit 8 §20 — Part 10 - Spiral review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s20', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 10 - Spiral review', part: '10', section: '20',
          lesson: 'Part 10 - Spiral review', title: 'Part 10 - Spiral review' },
  objective: 'Work through Part 10 - Spiral review of unit 8.',
  video: 'u08v20',
  prev: 's19-local-case-study', prevLabel: 'Part 9 - Local Case Study',
  next: 's21-can-do-glossary', nextLabel: 'Part 10 - Can-Do and glossary',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 8 · Part 10', type: 'cloze',
      title: 'Spiral Review',
      instruction: 'Complete the review. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. A promise to repair or '
        + 'replace for free for a time is a warranty.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. A fault, something wrong with the car, is a [[1]] .' + '<br>'
        + '2. A part made by the carmaker is a [[2]] part.' + '<br>'
        + '3. “Every car [[3]] pass the quality check.” (obligation)' + '<br>'
        + '4. “You [[4]] hand over a car with a fault.” (prohibition)' + '<br>'
        + '5. “I [[5]] call you when it’s ready” is a promise.' + '<br>'
        + '</div>',
      answers: {
        '1': ['defect'],
        '2': ['genuine'],
        '3': ['must'],
        '4': ['mustn’t'],
        '5': ['will']
      },
      bank: ['defect', 'genuine', 'must', 'mustn’t', 'will'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>defect</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>genuine</i>, <i>must</i> in the bank.',
        '2': '<b>genuine</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>defect</i>, <i>must</i> in the bank.',
        '3': '<b>must</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>defect</i>, <i>genuine</i> in the bank.',
        '4': '<b>mustn’t</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>defect</i>, <i>genuine</i> in the bank.',
        '5': '<b>will</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>defect</i>, <i>genuine</i> in the bank.'
      }
    }
  ]
});
