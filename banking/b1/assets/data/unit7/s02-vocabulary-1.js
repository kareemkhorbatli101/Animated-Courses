/* Unit 7 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s02', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s security and fraud '
  + 'words correctly, tell one kind of scam from another, and write a '
  + 'short warning using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 7 · 1A',
      visual: { spot: 'phishing' },
      type: 'dragmatch',
      title: 'Match the term to the meaning',
      instruction: 'Match each security word (1–8) to the correct meaning (a–i). One '
  + 'meaning is extra.<br>Pronunciation — word stress. Say these words: '
  + 'FRAUD, PHISH·ing, sus·PI·cious, un·AU·thor·ised.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) taking money by lying or tricking someone' },
      { id: 'm-b', label: 'b) a false email that asks for your details' },
      { id: 'm-c', label: 'c) a false text message that asks you to act' },
      { id: 'm-d', label: 'd) copying a card’s details at a machine' },
      { id: 'm-e', label: 'e) looking as though something may be wrong' },
      { id: 'm-f', label: 'f) to stop a card or account being used' },
      { id: 'm-g', label: 'g) done without the owner’s permission' },
      { id: 'm-h', label: 'h) a plan to take money dishonestly' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Fraud', accept: 'm-a',
          why: '<b>Fraud</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Phishing', accept: 'm-a',
          why: '<b>Phishing</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Smishing', accept: 'm-a',
          why: '<b>Smishing</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Skimming', accept: 'm-a',
          why: '<b>Skimming</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'Suspicious', accept: 'm-a',
          why: '<b>Suspicious</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't6', num: 6, label: 'To block', accept: 'm-a',
          why: '<b>To block</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't7', num: 7, label: 'Unauthorised', accept: 'm-a',
          why: '<b>Unauthorised</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't8', num: 8, label: 'Scam', accept: 'm-a',
          why: '<b>Scam</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 7 · 1B',
      type: 'cloze',
      title: 'Sort the words',
      instruction: 'Put each word from 1A into the correct group.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The crime: [[1]]'
        + '<br>'
        + '2. The method: [[2]]'
        + '<br>'
        + '3. What the bank does: [[3]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '1C',
      bookRef: 'Unit 7 · 1C',
      type: 'cloze',
      title: 'Complete the sentences',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. If a message asks you to click a [[1]], do not click it.'
        + '<br>'
        + '2. Your card has been [[2]] as a precaution.'
        + '<br>'
        + '3. We found three [[3]] payments on the account.'
        + '<br>'
        + '4. Please [[4]] anything [[4]] to us at once.'
        + '<br>'
        + '5. The [[5]] said he worked for the bank, but he did not.'
        + '<br>'
        + '6. The bank will never ask you for a one-time [[6]].'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      bank: ['PIN',
      'blocked',
      'caller',
      'code',
      'fraud',
      'link',
      'report',
      'suspicious',
      'unauthorised'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '4': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '5': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '6': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    }
  ]
});
