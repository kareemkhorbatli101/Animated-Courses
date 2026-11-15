/* Unit 3 §6 — Part 2 - Grammar, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s06', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 2 - Grammar, practice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 3.',
  video: 'u03v06',
  prev: 's05-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's07-grammar-review', nextLabel: 'Part 2 - Grammar, review',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 3 · Part 2', type: 'shortanswer',
      title: 'Controlled Practice',
      instruction: 'Write the instruction as an imperative. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. (wear) your safety glasses. '
        + '→ Wear your safety glasses.</span>',
      items: [
        { q: '1. (not / touch) the hot engine.',
          accept: ['don’t touch the hot engine'],
          keys: ['touch', 'engine'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. (chock) the wheels first.',
          accept: ['chock the wheels first'],
          keys: ['chock', 'wheels'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. (not / work) under a car on a jack alone.',
          accept: ['never work under a car on a jack alone'],
          keys: ['never', 'work'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '4. (clean) your area at the end.',
          accept: ['clean your area at the end'],
          keys: ['clean', 'your'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 3 · Part 2', type: 'order',
      title: 'Put the Steps in Order',
      instruction: 'Number these steps to raise a car safely. Use the safe order. (0. is done.)',
      poolLabel: 'Click a step, then click the slot it belongs in.',
      say: { key: 'course' },
      blocks: [
        { id: 'b3', text: 'First chock the wheels, then raise the car' },
        { id: 'b4', text: 'Please clean your area' },
        { id: 'b1', text: 'Wear your gloves in the workshop' },
        { id: 'b2', text: 'Don’t touch the hot engine' }
      ],
      positions: ['b1', 'b2', 'b3', 'b4'],
      whyTitle: 'Why this order',
      after: 'The book notes the order may vary a little. What may not vary is a step '
        + 'that keeps somebody safe coming before the work it protects.'
    }
  ]
});
