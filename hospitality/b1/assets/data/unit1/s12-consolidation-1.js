/* Unit 1 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can use this unit\'s words and both present '
  + 'tenses together, without being told which to choose.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 1 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'What is Mr. Nabil doing when Lina arrives?',
            model: 'He is reading the guest list.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where is the first guest from?',
            model: 'From Beirut.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things does Lina do for the first guest?',
            model: 'She greets him, finds his reservation / gives him his key card, and '
              + 'tells him about breakfast.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does Lina feel at the end of her shift?',
            model: 'Tired but happy / smiling.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What time does Lina arrive? (seven o\'clock)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 1 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Mr. Nabil is the duty [[1]].'
        + '<br>'
        + '2. Sami is the [[2]].'
        + '<br>'
        + '3. The first guest is a [[3]] from Beirut.'
        + '<br>'
        + '4. Lina gives the guest his [[4]] card.'
        + '<br>'
        + '5. Lina\'s [[5]] finishes at three o\'clock.'
        + '</div>',
      answers: {
        '1': ['manager'],
        '2': ['porter'],
        '3': ['businessman'],
        '4': ['key'],
        '5': ['shift']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>manager</b>',
        '2': '<b>porter</b>',
        '3': '<b>businessman</b>',
        '4': '<b>key</b>',
        '5': '<b>shift</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 1 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why is a warm welcome so important in hospitality?',
      stems: ['Why is a warm welcome so important in hospitality?',
      'How can a team help a guest feel comfortable?']
    }
  ]
});
