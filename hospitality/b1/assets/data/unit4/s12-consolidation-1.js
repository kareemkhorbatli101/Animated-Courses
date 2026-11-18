/* Unit 4 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can run a check-in using this unit\'s '
  + 'vocabulary and future forms together.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 4 · P8',
      type: 'study',
      title: 'Consolidation',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Consolidation',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'It is two o\'clock, and a taxi stops at the door of the Orient Rose '
            + 'Hotel. A man gets out with two heavy bags. He looks tired after a '
            + 'long journey from Aleppo. Sami the porter opens the door and carries '
            + 'the bags, and the guest walks to the desk. Lina smiles. “Good '
            + 'afternoon, and welcome,” she says.',
          say: 'It is two o\'clock, and a taxi stops at the door of the Orient Rose '
            + 'Hotel. A man gets out with two heavy bags. He looks tired after a '
            + 'long journey from Aleppo. Sami the porter opens the door and carries '
            + 'the bags, and the guest walks to the desk. Lina smiles. “Good '
            + 'afternoon, and welcome,” she says.',
          role: 'course'
        },
        {
          h: '“Good afternoon,” says the guest. “I have a reservation. My name is '
            + 'Omar Deeb.” “Welcome, Mr. Deeb. I\'m checking you in now,” says Lina. '
            + '“Could I see your passport, please?” The guest gives his passport, '
            + 'and Lina asks him to sign the card. Then she gives him the key card. '
            + '“Your room is 305, on the third floor. Breakfast is from seven to '
            + 'ten, in the restaurant. The wifi password is \'welcome\'.”',
          say: '“Good afternoon,” says the guest. “I have a reservation. My name is '
            + 'Omar Deeb.” “Welcome, Mr. Deeb. I\'m checking you in now,” says Lina. '
            + '“Could I see your passport, please?” The guest gives his passport, '
            + 'and Lina asks him to sign the card. Then she gives him the key card. '
            + '“Your room is 305, on the third floor. Breakfast is from seven to '
            + 'ten, in the restaurant. The wifi password is \'welcome\'.”',
          role: 'course'
        },
        {
          h: '“Thank you,” says Mr. Deeb. “I have an early meeting tomorrow.” '
            + '“Would you like a wake-up call?” asks Lina. “Yes, at six o\'clock, '
            + 'please.” “Of course. I\'m arranging a wake-up call for six, and the '
            + 'porter is taking your bags up now. Enjoy your stay, Mr. Deeb.” The '
            + 'guest smiles for the first time. “Thank you. You\'ve made a tiring '
            + 'day much easier.” Lina feels proud. This is what a warm welcome '
            + 'means.',
          say: '“Thank you,” says Mr. Deeb. “I have an early meeting tomorrow.” '
            + '“Would you like a wake-up call?” asks Lina. “Yes, at six o\'clock, '
            + 'please.” “Of course. I\'m arranging a wake-up call for six, and the '
            + 'porter is taking your bags up now. Enjoy your stay, Mr. Deeb.” The '
            + 'guest smiles for the first time. “Thank you. You\'ve made a tiring '
            + 'day much easier.” Lina feels proud. This is what a warm welcome '
            + 'means.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 4 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'Who carries the guest\'s bags?',
            model: 'Aleppo.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the guest\'s name and room number?',
            model: 'Sami the porter.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What arrangement does Lina make for the guest?',
            model: 'Omar Deeb, room 305.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does the guest feel at the end?',
            model: 'A wake-up call for six o\'clock.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Where has the guest travelled from? (Aleppo)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 4 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest is tired after a long [[1]].'
        + '<br>'
        + '2. Lina asks to see the guest\'s [[2]].'
        + '<br>'
        + '3. The room is on the [[3]] floor.'
        + '<br>'
        + '4. Lina arranges a [[4]] call for six o\'clock.'
        + '<br>'
        + '5. The porter is taking the guest\'s [[5]] up.'
        + '</div>',
      answers: {
        '1': ['journey'],
        '2': ['passport'],
        '3': ['third'],
        '4': ['wake-up'],
        '5': ['bags']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>journey</b>',
        '2': '<b>passport</b>',
        '3': '<b>third</b>',
        '4': '<b>wake-up</b>',
        '5': '<b>bags</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 4 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why does a warm check-in matter so much for a tired guest?',
      stems: ['Why does a warm check-in matter so much for a tired guest?',
      'What small things can a receptionist do to make a check-in feel caring?']
    }
  ]
});
