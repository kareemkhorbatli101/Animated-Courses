/* Unit 6 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s09', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can quote a rate and a fee clearly, explain '
  + 'why the amount received differs from the amount sent, and take a '
  + 'transfer request from start to confirmation.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 6 · 4D',
      visual: { spot: 'iban-anatomy' },
      type: 'report',
      title: 'Find the information (pairwork info-gap)',
      instruction: 'Student A works at the transfer desk; Student B is a customer. Ask '
  + 'and answer to complete the transfer.<br>Card A (staff): fee is a flat '
  + '12 up to 1,000, then 20 · one working day · you need the IBAN, the '
  + 'BIC and the exact name.<br>Card B (customer): you are sending 1,400 '
  + 'to Manila; you have the IBAN but not the BIC; you want it to arrive '
  + 'by Friday.<br>Useful language: Could you tell me how much you would '
  + 'like to send? · May I ask whether you have the BIC? · Do you know '
  + 'when it needs to arrive?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 6 · 4E',
      type: 'dragmatch',
      title: 'Close the conversation',
      instruction: 'Match the closing phrase to the situation (one is extra).<br>In '
  + 'pairs, close a transfer conversation politely. Use two phrases above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) giving the customer the record' },
      { id: 'm-b', label: 'b) explaining why the record matters' },
      { id: 'm-c', label: 'c) giving a clear next step' },
      { id: 'm-d', label: 'd) offering something extra' },
      { id: 'm-e', label: 'e) “Please take a seat.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Here is your receipt with the reference number.”', accept: 'm-a',
          why: '<b>“Here is your receipt with the reference number.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“Please keep this in case you need to trace it.”', accept: 'm-a',
          why: '<b>“Please keep this in case you need to trace it.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“If it has not arrived by Thursday, come back.”', accept: 'm-a',
          why: '<b>“If it has not arrived by Thursday, come back.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Would you like today’s rate written down?”', accept: 'm-a',
          why: '<b>“Would you like today’s rate written down?”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
