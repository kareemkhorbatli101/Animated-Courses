/* Unit 2 §6 — Part 2, controlled practice.

   The book brackets the verb and labels the use ("irregular", "negative",
   "question"), and both are kept: the bracket says which verb, the label
   says which form. */
EAFM.page('u2-s06', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 2', page: 2, section: '6',
          lesson: 'Part 2 · Grammar', title: 'Controlled practice' },
  objective: 'Build the past simple and past continuous from the verb you are given',
  prev: 's05-grammar-rule', prevLabel: 'The rule',
  next: 's07-grammar-fix', nextLabel: 'Correct the sentence',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2D',
      bookRef: 'Unit 2 · Part 2 · Controlled practice', type: 'cloze',
      title: 'Complete each sentence',
      instruction: 'Complete each sentence with the past simple or past continuous of the verb in brackets. The label after each sentence tells you what it wants. The first is done for you.',
      visual: { art: 'two-actions',
        caption: 'Two of these five are about something already running; the rest are finished.' },
      before: '<b>0.</b> Yesterday, Fadi <u>recorded</u> (record) every transaction. <i>(past simple)</i>',
      text: '<div style="font-size:16px;line-height:2.6">' +
        '1. He [[1]] (write) the entry in the journal. <i>(irregular)</i><br>' +
        '2. While he [[2]] (count) the cash, Samah arrived. <i>(past continuous)</i><br>' +
        '3. The team [[3]] (not / forget) the receipt. <i>(negative)</i><br>' +
        '4. [[4]] you [[5]] (post) the entry yesterday? <i>(question)</i><br>' +
        '5. Last month, money [[6]] (come) in and went out. <i>(irregular)</i>' +
        '</div>',
      answers: {
        '1': ['wrote'],
        '2': ['was counting'],
        '3': ['did not forget', "didn't forget", 'did not forget the receipt'],
        '4': ['Did', 'did'],
        '5': ['post'],
        '6': ['came']
      },
      bank: ['wrote', 'was counting', 'did not forget', 'Did', 'post', 'came'],
      whyTitle: 'What decided each one',
      why: {
        '1': 'Irregular: <i>write</i> → <b>wrote</b>. There is no <i>writed</i> — the book’s Grammar Focus gives this exact sentence.',
        '2': '"While" marks the longer action, so was/were + -ing. <i>He</i> is singular, so <b>was counting</b>.',
        '3': '<i>Did not</i> carries the past, so the main verb returns to its base form: <b>did not forget</b>, never <i>did not forgot</i>. <i>Didn’t forget</i> is accepted too.',
        '4': 'A question starts with <b>Did</b>. Nothing else in the sentence can be past once it is there.',
        '5': 'And this is why: after <i>Did</i>, the main verb is the plain <b>post</b>. This blank and the one before it are a single rule split into two halves.',
        '6': 'Irregular: <i>come</i> → <b>came</b>. Note <i>went</i> later in the same sentence — the book has put two irregulars side by side on purpose.'
      }
    }
  ]
});
