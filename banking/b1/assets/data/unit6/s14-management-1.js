/* Unit 6 §14 — Management File — Handling a Rate Query.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s14', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 7 · Management File — Handling a Rate Query', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Handling a Rate Query', title: 'Part 7 · Management File — Handling a Rate Query' },
  objective: 'By the end of Part 7 you can handle a rate query as a manager does: '
  + 'explain a spread without jargon, hold a line you cannot move, and '
  + 'offer what you can.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 6 · 7A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Explaining rates and fees — phrases',
      instruction: 'Match the phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) removing a doubt' },
      { id: 'm-b', label: 'b) naming the charge' },
      { id: 'm-c', label: 'c) making it checkable' },
      { id: 'm-d', label: 'd) explaining why it changed' },
      { id: 'm-e', label: 'e) closing an account (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“The rate on the board is the rate you get.”', accept: 'm-a',
          why: '<b>“The rate on the board is the rate you get.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“The difference is called the spread.”', accept: 'm-a',
          why: '<b>“The difference is called the spread.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“I can write both numbers down for you.”', accept: 'm-a',
          why: '<b>“I can write both numbers down for you.”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“The rate moves during the day.”', accept: 'm-a',
          why: '<b>“The rate moves during the day.”</b> &mdash; this pairing is not '
              + 'in the key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 6 · 7B',
      type: 'study',
      title: 'Listening — coaching on a rate query — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Kerem:</b> You handled that well, but the '
      + 'customer left still unsure. May I ask what you told '
      + 'him?</p><p><b>Zeynep:</b> I said the rate had changed since the '
      + 'morning.</p><p><b>Kerem:</b> That is true, but it sounds like an '
      + 'excuse. Tell him what the rate is now, write both numbers down, and '
      + 'say that the board is updated when the market '
      + 'moves.</p><p><b>Zeynep:</b> So give him something he can '
      + 'check.</p><p><b>Kerem:</b> Exactly. A customer who can check a number '
      + 'does not need to trust you.</p></div>',
      playable: ['You handled that well, but the customer left still unsure. May I ask '
        + 'what you told him?',
      'I said the rate had changed since the morning.',
      'That is true, but it sounds like an excuse. Tell him what the rate is '
        + 'now, write both numbers down, and say that the board is updated when '
        + 'the market moves.',
      'So give him something he can check.',
      'Exactly. A customer who can check a number does not need to trust you.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 6 · 7B',
      type: 'discuss',
      title: 'Listening — coaching on a rate query',
      instruction: 'Answer the questions.',
      questions: [{
            q: 'What did Zeynep tell the customer?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does Kerem say that answer is not enough?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What should Zeynep give the customer instead?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 6 · 7C',
      type: 'discuss',
      title: 'Controlled practice — make the question polite',
      instruction: 'Rewrite each blunt question as an indirect question a colleague could '
  + 'use with a customer.',
      questions: [{
            q: 'What is the beneficiary’s name?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Where does the money go?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Do you have the BIC?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'When do you need it there?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why are you sending this amount?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
