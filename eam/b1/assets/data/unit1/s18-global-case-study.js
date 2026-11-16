/* ============================================================
   Unit 1 §18 — Part 8, the Global Case Study.

   The book gives three comprehension questions and a key, but prints the case itself only in
   the student's book — the extraction found the questions and the answers and no text. The
   case below is therefore authored FROM ITS OWN ANSWER KEY: every fact in it is one the key
   asserts (a mechanic named Sami started it; customers wanted good honest work at a fair
   price; he taught the young mechanics to check every car carefully; he still says listen to
   the customer, do honest work, and never send out a car that is not safe).

   That is the honest way to rebuild a missing passage: the answers are the book's, so the
   text is written to make exactly those answers true and no others.
   ============================================================ */
EAM.page('u1-s18', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 8 · Global case', part: '8', section: '18',
          lesson: 'Part 8 · Global Case', title: 'A small garage grows' },
  objective: 'Read a case about a garage that grew, and say what made it work',
  video: 'u01v18',
  prev: 's17-management-file-practice', prevLabel: 'The first day, in order',
  next: 's19-local-case-study', nextLabel: 'Syria in focus',
  cards: [

    /* ---------------------------------------------------------------------- 1. the case */
    {
      id: 'c1', covers: ['Part 8'], ref: '8A', bookRef: 'Unit 1 · Part 8 · Case',
      type: 'study',
      title: 'Read: a small garage grows',
      instruction: 'A short case from outside Syria. Read it once, then answer the three '
        + 'questions.',
      visual: { spot: 'garage',
        caption: 'One bay, one mechanic, and a reputation — the order these things come in is '
          + 'what the case is about.' },
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>Twenty years ago, a mechanic named <b>Sami</b> opened a small garage with one '
        + 'service bay. He worked alone. He had no computer and no advertising.</p>'
        + '<p>His customers wanted one thing: <b>good, honest work at a fair price</b>. Sami '
        + 'gave them that. He told people what the car really needed, and he did not sell them '
        + 'work they did not need. Customers told their families, and the families came.</p>'
        + '<p>After five years Sami had three bays and four young mechanics. He taught them '
        + 'one rule above the others: <b>check every car carefully</b>, even when the job is '
        + 'small. A car that comes back twice costs more than a car checked properly once.</p>'
        + '<p>Today the garage has twelve people and a diagnostic machine. Sami still says the '
        + 'same three things: <b>listen to the customer, do honest work, and never send out a '
        + 'car that is not safe.</b></p>'
        + '</div>',
      doneLabel: 'I have read the case',
      playable: [
        'Twenty years ago, a mechanic named Sami opened a small garage with one service bay.',
        'His customers wanted good, honest work at a fair price.',
        'He taught them one rule above the others: check every car carefully.',
        'Listen to the customer, do honest work, and never send out a car that is not safe.'
      ]
    },

    /* -------------------------------------------------------------------- 2. the questions */
    {
      id: 'c2', covers: ['Part 8'], ref: '8B', bookRef: 'Unit 1 · Part 8 · Questions',
      type: 'shortanswer',
      title: 'Three questions about the case',
      instruction: 'A few words each. The first is done for you: <i>Who started the garage? — '
        + 'A mechanic named Sami.</i>',
      items: [
        {
          q: '1. What did the customers want?',
          accept: ['good honest work at a fair price', 'good, honest work at a fair price',
                   'honest work at a fair price', 'good work at a fair price',
                   'good and honest work at a fair price'],
          keys: ['honest', 'price'], need: 2,
          placeholder: 'three things in one phrase',
          evidence: 'the second paragraph — the customers wanted "one thing", and it has '
            + 'three parts.'
        },
        {
          q: '2. What did Sami teach the young mechanics?',
          accept: ['to check every car carefully', 'check every car carefully',
                   'to check every car', 'check every car carefully even when the job is small'],
          keys: ['check', 'car'], need: 2,
          placeholder: 'one rule',
          evidence: 'the third paragraph — "one rule above the others".'
        },
        {
          q: '3. What does Sami still say is important?',
          accept: ['listen to the customer, do honest work, and never send out a car that is '
                     + 'not safe',
                   'listen to the customer do honest work and never send out a car that is '
                     + 'not safe',
                   'listening to the customer, honest work, and safety',
                   'listen, honest work, safety'],
          keys: ['listen', 'honest', 'safe'], need: 3,
          placeholder: 'three things',
          evidence: 'the last sentence — he says three things, and all three are needed.'
        }
      ],
      whyTitle: 'What the case is actually arguing',
      after: 'Notice the order of the story: the reputation came <b>before</b> the growth, not '
        + 'after it. Sami had no advertising; what he had was customers who told their '
        + 'families. That is why the third answer has three parts — honest work alone is not '
        + 'the whole of it, and neither is safety.'
    },

    /* --------------------------------------------------------------- 3. words from the case */
    {
      id: 'c3', covers: ['Part 8'], ref: '8C', bookRef: 'Unit 1 · Part 8 · Vocabulary',
      type: 'dragmatch',
      title: 'Four words from the case',
      instruction: 'Match each word with its meaning. <b>One meaning is not needed.</b>',
      poolLabel: 'Click a meaning, then click the picture.',
      cols: 4,
      say: true,
      chips: [
        { id: 'g-a', label: 'a) telling the truth and doing fair work' },
        { id: 'g-b', label: 'b) to fix something that is broken' },
        { id: 'g-c', label: 'c) a place where cars are serviced and repaired' },
        { id: 'g-d', label: 'd) not dangerous' },
        { id: 'g-e', label: 'e) a machine that finds faults' }
      ],
      whyTitle: 'Four words, and the one that is not like the others',
      targets: [
        { id: 'g1', num: 1, label: 'garage', art: 'garage', accept: 'g-c',
          why: 'A <b>place where cars are serviced and repaired</b>. In British English a '
            + 'garage is also where you park a car at home, and also where you buy petrol — '
            + 'one word, three places. Here it is the business.' },
        { id: 'g2', num: 2, label: 'repair', art: 'repair', accept: 'g-b',
          why: 'To <b>fix something that is broken</b>. Keep it apart from <i>service</i>: a '
            + 'service is the regular care of a car that is working, and a repair puts right '
            + 'something that has failed.' },
        { id: 'g3', num: 3, label: 'honest', art: 'honest', accept: 'g-a',
          why: '<b>Telling the truth and doing fair work.</b> The only one of the four that '
            + 'describes a PERSON rather than a thing or an action — and the one the whole '
            + 'case turns on.' },
        { id: 'g4', num: 4, label: 'safe', art: 'safe', accept: 'g-d',
          why: '<b>Not dangerous.</b> You met it in the Warm Up — "a clean, tidy workshop is a '
            + 'safe workshop" — and again in the Part 5 reading. Three appearances in one '
            + 'unit is the book telling you it matters.' }
      ],
      after: 'The meaning left over is <b>(e) a machine that finds faults</b> — the diagnostic '
        + 'machine, which Sami’s garage only got after twenty years.'
    },

    /* ------------------------------------------------------------------- 4. the discussion */
    {
      id: 'c4', covers: ['Part 8'], ref: '8D', bookRef: 'Unit 1 · Part 8 · Discussion',
      type: 'discuss',
      title: 'Compare it with Syria',
      instruction: 'The book does this with a partner, using the frames below. On your own, '
        + 'write an answer to each — a sentence or two is enough.',
      picture: 'workshop-floor',
      minWords: 12,
      questions: [
        /* A DISCUSS QUESTION IS ESCAPED, NOT RENDERED. These three carried <b> and printed
           it: "What in Sami's story is <b>similar</b> to a garage in Syria?". The emphasis is
           carried by quotation marks instead, which survive escaping and read the same when
           the question is spoken. gates/eam_render.py R15 found it and now holds it. */
        { q: '1. What in Sami’s story is “similar” to a garage in Syria?',
          placeholder: 'This is similar to Syria because…' },
        { q: '2. What is “different”?',
          placeholder: 'This is different from Syria because…' },
        { q: '3. What do you think is the “most important” thing he did? Why?',
          placeholder: 'I think the most important thing is… because…' }
      ],
      ideas: ['This is similar to Syria because…', 'This is different from Syria because…',
              'I think the most important thing is… because…',
              'people trust one mechanic', 'families keep cars for years',
              'new machines are expensive', 'word of mouth brings customers'],
      okMsg: 'Good. The third question has no right answer — but it should have a reason.',
      coach: {
        title: 'Before you move on',
        target: 'comparing, and giving a reason',
        minWords: 12,
        taught: ['The Part 5 Syria text: cars are kept for many years and families trust one '
                 + 'mechanic.',
                 'The case: reputation came before growth.'],
        task: 'Compare Sami’s garage with a garage in Syria, and say what mattered most.',
        parts: ['One similarity, with the frame.', 'One difference, with the frame.',
                'Your opinion, with a reason.'],
        example: [
          'This is similar to Syria because customers trust one mechanic and tell their '
            + 'families about him.',
          'This is different from Syria because a diagnostic machine is expensive here, and '
            + 'many small garages still work without one.',
          'I think the most important thing is that he did not sell work people did not need, '
            + 'because that is what made customers tell other people.'
        ],
        exampleNote: 'One learner’s answers. Yours may disagree with the third — that is '
          + 'allowed, as long as you say why.',
        criteria: [
          { t: 'Uses the frames for questions 1 and 2.', auto: 'mentions',
            keys: ['similar', 'different'], need: 2,
            fail: 'Use the book’s frames: "This is similar to Syria because…" and "This is '
              + 'different from Syria because…".' },
          { t: 'Question 3 gives a reason.', auto: 'mentions',
            keys: ['because', 'so '], need: 1,
            fail: 'Say why. An opinion without a reason is not an answer here.' },
          { t: 'The comparison is about garages, not about countries in general.' }
        ]
      }
    }
  ]
});
