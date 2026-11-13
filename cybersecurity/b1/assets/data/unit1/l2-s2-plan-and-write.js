CSB1.page('u1-l2-s2', {
  book: { page: 7, section: 2, lesson: 'Lesson 2 · Writing', title: 'Plan and write' },
  objective: 'Write a paragraph describing your feelings on the first day in the security lab',
  prev: 'l2-s1-prepare-to-write', prevLabel: 'Prepare to write',
  next: 'l2-s3-feedback-revise', nextLabel: 'Get feedback and revise',
  cards: [
    {
      id: 'c2a', ref: '2A', bookRef: 'p.7 · 2A', type: 'notes',
      title: 'Talk about the questions and take notes',
      instruction: 'Talk about the questions with your class. Take notes — you will use them in 2B.',
      visual: {
        art: 'group-roles',
        caption: 'The group in the model entry got through day one because one person said the hard thing out loud. Your notes are for your own version of that.'
      },
      coach: {
        title: 'Are these notes enough to write from?',
        /* Marking is ON, with a different job from the writing cards. These are NOTES, and a
           model that marks them as prose will take grammar off a learner for a word list. The
           question this card asks is the question the model is asked: is there enough here to
           build three paragraphs on? */
        task: 'Judge whether these NOTES are enough to write a three-paragraph narrative from: '
          + 'one real challenge, something that was actually done about it, and a lesson. They '
          + 'are notes, not writing - do not mark spelling, grammar or sentence form, and do '
          + 'not ask for full sentences. Say what is MISSING that paragraph 2 or 3 would need.',
        taught: 'A narrative has three paragraphs: the challenge, how you overcame it, the lesson.',
        criteria: [
          { t: 'I named one real challenge, not a general topic.', auto: 'words', min: 8 },
          { t: 'My notes say what I actually did, or who helped.', auto: 'mentions', keys: ['helped', 'asked', 'told', 'showed', 'tried', 'decided', 'started', 'practised', 'practiced', 'said'], need: 1, fail: 'Add a note about what you did or who helped — paragraph 2 is built on it.' },
          { t: 'This is something I am willing to write about for the class.', self: true },
          { t: 'I can remember enough detail to fill three paragraphs.', self: true }
        ]
      },
      prompts: [
        'Talk about something difficult (a challenge) in your life that you successfully got through. It can be about learning, work or technology.',
        'How did you do it? How did you overcome the challenge?'
      ],
      examples: [
        'My first day in an English-speaking workplace, when I had to answer the phone.',
        'Learning to use a ticketing system in a language I was still learning.',
        'Speaking in a team meeting for the first time.',
        'Reporting a mistake I had made to my supervisor.',
        'Studying for a certification exam while working nights.',
        'Explaining a technical problem to someone who was angry.',
        'Changing career after many years in a different job.',
        'Asking for help when I did not understand an instruction.'
      ]
    },
    {
      id: 'c2b', ref: '2B', bookRef: 'p.7 · 2B', type: 'writer',
      title: 'Write about a life lesson you learned',
      instruction: 'Write about a life lesson you learned. The model journal entry from 1A is on this card — open it whenever you want it — and your notes from 2A are above. Each paragraph has one main idea, and the margin tells you which.',
      /* the model is on the previous page, so the card carries it.
         l2-s2's shell loads l2-s1's data file for the coach prompt,
         which is what makes this resolve in the browser too. */
      source: {
        passage: 'c1a',
        page: 'u1-l2-s1',
        label: 'The model journal entry you are writing from (1A)'
      },
      seeAlso: { card: 'c2a', label: 'Back to my notes' },
      visual: {
        art: 'narrative-arc',
        caption: 'The three boxes below are these three panels. One main idea each — if paragraph 1 already contains the lesson, move it down.'
      },
      minWords: 80,
      pastCheck: true,
      coach: {
        title: 'Check your journal entry',
        target: 'simple past and past continuous',
        minWords: 80,
        taught: [
          'A narrative has one main idea per paragraph: (1) the challenge, (2) how you overcame it, (3) the lesson you learned.',
          'Simple past for finished actions; past continuous for what was going on around them ("I was eating dinner when I wrote the report").'
        ],
        source: {
          passage: 'c1a',
          page: 'u1-l2-s1',
          label: 'THE MODEL JOURNAL ENTRY the learner was given (1A)'
        },
        task: 'Write a three-paragraph journal entry about a life lesson you learned, modelled on the journal entry in 1A.',
        parts: [
          'Paragraph 1 — the challenge: say what was difficult and why you felt that way. Past tense.',
          'Paragraph 2 — how you overcame it: say what happened and who or what helped. Past tense.',
          'Paragraph 3 — the life lesson: say what you learned and what you will do next time.'
        ],
        example: [
          'Tuesday, March 4',
          'When I first started on the service desk it was hard to answer the phone in English. I was nervous because I could not control what the caller would say. I was afraid I would have to ask them to repeat everything, and I thought they would hear that I was new.',
          'My team leader sat beside me for the first two shifts. She told me to say "Let me check that for you" whenever I needed a second to think. While I was saying it I was reading the screen, and the caller waited. After a week I was taking calls on my own, and I wrote my first ticket without help.',
          'After this experience I learned that asking for a moment is not the same as not knowing. Now I say it every day, and next time I start something new I will look for one sentence like it on the first morning.'
        ],
        exampleNote: 'Notice what it does <b>not</b> do: it never puts the lesson in paragraph 1, and it never explains the job. Yours should be about your own life, not this one.',
        criteria: [
          { t: 'Paragraph 1 describes a real challenge and says why it felt difficult.', auto: 'mentions', keys: ['hard', 'difficult', 'nervous', 'afraid', 'worried', 'challenge', 'could not', 'couldn\'t', 'scared'], need: 1, fail: 'The checker could not find words such as hard, difficult, nervous, afraid or challenge.' },
          { t: 'Paragraph 2 says what you did, or who helped.', auto: 'mentions', keys: ['overcame', 'overcome', 'helped', 'practised', 'practiced', 'asked', 'tried', 'decided', 'started', 'showed', 'told me'], need: 1, fail: 'Say what actually happened: "I overcame this by…", "my supervisor helped me…", "I asked…".' },
          { t: 'Paragraph 3 states the lesson, as something generally true.', auto: 'mentions', keys: ['learned', 'learnt', 'lesson', 'now i', 'next time', 'i know'], need: 1, fail: 'Add a sentence beginning "After this experience I learned that…".' },
          { t: 'Uses the past tense consistently — at least four past-tense verbs.', auto: 'past', need: 4 },
          { t: 'At least 80 words in total.', auto: 'words', min: 80 },
          { t: 'Each paragraph carries only one main idea.', self: true, note: 'check that the lesson is not already sitting in paragraph 1' },
          { t: 'At least one sentence uses the past continuous ("I was …-ing").', self: true },
          { t: 'It is about something that really happened to me.', self: true }
        ]
      },
      model: [
        '(Day), (Date)',
        'When I first started the cybersecurity course it was hard to…',
        'I overcame this challenge by…',
        'After this experience I learned that…'
      ],
      stems: [
        '(Day), (Date)',
        'When I first started… it was hard to…',
        'I was nervous at first because…',
        'I was afraid I might…',
        'I overcame this challenge by…',
        'After this experience I learned that…'
      ],
      paras: [
        { label: 'Paragraph 1 — the challenge', purpose: 'Say what was difficult, and why you felt that way. Use the past tense.', min: 20, rows: 4, placeholder: '(Day), (Date)\nWhen I first started…' },
        { label: 'Paragraph 2 — how you overcame it', purpose: 'Say what happened and who or what helped. Use the past tense.', min: 25, rows: 5, placeholder: 'I overcame this challenge by…' },
        { label: 'Paragraph 3 — the life lesson', purpose: 'Say what you learned and what you will do next time.', min: 15, rows: 3, placeholder: 'After this experience I learned that…' }
      ]
    }
  ]
});
