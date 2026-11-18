/* Unit 8 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s02', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s compliance words '
  + 'correctly, distinguish an identity check from a source-of-funds '
  + 'check, and write about a procedure using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 8 · 1A',
      visual: { spot: 'kyc-check' },
      type: 'dragmatch',
      title: 'Match the term to the meaning',
      instruction: 'Match each compliance word (1–8) to the correct meaning (a–i). One '
  + 'meaning is extra.<br>Pronunciation — word stress. Say these words: '
  + 'com·PLI·ance, LAUN·der·ing, SANC·tions, re·gu·LA·tion.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) following the rules that apply to the bank' },
      { id: 'm-b', label: 'b) knowing who your customer really is' },
      { id: 'm-c', label: 'c) stopping criminal money entering the system' },
      { id: 'm-d', label: 'd) checking a name against official lists' },
      { id: 'm-e', label: 'e) the careful checking the bank must do' },
      { id: 'm-f', label: 'f) to pass something to a more senior person' },
      { id: 'm-g', label: 'g) storing documents for the required period' },
      { id: 'm-h', label: 'h) the body that supervises banks in a country' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Compliance', accept: 'm-a',
          why: '<b>Compliance</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'KYC', accept: 'm-a',
          why: '<b>KYC</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Anti-money-laundering', accept: 'm-a',
          why: '<b>Anti-money-laundering</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Sanctions screening', accept: 'm-a',
          why: '<b>Sanctions screening</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'Due diligence', accept: 'm-a',
          why: '<b>Due diligence</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't6', num: 6, label: 'To escalate', accept: 'm-a',
          why: '<b>To escalate</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't7', num: 7, label: 'Record keeping', accept: 'm-a',
          why: '<b>Record keeping</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't8', num: 8, label: 'Regulator', accept: 'm-a',
          why: '<b>Regulator</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 8 · 1B',
      type: 'cloze',
      title: 'Sort the words',
      instruction: 'Put each word from 1A into the correct group.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Before you open an account: [[1]]'
        + '<br>'
        + '2. Every day at the counter: [[2]]'
        + '<br>'
        + '3. After the transaction: [[3]]'
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
      bookRef: 'Unit 8 · 1C',
      type: 'cloze',
      title: 'Complete the sentences',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Every name is checked by sanctions [[1]] before a transfer leaves.'
        + '<br>'
        + '2. Please [[2]] anything [[2]] to the compliance officer.'
        + '<br>'
        + '3. We must keep the [[3]] for at least five years.'
        + '<br>'
        + '4. Above the reporting [[4]], a form must be completed.'
        + '<br>'
        + '5. The [[5]] can ask to see any file at any time.'
        + '<br>'
        + '6. For a large cash deposit, we must ask about the [[6]] of the funds.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      bank: ['compliance',
      'escalate',
      'identity',
      'records',
      'regulator',
      'screening',
      'source',
      'threshold',
      'unusual'],
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
