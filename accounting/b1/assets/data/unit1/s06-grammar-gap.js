/* Unit 1 §6 — Part 2, controlled practice.

   A gap-fill with a word bank: the learner types or picks a verb form, and
   the form is marked. The book brackets the infinitive and names the use
   ("routine", "now"), and both are kept, because the bracket tells you
   WHICH verb and the label tells you WHICH tense. */
EAFM.page('u1-s06', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 2', page: 1, section: '6',
          lesson: 'Part 2 · Grammar', title: 'Controlled practice' },
  objective: 'Put the right tense into a sentence that tells you which one it wants',
  prev: 's05-grammar-rule', prevLabel: 'The rule',
  next: 's07-grammar-fix', nextLabel: 'Correct the sentence',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2D', bookRef: 'Unit 1 · Part 2 · Controlled practice', type: 'cloze',
      title: 'Complete each sentence',
      instruction: 'Complete each sentence with the present simple or present continuous of the verb in brackets. The label after each sentence tells you which one it wants. The first is done for you.',
      visual: { art: 'tense-timeline',
        caption: 'Read the time words first — every sentence below names its own tense.' },
      before: '<b>0.</b> Fadi <u>records</u> (record) the transactions every morning. <i>(routine)</i>',
      text: '<div style="font-size:16px;line-height:2.6">' +
        '1. Right now, he [[1]] (check) the cash box. <i>(now)</i><br>' +
        '2. The team [[2]] (prepare) a report every month. <i>(routine)</i><br>' +
        '3. At the moment, the donors [[3]] (wait) for the numbers. <i>(now)</i><br>' +
        '4. Samah [[4]] (learn) the job this week. <i>(now, in progress)</i><br>' +
        '5. Mr Haytham [[5]] (check) the difficult accounts. <i>(routine)</i>' +
        '</div>',
      answers: {
        '1': ['is checking'],
        '2': ['prepares'],
        '3': ['are waiting'],
        '4': ['is learning'],
        '5': ['checks']
      },
      bank: ['is checking', 'prepares', 'are waiting', 'is learning', 'checks'],
      whyTitle: 'What decided each one',
      why: {
        '1': '"Right now" — this moment, so the continuous. <i>He</i> is singular, so <i>is</i>, not <i>are</i>.',
        '2': '"Every month" — a routine, so the simple. <i>The team</i> is one thing, so the verb takes the s: <i>prepares</i>.',
        '3': '"At the moment" — the same signal as "right now". <i>The donors</i> is plural, so <i>are waiting</i>. This is the one where the s-rule and the am/is/are rule pull in different directions: plural means no s on a simple verb AND <i>are</i> on a continuous one.',
        '4': '"This week" is a period in progress, not a habit — the book’s own label says "now, in progress". Samah is not learning the job every week; she is in the middle of learning it once.',
        '5': 'No time marker at all, so it is the "fact" use of the simple — what Mr Haytham does as a rule. <i>Mr Haytham</i> is he, so <i>checks</i>.'
      }
    }
  ]
});
