/* Unit 4 §4 — Part 1 - Check.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s04', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 1 - Check', part: '1', section: '4',
          lesson: 'Part 1 - Check', title: 'Part 1 - Check' },
  objective: 'Work through Part 1 - Check of unit 4.',
  video: 'u04v04',
  prev: 's03-pronunciation', prevLabel: 'Part 1 - Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 4 · Part 1', type: 'quizset',
      title: 'Measuring — Multiple Choice',
      instruction: 'Read and choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What unit is tyre pressure measured in?',
          options: [
            { t: 'Millimetres', ok: false,
              why: 'Not this one. Millimetres is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What unit is tyre pressure measured in”.' },
            { t: 'Volts', ok: false,
              why: 'Not this one. Volts is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What unit is '
        + 'tyre pressure measured in”.' },
            { t: 'Bar or psi', ok: true,
              why: 'Right — Bar or psi. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' },
            { t: 'Degrees', ok: false,
              why: 'Not this one. Degrees is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'unit is tyre pressure measured in”.' }
          ]
        },
        {
          q: '2. What does a gauge do?',
          options: [
            { t: 'It shows a measurement', ok: true,
              why: 'Right — It shows a measurement. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' },
            { t: 'It lifts the car', ok: false,
              why: 'Not this one. It lifts the car is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What does a gauge do”.' },
            { t: 'It turns bolts', ok: false,
              why: 'Not this one. It turns bolts is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does a gauge do”.' },
            { t: 'It cools the engine', ok: false,
              why: 'Not this one. It cools the engine is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What does a gauge do”.' }
          ]
        },
        {
          q: '3. What is ‘tolerance’?',
          options: [
            { t: 'A type of tool', ok: false,
              why: 'Not this one. A type of tool is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is ‘tolerance’”.' },
            { t: 'The correct level or allowed range', ok: true,
              why: 'Right — The correct level or allowed range. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'A car part', ok: false,
              why: 'Not this one. A car part is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + '‘tolerance’”.' },
            { t: 'A fluid', ok: false,
              why: 'Not this one. A fluid is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + '‘tolerance’”.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 4 · Part 1', type: 'cloze',
      title: 'Vocabulary Fill-in',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Check the tyre [[1]] before a long trip.' + '<br>'
        + '2. If the [[2]] is worn, change the tyre.' + '<br>'
        + '3. A weak battery has a low [[3]] .' + '<br>'
        + '4. Measure the pressure with a [[4]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['pressure'],
        '2': ['tread'],
        '3': ['voltage'],
        '4': ['gauge']
      },
      bank: ['pressure', 'tread', 'voltage', 'gauge'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>pressure</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>tread</i>, <i>voltage</i> in the bank.',
        '2': '<b>tread</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>pressure</i>, <i>voltage</i> in the bank.',
        '3': '<b>voltage</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>pressure</i>, <i>tread</i> in the bank.',
        '4': '<b>gauge</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>pressure</i>, <i>tread</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 4 · Part 1', type: 'writer',
      title: 'Write About Measuring (short)',
      instruction: 'Write two or three sentences about what you measure on a car and the tools '
        + 'you use. Use three words from this unit.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two or three sentences about what you measure on a car and the tools '
        + 'you use. Use three words from this unit.',
        words: [],
        must: ['Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.', 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two or three sentences about what you measure on a car and the tools '
        + 'you use. Use three words from this unit.',
        grammar: 'Comparatives and superlatives',
        reader: 'the teacher',
        must: ['Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.', 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Comparatives and superlatives',
        minWords: 40,
        taught: ['Reading a gauge, comparing two measurements, and saying which is the worst.'],
        task: 'Write two or three sentences about what you measure on a car and the tools '
        + 'you use. Use three words from this unit.',
        parts: ['Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'Every comparison of two things has <b>than</b> after it.' },
                   { t: 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.' },
                   { t: '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.' },
                   { t: 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.' }]
      }
    }
  ]
});
