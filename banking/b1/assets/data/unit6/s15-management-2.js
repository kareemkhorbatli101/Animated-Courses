/* Unit 6 §15 — Management File — Handling a Rate Query.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s15', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 7 · Management File — Handling a Rate Query (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Handling a Rate Query (2)', title: 'Part 7 · Management File — Handling a Rate Query (2)' },
  objective: 'By the end of Part 7 you can handle a rate query as a manager does: '
  + 'explain a spread without jargon, hold a line you cannot move, and '
  + 'offer what you can.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 6 · 7D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Role play — handle a rate complaint',
      instruction: 'A customer says the rate was better this morning. Handle the '
  + 'complaint professionally.<br>Card A (staff): accept the fact · '
  + 'explain without excuses · give something checkable · offer a next '
  + 'step.<br>Card B (customer): you were quoted a better rate at 9 a.m.; '
  + 'you feel the bank changed it on purpose.<br>Stretch: the customer '
  + 'asks you to give the morning rate — answer honestly and politely.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“You are right that it has moved. The rate on the board is the rate '
        + 'you get, and it is updated when the market moves. Let me write both '
        + 'numbers down so you can see today’s exactly.”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 6 · 7E',
      type: 'writer',
      title: 'Writing — a short reply about fees (50–70 words)',
      instruction: 'Write a short reply to a customer who says the fee was too '
  + 'high.<br>Plan: Dear ___, Thank you for ___. · The fee was ___, '
  + 'because ___. · The rate you received was ___. · Could you tell me '
  + 'whether ___? · Kind regards, ___<br>Phrase bank: the fee was ___ '
  + 'because… · the rate shown at… · I have attached both figures · could '
  + 'you tell me whether…<br>☐ Does it give the exact figures?<br>☐ One '
  + 'indirect question?<br>☐ No excuses?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Dear Mr Tanaka, Thank you for writing. The fee on your transfer was '
        + 'twenty, because the amount was above one thousand; below that it is a '
        + 'flat twelve. The rate you received was the sell rate shown on the '
        + 'board at 14:20. I have attached both figures. Could you tell me '
        + 'whether you would like a copy by post? Kind regards, Zeynep Kaya'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short reply to a customer who says the fee was too high. '
  + 'Plan: Dear ___, Thank you for ___. · The fee was ___, because ___. · '
  + 'The rate you received was ___. · Could you tell me whether ___? · '
  + 'Kind regards, ___ Phrase bank: the fee was ___ because… · the rate '
  + 'shown at… · I have attached both figures · could you tell me whether… '
  + '☐ Does it give the exact figures? ☐ One indirect question? ☐ No '
  + 'excuses? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
