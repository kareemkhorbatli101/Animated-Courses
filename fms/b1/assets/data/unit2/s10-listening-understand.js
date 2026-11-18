/* Unit 2 §10 — Part 3 - Listening.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s10', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 3 - Listening', part: '3', section: '10',
          lesson: 'Part 3 - Listening', title: 'Part 3 - Listening' },
  objective: 'By the end of Part 3 you can predict the modal language a coordination '
        + 'call will use, follow four calls between a protocol officer and an embassy '
        + 'closely enough to extract each decision and deadline, choose a correct '
        + 'professional response to a request, and write down five coordination '
        + 'phrases.',
  prev: 's09-listening-predict', prevLabel: 'Part 3 - Before you listen',
  next: 's11-listening-respond', nextLabel: 'Part 3 - Responding',
  cards: [
    {
      id: 'c1',
      covers: ['Part 3',
        'Audio 2.14'],
      ref: '3B',
      bookRef: 'Unit 2 · Part 3 · 3B',
      type: 'scene',
      title: 'Listening: Four Coordination Calls',
      instruction: 'Listen to four short phone calls between Salma Benali at the Moroccan '
        + 'Ministry of Foreign Affairs and coordination contacts at the German '
        + 'Embassy. For each call, answer the questions that follow.',
      scene: 'u2-3b',
      quiz: {
        id: 'c1-quiz',
        ref: '3B',
        bookRef: 'Unit 2 · Part 3 · 3B',
        type: 'discuss',
        title: 'After you listen',
        instruction: 'Listen to four short phone calls between Salma Benali at the Moroccan '
        + 'Ministry of Foreign Affairs and coordination contacts at the German '
        + 'Embassy. For each call, answer the questions that follow.',
        questions: [{
              q: 'What is the problem in each dialogue and what is agreed or proposed?',
              model: 'Dialogue 1: The original conference room is unavailable because of an '
                + 'urgent ministerial meeting; Salma informs the German side proactively and '
                + 'confirms that the new room still seats twelve, and she commits to an '
                + 'updated logistics note by midday. Dialogue 2: Dr. Braun\'s flight is '
                + 'delayed, so Thomas asks to move the session to three o\'clock; Salma '
                + 'checks with the Director and confirms, with a revised logistics note '
                + 'within the hour. Dialogue 3: Two German-speaking specialists need '
                + 'interpretation; Salma says she should be able to arrange it through the '
                + 'Language Services Unit and will call back within the hour. Dialogue 4: Dr. '
                + 'Hoffman\'s security clearance is incomplete; Salma states the 48-hour rule '
                + 'and proposes a video link as a fallback. In all four calls the pattern is '
                + 'identical: the problem is reported by whoever discovers it, a solution is '
                + 'proposed in the same breath, and a written note follows.',
              minWords: 6,
              rows: 3
            },
        {
              q: 'How does Salma use modal verbs in each call to communicate what is '
                + 'required, possible, or recommended?',
              model: 'Salma uses must to state the non-negotiable institutional rules: "All '
                + 'foreign nationals must submit the clearance form 48 hours before entry" '
                + 'and "interpretation must be requested at least four hours before the '
                + 'session." She uses should for what she expects to be possible but has not '
                + 'yet confirmed: "We should be able to arrange German interpretation." She '
                + 'uses can to ask for and to offer practical possibilities: "Can Dr. Hoffman '
                + 'submit the form today?" And she uses will for her own firm commitments: "I '
                + 'will send written confirmation before noon." The pattern is consistent: '
                + 'must for the rules, should for the likely, can for the possible, will for '
                + 'what she personally undertakes.',
              minWords: 6,
              rows: 3
            },
        {
              q: 'What does Salma\'s handling of these calls tell us about the professional '
                + 'qualities of an effective liaison officer?',
              model: 'Salma communicates problems early and never waits for them to become '
                + 'worse. She always offers a solution with the problem. She is careful to '
                + 'separate what she can confirm now from what she needs to check, and she '
                + 'sets a clear deadline for every call-back.',
              minWords: 6,
              rows: 3
            }],
        okMsg: 'Saved. Press “Show me” to compare with the book\'s answers.'
      },
      after: '<b>Thinking guide.</b> Salma does not wait for problems to get worse — she '
        + 'communicates them ___. She always offers a ___ alongside the problem. She '
        + 'is also careful about what she ___ now versus what she needs to ___. She '
        + 'manages ___ by setting clear deadlines. (Think about: proactively / '
        + 'solution / can confirm / verify / timelines)'
    }
  ]
});
