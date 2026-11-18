/* Unit 9 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s07', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict what a customer says about their '
  + 'savings, follow three planning conversations, and identify the goal, '
  + 'the amount and the timescale in each.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 9 · 3D',
      visual: { spot: 'savings-goal' },
      type: 'study',
      title: 'Saving or investing? (longer) — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> My brother says I should '
      + 'invest, not save. He has made a lot this year.</p><p><b>Johanna:</b> '
      + 'May I ask when he will need that money?</p><p><b>Customer:</b> He '
      + 'doesn’t need it. He already has a house.</p><p><b>Johanna:</b> That '
      + 'is the difference. Investing can give a better return over many '
      + 'years, but the value can fall. Saving gives a smaller return, but the '
      + 'amount does not go down.</p><p><b>Customer:</b> So which should I '
      + 'do?</p><p><b>Johanna:</b> It depends on your goal. For money you need '
      + 'in two years, I would save. For twenty years, my answer would '
      + 'differ.</p><p><b>Customer:</b> And my brother?</p><p><b>Johanna:</b> '
      + 'He is answering a different question. He already has his '
      + 'house.</p></div>',
      playable: ['My brother says I should invest, not save. He has made a lot this year.',
      'May I ask when he will need that money?',
      'He doesn’t need it. He already has a house.',
      'That is the difference. Investing can give a better return over many '
        + 'years, but the value can fall. Saving gives a smaller return, but the '
        + 'amount does not go down.',
      'So which should I do?',
      'It depends on your goal. For money you need in two years, I would '
        + 'save. For twenty years, my answer would differ.',
      'And my brother?',
      'He is answering a different question. He already has his house.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 9 · 3D',
      type: 'quizset',
      title: 'Saving or investing? (longer)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'Investing always gives a better return than saving.',
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
          q: 'The customer needs the money in about two years.',
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
          q: 'The adviser tells the customer her brother is wrong.',
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
      id: 'c3',
      ref: '3E',
      bookRef: 'Unit 9 · 3E',
      type: 'dragmatch',
      title: 'Match the idea',
      instruction: 'Match each phrase from the listenings to what it means (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) asking about progress up to now' },
      { id: 'm-b', label: 'b) a finished event in the past' },
      { id: 'm-c', label: 'c) describing risk' },
      { id: 'm-d', label: 'd) money kept so the goal is not touched' },
      { id: 'm-e', label: 'e) “Your card has been blocked.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“How much have you saved so far?”', accept: 'm-a',
          why: '<b>“How much have you saved so far?”</b> &mdash; this pairing is not '
              + 'in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“I stopped after four months.”', accept: 'm-a',
          why: '<b>“I stopped after four months.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“The value can fall.”', accept: 'm-a',
          why: '<b>“The value can fall.”</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“A small emergency fund”', accept: 'm-a',
          why: '<b>“A small emergency fund”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
