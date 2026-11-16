/* Unit 10 §14 — Part 5 - Reading, comprehension.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s14', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 5 - Reading, comprehension', part: '5', section: '14',
          lesson: 'Part 5 - Reading, comprehension', title: 'Part 5 - Reading, comprehension' },
  objective: 'Work through Part 5 - Reading, comprehension of unit 10.',
  video: 'u10v14',
  prev: 's13-reading-text', prevLabel: 'Part 5 - Reading, the text',
  next: 's15-writing-model', nextLabel: 'Part 6 - Writing, the model',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 10 · Part 5', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word from the text with its meaning. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) to tell others something is good' },
        { id: 'm-b', label: 'b) what a customer says about the service' },
        { id: 'm-c', label: 'c) a tool that measures pressure' },
        { id: 'm-d', label: 'd) a special plan by the carmaker' },
        { id: 'm-e', label: 'e) a note from the carmaker with news or advice' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'feedback', art: 'feedback', accept: 'm-b',
          why: '<b>feedback</b> — what a customer says about the service. Keep it apart '
        + 'from <i>recommend</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'recommend', art: 'recommend', accept: 'm-a',
          why: '<b>recommend</b> — to tell others something is good. Keep it apart from '
        + '<i>feedback</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'bulletin', art: 'bulletin', accept: 'm-e',
          why: '<b>bulletin</b> — a note from the carmaker with news or advice. Keep it '
        + 'apart from <i>feedback</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'campaign', art: 'campaign', accept: 'm-d',
          why: '<b>campaign</b> — a special plan by the carmaker. Keep it apart from '
        + '<i>feedback</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool that measures pressure”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 10 · Part 5', type: 'study',
      title: 'Read: A Syrian Dealership and an International Brand',
      instruction: '<b>Before you read:</b> what does it mean for a Syrian company to become '
        + 'an authorised dealer? Say your guess, then read and see. Press a paragraph '
        + 'button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'When an international carmaker chose a Syrian company to be its authorised '
        + 'dealer, it was a proud day. But it was also a big responsibility.' + '</p>'
        + '<p>' + 'The dealership had to reach the manufacturer’s standard in everything: the '
        + 'workshop, the tools, the safety rules, and the training. Maher’s team '
        + 'worked hard.' + '</p>'
        + '<p>' + 'They followed every bulletin, used genuine parts, and recorded every job. '
        + 'When the manufacturer sent trainers, the team learned the new models '
        + 'carefully, and then they taught each other.' + '</p>'
        + '<p>' + 'Slowly, the dealership earned the manufacturer’s trust and the customers’ '
        + 'trust at the same time.' + '</p>'
        + '<p>' + 'Today, drivers know that this dealership follows the international '
        + 'standard, but with something more: the honesty and skill of Syrian '
        + 'mechanics who have kept cars running for years in hard conditions. “We '
        + 'carry a famous name,” Maher says, “but we also carry our own.' + '</p>'
        + '<p>' + 'We show the world that Syrian hands can meet any standard.”' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>responsibility</b> — a duty; something you must do '
        + 'well</div><div><b>standard</b> — an agreed correct level</div></div>',
      doneLabel: 'I have read the text',
      playable: ['When an international carmaker chose a Syrian company to be its authorised '
        + 'dealer, it was a proud day. But it was also a big responsibility.',
        'The dealership had to reach the manufacturer’s standard in everything: the '
        + 'workshop, the tools, the safety rules, and the training. Maher’s team '
        + 'worke',
        'They followed every bulletin, used genuine parts, and recorded every job. '
        + 'When the manufacturer sent trainers, the team learned the new models '
        + 'careful',
        'Slowly, the dealership earned the manufacturer’s trust and the customers’ '
        + 'trust at the same time.',
        'Today, drivers know that this dealership follows the international '
        + 'standard, but with something more: the honesty and skill of Syrian '
        + 'mechanics who ha']
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 10 · Part 5', type: 'tristate',
      title: 'A Syrian Dealership and an International Brand',
      instruction: 'Write True or False. (0. is done.) Every statement is settled by the text: '
        + 'read it again rather than answering from what you already know.',
      given: { t: 'An international carmaker chose a Syrian company as its authorised dealer.', ans: 'T', line: '1',
        why: 'Done for you. The text states it, which is what a True answer looks like.' },
      whyTitle: 'What settles each statement',
      items: [
        { t: 'Being an authorised dealer had no responsibility.', ans: 'F',
          why: '<b>False.</b> The text says: “When an international carmaker chose a '
        + 'Syrian company to be its authorised dealer, it was a proud day.”. The text '
        + 'says something that cannot be true at the same time — which is what makes '
        + 'this False rather than Not Given.' },
        { t: 'The team followed every bulletin and used genuine parts.', ans: 'T',
          why: '<b>True.</b> The text says: “They followed every bulletin, used genuine '
        + 'parts, and recorded every job.”. A statement is True when the text SAYS '
        + 'it, not when it sounds likely.' },
        { t: 'Maher is proud that Syrian hands can meet any standard.', ans: 'T',
          why: '<b>True.</b> The text says: “We show the world that Syrian hands can meet '
        + 'any standard.””. A statement is True when the text SAYS it, not when it '
        + 'sounds likely.' }
      ]
    }
  ]
});
