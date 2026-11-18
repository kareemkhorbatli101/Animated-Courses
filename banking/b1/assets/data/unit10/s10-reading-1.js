/* Unit 10 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s10', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a meeting note for its decisions '
  + 'and its actions, find the reported speech that carries them, and say '
  + 'what is still unresolved.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 10 · 5A',
      visual: { spot: 'letter-of-credit' },
      type: 'shortanswer',
      title: 'Banking for business',
      instruction: 'Read the business page. Notice the reported speech.<br>Answer the questions.',
      items: [{ q: '1. What problem did the coffee importer describe?',
          accept: ['What problem did the coffee importer describe?'],
          keys: ['problem',
              'coffee'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What is a facility, and what problem does it solve?',
          accept: ['What is a facility, and what problem does it solve?'],
          keys: ['facility',
              'problem'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What is a letter of credit, and who does it reassure?',
          accept: ['What is a letter of credit, and who does it reassure?'],
          keys: ['letter',
              'credit'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. What three other services are mentioned?',
          accept: ['What three other services are mentioned?'],
          keys: ['three',
              'other'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '5. What do customers say the useful part is?',
          accept: ['What do customers say the useful part is?'],
          keys: ['customers',
              'useful'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 10 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the business page. Find three reported sentences.<br>Now '
  + 'report these sentences as the page would.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Reported sentence 1: [[1]]'
        + '<br>'
        + '2. Reported sentence 2: [[2]]'
        + '<br>'
        + '3. Reported sentence 3: [[3]]'
        + '<br>'
        + '4. “My supplier will not ship before payment.” → She said [[4]]'
        + '<br>'
        + '5. “We can help.” → We told her [[5]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '4': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '5': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '5C',
      bookRef: 'Unit 10 · 5C',
      type: 'shortanswer',
      title: 'The relationship manager',
      instruction: 'Read the short profile. What does a relationship manager actually do?',
      items: [{ q: '1. How many business customers does Priya have?',
          accept: ['How many business customers does Priya have?'],
          keys: ['business',
              'customers'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What did the builder tell her?',
          accept: ['What did the builder tell her?'],
          keys: ['builder'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What does Priya say her job is?',
          accept: ['What does Priya say her job is?'],
          keys: ['priya'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
