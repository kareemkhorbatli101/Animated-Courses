/* Unit 6 §14 — Part 5 - Reading, comprehension.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s14', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 5 - Reading, comprehension', part: '5', section: '14',
          lesson: 'Part 5 - Reading, comprehension', title: 'Part 5 - Reading, comprehension' },
  objective: 'Work through Part 5 - Reading, comprehension of unit 6.',
  video: 'u06v14',
  prev: 's13-reading-text', prevLabel: 'Part 5 - Reading, the text',
  next: 's15-writing-model', nextLabel: 'Part 6 - Writing, the model',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 6 · Part 5', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word from the text with its meaning. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) how far the car has driven' },
        { id: 'm-b', label: 'b) a plan of when to do each service' },
        { id: 'm-c', label: 'c) a tool for lifting the car' },
        { id: 'm-d', label: 'd) telling the truth' },
        { id: 'm-e', label: 'e) to move the tyres so they wear evenly' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'service schedule', art: 'service schedule', accept: 'm-b',
          why: '<b>service schedule</b> — a plan of when to do each service. Keep it apart '
        + 'from <i>mileage</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'mileage', art: 'mileage', accept: 'm-a',
          why: '<b>mileage</b> — how far the car has driven. Keep it apart from <i>service '
        + 'schedule</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'rotate', accept: 'm-e',
          why: '<b>rotate</b> — to move the tyres so they wear evenly. Keep it apart from '
        + '<i>service schedule</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'honest', art: 'honest', accept: 'm-d',
          why: '<b>honest</b> — telling the truth. Keep it apart from <i>service '
        + 'schedule</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool for lifting the car”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 6 · Part 5', type: 'study',
      title: 'Read: Honest Servicing in Damascus',
      instruction: '<b>Before you read:</b> why is a trusted mechanic so important in Syria? '
        + 'Say your guess, then read and see. Press a paragraph button to hear it '
        + 'read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'In Damascus, many drivers keep the same car for a long time, and money can '
        + 'be tight. So they need a mechanic they can trust. Maher built his good '
        + 'name on one simple rule: only do the work the car needs.' + '</p>'
        + '<p>' + 'One day, a worried customer came in. Another garage had told him he needed '
        + 'a very expensive repair. Maher checked the car carefully.' + '</p>'
        + '<p>' + 'The problem was small and cheap to fix. “You don’t need that big repair,” '
        + 'Maher said. “You need a small part, and I can fit it today.” The customer '
        + 'was very happy and surprised.' + '</p>'
        + '<p>' + 'He told all his friends, and many of them became customers too. Honest '
        + 'work is slower to bring money at first, but in Syria, where people talk '
        + 'and trust matters, it is the strongest business of all.' + '</p>'
        + '<p>' + 'A happy customer, Maher says, is the best advertisement.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>tight</b> — not much (money)</div><div><b>word of mouth</b> '
        + '— when people tell their friends</div></div>',
      doneLabel: 'I have read the text',
      playable: ['In Damascus, many drivers keep the same car for a long time, and money can '
        + 'be tight. So they need a mechanic they can trust. Maher built his good '
        + 'name',
        'One day, a worried customer came in. Another garage had told him he needed '
        + 'a very expensive repair. Maher checked the car carefully.',
        'The problem was small and cheap to fix. “You don’t need that big repair,” '
        + 'Maher said. “You need a small part, and I can fit it today.” The customer '
        + 'wa',
        'He told all his friends, and many of them became customers too. Honest '
        + 'work is slower to bring money at first, but in Syria, where people talk '
        + 'and tru',
        'A happy customer, Maher says, is the best advertisement.']
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 6 · Part 5', type: 'tristate',
      title: 'Honest Servicing in Damascus',
      instruction: 'Write True or False. (0. is done.) Every statement is settled by the text: '
        + 'read it again rather than answering from what you already know.',
      given: { t: 'In Damascus, many drivers keep the same car for a long time.', ans: 'T', line: '1',
        why: 'Done for you. The text states it, which is what a True answer looks like.' },
      whyTitle: 'What settles each statement',
      items: [
        { t: 'Maher’s rule is to do as much work as possible.', ans: 'F',
          why: '<b>False.</b> The text says: “Maher built his good name on one simple '
        + 'rule: only do the work the car needs.”. The text says something that '
        + 'cannot be true at the same time — which is what makes this False rather '
        + 'than Not Given.' },
        { t: 'The customer needed a small, cheap part, not a big repair.', ans: 'T',
          why: '<b>True.</b> The text says: ““You need a small part, and I can fit it '
        + 'today.” The customer was very happy and surprised.”. A statement is True '
        + 'when the text SAYS it, not when it sounds likely.' },
        { t: 'Honest work brought Maher more customers.', ans: 'T',
          why: '<b>True.</b> The text says: “Maher built his good name on one simple rule: '
        + 'only do the work the car needs.”. A statement is True when the text SAYS '
        + 'it, not when it sounds likely.' }
      ]
    }
  ]
});
