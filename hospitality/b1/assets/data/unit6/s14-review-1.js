/* Unit 6 §14 — Review and Can-Do.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Review and Can-Do', part: '10',
          section: '14', lesson: 'Review and Can-Do', title: 'Review and Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s recommendation '
  + 'language again without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 6 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A very famous building or place is a [[1]].'
        + '<br>'
        + '2. A traditional covered market is a [[2]].'
        + '<br>'
        + '3. Old broken buildings from long ago are [[3]].'
        + '</div>',
      answers: {
        '1': ['landmark'],
        '2': ['souq'],
        '3': ['ruins']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>landmark</b>',
        '2': '<b>souq</b>',
        '3': '<b>ruins</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 6 · P10 B',
      type: 'cloze',
      title: 'Grammar',
      instruction: 'Grammar. Complete with the comparative or superlative.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Aleppo is [[1]] (big) than Latakia.'
        + '<br>'
        + '2. Palmyra is [[2]] (famous) ruin in Syria.'
        + '<br>'
        + '3. A taxi is [[3]] (cheap) than a private car.'
        + '<br>'
        + '4. For history, this is [[4]] (good) place of all.'
        + '</div>',
      answers: {
        '1': ['bigger'],
        '2': ['the most famous'],
        '3': ['cheaper'],
        '4': ['the best']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>bigger</b>',
        '2': '<b>the most famous</b>',
        '3': '<b>cheaper</b>',
        '4': '<b>the best</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 6 · P10 C',
      type: 'discuss',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      questions: [{
            q: 'What is Krak des Chevaliers?',
            model: 'One of the biggest and best-kept castles in the world.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where does it stand?',
            model: 'On a high hill near the coast.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Is it closer or further than the Old City?',
            model: 'Further.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
