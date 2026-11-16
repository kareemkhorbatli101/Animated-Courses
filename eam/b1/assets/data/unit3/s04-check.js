/* Unit 3 §4 — Part 1 - Check.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s04', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 1 - Check', part: '1', section: '4',
          lesson: 'Part 1 - Check', title: 'Part 1 - Check' },
  objective: 'Work through Part 1 - Check of unit 3.',
  video: 'u03v04',
  prev: 's03-pronunciation', prevLabel: 'Part 1 - Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 3 · Part 1', type: 'quizset',
      title: 'Tools and Safety — Multiple Choice',
      instruction: 'Read and choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does a torque wrench do?',
          options: [
            { t: 'Lifts the car', ok: false,
              why: 'Not this one. Lifts the car is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does a torque wrench do”.' },
            { t: 'Tightens a bolt to the exact level', ok: true,
              why: 'Right — Tightens a bolt to the exact level. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'Cleans the floor', ok: false,
              why: 'Not this one. Cleans the floor is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What does a torque wrench do”.' },
            { t: 'Cools the engine', ok: false,
              why: 'Not this one. Cools the engine is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What does a torque wrench do”.' }
          ]
        },
        {
          q: '2. What is an axle stand for?',
          options: [
            { t: 'Holding the car up safely', ok: true,
              why: 'Right — Holding the car up safely. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'Turning screws', ok: false,
              why: 'Not this one. Turning screws is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is an axle stand for”.' },
            { t: 'Checking oil', ok: false,
              why: 'Not this one. Checking oil is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is an axle stand for”.' },
            { t: 'Storing tools', ok: false,
              why: 'Not this one. Storing tools is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is an axle stand for”.' }
          ]
        },
        {
          q: '3. What do ear defenders protect?',
          options: [
            { t: 'Your hands', ok: false,
              why: 'Not this one. Your hands is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What do '
        + 'ear defenders protect”.' },
            { t: 'Your eyes', ok: false,
              why: 'Not this one. Your eyes is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What do '
        + 'ear defenders protect”.' },
            { t: 'Your feet', ok: false,
              why: 'Not this one. Your feet is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What do '
        + 'ear defenders protect”.' },
            { t: 'Your ears', ok: true,
              why: 'Right — Your ears. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 3 · Part 1', type: 'cloze',
      title: 'Vocabulary Fill-in',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Use a [[1]] to turn the nuts and bolts.' + '<br>'
        + '2. Use a [[2]] to lift the car.' + '<br>'
        + '3. Wear [[3]] to protect your eyes.' + '<br>'
        + '4. Put a [[4]] behind the wheel to stop it rolling.' + '<br>'
        + '</div>',
      answers: {
        '1': ['spanner'],
        '2': ['jack'],
        '3': ['goggles'],
        '4': ['chock']
      },
      bank: ['spanner', 'jack', 'goggles', 'chock'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>spanner</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>jack</i>, <i>goggles</i> in the bank.',
        '2': '<b>jack</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>spanner</i>, <i>goggles</i> in the bank.',
        '3': '<b>goggles</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>spanner</i>, <i>jack</i> in the bank.',
        '4': '<b>chock</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>spanner</i>, <i>jack</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 3 · Part 1', type: 'writer',
      title: 'Write About Tools (short)',
      instruction: 'Write two or three sentences about the tools and safety gear you use. Use '
        + 'three words from this unit.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two or three sentences about the tools and safety gear you use. Use '
        + 'three words from this unit.',
        words: [],
        must: ['Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.', 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two or three sentences about the tools and safety gear you use. Use '
        + 'three words from this unit.',
        grammar: 'Imperatives, and the order of the steps',
        reader: 'the teacher',
        must: ['Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.', 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Imperatives, and the order of the steps',
        minWords: 40,
        taught: ['The tools on the board, the rules that keep a workshop safe, and how to '
        + 'give an instruction in the right order.'],
        task: 'Write two or three sentences about the tools and safety gear you use. Use '
        + 'three words from this unit.',
        parts: ['Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.' },
                   { t: 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' },
                   { t: 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.' }]
      }
    }
  ]
});
