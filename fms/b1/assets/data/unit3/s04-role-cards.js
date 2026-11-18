/* Unit 3 §4 — Part 1 - Role cards.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s04', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 1 - Role cards', part: '1', section: '4',
          lesson: 'Part 1 - Role cards', title: 'Part 1 - Role cards' },
  objective: 'By the end of Part 1 you can use this unit\'s seven policy and programme '
        + 'terms correctly, present one of your ministry\'s programmes from a role '
        + 'card, and choose professional language for a sensitive topic rather than '
        + 'avoiding it.',
  prev: 's03-vocabulary-match', prevLabel: 'Part 1 - Vocabulary',
  next: 's05-vocabulary-practice', nextLabel: 'Part 1 - Practice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1B',
      bookRef: 'Unit 3 · Part 1 · 1B',
      type: 'study',
      title: 'Role Cards – Presenting Your Ministry\'s Programs',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'You are: A Political Affairs Officer at the Ministry of Foreign Affairs' + '</p>'
        + '<p>' + 'Your audience: EU Ambassador (visiting for a first coordination meeting)' + '</p>'
        + '<p>' + 'Your topic: Regional integration progress — which agreements have entered '
          + 'into force, what frameworks have been signed, what areas remain in '
          + 'discussion.' + '</p>'
        + '<p>' + 'You are: A Consular Affairs Officer at the Ministry of Foreign Affairs' + '</p>'
        + '<p>' + 'Your audience: Representative from the International Organization for '
          + 'Migration (IOM)' + '</p>'
        + '<p>' + 'Your topic: The returning-citizens program — who it covers, how '
          + 'applications are processed, what support is provided, and what the '
          + 'ministry needs from international partners.' + '</p>'
        + '<p>' + 'You are: An Economic Affairs Specialist at the Ministry of Foreign Affairs' + '</p>'
        + '<p>' + 'Your audience: A Korean trade delegation visiting the country for the '
          + 'first time' + '</p>'
        + '<p>' + 'Your topic: National infrastructure investment priorities — which sectors, '
          + 'what frameworks exist, what guarantees are available for foreign '
          + 'investors.' + '</p>'
        + '<p>' + 'Card 1:' + '</p>'
        + '<p>' + 'Card 2:' + '</p>'
        + '<p>' + 'Card 3:' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['You are: A Political Affairs Officer at the Ministry of Foreign Affairs',
        'Your audience: EU Ambassador (visiting for a first coordination meeting)',
        'Your topic: Regional integration progress — which agreements have entered '
          + 'into force, what frameworks have been signed, what areas remain in '
          + 'discussion.',
        'You are: A Consular Affairs Officer at the Ministry of Foreign Affairs'],
      visual: { spot: 'visitor-badge', wide: true }
    }
  ]
});
