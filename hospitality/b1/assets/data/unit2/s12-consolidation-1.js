/* Unit 2 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can combine this unit\'s place words and '
  + 'structures without being told which to use.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 2 · P8',
      type: 'study',
      title: 'Consolidation',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Consolidation',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'It is Lina\'s second week, and today she gives her first tour. A '
            + 'family from Aleppo arrives: a mother, a father, and two children. '
            + 'They are tired, but they are excited to see the hotel. Lina smiles '
            + 'and says, “Welcome. Let me show you around.”',
          say: 'It is Lina\'s second week, and today she gives her first tour. A '
            + 'family from Aleppo arrives: a mother, a father, and two children. '
            + 'They are tired, but they are excited to see the hotel. Lina smiles '
            + 'and says, “Welcome. Let me show you around.”',
          role: 'course'
        },
        {
          h: '“On the ground floor, there is the restaurant and a café,” says Lina. '
            + '“Breakfast is from seven to ten. Behind the hotel, there is a garden, '
            + 'and the children can play there.” The children are happy. “Is there a '
            + 'swimming pool?” asks the boy. “Yes,” says Lina. “There is a pool on '
            + 'the first floor, next to the gym. There are a lot of towels there, so '
            + 'you don\'t need to bring one.”',
          say: '“On the ground floor, there is the restaurant and a café,” says Lina. '
            + '“Breakfast is from seven to ten. Behind the hotel, there is a garden, '
            + 'and the children can play there.” The children are happy. “Is there a '
            + 'swimming pool?” asks the boy. “Yes,” says Lina. “There is a pool on '
            + 'the first floor, next to the gym. There are a lot of towels there, so '
            + 'you don\'t need to bring one.”',
          role: 'course'
        },
        {
          h: 'Lina takes the family to the lift. “Your rooms are on the second '
            + 'floor,” she says. “There are two rooms, next to each other, with a '
            + 'view of the city.” The family is very happy. “Thank you,” says the '
            + 'mother. “You know every corner of the hotel!” Lina smiles. Mr. '
            + 'Nabil\'s words are true: a good receptionist really does know the '
            + 'answer to every question.',
          say: 'Lina takes the family to the lift. “Your rooms are on the second '
            + 'floor,” she says. “There are two rooms, next to each other, with a '
            + 'view of the city.” The family is very happy. “Thank you,” says the '
            + 'mother. “You know every corner of the hotel!” Lina smiles. Mr. '
            + 'Nabil\'s words are true: a good receptionist really does know the '
            + 'answer to every question.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 2 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'How do the family feel?',
            model: 'Tired but excited / happy.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where can the children play?',
            model: 'In the garden, behind the hotel.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where is the swimming pool?',
            model: 'On the first floor, next to the gym.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where are the family\'s rooms, and what is the view?',
            model: 'On the second floor, next to each other, with a view of the city.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Who arrives at the hotel? (a family from Aleppo)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 2 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Breakfast is from seven to [[1]].'
        + '<br>'
        + '2. Behind the hotel, there is a [[2]].'
        + '<br>'
        + '3. The pool is next to the [[3]].'
        + '<br>'
        + '4. The family\'s rooms are on the [[4]] floor.'
        + '<br>'
        + '5. The rooms have a [[5]] of the city.'
        + '</div>',
      answers: {
        '1': ['ten'],
        '2': ['garden'],
        '3': ['gym'],
        '4': ['second'],
        '5': ['view']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>ten</b>',
        '2': '<b>garden</b>',
        '3': '<b>gym</b>',
        '4': '<b>second</b>',
        '5': '<b>view</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 2 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why is it good for a receptionist to know every corner of the hotel?',
      stems: ['Why is it good for a receptionist to know every corner of the hotel?',
      'What facilities are most important for a family with children? Why?']
    }
  ]
});
