/* Unit 7 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read a housekeeping checklist and say '
  + 'what is still outstanding.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 7 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What is \'the true sign of great housekeeping\'?',
            model: 'Because guests rarely see them, but their work is everywhere.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How many rooms might a housekeeper clean in a day?',
            model: 'It is felt, not seen.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Name three tasks on the room checklist.',
            model: 'Fifteen or twenty.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why is good housekeeping about health, not only cleaning?',
            model: '(any three) strip sheets, make the bed, change towels, clean the '
              + 'bathroom, empty bins, vacuum, restock.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does room service tell the guest, late at night?',
            model: 'Because a clean room protects guests from germs.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Why is housekeeping called the \'invisible team\'? (guests rarely see '
        + 'them, but their work is everywhere)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 7 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Great housekeeping is… A) seen everywhere B) felt, not seen C) '
            + 'noisy D) never done [[1]]'
        + '<br>'
        + '2. A housekeeper may clean … rooms in a day. A) one or two B) fifteen '
            + 'or twenty C) a hundred D) none [[2]]'
        + '<br>'
        + '3. A clean room protects guests from… A) noise B) germs C) light D) '
            + 'guests [[3]]'
        + '<br>'
        + '4. Room service brings comfort… A) only at breakfast B) to the door, '
            + 'even late at night C) once a week D) to the restaurant [[4]]'
        + '</div>',
      answers: {
        '1': ['B'],
        '2': ['B'],
        '3': ['B'],
        '4': ['B']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>B</b>',
        '2': '<b>B</b>',
        '3': '<b>B</b>',
        '4': '<b>B</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 7 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. cannot be seen → [[1]]'
        + '<br>'
        + '2. keeping clean to protect health → [[2]]'
        + '<br>'
        + '3. to fill up again with supplies → [[3]]'
        + '</div>',
      answers: {
        '1': ['invisible'],
        '2': ['hygiene'],
        '3': ['restock']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>invisible</b>',
        '2': '<b>hygiene</b>',
        '3': '<b>restock</b>'
      }
    }
  ]
});
