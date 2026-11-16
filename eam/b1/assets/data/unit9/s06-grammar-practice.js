/* Unit 9 §6 — Part 2 - Grammar, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s06', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 2 - Grammar, practice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 9.',
  video: 'u09v06',
  prev: 's05-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's07-grammar-review', nextLabel: 'Part 2 - Grammar, review',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 9 · Part 2', type: 'cloze',
      title: 'Controlled Practice',
      instruction: 'Complete with the past simple or present perfect. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. I replaced the pads '
        + 'yesterday. (replace)</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. [[1]] you ever ___ (repair) a gearbox?' + '<br>'
        + '2. He [[2]] (diagnose) the fault last week.' + '<br>'
        + '3. The car [[3]] (come) back with the same noise.' + '<br>'
        + '4. I [[4]] (check) the brakes an hour ago.' + '<br>'
        + '</div>',
      answers: {
        '1': ['Have … repaired'],
        '2': ['diagnosed'],
        '3': ['has come'],
        '4': ['checked']
      },
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>Have … repaired</b>. Read the words either side of the gap: they fix '
        + 'which word belongs here.',
        '2': '<b>diagnosed</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '3': '<b>has come</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '4': '<b>checked</b>. Read the words either side of the gap: they fix which word '
        + 'belongs here.'
      }
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 9 · Part 2', type: 'cloze',
      title: 'Choose the Form',
      instruction: 'Choose the correct form.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. I [[1]] the part yesterday. (replaced / have replaced)' + '<br>'
        + '2. [[2]] it yet? (Did you check / Have you checked)' + '<br>'
        + '3. She [[3]] it last Monday. (diagnosed / has diagnosed)' + '<br>'
        + '4. We [[4]] three cars today. (already fixed / have already fixed)' + '<br>'
        + '</div>',
      answers: {
        '1': ['replaced'],
        '2': ['Have you checked'],
        '3': ['diagnosed'],
        '4': ['have already fixed']
      },
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>replaced</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '2': '<b>Have you checked</b>. Read the words either side of the gap: they fix '
        + 'which word belongs here.',
        '3': '<b>diagnosed</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '4': '<b>have already fixed</b>. Read the words either side of the gap: they fix '
        + 'which word belongs here.'
      }
    }
  ]
});
