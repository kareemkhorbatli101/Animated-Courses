/* Unit 5 §6 — Part 2 - Grammar, notice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s06', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 2 - Grammar, notice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'Work through Part 2 - Grammar, notice of unit 5.',
  prev: 's05-vocabulary-practice', prevLabel: 'Part 1 - Practice',
  next: 's07-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2',
        'Audio 5.8'],
      ref: '2A',
      bookRef: 'Unit 5 · Part 2 · 2A',
      type: 'scene',
      title: 'Noticing Grammar',
      instruction: 'Listen carefully to this conversation between Dawit Bekele and Klaus '
        + 'Richter during an investment briefing at the Ministry:',
      scene: 'u5-2a'
    },
    {
      id: 'c2',
      covers: ['Part 2'],
      ref: '2B',
      bookRef: 'Unit 5 · Part 2 · 2B',
      type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'a) Used for hypothetical, imagined, or unlikely situations. The speaker is '
          + 'describing something that is not happening now or is not expected to '
          + 'happen.' + '</p>'
        + '<p>' + 'b) Used for real, probable, or likely situations and their results. The '
          + 'speaker believes the condition could actually happen.' + '</p>'
        + '<table class="booktable">' + '<tr><th>First Conditional</th><th>Second '
          + 'Conditional</th></tr><tr><td>Structure: If + present simple, will + '
          + 'infinitive. Example: "If the country improves its legal framework, '
          + 'investors will commit." / "If you submit the application, we will '
          + 'fast-track it."</td><td>Structure: If + past simple, would + infinitive. '
          + 'Example: "If we restructured the package, we would attract more interest." '
          + '/ "If you opened a dedicated office, processing time would '
          + 'drop."</td></tr>' + '</table>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['a) Used for hypothetical, imagined, or unlikely situations. The speaker is '
          + 'describing something that is not happening now or is not expected to '
          + 'happen.',
        'b) Used for real, probable, or likely situations and their results. The '
          + 'speaker believes the condition could actually happen.'],
      visual: { live: 'commitment-chain', wide: true,
          caption: 'Figure 5.1 — Conditionals and the language of commitment. Use the buttons '
          + 'to step through it.' }
    }
  ]
});
