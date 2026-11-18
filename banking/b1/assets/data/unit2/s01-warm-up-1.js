/* Unit 2 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s01', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can describe service you have '
  + 'received, good and bad, and act the same question twice - once badly '
  + 'and once well.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 2 · W-A',
      visual: { spot: 'queue' },
      type: 'discuss',
      title: 'Good and bad service (discussion)',
      instruction: 'In small groups, talk about customer service you have received.',
      questions: [{
            q: 'Think of good service you received at a bank or shop. What did the '
              + 'person do well?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Think of poor service. What went wrong?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What are three things a good bank employee should always do?',
            minWords: 6,
            rows: 2
          }],
      ideas: ['“The teller smiled, used my name, and explained each step. It was '
        + 'very good service.”'],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 2 · W-B',
      type: 'report',
      title: 'Good vs bad service (mini role-play)',
      instruction: 'In pairs, act out two short scenes (30 seconds each): the same '
  + 'question, first with bad service, then with good '
  + 'service.<br>Question: “Where do I deposit this cheque?”<br>Tip: In '
  + 'the good scene, use a greeting, a polite modal (Could / May), and an '
  + 'offer of help.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    }
  ]
});
