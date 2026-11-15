/* Unit 4 §14 — Part 5 - Reading, comprehension.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s14', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 5 - Reading, comprehension', part: '5', section: '14',
          lesson: 'Part 5 - Reading, comprehension', title: 'Part 5 - Reading, comprehension' },
  objective: 'Work through Part 5 - Reading, comprehension of unit 4.',
  video: 'u04v14',
  prev: 's13-reading-text', prevLabel: 'Part 5 - Reading, the text',
  next: 's15-writing-model', nextLabel: 'Part 6 - Writing, the model',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 4 · Part 5', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word from the text with its meaning. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) the correct level for a reading' },
        { id: 'm-b', label: 'b) a tool that shows a measurement' },
        { id: 'm-c', label: 'c) a tool for turning bolts' },
        { id: 'm-d', label: 'd) old and used, with less tread' },
        { id: 'm-e', label: 'e) the electric power, in volts' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'gauge', accept: 'm-b',
          why: '<b>gauge</b> — a tool that shows a measurement. Keep it apart from '
        + '<i>tolerance</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'tolerance', accept: 'm-a',
          why: '<b>tolerance</b> — the correct level for a reading. Keep it apart from '
        + '<i>gauge</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'voltage', accept: 'm-e',
          why: '<b>voltage</b> — the electric power, in volts. Keep it apart from '
        + '<i>gauge</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'worn', accept: 'm-d',
          why: '<b>worn</b> — old and used, with less tread. Keep it apart from '
        + '<i>gauge</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool for turning bolts”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 4 · Part 5', type: 'study',
      title: 'Read: Servicing Cars in Syria',
      instruction: '<b>Before you read:</b> why might a car in Syria need servicing more '
        + 'often? Say your guess, then read and see. Press a paragraph button to hear '
        + 'it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Cars in Syria often work in hard conditions. The roads can be rough and '
        + 'full of holes, and there is a lot of dust. In summer, the weather is very '
        + 'hot. All of this is harder on a car than a smooth, cool road.' + '</p>'
        + '<p>' + 'So a careful mechanic in Syria checks some things more often. Dust blocks '
        + 'the air filter faster, so the filter needs changing sooner. Rough roads '
        + 'wear the tyres more quickly, so the mechanic measures the tread more '
        + 'often.' + '</p>'
        + '<p>' + 'Hot weather is harder on the battery and the coolant. A good mechanic '
        + 'knows the local roads, so he shortens the service interval a little. He '
        + 'does not follow the book exactly; he adjusts it for Syrian conditions.' + '</p>'
        + '<p>' + 'This keeps the car safer and makes it last longer.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>rough</b> — not smooth; bumpy</div><div><b>service '
        + 'interval</b> — the time or distance between services</div></div>',
      doneLabel: 'I have read the text',
      playable: ['Cars in Syria often work in hard conditions. The roads can be rough and '
        + 'full of holes, and there is a lot of dust. In summer, the weather is very '
        + 'hot.',
        'So a careful mechanic in Syria checks some things more often. Dust blocks '
        + 'the air filter faster, so the filter needs changing sooner. Rough roads '
        + 'wear',
        'Hot weather is harder on the battery and the coolant. A good mechanic '
        + 'knows the local roads, so he shortens the service interval a little. He '
        + 'does not',
        'This keeps the car safer and makes it last longer.']
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 4 · Part 5', type: 'tristate',
      title: 'Servicing Cars in Syria',
      instruction: 'Write True or False. (0. is done.) Every statement is settled by the text: '
        + 'read it again rather than answering from what you already know.',
      given: { t: 'Roads in Syria are always smooth.', ans: 'T', line: '1',
        why: 'Done for you. The text states it, which is what a True answer looks like.' },
      whyTitle: 'What settles each statement',
      items: [
        { t: 'Dust blocks the air filter faster.', ans: 'T',
          why: '<b>True.</b> The text says: “Dust blocks the air filter faster, so the '
        + 'filter needs changing sooner.”. A statement is True when the text SAYS it, '
        + 'not when it sounds likely.' },
        { t: 'The mechanic follows the book exactly, with no changes.', ans: 'F',
          why: '<b>False.</b> The text says: “He does not follow the book exactly; he '
        + 'adjusts it for Syrian conditions.”. The text says something that cannot be '
        + 'true at the same time — which is what makes this False rather than Not '
        + 'Given.' },
        { t: 'A shorter service interval keeps the car safer.', ans: 'T',
          why: '<b>True.</b> The text says: “This keeps the car safer and makes it last '
        + 'longer.”. A statement is True when the text SAYS it, not when it sounds '
        + 'likely.' }
      ]
    }
  ]
});
