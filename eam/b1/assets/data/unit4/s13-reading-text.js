/* Unit 4 §13 — Part 5 - Reading, the text.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s13', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 5 - Reading, the text', part: '5', section: '13',
          lesson: 'Part 5 - Reading, the text', title: 'Part 5 - Reading, the text' },
  objective: 'Work through Part 5 - Reading, the text of unit 4.',
  video: 'u04v13',
  prev: 's12-role-play', prevLabel: 'Part 4 - Role play',
  next: 's14-reading-comprehension', nextLabel: 'Part 5 - Reading, comprehension',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 4 · Part 5', type: 'study',
      title: 'Read: Why Numbers Matter in Diagnosis',
      instruction: '<b>Before you read:</b> is measuring better than guessing? Say your guess, '
        + 'then read and see. Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Modern car maintenance is about numbers. A good mechanic does not just '
        + 'look at a car; he measures it. He checks the tyre pressure with a gauge, '
        + 'and he measures the tread depth in millimetres.' + '</p>'
        + '<p>' + 'He checks the battery voltage with a meter, and the engine temperature '
        + 'with another gauge. Every reading has a correct level, called the '
        + 'tolerance. For example, a healthy battery reads between 12.4 and 12.7 '
        + 'volts.' + '</p>'
        + '<p>' + 'If the reading is lower than this, the battery is weak. Comparing is very '
        + 'important. The mechanic compares the four tyres to find the most worn one. '
        + 'He compares today’s readings with the last service to see what has '
        + 'changed.' + '</p>'
        + '<p>' + 'A tyre that is more worn than the others, or a battery that is lower than '
        + 'before, tells a story. The numbers help the mechanic find the fault '
        + 'quickly, before it becomes dangerous.' + '</p>'
        + '<p>' + 'In diagnosis, careful measuring is better than guessing.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>diagnosis</b> — finding out what is '
        + 'wrong</div><div><b>tolerance</b> — the correct level for a '
        + 'reading</div><div><b>within limits</b> — inside the correct '
        + 'range</div></div>',
      doneLabel: 'I have read the text',
      playable: ['Modern car maintenance is about numbers. A good mechanic does not just '
        + 'look at a car; he measures it. He checks the tyre pressure with a gauge, '
        + 'and he',
        'He checks the battery voltage with a meter, and the engine temperature '
        + 'with another gauge. Every reading has a correct level, called the '
        + 'tolerance. Fo',
        'If the reading is lower than this, the battery is weak. Comparing is very '
        + 'important. The mechanic compares the four tyres to find the most worn one. '
        + 'H',
        'A tyre that is more worn than the others, or a battery that is lower than '
        + 'before, tells a story. The numbers help the mechanic find the fault '
        + 'quickly,',
        'In diagnosis, careful measuring is better than guessing.']
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 4 · Part 5', type: 'quizset',
      title: 'Why Numbers Matter in Diagnosis',
      instruction: 'Why? Answer the multiple-choice questions. (0. is done.) Every answer is '
        + 'in the text above — look back at it rather than answering from what you '
        + 'already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does the mechanic measure tread depth in?',
          options: [
            { t: 'Volts', ok: false,
              why: 'Not this one. Volts is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'the mechanic measure tread depth in”.' },
            { t: 'Bar', ok: false,
              why: 'Not this one. Bar is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'the mechanic measure tread depth in”.' },
            { t: 'Degrees', ok: false,
              why: 'Not this one. Degrees is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic measure tread depth in”.' },
            { t: 'Millimetres', ok: true,
              why: 'Right — Millimetres. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' }
          ]
        },
        {
          q: '2. A healthy battery reads between which numbers?',
          options: [
            { t: '1 and 2', ok: false,
              why: 'Not this one. 1 and 2 is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “A '
        + 'healthy battery reads between which numbers”.' },
            { t: '6 and 7', ok: false,
              why: 'Not this one. 6 and 7 is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “A '
        + 'healthy battery reads between which numbers”.' },
            { t: '12.4 and 12.7 volts', ok: true,
              why: 'Right — 12.4 and 12.7 volts. Check it against the text or the card you met '
        + 'it on: this is stated, not inferred.' },
            { t: '100 and 200', ok: false,
              why: 'Not this one. 100 and 200 is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “A '
        + 'healthy battery reads between which numbers”.' }
          ]
        },
        {
          q: '3. Why does the mechanic compare the four tyres?',
          options: [
            { t: 'To find the most worn one', ok: true,
              why: 'Right — To find the most worn one. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'To clean them', ok: false,
              why: 'Not this one. To clean them is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “Why '
        + 'does the mechanic compare the four tyres”.' },
            { t: 'To sell them', ok: false,
              why: 'Not this one. To sell them is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “Why '
        + 'does the mechanic compare the four tyres”.' },
            { t: 'To paint them', ok: false,
              why: 'Not this one. To paint them is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “Why '
        + 'does the mechanic compare the four tyres”.' }
          ]
        }
      ]
    }
  ]
});
