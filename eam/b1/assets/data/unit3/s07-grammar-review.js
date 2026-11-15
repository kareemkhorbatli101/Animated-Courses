/* Unit 3 §7 — Part 2 - Grammar, review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s07', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 2 - Grammar, review', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, review', title: 'Part 2 - Grammar, review' },
  objective: 'Work through Part 2 - Grammar, review of unit 3.',
  video: 'u03v07',
  prev: 's06-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's08-listening-1', nextLabel: 'Part 3 - Listening 1',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 3 · Part 2', type: 'editor',
      title: 'Correct the Sentence',
      instruction: 'Each sentence has one grammar mistake. Write the correct sentence.',
      write: true,
      items: [
        { wrong: 'You wear your gloves in the workshop.',
          accept: ['Chock the wheels.'],
          why: 'The repaired sentence is “Chock the wheels”. The fault is the one this '
        + 'unit’s focus box warns about — compare the two sentences word by word and '
        + 'the changed word is the rule.' },
        { wrong: 'Not touch the hot engine.',
          accept: ['Raise the car slowly with the jack.'],
          why: 'The repaired sentence is “Raise the car slowly with the jack”. The fault '
        + 'is the one this unit’s focus box warns about — compare the two sentences '
        + 'word by word and the changed word is the rule.' },
        { wrong: 'First raise the car, then chock the wheels.',
          accept: ['Put the axle stands under the car.'],
          why: 'The repaired sentence is “Put the axle stands under the car”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' },
        { wrong: 'Please to clean your area.',
          accept: ['Check the car is steady before you work.'],
          why: 'The repaired sentence is “Check the car is steady before you work”. The '
        + 'fault is the one this unit’s focus box warns about — compare the two '
        + 'sentences word by word and the changed word is the rule.' }
      ],
      whyTitle: 'The fault in each sentence'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 3 · Part 2', type: 'writer',
      title: 'Freer Practice',
      instruction: 'Write three safety rules for a workshop. Use imperatives (and one Don’t or '
        + 'Never).',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write three safety rules for a workshop. Use imperatives (and one Don’t or '
        + 'Never).',
        words: [],
        must: ['Every instruction begins with the verb — <b>Put</b>, <b>Check</b>, '
        + '<b>Wear</b> — with no <i>I</i> or <i>you</i> in front of it.', 'A step that keeps somebody safe comes <b>before</b> the work it protects, '
        + 'not after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.', 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write three safety rules for a workshop. Use imperatives (and one Don’t or '
        + 'Never).',
        grammar: 'Imperatives, and the order of the steps',
        reader: 'the teacher',
        must: ['Every instruction begins with the verb — <b>Put</b>, <b>Check</b>, '
        + '<b>Wear</b> — with no <i>I</i> or <i>you</i> in front of it.', 'A step that keeps somebody safe comes <b>before</b> the work it protects, '
        + 'not after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.', 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Imperatives, and the order of the steps',
        minWords: 40,
        taught: ['The tools on the board, the rules that keep a workshop safe, and how to '
        + 'give an instruction in the right order.'],
        task: 'Write three safety rules for a workshop. Use imperatives (and one Don’t or '
        + 'Never).',
        parts: ['Every instruction begins with the verb — <b>Put</b>, <b>Check</b>, '
        + '<b>Wear</b> — with no <i>I</i> or <i>you</i> in front of it.', 'A step that keeps somebody safe comes <b>before</b> the work it protects, '
        + 'not after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'Every instruction begins with the verb — <b>Put</b>, <b>Check</b>, '
        + '<b>Wear</b> — with no <i>I</i> or <i>you</i> in front of it.' },
                   { t: 'A step that keeps somebody safe comes <b>before</b> the work it protects, '
        + 'not after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' },
                   { t: 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C',
      bookRef: 'Unit 3 · Part 2', type: 'quizset',
      title: 'Grammar Review',
      instruction: 'Choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Which is a correct instruction?',
          options: [
            { t: 'Wear your safety glasses.', ok: true,
              why: 'Right — Wear your safety glasses. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'You wearing safety glasses.', ok: false,
              why: 'Not this one. You wearing safety glasses is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which is a correct instruction”.' },
            { t: 'To wear safety glasses.', ok: false,
              why: 'Not this one. To wear safety glasses is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which is a correct instruction”.' },
            { t: 'Safety glasses wear.', ok: false,
              why: 'Not this one. Safety glasses wear is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Which is a correct instruction”.' }
          ]
        },
        {
          q: '2. Which order is safe and correct?',
          options: [
            { t: 'First raise the car, then chock the wheels.', ok: false,
              why: 'Not this one. First raise the car, then chock the wheels is a real thing '
        + 'in a workshop, but it is not what the question asks about, and nothing in '
        + 'the material links it to “Which order is safe and correct”.' },
            { t: 'First chock the wheels, then raise the car.', ok: true,
              why: 'Right — First chock the wheels, then raise the car. Check it against the '
        + 'text or the card you met it on: this is stated, not inferred.' },
            { t: 'Raise the car and work under it on the jack.', ok: false,
              why: 'Not this one. Raise the car and work under it on the jack is a real thing '
        + 'in a workshop, but it is not what the question asks about, and nothing in '
        + 'the material links it to “Which order is safe and correct”.' },
            { t: 'Never chock the wheels.', ok: false,
              why: 'Not this one. Never chock the wheels is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which order is safe and correct”.' }
          ]
        }
      ]
    }
  ]
});
