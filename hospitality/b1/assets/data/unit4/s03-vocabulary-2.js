/* Unit 4 §3 — Vocabulary and Terminology (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s03', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Vocabulary and Terminology (2)', part: '1',
          section: '3', lesson: 'Vocabulary and Terminology (2)', title: 'Vocabulary and Terminology (2)' },
  objective: 'By the end of Part 1 you can name the steps and the documents of a '
  + 'check-in, and the things you hand a guest.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 4 · P1 D',
      visual: { img: '../assets/figures/fig-4.3.png', caption: 'Arrangements a guest can ask for.' },
      type: 'cloze',
      title: 'Which service does the guest need?',
      instruction: 'Which service does the guest need? Write the service from Figure 4.3.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. “Please wake me at six o\'clock tomorrow.” → [[1]]'
        + '<br>'
        + '2. “I need to go to the airport in the morning.” → [[2]]'
        + '<br>'
        + '3. “My bags are very heavy.” → [[3]]'
        + '<br>'
        + '4. “I have some shirts to wash and iron.” → [[4]]'
        + '</div>',
      answers: {
        '1': ['wake-up call'],
        '2': ['taxi'],
        '3': ['luggage help'],
        '4': ['laundry']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>wake-up call</b>',
        '2': '<b>taxi</b>',
        '3': '<b>luggage help</b>',
        '4': '<b>laundry</b>'
      }
    },
    {
      id: 'c2',
      ref: 'E',
      bookRef: 'Unit 4 · P1 E',
      type: 'study',
      title: 'Classify',
      instruction: 'Classify. When does it happen? Write each word in the correct column.',
      doneLabel: 'I have read this'
    }
  ]
});
