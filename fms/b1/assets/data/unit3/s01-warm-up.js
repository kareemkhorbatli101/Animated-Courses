/* Unit 3 §1 — Warm Up.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s01', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can tell your country\'s story in English '
        + 'in a few clear sentences, anticipate the questions foreign visitors ask '
        + 'most often, and use modal verbs accurately again after Unit 2.',
  next: 's02-fluency', nextLabel: 'Warm Up - fluency',
  cards: [
    {
      id: 'c1',
      covers: ['Warm Up'],
      ref: 'W-A',
      bookRef: 'Unit 3 · Warm Up · W-A',
      type: 'discuss',
      title: 'Pair Discussion – Your Country\'s Story in English',
      instruction: 'Talk with a partner about the following: (Aim for 3–4 sentences per '
        + 'answer.)',
      minWords: 12,
      questions: [{ q: 'A foreign journalist asks you: "What is the single most important change '
          + 'in your country since 2024?" How would you answer professionally, '
          + 'honestly, and concisely?' },
        { q: 'How do you stay honest about your country\'s challenges while still '
          + 'presenting a forward-looking, constructive message?' },
        { q: 'Complete this sentence with your partner: "My country\'s most important '
          + 'message to the world right now is that ___." Then give ONE specific '
          + 'example in 1–2 sentences that supports your sentence.' }],
      ideas: ['A foreign journalist asks you: "What is the single most important change '
          + 'in your country since 2024?" How would you answer professionally, '
          + 'honestly, and concisely?',
        'How do you stay honest about your country\'s challenges while still '
          + 'presenting a forward-looking, constructive message?',
        'Complete this sentence with your partner: "My country\'s most important '
          + 'message to the world right now is that ___." Then give ONE specific '
          + 'example in 1–2 sentences that supports your sentence.'],
      okMsg: 'Good. Open the notes below and compare with the book\'s answers.',
      coach: {
        title: 'Compare with the book',
        target: 'Explaining and describing: the passive and reporting verbs',
        task: 'Talk with a partner about the following: (Aim for 3–4 sentences per '
        + 'answer.)',
        parts: ['A foreign journalist asks you: "What is the single most important change '
          + 'in your country since 2024?" How would you answer professionally, '
          + 'honestly, and concisely?',
        'How do you stay honest about your country\'s challenges while still '
          + 'presenting a forward-looking, constructive message?',
        'Complete this sentence with your partner: "My country\'s most important '
          + 'message to the world right now is that ___." Then give ONE specific '
          + 'example in 1–2 sentences that supports your sentence.'],
        example: ['B1 target — The most important change is that our international engagement '
            + 'has become practical. Agreements are being signed, committees are meeting, '
            + 'and programs are being implemented. Five years ago we talked about '
            + 'intentions; now we report on results.',
          'B2 extension — The most important change is that our international '
            + 'engagement has moved from declarations to implementation. Diplomatic '
            + 'contacts have been established or upgraded with more than twenty '
            + 'countries, bilateral frameworks have been signed in infrastructure, '
            + 'education, and trade, and joint technical committees are now required to '
            + 'report quarterly. The difference a journalist should be able to verify is '
            + 'that there is now a paper trail of obligations — not only a record of good '
            + 'intentions.',
          'B1 target — Honesty and forward momentum are not in conflict. You name the '
            + 'difficulty precisely, then describe what is being done about it and by '
            + 'when. A vague answer sounds like evasion; a precise one sounds like '
            + 'competence.',
          'B2 extension — Honesty and forward momentum are not in conflict — in fact '
            + 'the forward-looking part is only credible if the acknowledgment is '
            + 'specific. The formula I use is three steps: name the difficulty in '
            + 'concrete terms, state the mechanism that is addressing it, and give a '
            + 'timeline or a reporting point. "Implementation is slower than we '
            + 'projected; the joint committees now report quarterly and the first public '
            + 'report is due in March" is both honest and constructive. A general '
            + 'reassurance is neither.',
          'My country\'s most important message to the world right now is that its '
            + 'institutions are working and verifiable. For example, implementation of '
            + 'the bilateral frameworks is overseen by joint technical committees that '
            + 'are required to report on progress every quarter — which means a partner '
            + 'does not have to take our word for it. Verifiability is the message.'],
        criteria: [{ t: 'A foreign journalist asks you: "What is the single most important change '
            + 'in your country since 2024?" How would you answer professionally, '
            + 'honestly, and concisely?' },
          { t: 'How do you stay honest about your country\'s challenges while still '
            + 'presenting a forward-looking, constructive message?' },
          { t: 'Complete this sentence with your partner: "My country\'s most important '
            + 'message to the world right now is that ___." Then give ONE specific '
            + 'example in 1–2 sentences that supports your sentence.' }]
      }
    },
    {
      id: 'c2',
      covers: ['Warm Up',
        'Audio 3.2'],
      ref: 'W-B',
      bookRef: 'Unit 3 · Warm Up · W-B',
      type: 'scene',
      title: 'Group Brainstorm – Questions Foreign Visitors Ask',
      instruction: 'In small groups, list the five most common questions foreign visitors ask '
        + 'about your country at ministry meetings. For each question, identify which '
        + 'department handles it and what kind of answer is appropriate. Share your '
        + 'findings with the class. (Aim for 3–4 sentences when you share.)',
      scene: 'u3-wb',
      quiz: {
        type: 'shortanswer',
        title: 'After you listen',
        instruction: 'In small groups, list the five most common questions foreign visitors ask '
        + 'about your country at ministry meetings. For each question, identify which '
        + 'department handles it and what kind of answer is appropriate. Share your '
        + 'findings with the class. (Aim for 3–4 sentences when you share.)',
        items: [{ q: '1. What are the five most common questions, and how should each be handled '
                + 'professionally?',
              accept: ['1. "What is the security situation in the regions?" — Political Affairs — '
                  + 'a region-specific, factual answer, never a generalization. 2. "Are the '
                  + 'reforms real or only on paper?" — Press and Information Office — name '
                  + 'signed agreements and established committees. 3. "What protections exist '
                  + 'for foreign investors?" — Economic Affairs — the legal framework and '
                  + 'dispute resolution, with a referral to qualified advisers. 4. "How does '
                  + 'the returning-citizens program actually work?" — Consular Affairs — who it '
                  + 'covers, how applications are processed, what support is provided. 5. "Who '
                  + 'monitors the use of international funds?" — Political Affairs — the '
                  + 'oversight mechanisms and the reporting requirements.'],
              keys: ['common',
                'questions'], need: 1,
              evidence: 'The answer is in the conversation above — play it again and listen for '
                + 'that turn.' }],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
