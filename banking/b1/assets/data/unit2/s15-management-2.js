/* Unit 2 §15 — Management File — Coaching Your Team on Service.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s15', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 7 · Management File — Coaching Your Team on Service (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Coaching Your Team on Service (2)', title: 'Part 7 · Management File — Coaching Your Team on Service (2)' },
  objective: 'By the end of Part 7 you can coach a team member on service as a '
  + 'manager does: give feedback that names the behaviour rather than the '
  + 'person, model the phrase you want to hear, and agree what changes '
  + 'next week.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 2 · 7D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Role play — coach a colleague',
      instruction: 'You are a supervisor. A new teller’s greeting is too fast and abrupt. '
  + 'Give kind, useful feedback.<br>Card A (supervisor): give one praise + '
  + 'one suggestion + offer to practise.<br>Card B (teller): listen and '
  + 'respond.<br>Stretch: the teller feels upset by the feedback — '
  + 'reassure them.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“You’re working hard, and that’s great. One thing to try is a slower, '
        + 'warmer greeting — ‘Good morning, how may I help you?’ Shall we '
        + 'practise it together?”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 2 · 7E',
      type: 'writer',
      title: 'Writing — a short feedback note (50–70 words)',
      instruction: 'Write a friendly feedback note to a team member after a busy '
  + 'day.<br>Plan: Dear ___, thank you for ___. You did well at ___. One '
  + 'thing to try next time is ___. Overall, ___. Best, ___<br>Phrase '
  + 'bank: thank you for your hard work · you did well at… · one thing to '
  + 'try next time is… · keep it up<br>☐ One clear praise?<br>☐ One kind '
  + 'suggestion?<br>☐ A warm tone?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Dear Ana, thank you for your hard work today. You stayed calm with a '
        + 'difficult customer, and your greetings were warm and friendly. One '
        + 'thing to try next time is to explain the next step a little earlier — '
        + 'it helps customers relax. Overall, you did very well. Keep it up! '
        + 'Best, Marta'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a friendly feedback note to a team member after a busy day. '
  + 'Plan: Dear ___, thank you for ___. You did well at ___. One thing to '
  + 'try next time is ___. Overall, ___. Best, ___ Phrase bank: thank you '
  + 'for your hard work · you did well at… · one thing to try next time '
  + 'is… · keep it up ☐ One clear praise? ☐ One kind suggestion? ☐ A warm '
  + 'tone? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
