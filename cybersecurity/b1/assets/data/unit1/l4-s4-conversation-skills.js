CSB1.page('u1-l4-s4', {
  book: { page: 12, section: 4, lesson: 'Lesson 4 · Everyday Conversation', title: 'Building conversation skills' },
  objective: 'Talk about career choices and your strengths and weaknesses',
  prev: 'l4-s3-adjectives-adverbs', prevLabel: 'Adjectives and adverbs',
  next: 'l4-s5-listening-details', nextLabel: 'Listening for details',
  cards: [
    {
      id: 'c4a', ref: '4A', bookRef: 'p.12 · 4A', type: 'cluehunt',
      title: 'Look at the picture',
      instruction: 'Look at the picture. <b>What are they talking about? How do you know?</b> Click each clue in the picture, then choose the answer the four clues support.',
      scene: 'mentor-office',
      seeAlso: { card: 'c4b', label: 'Hear them talking', evidence: 'the conversation underneath confirms what the picture suggests.' },
      question: 'What are Carlos and Joseph talking about?',
      evidence: 'put the four clues together — the poster, the thought bubble, the placard and the folder.',
      options: [
        { t: 'Carlos\'s exam results from last term.', ok: false, why: 'The folder is his record, but the poster and the thought bubble are both about choosing a route, not about marks.' },
        { t: 'Whether Carlos can join the cyber club.', ok: false, why: 'The club belongs to Tara\'s story in §1. The placard here says CYBER CAREER MENTOR.' },
        { t: 'Carlos\'s career choices in cybersecurity.', ok: true, why: 'Right — and every one of the four clues points at it: the pathways poster, his thought bubble, the mentor placard and his file on the desk.' },
        { t: 'A phishing email that Carlos has reported.', ok: false, why: 'Nothing on the desk or the wall is an email. That is the first-day scene in Lesson 2.' }
      ],
      keys: ['career', 'job', 'future', 'pathway'],
      model: 'They are talking about Carlos\'s career choices in cybersecurity.',
      clues: [
        { id: 'poster', at: [22, 30], label: 'The CYBER PATHWAYS poster', why: 'it lists the routes into the profession, so the meeting is about choosing one.' },
        { id: 'bubble', at: [52, 20], label: 'The thought bubble', why: 'it says "Which career is right for me?" — the question in his head.' },
        { id: 'placard', at: [51, 73], label: 'The desk placard', why: 'it reads CYBER CAREER MENTOR, so this is a careers meeting, not a lesson.' },
        { id: 'folder', at: [79, 73], label: 'The open folder', why: 'the mentor has Carlos\'s record in front of him.' }
      ]
    },
    {
      id: 'c4b', ref: '4B', bookRef: 'p.12 · 4B', type: 'scene',
      title: 'Listen to the sample conversation',
      instruction: 'Listen to the sample conversation. <b>What does Carlos want to do?</b> Then use the phrase bank: tap each way of saying you are not sure, and hear Carlos\'s line change.',
      scene: 'u1-carlos',
      quiz: {
        type: 'phrasebank',
        title: 'In other words… — saying you\'re not sure',
        voice: 'm',
        swapLine: 'Carlos: “[[swap]] I think I would like to work with people.”',
        swapTarget: 'carlos-swap',
        phrases: [
          'I\'m just not sure.',
          'I\'m not quite sure.',
          'I really don\'t know.',
          'It\'s hard to say.',
          'I have my doubts.',
          'I can\'t tell you for sure.',
          'I\'m not certain.'
        ]
      }
    },
    {
      id: 'c4c', ref: '4C', bookRef: 'p.13 · 4C', type: 'roleplay',
      title: 'Role-play the situation',
      instruction: 'Role-play the situation below. Choose your role — the scene will play the other part and leave a timed gap for your lines. Record yourself if you like, then write two of your own lines.',
      scene: 'u1-carlos',
      roles: [
        { who: 'carlos', label: 'Trainee (Carlos)' },
        { who: 'joseph', label: 'Cyber career mentor (Joseph)' }
      ],
      remember: [
        'Use the key phrases from 4B.',
        'Express uncertainty: I\'m just not sure · It\'s hard to say · I\'m not certain.',
        'Mentor: ask about interests, listen, then suggest a career.',
        'Trainee: you are not sure about your career choices. Answer the mentor\'s questions.'
      ],
      table: {
        title: 'Role-play card',
        head: ['Talk about', 'Roles', 'Instructions', 'Remember'],
        rows: [
          ['Discussing career goals', '<b>Cyber career mentor</b>', 'Ask the trainee about their interests and career goals. Listen. Suggest a career.', 'Use key phrases from 4B'],
          ['', '<b>Trainee</b>', 'You\'re not sure about your career choices. Answer the mentor\'s questions.', 'Express uncertainty']
        ]
      },
      minWords: 12,
      notePlaceholder: 'Write two lines you said in your role, for example: "I\'m not certain, but I enjoyed helping people at the help desk."',
      coach: {
        title: 'Check the lines you played',
        target: 'phrases for expressing uncertainty; asking about interests before suggesting a career',
        minWords: 12,
        taught: [
          'Saying you are not sure: I\'m just not sure · I\'m not quite sure · I really don\'t know · It\'s hard to say · I have my doubts · I can\'t tell you for sure · I\'m not certain.',
          'The mentor\'s move: ask about interests, listen, then suggest a career that fits what you heard.'
        ],
        source: { scene: 'u1-carlos', label: 'THE MODEL CONVERSATION the role-play is based on (4B)' },
        task: 'Role-play a careers meeting and then write two of your own lines from it. As the trainee you are not sure about your career choices; as the mentor you ask about interests, listen, and then suggest a career.',
        example: 'Mentor: So before we look at the list — what did you actually enjoy doing last year?\nTrainee: I\'m not certain, but I enjoyed helping people at the help desk more than the lab work.',
        criteria: [
          { t: 'Uses at least one phrase for not being sure.', auto: 'mentions', keys: ['not sure', 'not quite sure', 'don\'t know', 'do not know', 'hard to say', 'my doubts', 'not certain', 'for sure'], need: 1, fail: 'Use one of the 4B phrases: "I\'m not certain", "It\'s hard to say", "I\'m just not sure".' },
          { t: 'The lines belong to one role and sound like a real turn in a conversation.', auto: 'words', min: 12 },
          { t: 'Says something concrete about interests or experience, not only that you are unsure.', auto: 'mentions', keys: ['enjoyed', 'enjoy', 'liked', 'like', 'people', 'help', 'lab', 'club', 'desk', 'report', 'computer', 'network'], need: 1, fail: 'Being unsure is the frame, not the content. Add what you do enjoy or have done.' },
          { t: 'I played both roles, not just the easy one.', self: true },
          { t: 'As the mentor, I asked before I suggested.', self: true }
        ]
      }
    }
  ]
});
