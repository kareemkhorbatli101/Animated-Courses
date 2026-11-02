CSB1.page('u1-l4-s5', {
  book: { page: 13, section: 5, lesson: 'Lesson 4 · Everyday Conversation', title: 'Focus on listening for details' },
  objective: 'Talk about career choices and your strengths and weaknesses',
  prev: 'l4-s4-conversation-skills', prevLabel: 'Conversation skills',
  next: 'l4-s6-discuss', nextLabel: 'Discuss',
  cards: [
    {
      id: 'c5a', ref: '5A', bookRef: 'p.13 · 5A', type: 'opinion',
      title: 'Do you agree or disagree?',
      instruction: 'Do you agree or disagree with the statement below? Why or why not? Move the slider, state your reasons, then read what the rest of the class said.',
      visual: [
        { spot: 'pw-college', caption: 'two years, a diploma or GED needed' },
        { spot: 'pw-bootcamp', caption: 'twelve weeks, basic IT needed' },
        { spot: 'pw-adult', caption: 'adult school — no diploma needed at all' }
      ],
      statement: 'You must have a good education to get a good career in cybersecurity.',
      distribution: [8, 17, 22, 35, 18],
      coach: {
        title: 'Check your argument',
        target: 'giving an opinion with a reason; agreeing and disagreeing',
        minWords: 6,
        taught: [
          'The seven pathways from Lesson 1, and the fact that they have different entry requirements — adult school needs nothing, a university needs a diploma or a GED.',
          'Ray\'s interview in §5C: he studied and worked at the same time.'
        ],
        source: {
          text: 'You must have a good education to get a good career in cybersecurity.',
          label: 'THE STATEMENT the learner is agreeing or disagreeing with'
        },
        task: 'Say whether you agree or disagree with the statement, and give at least one reason why. This is an opinion task: there is no correct answer, but the reason has to hold up.',
        example: 'I partly disagree. Many analysts I have read about started on a help desk with no degree, and they learned on the job, so a degree is not the only route. But I agree that an employer often will not read a CV without one, so education opens the door even when it does not do the work.',
        criteria: [
          { t: 'States a position clearly (agree, disagree, or partly).', auto: 'mentions', keys: ['agree', 'disagree', 'i think', 'in my opinion', 'partly', 'not sure'], need: 1, fail: 'Start by saying where you stand: "I agree…", "I disagree…", "I partly agree…".' },
          { t: 'Gives at least one reason, not just a feeling.', auto: 'mentions', keys: ['because', 'since', 'so', 'for example', 'that is why'], need: 1, fail: 'Add "because…" or "for example…" — an opinion without a reason cannot be discussed.' },
          { t: 'Mentions something concrete: a pathway, a job, a requirement or a cost.', auto: 'mentions', keys: ['degree', 'diploma', 'ged', 'college', 'university', 'bootcamp', 'help desk', 'certification', 'experience', 'employer', 'job', 'school', 'course'], need: 1, fail: 'Ground it in something real — a degree, a bootcamp, a help desk, an employer, a cost.' },
          { t: 'At least six words.', auto: 'words', min: 6 },
          { t: 'I read the three counter-arguments and my answer still holds.', self: true },
          { t: 'I could defend this to someone who disagreed.', self: true }
        ]
      },
      counters: [
        'Many analysts started on a help desk with no degree at all. Does that change your answer?',
        'Certifications are not a degree. Do they count as "a good education"?',
        'Some employers will not read a CV without a degree. Is that about skill, or about the door?'
      ]
    },
    {
      id: 'c5b', ref: '5B', bookRef: 'p.13 · 5B', type: 'predict',
      title: 'Prepare to listen — predict',
      instruction: 'Read the sentences. <b>Predict</b> what you will hear in the interview and write your guess in each gap. Press Check answers to lock your predictions — then listen in 5C and press Check answers again to compare.',
      visual: {
        art: 'predict-cards',
        caption: 'Guessing first is not cheating and it is not wasted if you are wrong — it is what makes you listen for one specific word instead of listening to everything at once.'
      },
      whyTitle: 'What Ray actually said, and what the sentence was telling you',
      items: [
        {
          text: '1. When it was time for high school, my teachers encouraged me to [[ ]] to Freemont.', accept: ['apply', 'go'],
          why: 'You apply to a school you have to be accepted by. "Encouraged me to" needs a base verb after it, which rules out anything ending in -ing or -ed.'
        },
        {
          text: '2. Freemont gave me the chance to practise in the [[ ]] world and study hard at the same time.', accept: ['real'],
          why: '"the ___ world" is a fixed phrase, and only one word fits it here. The contrast Ray is drawing is between a classroom and an actual job.'
        },
        {
          text: '3. So I took all my [[ ]] classes and a lot of security classes.', accept: ['academic'],
          why: '"all my ___ classes and a lot of security classes" sets two kinds against each other, so the gap is the ordinary school subjects — the academic ones.'
        },
        {
          text: '4. Now I\'m [[ ]] as a security technician during the day…', accept: ['working'],
          why: '"Now I\'m" forces a present continuous, so the word has to end in -ing. "As a security technician" then tells you which -ing word it is.'
        }
      ]
    },
    {
      id: 'c5c', ref: '5C', bookRef: 'p.13 · 5C', type: 'scene',
      title: 'Listen and complete',
      instruction: 'Listen to Ray\'s interview, then answer the two questions below. When you have, go back up to your predictions in 5B and press Check answers again to see which ones you got.',
      scene: 'u1-apprentice',
      seeAlso: { card: 'c5b', label: 'Back to my predictions' },
      quiz: {
        type: 'quizset',
        items: [
          {
            q: 'What did Freemont give Ray the chance to do?',
            evidence: 'his second sentence.',
            jump: { scene: 'u1-apprentice', line: 1 },
            options: [
              { t: 'Practise in the real world and study hard at the same time.', ok: true, why: 'Right — and "at the same time" is the whole point: it was not one or the other.' },
              { t: 'Study full time without having to work.', ok: false, why: 'The opposite. He says he did both at once, which is why he mentions it.' },
              { t: 'Skip the academic classes and do only security.', ok: false, why: 'He says he took *all* his academic classes **and** a lot of security classes.' },
              { t: 'Start a university degree two years early.', ok: false, why: 'No university appears in the interview. Freemont is a high school.' }
            ]
          },
          {
            q: 'What is Ray doing now, during the day?',
            evidence: 'the last line.',
            jump: { scene: 'u1-apprentice', line: 3 },
            display: 'drop',
            options: [
              { t: 'Working as a security technician', ok: true, why: 'Right — and note the present continuous, because it is what he is doing at the moment.' },
              { t: 'Studying at Freemont', ok: false, why: 'Freemont is in the past. Listen for the tense change in the final line.' },
              { t: 'Looking for a job', ok: false, why: 'He already has one. The whole point of the interview is that the route worked.' },
              { t: 'Teaching a security class', ok: false, why: 'Teaching is Tara\'s suggested career in §1, not Ray\'s job.' }
            ]
          }
        ]
      }
    }
  ]
});
