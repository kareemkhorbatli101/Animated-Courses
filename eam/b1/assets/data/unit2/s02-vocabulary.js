/* Unit 2 §2 — Part 1 - Vocabulary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s02', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 1 - Vocabulary', part: '1', section: '2',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 2.',
  video: 'u02v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Part 1 - Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 2 · Part 1', type: 'dragmatch',
      title: 'Systems and Fluid Terms',
      instruction: 'Match the parts with their meanings. One meaning is not needed. (0. is '
        + 'done for you.) Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      worked: { q: '0. Engine → the machine that makes the car ', a: 'Engine → the machine that makes the car move.',
        why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
      chips: [
        { id: 'm-a', label: 'a) it makes electricity while the engine runs' },
        { id: 'm-b', label: 'b) a rubber pipe that carries a fluid' },
        { id: 'm-c', label: 'c) it stores electricity to start the car' },
        { id: 'm-d', label: 'd) a tool for turning nuts and bolts' },
        { id: 'm-e', label: 'e) it cleans the air going into the engine' },
        { id: 'm-f', label: 'f) it holds coolant and lets heat escape' },
        { id: 'm-g', label: 'g) a rubber loop that turns parts in the engine' },
        { id: 'm-h', label: 'h) you use it to check the oil level' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Battery', art: 'battery', accept: 'm-c',
          why: '<b>Battery</b> — it stores electricity to start the car. Keep it apart '
        + 'from <i>Radiator</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Radiator', art: 'radiator', accept: 'm-f',
          why: '<b>Radiator</b> — it holds coolant and lets heat escape. Keep it apart '
        + 'from <i>Battery</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Alternator', accept: 'm-a',
          why: '<b>Alternator</b> — it makes electricity while the engine runs. Keep it '
        + 'apart from <i>Battery</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Belt', accept: 'm-g',
          why: '<b>Belt</b> — a rubber loop that turns parts in the engine. Keep it apart '
        + 'from <i>Battery</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Hose', accept: 'm-b',
          why: '<b>Hose</b> — a rubber pipe that carries a fluid. Keep it apart from '
        + '<i>Battery</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't6', num: 6, label: 'Dipstick', accept: 'm-h',
          why: '<b>Dipstick</b> — you use it to check the oil level. Keep it apart from '
        + '<i>Battery</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't7', num: 7, label: 'Air filter', accept: 'm-e',
          why: '<b>Air filter</b> — it cleans the air going into the engine. Keep it apart '
        + 'from <i>Battery</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool for turning nuts and bolts”, which '
        + 'belongs to nothing on this card.<div class="note" '
        + 'style="margin-top:12px"><h4>The words the book glosses '
        + 'here</h4><div><b>alternator</b> — it makes electricity while the engine '
        + 'runs</div><div><b>dipstick</b> — a tool to check the oil '
        + 'level</div><div><b>hose</b> — a rubber pipe that carries a '
        + 'fluid</div></div>'
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 2 · Part 1', type: 'cloze',
      title: 'Fluids Table',
      instruction: 'Complete the table. Write what each fluid does and where it goes. (0. is '
        + 'done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. Engine oil — keeps parts '
        + 'moving smoothly — in the engine.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '</div>',
      answers: {

      },
      whyTitle: 'How each gap was decided',
      why: {

      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 2 · Part 1', type: 'dragmatch',
      title: 'Types of Fluid',
      instruction: 'Match each fluid with what it does. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) makes the brakes work' },
        { id: 'm-b', label: 'b) keeps the engine parts moving smoothly' },
        { id: 'm-c', label: 'c) cleans the air going into the engine' },
        { id: 'm-d', label: 'd) stops the engine getting too hot' },
        { id: 'm-e', label: 'e) cleans the windscreen' },
        { id: 'm-f', label: 'f) the engine burns it to make power' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Engine oil', accept: 'm-b',
          why: '<b>Engine oil</b> — keeps the engine parts moving smoothly. Keep it apart '
        + 'from <i>Coolant</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Coolant', accept: 'm-d',
          why: '<b>Coolant</b> — stops the engine getting too hot. Keep it apart from '
        + '<i>Engine oil</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Brake fluid', accept: 'm-a',
          why: '<b>Brake fluid</b> — makes the brakes work. Keep it apart from <i>Engine '
        + 'oil</i>, which is a different part of the same system. The meaning left in '
        + 'the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Washer fluid', accept: 'm-e',
          why: '<b>Washer fluid</b> — cleans the windscreen. Keep it apart from <i>Engine '
        + 'oil</i>, which is a different part of the same system. The meaning left in '
        + 'the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Fuel', accept: 'm-f',
          why: '<b>Fuel</b> — the engine burns it to make power. Keep it apart from '
        + '<i>Engine oil</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “cleans the air going into the engine”, which '
        + 'belongs to nothing on this card.'
    }
  ]
});
