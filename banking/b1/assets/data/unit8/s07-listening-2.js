/* Unit 8 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s07', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict what a customer objects to in a '
  + 'check, follow three compliance conversations, and identify what was '
  + 'required and what was produced.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 8 · 3D',
      visual: { spot: 'kyc-check' },
      type: 'study',
      title: 'Escalating something unusual (longer) — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Ana:</b> A customer has deposited nine '
      + 'thousand in cash on three days this week.</p><p><b>Elif:</b> Each one '
      + 'below the reporting threshold.</p><p><b>Ana:</b> Exactly. Each on its '
      + 'own is normal. Together they are not.</p><p><b>Elif:</b> You were '
      + 'right to bring it to me. We call that structuring — breaking a large '
      + 'amount into smaller ones so each stays below the line. It must be '
      + 'escalated either way.</p><p><b>Ana:</b> Do I say anything to '
      + 'him?</p><p><b>Elif:</b> No. You mustn’t tell a customer that a report '
      + 'has been made. That is a rule in every country we work '
      + 'in.</p><p><b>Ana:</b> What happens now?</p><p><b>Elif:</b> I file the '
      + 'report today. Write down exactly what you saw.</p></div>',
      playable: ['A customer has deposited nine thousand in cash on three days this week.',
      'Each one below the reporting threshold.',
      'Exactly. Each on its own is normal. Together they are not.',
      'You were right to bring it to me. We call that structuring — breaking '
        + 'a large amount into smaller ones so each stays below the line. It '
        + 'must be escalated either way.',
      'Do I say anything to him?',
      'No. You mustn’t tell a customer that a report has been made. That is '
        + 'a rule in every country we work in.',
      'What happens now?',
      'I file the report today. Write down exactly what you saw.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 8 · 3D',
      type: 'quizset',
      title: 'Escalating something unusual (longer)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'Each single deposit was above the reporting threshold.',
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
          q: 'Ana must tell the customer that a report has been made.',
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
          q: 'The customer knew about the threshold.',
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
      bookRef: 'Unit 8 · 3E',
      type: 'dragmatch',
      title: 'Match the rule to the reason',
      instruction: 'Match each rule to the reason behind it (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) so the bank knows who it is dealing with' },
      { id: 'm-b', label: 'b) so criminal money cannot enter the system' },
      { id: 'm-c', label: 'c) so the bank does not pay a sanctioned person' },
      { id: 'm-d', label: 'd) so the regulator can check later' },
      { id: 'm-e', label: 'e) to make the queue shorter (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Every customer must have a current document on file', accept: 'm-a',
          why: '<b>Every customer must have a current document on file</b> &mdash; '
              + 'this pairing is not in the key yet; check it against the unit\'s '
              + 'glossary.' },
      { id: 't2', num: 2, label: 'Large cash deposits must be explained', accept: 'm-a',
          why: '<b>Large cash deposits must be explained</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Names must be screened before a transfer', accept: 'm-a',
          why: '<b>Names must be screened before a transfer</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Records must be kept for five years', accept: 'm-a',
          why: '<b>Records must be kept for five years</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
