/* Unit 7 §14 — Part 5 - Reading, comprehension.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s14', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 5 - Reading, comprehension', part: '5', section: '14',
          lesson: 'Part 5 - Reading, comprehension', title: 'Part 5 - Reading, comprehension' },
  objective: 'Work through Part 5 - Reading, comprehension of unit 7.',
  video: 'u07v14',
  prev: 's13-reading-text', prevLabel: 'Part 5 - Reading, the text',
  next: 's15-writing-model', nextLabel: 'Part 6 - Writing, the model',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 7 · Part 5', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word from the text with its meaning. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) a paper showing the price before the work' },
        { id: 'm-b', label: 'b) when a time is saved for a customer’s car' },
        { id: 'm-c', label: 'c) a tool that measures pressure' },
        { id: 'm-d', label: 'd) when the finished car is given back' },
        { id: 'm-e', label: 'e) a car the garage lends the customer' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'booking', art: 'booking', accept: 'm-b',
          why: '<b>booking</b> — when a time is saved for a customer’s car. Keep it apart '
        + 'from <i>estimate</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'estimate', art: 'estimate', accept: 'm-a',
          why: '<b>estimate</b> — a paper showing the price before the work. Keep it apart '
        + 'from <i>booking</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'courtesy car', art: 'courtesy car', accept: 'm-e',
          why: '<b>courtesy car</b> — a car the garage lends the customer. Keep it apart '
        + 'from <i>booking</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'handover', accept: 'm-d',
          why: '<b>handover</b> — when the finished car is given back. Keep it apart from '
        + '<i>booking</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool that measures pressure”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 7 · Part 5', type: 'study',
      title: 'Read: Parts Delays and Power Cuts in Syria',
      instruction: '<b>Before you read:</b> what problems can a service desk in Syria have? '
        + 'Say your guess, then read and see. Press a paragraph button to hear it '
        + 'read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Running a service desk in Syria is not always easy. Sometimes a part is '
        + 'not in the country, and it has to be imported.' + '</p>'
        + '<p>' + 'This can take days or weeks, so the advisor must be honest with the '
        + 'customer about the ready time. “The part is going to take a week,” she '
        + 'might say. “I’ll call you the moment it arrives.” Power cuts are another '
        + 'problem.' + '</p>'
        + '<p>' + 'If the electricity goes off, the computer and some machines stop. So a '
        + 'good garage keeps a paper copy of every job card, and it plans the heavy '
        + 'machine work for the hours when the power is on. A generator helps too.' + '</p>'
        + '<p>' + 'The customers understand these problems, because everyone in Syria lives '
        + 'with them. What they want most is honesty: a clear estimate, a realistic '
        + 'ready time, and a phone call if things change.' + '</p>'
        + '<p>' + 'In hard conditions, good communication matters even more.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>import</b> — to bring from another '
        + 'country</div><div><b>generator</b> — a machine that makes '
        + 'electricity</div></div>',
      doneLabel: 'I have read the text',
      playable: ['Running a service desk in Syria is not always easy. Sometimes a part is '
        + 'not in the country, and it has to be imported.',
        'This can take days or weeks, so the advisor must be honest with the '
        + 'customer about the ready time. “The part is going to take a week,” she '
        + 'might say.',
        'If the electricity goes off, the computer and some machines stop. So a '
        + 'good garage keeps a paper copy of every job card, and it plans the heavy '
        + 'machin',
        'The customers understand these problems, because everyone in Syria lives '
        + 'with them. What they want most is honesty: a clear estimate, a realistic '
        + 'read',
        'In hard conditions, good communication matters even more.']
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 7 · Part 5', type: 'tristate',
      title: 'Parts Delays and Power Cuts in Syria',
      instruction: 'Write True or False. (0. is done.) Every statement is settled by the text: '
        + 'read it again rather than answering from what you already know.',
      given: { t: 'In Syria, a part is always in the country.', ans: 'T', line: '1',
        why: 'Done for you. The text states it, which is what a True answer looks like.' },
      whyTitle: 'What settles each statement',
      items: [
        { t: 'The advisor should be honest about the ready time.', ans: 'T',
          why: '<b>True.</b> The text says: “This can take days or weeks, so the advisor '
        + 'must be honest with the customer about the ready time.”. A statement is '
        + 'True when the text SAYS it, not when it sounds likely.' },
        { t: 'Power cuts can stop the computer and some machines.', ans: 'T',
          why: '<b>True.</b> The text says: “If the electricity goes off, the computer and '
        + 'some machines stop.”. A statement is True when the text SAYS it, not when '
        + 'it sounds likely.' },
        { t: 'Customers do not care about honesty.', ans: 'F',
          why: '<b>False.</b> The text says something that cannot be true at the same time '
        + '— which is what makes this False rather than Not Given.' }
      ]
    }
  ]
});
