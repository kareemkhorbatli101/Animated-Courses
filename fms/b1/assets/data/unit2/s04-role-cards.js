/* Unit 2 §4 — Part 1 - Role cards.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s04', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 1 - Role cards', part: '1', section: '4',
          lesson: 'Part 1 - Role cards', title: 'Part 1 - Role cards' },
  objective: 'Work through Part 1 - Role cards of unit 2.',
  prev: 's03-vocabulary-match', prevLabel: 'Part 1 - Vocabulary',
  next: 's05-vocabulary-practice', nextLabel: 'Part 1 - Practice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1B',
      bookRef: 'Unit 2 · Part 1 · 1B',
      type: 'study',
      title: 'Scenario Cards – Liaison Officer in Action',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'You are arranging a meeting room and AV equipment for a Morocco–Japan '
          + 'bilateral working session (12 participants total; 3 require Japanese '
          + 'interpretation; PowerPoint presentation expected from the Japanese side).' + '</p>'
        + '<p>' + 'You need to arrange dietary requirements for a six-person Gulf Arab '
          + 'ministerial delegation arriving for a full-day session. The meeting '
          + 'includes a working lunch.' + '</p>'
        + '<p>' + 'You are preparing the visit schedule for a one-day visit by a three-person '
          + 'Swedish environmental NGO team coming to discuss the National Coastal '
          + 'Restoration Program.' + '</p>'
        + '<p>' + 'Card 1:' + '</p>'
        + '<p>' + 'Card 2:' + '</p>'
        + '<p>' + 'Card 3:' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['You are arranging a meeting room and AV equipment for a Morocco–Japan '
          + 'bilateral working session (12 participants total; 3 require Japanese '
          + 'interpretation; PowerPoint presentation expected from the Japanese side).',
        'You need to arrange dietary requirements for a six-person Gulf Arab '
          + 'ministerial delegation arriving for a full-day session. The meeting '
          + 'includes a working lunch.',
        'You are preparing the visit schedule for a one-day visit by a three-person '
          + 'Swedish environmental NGO team coming to discuss the National Coastal '
          + 'Restoration Program.'],
      visual: { spot: 'visitor-badge', wide: true }
    }
  ]
});
