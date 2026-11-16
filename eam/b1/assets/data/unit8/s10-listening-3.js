/* Unit 8 §10 — Part 3 - Listening 3.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s10', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 3 - Listening 3', part: '3', section: '10',
          lesson: 'Part 3 - Listening 3', title: 'Part 3 - Listening 3' },
  objective: 'Work through Part 3 - Listening 3 of unit 8.',
  video: 'u08v10',
  prev: 's09-listening-2', prevLabel: 'Part 3 - Listening 2',
  next: 's11-speaking-model', nextLabel: 'Part 4 - Speaking, model',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 8 · Part 3', type: 'scene',
      title: 'Listen: The Service Standard',
      instruction: '<b>Before you listen:</b> why does an authorised dealer follow the '
        + 'carmaker’s rules? Press play. You can slow it down, loop a line, and turn '
        + 'the Arabic on.',
      scene: 'u8-dialogue3',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Let’s talk about our standard.',
          '2. As an authorised dealer, we have to follow the carmaker’s rules.',
          '3. Every car must pass a road test and a quality check before handover.',
          '4. You mustn’t hand over a car with any fault, however small.',
          '5. Under warranty, we must use genuine parts and record everything, '
        + 'because the carmaker checks our work.',
          '6. If there is a recall, we have to contact the owner and fix the car for '
        + 'free.',
          '7. And you mustn’t ever hide a defect from a customer — that is the worst '
        + 'thing we can do.',
          '8. Our standard is simple: every car leaves safe, and every customer is '
        + 'told the truth.',
          '9. This is why people trust an authorised dealer.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 8.4. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 8 · Part 3', type: 'dragmatch',
        title: 'The Service Standard',
        instruction: 'While you listen: match each rule with the detail. One is not needed. (0. '
          + 'is done.) Column A Column B',
        poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
        cols: 3, say: true,
        worked: { q: '0. As an authorised dealer → we follow the ', a: 'As an authorised dealer → we follow the carmaker’s rules.',
          why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
        chips: [
          { id: 'm-a', label: 'a) we must use genuine parts and record everything' },
          { id: 'm-b', label: 'b) you mustn’t ever hide it from a customer' },
          { id: 'm-c', label: 'c) we paint every car' },
          { id: 'm-d', label: 'd) every car must pass a road test and a quality check' },
          { id: 'm-e', label: 'e) we contact the owner and fix the car for free' }
        ],
        whyTitle: 'What each one means, and what it is not',
        targets: [
          { id: 't1', num: 1, label: 'Before handover', accept: 'm-d',
            why: '<b>Before handover</b> — every car must pass a road test and a quality '
          + 'check. Keep it apart from <i>Under warranty</i>, which is a different part '
          + 'of the same system. The meaning left in the pool belongs to nothing on '
          + 'this card.' },
          { id: 't2', num: 2, label: 'Under warranty', accept: 'm-a',
            why: '<b>Under warranty</b> — we must use genuine parts and record everything. '
          + 'Keep it apart from <i>Before handover</i>, which is a different part of '
          + 'the same system. The meaning left in the pool belongs to nothing on this '
          + 'card.' },
          { id: 't3', num: 3, label: 'If there is a recall', accept: 'm-e',
            why: '<b>If there is a recall</b> — we contact the owner and fix the car for '
          + 'free. Keep it apart from <i>Before handover</i>, which is a different part '
          + 'of the same system. The meaning left in the pool belongs to nothing on '
          + 'this card.' },
          { id: 't4', num: 4, label: 'A defect', accept: 'm-b',
            why: '<b>A defect</b> — you mustn’t ever hide it from a customer. Keep it apart '
          + 'from <i>Before handover</i>, which is a different part of the same system. '
          + 'The meaning left in the pool belongs to nothing on this card.' }
        ],
        after: 'The meaning left over is “we paint every car”, which belongs to nothing on '
          + 'this card.'
      }
    }
  ]
});
