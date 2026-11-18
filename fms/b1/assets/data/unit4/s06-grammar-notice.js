/* Unit 4 §6 — Part 2 - Grammar, notice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s06', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 2 - Grammar, notice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'By the end of Part 2 you can choose the right future form for a ministry '
        + 'plan - a decision, an arrangement, an intention or a prediction - give the '
        + 'ministry example for each, correct future-form errors in a planning memo, '
        + 'and speak about commitments with the degree of certainty you actually '
        + 'mean.',
  prev: 's05-vocabulary-practice', prevLabel: 'Part 1 - Practice',
  next: 's07-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2A',
      bookRef: 'Unit 4 · Part 2 · 2A',
      type: 'highlighter',
      title: 'Noticing Grammar',
      instruction: 'Read this excerpt from an internal ministry planning memo from Daniyar '
        + 'Suleimenov to the Economic Affairs team. Notice the future expressions in '
        + 'bold.',
      textTitle: 'Noticing Grammar',
      hintText: 'Click a line to underline it. Click it again to remove it.',
      paras: [[{ i: 0, t: 'Planning Memo — Daniyar Suleimenov: Team, here is an update on our '
          + 'planning calendar. The Kazakhstan–France Academic Cooperation Framework '
          + 'will be signed on 18 June — a significant milestone for our department. We '
          + 'are meeting the French delegation on Thursday at 10 a.m. to finalize the '
          + 'implementation schedule — please prepare the briefing materials by '
          + 'Wednesday. A joint technical committee is going to oversee all program '
          + 'phases; the committee structure has already been agreed. On the question '
          + 'of the investment conference: the ministry shall release an official '
          + 'statement on the dates by Friday. Finally, I want to be clear: '
          + 'Kazakhstan\'s international partnerships are going to grow significantly '
          + 'over the next two years — our job is to be ready.' }]],
      answers: [0],
      whyTitle: 'What you have just marked',
      after: 'Read the lines you underlined together: they are the facts the questions '
        + 'on the next screen ask about.'
    },
    {
      id: 'c2',
      covers: ['Part 2'],
      ref: '2B',
      bookRef: 'Unit 4 · Part 2 · 2B',
      type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'a) The joint committee is going to hold its first session within sixty '
          + 'days of the MoU signing.' + '</p>'
        + '<p>' + 'b) The bilateral cooperation framework will bring significant new '
          + 'investment to the national infrastructure sector.' + '</p>'
        + '<p>' + 'c) The Ministry of Foreign Affairs shall issue a formal statement on the '
          + 'conference dates by Friday afternoon.' + '</p>'
        + '<table class="booktable">' + '<tr><th>Future Form</th><th>Main Use</th><th>Ministry '
          + 'Example</th></tr><tr><td>will</td><td>Prediction / spontaneous decision / '
          + 'offer / announcement</td><td></td></tr><tr><td>going to</td><td>Existing '
          + 'plan or intention decided before '
          + 'speaking</td><td></td></tr><tr><td>Present Continuous</td><td>Fixed '
          + 'arrangement in the near future (in the diary)</td><td>We are meeting the '
          + 'German delegation on Thursday at ten o\'clock to finalize the '
          + 'implementation schedule.</td></tr><tr><td>shall</td><td>Formal '
          + 'institutional statement / offer / fixed commitment</td><td></td></tr>' + '</table>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['a) The joint committee is going to hold its first session within sixty '
          + 'days of the MoU signing.',
        'b) The bilateral cooperation framework will bring significant new '
          + 'investment to the national infrastructure sector.',
        'c) The Ministry of Foreign Affairs shall issue a formal statement on the '
          + 'conference dates by Friday afternoon.'],
      visual: { live: 'if-then-gate', wide: true,
          caption: 'Figure 4.1 — Formal written structures and conditionals. Use the buttons '
          + 'to step through it.' }
    }
  ]
});
