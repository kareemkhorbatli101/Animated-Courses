/* Unit 7 §6 — Part 2 - Grammar, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s06', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 2 - Grammar, practice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 7.',
  video: 'u07v06',
  prev: 's05-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's07-grammar-review', nextLabel: 'Part 2 - Grammar, review',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 7 · Part 2', type: 'cloze',
      title: 'Controlled Practice',
      instruction: 'Choose the correct future form.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. We [[1]] order the part tomorrow. (are going to / will) — a plan' + '<br>'
        + '2. The van [[2]] at ten tomorrow. (arrives / is arriving) — an arrangement' + '<br>'
        + '3. OK, I [[3]] book you in for Friday. (will / am going to) — deciding now' + '<br>'
        + '4. The technician [[4]] your car now. (starts / is starting) — happening now' + '<br>'
        + '</div>',
      answers: {
        '1': ['are going to'],
        '2': ['is arriving'],
        '3': ['will'],
        '4': ['is starting']
      },
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>are going to</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '2': '<b>is arriving</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.',
        '3': '<b>will</b>. Read the words either side of the gap: they fix which word '
        + 'belongs here.',
        '4': '<b>is starting</b>. Read the words either side of the gap: they fix which '
        + 'word belongs here.'
      }
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 7 · Part 2', type: 'chipcols',
      title: 'Will or Going To?',
      instruction: 'Choose the correct form.',
      poolLabel: 'Click a sentence, then click a column.',
      cols: [{ label: 'A' }, { label: 'B' }],
      pool: ['I ____________________ call you when it’s ready. (will / am calling)', 'We ____________________ order the part tomorrow. (will / are going to)', 'The van ____________________ at ten tomorrow. (will come / is coming)', 'OK, I ____________________ book you in for Friday. (will / am booking)'],
      answers: {
        'I ____________________ call you when it’s ready. (will / am calling)': 0,
        'We ____________________ order the part tomorrow. (will / are going to)': 1,
        'The van ____________________ at ten tomorrow. (will come / is coming)': 0,
        'OK, I ____________________ book you in for Friday. (will / am booking)': 1
      },
      whyTitle: 'What decided each one',
      why: {
        'I ____________________ call you when it’s ready. (will / am calling)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'We ____________________ order the part tomorrow. (will / are going to)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'The van ____________________ at ten tomorrow. (will come / is coming)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'OK, I ____________________ book you in for Friday. (will / am booking)': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.'
      }
    }
  ]
});
