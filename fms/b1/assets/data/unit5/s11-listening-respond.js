/* Unit 5 §11 — Part 3 - Responding.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s11', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 3 - Responding', part: '3', section: '11',
          lesson: 'Part 3 - Responding', title: 'Part 3 - Responding' },
  objective: 'By the end of Part 3 you can predict how an investment conversation will '
        + 'go, follow four investment diplomacy scenarios closely enough to identify '
        + 'each investor\'s interest and what the officer commits to, choose a '
        + 'correct officer response to an investor\'s question, and write down five '
        + 'investment phrases.',
  prev: 's10-listening-understand', prevLabel: 'Part 3 - Listening',
  next: 's12-dialogue-script', nextLabel: 'Part 4 - The script',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3'],
      ref: '3C',
      bookRef: 'Unit 5 · Part 3 · 3C',
      type: 'quizset',
      title: 'Choose the Correct Response',
      instruction: 'Listen to each investor\'s question and choose the correct ministry '
        + 'officer response:',
      display: 'cards',
      say: true,
      items: [{
          q: '1. If we decide to invest, how long will it take to get all the necessary '
            + 'approvals?',
          options: [{ t: 'If you submit through the Investment Promotion Agency, we will fast-track '
              + 'the process and target a 30-day review.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 5.15.' },
            { t: 'What happens if the legal situation changes after we have committed?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'If you sign a registered agreement, you are protected by an international '
              + 'arbitration clause that guarantees full legal recourse regardless of any '
              + 'domestic changes.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'We would commit more capital if the incentive package were stronger. Is '
              + 'there flexibility?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        },
        {
          q: '2. What happens if the legal situation changes after we have committed?',
          options: [{ t: 'If you sign a registered agreement, you are protected by an international '
              + 'arbitration clause that guarantees full legal recourse regardless of any '
              + 'domestic changes.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 5.15.' },
            { t: 'If we decide to invest, how long will it take to get all the necessary '
              + 'approvals?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'If you submit through the Investment Promotion Agency, we will fast-track '
              + 'the process and target a 30-day review.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'We would commit more capital if the incentive package were stronger. Is '
              + 'there flexibility?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        },
        {
          q: '3. We would commit more capital if the incentive package were stronger. Is '
            + 'there flexibility?',
          options: [{ t: 'If you are investing above a certain threshold, additional incentives may '
              + 'apply. I would like to arrange a meeting with our Investment Promotion '
              + 'Agency to discuss your specific situation.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 5.15.' },
            { t: 'If we decide to invest, how long will it take to get all the necessary '
              + 'approvals?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'If you submit through the Investment Promotion Agency, we will fast-track '
              + 'the process and target a 30-day review.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'What happens if the legal situation changes after we have committed?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        },
        {
          q: '4. If we sign a letter of intent now, what exactly does that commit us to?',
          options: [{ t: 'A letter of intent is a statement of serious intention — it does not '
              + 'commit you to a financial obligation, but it confirms your intent to '
              + 'proceed to feasibility study and signals that both sides will work in good '
              + 'faith toward a final agreement.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 5.15.' },
            { t: 'If we decide to invest, how long will it take to get all the necessary '
              + 'approvals?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'If you submit through the Investment Promotion Agency, we will fast-track '
              + 'the process and target a 30-day review.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'What happens if the legal situation changes after we have committed?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        }]
    },
    {
      id: 'c2',
      covers: ['Part 3'],
      ref: '3D',
      bookRef: 'Unit 5 · Part 3 · 3D',
      type: 'flashcards',
      title: 'Useful Phrases Box',
      instruction: 'Listen to and write down five phrases commonly used in investment '
        + 'diplomacy meetings at the Ministry. Then practise saying them aloud with a '
        + 'partner, focusing on a confident, professional tone.',
      scene: 'phrases-5',
      items: [{ id: 'p1', num: 1, label: '________________________________________________', at: [26, 22] },
        { id: 'p2', num: 2, label: '________________________________________________', at: [74, 22] },
        { id: 'p3', num: 3, label: '________________________________________________', at: [26, 48] },
        { id: 'p4', num: 4, label: '________________________________________________', at: [74, 48] },
        { id: 'p5', num: 5, label: '________________________________________________', at: [26, 74] }],
      readerNote: 'Each phrase is read by the officer who uses it in the recording for this '
        + 'part.'
    }
  ]
});
