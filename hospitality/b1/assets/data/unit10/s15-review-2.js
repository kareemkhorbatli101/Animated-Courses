/* Unit 10 §15 — Review and Can-Do  (Course Review) (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s15', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Review and Can-Do (Course Review) (2)', part: '10',
          section: '15', lesson: 'Review and Can-Do (Course Review) (2)', title: 'Review and Can-Do (Course Review) (2)' },
  objective: 'By the end of Part 10 you can use the language of the whole course '
  + 'again, and tick honestly what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 10 · P10 D',
      type: 'discuss',
      title: 'Listening',
      instruction: 'Listening. Listen and answer. (Teacher reads.)',
      questions: [{
            q: 'What is the total?',
            model: '258 dollars.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the receptionist give after payment?',
            model: 'A receipt.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does she say at the end?',
            model: '\'We hope to see you again very soon. Have a safe journey!\'',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'E',
      bookRef: 'Unit 10 · P10 E',
      type: 'report',
      title: 'Speaking',
      instruction: 'Speaking. Work in pairs. Check a guest out from start to finish: '
  + 'bill, payment, feedback, and a warm farewell.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'F',
      bookRef: 'Unit 10 · P10 F',
      type: 'cloze',
      title: 'Writing',
      instruction: 'Writing. Write two sentences: report one thing a guest said (reported '
  + 'speech), and write one warm farewell sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. [[1]]'
        + '<br>'
        + '2. [[2]]'
        + '</div>',
      answers: {
        '1': [],
        '2': []
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': 'The book leaves this one to you.',
        '2': 'The book leaves this one to you.'
      }
    }
  ]
});
