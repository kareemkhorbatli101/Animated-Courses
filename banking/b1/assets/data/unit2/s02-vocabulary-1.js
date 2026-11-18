/* Unit 2 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s02', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s polite service phrases, '
  + 'sort them by what they do, rewrite a blunt sentence as a professional '
  + 'one, and write about a good service moment using at least five of the '
  + 'words.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 2 · 1A',
      visual: { spot: 'queue' },
      type: 'dragmatch',
      title: 'Match the phrase to the situation',
      instruction: 'Match each polite phrase (1–6) to the situation where a banker uses '
  + 'it (a–g). One is extra.<br>Pronunciation — word stress. Say these '
  + 'words: as·SIST, con·FIRM, VE·ri·fy, in·QUI·ry.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) greeting a new customer' },
      { id: 'm-b', label: 'b) verifying the customer’s identity' },
      { id: 'm-c', label: 'c) explaining the next step' },
      { id: 'm-d', label: 'd) offering the customer a choice' },
      { id: 'm-e', label: 'e) checking that information is correct' },
      { id: 'm-f', label: 'f) ending the conversation politely' },
      { id: 'm-g', label: 'g) asking the customer to wait (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“How can I help you today?”', accept: 'm-a',
          why: '<b>“How can I help you today?”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“May I see your ID, please?”', accept: 'm-a',
          why: '<b>“May I see your ID, please?”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“You’ll need to fill out this form.”', accept: 'm-a',
          why: '<b>“You’ll need to fill out this form.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Would you like a receipt?”', accept: 'm-a',
          why: '<b>“Would you like a receipt?”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't5', num: 5, label: '“Could you confirm your address?”', accept: 'm-a',
          why: '<b>“Could you confirm your address?”</b> &mdash; this pairing is not '
              + 'in the key yet; check it against the unit\'s glossary.' },
      { id: 't6', num: 6, label: '“I’m sorry, that service is not available.”', accept: 'm-a',
          why: '<b>“I’m sorry, that service is not available.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 2 · 1B',
      type: 'cloze',
      title: 'Sort the phrases by function',
      instruction: 'Put each phrase from 1A into the correct group.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Offering help: [[1]]'
        + '<br>'
        + '2. Requesting information: [[2]]'
        + '<br>'
        + '3. Explaining a step: [[3]]'
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
      bookRef: 'Unit 2 · 1C',
      type: 'cloze',
      title: 'Complete the bank dialogue',
      instruction: 'Complete the dialogue with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Customer: I’d like to open a new [[1]], please.'
        + '<br>'
        + '2. Banker: Certainly. First, may I see your [[2]]? I need it to '
            + 'verify your identity.'
        + '<br>'
        + '3. Banker: Thank you. I just need to [[3]] your details.'
        + '<br>'
        + '4. Banker: The [[4]] is simple. Please complete this application [[4]].'
        + '<br>'
        + '5. Banker: Would you like to make your first [[5]], such as a '
            + 'deposit, today?'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['ID',
      'account',
      'assist',
      'confirm',
      'form',
      'procedure',
      'transaction',
      'verify'],
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
          + 'own word list.'
      }
    }
  ]
});
