/* Unit 1 §13 — Writing (2).

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s13', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 6 · Writing (2)', part: '6', section: '13',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing (2)', title: 'Part 6 · Writing (2)' },
  objective: 'By the end of Part 6 you can recognise the parts of a pitch email and '
  + 'what each is for, complete one from a word list, and write your own in '
  + '50 to 70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6D',
      bookRef: 'Unit 1 · 6D',
      visual: { spot: 'byline' },
      type: 'writer',
      title: 'Write a short profile of a colleague (40–60 words)',
      instruction: 'Use the notes to write a short professional profile.<br>Notes — Sofia '
  + 'Marchetti: standards editor at Crosswire; usually checks that every '
  + 'claim in a story names its source; now rewriting the agency’s guidance '
  + 'on the word “alleged”; works with the legal team.<br>Frame: ___ is a '
  + '___ at ___. He/She usually ___. At the moment, he/she is ___. He/She '
  + 'works with ___.<br>☐ Present simple for the routine duties?<br>☐ '
  + 'Present continuous for the current task?<br>☐ 40–60 words?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }],
      model: ['Sofia Marchetti is a standards editor at Crosswire. She usually '
        + 'checks that every claim in a story names its source. At the moment, '
        + 'she is rewriting the agency’s guidance on the word “alleged”. She '
        + 'works closely with the legal team.'],
      coach: {
        title: 'Check before you finish',
        task: 'Use the notes to write a short professional profile. Notes — Sofia '
  + 'Marchetti: standards editor at Crosswire; usually checks that every '
  + 'claim in a story names its source; now rewriting the agency’s guidance '
  + 'on the word “alleged”; works with the legal team. Frame: ___ is a ___ at '
  + '___. He/She usually ___. At the moment, he/she is ___. He/She works with '
  + '___. ☐ Present simple for the routine duties? ☐ Present continuous for '
  + 'the current task? ☐ 40–60 words?',
        criteria: [{ t: 'Present simple for what she usually does.' },
          { t: 'Present continuous for what she is doing at the moment.' },
          { t: 'Her role and her organisation, both named.' },
          { t: '40–60 words.' }]
      }
    },
    {
      id: 'c2',
      ref: '6E',
      bookRef: 'Unit 1 · 6E',
      type: 'writer',
      title: 'Peer check (50–70 words)',
      instruction: 'Swap your email from 6C with a partner. Use the checklist to give one '
  + 'piece of positive feedback and one suggestion.<br>Checklist: a subject '
  + 'line that names the story? · both tenses? · a polite close? · 50–70 '
  + 'words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words.'
        }],
      model: ['Your subject line is clear, and the close is polite. You use the '
        + 'present simple well for your beat, and the email is easy to read. '
        + 'One suggestion: add a sentence saying what you are working on this '
        + 'week, because that is the line that tells an editor you can file '
        + 'today rather than next month.']
    },
    {
      id: 'c3',
      ref: '6F',
      bookRef: 'Unit 1 · 6F',
      type: 'study',
      title: 'Improve the email (editing)',
      instruction: 'This short email has three small faults — one of grammar, one of '
  + 'politeness, and one that would stop an editor finding it again. Find '
  + 'them, then rewrite the email correctly.<br>Subject: hello<br>hi, I am '
  + 'Omar. I working as a stringer in the north. I file sometimes. '
  + 'bye.<br>☐ a subject line that names the story<br>☐ correct present '
  + 'continuous (‘I am working’)<br>☐ a polite greeting and close',
      html: '<p><b>The three faults:</b> the subject line says nothing, so the '
      + 'email cannot be found again; <i>I working</i> is missing its '
      + '<i>am</i>; and <i>hi … bye</i> is the register of a text message, not '
      + 'of a first email to an editor you have never met.</p>'
      + '<p><b>One way to put it right:</b> Subject: Introduction — stringer, '
      + 'northern region. Dear Ms Osman, My name is Omar Darwish. I am working '
      + 'as a stringer in the north, where I usually cover agriculture and the '
      + 'border crossings. I file two or three stories a month. I look forward '
      + 'to hearing from you. Best regards, Omar</p>',
      doneLabel: 'I have read this'
    }
  ]
});
