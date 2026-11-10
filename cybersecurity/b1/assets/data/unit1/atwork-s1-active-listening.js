CSB1.page('u1-atwork-s1', {
  book: { page: 17, section: 'At Work', lesson: 'At Work', title: 'Show that you are listening' },
  objective: 'Show that you are listening during a shift handover',
  prev: 'l5-s3-talk-it-over', prevLabel: 'Talk it over',
  next: 'review-s1-teamwork', nextLabel: 'Teamwork & language review',
  intro: 'Three short conversations on the SOC floor at the end of a shift. Listening properly here is not politeness — it is how the next team knows what is already broken.',
  cards: [
    {
      id: 'ca', ref: 'A', bookRef: 'p.17 · A', type: 'scene',
      title: 'How many people are talking?',
      instruction: 'Listen to the people working in the Security Operations Centre. <b>How many people are talking in each conversation?</b> Listen for the voices, not the faces.',
      scene: 'u1-handover',
      quiz: {
        type: 'mcq',
        options: [
          { t: 'Three people talk: a shift lead and two analysts.', ok: true, why: 'Correct — Dana leads the handover, and Omar and Priya each report on their shift.' },
          { t: 'Four people talk.', ok: false, why: 'Only three distinct voices appear. Count the names in the transcript.' },
          { t: 'Two people talk in every conversation.', ok: false, why: 'Listen again — a third voice joins partway through.' }
        ]
      }
    },
    {
      id: 'cb', ref: 'B', bookRef: 'p.17 · B', type: 'checklist',
      title: 'Which activities are mentioned?',
      instruction: 'Listen again. Then put a check next to every activity that is mentioned. Play the handover above as many times as you need.',
      visual: {
        still: 'u1-handover',
        caption: 'The same three people, paused. You are listening for activities now, not for who is speaking — nine of the ten below are in the handover.'
      },
      whyTitle: 'Nine of the ten, and where each one was said',
      items: [
        { t: 'search online', ok: true, why: 'Dana asks for the advisory to be looked up before the next shift starts — searching online, in the databases the team is given.' },
        { t: 'make a schedule', ok: true, why: 'The patching window has to be planned for the week, which is making a schedule. Listen for the days rather than for the word itself.' },
        { t: 'memorize a code', ok: true, why: 'Priya repeats the ticket reference so that she will not have to look it up again. Saying a thing twice to hold on to it is memorizing it.' },
        { t: 'take a break', ok: true, why: 'Omar has been on the dashboard for hours and is told to stop for ten minutes. The handover is the moment somebody notices that.' },
        { t: 'order some hardware keys', ok: true, why: 'A supply job handed to the next shift. It is the kind of small item a handover exists for — nobody would write a ticket about it.' },
        { t: 'find a quiet place', ok: true, why: 'The write-up cannot be done on the floor with the alerts running, so it moves to the booth.' },
        { t: 'talk to the manager', ok: true, why: 'Something has to be escalated, and escalating means a person, not a ticket.' },
        { t: 'take notes in the meeting', ok: true, why: 'Said almost in passing, and it is the one that makes the rest of the handover possible — the active-listening behaviour from the chart below.' },
        { t: 'take a nap', ok: false, why: 'The only one that never comes up. "Take a break" does, and the two are easy to blur — but a break is ten minutes away from the screen, not sleep, and nobody on this shift suggests sleeping.' },
        { t: 'make an outline', ok: true, why: 'The incident report is planned before it is written, exactly as the instructor insisted in Lesson 1.' }
      ]
    },
    {
      id: 'cc', ref: 'C', bookRef: 'p.17 · C', type: 'listenchart',
      title: 'When you want to show that you are listening',
      instruction: 'Read the chart. Click a behaviour to watch it, and a phrase to hear it. Then answer the three questions — the first two have a right answer, the third is yours.',
      visual: {
        art: 'listening-cues',
        caption: 'Five things you do with your body and five you say. None of them is about being polite — each one tells the speaker "keep going, I have got that".'
      },
      dos: ['lean forward', 'nod your head slowly', 'make eye contact', 'tilt your head to one side', 'take notes'],
      says: ['Really?', 'Uh-huh.', 'Go on…', 'Oh!', 'Hmm…'],
      questions: [
        {
          q: '1. Why is it important to show that you are listening?',
          evidence: 'think about what the speaker needs, not about what looks polite.',
          options: [
            { t: 'It stops the speaker talking for too long.', ok: false, why: 'The opposite — "Go on…" and "Uh-huh" invite the speaker to continue.' },
            { t: 'It means you do not have to take notes.', ok: false, why: 'Taking notes is itself one of the five listening behaviours in the chart.' },
            { t: 'It tells the speaker to carry on, and it proves the information has reached you.', ok: true, why: 'Right — it is a signal, not a courtesy. In a handover the speaker is about to leave and needs to know you have it.' },
            { t: 'It shows the speaker that you are a polite person.', ok: false, why: 'Politeness is a side effect. The reason it matters at work is that the speaker needs to know the information arrived.' }
          ]
        },
        {
          q: '2. What can the consequences be if you fail to listen well during a shift handover?',
          evidence: 'the handover in §A — what were Dana, Omar and Priya actually handing over?',
          jump: { scene: 'u1-handover' },
          options: [
            { t: 'An open incident can be missed and stay open all night, or work can be repeated — in the worst case an attack somebody already spotted carries on unnoticed.', ok: true, why: 'Right, and the last part is the serious one: the attack was already found. Failing to listen is what loses that.' },
            { t: 'The next shift will think you are unfriendly.', ok: false, why: 'Possibly, but that is not a consequence for the work. Look at what is in the handover itself.' },
            { t: 'You will have to stay late to finish your own tickets.', ok: false, why: 'The risk is not to your evening — it is to the incident nobody picks up.' },
            { t: 'Nothing serious, because everything is written in the ticket system anyway.', ok: false, why: 'If that were true there would be no handover. The spoken part carries what the tickets do not say yet.' }
          ]
        },
        {
          q: '3. How else can you show you are listening, with words or with your body? Give your own ideas.',
          placeholder: 'I could also…',
          minWords: 8,
          model: 'Repeat the key fact back ("so ticket 41 is still open"), ask a short clarifying question, write it on the board where the speaker can see it, or put your phone face down.'
        }
      ],
      coach: {
        title: 'Check your own ideas in question 3',
        target: 'could for suggestions; the active-listening phrases from the chart',
        minWords: 8,
        taught: [
          'Do: lean forward · nod your head slowly · make eye contact · tilt your head to one side · take notes.',
          'Say: Really? · Uh-huh. · Go on… · Oh! · Hmm…'
        ],
        source: { scene: 'u1-handover', label: 'THE HANDOVER the learner listened to' },
        task: 'Suggest other ways of showing you are listening, with words or with your body, beyond the ten in the chart.',
        example: 'I could repeat the key fact back to them, so they hear that I have it — "so ticket 41 is still open". I could also ask one short question instead of a long one, and put my phone face down on the desk where they can see it.',
        criteria: [
          { t: 'Suggests at least two things not already in the chart.', auto: 'sentences', min: 2 },
          { t: 'At least one of them is something you say.', auto: 'mentions', keys: ['say', 'ask', 'repeat', 'question', 'check', 'confirm', 'tell', 'so '], need: 1, fail: 'Add a spoken one — repeating the fact back, or asking a short question.' },
          { t: 'Uses "could" or "can" for a suggestion.', auto: 'mentions', keys: ['could', 'can', 'i would', 'you might'], need: 1, fail: 'Suggestions take "could" or "can": "I could repeat the key fact back…".' },
          { t: 'At least eight words.', auto: 'words', min: 8 },
          { t: 'These are things I would actually do on a real shift.', self: true }
        ]
      }
    },
    {
      id: 'cd', ref: 'D', bookRef: 'p.17 · D', type: 'observer',
      title: 'Observer mode',
      instruction: 'Work in a team of three and take turns in each role. <b>Speaker A</b> asks about the other\'s favourite way to practise cybersecurity English outside class, and shows they are listening. <b>Speaker B</b> answers. The <b>Observer</b> marks every example of active listening they see or hear. <br><br>On your own you are the Observer: play the handover and tick each behaviour <b>as it happens</b>. A tick only counts if it lands within a few seconds of the real cue.',
      scene: 'u1-handover',
      tolerance: 5000,
      dos: ['lean forward', 'nod your head slowly', 'make eye contact', 'tilt your head to one side', 'take notes'],
      says: ['Really?', 'Uh-huh.', 'Go on…', 'Oh!', 'Hmm…']
    }
  ]
});
