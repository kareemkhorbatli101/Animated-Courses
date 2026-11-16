/* Unit 6 §6 — Part 2 - Grammar, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s06', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 2 - Grammar, practice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 6.',
  video: 'u06v06',
  prev: 's05-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's07-grammar-review', nextLabel: 'Part 2 - Grammar, review',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 6 · Part 2', type: 'shortanswer',
      title: 'Controlled Practice',
      instruction: 'Write a request, offer, or advice, as shown. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. (request) check the brakes '
        + '→ Could you check the brakes, please?</span>',
      items: [
        { q: '1. (advice) change the worn pads',
          accept: ['you should change the worn pads'],
          keys: ['should', 'change'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. (offer) top up the coolant',
          accept: ['shall i top up the coolant?'],
          keys: ['shall', 'coolant'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. (request) bring the car back next week',
          accept: ['could you bring the car back next week?'],
          keys: ['could', 'bring'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '4. (advice) not drive on worn tyres',
          accept: ['you shouldn’t drive on worn tyres'],
          keys: ['shouldn', 'drive'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 6 · Part 2', type: 'cloze',
      title: 'Choose the Modal',
      instruction: 'Choose the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. [[1]] I book you in for Tuesday? (Shall / Should)' + '<br>'
        + '2. You [[2]] check the oil before a long trip. (should / could)' + '<br>'
        + '3. [[3]] you sign the job card, please? (Could / Shall)' + '<br>'
        + '4. You [[4]] drive on very worn tyres. (should / shouldn’t)' + '<br>'
        + '</div>',
      answers: {
        '1': ['Shall'],
        '2': ['should'],
        '3': ['Could'],
        '4': ['shouldn’t']
      },
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>Shall</b>. Read the words either side of the gap: they fix which word '
        + 'belongs here.',
        '2': '<b>should</b>. Read the words either side of the gap: they fix which word '
        + 'belongs here.',
        '3': '<b>Could</b>. Read the words either side of the gap: they fix which word '
        + 'belongs here.',
        '4': '<b>shouldn’t</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.'
      }
    }
  ]
});
