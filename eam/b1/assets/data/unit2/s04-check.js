/* Unit 2 §4 — Part 1 - Check.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s04', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 1 - Check', part: '1', section: '4',
          lesson: 'Part 1 - Check', title: 'Part 1 - Check' },
  objective: 'Work through Part 1 - Check of unit 2.',
  video: 'u02v04',
  prev: 's03-pronunciation', prevLabel: 'Part 1 - Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 2 · Part 1', type: 'quizset',
      title: 'Systems and Fluids — Multiple Choice',
      instruction: 'Read and choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does the alternator do?',
          options: [
            { t: 'Makes electricity while the engine runs', ok: true,
              why: 'Right — Makes electricity while the engine runs. Check it against the text '
        + 'or the card you met it on: this is stated, not inferred.' },
            { t: 'Cools the engine', ok: false,
              why: 'Not this one. Cools the engine is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What does the alternator do”.' },
            { t: 'Cleans the oil', ok: false,
              why: 'Not this one. Cleans the oil is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does the alternator do”.' },
            { t: 'Holds bags', ok: false,
              why: 'Not this one. Holds bags is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the alternator do”.' }
          ]
        },
        {
          q: '2. What do you use a dipstick for?',
          options: [
            { t: 'To start the car', ok: false,
              why: 'Not this one. To start the car is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What do you use a dipstick for”.' },
            { t: 'To open the bonnet', ok: false,
              why: 'Not this one. To open the bonnet is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What do you use a dipstick for”.' },
            { t: 'To clean the glass', ok: false,
              why: 'Not this one. To clean the glass is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What do you use a dipstick for”.' },
            { t: 'To check the oil level', ok: true,
              why: 'Right — To check the oil level. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' }
          ]
        },
        {
          q: '3. What does coolant do?',
          options: [
            { t: 'It makes power', ok: false,
              why: 'Not this one. It makes power is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does coolant do”.' },
            { t: 'It stops the engine getting too hot', ok: true,
              why: 'Right — It stops the engine getting too hot. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'It cleans the air', ok: false,
              why: 'Not this one. It cleans the air is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What does coolant do”.' },
            { t: 'It stores electricity', ok: false,
              why: 'Not this one. It stores electricity is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “What does coolant do”.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 2 · Part 1', type: 'cloze',
      title: 'Vocabulary Fill-in',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Check the engine [[1]] with the dipstick.' + '<br>'
        + '2. The [[2]] keeps the engine cool.' + '<br>'
        + '3. The air [[3]] cleans the air going into the engine.' + '<br>'
        + '4. The [[4]] stores electricity to start the car.' + '<br>'
        + '</div>',
      answers: {
        '1': ['oil'],
        '2': ['coolant'],
        '3': ['filter'],
        '4': ['battery']
      },
      bank: ['oil', 'coolant', 'filter', 'battery'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>oil</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>coolant</i>, <i>filter</i> in the bank.',
        '2': '<b>coolant</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>oil</i>, <i>filter</i> in the bank.',
        '3': '<b>filter</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>oil</i>, <i>coolant</i> in the bank.',
        '4': '<b>battery</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>oil</i>, <i>coolant</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 2 · Part 1', type: 'writer',
      title: 'Write About the Engine (short)',
      instruction: 'Write two or three sentences about what is under the bonnet. Use three '
        + 'words from this unit.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two or three sentences about what is under the bonnet. Use three '
        + 'words from this unit.',
        words: [],
        must: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.', 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two or three sentences about what is under the bonnet. Use three '
        + 'words from this unit.',
        grammar: 'There is / There are, and some, any, much, many',
        reader: 'the teacher',
        must: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.', 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'There is / There are, and some, any, much, many',
        minWords: 40,
        taught: ['What is under the bonnet, what each fluid does, and how to say how much of '
        + 'it there is.'],
        task: 'Write two or three sentences about what is under the bonnet. Use three '
        + 'words from this unit.',
        parts: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.' },
                   { t: '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.' },
                   { t: '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.' },
                   { t: 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.' }]
      }
    }
  ]
});
