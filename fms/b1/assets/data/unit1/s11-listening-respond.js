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
          options: [{ t: 'Okay, go ahead to the second floor.', ok: false,
              why: 'It sends the visitor upstairs without finding out who he is. Even a '
              + 'visitor who has an appointment is identified at the desk first - that is '
              + 'what the appointment log and the security list are for. "Okay" is also too '
              + 'casual for a first contact at the ministry.' },
            { t: 'Good morning. Welcome. May I have your name and identification, please?', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 1.15 - and it does the two things the situation needs.' }]
        },
        {
          q: '2. I am here to collect my diplomatic visa. My name is Carlos Mendez.',
          options: [{ t: 'Do you already have a Vietnamese visa?', ok: false,
              why: 'He has just told you he is collecting a diplomatic visa, so this asks for '
              + 'something he has already said. It also leaves him standing at the desk: '
              + 'nothing in it tells him where visa collection happens or who will take him '
              + 'there.' },
            { t: 'Thank you, Mr. Mendez. Visa collection is handled at the Consular Section. '
              + 'Please follow me to window three.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 1.15 - and it does the two things the situation needs.' }]
        },
        {
          q: '3. Hello, I am a journalist. I would like to speak with the ministry '
            + 'spokesperson about the regional investment conference.',
          options: [{ t: 'Welcome. All media inquiries are handled by the Press and Information '
              + 'Office on the second floor. May I have your press credentials, please?', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 1.15 - and it does the two things the situation needs.' },
            { t: 'The spokesperson is not available right now. Please call tomorrow.', ok: false,
              why: 'It closes the door instead of opening the right one. Media enquiries have '
              + 'an office of their own, and a journalist turned away at a first official '
              + 'contact - with no route, no name and no accreditation step - is how a '
              + 'small problem becomes a published one.' }]
        },
        {
          q: '4. Good afternoon. I am Dr. Mensah from the World Health Organization. I '
            + 'am scheduled to meet the Humanitarian Liaison Officer.',
          options: [{ t: 'Is that meeting confirmed?', ok: false,
              why: 'It puts the doubt on the visitor. He has said the meeting is scheduled; '
              + 'checking that is the ministry\'s job, not his. The reception officer '
              + 'verifies identity and notifies the officer, rather than questioning '
              + 'whether a WHO representative is expected.' },
            { t: 'Good afternoon, Dr. Mensah. Welcome to the ministry. Please allow me to '
              + 'see your identification and I will notify the officer immediately.', ok: true,
              why: 'Right. This is the reply the recording actually contains - Appendix A, '
              + 'track 1.15 - and it does the two things the situation needs.' }]
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
