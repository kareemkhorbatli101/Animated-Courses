/* ============================================================
   Unit 1 §8 — Part 3, Listening 1. Audio Track 1.2.

   ONE CARD, NOT TWO. The recording is now a SCENE: Nabil, rigged and lip-synced, in the
   workshop, with EN and AR subtitles, a speed control and a loop-this-line button. `EX.scene`
   carries the text after it and the questions after that, so watching, reading and answering
   are one activity instead of three cards that happen to be about the same thing.

   THE TEXT STAYS, AND STAYS NUMBERED. The True / False / Not Given card asks which line proves
   each answer, and that question is unanswerable without numbers. Watching gives the learner
   the voice and the face; the numbered text gives them something to point at.
   ============================================================ */
EAM.page('u1-s08', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 3 · Audio 1.2', part: '3', section: '8',
          lesson: 'Part 3 · Listening', title: 'Nabil talks about his work' },
  objective: 'Judge three statements against what a mechanic says about his own day',
  video: 'u01v08',
  prev: 's07-grammar-review', prevLabel: 'Find and fix',
  next: 's09-listening-2', nextLabel: 'At reception',
  cards: [
    {
      id: 'c1', covers: ['Audio 1.2', 'Part 3'], ref: '3A/3B',
      bookRef: 'Unit 1 · Audio 1.2', type: 'scene',
      title: 'Listen: Nabil, mechanic at Cham Motors',
      instruction: '<b>Before you listen:</b> what does a mechanic do first — read the job '
        + 'card, or start the engine? Press play. You can slow it down, loop a line, and turn '
        + 'the Arabic on.',
      scene: 'u1-nabil',
      passage: {
        style: 'article',
        title: 'What Nabil said, line by line',
        paras: [
          '1. Hello, my name is Nabil. I am a mechanic at Cham Motors.',
          '2. I service and repair cars.',
          '3. First, I read the job card. Then I check the car in the service bay.',
          '4. Right now, I am changing the oil on a customer’s car.',
          '5. After that, I check the brakes and the tyres.',
          '6. I work with a young apprentice, Tarek.'
        ]
      },
      after: '<b>Useful phrases:</b> I service… · First, I… · Right now, I am…',

      quiz: {
        id: 'q1', type: 'tristate',
        title: 'True, False, or Not Given?',
        instruction: 'Judge each statement against what Nabil actually said. Then write the '
          + '<b>line number</b> that proves it. If nothing in the text settles it, the answer '
          + 'is <b>Not Given</b> and there is no line to write.',
        given: { t: 'Nabil is a mechanic.', ans: 'T', line: '1',
          why: 'Done for you. Line 1 says it in so many words — "I am a mechanic at Cham '
            + 'Motors". That is what a True answer looks like: the text states it.' },
        whyTitle: 'The three statements, and what settles each one',
        items: [
          {
            t: 'Nabil works in a bakery.',
            ans: 'F',
            hint: 'Line 1 names where he works.',
            why: '<b>False.</b> Line 1 says Cham Motors, which is a garage. The text does not '
              + 'merely fail to mention a bakery — it names a different place, and that is '
              + 'what makes this False rather than Not Given. A statement is False when the '
              + 'text says something that cannot be true at the same time.'
          },
          {
            t: 'Nabil is changing the oil right now.',
            ans: 'T',
            hint: 'One line begins with "Right now".',
            why: '<b>True.</b> Line 4, word for word. Watch his face on that line — it is the '
              + 'only one in the whole scene where he is doing something as he speaks, and the '
              + 'only one in the present continuous. Everything else he says is his routine.'
          },
          {
            t: 'Nabil works alone.',
            ans: 'F',
            hint: 'The last line names somebody else.',
            why: '<b>False.</b> Line 6: "I work with a young apprentice, Tarek." Working WITH '
              + 'somebody is the opposite of working alone, so the text settles it. If the '
              + 'text had simply never mentioned Tarek, the answer would have been Not Given — '
              + 'the difference is whether the text contradicts the statement or just says '
              + 'nothing.'
          }
        ],
        after: 'None of the three was <b>Not Given</b>, and that is worth noticing. Not Given '
          + 'is not a way of saying "I am not sure" — it means the text genuinely does not '
          + 'settle the question. "Nabil has worked here for ten years" would be Not Given: '
          + 'nothing he says makes it true or false.'
      }
    }
  ]
});
