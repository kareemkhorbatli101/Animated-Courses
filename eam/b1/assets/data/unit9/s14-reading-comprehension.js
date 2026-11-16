/* Unit 9 §14 — Part 5 - Reading, comprehension.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s14', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 5 - Reading, comprehension', part: '5', section: '14',
          lesson: 'Part 5 - Reading, comprehension', title: 'Part 5 - Reading, comprehension' },
  objective: 'Work through Part 5 - Reading, comprehension of unit 9.',
  video: 'u09v14',
  prev: 's13-reading-text', prevLabel: 'Part 5 - Reading, the text',
  next: 's15-writing-model', nextLabel: 'Part 6 - Writing, the model',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 9 · Part 5', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word from the text with its meaning. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) to find out what the problem is' },
        { id: 'm-b', label: 'b) a sign that something is wrong' },
        { id: 'm-c', label: 'c) a tool for turning bolts' },
        { id: 'm-d', label: 'd) when a car returns with the same problem' },
        { id: 'm-e', label: 'e) an old part repaired to work like new' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'symptom', art: 'symptom', accept: 'm-b',
          why: '<b>symptom</b> — a sign that something is wrong. Keep it apart from '
        + '<i>diagnose</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'diagnose', accept: 'm-a',
          why: '<b>diagnose</b> — to find out what the problem is. Keep it apart from '
        + '<i>symptom</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'reconditioned part', art: 'reconditioned part', accept: 'm-e',
          why: '<b>reconditioned part</b> — an old part repaired to work like new. Keep it '
        + 'apart from <i>symptom</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'comeback', art: 'comeback', accept: 'm-d',
          why: '<b>comeback</b> — when a car returns with the same problem. Keep it apart '
        + 'from <i>symptom</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool for turning bolts”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 9 · Part 5', type: 'study',
      title: 'Read: Keeping Old Cars on the Road in Syria',
      instruction: '<b>Before you read:</b> why is the skill to repair so important in Syria? '
        + 'Say your guess, then read and see. Press a paragraph button to hear it '
        + 'read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'In Syria, new cars are expensive and hard to import, so most people drive '
        + 'older cars and keep them for many years. This makes a good repair mechanic '
        + 'very important. When a part fails on an old car, the driver has a choice.' + '</p>'
        + '<p>' + 'A brand-new part may not be in the country, or it may be very expensive. '
        + 'So many mechanics use reconditioned parts: old parts that have been '
        + 'carefully repaired to work like new.' + '</p>'
        + '<p>' + 'A good reconditioned part is cheaper, and it is often available the same '
        + 'day. Skilled mechanics in Syria have become experts at repairing, not just '
        + 'replacing.' + '</p>'
        + '<p>' + 'They can fix things that mechanics in richer countries would simply throw '
        + 'away. This skill keeps thousands of cars safely on the road. “We don’t '
        + 'have every new part,” one mechanic says, “but we have hands and knowledge.' + '</p>'
        + '<p>' + 'A good repair is sometimes better than a new part.”' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>skilled</b> — very good at a job</div><div><b>throw '
        + 'away</b> — to put in the rubbish</div></div>',
      doneLabel: 'I have read the text',
      playable: ['In Syria, new cars are expensive and hard to import, so most people drive '
        + 'older cars and keep them for many years. This makes a good repair mechanic '
        + 'v',
        'A brand-new part may not be in the country, or it may be very expensive. '
        + 'So many mechanics use reconditioned parts: old parts that have been '
        + 'carefully',
        'A good reconditioned part is cheaper, and it is often available the same '
        + 'day. Skilled mechanics in Syria have become experts at repairing, not just '
        + 're',
        'They can fix things that mechanics in richer countries would simply throw '
        + 'away. This skill keeps thousands of cars safely on the road. “We don’t '
        + 'have',
        'A good repair is sometimes better than a new part.”']
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 9 · Part 5', type: 'tristate',
      title: 'Keeping Old Cars on the Road in Syria',
      instruction: 'Write True or False. (0. is done.) Every statement is settled by the text: '
        + 'read it again rather than answering from what you already know.',
      given: { t: 'In Syria, most people drive older cars.', ans: 'T', line: '1',
        why: 'Done for you. The text states it, which is what a True answer looks like.' },
      whyTitle: 'What settles each statement',
      items: [
        { t: 'New parts are always cheap and easy to get in Syria.', ans: 'F',
          why: '<b>False.</b> The text says: “In Syria, new cars are expensive and hard to '
        + 'import, so most people drive older cars and keep them for many years.”. '
        + 'The text says something that cannot be true at the same time — which is '
        + 'what makes this False rather than Not Given.' },
        { t: 'A reconditioned part is an old part repaired to work like new.', ans: 'T',
          why: '<b>True.</b> The text says: “So many mechanics use reconditioned parts: '
        + 'old parts that have been carefully repaired to work like new.”. A '
        + 'statement is True when the text SAYS it, not when it sounds likely.' },
        { t: 'Syrian mechanics are skilled at repairing, not just replacing.', ans: 'T',
          why: '<b>True.</b> The text says: “Skilled mechanics in Syria have become '
        + 'experts at repairing, not just replacing.”. A statement is True when the '
        + 'text SAYS it, not when it sounds likely.' }
      ]
    }
  ]
});
