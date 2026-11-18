/* Unit 9 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short written apology to a guest.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 9 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Dear Mr. Sayed, please accept my sincere apologies for the noise in '
            + 'your room last night. I have now moved you to a quiet corner room, '
            + '402. If you have any more trouble, please call me directly, and I '
            + 'will come at once. As a small apology, breakfast tomorrow is with our '
            + 'compliments. Thank you for your patience and understanding. Kind '
            + 'regards, Lina — Front Office.',
          say: 'Dear Mr. Sayed, please accept my sincere apologies for the noise in '
            + 'your room last night. I have now moved you to a quiet corner room, '
            + '402. If you have any more trouble, please call me directly, and I '
            + 'will come at once. As a small apology, breakfast tomorrow is with our '
            + 'compliments. Thank you for your patience and understanding. Kind '
            + 'regards, Lina — Front Office.',
          role: 'course'
        },
        {
          h: 'Complaint report. Room 210. Problem: noisy neighbours, guest could '
            + 'not sleep. Action taken: apologised, moved guest to room 402, spoke '
            + 'to neighbours, offered free breakfast. Guest now satisfied. Note: we '
            + 'should check the soundproofing between rooms 208–212.',
          say: 'Complaint report. Room 210. Problem: noisy neighbours, guest could '
            + 'not sleep. Action taken: apologised, moved guest to room 402, spoke '
            + 'to neighbours, offered free breakfast. Guest now satisfied. Note: we '
            + 'should check the soundproofing between rooms 208–212.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 9 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What is Lina apologising for?',
            model: 'The noise in the guest\'s room last night.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What has she done to solve the problem?',
            model: 'Moved him to a quiet corner room, 402.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does she offer as an apology?',
            model: 'Free breakfast (with the hotel\'s compliments).',
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
      bookRef: 'Unit 9 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) apologise sincerely 2) say what you have done / will do 3) '
              + 'offer something (a fresh meal, a discount) 4) a warm closing',
            say: 'Plan: 1) apologise sincerely 2) say what you have done / will do 3) '
              + 'offer something (a fresh meal, a discount) 4) a warm closing',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. A guest complained about a cold meal in the '
  + 'restaurant. Write a short apology note (40–60 words). Use the first '
  + 'conditional at least once.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
