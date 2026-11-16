/* Unit 6 §13 — Part 5 - Reading, the text.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s13', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 5 - Reading, the text', part: '5', section: '13',
          lesson: 'Part 5 - Reading, the text', title: 'Part 5 - Reading, the text' },
  objective: 'Work through Part 5 - Reading, the text of unit 6.',
  video: 'u06v13',
  prev: 's12-role-play', prevLabel: 'Part 4 - Role play',
  next: 's14-reading-comprehension', nextLabel: 'Part 5 - Reading, comprehension',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 6 · Part 5', type: 'study',
      title: 'Read: Routine Maintenance and Honest Advice',
      instruction: '<b>Before you read:</b> is it more important for a mechanic to be fast or '
        + 'to be honest? Say your guess, then read and see. Press a paragraph button '
        + 'to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Routine maintenance is the regular care that keeps a car safe and working '
        + 'well. It follows a service schedule, which is based on the car’s mileage '
        + 'or age.' + '</p>'
        + '<p>' + 'At a small service, the oil and oil filter are changed, and the brakes and '
        + 'tyres are checked.' + '</p>'
        + '<p>' + 'At a full service, more is done: the air filter and spark plugs are '
        + 'replaced, the tyres are rotated so they wear evenly, and the coolant is '
        + 'checked.' + '</p>'
        + '<p>' + 'A good mechanic does not just do the jobs on the list; he also looks at '
        + 'the whole car and gives advice. He might say, “Your brake pads are worn.' + '</p>'
        + '<p>' + 'You should change them soon.” Or he might offer, “Shall I replace the air '
        + 'filter today?” But the most important thing is honesty. A good mechanic '
        + 'never sells work that the car does not need. If a part is fine, he says '
        + 'so.' + '</p>'
        + '<p>' + 'Customers know when they are told the truth. Honest advice costs nothing, '
        + 'but it builds trust, and trust brings the customer back for many years. In '
        + 'the end, honesty is the best maintenance plan of all.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>routine</b> — regular, done again and '
        + 'again</div><div><b>advise</b> — to tell someone what you think they should '
        + 'do</div><div><b>trust</b> — to believe someone is honest and '
        + 'good</div></div>',
      doneLabel: 'I have read the text',
      playable: ['Routine maintenance is the regular care that keeps a car safe and working '
        + 'well. It follows a service schedule, which is based on the car’s mileage '
        + 'or',
        'At a small service, the oil and oil filter are changed, and the brakes and '
        + 'tyres are checked.',
        'At a full service, more is done: the air filter and spark plugs are '
        + 'replaced, the tyres are rotated so they wear evenly, and the coolant is '
        + 'checked.',
        'A good mechanic does not just do the jobs on the list; he also looks at '
        + 'the whole car and gives advice. He might say, “Your brake pads are worn.',
        'You should change them soon.” Or he might offer, “Shall I replace the air '
        + 'filter today?” But the most important thing is honesty. A good mechanic '
        + 'neve']
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 6 · Part 5', type: 'quizset',
      title: 'Routine Maintenance and Honest Advice',
      instruction: 'Answer the multiple-choice questions. (0. is done.) Every answer is in the '
        + 'text above — look back at it rather than answering from what you already '
        + 'know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What is the service schedule based on?',
          options: [
            { t: 'The colour', ok: false,
              why: 'Not this one. The colour is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'the service schedule based on”.' },
            { t: 'The price', ok: false,
              why: 'Not this one. The price is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'the service schedule based on”.' },
            { t: 'The driver’s age', ok: false,
              why: 'Not this one. The driver’s age is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What is the service schedule based on”.' },
            { t: 'The car’s mileage or age', ok: true,
              why: 'Right — The car’s mileage or age. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' }
          ]
        },
        {
          q: '2. What does a good mechanic never do?',
          options: [
            { t: 'Sell work the car does not need', ok: true,
              why: 'Right — Sell work the car does not need. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' },
            { t: 'Change the oil', ok: false,
              why: 'Not this one. Change the oil is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does a good mechanic never do”.' },
            { t: 'Check the brakes', ok: false,
              why: 'Not this one. Check the brakes is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What does a good mechanic never do”.' },
            { t: 'Give advice', ok: false,
              why: 'Not this one. Give advice is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does a good mechanic never do”.' }
          ]
        },
        {
          q: '3. What does honest advice build?',
          options: [
            { t: 'Noise', ok: false,
              why: 'Not this one. Noise is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'honest advice build”.' },
            { t: 'Trust', ok: true,
              why: 'Right — Trust. Check it against the text or the card you met it on: this '
        + 'is stated, not inferred.' },
            { t: 'Dust', ok: false,
              why: 'Not this one. Dust is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'honest advice build”.' },
            { t: 'Speed', ok: false,
              why: 'Not this one. Speed is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'honest advice build”.' }
          ]
        }
      ]
    }
  ]
});
