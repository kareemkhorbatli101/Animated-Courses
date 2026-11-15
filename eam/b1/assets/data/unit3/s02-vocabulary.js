/* Unit 3 §2 — Part 1 - Vocabulary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s02', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 1 - Vocabulary', part: '1', section: '2',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 3.',
  video: 'u03v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Part 1 - Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 3 · Part 1', type: 'dragmatch',
      title: 'Tools and Safety Terms',
      instruction: 'Match the tools with their meanings. One meaning is not needed. (0. is '
        + 'done for you.) Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      worked: { q: '0. Screwdriver → a tool for turning screws.', a: 'Screwdriver → a tool for turning screws.',
        why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
      chips: [
        { id: 'm-a', label: 'a) a box of round tool heads for different bolts' },
        { id: 'm-b', label: 'b) a strong metal stand that holds the car up safely' },
        { id: 'm-c', label: 'c) a rubber pipe that carries a fluid' },
        { id: 'm-d', label: 'd) a tool for turning nuts and bolts' },
        { id: 'm-e', label: 'e) a block that stops a wheel from rolling' },
        { id: 'm-f', label: 'f) a handle that turns a socket one way' },
        { id: 'm-g', label: 'g) a tool that tightens a bolt to the exact level' },
        { id: 'm-h', label: 'h) a wheeled tool that lifts the car' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Spanner', accept: 'm-d',
          why: '<b>Spanner</b> — a tool for turning nuts and bolts. Keep it apart from '
        + '<i>Socket set</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Socket set', accept: 'm-a',
          why: '<b>Socket set</b> — a box of round tool heads for different bolts. Keep it '
        + 'apart from <i>Spanner</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Ratchet', accept: 'm-f',
          why: '<b>Ratchet</b> — a handle that turns a socket one way. Keep it apart from '
        + '<i>Spanner</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Torque wrench', accept: 'm-g',
          why: '<b>Torque wrench</b> — a tool that tightens a bolt to the exact level. '
        + 'Keep it apart from <i>Spanner</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Trolley jack', accept: 'm-h',
          why: '<b>Trolley jack</b> — a wheeled tool that lifts the car. Keep it apart '
        + 'from <i>Spanner</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't6', num: 6, label: 'Axle stand', accept: 'm-b',
          why: '<b>Axle stand</b> — a strong metal stand that holds the car up safely. '
        + 'Keep it apart from <i>Spanner</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't7', num: 7, label: 'Wheel chock', accept: 'm-e',
          why: '<b>Wheel chock</b> — a block that stops a wheel from rolling. Keep it '
        + 'apart from <i>Spanner</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a rubber pipe that carries a fluid”, which '
        + 'belongs to nothing on this card.<div class="note" '
        + 'style="margin-top:12px"><h4>The words the book glosses '
        + 'here</h4><div><b>axle stand</b> — a strong stand that holds the car up '
        + 'safely</div><div><b>wheel chock</b> — a block that stops a wheel '
        + 'rolling</div><div><b>torque wrench</b> — tightens a bolt to the exact '
        + 'level</div></div>'
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 3 · Part 1', type: 'cloze',
      title: 'Safety Gear (PPE) Table',
      instruction: 'Complete the table. Write what each item protects and when to wear it. (0. '
        + 'is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. Safety glasses — the eyes — '
        + 'always in the workshop.</span>',
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
      bookRef: 'Unit 3 · Part 1', type: 'dragmatch',
      title: 'Personal Protective Equipment',
      instruction: 'Match each item with what it does. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) they protect your hands' },
        { id: 'm-b', label: 'b) you use it to put out a fire' },
        { id: 'm-c', label: 'c) it lifts the car up' },
        { id: 'm-d', label: 'd) they protect your eyes' },
        { id: 'm-e', label: 'e) they protect your ears from loud noise' },
        { id: 'm-f', label: 'f) they protect your body and clothes' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Safety glasses', art: 'safety-glasses', accept: 'm-d',
          why: '<b>Safety glasses</b> — they protect your eyes. Keep it apart from '
        + '<i>Gloves</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Gloves', accept: 'm-a',
          why: '<b>Gloves</b> — they protect your hands. Keep it apart from <i>Safety '
        + 'glasses</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Ear defenders', accept: 'm-e',
          why: '<b>Ear defenders</b> — they protect your ears from loud noise. Keep it '
        + 'apart from <i>Safety glasses</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Overalls', accept: 'm-f',
          why: '<b>Overalls</b> — they protect your body and clothes. Keep it apart from '
        + '<i>Safety glasses</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Fire extinguisher', accept: 'm-b',
          why: '<b>Fire extinguisher</b> — you use it to put out a fire. Keep it apart '
        + 'from <i>Safety glasses</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “it lifts the car up”, which belongs to nothing '
        + 'on this card.'
    }
  ]
});
