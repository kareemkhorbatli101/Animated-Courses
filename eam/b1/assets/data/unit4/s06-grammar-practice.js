/* Unit 4 §6 — Part 2 - Grammar, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s06', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 2 - Grammar, practice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 4.',
  video: 'u04v06',
  prev: 's05-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's07-grammar-review', nextLabel: 'Part 2 - Grammar, review',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 4 · Part 2', type: 'cloze',
      title: 'Controlled Practice',
      instruction: 'Write the comparative form. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. This tyre is more worn than '
        + 'that one. (worn)</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The rear tyre is [[1]] (worn) than the front tyre.' + '<br>'
        + '2. Today’s reading is [[2]] (low) than yesterday’s.' + '<br>'
        + '3. A new tyre is [[3]] (good) than an old one.' + '<br>'
        + '4. This tyre is [[4]] (bad) than that one.' + '<br>'
        + '</div>',
      answers: {
        '1': ['more worn'],
        '2': ['lower'],
        '3': ['better'],
        '4': ['worse']
      },
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>more worn</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '2': '<b>lower</b>. Read the words either side of the gap: they fix which word '
        + 'belongs here.',
        '3': '<b>better</b>. Read the words either side of the gap: they fix which word '
        + 'belongs here.',
        '4': '<b>worse</b>. Read the words either side of the gap: they fix which word '
        + 'belongs here.'
      }
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 4 · Part 2', type: 'cloze',
      title: 'Superlatives',
      instruction: 'Write the superlative form. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. Of the four tyres, the rear '
        + 'left is the most worn. (worn)</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. This is the [[1]] (low) reading of all.' + '<br>'
        + '2. This is the [[2]] (good) battery in the store.' + '<br>'
        + '3. That is the [[3]] (bad) tyre on the car.' + '<br>'
        + '4. The rear left is the [[4]] (worn) of the four tyres.' + '<br>'
        + '</div>',
      answers: {
        '1': ['the lowest'],
        '2': ['the best'],
        '3': ['the worst'],
        '4': ['the most worn']
      },
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>the lowest</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '2': '<b>the best</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '3': '<b>the worst</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '4': '<b>the most worn</b>. Read the words either side of the gap: they fix '
        + 'which word belongs here.'
      }
    }
  ]
});
