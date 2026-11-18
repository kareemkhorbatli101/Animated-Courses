/* Unit 2 §6 — Part 2 - Grammar, notice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s06', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 2 - Grammar, notice', part: '2', section: '6',
          lesson: 'Part 2 - Grammar, notice', title: 'Part 2 - Grammar, notice' },
  objective: 'By the end of Part 2 you can choose the right modal verb for an '
        + 'obligation, a recommendation, a possibility and a polite request, give the '
        + 'ministry example for each, correct modal errors in coordination writing, '
        + 'and make a request of a counterpart at the level of politeness the '
        + 'situation needs.',
  prev: 's05-vocabulary-practice', prevLabel: 'Part 1 - Practice',
  next: 's07-grammar-practice', nextLabel: 'Part 2 - Grammar, practice',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2A',
      bookRef: 'Unit 2 · Part 2 · 2A',
      type: 'highlighter',
      title: 'Noticing Grammar',
      instruction: 'Read this internal coordination email from Salma Benali, Protocol Officer, '
        + 'to her team ahead of the Morocco–Germany bilateral meeting. Pay attention '
        + 'to the modal verbs in bold.',
      textTitle: 'Noticing Grammar',
      hintText: 'Click a line to underline it. Click it again to remove it.',
      paras: [[{ i: 0, t: 'Email from Salma Benali: Team, please note the following for Tuesday\'s '
          + 'session. All participants must present their ministry ID at the entrance — '
          + 'security clearance is required for all foreign nationals. The German '
          + 'delegation may use the executive lounge for a pre-meeting briefing. You '
          + 'should send the updated agenda to Ms. Braun\'s office by four o\'clock '
          + 'today — not later. If there is a translation issue during the session, you '
          + 'can contact the Language Services Unit directly using the internal '
          + 'extension. We need to finalize catering arrangements today. The director '
          + 'shall open the session with a formal welcome — his speaking notes are '
          + 'attached.' }]],
      answers: [0],
      whyTitle: 'What you have just marked',
      after: 'Read the lines you underlined together: they are the facts the questions '
        + 'on the next screen ask about.'
    },
    {
      id: 'c2',
      covers: ['Part 2'],
      ref: '2B',
      bookRef: 'Unit 2 · Part 2 · 2B',
      type: 'study',
      title: 'Grammar Focus Box',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'a) The liaison officer should send the protocol brief 24 hours before the '
          + 'meeting.' + '</p>'
        + '<p>' + 'b) You can contact the Language Services Unit for interpretation support '
          + 'during the meeting.' + '</p>'
        + '<p>' + 'c) All visitors must show their identification at the security desk.' + '</p>'
        + '<p>' + 'd) The Director General shall chair the opening session of the bilateral '
          + 'forum.' + '</p>'
        + '<table class="booktable">' + '<tr><th>Modal Verb</th><th>Main Meaning</th><th>Ministry '
          + 'Example</th></tr><tr><td>must</td><td>Strong obligation / '
          + 'requirement</td><td></td></tr><tr><td>should</td><td>Advice / '
          + 'recommendation</td><td></td></tr><tr><td>may</td><td>Formal '
          + 'permission</td><td>Delegations may use the executive lounge before the '
          + 'session begins.</td></tr><tr><td>can</td><td>Ability / '
          + 'possibility</td><td></td></tr><tr><td>need to</td><td>Necessity</td><td>We '
          + 'need to confirm the room booking at least 48 hours in '
          + 'advance.</td></tr><tr><td>shall</td><td>Formal institutional commitment / '
          + 'fixed arrangement</td><td></td></tr>' + '</table>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['a) The liaison officer should send the protocol brief 24 hours before the '
          + 'meeting.',
        'b) You can contact the Language Services Unit for interpretation support '
          + 'during the meeting.',
        'c) All visitors must show their identification at the security desk.',
        'd) The Director General shall chair the opening session of the bilateral '
          + 'forum.'],
      visual: { live: 'request-ladder', wide: true,
          caption: 'Figure 2.1 — Modal verbs for requests and arrangements. Use the buttons to '
          + 'step through it.' }
    }
  ]
});
