/* Unit 5 §6 — Part 2 - Grammar, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s06', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 2 - Grammar, practice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 5.',
  video: 'u05v06',
  prev: 's05-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's07-grammar-review', nextLabel: 'Part 2 - Grammar, review',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 5 · Part 2', type: 'shortanswer',
      title: 'Controlled Practice',
      instruction: 'Make each sentence passive. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. The mechanic inspects the '
        + 'car. → The car is inspected.</span>',
      items: [
        { q: '1. The team services the car.',
          accept: ['the car is serviced'],
          keys: ['serviced'], need: 1,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. The technician checks the tyres.',
          accept: ['the tyres are checked'],
          keys: ['tyres', 'checked'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. The mechanic changes the oil.',
          accept: ['the oil is changed'],
          keys: ['changed'], need: 1,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '4. Reception hands over the car.',
          accept: ['the car is handed over'],
          keys: ['handed', 'over'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 5 · Part 2', type: 'chipcols',
      title: 'Active or Passive?',
      instruction: 'Choose the correct form.',
      poolLabel: 'Click a sentence, then click a column.',
      cols: [{ label: 'A' }, { label: 'B' }],
      pool: ['The car ____________________ in at reception. (books / is booked)', 'The mechanic ____________________ the car. (services / is serviced)', 'The tyres ____________________ in the workshop. (check / are checked)', 'The team ____________________ the engine. (repairs / is repaired)'],
      answers: {
        'The car ____________________ in at reception. (books / is booked)': 0,
        'The mechanic ____________________ the car. (services / is serviced)': 1,
        'The tyres ____________________ in the workshop. (check / are checked)': 0,
        'The team ____________________ the engine. (repairs / is repaired)': 1
      },
      whyTitle: 'What decided each one',
      why: {
        'The car ____________________ in at reception. (books / is booked)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'The mechanic ____________________ the car. (services / is serviced)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'The tyres ____________________ in the workshop. (check / are checked)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'The team ____________________ the engine. (repairs / is repaired)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.'
      }
    }
  ]
});
