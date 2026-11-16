/* Unit 1 §4 — Part 1 - Role cards.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s04', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 1 - Role cards', part: '1', section: '4',
          lesson: 'Part 1 - Role cards', title: 'Part 1 - Role cards' },
  objective: 'Work through Part 1 - Role cards of unit 1.',
  prev: 's03-vocabulary-match', prevLabel: 'Part 1 - Vocabulary',
  next: 's05-vocabulary-practice', nextLabel: 'Part 1 - Practice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1B',
      bookRef: 'Unit 1 · Part 1 · 1B',
      type: 'study',
      title: 'Who Am I? – Visitor Role Cards',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Title: Commercial Attaché, French Embassy Hanoi' + '</p>'
        + '<p>' + 'Purpose of visit: Meeting the Economic Affairs Office to explore '
          + 'investment opportunities in infrastructure and renewable energy.' + '</p>'
        + '<p>' + 'Title: Field Coordinator, UNHCR Viet Nam' + '</p>'
        + '<p>' + 'Purpose of visit: Meeting the Humanitarian Liaison Officer to coordinate '
          + 'the regional resettlement support program.' + '</p>'
        + '<p>' + 'Title: Senior Correspondent, NHK Japan (Japan\'s public broadcaster)' + '</p>'
        + '<p>' + 'Purpose of visit: Requesting press accreditation for coverage of bilateral '
          + 'diplomatic events over the next three weeks.' + '</p>'
        + '<p>' + 'Card 1:' + '</p>'
        + '<p>' + 'Card 2:' + '</p>'
        + '<p>' + 'Card 3:' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['Title: Commercial Attaché, French Embassy Hanoi',
        'Purpose of visit: Meeting the Economic Affairs Office to explore '
          + 'investment opportunities in infrastructure and renewable energy.',
        'Title: Field Coordinator, UNHCR Viet Nam',
        'Purpose of visit: Meeting the Humanitarian Liaison Officer to coordinate '
          + 'the regional resettlement support program.'],
      visual: { spot: 'visitor-badge', wide: true }
    }
  ]
});
