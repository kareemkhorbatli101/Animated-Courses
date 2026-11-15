/* Unit 2 §14 — Part 5 - Reading, comprehension.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s14', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 5 - Reading, comprehension', part: '5', section: '14',
          lesson: 'Part 5 - Reading, comprehension', title: 'Part 5 - Reading, comprehension' },
  objective: 'Work through Part 5 - Reading, comprehension of unit 2.',
  video: 'u02v14',
  prev: 's13-reading-text', prevLabel: 'Part 5 - Reading, the text',
  next: 's15-writing-model', nextLabel: 'Part 6 - Writing, the model',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 2 · Part 5', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word from the text with its meaning. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) makes the brakes work' },
        { id: 'm-b', label: 'b) keeps the engine parts moving smoothly' },
        { id: 'm-c', label: 'c) a tool to check the oil level' },
        { id: 'm-d', label: 'd) a pipe that carries air' },
        { id: 'm-e', label: 'e) stops the engine getting too hot' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'engine oil', art: 'engine oil', accept: 'm-b',
          why: '<b>engine oil</b> — keeps the engine parts moving smoothly. Keep it apart '
        + 'from <i>coolant</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'coolant', art: 'coolant', accept: 'm-e',
          why: '<b>coolant</b> — stops the engine getting too hot. Keep it apart from '
        + '<i>engine oil</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'brake fluid', art: 'brake fluid', accept: 'm-a',
          why: '<b>brake fluid</b> — makes the brakes work. Keep it apart from <i>engine '
        + 'oil</i>, which is a different part of the same system. The meaning left in '
        + 'the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'dipstick', art: 'dipstick', accept: 'm-c',
          why: '<b>dipstick</b> — a tool to check the oil level. Keep it apart from '
        + '<i>engine oil</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a pipe that carries air”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 2 · Part 5', type: 'study',
      title: 'Read: Parts and Fluids in Syria',
      instruction: '<b>Before you read:</b> are good parts and fluids always easy to find '
        + 'where you live? Say your guess, then read and see. Press a paragraph '
        + 'button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'In Syria, good parts and fluids are not always easy to find. New cars are '
        + 'hard to import, and some parts must come from far away. So prices can be '
        + 'high, and a part is not always in the shop.' + '</p>'
        + '<p>' + 'Many garages keep a small stock of the parts they use most: oil filters, '
        + 'air filters, belts, and bottles of oil and coolant. A careful manager '
        + 'checks the stock every week and orders more before it runs out.' + '</p>'
        + '<p>' + 'Some drivers ask for genuine parts from the carmaker; others choose '
        + 'cheaper parts. A good mechanic explains the difference honestly and helps '
        + 'the customer choose.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>import</b> — to bring from another '
        + 'country</div><div><b>genuine part</b> — a part made by the '
        + 'carmaker</div><div><b>stock</b> — the parts a business keeps</div></div>',
      doneLabel: 'I have read the text',
      playable: ['In Syria, good parts and fluids are not always easy to find. New cars are '
        + 'hard to import, and some parts must come from far away. So prices can be '
        + 'hig',
        'Many garages keep a small stock of the parts they use most: oil filters, '
        + 'air filters, belts, and bottles of oil and coolant. A careful manager '
        + 'checks',
        'Some drivers ask for genuine parts from the carmaker; others choose '
        + 'cheaper parts. A good mechanic explains the difference honestly and helps '
        + 'the cust']
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 2 · Part 5', type: 'tristate',
      title: 'Parts and Fluids in Syria',
      instruction: 'Write True or False. (0. is done.) Every statement is settled by the text: '
        + 'read it again rather than answering from what you already know.',
      given: { t: 'Good parts are always easy to find in Syria.', ans: 'T', line: '1',
        why: 'Done for you. The text states it, which is what a True answer looks like.' },
      whyTitle: 'What settles each statement',
      items: [
        { t: 'Prices for some parts can be high.', ans: 'T',
          why: '<b>True.</b> The text says: “So prices can be high, and a part is not '
        + 'always in the shop.”. A statement is True when the text SAYS it, not when '
        + 'it sounds likely.' },
        { t: 'A careful manager checks the stock every week.', ans: 'T',
          why: '<b>True.</b> The text says: “A careful manager checks the stock every week '
        + 'and orders more before it runs out.”. A statement is True when the text '
        + 'SAYS it, not when it sounds likely.' },
        { t: 'Genuine parts and cheaper parts are exactly the same.', ans: 'F',
          why: '<b>False.</b> The text says: “Some drivers ask for genuine parts from the '
        + 'carmaker; others choose cheaper parts.”. The text says something that '
        + 'cannot be true at the same time — which is what makes this False rather '
        + 'than Not Given.' }
      ]
    }
  ]
});
