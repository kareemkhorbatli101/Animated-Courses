/* Unit 10 §19 — Syria in Focus — A Workshop, a Bank, and a Correspondent.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s19', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 11 · Syria in Focus — A Workshop, a Bank, and a Correspondent', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — A Workshop, a Bank, and a Correspondent', title: 'Part 11 · Syria in Focus — A Workshop, a Bank, and a Correspondent' },
  objective: 'By the end of this part you can explain to a business customer what '
  + 'the bank needs and what the bank itself depends on, and write it up '
  + 'as a meeting note.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 10 · S-A',
      visual: { spot: 'correspondent' },
      type: 'study',
      title: 'Read the case',
      instruction: 'A furniture workshop in Aleppo has orders from a buyer abroad. It '
  + 'needs to import machine parts, and its buyer wants to pay through a '
  + 'bank rather than in cash.<br>Al-Mathaq Bank\'s corporate officer '
  + 'meets the owner. Two things have to be explained: what the bank needs '
  + 'from the workshop, and what the bank itself depends on - a '
  + 'correspondent bank abroad willing to handle the payment. Sanctions '
  + 'relief has made this legally possible; it has not made every '
  + 'correspondent willing.<br>The officer writes a meeting note setting '
  + 'out what was asked, what the bank undertook to do, and by when.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 10 · S-B',
      type: 'shortanswer',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. What does the workshop need the bank for?',
          accept: ['What does the workshop need the bank for?'],
          keys: ['workshop'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What does the bank itself depend on?',
          accept: ['What does the bank itself depend on?'],
          keys: ['itself',
              'depend'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What three things does the meeting note record?',
          accept: ['What three things does the meeting note record?'],
          keys: ['three',
              'things'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 10 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'Write a four-line meeting note for a business customer at your own '
  + 'bank: what was asked, what you undertook, and by when.',
      doneLabel: 'I have read this'
    }
  ]
});
