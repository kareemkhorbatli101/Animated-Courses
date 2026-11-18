/* Unit 1 §6 — Part 2 - Grammar, notice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s06', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 2 - Grammar, notice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'By the end of Part 2 you can tell a permanent fact about the ministry from '
        + 'a temporary situation, choose present simple or present continuous for '
        + 'each, correct the most common mistakes between the two, and use both to '
        + 'answer questions about your own work.',
  prev: 's05-vocabulary-practice', prevLabel: 'Part 1 - Practice',
  next: 's07-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2',
        'Audio 1.8'],
      ref: '2A',
      bookRef: 'Unit 1 · Part 2 · 2A',
      type: 'scene',
      title: 'Noticing Grammar',
      instruction: 'Listen carefully to this short conversation between Linh, a Vietnamese '
        + 'reception officer, and Klaus Richter, a German investor arriving at the '
        + 'ministry:',
      scene: 'u1-2a'
    },
    {
      id: 'c2',
      covers: ['Part 2'],
      ref: '2B',
      bookRef: 'Unit 1 · Part 2 · 2B',
      type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'a) Used for actions happening right now or temporary situations' + '</p>'
        + '<p>' + 'b) Used for permanent situations, habits, routines, and general facts' + '</p>'
        + '<table class="booktable">' + '<tr><th>Present Simple</th><th>Present '
          + 'Continuous</th></tr><tr><td>Example: I work at the Consular Section. / She '
          + 'usually greets visitors at nine.</td><td>Example: I am coordinating a '
          + 'delegation visit this week. / He is currently in a meeting.</td></tr>' + '</table>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['a) Used for actions happening right now or temporary situations',
        'b) Used for permanent situations, habits, routines, and general facts'],
      visual: { live: 'now-and-always', wide: true,
          caption: 'Figure 1.1 — Present simple and present continuous. Use the buttons to '
          + 'step through it.' }
    }
  ]
});
