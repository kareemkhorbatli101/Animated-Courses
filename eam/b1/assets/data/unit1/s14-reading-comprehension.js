/* ============================================================
   Unit 1 §14 — Part 5, the words of the text, and Syria.

   Two exercises. The first takes four words out of the text you have just read and asks what
   they mean — in context, which is why it follows the reading rather than sitting in Part 1
   with the rest of the vocabulary.

   The second is the book's "Syria in Focus" reading, and it is the first text in the unit
   that is about the learner's own country rather than about Cham Motors. Its statements are
   True / False, so the card is the same kind as §8 — and the answers are all settled by the
   text, which is the point: an opinion about Syrian roads is not evidence.
   ============================================================ */
EAM.page('u1-s14', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 5 · Vocabulary and Syria', part: '5',
          section: '14', lesson: 'Part 5 · Reading', title: 'The words of the text, and Syria' },
  objective: 'Match four words from the reading to their meanings, and judge a text about Syria',
  video: 'u01v14',
  prev: 's13-reading-text', prevLabel: 'What is a service department?',
  next: 's15-writing-model', nextLabel: 'Four pieces to write',
  cards: [

    /* ------------------------------------------------------------- 1. vocabulary in context */
    {
      id: 'c1', covers: ['Part 5'], ref: '5C', bookRef: 'Unit 1 · Part 5 · Vocabulary in context',
      type: 'dragmatch',
      title: 'Four words from the text',
      instruction: 'Each of these four words is in the text you have just read. Match it with '
        + 'its meaning. <b>One meaning is not needed.</b>',
      poolLabel: 'Click a meaning, then click the picture. Double-click a picture to take its '
        + 'meaning off again.',
      cols: 4,
      say: true,
      chips: [
        { id: 'v-a', label: 'a) the room where mechanics work on cars' },
        { id: 'v-b', label: 'b) the paper that lists the work to do' },
        { id: 'v-c', label: 'c) a mirror for seeing behind' },
        { id: 'v-d', label: 'd) a computer that finds faults' },
        { id: 'v-e', label: 'e) the regular check and care a car needs' }
      ],
      whyTitle: 'Four words, and where each one sits in the text',
      targets: [
        { id: 'w1', num: 1, label: 'service', art: 'service', accept: 'v-e',
          why: 'The <b>regular check and care</b> a car needs. Watch this word: it is a noun '
            + 'here ("does the service"), a verb elsewhere ("he services cars"), and part of '
            + 'the name of the department. Same word, three jobs.' },
        { id: 'w2', num: 2, label: 'job card', art: 'job-card', accept: 'v-b',
          why: 'The <b>paper that lists the work to do</b> — the text defines it in its own '
            + 'next sentence, which is a habit worth learning to read for. When a text says '
            + 'something and then explains it, the explanation is usually the definition.' },
        { id: 'w3', num: 3, label: 'workshop', art: 'workshop', accept: 'v-a',
          why: 'The <b>room where mechanics work on cars</b>. One of the three areas named in '
            + 'the first paragraph. Not the service bay: a bay is one marked space inside it.' },
        { id: 'w4', num: 4, label: 'diagnostic machine', art: 'diagnostic-machine',
          accept: 'v-d',
          why: 'A <b>computer that finds faults</b>. The newest idea in the text — the '
            + 'paragraph begins "Today, many cars have a computer", which is the writer saying '
            + 'this part of the job did not exist before.' }
      ],
      after: 'The meaning left over is <b>(c) a mirror for seeing behind</b> — the rear-view '
        + 'mirror, which is not in this text at all.'
    },

    /* ---------------------------------------------------------------- 2. Syria in focus */
    {
      id: 'c2', covers: ['Part 5'], ref: '5D', bookRef: 'Unit 1 · Part 5 · Cars in Syria',
      type: 'study',
      title: 'Read: cars in Syria',
      instruction: '<b>Before you read:</b> why do people in Syria keep cars for many years? '
        + 'Say what you think, then read.',
      visual: { spot: 'garage',
        caption: 'A car kept running for twenty years is a different kind of work from a car '
          + 'serviced every year under warranty.' },
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>In Syria, people keep cars for many years. New cars are expensive and hard to '
        + '<b>import</b>, so drivers look after their old cars carefully. A good mechanic is '
        + 'very important.</p>'
        + '<p>Roads can be rough and dusty, so cars need regular servicing: clean '
        + '<b>filters</b>, good tyres, and the right oil. Many families use the same car for a '
        + 'long time, and they trust one mechanic to look after it.</p>'
        + '<p>Some cars in Syria are very old but still run well, because their owners service '
        + 'them with care.</p>'
        + '</div>'
        + '<div class="note" style="margin-top:14px"><h4>Glossary</h4>'
        + '<div><b>import</b> — to bring from another country</div>'
        + '<div><b>filter</b> — a part that cleans the air, oil, or fuel</div></div>',
      doneLabel: 'I have read it',
      playable: [
        'In Syria, people keep cars for many years.',
        'New cars are expensive and hard to import, so drivers look after their old cars carefully.',
        'Roads can be rough and dusty, so cars need regular servicing.',
        'Some cars in Syria are very old but still run well, because their owners service them with care.'
      ]
    },

    /* --------------------------------------------------------------- 3. true or false */
    {
      id: 'c3', covers: ['Part 5'], ref: '5E', bookRef: 'Unit 1 · Part 5 · True or False',
      type: 'tristate',
      title: 'True or False?',
      instruction: 'Three statements about the text above. Judge each one, and give the '
        + 'paragraph that proves it (1, 2 or 3).',
      given: { t: 'People in Syria keep cars for many years.', ans: 'T', line: '1',
        why: 'Done for you — the first sentence of paragraph 1 says exactly this.' },
      whyTitle: 'What the text settles, and how',
      items: [
        {
          t: 'New cars are cheap and easy to import in Syria.',
          ans: 'F',
          hint: 'Paragraph 1 says the opposite, in the same words turned round.',
          why: '<b>False.</b> The text says new cars are "expensive and hard to import". This '
            + 'statement reverses both halves, which is the commonest way a False statement is '
            + 'built: it keeps the words and flips the meaning. Read against the text, not '
            + 'against the shape of the sentence.'
        },
        {
          t: 'Dusty roads mean cars need regular servicing.',
          ans: 'T',
          hint: 'Paragraph 2 joins the two ideas with one word.',
          why: '<b>True.</b> Paragraph 2: "Roads can be rough and dusty, <b>so</b> cars need '
            + 'regular servicing." The word <i>so</i> is what makes this True rather than Not '
            + 'Given — the text does not just mention both things, it links them as cause and '
            + 'effect.'
        },
        {
          t: 'Old cars can still run well with good care.',
          ans: 'T',
          hint: 'The last paragraph is one sentence long, and this is it.',
          why: '<b>True.</b> "Some cars in Syria are very old but still run well, because their '
            + 'owners service them with care." Note <i>some</i>: the text does not claim every '
            + 'old car runs well, and the statement does not claim that either. When a text '
            + 'hedges and the statement hedges the same way, they agree.'
        }
      ],
      after: 'This text is the reason the course exists: where a car is kept for twenty years, '
        + 'the mechanic’s judgement matters more than the warranty book, and being able to '
        + 'explain what you did and why is part of the job.'
    }
  ]
});
