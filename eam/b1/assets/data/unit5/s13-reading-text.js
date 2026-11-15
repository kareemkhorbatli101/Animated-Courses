/* Unit 5 §13 — Part 5 - Reading, the text.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s13', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 5 - Reading, the text', part: '5', section: '13',
          lesson: 'Part 5 - Reading, the text', title: 'Part 5 - Reading, the text' },
  objective: 'Work through Part 5 - Reading, the text of unit 5.',
  video: 'u05v13',
  prev: 's12-role-play', prevLabel: 'Part 4 - Role play',
  next: 's14-reading-comprehension', nextLabel: 'Part 5 - Reading, comprehension',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 5 · Part 5', type: 'study',
      title: 'Read: From Design to Delivery',
      instruction: '<b>Before you read:</b> why does a car not just go straight to a mechanic? '
        + 'Say your guess, then read and see. Press a paragraph button to hear it '
        + 'read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'When a car comes to a service centre, it does not just go straight to a '
        + 'mechanic. It follows a clear process, and each step is done in order. '
        + 'First, the car is booked in at reception.' + '</p>'
        + '<p>' + 'The customer explains the problem, and a job card is made. The job card '
        + 'follows the car through every step. Next, the car is taken to the '
        + 'workshop.' + '</p>'
        + '<p>' + 'There, it is inspected, and the service is done: the oil is changed, the '
        + 'filters are replaced, and the brakes and tyres are checked. If there is a '
        + 'fault, it is diagnosed by a technician, often with a computer.' + '</p>'
        + '<p>' + 'When the work is finished, the car is road-tested to make sure it is safe. '
        + 'Then it is checked one more time by the quality team. This is called the '
        + 'quality check, and no car is handed over until it passes.' + '</p>'
        + '<p>' + 'Finally, the car is cleaned, and the customer is called. The car is handed '
        + 'over with the job card, so the customer can see exactly what was done. A '
        + 'clear process means that nothing is forgotten, and every car leaves safe.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>job card</b> — the paper that follows the car through every '
        + 'step</div><div><b>replace</b> — to put a new part in place of an old '
        + 'one</div><div><b>pass</b> — to be good enough; to succeed in a '
        + 'check</div></div>',
      doneLabel: 'I have read the text',
      playable: ['When a car comes to a service centre, it does not just go straight to a '
        + 'mechanic. It follows a clear process, and each step is done in order. '
        + 'First, t',
        'The customer explains the problem, and a job card is made. The job card '
        + 'follows the car through every step. Next, the car is taken to the '
        + 'workshop.',
        'There, it is inspected, and the service is done: the oil is changed, the '
        + 'filters are replaced, and the brakes and tyres are checked. If there is a '
        + 'fau',
        'When the work is finished, the car is road-tested to make sure it is safe. '
        + 'Then it is checked one more time by the quality team. This is called the '
        + 'qu',
        'Finally, the car is cleaned, and the customer is called. The car is handed '
        + 'over with the job card, so the customer can see exactly what was done. A '
        + 'cl']
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 5 · Part 5', type: 'quizset',
      title: 'From Design to Delivery',
      instruction: 'Answer the multiple-choice questions. (0. is done.) Every answer is in the '
        + 'text above — look back at it rather than answering from what you already '
        + 'know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What is made at reception?',
          options: [
            { t: 'A new tyre', ok: false,
              why: 'Not this one. A new tyre is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'made at reception”.' },
            { t: 'A key', ok: false,
              why: 'Not this one. A key is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is made '
        + 'at reception”.' },
            { t: 'A job card', ok: true,
              why: 'Right — A job card. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' },
            { t: 'A cup of coffee', ok: false,
              why: 'Not this one. A cup of coffee is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is made at reception”.' }
          ]
        },
        {
          q: '2. What is done one more time before handover?',
          options: [
            { t: 'The radio is played', ok: false,
              why: 'Not this one. The radio is played is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What is done one more time before handover”.' },
            { t: 'The quality is checked by the quality team', ok: true,
              why: 'Right — The quality is checked by the quality team. Check it against the '
        + 'text or the card you met it on: this is stated, not inferred.' },
            { t: 'The paint is done', ok: false,
              why: 'Not this one. The paint is done is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What is done one more time before handover”.' },
            { t: 'The seats are changed', ok: false,
              why: 'Not this one. The seats are changed is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “What is done one more time before handover”.' }
          ]
        },
        {
          q: '3. Why is a clear process good?',
          options: [
            { t: 'It is slow', ok: false,
              why: 'Not this one. It is slow is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “Why is a '
        + 'clear process good”.' },
            { t: 'It looks nice', ok: false,
              why: 'Not this one. It looks nice is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “Why '
        + 'is a clear process good”.' },
            { t: 'It is cheap', ok: false,
              why: 'Not this one. It is cheap is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “Why '
        + 'is a clear process good”.' },
            { t: 'Nothing is forgotten and every car leaves safe', ok: true,
              why: 'Right — Nothing is forgotten and every car leaves safe. Check it against '
        + 'the text or the card you met it on: this is stated, not inferred.' }
          ]
        }
      ]
    }
  ]
});
