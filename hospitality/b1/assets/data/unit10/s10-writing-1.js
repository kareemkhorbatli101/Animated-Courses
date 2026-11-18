/* Unit 10 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short farewell message and a '
  + 'note reporting what a guest said.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 10 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Dear Mr. Sayed, thank you for staying at the Orient Rose Hotel. It '
            + 'was a pleasure to welcome you, and we are delighted that you enjoyed '
            + 'your stay. We have attached your receipt. If you return to Damascus, '
            + 'we would be honoured to welcome you again — and there will always be '
            + 'a warm cup of coffee waiting for you. Safe travels, and see you soon. '
            + 'Kind regards, Lina — Front Office.',
          say: 'Dear Mr. Sayed, thank you for staying at the Orient Rose Hotel. It '
            + 'was a pleasure to welcome you, and we are delighted that you enjoyed '
            + 'your stay. We have attached your receipt. If you return to Damascus, '
            + 'we would be honoured to welcome you again — and there will always be '
            + 'a warm cup of coffee waiting for you. Safe travels, and see you soon. '
            + 'Kind regards, Lina — Front Office.',
          role: 'course'
        },
        {
          h: 'Dear guest, thank you so much for your kind review. We were delighted '
            + 'that you loved the room and the warm welcome. You said the breakfast '
            + 'could be larger, and we are very grateful for that advice — we have '
            + 'already added more choices. We hope to welcome you back very soon. '
            + 'With thanks, the Orient Rose team.',
          say: 'Dear guest, thank you so much for your kind review. We were delighted '
            + 'that you loved the room and the warm welcome. You said the breakfast '
            + 'could be larger, and we are very grateful for that advice — we have '
            + 'already added more choices. We hope to welcome you back very soon. '
            + 'With thanks, the Orient Rose team.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 10 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What is Lina thanking the guest for?',
            model: 'For staying at the hotel.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What has she attached?',
            model: 'The receipt.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does she promise will be waiting for the guest?',
            model: 'A warm cup of coffee.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 10 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) thank the guest 2) report something they said (“You said…”) '
              + '3) invite them to return 4) a warm closing',
            say: 'Plan: 1) thank the guest 2) report something they said (“You said…”) '
              + '3) invite them to return 4) a warm closing',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. A guest is leaving. Write a short thank-you and '
  + 'farewell message (40–60 words). Report one thing the guest said, and '
  + 'invite them to return.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
