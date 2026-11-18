/* Unit 1 §4 — Grammar — Present Simple vs Present Continuous.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s04', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 2 · Grammar — Present Simple vs Present Continuous', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Present Simple vs Present Continuous', title: 'Part 2 · Grammar — Present Simple vs Present Continuous' },
  objective: 'By the end of Part 2 you can tell a routine from something happening '
  + 'now, choose present simple or present continuous for each, correct '
  + 'the commonest mistake between the two, and say both what you usually '
  + 'do and what you are working on this week.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 1 · 2A',
      visual: { spot: 'branch-plan' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Luca:</b> Hi, I’m Luca. I work in customer '
      + 'service.</p><p><b>Mei:</b> Nice to meet you. I’m training in the loan '
      + 'office this week.</p><p><b>Luca:</b> What do you usually do '
      + 'there?</p><p><b>Mei:</b> I usually help with forms, but now I’m '
      + 'learning to approve small loans.</p></div>',
      playable: ['Hi, I’m Luca. I work in customer service.',
      'Nice to meet you. I’m training in the loan office this week.',
      'What do you usually do there?',
      'I usually help with forms, but now I’m learning to approve small loans.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 1 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline the verbs. Which show a routine, '
  + 'and which show something happening now?<br>Remember: usually, every '
  + 'day, always → present simple. now, this week, at the moment → present '
  + 'continuous.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. work — routine or now? [[1]]'
        + '<br>'
        + '2. am training — routine or now? [[2]]'
        + '<br>'
        + '3. do / help — routine or now? [[3]]'
        + '<br>'
        + '4. am learning — routine or now? [[4]]'
        + '</div>',
      answers: {
        '1': ['routine'],
        '2': ['now'],
        '3': ['routine'],
        '4': ['now']
      },
      bank: ['now',
      'routine'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>routine</b>.',
        '2': '<b>now</b>.',
        '3': '<b>routine</b>.',
        '4': '<b>now</b>.'
      }
    },
    {
      id: 'c3',
      ref: '2B',
      bookRef: 'Unit 1 · 2B',
      type: 'cloze',
      title: 'Controlled practice (choose the tense)',
      instruction: 'Write the correct form of the verb in brackets.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The branch manager [[1]] (check) the daily reports at the moment.'
        + '<br>'
        + '2. He usually [[2]] (arrive) at 8:30.'
        + '<br>'
        + '3. I [[3]] (meet) a new client now.'
        + '<br>'
        + '4. Our bank [[4]] (offer) digital banking services.'
        + '<br>'
        + '5. They [[5]] (discuss) loan terms at the moment.'
        + '<br>'
        + '6. The branch [[6]] (open) at nine o’clock every day.'
        + '</div>',
      answers: {
        '1': ['is checking'],
        '2': ['arrives'],
        '3': ['am meeting'],
        '4': ['offers'],
        '5': ['are discussing'],
        '6': ['opens']
      },
      bank: ['am meeting',
      'are discussing',
      'arrives',
      'is checking',
      'offers',
      'opens'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': '<b>is checking</b>.',
        '2': '<b>arrives</b>.',
        '3': '<b>am meeting</b>.',
        '4': '<b>offers</b>.',
        '5': '<b>are discussing</b>.',
        '6': '<b>opens</b>.'
      }
    },
    {
      id: 'c4',
      ref: '2C',
      bookRef: 'Unit 1 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence (present simple or '
  + 'continuous).',
      write: true,
      items: [{ wrong: 'She work in the loan office.',
          accept: ['She works in the loan office.'],
          why: 'A third-person singular subject takes -s in the present simple.' },
      { wrong: 'Right now I check the daily reports.',
          accept: ['Right now I am checking the daily reports.'],
          why: '\'Right now\' marks something in progress, so it needs the present '
              + 'continuous.' },
      { wrong: 'They is opening a new branch this month.',
          accept: ['They are opening a new branch this month.'],
          why: '\'They\' takes \'are\', not \'is\'.' },
      { wrong: 'He usually is arriving at 8:30.',
          accept: ['He usually arrives at 8:30.'],
          why: '\'Usually\' marks a routine, so the present simple is right - the '
              + 'continuous would say it is happening at this moment.' },
      { wrong: 'We are have a team meeting every Monday.',
          accept: ['We have a team meeting every Monday.'],
          why: '\'Every Monday\' marks a routine; \'are have\' mixes the two forms.' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
