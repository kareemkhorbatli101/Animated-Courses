/* ============================================================
   Unit 1 §8 — Part 3, Listening 1. Audio Track 1.2.

   Nabil describes his own work. The text is the stimulus and the three statements are judged
   against it, so the text has to be ON the screen with its lines numbered: the third column
   of a True / False / Not Given card asks WHICH LINE proves it, and that question is
   unanswerable if the lines have no numbers.

   "Not Given" is the one that has to be taught rather than guessed. Statement 3 is false and
   statement 2 is true; neither is Not Given, and the card says so afterwards — a learner who
   has never seen a Not Given answer will start marking everything they are unsure of as one.
   ============================================================ */
EAM.page('u1-s08', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 3 · Audio 1.2', part: '3', section: '8',
          lesson: 'Part 3 · Listening', title: 'Nabil talks about his work' },
  objective: 'Judge three statements against what a mechanic says about his own day',
  video: 'u01v08',
  prev: 's07-grammar-review', prevLabel: 'Find and fix',
  next: 's09-listening-2', nextLabel: 'At reception',
  cards: [

    /* ------------------------------------------------------- 1. the recording, with its lines */
    {
      id: 'c1', covers: ['Audio 1.2', 'Part 3'], ref: '3A', bookRef: 'Unit 1 · Audio 1.2',
      type: 'study',
      title: 'Listen: Nabil, mechanic at Cham Motors',
      instruction: '<b>Before you listen:</b> what does a mechanic do first — read the job '
        + 'card, or start the engine? Press a line to hear it. The lines are numbered because '
        + 'the next card asks you which one proves each answer.',
      visual: { spot: 'nabil',
        caption: 'Nabil. You will hear him again in §10, and he briefs the apprentice in §17.' },
      html: '<ol style="font-size:16.5px;line-height:2.1;padding-left:26px">'
        + '<li>Hello, my name is Nabil. I am a mechanic at Cham Motors.</li>'
        + '<li>I service and repair cars.</li>'
        + '<li>First, I read the job card. Then I check the car in the service bay.</li>'
        + '<li>Right now, I am changing the oil on a customer’s car.</li>'
        + '<li>After that, I check the brakes and the tyres.</li>'
        + '<li>I work with a young apprentice, Tarek.</li>'
        + '</ol>'
        + '<p class="wc" style="margin-top:10px"><b>Useful phrases:</b> I service… · '
        + 'First, I… · Right now, I am…</p>',
      doneLabel: 'I have listened and read',
      playable: [
        'Hello, my name is Nabil. I am a mechanic at Cham Motors.',
        'I service and repair cars.',
        'First, I read the job card. Then I check the car in the service bay.',
        'Right now, I am changing the oil on a customer’s car.',
        'After that, I check the brakes and the tyres.',
        'I work with a young apprentice, Tarek.'
      ]
    },

    /* --------------------------------------------------------- 2. true, false, or not given */
    {
      id: 'c2', covers: ['Audio 1.2', 'Part 3'], ref: '3B',
      bookRef: 'Unit 1 · Audio 1.2 · True / False / Not Given', type: 'tristate',
      title: 'True, False, or Not Given?',
      instruction: 'Judge each statement against what Nabil actually said. Then write the '
        + '<b>line number</b> that proves it. If nothing in the text settles it, the answer is '
        + '<b>Not Given</b> and there is no line to write.',
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
            + 'merely fail to mention a bakery — it names a different place, and that is what '
            + 'makes this False rather than Not Given. A statement is False when the text says '
            + 'something that cannot be true at the same time.'
        },
        {
          t: 'Nabil is changing the oil right now.',
          ans: 'T',
          hint: 'One line begins with "Right now".',
          why: '<b>True.</b> Line 4, word for word. Notice the tense: "I am changing" is the '
            + 'present continuous, and it is the only line in the text that uses it — because '
            + 'it is the only thing happening at this moment. Everything else he says is his '
            + 'routine, in the present simple.'
        },
        {
          t: 'Nabil works alone.',
          ans: 'F',
          hint: 'The last line names somebody else.',
          why: '<b>False.</b> Line 6: "I work with a young apprentice, Tarek." Working WITH '
            + 'somebody is the opposite of working alone, so the text settles it. If the text '
            + 'had simply never mentioned Tarek, the answer would have been Not Given — the '
            + 'difference is whether the text contradicts the statement or just says nothing.'
        }
      ],
      after: 'None of the three was <b>Not Given</b>, and that is worth noticing. Not Given is '
        + 'not a way of saying "I am not sure" — it means the text genuinely does not settle '
        + 'the question. "Nabil has worked here for ten years" would be Not Given: nothing he '
        + 'says makes it true or false.'
    }
  ]
});
