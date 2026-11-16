/* Unit 8 §6 — Part 2 - Grammar, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s06', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 2 - Grammar, practice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 8.',
  video: 'u08v06',
  prev: 's05-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's07-grammar-review', nextLabel: 'Part 2 - Grammar, review',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 8 · Part 2', type: 'cloze',
      title: 'Controlled Practice',
      instruction: 'Complete with must or mustn’t. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. Every car must pass the '
        + 'road test.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. You [[1]] hand over a car with a fault.' + '<br>'
        + '2. Every job [[2]] be signed off.' + '<br>'
        + '3. You [[3]] hide a defect from the customer.' + '<br>'
        + '4. The car [[4]] be safe before handover.' + '<br>'
        + '</div>',
      answers: {
        '1': ['mustn’t'],
        '2': ['must'],
        '3': ['mustn’t'],
        '4': ['must']
      },
      bank: ['must', 'mustn’t'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>mustn’t</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>must</i> in the bank.',
        '2': '<b>must</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>mustn’t</i> in the bank.',
        '3': '<b>mustn’t</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>must</i> in the bank.',
        '4': '<b>must</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>mustn’t</i> in the bank.'
      }
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 8 · Part 2', type: 'chipcols',
      title: 'Have To or Don’t Have To?',
      instruction: 'Complete with have to, has to, don’t have to, or doesn’t have to.',
      poolLabel: 'Click a sentence, then click a column.',
      cols: [{ label: 'A' }, { label: 'B' }],
      pool: ['Under warranty, we ____________________ use genuine parts.', 'If the car is fine, you ____________________ change the part.', 'Every mechanic ____________________ follow the safety rules.', 'The customer ____________________ pay if the repair is under warranty.'],
      answers: {
        'Under warranty, we ____________________ use genuine parts.': 0,
        'If the car is fine, you ____________________ change the part.': 1,
        'Every mechanic ____________________ follow the safety rules.': 0,
        'The customer ____________________ pay if the repair is under warranty.': 1
      },
      whyTitle: 'What decided each one',
      why: {
        'Under warranty, we ____________________ use genuine parts.': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'If the car is fine, you ____________________ change the part.': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'Every mechanic ____________________ follow the safety rules.': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'The customer ____________________ pay if the repair is under warranty.': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.'
      }
    }
  ]
});
