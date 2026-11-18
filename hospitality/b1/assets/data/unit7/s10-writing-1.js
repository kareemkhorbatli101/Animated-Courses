/* Unit 7 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short handover note about a room.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 7 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Dear Mr. Sayed, your room is now ready. We have cleaned it, made the '
            + 'bed with fresh linen, and restocked the tea and coffee. We have also '
            + 'left extra towels and water for you. If you need anything else, '
            + 'please call housekeeping on 9. We hope you have a restful stay. Kind '
            + 'regards, Salma — Housekeeping.',
          say: 'Dear Mr. Sayed, your room is now ready. We have cleaned it, made the '
            + 'bed with fresh linen, and restocked the tea and coffee. We have also '
            + 'left extra towels and water for you. If you need anything else, '
            + 'please call housekeeping on 9. We hope you have a restful stay. Kind '
            + 'regards, Salma — Housekeeping.',
          role: 'course'
        },
        {
          h: 'Room 305 — one grilled chicken, one fresh salad, one pot of mint tea. '
            + 'Time ordered: 8:15 p.m. Delivered by: Lina. Note: guest is tired — '
            + 'please deliver quietly and quickly.',
          say: 'Room 305 — one grilled chicken, one fresh salad, one pot of mint tea. '
            + 'Time ordered: 8:15 p.m. Delivered by: Lina. Note: guest is tired — '
            + 'please deliver quietly and quickly.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 7 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What three things has the team done to the room?',
            model: '(any three) cleaned it, made the bed with fresh linen, restocked the '
              + 'tea and coffee.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What have they left for the guest?',
            model: 'Extra towels and water.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How can the guest contact housekeeping?',
            model: 'Call housekeeping on 9.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 7 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) tell the guest the room is ready 2) two or three things you '
              + 'have done 3) one thing you have left for them 4) a warm closing',
            say: 'Plan: 1) tell the guest the room is ready 2) two or three things you '
              + 'have done 3) one thing you have left for them 4) a warm closing',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. Write a short \'your room is ready\' message for a '
  + 'guest (40–60 words). Use the present perfect at least twice.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
