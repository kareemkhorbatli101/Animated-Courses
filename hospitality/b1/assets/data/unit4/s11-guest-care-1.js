/* Unit 4 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can make a tired guest feel welcome while '
  + 'the paperwork is done.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 4 · P7',
      type: 'study',
      title: 'Guest-care and service',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Guest-care and service',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Not every guest has a reservation. Sometimes a guest simply walks in '
            + 'and asks for a room. This is a “walk-in.” A good receptionist '
            + 'welcomes a walk-in guest warmly, checks availability, and, if there '
            + 'is a room, checks them in like any other guest. Other times, a guest '
            + 'arrives early, before the room is ready. The receptionist cannot give '
            + 'the room yet, but she can still care for the guest: she keeps the '
            + 'luggage safely, offers a seat or a coffee in the café, and says '
            + 'clearly when the room is going to be ready. In both cases, the golden '
            + 'rule is the same: never make the guest feel like a problem. Every '
            + 'guest — with or without a reservation, early or on time — deserves a '
            + 'warm welcome.',
          say: 'Not every guest has a reservation. Sometimes a guest simply walks in '
            + 'and asks for a room. This is a “walk-in.” A good receptionist '
            + 'welcomes a walk-in guest warmly, checks availability, and, if there '
            + 'is a room, checks them in like any other guest. Other times, a guest '
            + 'arrives early, before the room is ready. The receptionist cannot give '
            + 'the room yet, but she can still care for the guest: she keeps the '
            + 'luggage safely, offers a seat or a coffee in the café, and says '
            + 'clearly when the room is going to be ready. In both cases, the golden '
            + 'rule is the same: never make the guest feel like a problem. Every '
            + 'guest — with or without a reservation, early or on time — deserves a '
            + 'warm welcome.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 4 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'What is a \'walk-in\' guest?',
            model: 'A guest who arrives with no reservation.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does a good receptionist do for a walk-in guest?',
            model: 'Welcomes them warmly, checks availability, and checks them in if '
              + 'there is a room.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'When a guest arrives early, what can the receptionist do while they '
              + 'wait? (give two things)',
            model: '(any two) keeps the luggage, offers a seat / coffee, says when the '
              + 'room is going to be ready.',
            minWords: 6,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the golden rule?',
            model: 'Never make the guest feel like a problem.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 4 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A guest arrives early. Write the missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Guest: I\'m very early, I know. Is my room [[1]]?'
        + '<br>'
        + '2. Lina: I\'m sorry, it isn\'t ready yet. It\'s going to be ready at '
            + '[[2]] o\'clock.'
        + '<br>'
        + '3. Lina: But I can keep your [[3]], and you\'re welcome to have a '
            + 'coffee in the café.'
        + '</div>',
      answers: {
        '1': ['ready'],
        '2': ['two'],
        '3': ['luggage / bags']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>ready</b>',
        '2': '<b>two</b>',
        '3': '<b>luggage / bags</b>'
      }
    }
  ]
});
