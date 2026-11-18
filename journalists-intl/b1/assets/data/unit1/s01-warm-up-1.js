/* Unit 1 §1 — Warm-Up.

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s01', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can name the jobs in a newsroom and the '
  + 'things a newsroom works with, describe how news is made where you live, '
  + 'and talk about a story you followed recently.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 1 · W-A',
      visual: { spot: 'newsroom-plan' },
      type: 'cloze',
      title: 'Jobs and tools (brainstorm)',
      instruction: 'With a partner, list the job titles you find in a newsroom and the '
  + 'things a newsroom works with.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Job titles you know: [[1]]'
        + '<br>'
        + '2. Things a newsroom works with: [[2]]'
        + '</div>',
      answers: {
        '1': [],
        '2': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit’s '
          + 'own word list. Anything you can name is right, and Part 1 will add '
          + 'seven more.',
        '2': 'The book prints this sentence for you to complete from the unit’s '
          + 'own word list. A notebook and a recorder count; so do a deadline '
          + 'and a wire.'
      }
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 1 · W-B',
      type: 'discuss',
      title: 'News where you live (discussion)',
      instruction: 'Talk about the news where you live. Useful frame: “In my country '
  + 'most people get the news from ___, such as ___.”',
      questions: [{
            q: 'Where do most people in your country get their news?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which news organisations do people trust most, and why?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: 'W-C',
      bookRef: 'Unit 1 · W-C',
      type: 'discuss',
      title: 'A story you followed (pairs)',
      instruction: 'Share a story you followed closely in the last year.',
      questions: [{
            q: 'What was the story, and why did you follow it?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Did different news organisations report it differently? How?',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Last winter I followed a story about the new railway. Two newspapers '
        + 'gave different numbers for the cost, so I read both.'],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
