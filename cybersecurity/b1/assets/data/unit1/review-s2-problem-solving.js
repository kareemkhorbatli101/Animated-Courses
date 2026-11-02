CSB1.page('u1-review-s2', {
  book: { page: 19, section: 'Problem solving', lesson: 'Teamwork & Language Review', title: 'Problem solving — Teresa' },
  objective: 'Determine how to talk with colleagues as the new person on a team',
  prev: 'review-s1-teamwork', prevLabel: 'Teamwork review',
  next: null,
  cards: [
    {
      id: 'ca', ref: 'A', bookRef: 'p.19 · A', type: 'scene',
      title: 'Listen and read about Teresa',
      instruction: 'Listen and read about Teresa. Switch the Arabic subtitles on if they help.',
      scene: 'u1-teresa',
      passage: {
        style: 'memo', speak: false,
        paras: [
          'Teresa is a new analyst on the night shift at Mid-City. The team started three weeks ago, but today is Teresa\'s first day. She likes the work and the supervisor very much, but she\'s a little worried about making friends. The other analysts in the team already know each other very well. Some even studied together last year. Teresa doesn\'t like being the only new person on the team. All the other analysts are having fun together. Teresa feels alone.'
        ]
      }
    },
    {
      id: 'cb', ref: 'B', bookRef: 'p.19 · B', type: 'solutions',
      title: 'Answer the questions',
      instruction: 'Work with your classmates. <b>1.</b> What is Teresa\'s problem? <b>2.</b> What should Teresa do? Think of two or three solutions, then rank them and say how easy and how fast each one is.',
      visual: {
        art: 'night-desk',
        caption: 'Teresa\'s first night. The work is fine — the team is three weeks old and she is not part of it yet.'
      },
      coach: {
        title: 'Check your solutions before you rank them',
        ai: false,
        taught: 'Problem solving: state the problem in one sentence, then propose solutions and judge each one for how easy and how fast it is.',
        criteria: [
          { t: 'The problem is stated as Teresa\'s problem, not as a complaint about the team.', auto: 'words', min: 6 },
          { t: 'At least two solutions, and each one is an action Teresa herself can take.', auto: 'lines', min: 2 },
          { t: 'At least one solution could be done on her very next shift.', self: true },
          { t: 'None of my solutions needs somebody else to change first.', self: true }
        ]
      },
      need: 2,
      placeholder: 'Write one solution…',
      ideas: [
        'Ask one colleague a question about the ticket queue',
        'Bring something to share on the night shift',
        'Offer to take the handover notes for a week',
        'Ask the supervisor to pair her with someone',
        'Arrive fifteen minutes early and talk before the shift',
        'Join the team\'s study group for the certification',
        'Ask someone to show her how they use the dashboard'
      ]
    },
    {
      id: 'cc', ref: 'C', bookRef: 'p.19 · C', type: 'letter',
      title: 'Write a letter to Teresa',
      instruction: 'Write a letter to Teresa. Use your ranked solutions from B — press the button below the letter to bring them in.',
      from: 'cb',
      open: 'Dear Teresa,\nHere are some ideas to help you settle into your new team:',
      close: 'I hope you find these ideas useful.',
      minIdeas: 2,
      placeholder: '• …\n• …',
      visual: {
        still: 'u1-teresa',
        caption: 'You are writing to her, not about her. Keep that in mind for the register: she is a colleague on her first week, not a student with a problem.'
      },
      checklist: [
        'At least two clear ideas, one per line',
        'A polite, friendly register — she is a colleague, not a student',
        'The correct closing and your name',
        'Check your verb tenses: advice usually uses "could", "should" or the imperative'
      ],
      coach: {
        title: 'Check your letter before you send it',
        target: 'giving advice with could / should / why not; a friendly, polite register',
        minWords: 40,
        taught: [
          'Advice takes "could", "should", "why not…?" or the imperative.',
          'A letter to a colleague opens "Dear <name>," and closes with a short friendly line and your name.'
        ],
        source: {
          passage: 'ca',
          label: 'TERESA\'S SITUATION, as the learner read it'
        },
        task: 'Write a letter to Teresa giving her at least two of your ranked solutions, in a polite, friendly register, with a correct opening and closing.',
        example: 'Dear Teresa,\n\nHere are some ideas to help you settle into your new team:\n\n• You could ask one of the other analysts to show you how they use the dashboard. People like being asked, and it gives you a reason to talk on your first night.\n• Why not offer to take the handover notes for a week? The whole team has to talk to you then, and they will be glad somebody else is doing it.\n• You could also arrive fifteen minutes early. The quiet time before a shift is when people actually chat.\n\nThree weeks is not very long, and they were new once too.\n\nI hope you find these ideas useful.\nOmar',
        criteria: [
          { t: 'At least two separate ideas, one per line.', auto: 'lines', min: 2 },
          { t: 'Uses advice language: could, should, why not, or an imperative.', auto: 'mentions', keys: ['could', 'should', 'why not', 'try', 'ask', 'offer', 'you can', 'maybe'], need: 1, fail: 'Advice needs "You could…", "You should…" or "Why not…?".' },
          { t: 'Friendly and polite, addressed to a colleague.', auto: 'mentions', keys: ['dear', 'teresa', 'hope', 'good luck', 'they were new', 'you will'], need: 1, fail: 'Address her by name and keep it warm — she is a colleague, not a case.' },
          { t: 'Has a closing line and a name.', auto: 'has', rx: '(hope|regards|best|sincerely|good luck)', pass: 'Found a closing line.', fail: 'Close the letter properly, then sign your name.' },
          { t: 'At least 40 words.', auto: 'words', min: 40 },
          { t: 'The ideas are the ones I ranked highest in B, not new ones I just thought of.', self: true },
          { t: 'Nothing in it would embarrass her if a colleague read it.', self: true }
        ]
      }
    }
  ]
});
