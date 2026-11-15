/* ============================================================
   Unit 1 §20 — Part 10, the spiral review.

   Five gaps that reach back across the whole unit: three words from Part 1 and the two tense
   names from Part 2. The book calls it a spiral review because it is the first turn of a
   spiral — these five come back in unit 2, and unit 2's review will reach back to here.

   The second card is new and is marked `bonus` in the coverage manifest: a timed recall of
   the ten glossary words, because a review that only asks you to recognise words in a
   sentence never finds out whether you can produce them.
   ============================================================ */
EAM.page('u1-s20', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 10 · Review', part: '10', section: '20',
          lesson: 'Part 10 · Review', title: 'Spiral review' },
  objective: 'Recall the unit’s key words and name its two tenses',
  video: 'u01v20',
  prev: 's19-local-case-study', prevLabel: 'Syria in focus',
  next: 's21-can-do-glossary', nextLabel: 'Can-Do and the ten words',
  cards: [

    /* ------------------------------------------------------------------- 1. the five gaps */
    {
      id: 'c1', covers: ['Part 10'], ref: '10A', bookRef: 'Unit 1 · Part 10 · Spiral review',
      type: 'cloze',
      title: 'Complete the review',
      instruction: 'Five sentences from across the unit. The first is done for you.',
      visual: { art: 'tense-two-clocks',
        caption: 'The last two gaps are the names of these two tenses.' },
      before: '<b>0.</b> The person who repairs and services cars is a <u>mechanic</u>.',
      text: '<div style="font-size:16px;line-height:2.6">'
        + '1. The paper that lists the work to do on a car is a [[1]].<br>'
        + '2. The part that stores electricity to start the car is the [[2]].<br>'
        + '3. The place where a mechanic works is the [[3]].<br>'
        + '4. “Nabil is changing the oil now” uses the [[4]] tense.<br>'
        + '5. “The garage services cars every day” uses the [[5]] tense.'
        + '</div>',
      answers: {
        '1': ['job card', 'jobcard'],
        '2': ['battery', 'the battery'],
        '3': ['workshop', 'the workshop'],
        '4': ['present continuous', 'continuous', 'present progressive'],
        '5': ['present simple', 'simple']
      },
      bank: ['job card', 'battery', 'workshop', 'present continuous', 'present simple'],
      whyTitle: 'Where each of these came from',
      why: {
        '1': '<b>job card</b> — Part 1, and then everywhere: Rana writes one in §9, Nabil '
          + 'reads one in §8, and the Part 5 text defines it in its own second sentence.',
        '2': '<b>battery</b> — Part 1. The part most often confused with the engine, because '
          + 'both are involved in a car starting and moving.',
        '3': '<b>workshop</b> — Part 1. Not the service bay: a bay is one marked space inside '
          + 'the workshop. Both answers were accepted in §2, but here the sentence says "the '
          + 'place where a mechanic works", which is the room.',
        '4': '<b>present continuous</b> — "is changing" plus "now". Two pieces: a form of '
          + '<i>be</i>, and <i>verb-ing</i>.',
        '5': '<b>present simple</b> — "services" plus "every day". One piece, with <b>-s</b> '
          + 'because <i>the garage</i> is <i>it</i>. If you wrote these two the wrong way '
          + 'round, go back to §5: the time word decides, every time.'
      }
    },

    /* ------------------------------------------------- 2. can you produce them, not just read them */
    {
      id: 'c2', covers: ['Part 10'], ref: '10A·b', bookRef: 'Unit 1 · Part 10 · bonus',
      type: 'quizset',
      title: 'From the meaning, name the word',
      instruction: 'The other way round from §2: here you are given the meaning and have to '
        + 'find the word. This card is not in the book — it is here because recognising a word '
        + 'in a sentence is easier than producing it, and only one of those is useful in a '
        + 'workshop.',
      display: 'cards',
      say: true,
      items: [
        {
          q: '1. “The place in the workshop where one car is worked on.”',
          evidence: 'two words, and you matched a picture of it in §2.',
          options: [
            { t: 'service bay', ok: true,
              why: 'Right. One bay, one car. A workshop holds several, and the drawing in §2 '
                + 'had “bay 2” written above it.' },
            { t: 'parts store', ok: false,
              why: 'That is where the parts are kept on shelves — nothing is worked on there.' },
            { t: 'reception', ok: false,
              why: 'That is at the front, where customers arrive. No car goes in.' },
            { t: 'workshop', ok: false,
              why: 'Close, and this is the distinction worth fixing: the workshop is the whole '
                + 'room, and a service bay is one marked space inside it.' }
          ]
        },
        {
          q: '2. “It keeps the engine cool with water.”',
          evidence: 'the part with fins and a hose, under the bonnet.',
          options: [
            { t: 'battery', ok: false,
              why: 'Electricity, not water. It starts the engine; it does not cool it.' },
            { t: 'radiator', ok: true,
              why: 'Right. The fins let the heat out and the hose carries the water. In Syria, '
                + 'where summers are hot and roads dusty, it is one of the parts that matters '
                + 'most — the Part 5 Syria text says so.' },
            { t: 'filter', ok: false,
              why: 'A filter cleans air, oil or fuel. You met it in the Syria text, not here.' },
            { t: 'engine', ok: false,
              why: 'The engine is the thing being cooled, not the thing doing the cooling.' }
          ]
        },
        {
          q: '3. “The regular check and care a car needs.”',
          evidence: 'one word, and it is in the name of the department.',
          options: [
            { t: 'repair', ok: false,
              why: 'A repair fixes something that has broken. This definition is about care '
                + 'given to a car that is still working — which is the whole difference.' },
            { t: 'service', ok: true,
              why: 'Right. And notice the word does three jobs in this unit: a noun ("does the '
                + 'service"), a verb ("he services cars"), and part of "service department" '
                + 'and "service advisor".' },
            { t: 'job card', ok: false,
              why: 'That is the paper that records the work, not the work itself.' },
            { t: 'diagnosis', ok: false,
              why: 'Finding out what is wrong — the technician’s job, and a different thing '
                + 'from routine care.' }
          ]
        }
      ],
      after: 'If the second half of this card was harder than the first, that is the point. '
        + 'The glossary deck on the next screen deals the words that are not yet solid.'
    }
  ]
});
