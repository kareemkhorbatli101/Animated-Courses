/* Unit 1 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s12', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a professional '
  + 'introduction email and what each is for, complete one from a word '
  + 'list, and write your own in 50 to 70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 1 · 6A',
      visual: { spot: 'email-parts' },
      type: 'dragmatch',
      title: 'The parts of a professional email',
      instruction: 'Match the part of an email to the example (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) Introduction — New Loan Officer' },
      { id: 'm-b', label: 'b) Dear Mr Diallo,' },
      { id: 'm-c', label: 'c) I am writing to introduce myself.' },
      { id: 'm-d', label: 'd) I usually manage SME accounts, and now I am learning retail.' },
      { id: 'm-e', label: 'e) Best regards, Diego' },
      { id: 'm-f', label: 'f) Please find my report attached (extra).' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Subject line', accept: 'm-a',
          why: '<b>Subject line</b> &mdash; Introduction — New Loan Officer' },
      { id: 't2', num: 2, label: 'Salutation', accept: 'm-b',
          why: '<b>Salutation</b> &mdash; Dear Mr Diallo,' },
      { id: 't3', num: 3, label: 'Opening', accept: 'm-c',
          why: '<b>Opening</b> &mdash; I am writing to introduce myself.' },
      { id: 't4', num: 4, label: 'Body', accept: 'm-d',
          why: '<b>Body</b> &mdash; I usually manage SME accounts, and now I am '
              + 'learning retail.' },
      { id: 't5', num: 5, label: 'Sign-off', accept: 'm-e',
          why: '<b>Sign-off</b> &mdash; Best regards, Diego' }]
    },
    {
      id: 'c2',
      ref: '6B',
      bookRef: 'Unit 1 · 6B',
      type: 'cloze',
      title: 'Guided writing — complete the email',
      instruction: 'Complete the email with the words: currently, joined, usually, '
  + 'meeting, name.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Subject: Introduction — New Analyst. Dear Team, my [[1]] is Johanna Berg.'
        + '<br>'
        + '2. I [[2]] the Risk department last Monday.'
        + '<br>'
        + '3. In my role, I [[3]] check credit limits and prepare reports.'
        + '<br>'
        + '4. [[4]], I am helping the senior manager with the annual audit.'
        + '<br>'
        + '5. I look forward to [[5]] all of you soon.'
        + '</div>',
      answers: {
        '1': ['name'],
        '2': ['joined'],
        '3': ['usually'],
        '4': ['Currently'],
        '5': ['meeting']
      },
      bank: ['Currently',
      'currently',
      'joined',
      'meeting',
      'name',
      'usually'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>name</b>.',
        '2': '<b>joined</b>.',
        '3': '<b>usually</b>.',
        '4': '<b>Currently</b>.',
        '5': '<b>meeting</b>.'
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 1 · 6C',
      type: 'writer',
      title: 'Write your own introduction email (50–70 words)',
      instruction: 'Write a short email to your new manager. Use one present-simple and '
  + 'one present-continuous sentence.<br>Plan (fill in, then write): '
  + 'Subject: Introduction — ___ · Dear ___, · My name is ___. I am a ___ '
  + 'at ___. · I usually ___. · This week, I am ___. · I look forward to '
  + '___. · Best regards, ___<br>Phrase bank: My name is… · I am a… at… · '
  + 'I usually… · This week, I am… · I look forward to… · Best '
  + 'regards<br>☐ A subject line?<br>☐ One present-simple and one '
  + 'present-continuous sentence?<br>☐ A polite close?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Introduction — New Teller Dear Ms Nowak, My name is Ana '
        + 'Silva. I am a new teller at the Warsaw branch. I usually help '
        + 'customers with deposits and withdrawals. This week, I am learning the '
        + 'new counter system. I look forward to working with the team. Best '
        + 'regards, Ana'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short email to your new manager. Use one present-simple and '
  + 'one present-continuous sentence. Plan (fill in, then write): Subject: '
  + 'Introduction — ___ · Dear ___, · My name is ___. I am a ___ at ___. · '
  + 'I usually ___. · This week, I am ___. · I look forward to ___. · Best '
  + 'regards, ___ Phrase bank: My name is… · I am a… at… · I usually… · '
  + 'This week, I am… · I look forward to… · Best regards ☐ A subject '
  + 'line? ☐ One present-simple and one present-continuous sentence? ☐ A '
  + 'polite close? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
