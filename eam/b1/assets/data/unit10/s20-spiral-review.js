/* Unit 10 §20 — Part 10 - Spiral review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s20', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 10 - Spiral review', part: '10', section: '20',
          lesson: 'Part 10 - Spiral review', title: 'Part 10 - Spiral review' },
  objective: 'Work through Part 10 - Spiral review of unit 10.',
  video: 'u10v20',
  prev: 's19-local-case-study', prevLabel: 'Part 9 - Local Case Study',
  next: 's21-can-do-glossary', nextLabel: 'Part 10 - Can-Do and glossary',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 10 · Part 10', type: 'cloze',
      title: 'Spiral Review',
      instruction: 'Complete the review. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. What a customer says about '
        + 'the service is feedback.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. A note from the carmaker with news or advice is a manufacturer [[1]] .' + '<br>'
        + '2. A special plan by the carmaker, like a free safety check, is a [[2]] .' + '<br>'
        + '3. “She [[3]] the car was ready.” (reported statement)' + '<br>'
        + '4. “He [[4]] me to change the oil.” (reported instruction)' + '<br>'
        + '5. “The car has come back” uses the present [[5]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['bulletin'],
        '2': ['campaign'],
        '3': ['said'],
        '4': ['told'],
        '5': ['perfect']
      },
      bank: ['bulletin', 'campaign', 'said', 'told', 'perfect'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>bulletin</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>campaign</i>, <i>said</i> in the bank.',
        '2': '<b>campaign</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>bulletin</i>, <i>said</i> in the bank.',
        '3': '<b>said</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>bulletin</i>, <i>campaign</i> in the bank.',
        '4': '<b>told</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>bulletin</i>, <i>campaign</i> in the bank.',
        '5': '<b>perfect</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>bulletin</i>, <i>campaign</i> in the bank.'
      }
    }
  ]
});
