/* Unit 1 §11 — Part 3 - Responding.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s11', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 3 - Responding', part: '3', section: '11',
          lesson: 'Part 3 - Responding', title: 'Part 3 - Responding' },
  objective: 'By the end of Part 3 you can predict what a visitor at the reception desk '
        + 'will say, follow four arrival conversations closely enough to identify '
        + 'each visitor, their purpose and the department they need, choose a correct '
        + 'staff response to an opening line, and write down five reception phrases '
        + 'you can use yourself.',
  prev: 's10-listening-understand', prevLabel: 'Part 3 - Listening',
  next: 's12-dialogue-script', nextLabel: 'Part 4 - The script',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3'],
      ref: '3C',
      bookRef: 'Unit 1 · Part 3 · 3C',
      type: 'quizset',
      title: 'Choose the Correct Response',
      instruction: 'Listen to each visitor\'s opening line and choose the correct ministry '
        + 'staff response:',
      display: 'cards',
      say: true,
      items: [{
          q: '1. Good morning. I have an appointment with the Protocol Department at ten '
            + 'o\'clock.',
          options: [{ t: 'Good morning. Welcome. May I have your name and identification, please?', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 1.15.' },
            { t: 'I am here to collect my diplomatic visa. My name is Carlos Mendez.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'Thank you, Mr. Mendez. Visa collection is handled at the Consular Section. '
              + 'Please follow me to window three.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'Hello, I am a journalist. I would like to speak with the ministry '
              + 'spokesperson about the regional investment conference.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        },
        {
          q: '2. I am here to collect my diplomatic visa. My name is Carlos Mendez.',
          options: [{ t: 'Thank you, Mr. Mendez. Visa collection is handled at the Consular Section. '
              + 'Please follow me to window three.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 1.15.' },
            { t: 'Good morning. I have an appointment with the Protocol Department at ten '
              + 'o\'clock.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'Good morning. Welcome. May I have your name and identification, please?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'Hello, I am a journalist. I would like to speak with the ministry '
              + 'spokesperson about the regional investment conference.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        },
        {
          q: '3. Hello, I am a journalist. I would like to speak with the ministry '
            + 'spokesperson about the regional investment conference.',
          options: [{ t: 'Welcome. All media inquiries are handled by the Press and Information '
              + 'Office on the second floor. May I have your press credentials, please?', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 1.15.' },
            { t: 'Good morning. I have an appointment with the Protocol Department at ten '
              + 'o\'clock.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'Good morning. Welcome. May I have your name and identification, please?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'I am here to collect my diplomatic visa. My name is Carlos Mendez.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        },
        {
          q: '4. Good afternoon. I am Dr. Mensah from the World Health Organization. I '
            + 'am scheduled to meet the Humanitarian Liaison Officer.',
          options: [{ t: 'Good afternoon, Dr. Mensah. Welcome to the ministry. Please allow me to '
              + 'see your identification and I will notify the officer immediately.', ok: true,
              why: 'Right — this is the reply the book records for that visitor, in Appendix '
              + 'A, track 1.15.' },
            { t: 'Good morning. I have an appointment with the Protocol Department at ten '
              + 'o\'clock.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'Good morning. Welcome. May I have your name and identification, please?', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' },
            { t: 'I am here to collect my diplomatic visa. My name is Carlos Mendez.', ok: false,
              why: 'Not this one. It is a real line from the same recording, but it answers a '
              + 'different visitor.' }]
        }]
    },
    {
      id: 'c2',
      covers: ['Part 3'],
      ref: '3D',
      bookRef: 'Unit 1 · Part 3 · 3D',
      type: 'flashcards',
      title: 'Useful Phrases Box',
      instruction: 'Listen to and write down five phrases commonly used at the ministry '
        + 'reception desk. Then practice saying them aloud with a partner, focusing '
        + 'on a clear, professional tone.',
      scene: 'phrases-1',
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
