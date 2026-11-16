/* Unit 10 §21 — Part 10 - Can-Do and glossary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s21', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 10 - Can-Do and glossary', part: '10', section: '21',
          lesson: 'Part 10 - Can-Do and glossary', title: 'Part 10 - Can-Do and glossary' },
  objective: 'Work through Part 10 - Can-Do and glossary of unit 10.',
  video: 'u10v21',
  prev: 's20-spiral-review', prevLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 10 · Part 10', type: 'checklistlive',
      title: 'Can-Do',
      instruction: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
      fromPage: 'u10-s15', fromCard: 'c1',
      items: [
        { t: 'I can name the main customer, manufacturer, and team words.' },
        { t: 'I can use reported speech (said, told, asked) to report statements and '
        + 'questions.' },
        { t: 'I can understand customer feedback, a manufacturer bulletin, and a team '
        + 'meeting.' },
        { t: 'I can write team-meeting notes and report a conversation.' },
        { t: 'I can run a service-team meeting (Practitioner).' }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Reported speech',
        task: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
        parts: ['I can name the main customer, manufacturer, and team words. I can use '
        + 'reported speech (said, told, asked) to report statements and questions. I '
        + 'can understand customer feedback, a manufacturer bulletin, and a team '
        + 'meeting. I can write team-meeting notes and report a conversation. I can '
        + 'run a service-team meeting (Practitioner).', 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'I can name the main customer, manufacturer, and team words. I can use '
        + 'reported speech (said, told, asked) to report statements and questions. I '
        + 'can understand customer feedback, a manufacturer bulleti' },
                   { t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' },
                   { t: 'A reported question has no question mark and no “do/does”: “he asked when '
        + 'it would be ready”.' },
                   { t: 'The report says what the person meant, with no words put into their mouth '
        + 'that they did not say.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 10'], ref: '10B',
      bookRef: 'Unit 10 · Part 10', type: 'flashcards',
      title: 'Glossary',
      instruction: 'Unit 10 glossary (10 words)',
      scene: 'glossary-ten',
      items: [
        { id: 'g1', num: 1, label: 'customer relations', at: [10, 27] },
        { id: 'g2', num: 2, label: 'satisfaction', at: [30, 27] },
        { id: 'g3', num: 3, label: 'recommend', at: [50, 27] },
        { id: 'g4', num: 4, label: 'service reminder', at: [70, 27] },
        { id: 'g5', num: 5, label: 'manufacturer bulletin', at: [90, 27] },
        { id: 'g6', num: 6, label: 'campaign', at: [10, 77] },
        { id: 'g7', num: 7, label: 'feedback', at: [30, 77] },
        { id: 'g8', num: 8, label: 'technical update', at: [50, 77] },
        { id: 'g9', num: 9, label: 'training', at: [70, 77] },
        { id: 'g10', num: 10, label: 'report', at: [90, 77] }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Reported speech',
        task: 'Unit 10 glossary (10 words)',
        parts: ['The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' },
                   { t: 'A reported question has no question mark and no “do/does”: “he asked when '
        + 'it would be ready”.' },
                   { t: 'The report says what the person meant, with no words put into their mouth '
        + 'that they did not say.' }]
      }
    },
    {
      id: 'c3',
      type: 'study',
      ref: 'Unit 10 · End of the Course',
      title: 'End of the Course',
      instruction: 'You have reached the end of the book. Read this, or press the button to hear it.',
      visual: { spot: 'training', wide: true,
        caption: 'Ten units, and the English a service department uses every day.' },
      html: '<div class="closing">'
        + '<p>' + 'Congratulations — you have finished English for Auto Maintenance Personnel.' + '</p>'
        + '<p>' + 'You started with the parts of a car and the people in a service '
        + 'department. Step by step, you learned to talk about systems and fluids, '
        + 'tools and safety, measuring and diagnosis, the service process, servicing '
        + 'and advice, the service desk, quality and warranty, repairs and comebacks, '
        + 'and finally the customer, the manufacturer, and the team. You now have the '
        + 'English a mechanic and a service-department manager need every day in a '
        + 'modern dealership.' + '</p>'
        + '<p>' + 'Keep using it: read the bulletins, talk to your customers, report to your '
        + 'team, and never stop learning. A good mechanic, like a good garage, always '
        + 'improves. Well done, and good luck.' + '</p>'
        + '</div>',
      doneLabel: 'I have finished the course',
      playable: ['Congratulations — you have finished English for Auto Maintenance Personnel.',
        'You started with the parts of a car and the people in a service '
        + 'department. Step by step, you learned to talk about systems and fluids, '
        + 'tools and safety, measuring and diagnosis, the service process, servicing '
        + 'and advice, the service desk,',
        'Keep using it: read the bulletins, talk to your customers, report to your '
        + 'team, and never stop learning. A good mechanic, like a good garage, always '
        + 'improves. Well done, and good luck.']
    }
  ]
});
