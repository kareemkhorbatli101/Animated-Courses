/* Unit 1 §11 — Reading (2).

   The staff profile is printed in full, on the screen that questions it. */
JRN.page('u1-s11', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 5 · Reading (2)', part: '5', section: '11',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading (2)', title: 'Part 5 · Reading (2)' },
  objective: 'By the end of Part 5 you can read a news agency’s profile for its '
  + 'standing facts and its current plans, say which tense carries which, '
  + 'and describe a colleague’s work from a short staff profile.',
  cards: [
    {
      id: 'c1',
      ref: '5C',
      bookRef: 'Unit 1 · 5C',
      visual: { spot: 'org-chart' },
      type: 'study',
      title: 'Meet a team member',
      instruction: 'Read the short profile. Watch for what Priya does every day, and what '
  + 'she is doing this week.',
      html: '<div class="article"><h4>Priya Menon — data journalist, Nairobi</h4>'
      + '<p>Priya Menon is a data journalist at Crosswire’s Nairobi bureau. She '
      + 'joined the agency four years ago from a regional newspaper, where she '
      + 'covered local government.</p>'
      + '<p>Priya’s job is to find the story inside a set of numbers. Every week '
      + 'she checks the figures that reporters bring in, and she asks the '
      + 'question the desk always asks: who collected this, and when? She '
      + 'builds the charts that run with the stories, and she teaches reporters '
      + 'to read a spreadsheet before they quote from it.</p>'
      + '<p>This week Priya is working on two things. She is checking the flood '
      + 'figures coming out of Jakarta, where the official number and the '
      + 'hospital number do not agree. She is also training Aisha Bello, the '
      + 'bureau’s newest reporter, to use the agency’s figures '
      + 'database.</p></div>',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '5C',
      bookRef: 'Unit 1 · 5C',
      type: 'discuss',
      title: 'Answer the questions',
      instruction: 'Answer from the profile, in your own words.',
      questions: [{
            q: 'Where does Priya work, and what is her job?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What question does Priya always ask about a figure?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What two things is Priya doing this week?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: '5D',
      bookRef: 'Unit 1 · 5D',
      type: 'report',
      title: 'Discussion — compare newsrooms',
      instruction: 'In pairs, compare Crosswire with a news organisation you know.<br>'
  + 'Useful frame: “The newsroom I know covers ___, which is similar to / '
  + 'different from Crosswire.”',
      minWords: 25,
      placeholder: 'Does the newsroom you know work for readers, or for other newsrooms?',
      stems: ['Does the newsroom you know work for readers, or for other newsrooms?',
      'Does it have bureaux abroad, or does it buy foreign stories from a wire?',
      'Who checks the figures before a story runs?']
    }
  ]
});
