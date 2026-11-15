/* Unit 3 §14 — Part 5 - Reading, comprehension.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s14', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 5 - Reading, comprehension', part: '5', section: '14',
          lesson: 'Part 5 - Reading, comprehension', title: 'Part 5 - Reading, comprehension' },
  objective: 'Work through Part 5 - Reading, comprehension of unit 3.',
  video: 'u03v14',
  prev: 's13-reading-text', prevLabel: 'Part 5 - Reading, the text',
  next: 's15-writing-model', nextLabel: 'Part 6 - Writing, the model',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 3 · Part 5', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word from the text with its meaning. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) to put a block behind a wheel so it can’t roll' },
        { id: 'm-b', label: 'b) the things you wear to protect yourself' },
        { id: 'm-c', label: 'c) a fluid that cools the engine' },
        { id: 'm-d', label: 'd) to take a wire off, to stop the power' },
        { id: 'm-e', label: 'e) a strong stand that holds the car up safely' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'safety gear', accept: 'm-b',
          why: '<b>safety gear</b> — the things you wear to protect yourself. Keep it '
        + 'apart from <i>chock</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'chock', accept: 'm-a',
          why: '<b>chock</b> — to put a block behind a wheel so it can’t roll. Keep it '
        + 'apart from <i>safety gear</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'axle stand', accept: 'm-e',
          why: '<b>axle stand</b> — a strong stand that holds the car up safely. Keep it '
        + 'apart from <i>safety gear</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'disconnect', accept: 'm-d',
          why: '<b>disconnect</b> — to take a wire off, to stop the power. Keep it apart '
        + 'from <i>safety gear</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a fluid that cools the engine”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 3 · Part 5', type: 'study',
      title: 'Read: A Family Garage in Syria',
      instruction: '<b>Before you read:</b> how can a small garage make its work safer? Say '
        + 'your guess, then read and see. Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'In a small street in Damascus, the Khalil family has run a garage for '
        + 'thirty years. For many years, the work was good, but the workshop was not '
        + 'always safe.' + '</p>'
        + '<p>' + 'Tools were on the floor, and the mechanics did not always wear gloves or '
        + 'glasses. Then the son, Samir, worked for a big dealership and learned new '
        + 'safety rules. He came home and changed the family garage step by step.' + '</p>'
        + '<p>' + 'First, he bought safety gear for everyone. Then he put up a tool board, so '
        + 'every tool had a place. Next, he bought axle stands and taught the team to '
        + 'use them.' + '</p>'
        + '<p>' + 'The garage did not become a big dealership, but it became clean and safe. '
        + '“Safety is not expensive,” Samir says. “An accident is expensive.”' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>tool board</b> — a board where every tool has its '
        + 'place</div><div><b>step by step</b> — a little at a time</div></div>',
      doneLabel: 'I have read the text',
      playable: ['In a small street in Damascus, the Khalil family has run a garage for '
        + 'thirty years. For many years, the work was good, but the workshop was not '
        + 'always',
        'Tools were on the floor, and the mechanics did not always wear gloves or '
        + 'glasses. Then the son, Samir, worked for a big dealership and learned new '
        + 'saf',
        'First, he bought safety gear for everyone. Then he put up a tool board, so '
        + 'every tool had a place. Next, he bought axle stands and taught the team to ',
        'The garage did not become a big dealership, but it became clean and safe. '
        + '“Safety is not expensive,” Samir says. “An accident is expensive.”']
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 3 · Part 5', type: 'tristate',
      title: 'A Family Garage in Syria',
      instruction: 'Write True or False. (0. is done.) Every statement is settled by the text: '
        + 'read it again rather than answering from what you already know.',
      given: { t: 'The Khalil family garage is new.', ans: 'T', line: '1',
        why: 'Done for you. The text states it, which is what a True answer looks like.' },
      whyTitle: 'What settles each statement',
      items: [
        { t: 'Samir learned safety rules at a big dealership.', ans: 'T',
          why: '<b>True.</b> The text says: “Then the son, Samir, worked for a big '
        + 'dealership and learned new safety rules.”. A statement is True when the '
        + 'text SAYS it, not when it sounds likely.' },
        { t: 'He changed the garage all at once, in one day.', ans: 'F',
          why: '<b>False.</b> The text says: “He came home and changed the family garage '
        + 'step by step.”. The text says something that cannot be true at the same '
        + 'time — which is what makes this False rather than Not Given. (step by '
        + 'step)' },
        { t: 'Samir says an accident is expensive.', ans: 'T',
          why: '<b>True.</b> The text says: ““Safety is not expensive,” Samir says.”. A '
        + 'statement is True when the text SAYS it, not when it sounds likely.' }
      ]
    }
  ]
});
