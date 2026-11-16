/* Unit 9 §20 — Part 10 - Spiral review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s20', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 10 - Spiral review', part: '10', section: '20',
          lesson: 'Part 10 - Spiral review', title: 'Part 10 - Spiral review' },
  objective: 'Work through Part 10 - Spiral review of unit 9.',
  video: 'u09v20',
  prev: 's19-local-case-study', prevLabel: 'Part 9 - Local Case Study',
  next: 's21-can-do-glossary', nextLabel: 'Part 10 - Can-Do and glossary',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 9 · Part 10', type: 'cloze',
      title: 'Spiral Review',
      instruction: 'Complete the review. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. A sign that something is '
        + 'wrong is a symptom.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. An old part repaired to work like new is a [[1]] part.' + '<br>'
        + '2. When a car returns with the same fault, it is a [[2]] .' + '<br>'
        + '3. “I [[3]] the pads yesterday.” (past simple, finished time)' + '<br>'
        + '4. “The car [[4]] come back with the same noise.” (present perfect)' + '<br>'
        + '5. “Every car must pass the quality check” states an [[5]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['reconditioned'],
        '2': ['comeback'],
        '3': ['replaced'],
        '4': ['has'],
        '5': ['obligation']
      },
      bank: ['reconditioned', 'comeback', 'replaced', 'has', 'obligation'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>reconditioned</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>comeback</i>, <i>replaced</i> in the bank.',
        '2': '<b>comeback</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>reconditioned</i>, <i>replaced</i> in the bank.',
        '3': '<b>replaced</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>reconditioned</i>, <i>comeback</i> in the bank.',
        '4': '<b>has</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>reconditioned</i>, <i>comeback</i> in the bank.',
        '5': '<b>obligation</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>reconditioned</i>, <i>comeback</i> in the bank.'
      }
    }
  ]
});
