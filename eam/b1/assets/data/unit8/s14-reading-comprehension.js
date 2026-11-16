/* Unit 8 §14 — Part 5 - Reading, comprehension.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s14', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 5 - Reading, comprehension', part: '5', section: '14',
          lesson: 'Part 5 - Reading, comprehension', title: 'Part 5 - Reading, comprehension' },
  objective: 'Work through Part 5 - Reading, comprehension of unit 8.',
  video: 'u08v14',
  prev: 's13-reading-text', prevLabel: 'Part 5 - Reading, the text',
  next: 's15-writing-model', nextLabel: 'Part 6 - Writing, the model',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 8 · Part 5', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word from the text with its meaning. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) a fault in the car' },
        { id: 'm-b', label: 'b) the final check before handover' },
        { id: 'm-c', label: 'c) a car the garage lends the customer' },
        { id: 'm-d', label: 'd) when the carmaker asks owners to bring cars in to fix a fault' },
        { id: 'm-e', label: 'e) a promise that repairs are free for a time' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'quality check', accept: 'm-b',
          why: '<b>quality check</b> — the final check before handover. Keep it apart from '
        + '<i>defect</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'defect', art: 'defect', accept: 'm-a',
          why: '<b>defect</b> — a fault in the car. Keep it apart from <i>quality '
        + 'check</i>, which is a different part of the same system. The meaning left '
        + 'in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'warranty', art: 'warranty', accept: 'm-e',
          why: '<b>warranty</b> — a promise that repairs are free for a time. Keep it '
        + 'apart from <i>quality check</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'recall', art: 'recall', accept: 'm-d',
          why: '<b>recall</b> — when the carmaker asks owners to bring cars in to fix a '
        + 'fault. Keep it apart from <i>quality check</i>, which is a different part '
        + 'of the same system. The meaning left in the pool belongs to nothing on '
        + 'this card.' }
      ],
      after: 'The meaning left over is “a car the garage lends the customer”, which '
        + 'belongs to nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 8 · Part 5', type: 'study',
      title: 'Read: An Honest Guarantee in Syria',
      instruction: '<b>Before you read:</b> why does a written guarantee mean a lot in Syria? '
        + 'Say your guess, then read and see. Press a paragraph button to hear it '
        + 'read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'In Syria, a written guarantee from a garage means a lot. Many people have '
        + 'had a bad experience: a repair that failed after a week, and a garage that '
        + 'would not help.' + '</p>'
        + '<p>' + 'So when a garage gives an honest guarantee and keeps it, customers '
        + 'remember. At Cham Motors, every repair comes with a clear guarantee.' + '</p>'
        + '<p>' + 'If the same fault comes back within the guarantee time, the customer '
        + 'doesn’t have to pay again — the garage fixes it for free. Once, a '
        + 'customer’s repair failed after ten days. He came back, worried that he '
        + 'would have to argue.' + '</p>'
        + '<p>' + 'But Maher simply said, “It’s under our guarantee. We’ll fix it today, and '
        + 'you don’t have to pay anything.” The customer was amazed and grateful. He '
        + 'became a customer for life and sent many friends.' + '</p>'
        + '<p>' + 'In a country where trust is hard to find, an honest guarantee is the '
        + 'strongest thing a garage can offer.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>guarantee</b> — a promise to put something right if it '
        + 'fails</div><div><b>argue</b> — to disagree strongly</div></div>',
      doneLabel: 'I have read the text',
      playable: ['In Syria, a written guarantee from a garage means a lot. Many people have '
        + 'had a bad experience: a repair that failed after a week, and a garage that '
        + 'w',
        'So when a garage gives an honest guarantee and keeps it, customers '
        + 'remember. At Cham Motors, every repair comes with a clear guarantee.',
        'If the same fault comes back within the guarantee time, the customer '
        + 'doesn’t have to pay again — the garage fixes it for free. Once, a '
        + 'customer’s repa',
        'But Maher simply said, “It’s under our guarantee. We’ll fix it today, and '
        + 'you don’t have to pay anything.” The customer was amazed and grateful. He '
        + 'be',
        'In a country where trust is hard to find, an honest guarantee is the '
        + 'strongest thing a garage can offer.']
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 8 · Part 5', type: 'tristate',
      title: 'An Honest Guarantee in Syria',
      instruction: 'Write True or False. (0. is done.) Every statement is settled by the text: '
        + 'read it again rather than answering from what you already know.',
      given: { t: 'In Syria, a written guarantee from a garage means a lot.', ans: 'T', line: '1',
        why: 'Done for you. The text states it, which is what a True answer looks like.' },
      whyTitle: 'What settles each statement',
      items: [
        { t: 'At Cham Motors, if the same fault comes back in the guarantee time, the '
        + 'customer pays again.', ans: 'F',
          why: '<b>False.</b> The text says: “If the same fault comes back within the '
        + 'guarantee time, the customer doesn’t have to pay again — the garage fixes '
        + 'it…”. The text says something that cannot be true at the same time — which '
        + 'is what makes this False rather than Not Given.' },
        { t: 'Maher fixed the failed repair for free.', ans: 'T',
          why: '<b>True.</b> The text says: “Many people have had a bad experience: a '
        + 'repair that failed after a week, and a garage that would not help.”. A '
        + 'statement is True when the text SAYS it, not when it sounds likely.' },
        { t: 'An honest guarantee builds trust.', ans: 'T',
          why: '<b>True.</b> The text says: “In a country where trust is hard to find, an '
        + 'honest guarantee is the strongest thing a garage can offer.”. A statement '
        + 'is True when the text SAYS it, not when it sounds likely.' }
      ]
    }
  ]
});
