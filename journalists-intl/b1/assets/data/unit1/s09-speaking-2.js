/* Unit 1 §9 — Speaking (2).

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s09', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can introduce yourself with your name, your '
  + 'role, your beat and your current story, take either part in a '
  + 'professional exchange, and ask the questions that close an information '
  + 'gap.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 1 · 4D',
      visual: { spot: 'press-conference' },
      type: 'report',
      title: 'The press room (mingle)',
      instruction: 'You are waiting for a news conference to start. Stand up and introduce '
  + 'yourself to three classmates. Remember one thing each person is doing '
  + 'now.<br>Stretch: after each conversation, report back — “Omar is a '
  + 'stringer. He is covering a protest this week.”',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 1 · 4E',
      type: 'dragmatch',
      title: 'Newsroom small talk (functional phrases)',
      instruction: 'Match the phrase to the right moment (one is extra).<br>In pairs, '
  + 'practise a 30-second conversation with a new colleague. Use two phrases '
  + 'from above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) meeting a colleague for the first time' },
      { id: 'm-b', label: 'b) asking a new colleague how they feel' },
      { id: 'm-c', label: 'c) offering help' },
      { id: 'm-d', label: 'd) asking what someone is working on' },
      { id: 'm-e', label: 'e) apologising for a mistake in print (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“How’s your first week going?”', accept: 'm-b',
          why: '<b>“How’s your first week going?”</b> &mdash; asking a new colleague '
              + 'how they feel' },
      { id: 't2', num: 2, label: '“Can I help you with anything?”', accept: 'm-c',
          why: '<b>“Can I help you with anything?”</b> &mdash; offering help' },
      { id: 't3', num: 3, label: '“Nice to meet you.”', accept: 'm-a',
          why: '<b>“Nice to meet you.”</b> &mdash; meeting a colleague for the first '
              + 'time' },
      { id: 't4', num: 4, label: '“What are you on at the moment?”', accept: 'm-d',
          why: '<b>“What are you on at the moment?”</b> &mdash; asking what someone is '
              + 'working on. A newsroom shortening of “What are you working on?”, and '
              + 'the present continuous is what makes it mean <i>today</i>.' }],
      after: 'The extra moment — <b>e)</b> apologising for a mistake in print — is not '
        + 'small talk at all, and none of these four phrases will do it. That '
        + 'conversation needs its own language, and Unit 8 teaches it.'
    }
  ]
});
