/* Unit 2 §6 — Part 2 - Grammar, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s06', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 2 - Grammar, practice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 2.',
  video: 'u02v06',
  prev: 's05-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's07-grammar-review', nextLabel: 'Part 2 - Grammar, review',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 2 · Part 2', type: 'cloze',
      title: 'Controlled Practice',
      instruction: 'Complete with is or are. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. There is a battery under '
        + 'the bonnet.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. There [[1]] two hoses on the radiator.' + '<br>'
        + '2. There [[2]] some oil on the floor.' + '<br>'
        + '3. There [[3]] four filters in the box.' + '<br>'
        + '4. There [[4]] a leak in the pipe.' + '<br>'
        + '</div>',
      answers: {
        '1': ['are'],
        '2': ['is'],
        '3': ['are'],
        '4': ['is']
      },
      bank: ['is', 'are'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>are</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>is</i> in the bank.',
        '2': '<b>is</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>are</i> in the bank.',
        '3': '<b>are</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>is</i> in the bank.',
        '4': '<b>is</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>are</i> in the bank.'
      }
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 2 · Part 2', type: 'chipcols',
      title: 'Some, Any, Much or Many?',
      instruction: 'Choose the correct word.',
      poolLabel: 'Click a sentence, then click a column.',
      cols: [{ label: 'A' }, { label: 'B' }],
      pool: ['Is there ____________________ brake fluid? (any / some)', 'There aren’t ____________________ clean filters. (much / many)', 'There isn’t ____________________ coolant left. (much / many)', 'We have ____________________ new spark plugs. (some / any)'],
      answers: {
        'Is there ____________________ brake fluid? (any / some)': 0,
        'There aren’t ____________________ clean filters. (much / many)': 1,
        'There isn’t ____________________ coolant left. (much / many)': 0,
        'We have ____________________ new spark plugs. (some / any)': 1
      },
      whyTitle: 'What decided each one',
      why: {
        'Is there ____________________ brake fluid? (any / some)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'There aren’t ____________________ clean filters. (much / many)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'There isn’t ____________________ coolant left. (much / many)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'We have ____________________ new spark plugs. (some / any)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.'
      }
    }
  ]
});
