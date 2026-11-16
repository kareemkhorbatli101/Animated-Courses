/* Unit 9 §4 — Part 1 - Check.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s04', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 1 - Check', part: '1', section: '4',
          lesson: 'Part 1 - Check', title: 'Part 1 - Check' },
  objective: 'Work through Part 1 - Check of unit 9.',
  video: 'u09v04',
  prev: 's03-pronunciation', prevLabel: 'Part 1 - Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 9 · Part 1', type: 'quizset',
      title: 'Diagnosis and Repair — Multiple Choice',
      instruction: 'Read and choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What is a symptom?',
          options: [
            { t: 'A repair', ok: false,
              why: 'Not this one. A repair is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a symptom”.' },
            { t: 'A sign that something is wrong', ok: true,
              why: 'Right — A sign that something is wrong. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' },
            { t: 'A new part', ok: false,
              why: 'Not this one. A new part is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a symptom”.' },
            { t: 'A tool', ok: false,
              why: 'Not this one. A tool is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is a '
        + 'symptom”.' }
          ]
        },
        {
          q: '2. What is a reconditioned part?',
          options: [
            { t: 'A broken part', ok: false,
              why: 'Not this one. A broken part is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a reconditioned part”.' },
            { t: 'A new part', ok: false,
              why: 'Not this one. A new part is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a reconditioned part”.' },
            { t: 'A cheap plastic part', ok: false,
              why: 'Not this one. A cheap plastic part is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “What is a reconditioned part”.' },
            { t: 'An old part repaired to work like new', ok: true,
              why: 'Right — An old part repaired to work like new. Check it against the text '
        + 'or the card you met it on: this is stated, not inferred.' }
          ]
        },
        {
          q: '3. What does ‘diagnose’ mean?',
          options: [
            { t: 'To find out what is wrong', ok: true,
              why: 'Right — To find out what is wrong. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'To sell the car', ok: false,
              why: 'Not this one. To sell the car is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does ‘diagnose’ mean”.' },
            { t: 'To clean it', ok: false,
              why: 'Not this one. To clean it is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does ‘diagnose’ mean”.' },
            { t: 'To drive fast', ok: false,
              why: 'Not this one. To drive fast is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does ‘diagnose’ mean”.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 9 · Part 1', type: 'cloze',
      title: 'Vocabulary Fill-in',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. A noise or a light is a [[1]] .' + '<br>'
        + '2. First, we [[2]] the problem with a computer.' + '<br>'
        + '3. If the part is broken, we [[3]] it.' + '<br>'
        + '4. A car that returns with the same fault is a [[4]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['symptom'],
        '2': ['diagnose'],
        '3': ['replace'],
        '4': ['comeback']
      },
      bank: ['symptom', 'diagnose', 'replace', 'comeback'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>symptom</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>diagnose</i>, <i>replace</i> in the bank.',
        '2': '<b>diagnose</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>symptom</i>, <i>replace</i> in the bank.',
        '3': '<b>replace</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>symptom</i>, <i>diagnose</i> in the bank.',
        '4': '<b>comeback</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>symptom</i>, <i>diagnose</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 9 · Part 1', type: 'writer',
      title: 'Write About Fault-Finding (short)',
      instruction: 'Write two or three sentences about how a mechanic finds and fixes a fault. '
        + 'Use three words from this unit.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two or three sentences about how a mechanic finds and fixes a fault. '
        + 'Use three words from this unit.',
        words: [],
        must: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.', 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.', 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two or three sentences about how a mechanic finds and fixes a fault. '
        + 'Use three words from this unit.',
        grammar: 'The present perfect against the past simple',
        reader: 'the teacher',
        must: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.', 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.', 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The present perfect against the past simple',
        minWords: 40,
        taught: ['Finding a fault from its symptoms, saying what has been done to the car, '
        + 'and handling a car that comes back.'],
        task: 'Write two or three sentences about how a mechanic finds and fixes a fault. '
        + 'Use three words from this unit.',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' },
                   { t: 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.' },
                   { t: 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.' }]
      }
    }
  ]
});
