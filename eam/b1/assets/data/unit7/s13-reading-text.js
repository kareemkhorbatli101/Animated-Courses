/* Unit 7 §13 — Part 5 - Reading, the text.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s13', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 5 - Reading, the text', part: '5', section: '13',
          lesson: 'Part 5 - Reading, the text', title: 'Part 5 - Reading, the text' },
  objective: 'Work through Part 5 - Reading, the text of unit 7.',
  video: 'u07v13',
  prev: 's12-role-play', prevLabel: 'Part 4 - Role play',
  next: 's14-reading-comprehension', nextLabel: 'Part 5 - Reading, comprehension',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 7 · Part 5', type: 'study',
      title: 'Read: From Order to Delivery',
      instruction: '<b>Before you read:</b> why is the service desk important for the '
        + 'customer? Say your guess, then read and see. Press a paragraph button to '
        + 'hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'The service desk is the first place a customer sees, and the last. A good '
        + 'service advisor plans everything clearly.' + '</p>'
        + '<p>' + 'When a customer calls, the advisor makes a booking and gives an '
        + 'appointment: “I’ll book you in for Tuesday at nine.” Before any work '
        + 'starts, the advisor gives an estimate, so the customer knows the price.' + '</p>'
        + '<p>' + 'This is very important: a customer should never be surprised by the final '
        + 'bill. If the customer approves, the advisor orders any parts.' + '</p>'
        + '<p>' + 'She might say, “We’re going to order the pads today, and they’re going to '
        + 'arrive tomorrow.” Sometimes a job takes more than a day. Then the garage '
        + 'may offer a courtesy car, so the customer can still drive.' + '</p>'
        + '<p>' + 'The advisor calls the customer with the ready time: “Your car will be '
        + 'ready at four.” At handover, the customer pays the invoice and collects '
        + 'the car, with the job card, so they can see exactly what was done.' + '</p>'
        + '<p>' + 'A good service desk is not just about cars; it is about clear '
        + 'communication. When the customer always knows what is happening and what '
        + 'it will cost, they trust the garage and come back.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>approve</b> — to agree to the work and the '
        + 'price</div><div><b>ready time</b> — when the car will be '
        + 'finished</div><div><b>communication</b> — sharing information '
        + 'clearly</div></div>',
      doneLabel: 'I have read the text',
      playable: ['The service desk is the first place a customer sees, and the last. A good '
        + 'service advisor plans everything clearly.',
        'When a customer calls, the advisor makes a booking and gives an '
        + 'appointment: “I’ll book you in for Tuesday at nine.” Before any work '
        + 'starts, the advis',
        'This is very important: a customer should never be surprised by the final '
        + 'bill. If the customer approves, the advisor orders any parts.',
        'She might say, “We’re going to order the pads today, and they’re going to '
        + 'arrive tomorrow.” Sometimes a job takes more than a day. Then the garage '
        + 'may',
        'The advisor calls the customer with the ready time: “Your car will be '
        + 'ready at four.” At handover, the customer pays the invoice and collects '
        + 'the car,']
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 7 · Part 5', type: 'quizset',
      title: 'From Order to Delivery',
      instruction: 'Answer the multiple-choice questions. (0. is done.) Every answer is in the '
        + 'text above — look back at it rather than answering from what you already '
        + 'know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does the advisor give before any work starts?',
          options: [
            { t: 'A courtesy car', ok: false,
              why: 'Not this one. A courtesy car is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does the advisor give before any work starts”.' },
            { t: 'A deposit', ok: false,
              why: 'Not this one. A deposit is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the advisor give before any work starts”.' },
            { t: 'An estimate', ok: true,
              why: 'Right — An estimate. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' },
            { t: 'A key', ok: false,
              why: 'Not this one. A key is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'the advisor give before any work starts”.' }
          ]
        },
        {
          q: '2. Why should a customer never be surprised by the final bill?',
          options: [
            { t: 'Because they know the price from the estimate', ok: true,
              why: 'Right — Because they know the price from the estimate. Check it against '
        + 'the text or the card you met it on: this is stated, not inferred.' },
            { t: 'Because it is free', ok: false,
              why: 'Not this one. Because it is free is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Why should a customer never be surprised by the final bill”.' },
            { t: 'Because it is small', ok: false,
              why: 'Not this one. Because it is small is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Why should a customer never be surprised by the final bill”.' },
            { t: 'Because it is a gift', ok: false,
              why: 'Not this one. Because it is a gift is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Why should a customer never be surprised by the final bill”.' }
          ]
        },
        {
          q: '3. What does a good service desk depend on?',
          options: [
            { t: 'Fast cars', ok: false,
              why: 'Not this one. Fast cars is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does a good service desk depend on”.' },
            { t: 'Clear communication', ok: true,
              why: 'Right — Clear communication. Check it against the text or the card you met '
        + 'it on: this is stated, not inferred.' },
            { t: 'Cheap parts', ok: false,
              why: 'Not this one. Cheap parts is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does a good service desk depend on”.' },
            { t: 'Big offices', ok: false,
              why: 'Not this one. Big offices is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does a good service desk depend on”.' }
          ]
        }
      ]
    }
  ]
});
