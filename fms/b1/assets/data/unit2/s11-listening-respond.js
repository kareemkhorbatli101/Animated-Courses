/* Unit 2 §11 — Part 3 - Responding.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s11', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 3 - Responding', part: '3', section: '11',
          lesson: 'Part 3 - Responding', title: 'Part 3 - Responding' },
  objective: 'Work through Part 3 - Responding of unit 2.',
  prev: 's10-listening-understand', prevLabel: 'Part 3 - Listening',
  next: 's12-dialogue-script', nextLabel: 'Part 4 - The script',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3'],
      ref: '3C',
      bookRef: 'Unit 2 · Part 3 · 3C',
      type: 'quizset',
      title: 'Choose the Correct Response',
      instruction: 'Listen to each coordination request and choose the correct professional '
        + 'ministry response:',
      display: 'cards',
      say: true,
      items: [{
          q: '1. We have two additional participants joining the delegation. Can the '
            + 'room accommodate fourteen instead of twelve?',
          options: [{ t: 'I will check the room capacity immediately and confirm within the hour. If '
              + 'needed, we can consider an alternative room setup.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 2.15.' },
            { t: 'Our delegation lead needs the agenda in German, not just English. Is that '
              + 'possible?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'Of course. I will coordinate with our translation team and send you the '
              + 'German version by tomorrow morning — the meeting is in three days, so this '
              + 'is very manageable.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'We need to confirm: does our delegation lead need to bring the signed '
              + 'authorization letter to the meeting tomorrow?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        },
        {
          q: '2. Our delegation lead needs the agenda in German, not just English. Is '
            + 'that possible?',
          options: [{ t: 'Of course. I will coordinate with our translation team and send you the '
              + 'German version by tomorrow morning — the meeting is in three days, so this '
              + 'is very manageable.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 2.15.' },
            { t: 'We have two additional participants joining the delegation. Can the room '
              + 'accommodate fourteen instead of twelve?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'I will check the room capacity immediately and confirm within the hour. If '
              + 'needed, we can consider an alternative room setup.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'We need to confirm: does our delegation lead need to bring the signed '
              + 'authorization letter to the meeting tomorrow?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        },
        {
          q: '3. We need to confirm: does our delegation lead need to bring the signed '
            + 'authorization letter to the meeting tomorrow?',
          options: [{ t: 'Yes, all delegation leads must bring their signed authorization letter — '
              + 'this is required for the official record. I will include a reminder in the '
              + 'logistics note I send you today.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 2.15.' },
            { t: 'We have two additional participants joining the delegation. Can the room '
              + 'accommodate fourteen instead of twelve?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'I will check the room capacity immediately and confirm within the hour. If '
              + 'needed, we can consider an alternative room setup.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'Our delegation lead needs the agenda in German, not just English. Is that '
              + 'possible?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        },
        {
          q: '4. I am calling to confirm the time and location of tomorrow\'s working '
            + 'group. Can you please verify?',
          options: [{ t: 'Certainly. The Morocco–Germany Infrastructure Working Group is confirmed '
              + 'for tomorrow, Tuesday the fourteenth, at ten o\'clock in Conference Room B '
              + 'on the second floor of the main ministry building. I will send you the '
              + 'final logistics note by end of today.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 2.15.' },
            { t: 'We have two additional participants joining the delegation. Can the room '
              + 'accommodate fourteen instead of twelve?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'I will check the room capacity immediately and confirm within the hour. If '
              + 'needed, we can consider an alternative room setup.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'Our delegation lead needs the agenda in German, not just English. Is that '
              + 'possible?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        }]
    },
    {
      id: 'c2',
      covers: ['Part 3'],
      ref: '3D',
      bookRef: 'Unit 2 · Part 3 · 3D',
      type: 'flashcards',
      title: 'Useful Phrases Box',
      instruction: 'Listen to and write down five professional phrases used in meeting '
        + 'coordination calls. Then practice saying them aloud with a partner, '
        + 'focusing on a clear, confident tone.',
      scene: 'phrases-2',
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
