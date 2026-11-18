/* Unit 4 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read a front-desk procedure and say what '
  + 'must happen in what order.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 4 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What three words describe a perfect check-in?',
            model: 'To feel welcome and to rest.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why does the receptionist keep the registration part short?',
            model: 'Warm, quick and clear.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Name two things she explains when she gives the key card.',
            model: 'Because the guest is tired.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Give one example of a small arrangement she thinks about.',
            model: '(any two) the room number, the floor, the wifi, the time of breakfast.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does she hand over the room at the end?',
            model: '(e.g.) asks if they need a taxi / says the porter is bringing the bags.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What does a tired guest want when they arrive? (to feel welcome and to rest)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 4 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A perfect check-in is… A) long and slow B) warm, quick and clear '
            + 'C) cold D) silent [[1]]'
        + '<br>'
        + '2. The receptionist keeps registration short because the guest is… A) '
            + 'angry B) tired C) late D) happy [[2]]'
        + '<br>'
        + '3. Small arrangements show the guest that the hotel is… A) busy B) '
            + 'closed C) thinking about them D) full [[3]]'
        + '<br>'
        + '4. A perfect check-in can take… A) less than five minutes B) two '
            + 'hours C) all day D) one minute only [[4]]'
        + '</div>',
      answers: {
        '1': ['B'],
        '2': ['B'],
        '3': ['C'],
        '4': ['A']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>B</b>',
        '2': '<b>B</b>',
        '3': '<b>C</b>',
        '4': '<b>A</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 4 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. to give the room / key to the guest → [[1]]'
        + '<br>'
        + '2. a person who travels → [[2]]'
        + '<br>'
        + '3. real attention and kindness → [[3]]'
        + '</div>',
      answers: {
        '1': ['hand over'],
        '2': ['traveller'],
        '3': ['care']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>hand over</b>',
        '2': '<b>traveller</b>',
        '3': '<b>care</b>'
      }
    }
  ]
});
