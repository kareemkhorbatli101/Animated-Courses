CSB1.page('u1-l4-s1', {
  book: { page: 11, section: 1, lesson: 'Lesson 4 · Everyday Conversation', title: 'Learn ways to talk about careers' },
  objective: 'Talk about career choices and your strengths and weaknesses',
  prev: 'l3-s4-use-verb-forms', prevLabel: 'Use the verb forms',
  next: 'l4-s2-pronunciation', nextLabel: 'Pronunciation',
  cards: [
    {
      id: 'c1a', ref: '1A', bookRef: 'p.11 · 1A', type: 'scene',
      title: 'Listen to the conversation',
      instruction: 'Listen to the whole conversation once. <b>What did Tara do last year?</b> Listen for the general idea first — do not worry about every word.',
      scene: 'u1-career-chat',
      quiz: {
        type: 'quizset',
        items: [
          {
            q: 'What did Tara do last year?',
            evidence: 'Tara\'s long turn — she names two things.',
            jump: { scene: 'u1-career-chat', line: 3 },
            options: [
              { t: 'She ran the school cyber club and volunteered at the community tech help desk.', ok: true, why: 'Right — two things, and both of them are about working with people. That is what makes the mentor\'s suggestion fit.' },
              { t: 'She finished a university degree in cybersecurity.', ok: false, why: 'No degree is mentioned. She is still deciding what to do next.' },
              { t: 'She worked night shifts in a Security Operations Centre.', ok: false, why: 'That is Dana\'s and Omar\'s world in the At Work lesson, not Tara\'s last year.' },
              { t: 'She took a penetration-testing bootcamp.', ok: false, why: 'A bootcamp is one of the pathways from Lesson 1, but Tara never says she did one.' }
            ]
          }
        ]
      }
    },
    {
      id: 'c1b', ref: '1B', bookRef: 'p.11 · 1B', type: 'scene',
      title: 'Listen again for the details',
      instruction: 'Listen again for the answers. Compare your answers with your partner. Use ⏮ ⏭ to jump between lines, and the transcript button if you need it.',
      scene: 'u1-career-chat',
      quiz: {
        type: 'quizset',
        items: [
          {
            q: 'What does Tara enjoy?',
            evidence: 'Tara says "I think I would like to…".',
            jump: { scene: 'u1-career-chat', line: 3 },
            display: 'drop',
            options: [
              { t: 'Working with people', ok: true, why: 'Right — and notice she says it with "I think I would like to", because she is not certain.' },
              { t: 'Working alone', ok: false, why: 'That is the trainee in the Lesson 2 journal entry, not Tara.' },
              { t: 'Writing reports', ok: false, why: 'Reports belong to the SOC lesson. Tara talks about people.' },
              { t: 'Fixing hardware', ok: false, why: 'Nothing about hardware appears in this conversation.' }
            ]
          },
          {
            q: 'What type of career did the mentor suggest?',
            evidence: 'Joseph asks "How about a career in…?"',
            jump: { scene: 'u1-career-chat', line: 4 },
            display: 'drop',
            options: [
              { t: 'Security awareness training', ok: true, why: 'Right — he picks it precisely because she enjoys working with people.' },
              { t: 'Penetration testing', ok: false, why: 'A reasonable cyber job, but not the one he names. Listen to his question again.' },
              { t: 'Network engineering', ok: false, why: 'Not mentioned. The mentor matches the job to what she enjoys.' },
              { t: 'He did not suggest anything', ok: false, why: 'He does suggest one, in the form of a question: "How about a career in…?"' }
            ]
          },
          {
            q: 'Where does Tara go after school?',
            evidence: 'the very last line of the conversation.',
            jump: { scene: 'u1-career-chat', line: 5 },
            display: 'drop',
            options: [
              { t: 'To the lab', ok: true, why: 'Right — the last line. She is still practising, which is why the mentor\'s suggestion lands.' },
              { t: 'Home', ok: false, why: 'Listen to the final line again — she names a place in the building.' },
              { t: 'To the library', ok: false, why: 'The library belongs to Allison\'s advice column in Lesson 5.' },
              { t: 'To the help desk', ok: false, why: 'That was last year, in her long turn. The question asks about now.' }
            ]
          }
        ]
      }
    },
    {
      id: 'c1c', ref: '1C', bookRef: 'p.11 · 1C', type: 'cloze',
      title: 'Expressing uncertainty',
      instruction: 'Listen again and write the words Tara uses to express uncertainty. Use <b>loop</b> on the line and <b>0.6×</b> if you need it. Each phrase you get right goes into your phrase bank for the rest of the unit.',
      visual: {
        art: 'uncertainty-faces',
        caption: 'Three ways of saying the same thing. In English you say you are unsure out loud — it is not rude, and it is how you invite the other person to help.'
      },
      plain: true,
      small: true,
      text: '<div style="font-size:16px;line-height:2.4">1. I\'m [[1]] sure.<br>2. It\'s hard [[2]].<br>3. It\'s [[3]] say.</div>',
      answers: { '1': ['just not', 'not', 'just'], '2': ['to say'], '3': ['hard to', 'hard'] },
      bank: ['just not', 'to say', 'hard to'],
      whyTitle: 'Three ways of hedging, and what each one softens',
      why: {
        '1': '"just" does the softening. "I\'m not sure" is a flat statement; "I\'m just not sure" says the uncertainty is small and personal, and invites the other person to help.',
        '2': '"It\'s hard to say" moves the difficulty off you and onto the question. You are not admitting ignorance — you are saying the answer is genuinely not simple.',
        '3': 'The same phrase with the gap in the other half, so you have to hear the whole shape rather than one word. English speakers say this instead of "I don\'t know" precisely because it is not an admission.'
      }
    }
  ]
});
