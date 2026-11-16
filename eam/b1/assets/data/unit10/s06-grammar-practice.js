/* Unit 10 §6 — Part 2 - Grammar, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s06', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 2 - Grammar, practice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 10.',
  video: 'u10v06',
  prev: 's05-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's07-grammar-review', nextLabel: 'Part 2 - Grammar, review',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 10 · Part 2', type: 'shortanswer',
      title: 'Controlled Practice',
      instruction: 'Report each statement. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. “The car is ready.” → She '
        + 'said (that) the car was ready.</span>',
      items: [
        { q: '1. “I have finished the training.” (Lina)',
          accept: ['lina said (that) she had finished the training'],
          keys: ['lina', 'said'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. “The parts will arrive tomorrow.” (Rana)',
          accept: ['rana said (that) the parts would arrive the next day'],
          keys: ['rana', 'said'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. “Change the oil.” (Maher → Tarek)',
          accept: ['maher told tarek to change the oil'],
          keys: ['maher', 'told'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '4. “We use genuine parts.” (Nabil)',
          accept: ['nabil said (that) they used genuine parts'],
          keys: ['nabil', 'said'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 10 · Part 2', type: 'shortanswer',
      title: 'Report the Question',
      instruction: 'Report each question. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. “Is the car ready?” '
        + '(customer) → The customer asked if the car was ready.</span>',
      items: [
        { q: '1. “When will it be finished?” (Mr Aboud)',
          accept: ['mr aboud asked when it would be finished'],
          keys: ['aboud', 'asked'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. “Have you diagnosed it?” (Maher)',
          accept: ['maher asked if they had diagnosed it'],
          keys: ['maher', 'asked'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. “Do you use genuine parts?” (customer)',
          accept: ['the customer asked if they used genuine parts'],
          keys: ['customer', 'asked'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '4. “Is the training finished?” (Nabil)',
          accept: ['nabil asked if the training was finished'],
          keys: ['nabil', 'asked'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    }
  ]
});
