/* Unit 3 §15 — Management File — Running the Counter.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s15', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 7 · Management File — Running the Counter (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Running the Counter (2)', title: 'Part 7 · Management File — Running the Counter (2)' },
  objective: 'By the end of Part 7 you can run a counter as a supervisor does: '
  + 'decide what to do when the queue grows, say what you need from each '
  + 'teller, and keep the checks that cannot be skipped.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 3 · 7D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Role play — hand over the counter',
      instruction: 'You are finishing your shift. Hand over the counter to a colleague '
  + 'clearly and completely.<br>Card A (leaving): say the drawer balances '
  + '· say what is low · say what is outstanding · ask for a '
  + 'countersignature.<br>Card B (arriving): ask two questions and repeat '
  + 'back what you heard.<br>Stretch: the drawer does not balance — '
  + 'explain calmly what you will do next.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“The drawer balances. There is a little change and only a few large '
        + 'notes. One customer is returning at three. Please countersign the '
        + 'float before I go.”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 3 · 7E',
      type: 'writer',
      title: 'Writing — an end-of-shift summary (50–70 words)',
      instruction: 'Write a short end-of-shift summary for the supervisor.<br>Plan: '
  + 'Subject: ___ · The drawer ___. · I served ___. · There were a few '
  + '___. · We are low on ___. · Countersigned by ___.<br>Phrase bank: the '
  + 'drawer balances · mostly deposits and withdrawals · we are low on… · '
  + 'nothing outstanding · countersigned by…<br>☐ Does it say whether the '
  + 'drawer balances?<br>☐ One quantifier used correctly?<br>☐ Anything '
  + 'outstanding named?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: End of shift — counter 2 The drawer balances. I served '
        + 'sixty-one customers today, mostly deposits and withdrawals. There '
        + 'were a few bill payments and one statement request. We are low on '
        + 'large notes, so I have ordered more for tomorrow. Nothing '
        + 'outstanding. Countersigned by Tomasz Wójcik at 16:05. Grace Otieno'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short end-of-shift summary for the supervisor. Plan: Subject: '
  + '___ · The drawer ___. · I served ___. · There were a few ___. · We '
  + 'are low on ___. · Countersigned by ___. Phrase bank: the drawer '
  + 'balances · mostly deposits and withdrawals · we are low on… · nothing '
  + 'outstanding · countersigned by… ☐ Does it say whether the drawer '
  + 'balances? ☐ One quantifier used correctly? ☐ Anything outstanding '
  + 'named? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
