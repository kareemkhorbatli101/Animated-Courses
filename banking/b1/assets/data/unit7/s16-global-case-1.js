/* Unit 7 §16 — Global Case Study — A Scam-Awareness Campaign.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s16', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 8 · Global Case Study — A Scam-Awareness Campaign', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — A Scam-Awareness Campaign', title: 'Part 8 · Global Case Study — A Scam-Awareness Campaign' },
  objective: 'By the end of Part 8 you can read how a bank ran a scam-awareness '
  + 'campaign, take its vocabulary, and judge what would work with your '
  + 'own customers.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 7 · 8A',
      visual: { spot: 'phishing' },
      type: 'shortanswer',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. Which two parts of the campaign did almost nothing?',
          accept: ['Which two parts of the campaign did almost nothing?'],
          keys: ['which',
              'parts'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What was the one question staff were taught to ask?',
          accept: ['What was the one question staff were taught to ask?'],
          keys: ['question',
              'staff'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What happened if the answer was a phone call?',
          accept: ['What happened if the answer was a phone call?'],
          keys: ['happened',
              'answer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. What two things did the bank learn?',
          accept: ['What two things did the bank learn?'],
          keys: ['things',
              'learn'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 7 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a call telling you to move money to a new account' },
      { id: 'm-b', label: 'b) an organised effort to tell people something' },
      { id: 'm-c', label: 'c) a warning about something that turns out to be fine' },
      { id: 'm-d', label: 'd) to pass something to a more senior person' },
      { id: 'm-e', label: 'e) a charge for a service (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'campaign', accept: 'm-a',
          why: '<b>campaign</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'safe-account scam', accept: 'm-a',
          why: '<b>safe-account scam</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'to escalate', accept: 'm-a',
          why: '<b>to escalate</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'false alarm', accept: 'm-a',
          why: '<b>false alarm</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 7 · 8C',
      type: 'shortanswer',
      title: 'Discussion',
      instruction: 'Frames: “In my branch this question would work because ___.” “It '
  + 'would be difficult because ___.”',
      items: [{ q: '1. How would customers in your country react to being stopped?',
          accept: ['How would customers in your country react to being stopped?'],
          keys: ['would',
              'customers'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Is a poster ever worth the wall space? Why, or why not?',
          accept: ['Is a poster ever worth the wall space? Why, or why not?'],
          keys: ['poster',
              'worth'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
