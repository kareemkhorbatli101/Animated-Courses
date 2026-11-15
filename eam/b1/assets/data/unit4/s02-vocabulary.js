/* Unit 4 §2 — Part 1 - Vocabulary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s02', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 1 - Vocabulary', part: '1', section: '2',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 4.',
  video: 'u04v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Part 1 - Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 4 · Part 1', type: 'dragmatch',
      title: 'Measuring and Diagnosis Terms',
      instruction: 'Match the words with their meanings. One meaning is not needed. (0. is '
        + 'done for you.) Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      worked: { q: '0. Meter → a tool that measures electricity', a: 'Meter → a tool that measures electricity.',
        why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
      chips: [
        { id: 'm-a', label: 'a) how hard the air pushes inside a tyre' },
        { id: 'm-b', label: 'b) the correct level, or the small range that is allowed' },
        { id: 'm-c', label: 'c) a block that stops a wheel rolling' },
        { id: 'm-d', label: 'd) a tool that shows a measurement' },
        { id: 'm-e', label: 'e) the number a meter or gauge shows' },
        { id: 'm-f', label: 'f) how deep the grooves on a tyre are' },
        { id: 'm-g', label: 'g) the amount of electric power, in volts' },
        { id: 'm-h', label: 'h) how hot or cold something is' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Gauge', accept: 'm-d',
          why: '<b>Gauge</b> — a tool that shows a measurement. Keep it apart from <i>Tyre '
        + 'pressure</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Tyre pressure', accept: 'm-a',
          why: '<b>Tyre pressure</b> — how hard the air pushes inside a tyre. Keep it '
        + 'apart from <i>Gauge</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Tread depth', accept: 'm-f',
          why: '<b>Tread depth</b> — how deep the grooves on a tyre are. Keep it apart '
        + 'from <i>Gauge</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Voltage', accept: 'm-g',
          why: '<b>Voltage</b> — the amount of electric power, in volts. Keep it apart '
        + 'from <i>Gauge</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Temperature', accept: 'm-h',
          why: '<b>Temperature</b> — how hot or cold something is. Keep it apart from '
        + '<i>Gauge</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't6', num: 6, label: 'Tolerance', accept: 'm-b',
          why: '<b>Tolerance</b> — the correct level, or the small range that is allowed. '
        + 'Keep it apart from <i>Gauge</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't7', num: 7, label: 'Reading', accept: 'm-e',
          why: '<b>Reading</b> — the number a meter or gauge shows. Keep it apart from '
        + '<i>Gauge</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a block that stops a wheel rolling”, which '
        + 'belongs to nothing on this card.<div class="note" '
        + 'style="margin-top:12px"><h4>The words the book glosses '
        + 'here</h4><div><b>tolerance</b> — the correct level, or allowed '
        + 'range</div><div><b>tread depth</b> — how deep a tyre’s grooves '
        + 'are</div><div><b>gauge</b> — a tool that shows a measurement</div></div>'
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 4 · Part 1', type: 'cloze',
      title: 'Measurements Table',
      instruction: 'Complete the table. Write the unit and the tool for each measurement. (0. '
        + 'is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. Tyre pressure — bar or psi '
        + '— a pressure gauge.</span>',
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
      bookRef: 'Unit 4 · Part 1', type: 'dragmatch',
      title: 'Readings and What They Tell You',
      instruction: 'Match each reading with what it tells you. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) the tyre is old and must be changed' },
        { id: 'm-b', label: 'b) the battery is weak' },
        { id: 'm-c', label: 'c) the tyre is brand new' },
        { id: 'm-d', label: 'd) the tyre needs more air' },
        { id: 'm-e', label: 'e) the engine is too hot' },
        { id: 'm-f', label: 'f) everything is within the tolerance' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Low tyre pressure', accept: 'm-d',
          why: '<b>Low tyre pressure</b> — the tyre needs more air. Keep it apart from '
        + '<i>Worn tread</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Worn tread', accept: 'm-a',
          why: '<b>Worn tread</b> — the tyre is old and must be changed. Keep it apart '
        + 'from <i>Low tyre pressure</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Low battery voltage', accept: 'm-b',
          why: '<b>Low battery voltage</b> — the battery is weak. Keep it apart from '
        + '<i>Low tyre pressure</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'High engine temperature', accept: 'm-e',
          why: '<b>High engine temperature</b> — the engine is too hot. Keep it apart from '
        + '<i>Low tyre pressure</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Correct reading', accept: 'm-f',
          why: '<b>Correct reading</b> — everything is within the tolerance. Keep it apart '
        + 'from <i>Low tyre pressure</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “the tyre is brand new”, which belongs to nothing '
        + 'on this card.'
    }
  ]
});
