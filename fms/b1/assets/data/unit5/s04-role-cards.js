/* Unit 5 §4 — Part 1 - Role cards.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s04', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 1 - Role cards', part: '1', section: '4',
          lesson: 'Part 1 - Role cards', title: 'Part 1 - Role cards' },
  objective: 'By the end of Part 1 you can use this unit\'s seven investment and '
        + 'facilitation terms correctly, read an investor\'s role card to identify '
        + 'their sector and what they need from the ministry, and match an investor '
        + 'to the ministry resources that can actually help them.',
  prev: 's03-vocabulary-match', prevLabel: 'Part 1 - Vocabulary',
  next: 's05-vocabulary-practice', nextLabel: 'Part 1 - Practice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1B',
      bookRef: 'Unit 5 · Part 1 · 1B',
      type: 'study',
      title: 'Who Am I? – Investor Role Cards',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Title: Managing Director, Richter Infrastructure GmbH (Germany)' + '</p>'
        + '<p>' + 'Background: Visited the Ministry last year as an exploratory trip. Now '
          + 'returning with a full delegation, seriously considering a joint venture in '
          + 'road construction and energy distribution. His company has 20 years of '
          + 'experience in East African and Middle Eastern infrastructure projects.' + '</p>'
        + '<p>' + 'Title: Investment Director, Gulf Development Fund, Kuwait' + '</p>'
        + '<p>' + 'Background: First visit. She represents a Gulf sovereign investment fund '
          + 'interested in agriculture and food security projects. Looking for a '
          + 'large-scale land-and-production joint venture with a guaranteed water '
          + 'rights framework.' + '</p>'
        + '<p>' + 'Title: Country Representative, United Nations Development Programme (UNDP)' + '</p>'
        + '<p>' + 'Background: Not a commercial investor — UNDP is seeking to co-design a '
          + 'public-private investment facilitation framework with the Ministry that '
          + 'would channel donor funding and private capital into the country\'s '
          + 'priority development sectors.' + '</p>'
        + '<p>' + 'Card 1:' + '</p>'
        + '<p>' + 'Card 2:' + '</p>'
        + '<p>' + 'Card 3:' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['Title: Managing Director, Richter Infrastructure GmbH (Germany)',
        'Background: Visited the Ministry last year as an exploratory trip. Now '
          + 'returning with a full delegation, seriously considering a joint venture in '
          + 'road construction and energy distribution. His company has 20 years of '
          + 'experience in East African and Middle Eastern infrastructure projects.',
        'Title: Investment Director, Gulf Development Fund, Kuwait',
        'Background: First visit. She represents a Gulf sovereign investment fund '
          + 'interested in agriculture and food security projects. Looking for a '
          + 'large-scale land-and-production joint venture with a guaranteed water '
          + 'rights framework.'],
      visual: { spot: 'visitor-badge', wide: true }
    }
  ]
});
