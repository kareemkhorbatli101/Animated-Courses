/* Unit 8 §14 — Management File — Handling an Escalation.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s14', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 7 · Management File — Handling an Escalation', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Handling an Escalation', title: 'Part 7 · Management File — Handling an Escalation' },
  objective: 'By the end of Part 7 you can handle an escalation as a manager does: '
  + 'decide what you can settle, what must go higher, and how to tell the '
  + 'customer without promising an outcome.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 8 · 7A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Escalation phrases',
      instruction: 'Match the phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) supporting the person who reported' },
      { id: 'm-b', label: 'b) preserving the evidence' },
      { id: 'm-c', label: 'c) protecting the investigation' },
      { id: 'm-d', label: 'd) taking responsibility for the next step' },
      { id: 'm-e', label: 'e) closing an account (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“You were right to bring this to me.”', accept: 'm-a',
          why: '<b>“You were right to bring this to me.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“Write down exactly what you saw.”', accept: 'm-a',
          why: '<b>“Write down exactly what you saw.”</b> &mdash; this pairing is not '
              + 'in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Say nothing to the customer.”', accept: 'm-a',
          why: '<b>“Say nothing to the customer.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“I will file the report today.”', accept: 'm-a',
          why: '<b>“I will file the report today.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 8 · 7B',
      type: 'study',
      title: 'Listening — handling the escalation — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Ana:</b> I’m sorry to bring you something '
      + 'so small.</p><p><b>Elif:</b> It isn’t small, and you were right to '
      + 'bring it to me. Tell me what you saw, in order.</p><p><b>Ana:</b> '
      + 'Three deposits, nine thousand each, Monday, Wednesday and Thursday. '
      + 'Same customer, same counter.</p><p><b>Elif:</b> Write that down '
      + 'exactly as you said it, with the times. Say nothing to the customer, '
      + 'and serve him normally if he comes back.</p><p><b>Ana:</b> Won’t he '
      + 'notice?</p><p><b>Elif:</b> Not if nothing changes. That is why the '
      + 'rule exists. I will file the report today.</p></div>',
      playable: ['I’m sorry to bring you something so small.',
      'It isn’t small, and you were right to bring it to me. Tell me what '
        + 'you saw, in order.',
      'Three deposits, nine thousand each, Monday, Wednesday and Thursday. '
        + 'Same customer, same counter.',
      'Write that down exactly as you said it, with the times. Say nothing '
        + 'to the customer, and serve him normally if he comes back.',
      'Won’t he notice?',
      'Not if nothing changes. That is why the rule exists. I will file the '
        + 'report today.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 8 · 7B',
      type: 'shortanswer',
      title: 'Listening — handling the escalation',
      instruction: 'Answer the questions.',
      items: [{ q: '1. What does Elif ask Ana to write down?',
          accept: ['What does Elif ask Ana to write down?'],
          keys: ['write'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. How should Ana behave if the customer returns?',
          accept: ['How should Ana behave if the customer returns?'],
          keys: ['should',
              'behave'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. Who will file the report?',
          accept: ['Who will file the report?'],
          keys: ['report'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 8 · 7C',
      type: 'discuss',
      title: 'Controlled practice — write the procedure',
      instruction: 'Write each step of the escalation procedure as a rule. Use must, '
  + 'mustn’t or don’t have to.',
      minWords: 12,
      questions: [{ q: 'write down what you saw, with times' },
      { q: 'tell the customer' },
      { q: 'change how you serve the customer' },
      { q: 'decide alone whether it is serious' },
      { q: 'file the report yourself' }]
    }
  ]
});
