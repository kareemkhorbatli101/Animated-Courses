/* Unit 9 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s06', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict what a customer says about their '
  + 'savings, follow three planning conversations, and identify the goal, '
  + 'the amount and the timescale in each.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 9 · 3A',
      visual: { spot: 'savings-goal' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think the customer will ask how much she needs to save each '
      + 'month to reach her goal.”</p>',
      instruction: 'You will hear three conversations about saving. What does a customer '
  + 'want to know first?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 9 · 3B',
      type: 'study',
      title: 'Setting a savings goal — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I would like to save for a '
      + 'deposit on a flat.</p><p><b>Johanna:</b> That is a good goal. How '
      + 'much have you saved so far?</p><p><b>Customer:</b> About two '
      + 'thousand. I started in March.</p><p><b>Johanna:</b> Then you have '
      + 'saved two thousand in eight months — two hundred and fifty a month. '
      + 'If you keep that up, you will reach six thousand by next '
      + 'December.</p><p><b>Customer:</b> I hadn’t worked it out like '
      + 'that.</p></div>',
      playable: ['I would like to save for a deposit on a flat.',
      'That is a good goal. How much have you saved so far?',
      'About two thousand. I started in March.',
      'Then you have saved two thousand in eight months — two hundred and '
        + 'fifty a month. If you keep that up, you will reach six thousand by '
        + 'next December.',
      'I hadn’t worked it out like that.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 9 · 3B',
      type: 'quizset',
      title: 'Setting a savings goal',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: How '
  + 'much have you saved so far? · If you keep that up, you will reach… · '
  + 'I hadn’t worked it out like that.',
      display: 'cards',
      items: [{
          q: 'The customer started saving in March.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'She has saved about six thousand so far.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'She will definitely buy the flat next year.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        }]
    },
    {
      id: 'c4',
      ref: '3C',
      bookRef: 'Unit 9 · 3C',
      type: 'study',
      title: 'Saving experience — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Johanna:</b> Have you ever saved regularly '
      + 'before?</p><p><b>Customer:</b> I tried two years ago, but I stopped '
      + 'after four months.</p><p><b>Johanna:</b> What '
      + 'happened?</p><p><b>Customer:</b> My car broke down, and I used all of '
      + 'it. Then I felt I had failed, so I didn’t start '
      + 'again.</p><p><b>Johanna:</b> That is very common. It is why we '
      + 'suggest two accounts: one for the goal, and a small emergency fund so '
      + 'the goal is not touched.</p></div>',
      playable: ['Have you ever saved regularly before?',
      'I tried two years ago, but I stopped after four months.',
      'What happened?',
      'My car broke down, and I used all of it. Then I felt I had failed, so '
        + 'I didn’t start again.',
      'That is very common. It is why we suggest two accounts: one for the '
        + 'goal, and a small emergency fund so the goal is not touched.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 9 · 3C',
      type: 'quizset',
      title: 'Saving experience',
      instruction: 'Read and decide: True or False.',
      display: 'cards',
      items: [{
          q: 'The customer has saved regularly before.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'She stopped because of an unexpected cost.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'She started again straight away.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The adviser suggests keeping two accounts.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        }]
    }
  ]
});
