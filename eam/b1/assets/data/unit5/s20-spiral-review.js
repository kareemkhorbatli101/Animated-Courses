/* Unit 5 §20 — Part 10 - Spiral review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s20', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 10 - Spiral review', part: '10', section: '20',
          lesson: 'Part 10 - Spiral review', title: 'Part 10 - Spiral review' },
  objective: 'Work through Part 10 - Spiral review of unit 5.',
  video: 'u05v20',
  prev: 's19-local-case-study', prevLabel: 'Part 9 - Local Case Study',
  next: 's21-can-do-glossary', nextLabel: 'Part 10 - Can-Do and glossary',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 5 · Part 10', type: 'cloze',
      title: 'Spiral Review',
      instruction: 'Complete the review. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. A final check before the '
        + 'car goes back is a quality check.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. When a car arrives, it is [[1]] in at reception.' + '<br>'
        + '2. In the workshop, the car is inspected and [[2]] .' + '<br>'
        + '3. “The car [[3]] serviced by the mechanic.” (passive)' + '<br>'
        + '4. “The tyres [[4]] checked in the workshop.” (passive, plural)' + '<br>'
        + '5. The correct level, or allowed range, for a reading is the [[5]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['booked'],
        '2': ['serviced'],
        '3': ['is'],
        '4': ['are'],
        '5': ['tolerance']
      },
      bank: ['booked', 'serviced', 'is', 'are', 'tolerance'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>booked</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>serviced</i>, <i>is</i> in the bank.',
        '2': '<b>serviced</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>booked</i>, <i>is</i> in the bank.',
        '3': '<b>is</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>booked</i>, <i>serviced</i> in the bank.',
        '4': '<b>are</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>booked</i>, <i>serviced</i> in the bank.',
        '5': '<b>tolerance</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>booked</i>, <i>serviced</i> in the bank.'
      }
    }
  ]
});
