/* Unit 2 §11 — Part 3 - Responding.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s11', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 3 - Responding', part: '3', section: '11',
          lesson: 'Part 3 - Responding', title: 'Part 3 - Responding' },
  objective: 'By the end of Part 3 you can predict the modal language a coordination '
        + 'call will use, follow four calls between a protocol officer and an embassy '
        + 'closely enough to extract each decision and deadline, choose a correct '
        + 'professional response to a request, and write down five coordination '
        + 'phrases.',
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
          options: [{ t: 'That is too many. You should have told us earlier.', ok: false,
              why: 'It tells the embassy it is at fault, which settles nothing. A liaison '
              + 'officer\'s first move is to find out what is actually possible - the '
              + 'room\'s capacity - and come back with an answer and a time. Note that the '
              + 'correct reply commits to both.' },
            { t: 'I will check the room capacity immediately and confirm within the hour. If '
              + 'needed, we can consider an alternative room setup.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 2.15 - and it does the two things the situation needs.' }]
        },
        {
          q: '2. Our delegation lead needs the agenda in German, not just English. Is '
            + 'that possible?',
          options: [{ t: 'The agenda is already in English. We cannot change it now.', ok: false,
              why: 'It refuses without offering anything instead. "We cannot change it now" '
              + 'ends the exchange; the professional answer accepts the request, names who '
              + 'will do the work, and says when it will arrive.' },
            { t: 'Of course. I will coordinate with our translation team and send you the '
              + 'German version by tomorrow morning — the meeting is in three days, so this '
              + 'is very manageable.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 2.15 - and it does the two things the situation needs.' }]
        },
        {
          q: '3. We need to confirm: does our delegation lead need to bring the signed '
            + 'authorization letter to the meeting tomorrow?',
          options: [{ t: 'Yes, all delegation leads must bring their signed authorization letter — '
              + 'this is required for the official record. I will include a reminder in the '
              + 'logistics note I send you today.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 2.15 - and it does the two things the situation needs.' },
            { t: 'No, you do not need to bring anything official. Just come and we will '
              + 'handle it.', ok: false,
              why: 'It waives a protocol requirement that a liaison officer has no authority '
              + 'to waive. Telling a delegation that nothing official is needed produces '
              + 'exactly the problem it was trying to avoid - at the door, on the morning, '
              + 'in front of the delegation lead.' }]
        },
        {
          q: '4. I am calling to confirm the time and location of tomorrow\'s working '
            + 'group. Can you please verify?',
          options: [{ t: 'Yes it is tomorrow. I believe it is in the morning.', ok: false,
              why: '"I believe it is in the morning" is not a confirmation. Coordination '
              + 'language has to be exact - the name of the session, the date, the time - '
              + 'because the other side will book flights and interpreters on the strength '
              + 'of it.' },
            { t: 'Certainly. The Morocco–Germany Infrastructure Working Group is confirmed '
              + 'for tomorrow, Tuesday the fourteenth, at ten o\'clock in Conference Room B '
              + 'on the second floor of the main ministry building. I will send you the '
              + 'final logistics note by end of today.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 2.15 - and it does the two things the situation needs.' }]
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
