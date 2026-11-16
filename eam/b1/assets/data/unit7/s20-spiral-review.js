/* Unit 7 §20 — Part 10 - Spiral review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s20', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 10 - Spiral review', part: '10', section: '20',
          lesson: 'Part 10 - Spiral review', title: 'Part 10 - Spiral review' },
  objective: 'Work through Part 10 - Spiral review of unit 7.',
  video: 'u07v20',
  prev: 's19-local-case-study', prevLabel: 'Part 9 - Local Case Study',
  next: 's21-can-do-glossary', nextLabel: 'Part 10 - Can-Do and glossary',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 7 · Part 10', type: 'cloze',
      title: 'Spiral Review',
      instruction: 'Complete the review. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. A paper that shows how much '
        + 'the work will cost is an estimate.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Money the customer pays first, before the work, is a [[1]] .' + '<br>'
        + '2. A car the garage lends the customer is a [[2]] car.' + '<br>'
        + '3. “I [[3]] call you when it’s ready.” (a promise, decided now)' + '<br>'
        + '4. “The van [[4]] arriving at ten tomorrow.” (a fixed arrangement)' + '<br>'
        + '5. “You should change the pads” gives [[5]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['deposit'],
        '2': ['courtesy'],
        '3': ['will'],
        '4': ['is'],
        '5': ['advice']
      },
      bank: ['deposit', 'courtesy', 'will', 'is', 'advice'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>deposit</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>courtesy</i>, <i>will</i> in the bank.',
        '2': '<b>courtesy</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>deposit</i>, <i>will</i> in the bank.',
        '3': '<b>will</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>deposit</i>, <i>courtesy</i> in the bank.',
        '4': '<b>is</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>deposit</i>, <i>courtesy</i> in the bank.',
        '5': '<b>advice</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>deposit</i>, <i>courtesy</i> in the bank.'
      }
    }
  ]
});
