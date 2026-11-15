/* Unit 2 §13 — Part 5 - Reading, the text.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s13', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 5 - Reading, the text', part: '5', section: '13',
          lesson: 'Part 5 - Reading, the text', title: 'Part 5 - Reading, the text' },
  objective: 'Work through Part 5 - Reading, the text of unit 2.',
  video: 'u02v13',
  prev: 's12-role-play', prevLabel: 'Part 4 - Role play',
  next: 's14-reading-comprehension', nextLabel: 'Part 5 - Reading, comprehension',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 2 · Part 5', type: 'study',
      title: 'Read: The Engine and Its Fluids',
      instruction: '<b>Before you read:</b> which fluid do you think is the most important for '
        + 'the engine? Say your guess, then read and see. Press a paragraph button to '
        + 'hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'An engine has many parts, and it needs several fluids to work well. The '
        + 'most important fluid is engine oil. Oil keeps the engine parts moving '
        + 'smoothly, so there must always be enough. The mechanic checks the oil with '
        + 'a dipstick.' + '</p>'
        + '<p>' + 'Coolant is also very important. It flows around the engine and through the '
        + 'radiator, and it stops the engine from getting too hot. In summer, or on a '
        + 'long, hot road, the coolant works hard.' + '</p>'
        + '<p>' + 'Brake fluid makes the brakes work, so it must be clean and at the right '
        + 'level. There is also washer fluid for the windscreen. At every service, a '
        + 'good mechanic checks all the levels.' + '</p>'
        + '<p>' + 'If there isn’t enough oil or coolant, the engine can be damaged, and the '
        + 'repair is expensive. So checking the fluids is a small job that saves a '
        + 'lot of money.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>level</b> — how much of a fluid there is</div><div><b>top '
        + 'up</b> — to add more of a fluid</div><div><b>damaged</b> — broken or '
        + 'harmed</div></div>',
      doneLabel: 'I have read the text',
      playable: ['An engine has many parts, and it needs several fluids to work well. The '
        + 'most important fluid is engine oil. Oil keeps the engine parts moving '
        + 'smoothly',
        'Coolant is also very important. It flows around the engine and through the '
        + 'radiator, and it stops the engine from getting too hot. In summer, or on a ',
        'Brake fluid makes the brakes work, so it must be clean and at the right '
        + 'level. There is also washer fluid for the windscreen. At every service, a '
        + 'good',
        'If there isn’t enough oil or coolant, the engine can be damaged, and the '
        + 'repair is expensive. So checking the fluids is a small job that saves a '
        + 'lot o']
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 2 · Part 5', type: 'quizset',
      title: 'The Engine and Its Fluids',
      instruction: 'Answer the multiple-choice questions. (0. is done.) Every answer is in the '
        + 'text above — look back at it rather than answering from what you already '
        + 'know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does coolant do?',
          options: [
            { t: 'Makes the brakes work', ok: false,
              why: 'Not this one. Makes the brakes work is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “What does coolant do”.' },
            { t: 'Cleans the windscreen', ok: false,
              why: 'Not this one. Cleans the windscreen is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “What does coolant do”.' },
            { t: 'Stops the engine getting too hot', ok: true,
              why: 'Right — Stops the engine getting too hot. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' },
            { t: 'Stores electricity', ok: false,
              why: 'Not this one. Stores electricity is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What does coolant do”.' }
          ]
        },
        {
          q: '2. How does the mechanic check the oil?',
          options: [
            { t: 'With a dipstick', ok: true,
              why: 'Right — With a dipstick. Check it against the text or the card you met it '
        + 'on: this is stated, not inferred.' },
            { t: 'With a computer', ok: false,
              why: 'Not this one. With a computer is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “How '
        + 'does the mechanic check the oil”.' },
            { t: 'With a spanner', ok: false,
              why: 'Not this one. With a spanner is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “How '
        + 'does the mechanic check the oil”.' },
            { t: 'With water', ok: false,
              why: 'Not this one. With water is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “How does '
        + 'the mechanic check the oil”.' }
          ]
        },
        {
          q: '3. Why is checking the fluids important?',
          options: [
            { t: 'It is slow and hard', ok: false,
              why: 'Not this one. It is slow and hard is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Why is checking the fluids important”.' },
            { t: 'It makes the car faster', ok: false,
              why: 'Not this one. It makes the car faster is a real thing in a workshop, but '
        + 'it is not what the question asks about, and nothing in the material links '
        + 'it to “Why is checking the fluids important”.' },
            { t: 'It is dangerous', ok: false,
              why: 'Not this one. It is dangerous is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “Why '
        + 'is checking the fluids important”.' },
            { t: 'It saves a lot of money', ok: true,
              why: 'Right — It saves a lot of money. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' }
          ]
        }
      ]
    }
  ]
});
