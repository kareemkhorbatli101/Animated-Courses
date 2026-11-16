/* Unit 8 §13 — Part 5 - Reading, the text.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s13', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 5 - Reading, the text', part: '5', section: '13',
          lesson: 'Part 5 - Reading, the text', title: 'Part 5 - Reading, the text' },
  objective: 'Work through Part 5 - Reading, the text of unit 8.',
  video: 'u08v13',
  prev: 's12-role-play', prevLabel: 'Part 4 - Role play',
  next: 's14-reading-comprehension', nextLabel: 'Part 5 - Reading, comprehension',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 8 · Part 5', type: 'study',
      title: 'Read: Why Quality Matters',
      instruction: '<b>Before you read:</b> what does ‘quality’ mean at a service centre? Say '
        + 'your guess, then read and see. Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Quality is a promise that a car will leave the garage safe and correct. To '
        + 'keep this promise, a good service centre follows clear standards. Every '
        + 'car must pass a road test and a final quality check before it is handed '
        + 'over.' + '</p>'
        + '<p>' + 'During the check, the mechanic uses an inspection sheet, and every job '
        + 'must be ticked and signed off. If there is any defect, however small, the '
        + 'car mustn’t be handed over; it has to be fixed first.' + '</p>'
        + '<p>' + 'As an authorised dealer, a garage also has to follow the carmaker’s rules. '
        + 'This is very important for warranty work. A warranty is a promise from the '
        + 'carmaker that certain repairs are free for a period of time.' + '</p>'
        + '<p>' + 'If a car is under warranty and has a real defect, the customer doesn’t '
        + 'have to pay. But the garage has to use genuine parts and record '
        + 'everything, because the carmaker checks the work.' + '</p>'
        + '<p>' + 'Sometimes the carmaker finds a fault in many cars and orders a recall: the '
        + 'garage must contact the owners and fix the cars for free. Above all, a '
        + 'garage mustn’t ever hide a defect.' + '</p>'
        + '<p>' + 'Honest quality work is the reason customers trust an authorised dealer.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>standard</b> — an agreed correct '
        + 'level</div><div><b>valid</b> — still working; can be '
        + 'used</div><div><b>record</b> — to write down what was done</div></div>',
      doneLabel: 'I have read the text',
      playable: ['Quality is a promise that a car will leave the garage safe and correct. To '
        + 'keep this promise, a good service centre follows clear standards. Every '
        + 'car',
        'During the check, the mechanic uses an inspection sheet, and every job '
        + 'must be ticked and signed off. If there is any defect, however small, the '
        + 'car m',
        'As an authorised dealer, a garage also has to follow the carmaker’s rules. '
        + 'This is very important for warranty work. A warranty is a promise from the ',
        'If a car is under warranty and has a real defect, the customer doesn’t '
        + 'have to pay. But the garage has to use genuine parts and record '
        + 'everything, bec',
        'Sometimes the carmaker finds a fault in many cars and orders a recall: the '
        + 'garage must contact the owners and fix the cars for free. Above all, a '
        + 'gara']
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 8 · Part 5', type: 'quizset',
      title: 'Why Quality Matters',
      instruction: 'Answer the multiple-choice questions. (0. is done.) Every answer is in the '
        + 'text above — look back at it rather than answering from what you already '
        + 'know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What must every car pass before handover?',
          options: [
            { t: 'A wash', ok: false,
              why: 'Not this one. A wash is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What must '
        + 'every car pass before handover”.' },
            { t: 'A road test and a quality check', ok: true,
              why: 'Right — A road test and a quality check. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' },
            { t: 'A race', ok: false,
              why: 'Not this one. A race is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What must '
        + 'every car pass before handover”.' },
            { t: 'A phone call', ok: false,
              why: 'Not this one. A phone call is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What must every car pass before handover”.' }
          ]
        },
        {
          q: '2. Under warranty with a real defect, what does the customer NOT have to do?',
          options: [
            { t: 'Drive the car', ok: false,
              why: 'Not this one. Drive the car is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“Under warranty with a real defect, what does the customer NOT have to '
        + 'do”.' },
            { t: 'Wait a year', ok: false,
              why: 'Not this one. Wait a year is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“Under warranty with a real defect, what does the customer NOT have to '
        + 'do”.' },
            { t: 'Use cheap parts', ok: false,
              why: 'Not this one. Use cheap parts is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“Under warranty with a real defect, what does the customer NOT have to '
        + 'do”.' },
            { t: 'Pay', ok: true,
              why: 'Right — Pay. Check it against the text or the card you met it on: this is '
        + 'stated, not inferred.' }
          ]
        },
        {
          q: '3. What must a garage never do?',
          options: [
            { t: 'Hide a defect', ok: true,
              why: 'Right — Hide a defect. Check it against the text or the card you met it '
        + 'on: this is stated, not inferred.' },
            { t: 'Use genuine parts', ok: false,
              why: 'Not this one. Use genuine parts is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What must a garage never do”.' },
            { t: 'Do a road test', ok: false,
              why: 'Not this one. Do a road test is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What must a garage never do”.' },
            { t: 'Follow the rules', ok: false,
              why: 'Not this one. Follow the rules is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What must a garage never do”.' }
          ]
        }
      ]
    }
  ]
});
