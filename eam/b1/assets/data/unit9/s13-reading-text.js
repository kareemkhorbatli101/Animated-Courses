/* Unit 9 §13 — Part 5 - Reading, the text.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s13', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 5 - Reading, the text', part: '5', section: '13',
          lesson: 'Part 5 - Reading, the text', title: 'Part 5 - Reading, the text' },
  objective: 'Work through Part 5 - Reading, the text of unit 9.',
  video: 'u09v13',
  prev: 's12-role-play', prevLabel: 'Part 4 - Role play',
  next: 's14-reading-comprehension', nextLabel: 'Part 5 - Reading, comprehension',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 9 · Part 5', type: 'study',
      title: 'Read: Diagnosis, Repairs and Comebacks',
      instruction: '<b>Before you read:</b> is finding a fault more like following a list, or '
        + 'solving a puzzle? Say your guess, then read and see. Press a paragraph '
        + 'button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Finding a fault is like solving a puzzle. First, the mechanic looks at the '
        + 'symptoms: a noise, a warning light, a leak, or a smell. Then he diagnoses '
        + 'the problem.' + '</p>'
        + '<p>' + 'Modern cars have computers, so he connects a diagnostic machine, which '
        + 'reads the fault. But a good mechanic also uses his ears, his eyes, and his '
        + 'experience. “Have you seen this fault before?” is a useful question.' + '</p>'
        + '<p>' + 'Once he has found the cause, he decides: repair the part, or replace it. '
        + 'Sometimes a reconditioned part — an old part repaired to work like new — '
        + 'is a good, cheaper choice.' + '</p>'
        + '<p>' + 'After the work, he must road-test the car again, to be sure the fault has '
        + 'really gone. Sometimes, a car comes back with the same problem. This is '
        + 'called a comeback.' + '</p>'
        + '<p>' + 'A comeback is not always a mistake; the first repair may have been '
        + 'correct, but a second part may have failed. Still, a good garage takes '
        + 'every comeback seriously.' + '</p>'
        + '<p>' + 'It finds the real cause, fixes the car — usually for free, if it is soon '
        + 'after the repair — and learns from it. “We have fixed the car,” a mechanic '
        + 'should be able to say, “and it will not come back.”' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>cause</b> — the reason a problem '
        + 'happens</div><div><b>experience</b> — the knowledge you get from doing a '
        + 'job for a long time</div><div><b>seriously</b> — with care and '
        + 'attention</div></div>',
      doneLabel: 'I have read the text',
      playable: ['Finding a fault is like solving a puzzle. First, the mechanic looks at the '
        + 'symptoms: a noise, a warning light, a leak, or a smell. Then he diagnoses '
        + 't',
        'Modern cars have computers, so he connects a diagnostic machine, which '
        + 'reads the fault. But a good mechanic also uses his ears, his eyes, and his '
        + 'expe',
        'Once he has found the cause, he decides: repair the part, or replace it. '
        + 'Sometimes a reconditioned part — an old part repaired to work like new — '
        + 'is a',
        'After the work, he must road-test the car again, to be sure the fault has '
        + 'really gone. Sometimes, a car comes back with the same problem. This is '
        + 'call',
        'A comeback is not always a mistake; the first repair may have been '
        + 'correct, but a second part may have failed. Still, a good garage takes '
        + 'every comeba']
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 9 · Part 5', type: 'quizset',
      title: 'Diagnosis, Repairs and Comebacks',
      instruction: 'Answer the multiple-choice questions. (0. is done.) Every answer is in the '
        + 'text above — look back at it rather than answering from what you already '
        + 'know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does the mechanic look at first?',
          options: [
            { t: 'The symptoms', ok: true,
              why: 'Right — The symptoms. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' },
            { t: 'The price', ok: false,
              why: 'Not this one. The price is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic look at first”.' },
            { t: 'The colour', ok: false,
              why: 'Not this one. The colour is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic look at first”.' },
            { t: 'The driver', ok: false,
              why: 'Not this one. The driver is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic look at first”.' }
          ]
        },
        {
          q: '2. What is a reconditioned part?',
          options: [
            { t: 'A new part', ok: false,
              why: 'Not this one. A new part is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a reconditioned part”.' },
            { t: 'A broken part', ok: false,
              why: 'Not this one. A broken part is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a reconditioned part”.' },
            { t: 'A painted part', ok: false,
              why: 'Not this one. A painted part is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a reconditioned part”.' },
            { t: 'An old part repaired to work like new', ok: true,
              why: 'Right — An old part repaired to work like new. Check it against the text '
        + 'or the card you met it on: this is stated, not inferred.' }
          ]
        },
        {
          q: '3. What must the mechanic do after the work?',
          options: [
            { t: 'Do nothing', ok: false,
              why: 'Not this one. Do nothing is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must the mechanic do after the work”.' },
            { t: 'Road-test the car again', ok: true,
              why: 'Right — Road-test the car again. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' },
            { t: 'Paint it', ok: false,
              why: 'Not this one. Paint it is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must the mechanic do after the work”.' },
            { t: 'Drive fast', ok: false,
              why: 'Not this one. Drive fast is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must the mechanic do after the work”.' }
          ]
        }
      ]
    }
  ]
});
