/* Unit 1 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s02', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s banking roles and '
  + 'service words correctly, tell a front-office job from a back-office '
  + 'one and say why, and write a short paragraph using at least five of '
  + 'them.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 1 · 1A',
      visual: { spot: 'branch-plan' },
      type: 'dragmatch',
      title: 'Match the roles to the definitions',
      instruction: 'Match each banking role (1–7) to the correct definition (a–h). One '
  + 'definition is extra.<br>Pronunciation — word stress. Say these words. '
  + 'Mark the strong part: TEL·ler, man·A·ger, of·FI·cer, cus·TO·mer.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) A senior person who manages the branch.' },
      { id: 'm-b', label: 'b) A staff member who handles deposits and withdrawals.' },
      { id: 'm-c', label: 'c) A person who helps customers open or manage services.' },
      { id: 'm-d', label: 'd) A machine used for cash withdrawals.' },
      { id: 'm-e', label: 'e) A person who checks loan applications.' },
      { id: 'm-f', label: 'f) A person in charge of safety and security.' },
      { id: 'm-g', label: 'g) A place where money is kept for a customer.' },
      { id: 'm-h', label: 'h) A written report of all your transactions (extra).' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Teller', accept: 'm-b',
          why: '<b>Teller</b> &mdash; A staff member who handles deposits and withdrawals.' },
      { id: 't2', num: 2, label: 'Branch manager', accept: 'm-a',
          why: '<b>Branch manager</b> &mdash; A senior person who manages the branch.' },
      { id: 't3', num: 3, label: 'Loan officer', accept: 'm-e',
          why: '<b>Loan officer</b> &mdash; A person who checks loan applications.' },
      { id: 't4', num: 4, label: 'Customer service rep', accept: 'm-c',
          why: '<b>Customer service rep</b> &mdash; A person who helps customers open '
              + 'or manage services.' },
      { id: 't5', num: 5, label: 'Security officer', accept: 'm-f',
          why: '<b>Security officer</b> &mdash; A person in charge of safety and security.' },
      { id: 't6', num: 6, label: 'ATM', accept: 'm-d',
          why: '<b>ATM</b> &mdash; A machine used for cash withdrawals.' },
      { id: 't7', num: 7, label: 'Account', accept: 'm-g',
          why: '<b>Account</b> &mdash; A place where money is kept for a customer.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 1 · 1B',
      type: 'cloze',
      title: 'Vocabulary in context (gap-fill)',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. I opened a new [[1]] at the bank last week.'
        + '<br>'
        + '2. The [[2]] helped me deposit my salary.'
        + '<br>'
        + '3. Our local [[3]] is closed on Sundays.'
        + '<br>'
        + '4. You can [[4]] cash at any time using the ATM.'
        + '<br>'
        + '5. The bank offers 3% [[5]] on savings.'
        + '<br>'
        + '6. I applied for a small business [[6]] to start my shop.'
        + '<br>'
        + '7. A [[7]] service rep helped me reset my online password.'
        + '<br>'
        + '8. Please [[8]] your salary at the counter or the machine.'
        + '<br>'
        + '9. I use the [[9]] near my home to take out cash.'
        + '</div>',
      answers: {
        '1': ['account'],
        '2': ['teller'],
        '3': ['branch'],
        '4': ['withdraw'],
        '5': ['interest'],
        '6': ['loan'],
        '7': ['customer'],
        '8': ['deposit'],
        '9': ['ATM']
      },
      bank: ['ATM',
      'account',
      'branch',
      'customer',
      'deposit',
      'interest',
      'loan',
      'teller',
      'withdraw'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>account</b>.',
        '2': '<b>teller</b>.',
        '3': '<b>branch</b>.',
        '4': '<b>withdraw</b>.',
        '5': '<b>interest</b>.',
        '6': '<b>loan</b>.',
        '7': '<b>customer</b>.',
        '8': '<b>deposit</b>.',
        '9': '<b>ATM</b>.'
      }
    },
    {
      id: 'c3',
      ref: '1C',
      bookRef: 'Unit 1 · 1C',
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common banking phrase (one noun '
  + 'is extra).<br>Now complete the sentences with a phrase from above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a loan' },
      { id: 'm-b', label: 'b) an account' },
      { id: 'm-c', label: 'c) a password' },
      { id: 'm-d', label: 'd) cash' },
      { id: 'm-e', label: 'e) a deposit' },
      { id: 'm-f', label: 'f) a branch (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'open / close', accept: 'm-b',
          why: '<b>open / close</b> &mdash; an account' },
      { id: 't2', num: 2, label: 'apply for', accept: 'm-a',
          why: '<b>apply for</b> &mdash; a loan' },
      { id: 't3', num: 3, label: 'withdraw', accept: 'm-d',
          why: '<b>withdraw</b> &mdash; cash' },
      { id: 't4', num: 4, label: 'make', accept: 'm-e',
          why: '<b>make</b> &mdash; a deposit' },
      { id: 't5', num: 5, label: 'reset', accept: 'm-c',
          why: '<b>reset</b> &mdash; a password' }]
    }
  ]
});
