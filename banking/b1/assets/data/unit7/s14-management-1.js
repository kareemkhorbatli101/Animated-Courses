/* Unit 7 §14 — Management File — Keeping Customers Safe.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s14', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 7 · Management File — Keeping Customers Safe', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Keeping Customers Safe', title: 'Part 7 · Management File — Keeping Customers Safe' },
  objective: 'By the end of Part 7 you can keep customers safe as a manager does: '
  + 'decide what to tell staff after an incident, what to tell customers, '
  + 'and what must be reported further.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 7 · 7A',
      visual: { spot: 'phishing' },
      type: 'dragmatch',
      title: 'Fraud-awareness phrases',
      instruction: 'Match the phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) giving the team the current picture' },
      { id: 'm-b', label: 'b) giving staff a rule to follow' },
      { id: 'm-c', label: 'c) making it safe to report' },
      { id: 'm-d', label: 'd) setting the line for referral' },
      { id: 'm-e', label: 'e) closing an account (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“We have seen four cases this week.”', accept: 'm-a',
          why: '<b>“We have seen four cases this week.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“If a customer hesitates, slow down.”', accept: 'm-a',
          why: '<b>“If a customer hesitates, slow down.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Nobody will be blamed for a false alarm.”', accept: 'm-a',
          why: '<b>“Nobody will be blamed for a false alarm.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Escalate anything over five thousand.”', accept: 'm-a',
          why: '<b>“Escalate anything over five thousand.”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 7 · 7B',
      type: 'study',
      title: 'Listening — a staff briefing — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Elif:</b> Four cases this week, all the '
      + 'same. A caller says he is from the fraud team and asks the customer '
      + 'to move money to a “safe account”.</p><p><b>Tomasz:</b> What should '
      + 'we do if a customer comes in to make that '
      + 'transfer?</p><p><b>Elif:</b> If a customer asks to move everything to '
      + 'a new account, slow down and ask who told them. If the answer is a '
      + 'phone call, stop the transfer and call me.</p><p><b>Tomasz:</b> And '
      + 'if we are wrong?</p><p><b>Elif:</b> Nobody will be blamed for a false '
      + 'alarm. Escalate anything over five thousand to me directly.</p></div>',
      playable: ['Four cases this week, all the same. A caller says he is from the '
        + 'fraud team and asks the customer to move money to a “safe account”.',
      'What should we do if a customer comes in to make that transfer?',
      'If a customer asks to move everything to a new account, slow down and '
        + 'ask who told them. If the answer is a phone call, stop the transfer '
        + 'and call me.',
      'And if we are wrong?',
      'Nobody will be blamed for a false alarm. Escalate anything over five '
        + 'thousand to me directly.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 7 · 7B',
      type: 'shortanswer',
      title: 'Listening — a staff briefing',
      instruction: 'Answer the questions.',
      items: [{ q: '1. What does the caller ask the customer to do?',
          accept: ['What does the caller ask the customer to do?'],
          keys: ['caller',
              'customer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What should staff do if a customer wants to move everything to a '
              + 'new account?',
          accept: ['What should staff do if a customer wants to move everything to a new '
                + 'account?'],
          keys: ['should',
              'staff'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What is the rule for amounts over five thousand?',
          accept: ['What is the rule for amounts over five thousand?'],
          keys: ['amounts',
              'thousand'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 7 · 7C',
      type: 'discuss',
      title: 'Controlled practice — advice with conditionals',
      instruction: 'Rewrite each note as advice for a colleague. Use a zero or first '
  + 'conditional.',
      minWords: 12,
      questions: [{ q: 'Caller claims to be from the fraud team.' },
      { q: 'Customer wants to move everything to a new account.' },
      { q: 'Transfer is over five thousand.' },
      { q: 'Customer has already shared a one-time code.' },
      { q: 'Staff member is not sure whether it is fraud.' }]
    }
  ]
});
