/* Unit 1 §19 — Your Newsroom in Focus.

   In the national edition this screen stood on the edition's own ground and
   ended "compare with where you work". An international edition has no single
   home ground, so the ground becomes the reader's own: three short newsroom
   sketches are printed as models to compare against, and the reader describes
   and compares their own. */
JRN.page('u1-s19', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 11 · Your Newsroom in Focus', part: '11', section: '19',
          track: 'intl', label: 'International edition · compare with where you work', lesson: 'Part 11 · Your Newsroom in Focus', title: 'Part 11 · Your Newsroom in Focus' },
  objective: 'By the end of this part you can describe the staff of the newsroom you '
  + 'know and say who faces the public, and say where English is needed in a '
  + 'newsroom that works mainly in another language.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 1 · S-A',
      visual: { spot: 'map-dateline' },
      type: 'study',
      title: 'Three newsrooms',
      instruction: 'Three newsrooms, in three countries, none of them working mainly in '
  + 'English. Read how English reaches each one. Then answer about your own.',
      html: '<div class="article"><h4>Three newsrooms</h4>'
      + '<p><b>A national daily.</b> Sixty journalists, writing in the national '
      + 'language for readers in one country. Almost nobody uses English with a '
      + 'reader. But the foreign desk reads four wires in English every '
      + 'morning, and the paper buys about a fifth of its foreign coverage from '
      + 'them. Two reporters handle English-language interviews when a visiting '
      + 'official will not speak anything else.</p>'
      + '<p><b>A regional broadcaster.</b> Twelve journalists, one small '
      + 'studio. English arrives twice: in the technical documents for the '
      + 'equipment, and in the training courses the staff are sent on. The '
      + 'newsroom also applies for international grants, and those '
      + 'applications, including the budget, are written in English.</p>'
      + '<p><b>A freelance team of four.</b> They report in their own language '
      + 'at home and sell to foreign outlets abroad. For them English is the '
      + 'selling language: the pitch email, the invoice, the call with a '
      + 'commissioning editor in another time zone. One of the four writes all '
      + 'the pitches, because she is the one who is confident in English.</p>'
      + '<p>In none of the three is English the language of the newsroom. In '
      + 'all three, somebody’s work stops without it.</p></div>',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 1 · S-B',
      type: 'discuss',
      title: 'Answer about your own newsroom',
      instruction: 'Answer about the newsroom you work in, or one you know well. If you '
  + 'are studying and do not yet work in one, answer about the news '
  + 'organisation you read most.',
      questions: [{
            q: 'How many of your colleagues face the public directly, and in which '
              + 'language?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Where does English actually enter the work — wires, interviews, '
              + 'funding, selling abroad, equipment, training?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which of the three newsrooms above is yours most like, and what is '
              + 'the biggest difference?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 1 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'Compare your answers with a partner from a different country or a '
  + 'different kind of newsroom. How many of your colleagues use English in '
  + 'a normal week, and for what? Where would better English change what '
  + 'your newsroom is able to report?',
      doneLabel: 'I have read this'
    }
  ]
});
