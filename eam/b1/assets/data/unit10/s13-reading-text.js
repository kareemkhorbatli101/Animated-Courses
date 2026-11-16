/* Unit 10 §13 — Part 5 - Reading, the text.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s13', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 5 - Reading, the text', part: '5', section: '13',
          lesson: 'Part 5 - Reading, the text', title: 'Part 5 - Reading, the text' },
  objective: 'Work through Part 5 - Reading, the text of unit 10.',
  video: 'u10v13',
  prev: 's12-role-play', prevLabel: 'Part 4 - Role play',
  next: 's14-reading-comprehension', nextLabel: 'Part 5 - Reading, comprehension',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 10 · Part 5', type: 'study',
      title: 'Read: The Customer, the Manufacturer and the Team',
      instruction: '<b>Before you read:</b> which three groups does a dealership service '
        + 'department talk to? Say your guess, then read and see. Press a paragraph '
        + 'button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'A dealership service department stands between three groups: the customer, '
        + 'the manufacturer, and its own team. Its job is to keep all three talking. '
        + 'First, the customer.' + '</p>'
        + '<p>' + 'A good department listens to feedback and asks what the customer thinks. '
        + 'When a customer is satisfied, they recommend the garage to their family '
        + 'and friends, which is the best kind of advertising.' + '</p>'
        + '<p>' + 'So the department sends service reminders, offers honest advice, and '
        + 'treats every customer well. Second, the manufacturer. As an authorised '
        + 'dealer, the department receives bulletins and technical updates from the '
        + 'carmaker.' + '</p>'
        + '<p>' + 'A bulletin might say that a new software update is ready, or it might '
        + 'announce a campaign, such as a free safety check for a certain model. The '
        + 'department has to follow these and record its work. Third, the team.' + '</p>'
        + '<p>' + 'Cars change every year, so mechanics need training. When the manufacturer '
        + 'releases a new model, someone learns it first and then teaches the others. '
        + 'A manager brings all of this together at a team meeting.' + '</p>'
        + '<p>' + 'He reports what the customers said, what the manufacturer asked, and what '
        + 'the team has learned. A dealership is strong when information flows freely '
        + 'in every direction. Good communication is the engine of good service.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>satisfied</b> — happy and pleased</div><div><b>authorised '
        + 'dealer</b> — a garage chosen by the carmaker</div><div><b>flows</b> — '
        + 'moves freely</div></div>',
      doneLabel: 'I have read the text',
      playable: ['A dealership service department stands between three groups: the customer, '
        + 'the manufacturer, and its own team. Its job is to keep all three talking. '
        + 'F',
        'A good department listens to feedback and asks what the customer thinks. '
        + 'When a customer is satisfied, they recommend the garage to their family '
        + 'and f',
        'So the department sends service reminders, offers honest advice, and '
        + 'treats every customer well. Second, the manufacturer. As an authorised '
        + 'dealer, th',
        'A bulletin might say that a new software update is ready, or it might '
        + 'announce a campaign, such as a free safety check for a certain model. The '
        + 'depart',
        'Cars change every year, so mechanics need training. When the manufacturer '
        + 'releases a new model, someone learns it first and then teaches the others. '
        + 'A']
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 10 · Part 5', type: 'quizset',
      title: 'The Customer, the Manufacturer and the Team',
      instruction: 'Answer the multiple-choice questions. (0. is done.) Every answer is in the '
        + 'text above — look back at it rather than answering from what you already '
        + 'know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What do satisfied customers do?',
          options: [
            { t: 'Complain', ok: false,
              why: 'Not this one. Complain is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What do '
        + 'satisfied customers do”.' },
            { t: 'Recommend the garage to family and friends', ok: true,
              why: 'Right — Recommend the garage to family and friends. Check it against the '
        + 'text or the card you met it on: this is stated, not inferred.' },
            { t: 'Drive away', ok: false,
              why: 'Not this one. Drive away is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What do '
        + 'satisfied customers do”.' },
            { t: 'Pay less', ok: false,
              why: 'Not this one. Pay less is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What do '
        + 'satisfied customers do”.' }
          ]
        },
        {
          q: '2. What might a manufacturer bulletin announce?',
          options: [
            { t: 'A holiday', ok: false,
              why: 'Not this one. A holiday is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'might a manufacturer bulletin announce”.' },
            { t: 'A new colour', ok: false,
              why: 'Not this one. A new colour is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What might a manufacturer bulletin announce”.' },
            { t: 'A party', ok: false,
              why: 'Not this one. A party is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'might a manufacturer bulletin announce”.' },
            { t: 'A campaign such as a free safety check', ok: true,
              why: 'Right — A campaign such as a free safety check. Check it against the text '
        + 'or the card you met it on: this is stated, not inferred.' }
          ]
        },
        {
          q: '3. Why do mechanics need training?',
          options: [
            { t: 'Because cars change every year', ok: true,
              why: 'Right — Because cars change every year. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' },
            { t: 'Because it is fun', ok: false,
              why: 'Not this one. Because it is fun is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Why do mechanics need training”.' },
            { t: 'Because it is easy', ok: false,
              why: 'Not this one. Because it is easy is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Why do mechanics need training”.' },
            { t: 'For no reason', ok: false,
              why: 'Not this one. For no reason is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to “Why '
        + 'do mechanics need training”.' }
          ]
        }
      ]
    }
  ]
});
