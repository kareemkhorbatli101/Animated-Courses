/* Unit 10 §14 — Management File — Relationship Management.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s14', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 7 · Management File — Relationship Management', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Relationship Management', title: 'Part 7 · Management File — Relationship Management' },
  objective: 'By the end of Part 7 you can manage a relationship as a manager does: '
  + 'prepare for a review meeting, raise a difficult point without '
  + 'damaging the relationship, and agree what both sides will do.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 10 · 7A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Relationship-management phrases',
      instruction: 'Match the phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) checking you have understood' },
      { id: 'm-b', label: 'b) being honest about a decision' },
      { id: 'm-c', label: 'c) asking a question that opens up' },
      { id: 'm-d', label: 'd) taking responsibility' },
      { id: 'm-e', label: 'e) closing an account (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Let me read my notes back to you.”', accept: 'm-a',
          why: '<b>“Let me read my notes back to you.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“I cannot promise it, but I will put the case.”', accept: 'm-a',
          why: '<b>“I cannot promise it, but I will put the case.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“What would worry you most about next year?”', accept: 'm-a',
          why: '<b>“What would worry you most about next year?”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“I will take that to the credit meeting myself.”', accept: 'm-a',
          why: '<b>“I will take that to the credit meeting myself.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 10 · 7B',
      type: 'study',
      title: 'Listening — reporting a client meeting — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Marta:</b> How did it go with Okafor '
      + 'Coffee?</p><p><b>Priya:</b> She said she needed fifty thousand, and '
      + 'she told me three invoices were overdue by sixty '
      + 'days.</p><p><b>Marta:</b> Did she say what had '
      + 'changed?</p><p><b>Priya:</b> She said her largest buyer had moved to '
      + 'ninety-day terms without asking her.</p><p><b>Marta:</b> That is the '
      + 'real story, then. Put that in the note, in her '
      + 'words.</p><p><b>Priya:</b> I will. She also asked whether we could '
      + 'decide by Friday, and I said I would put the case but could not '
      + 'promise it.</p></div>',
      playable: ['How did it go with Okafor Coffee?',
      'She said she needed fifty thousand, and she told me three invoices '
        + 'were overdue by sixty days.',
      'Did she say what had changed?',
      'She said her largest buyer had moved to ninety-day terms without asking her.',
      'That is the real story, then. Put that in the note, in her words.',
      'I will. She also asked whether we could decide by Friday, and I said '
        + 'I would put the case but could not promise it.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 10 · 7B',
      type: 'shortanswer',
      title: 'Listening — reporting a client meeting',
      instruction: 'Answer the questions.',
      items: [{ q: '1. What had the largest buyer done?',
          accept: ['What had the largest buyer done?'],
          keys: ['largest',
              'buyer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What does Marta say should go in the note?',
          accept: ['What does Marta say should go in the note?'],
          keys: ['marta',
              'should'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What did Priya promise, and what did she not promise?',
          accept: ['What did Priya promise, and what did she not promise?'],
          keys: ['priya',
              'promise'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 10 · 7C',
      type: 'discuss',
      title: 'Controlled practice — the relationship report',
      instruction: 'Report each sentence for the credit file. Use said, told or asked.',
      minWords: 12,
      questions: [{ q: '“Three invoices are overdue.”' },
      { q: '“My largest buyer has moved to ninety-day terms.”' },
      { q: '“We have never missed a payment.” (she, to me)' },
      { q: '“Can you decide by Friday?”' },
      { q: '“I will send the statements today.” (she)' }]
    }
  ]
});
