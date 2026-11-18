/* Unit 8 §14 — Review and Can-Do.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Review and Can-Do', part: '10',
          section: '14', lesson: 'Review and Can-Do', title: 'Review and Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s request language again '
  + 'without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 8 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A guest in a wheelchair needs a [[1]] at the entrance.'
        + '<br>'
        + '2. A family with a baby may need a [[2]].'
        + '<br>'
        + '3. A guest with an allergy needs [[3]]-safe food.'
        + '</div>',
      answers: {
        '1': ['ramp'],
        '2': ['cot'],
        '3': ['allergy']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>ramp</b>',
        '2': '<b>cot</b>',
        '3': '<b>allergy</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 8 · P10 B',
      type: 'cloze',
      title: 'Grammar',
      instruction: 'Grammar. Complete with will (\'ll) or going to.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. You\'re cold? I [[1]] (bring) you a blanket now.'
        + '<br>'
        + '2. Next spring, the hotel [[2]] (open) a new spa — it\'s planned.'
        + '<br>'
        + '3. Don\'t worry, I [[3]] (take) care of it right away.'
        + '<br>'
        + '4. We [[4]] (build) a ramp next month; the work is arranged.'
        + '</div>',
      answers: {
        '1': ['\'ll bring'],
        '2': ['is going to open'],
        '3': ['\'ll take'],
        '4': ['\'re going to build']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>\'ll bring</b>',
        '2': '<b>is going to open</b>',
        '3': '<b>\'ll take</b>',
        '4': '<b>\'re going to build</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 8 · P10 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'An accessible room is a room designed for guests with special needs. '
              + 'It has a wide door for a wheelchair, a low bed, and a bathroom with '
              + 'handrails and a seat in the shower. Many hotels keep one or two '
              + 'accessible rooms ready at all times, so every guest is welcome.',
            say: 'An accessible room is a room designed for guests with special needs. '
              + 'It has a wide door for a wheelchair, a low bed, and a bathroom with '
              + 'handrails and a seat in the shower. Many hotels keep one or two '
              + 'accessible rooms ready at all times, so every guest is welcome.',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      questions: [{
            q: 'What is an accessible room?',
            model: 'A room designed for guests with special needs.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Name two features of the bathroom.',
            model: '(any two) handrails, a seat in the shower, a wide door, a low bed.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why do hotels keep accessible rooms ready?',
            model: 'So that every guest is welcome at all times.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
