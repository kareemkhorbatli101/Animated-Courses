/* ============================================================
   Unit 1 §19 — Part 9, the Local Case Study: Syria in focus.

   As with Part 8, the book's text did not extract and its answer key did. The case below is
   written from the key: Lina had little money and rent was expensive; she rented one bay and
   bought good second-hand tools; customers came back because she did honest work and
   explained the problem clearly.

   Lina is the diagnostic technician the learner has already met in §10. Giving the case to
   somebody they know is deliberate — the book's own cast is small, and a case study about a
   stranger is harder to care about than one about the person you watched finding a fault.
   ============================================================ */
EAM.page('u1-s19', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 9 · Local case', part: '9', section: '19',
          lesson: 'Part 9 · Local Case', title: 'Syria in focus — Lina opens a workshop' },
  objective: 'Read a Syrian case and decide what the owner should do next, with a reason',
  video: 'u01v19',
  prev: 's18-global-case-study', prevLabel: 'A small garage grows',
  next: 's20-spiral-review', nextLabel: 'Spiral review',
  cards: [

    /* ---------------------------------------------------------------------- 1. the case */
    {
      id: 'c1', covers: ['Part 9'], ref: '9A', bookRef: 'Unit 1 · Part 9 · Case',
      type: 'study',
      title: 'Read: a young mechanic opens a workshop',
      instruction: 'A case from Syria. Read it, then answer the three questions.',
      visual: { spot: 'lina',
        caption: 'Lina — the diagnostic technician from §10, three years earlier.' },
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>Lina trained as a mechanic in Damascus and worked for six years in a large '
        + 'garage. She wanted to open <b>her own workshop</b>.</p>'
        + '<p>She had two problems. She had <b>very little money</b>, and <b>rent was '
        + 'expensive</b> — a whole workshop cost more than she could pay, and new tools cost a '
        + 'lot as well.</p>'
        + '<p>So she started small. She <b>rented one bay</b> in somebody else’s workshop, and '
        + 'she <b>bought good second-hand tools</b> instead of cheap new ones. A good used '
        + 'spanner, she says, outlasts three bad new ones.</p>'
        + '<p>Her customers came back. They came back because she <b>did honest work</b> and '
        + 'because she <b>explained the problem clearly</b> — she showed people the worn part '
        + 'and told them what would happen if it were left. Three years later she has her own '
        + 'workshop with two bays.</p>'
        + '</div>',
      doneLabel: 'I have read the case',
      playable: [
        'Lina trained as a mechanic in Damascus and wanted to open her own workshop.',
        'She had very little money, and rent was expensive.',
        'She rented one bay in somebody else’s workshop, and bought good second-hand tools.',
        'Her customers came back because she did honest work and explained the problem clearly.'
      ]
    },

    /* -------------------------------------------------------------------- 2. the questions */
    {
      id: 'c2', covers: ['Part 9'], ref: '9B', bookRef: 'Unit 1 · Part 9 · Questions',
      type: 'shortanswer',
      title: 'Three questions about Lina',
      instruction: 'A few words each. The first is done for you: <i>What did Lina want to '
        + 'open? — Her own workshop.</i>',
      items: [
        {
          q: '1. What two problems did Lina have?',
          accept: ['little money and expensive rent', 'little money, rent was expensive',
                   'no money and expensive rent', 'little money and rent was expensive',
                   'money and rent', 'little money; new tools cost a lot'],
          keys: ['money', 'rent'], need: 2,
          placeholder: 'two problems',
          evidence: 'the second paragraph names both, in one sentence.'
        },
        {
          q: '2. How did she start?',
          accept: ['she rented one bay and bought good second-hand tools',
                   'rented one bay and bought second-hand tools',
                   'she rented one bay', 'rented a bay and bought used tools',
                   'she started small, renting one bay'],
          keys: ['bay'], need: 1,
          placeholder: 'what she rented, and what she bought',
          evidence: 'the third paragraph — two decisions, both about spending less.'
        },
        {
          q: '3. Why did customers come back?',
          accept: ['she did honest work and explained the problem clearly',
                   'honest work and clear explanations',
                   'because she did honest work and explained the problem clearly',
                   'honest work and she explained clearly'],
          keys: ['honest', 'explain'], need: 2,
          placeholder: 'two reasons',
          evidence: 'the last paragraph gives two reasons, joined by "and because".'
        }
      ],
      whyTitle: 'Why these three questions, in this order',
      after: 'The three answers are a sequence: what stopped her, what she did about it, and '
        + 'what made it work. Notice that the third is not about tools or money at all — it is '
        + 'about how she talked to customers. That is the same conclusion as Sami’s case, '
        + 'reached from a different direction.'
    },

    /* ----------------------------------------------------------------- 3. the decision task */
    {
      id: 'c3', covers: ['Part 9'], ref: '9C', bookRef: 'Unit 1 · Part 9 · Decision task',
      type: 'solutions',
      title: 'What should Lina do next?',
      instruction: '<b>Lina now has a little more money.</b> Should she (a) buy a new '
        + 'diagnostic machine, (b) rent a bigger workshop, or (c) hire one helper? Decide, and '
        + 'explain. Use the frame.',
      visual: { spot: 'diagnostic-machine',
        caption: 'One of the three choices. The case does not say which is right — it gives '
          + 'you enough to argue for any of them.' },
      passage: { style: 'article', title: 'What Lina has now',
        paras: ['Two bays, her own workshop, and more customers than she can take in a day. '
          + 'She turns work away on Thursdays. Many of the cars she sees are more than fifteen '
          + 'years old, and most of the faults she finds are mechanical — worn parts she can '
          + 'see and hear. A few newer cars come in with warning lights she cannot read '
          + 'without a machine, and she sends those to a bigger garage across the city.'] },
      placeholder: 'I think Lina should … because … . Also, … . This is better than … '
        + 'because … .',
      need: 1,
      ideas: [
        'she turns work away on Thursdays — that is lost money every week',
        'a helper doubles the hands but not the space',
        'most faults are mechanical, not electronic',
        'the newer cars she sends away are customers she loses',
        'a bigger workshop costs rent every month, whether it is full or not',
        'she built the business on explaining clearly, not on machines'
      ],
      coach: {
        title: 'Check your decision',
        target: 'giving an opinion with reasons, and weighing it against the alternatives',
        taught: [
          'The answer frame: "I think Lina should … because … . Also, … . This is better than '
            + '… because … ."',
          'Phrases for opinions: I think… should… · because… · Also,… · In my opinion…',
          'Her own history: she started by spending as little as possible.'
        ],
        task: 'Decide what Lina should do with a little more money, and explain why — '
          + 'including why it is better than one of the other two choices.',
        parts: [
          'Your decision, in the frame’s first sentence.',
          'A reason, taken from the facts above.',
          'A second reason.',
          'Why it is better than ONE of the other two choices.'
        ],
        example: [
          'I think Lina should hire one helper, because she already turns work away on '
            + 'Thursdays and that is money she loses every week. Also, a helper can do the '
            + 'simple jobs — oil, filters, tyres — so she can spend her time on the faults '
            + 'only she can find. This is better than a bigger workshop because rent must be '
            + 'paid every month even when the bays are empty, and she has only just stopped '
            + 'worrying about rent.'
        ],
        exampleNote: 'One answer. A good argument for the diagnostic machine exists too — the '
          + 'newer cars she sends away are customers walking to a competitor. What is not '
          + 'acceptable is a decision with no reason.',
        criteria: [
          { t: 'Names one of the three choices clearly.' },
          { t: 'Gives at least two reasons.', auto: 'mentions',
            keys: ['because', 'also', 'so ', 'and '], need: 2,
            fail: 'Use the frame: "because…" and then "Also,…".' },
          { t: 'Says why it is better than another choice.', auto: 'mentions',
            keys: ['better than', 'rather than', 'instead of'], need: 1,
            fail: 'Add the last part of the frame: "This is better than … because … ."' },
          { t: 'The reasons come from the facts given, not from general opinion.' }
        ]
      }
    }
  ]
});
