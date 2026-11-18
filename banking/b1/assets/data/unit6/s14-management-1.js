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
      type: 'shortanswer',
      title: 'Listening — coaching on a rate query',
      instruction: 'Answer the questions.',
      items: [{ q: '1. What did Zeynep tell the customer?',
          accept: ['What did Zeynep tell the customer?'],
          keys: ['zeynep',
              'customer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Why does Kerem say that answer is not enough?',
          accept: ['Why does Kerem say that answer is not enough?'],
          keys: ['kerem',
              'answer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What should Zeynep give the customer instead?',
          accept: ['What should Zeynep give the customer instead?'],
          keys: ['should',
              'zeynep'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 6 · 7C',
      type: 'shortanswer',
      title: 'Controlled practice — make the question polite',
      instruction: 'Rewrite each blunt question as an indirect question a colleague could '
  + 'use with a customer.',
      items: [{ q: '1. What is the beneficiary’s name?',
          accept: ['What is the beneficiary’s name?'],
          keys: ['beneficiary'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Where does the money go?',
          accept: ['Where does the money go?'],
          keys: ['where',
              'money'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. Do you have the BIC?',
          accept: ['Do you have the BIC?'],
          keys: [], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. When do you need it there?',
          accept: ['When do you need it there?'],
          keys: ['there'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '5. Why are you sending this amount?',
          accept: ['Why are you sending this amount?'],
          keys: ['sending',
              'amount'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
