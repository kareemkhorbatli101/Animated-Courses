/* Unit 1 §20 — Review & Can-Do.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s20', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 10 · Review & Can-Do', part: '10', section: '20',
          track: 'review', label: 'Homework / self-study', lesson: 'Part 10 · Review & Can-Do', title: 'Part 10 · Review & Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s roles, services and '
  + 'tenses again without prompting, and tick honestly what you can now '
  + 'do.',
  cards: [
    {
      id: 'c1',
      ref: '10A',
      bookRef: 'Unit 1 · 10A',
      visual: { spot: 'branch-plan' },
      type: 'cloze',
      title: 'Spiral review',
      instruction: 'Complete the sentences. Use the correct tense (present simple or '
  + 'continuous) or the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A [[1]] handles deposits and withdrawals. (role)'
        + '<br>'
        + '2. The manager usually [[2]] (arrive) early.'
        + '<br>'
        + '3. Right now, I [[3]] (learn) the counter system.'
        + '<br>'
        + '4. A loan officer [[4]] (check) loan applications. (routine)'
        + '<br>'
        + '5. This week, we [[5]] (train) two new colleagues.'
        + '<br>'
        + '6. A [[6]] is a machine for cash withdrawals. (word)'
        + '<br>'
        + '7. You can [[7]] for a loan at the counter. (verb + preposition)'
        + '<br>'
        + '8. At the moment, the bank [[8]] (invest) in new online tools.'
        + '</div>',
      answers: {
        '1': ['teller'],
        '2': ['arrives'],
        '3': ['am learning'],
        '4': ['checks'],
        '5': ['are training'],
        '6': ['ATM'],
        '7': ['apply'],
        '8': ['is investing']
      },
      bank: ['ATM',
      'am learning',
      'apply',
      'are training',
      'arrives',
      'checks',
      'is investing',
      'teller'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>teller</b>.',
        '2': '<b>arrives</b>. \'Usually\' marks a routine, so the present simple.',
        '3': '<b>am learning</b>. \'Right now\' marks something in progress.',
        '4': '<b>checks</b>.',
        '5': '<b>are training</b>. \'This week\' marks a temporary present, so the '
          + 'continuous.',
        '6': '<b>ATM</b>.',
        '7': '<b>apply</b>.',
        '8': '<b>is investing</b>. \'At the moment\' marks something in progress.'
      }
    },
    {
      id: 'c2',
      ref: '10B',
      bookRef: 'Unit 1 · 10B',
      type: 'checklist',
      title: 'Can-Do checklist',
      instruction: '☐ I can introduce myself and my job.<br>☐ I can describe my routine '
  + 'duties (present simple).<br>☐ I can say what I am doing now (present '
  + 'continuous).<br>☐ I can understand a short first-day '
  + 'conversation.<br>☐ I can write a short introduction email.',
      items: []
    },
    {
      id: 'c3',
      ref: '10C',
      bookRef: 'Unit 1 · 10C',
      type: 'study',
      title: 'Unit glossary',
      instruction: 'The words this unit has taught you.',
      html: '<ul class="gloss"><li>teller — staff member who handles deposits and '
      + 'withdrawals</li><li>branch manager — senior person who manages a '
      + 'branch</li><li>loan officer — person who checks loan '
      + 'applications</li><li>customer service rep — person who helps '
      + 'customers with services</li><li>account — where a customer’s money is '
      + 'kept</li><li>ATM — machine for cash withdrawals</li><li>SME — small '
      + 'and medium enterprise</li><li>microfinance — small loans for '
      + 'low-income business owners</li><li>induction — the training period at '
      + 'the start of a job</li><li>shadow — watch and learn from a '
      + 'colleague</li></ul>',
      doneLabel: 'I know these'
    }
  ]
});
