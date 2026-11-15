/* ============================================================
   Unit 1 §2 — Part 1, Vocabulary.

   Three exercises. Two are matching cards where the drawing is the prompt; between them sits
   the table the book asks the learner to complete.

   THE TABLE'S ROWS WERE REBUILT FROM ITS OWN ANSWER KEY. The extraction kept only the worked
   row — "Mechanic — workshop — checks and repairs cars" — and lost the three empty ones. The
   answers survived, because the key prints them in full, but they had been bound to the
   PRONUNCIATION exercise two places earlier: Pronunciation has no answer of its own, so it
   matched the shape of a stray prose key and took it. The binder now refuses to let a
   listen-and-practise exercise hold a key, and the rows below are the key's own three.
   ============================================================ */
EAM.page('u1-s02', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 1', part: '1', section: '2',
          lesson: 'Part 1 · Vocabulary', title: 'The words of the workshop' },
  objective: 'Name seven things in a service department, and say who works where',
  video: 'u01v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Pronunciation',
  cards: [

    /* --------------------------------------------------- 1. the seven terms of the department */
    {
      id: 'c1', covers: ['Part 1'], ref: '1A', bookRef: 'Unit 1 · Part 1 · Column A/B',
      type: 'dragmatch',
      title: 'Match the seven words with their meanings',
      instruction: 'Drag each meaning onto the thing it describes — or click the meaning, then '
        + 'click the picture. <b>One meaning is not needed.</b> The first one is done for you.',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture '
        + 'to take its meaning off again.',
      cols: 4,
      say: true,
      worked: {
        q: '0. mechanic',
        a: 'the person who repairs and services cars',
        why: 'Done for you. Two of the seven below are not parts of a car at all — one is a '
          + 'place and one is a piece of paper — so read the first words of each meaning before '
          + 'you start: "the place…", "the paper…", "it keeps…".'
      },
      chips: [
        { id: 'm-a', label: 'a) it stores electricity to start the car' },
        { id: 'm-b', label: 'b) the place in the workshop where a car is worked on' },
        { id: 'm-c', label: 'c) the pedal you press to stop the car' },
        { id: 'm-d', label: 'd) the machine that makes the car move' },
        { id: 'm-e', label: 'e) the paper that lists the work to do on a car' },
        { id: 'm-f', label: 'f) it keeps the engine cool with water' },
        { id: 'm-g', label: 'g) the cover over the engine at the front' },
        { id: 'm-h', label: 'h) the space at the back for bags' }
      ],
      whyTitle: 'What each word means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'engine', art: 'engine', accept: 'm-d',
          why: 'The engine <b>makes the car move</b> — you matched this in the Warm Up and it '
            + 'is back on purpose. The battery (a) only starts it; the radiator (f) only keeps '
            + 'it cool. Both of those exist to serve the engine, which is why they are easy to '
            + 'confuse with it.' },
        { id: 't2', num: 2, label: 'battery', art: 'battery', accept: 'm-a',
          why: '<b>Stores electricity to start</b> the car. Note what it does NOT do: it does '
            + 'not make the car move, and it does not keep anything cool.' },
        { id: 't3', num: 3, label: 'radiator', art: 'radiator', accept: 'm-f',
          why: 'It <b>keeps the engine cool with water</b>. The drawing shows the fins that let '
            + 'the heat out and the hose that brings the water. This is the new word on this '
            + 'card — the other six you have met or can guess.' },
        { id: 't4', num: 4, label: 'bonnet', art: 'bonnet', accept: 'm-g',
          why: 'The <b>cover over the engine</b>, at the <b>front</b>. The radiator and the '
            + 'engine both live under it, which is a useful way to remember all three together.' },
        { id: 't5', num: 5, label: 'boot', art: 'boot', accept: 'm-h',
          why: 'The <b>space at the back for bags</b>. Front cover, back space — bonnet and '
            + 'boot are the pair most often swapped, so fix them by position.' },
        { id: 't6', num: 6, label: 'service bay', art: 'service-bay', accept: 'm-b',
          why: 'A <b>place</b>, not a part: the marked space in the workshop where one car is '
            + 'worked on. A workshop has several bays. Notice the meaning begins "the place in '
            + 'the workshop", which tells you it is somewhere before you read the rest.' },
        { id: 't7', num: 7, label: 'job card', art: 'job-card', accept: 'm-e',
          why: 'A <b>paper</b>, not a part and not a place: it <b>lists the work to do</b>. The '
            + 'service advisor writes it, the mechanic reads it. It is the only thing on this '
            + 'card that carries information rather than doing a job.' }
      ],
      after: 'The meaning left over is <b>(c) the pedal you press to stop the car</b> — the '
        + 'brake. You will meet the brakes again in Part 5.'
    },

    /* ------------------------------------------------- 2. the table: who works where, and does what */
    {
      id: 'c2', covers: ['Part 1'], ref: '1B', bookRef: 'Unit 1 · Part 1 · Complete the table',
      type: 'cloze',
      title: 'Complete the table: who works where, and what they do',
      instruction: 'Three people in the department. Write <b>where each one works</b> and '
        + '<b>what they do</b>. The first row is done for you.',
      visual: { art: 'service-flow',
        caption: 'The three areas of the department, named. Two of the three people below work '
          + 'in one of them; the third works where nobody touches a car.' },
      /* THE THREE PLACES ARE OFFERED, NOT HIDDEN. The picture above names them, so the card
         declares them as a bank instead of pretending they are secret — the work here is
         deciding WHO goes WHERE and what each one does, not recalling the word "workshop" for
         the fourth time. The render gate reads this declaration: a card that offers a bank may
         show its answers, and a card that does not, may not. */
      bank: ['reception', 'office', 'workshop'],
      before: 'The three places are in the bank below; the second column is yours to write. '
        + 'Spelling is marked kindly — <i>reception</i> and <i>the reception</i> both pass.',
      plain: true,
      /* WRAPPED IN .matrix-wrap SO THE TABLE SCROLLS INSIDE ITS OWN BOX. Three columns with
         real sentences in them cannot fit 360px, and a table that pushes the whole PAGE
         sideways takes the navigation with it. This way the table scrolls and nothing else
         moves. */
      text: '<div class="matrix-wrap"><table class="tbl" style="width:100%;min-width:430px;'
        + 'margin:4px 0">'
        + '<thead><tr><th style="width:30%">Person</th><th style="width:28%">Works in…</th>'
        + '<th>What they do</th></tr></thead><tbody>'
        + '<tr><td><b>0. Mechanic</b></td><td><i>workshop</i></td>'
        + '<td><i>checks and repairs cars</i></td></tr>'
        + '<tr><td><b>1. Service advisor</b></td><td>[[1]]</td><td>[[2]]</td></tr>'
        + '<tr><td><b>2. Manager</b></td><td>[[3]]</td><td>[[4]]</td></tr>'
        + '<tr><td><b>3. Diagnostic technician</b></td><td>[[5]]</td><td>[[6]]</td></tr>'
        + '</tbody></table></div>',
      answers: {
        '1': ['reception', 'the reception', 'at reception', 'reception desk'],
        '2': ['books cars in', 'books cars in, talks to customers', 'talks to customers',
              'writes job cards', 'writes the job card', 'books cars in and talks to customers'],
        '3': ['office', 'the office', 'in the office'],
        '4': ['runs the department', 'runs the service department', 'manages the department',
              'runs the garage', 'manages the team'],
        '5': ['workshop', 'the workshop', 'in the workshop'],
        '6': ['finds faults', 'finds the faults', 'finds faults with a computer',
              'uses a diagnostic machine', 'finds faults using a computer']
      },
      whyTitle: 'The three rows, and why each belongs where it does',
      why: {
        '1': '<b>reception</b>. The advisor is the first person a customer meets, so they have '
          + 'to be at the front of the building. The picture above puts reception on the left, '
          + 'before the workshop.',
        '2': '<b>Books cars in and talks to customers.</b> Writing the job card is part of it — '
          + 'that answer is accepted too. The point is that the advisor deals with PEOPLE and '
          + 'paper, not with cars.',
        '3': '<b>office</b>. The manager is the only one of the four who is not in a place '
          + 'where work is done on a car. That is what a manager is here.',
        '4': '<b>Runs the department.</b> Not "repairs cars" — in this unit Maher checks the '
          + 'job cards and runs the team, and you hear him do exactly that in §10.',
        '5': '<b>workshop</b>. The technician works on cars like the mechanic, so the same '
          + 'place. The difference is in the next box, not this one.',
        '6': '<b>Finds faults</b>, with a computer. This is the row worth remembering: a '
          + 'mechanic repairs what is known to be wrong, and a diagnostic technician works out '
          + 'WHAT is wrong in the first place. Lina does this in §10.'
      }
    },

    /* ----------------------------------------------------------- 3. the outside of the car */
    {
      id: 'c3', covers: ['Part 1'], ref: '1C', bookRef: 'Unit 1 · Part 1 · Parts of a car',
      type: 'dragmatch',
      title: 'Match the parts of a car with their descriptions',
      instruction: 'Five parts you can see from outside the car. <b>One description is not '
        + 'needed.</b>',
      poolLabel: 'Click a description, then click the picture it belongs to.',
      cols: 3,
      say: true,
      chips: [
        { id: 'd-a', label: 'a) the big glass window at the front' },
        { id: 'd-b', label: 'b) the cover over the engine' },
        { id: 'd-c', label: 'c) the mirror you use to see behind' },
        { id: 'd-d', label: 'd) the space at the back for bags' },
        { id: 'd-e', label: 'e) it turns and moves the car along the road' },
        { id: 'd-f', label: 'f) you open it to get in' }
      ],
      whyTitle: 'Five parts, from the front of the car to the back',
      targets: [
        { id: 'p1', num: 1, label: 'bonnet', art: 'bonnet', accept: 'd-b',
          why: 'The <b>cover over the engine</b>. Same word, same meaning as the card above — '
            + 'this is the third time it has appeared, and that is on purpose.' },
        { id: 'p2', num: 2, label: 'boot', art: 'boot', accept: 'd-d',
          why: 'The <b>space at the back</b>. Bonnet at the front, boot at the back.' },
        { id: 'p3', num: 3, label: 'wheel', art: 'wheel', accept: 'd-e',
          why: 'It <b>turns and moves the car along the road</b>. Careful: the TYRE is the '
            + 'rubber that touches the road, and the WHEEL is the whole round part that turns. '
            + 'Description (c) is a different thing again — a mirror.' },
        { id: 'p4', num: 4, label: 'door', art: 'door', accept: 'd-f',
          why: 'You <b>open it to get in</b>. The simplest one on the card, and the only one '
            + 'whose description says what YOU do rather than what the part does.' },
        { id: 'p5', num: 5, label: 'windscreen', art: 'windscreen', accept: 'd-a',
          why: 'The <b>big glass window at the front</b>. In American English, the '
            + '<i>windshield</i>. The wiper drawn across it is the clue: that is the glass you '
            + 'look through to drive.' }
      ],
      after: 'The description left over is <b>(c) the mirror you use to see behind</b> — the '
        + 'rear-view mirror.'
    }
  ]
});
