/* Unit 3 §6 — Part 2 - Grammar, notice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s06', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 2 - Grammar, notice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'By the end of Part 2 you can tell the active voice from the passive in '
        + 'official writing, form the passive in the tenses this unit uses, correct '
        + 'passive errors - including recognising the sentence that is already '
        + 'correct and explaining why - and use the passive to say what a ministry '
        + 'has done without naming who did it.',
  prev: 's05-vocabulary-practice', prevLabel: 'Part 1 - Practice',
  next: 's07-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2A',
      bookRef: 'Unit 3 · Part 2 · 2A',
      type: 'highlighter',
      title: 'Noticing Grammar',
      instruction: 'Read this excerpt from a Ministry of Foreign Affairs press release. Notice '
        + 'the sentences in bold. Are they active voice (the subject performs the '
        + 'action) or passive voice (the subject receives the action)?',
      textTitle: 'Noticing Grammar',
      hintText: 'Click a line to underline it. Click it again to remove it.',
      paras: [[{ i: 0, t: 'Ministry Press Release: The Ministry of Foreign Affairs announced a new '
          + 'bilateral cooperation framework with Germany today. The framework was '
          + 'signed by both foreign ministers at a ceremony in Bogotá. A joint working '
          + 'committee has been established to oversee implementation. The agreement '
          + 'covers infrastructure, water systems, and educational exchange. '
          + 'Territorial development projects are being coordinated with German '
          + 'development partners. Our commitment to this partnership has been '
          + 'reaffirmed at the highest level.' }]],
      answers: [0],
      whyTitle: 'What you have just marked',
      after: 'Read the lines you underlined together: they are the facts the questions '
        + 'on the next screen ask about.'
    },
    {
      id: 'c2',
      covers: ['Part 2'],
      ref: '2B',
      bookRef: 'Unit 3 · Part 2 · 2B',
      type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'a) A joint technical committee has been established to oversee development '
          + 'coordination.' + '</p>'
        + '<p>' + 'b) Press releases are drafted by the Press Attaché and reviewed before '
          + 'publication.' + '</p>'
        + '<p>' + 'c) Rural infrastructure programs are currently being coordinated with '
          + 'international development partners.' + '</p>'
        + '<p>' + 'd) has/have been + past participle' + '</p>'
        + '<table class="booktable">' + '<tr><th>Tense</th><th>Passive Structure</th><th>Ministry '
          + 'Example</th></tr><tr><td>Present Simple Passive</td><td>is/are + past '
          + 'participle</td><td></td></tr><tr><td>Past Simple Passive</td><td>was/were '
          + '+ past participle</td><td>The MoU was signed by both foreign ministers at '
          + 'the ceremony in Bogotá.</td></tr><tr><td>Present Perfect '
          + 'Passive</td><td></td><td></td></tr><tr><td>Present Continuous '
          + 'Passive</td><td>is/are being + past participle</td><td></td></tr>' + '</table>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['a) A joint technical committee has been established to oversee development '
          + 'coordination.',
        'b) Press releases are drafted by the Press Attaché and reviewed before '
          + 'publication.',
        'c) Rural infrastructure programs are currently being coordinated with '
          + 'international development partners.',
        'd) has/have been + past participle'],
      visual: { live: 'focus-shift', wide: true,
          caption: 'Figure 3.1 — Explaining and describing: the passive and reporting verbs. '
          + 'Use the buttons to step through it.' }
    }
  ]
});
