/* Unit 8 §15 — Management File — Handling an Escalation.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s15', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 7 · Management File — Handling an Escalation (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Handling an Escalation (2)', title: 'Part 7 · Management File — Handling an Escalation (2)' },
  objective: 'By the end of Part 7 you can handle an escalation as a manager does: '
  + 'decide what you can settle, what must go higher, and how to tell the '
  + 'customer without promising an outcome.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 8 · 7D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Role play — support a junior colleague',
      instruction: 'A new colleague is worried that they have escalated something '
  + 'trivial. Support them and set the next steps.<br>Card A (senior): '
  + 'support · ask for the facts in order · give three clear instructions '
  + '· take the next step yourself.<br>Card B (junior): you are '
  + 'embarrassed; you are afraid the customer will notice; you want to be '
  + 'told you did the right thing.<br>Stretch: the junior asks what will '
  + 'happen to the customer — answer honestly within the rules.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“You were right to bring this to me. Nobody here has ever been in '
        + 'trouble for escalating something that turned out to be nothing. Write '
        + 'down what you saw, say nothing to the customer, and leave the rest '
        + 'with me.”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 8 · 7E',
      type: 'writer',
      title: 'Writing — a short procedure note (50–70 words)',
      instruction: 'Write a short procedure note for the team on what to do when '
  + 'something looks unusual.<br>Plan: Subject: ___ · If ___, you must '
  + '___. · You must also ___. · You mustn’t ___. · You don’t have to '
  + '___.<br>Phrase bank: you must escalate the same day · write down '
  + 'exactly what you saw · you mustn’t tell the customer · that decision '
  + 'is not yours<br>☐ A clear subject line?<br>☐ All three forms '
  + 'used?<br>☐ A clear instruction for the team?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: What to do when something looks unusual If a transaction '
        + 'looks unusual, you must escalate it to the compliance officer the '
        + 'same day. You must write down exactly what you saw, with times. You '
        + 'mustn’t tell the customer, and you mustn’t change how you serve them. '
        + 'You don’t have to decide whether it is serious — that is my job, not '
        + 'yours. Elif Demir'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short procedure note for the team on what to do when '
  + 'something looks unusual. Plan: Subject: ___ · If ___, you must ___. · '
  + 'You must also ___. · You mustn’t ___. · You don’t have to ___. Phrase '
  + 'bank: you must escalate the same day · write down exactly what you '
  + 'saw · you mustn’t tell the customer · that decision is not yours ☐ A '
  + 'clear subject line? ☐ All three forms used? ☐ A clear instruction for '
  + 'the team? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
