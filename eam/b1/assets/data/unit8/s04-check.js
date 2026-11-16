/* Unit 8 §4 — Part 1 - Check.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s04', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 1 - Check', part: '1', section: '4',
          lesson: 'Part 1 - Check', title: 'Part 1 - Check' },
  objective: 'Work through Part 1 - Check of unit 8.',
  video: 'u08v04',
  prev: 's03-pronunciation', prevLabel: 'Part 1 - Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 8 · Part 1', type: 'quizset',
      title: 'Quality and Warranty — Multiple Choice',
      instruction: 'Read and choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What is a defect?',
          options: [
            { t: 'A good part', ok: false,
              why: 'Not this one. A good part is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a defect”.' },
            { t: 'A new car', ok: false,
              why: 'Not this one. A new car is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a defect”.' },
            { t: 'A fault', ok: true,
              why: 'Right — A fault. Check it against the text or the card you met it on: this '
        + 'is stated, not inferred.' },
            { t: 'A tool', ok: false,
              why: 'Not this one. A tool is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is a '
        + 'defect”.' }
          ]
        },
        {
          q: '2. What is a warranty?',
          options: [
            { t: 'A promise to repair or replace for free for a time', ok: true,
              why: 'Right — A promise to repair or replace for free for a time. Check it '
        + 'against the text or the card you met it on: this is stated, not inferred.' },
            { t: 'A bill', ok: false,
              why: 'Not this one. A bill is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is a '
        + 'warranty”.' },
            { t: 'A deposit', ok: false,
              why: 'Not this one. A deposit is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a warranty”.' },
            { t: 'A key', ok: false,
              why: 'Not this one. A key is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is a '
        + 'warranty”.' }
          ]
        },
        {
          q: '3. What is a recall?',
          options: [
            { t: 'A phone call', ok: false,
              why: 'Not this one. A phone call is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a recall”.' },
            { t: 'When the carmaker asks owners to bring cars back to fix a fault', ok: true,
              why: 'Right — When the carmaker asks owners to bring cars back to fix a fault. '
        + 'Check it against the text or the card you met it on: this is stated, not '
        + 'inferred.' },
            { t: 'A road test', ok: false,
              why: 'Not this one. A road test is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a recall”.' },
            { t: 'A service', ok: false,
              why: 'Not this one. A service is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a recall”.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 8 · Part 1', type: 'cloze',
      title: 'Vocabulary Fill-in',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. A [[1]] is a promise to repair for free for a time.' + '<br>'
        + '2. A fault in the car is a [[2]] .' + '<br>'
        + '3. Under warranty, we use [[3]] parts.' + '<br>'
        + '4. After the check, the mechanic does a [[4]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['warranty'],
        '2': ['defect'],
        '3': ['genuine'],
        '4': ['sign-off']
      },
      bank: ['warranty', 'defect', 'genuine', 'sign-off'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>warranty</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>defect</i>, <i>genuine</i> in the bank.',
        '2': '<b>defect</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>warranty</i>, <i>genuine</i> in the bank.',
        '3': '<b>genuine</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>warranty</i>, <i>defect</i> in the bank.',
        '4': '<b>sign-off</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>warranty</i>, <i>defect</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 8 · Part 1', type: 'writer',
      title: 'Write About Quality (short)',
      instruction: 'Write two or three sentences about quality and warranty. Use three words '
        + 'from this unit.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two or three sentences about quality and warranty. Use three words '
        + 'from this unit.',
        words: [],
        must: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.', 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.', 'The quality claim names what was checked, not just that it was checked.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two or three sentences about quality and warranty. Use three words '
        + 'from this unit.',
        grammar: 'must, have to, mustn\'t and don\'t have to',
        reader: 'the teacher',
        must: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.', 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.', 'The quality claim names what was checked, not just that it was checked.']
      },
      coach: {
        title: 'Check your writing',
        target: 'must, have to, mustn\'t and don\'t have to',
        minWords: 40,
        taught: ['The checks a car passes before it leaves, what a warranty promises, and '
        + 'the difference between a rule you must not break and one that does not '
        + 'apply.'],
        task: 'Write two or three sentences about quality and warranty. Use three words '
        + 'from this unit.',
        parts: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' },
                   { t: 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.' },
                   { t: 'The quality claim names what was checked, not just that it was checked.' }]
      }
    }
  ]
});
