/* Unit 3 §13 — Part 5 - Reading, the text.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s13', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 5 - Reading, the text', part: '5', section: '13',
          lesson: 'Part 5 - Reading, the text', title: 'Part 5 - Reading, the text' },
  objective: 'Work through Part 5 - Reading, the text of unit 3.',
  video: 'u03v13',
  prev: 's12-role-play', prevLabel: 'Part 4 - Role play',
  next: 's14-reading-comprehension', nextLabel: 'Part 5 - Reading, comprehension',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 3 · Part 5', type: 'study',
      title: 'Read: Safe Working in the Bay',
      instruction: '<b>Before you read:</b> what is the most important safety rule in a '
        + 'workshop? Say your guess, then read and see. Press a paragraph button to '
        + 'hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'A car workshop can be a dangerous place, but good rules keep everyone '
        + 'safe. The most important rule is simple: always wear your safety gear. Put '
        + 'on your safety glasses, gloves, and overalls before you start.' + '</p>'
        + '<p>' + 'Next, keep your area clean and tidy. Oil or a tool on the floor can cause '
        + 'a fall, so put things away. When you lift a car, be very careful. First, '
        + 'chock the wheels so the car cannot roll. Then raise the car slowly with '
        + 'the jack.' + '</p>'
        + '<p>' + 'Always put axle stands under the car, and never work under a car on a jack '
        + 'alone. Before you work on the electrics, disconnect the battery. If you '
        + 'smell fuel, stop at once and tell the manager.' + '</p>'
        + '<p>' + 'These rules are not difficult, but they save lives. A careful mechanic is '
        + 'a safe mechanic, and a safe workshop is a good workshop.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>chock</b> — to put a block behind a wheel so it can’t '
        + 'roll</div><div><b>disconnect</b> — to take a part or wire off, to stop the '
        + 'power</div><div><b>safety gear</b> — the things you wear to protect '
        + 'yourself</div></div>',
      doneLabel: 'I have read the text',
      playable: ['A car workshop can be a dangerous place, but good rules keep everyone '
        + 'safe. The most important rule is simple: always wear your safety gear. Put '
        + 'on yo',
        'Next, keep your area clean and tidy. Oil or a tool on the floor can cause '
        + 'a fall, so put things away. When you lift a car, be very careful. First, '
        + 'cho',
        'Always put axle stands under the car, and never work under a car on a jack '
        + 'alone. Before you work on the electrics, disconnect the battery. If you '
        + 'sme',
        'These rules are not difficult, but they save lives. A careful mechanic is '
        + 'a safe mechanic, and a safe workshop is a good workshop.']
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 3 · Part 5', type: 'quizset',
      title: 'Safe Working in the Bay',
      instruction: 'Answer the multiple-choice questions. (0. is done.) Every answer is in the '
        + 'text above — look back at it rather than answering from what you already '
        + 'know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Why must you keep the floor clean?',
          options: [
            { t: 'To look nice', ok: false,
              why: 'Not this one. To look nice is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “Why '
        + 'must you keep the floor clean”.' },
            { t: 'To save money', ok: false,
              why: 'Not this one. To save money is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “Why '
        + 'must you keep the floor clean”.' },
            { t: 'Because oil or a tool can cause a fall', ok: true,
              why: 'Right — Because oil or a tool can cause a fall. Check it against the text '
        + 'or the card you met it on: this is stated, not inferred.' },
            { t: 'Because it is the law', ok: false,
              why: 'Not this one. Because it is the law is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Why must you keep the floor clean”.' }
          ]
        },
        {
          q: '2. What must you do before you raise the car?',
          options: [
            { t: 'Call the manager', ok: false,
              why: 'Not this one. Call the manager is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What must you do before you raise the car”.' },
            { t: 'Chock the wheels', ok: true,
              why: 'Right — Chock the wheels. Check it against the text or the card you met it '
        + 'on: this is stated, not inferred.' },
            { t: 'Start the engine', ok: false,
              why: 'Not this one. Start the engine is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What must you do before you raise the car”.' },
            { t: 'Open the bonnet', ok: false,
              why: 'Not this one. Open the bonnet is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What must you do before you raise the car”.' }
          ]
        },
        {
          q: '3. What must you do before working on the electrics?',
          options: [
            { t: 'Disconnect the battery', ok: true,
              why: 'Right — Disconnect the battery. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' },
            { t: 'Add oil', ok: false,
              why: 'Not this one. Add oil is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must you do before working on the electrics”.' },
            { t: 'Wash the car', ok: false,
              why: 'Not this one. Wash the car is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What must you do before working on the electrics”.' },
            { t: 'Open the boot', ok: false,
              why: 'Not this one. Open the boot is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What must you do before working on the electrics”.' }
          ]
        }
      ]
    }
  ]
});
