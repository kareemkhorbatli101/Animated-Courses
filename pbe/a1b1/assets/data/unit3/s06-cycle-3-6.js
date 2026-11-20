/* Unit 3 · cycle 3.6 — I am late because the road was closed.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u3-s06', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 3 · 3.6', part: '3.6',
          section: '6', lesson: 'I am late because the road was closed', title: 'I am late because the road was closed' },
  objective: 'say you are late, and why',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '3.6.1',
      bookRef: 'Unit 3 · 3.6 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'You are late. What do you say first? Say it in Arabic, then in English.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which is better at work? sorry sorry sorry, '
              + 'there was a big problem · I am twenty minutes late. The road was '
              + 'closed.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.6.2',
      bookRef: 'Unit 3 · 3.6 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-6',
      passage: {
        title: 'Language box',
        html: '<p><b>Saying you are late</b></p><table '
          + 'class=\'bk\'><tr><th>Step</th><th>You say</th></tr><tr><td><b>1 how '
          + 'late</b></td><td><b>I am twenty minutes '
          + 'late.</b></td></tr><tr><td><b>2 why, short</b></td><td><b>The road '
          + 'was closed at Jaramana.</b></td></tr><tr><td><b>3 what you do next '
          + 'time</b></td><td><b>Next time I telephone.</b></td></tr></table><p>⚠ '
          + '<b>The TIME first, not the reason.</b> <b>The supervisor needs to '
          + 'know how long, so he can move a man. The reason can wait ten '
          + 'seconds.</b></p><p>⚠ <b>One reason, short, with <i>because</i> or '
          + 'without it:</b> <i>I am late <b>because</b> the bus did not '
          + 'come.</i> · <i>I am late. The bus did not come.</i> <b>Both are '
          + 'fine. A long story is not.</b></p><p>⚠ <b>Do not say sorry three '
          + 'times.</b> <b>Say it once, or not at all. The time and the reason '
          + 'are the apology.</b></p><p><b>Practise:</b> Put them in order: '
          + '<i>the bus did not come · I am fifteen minutes late · next time I '
          + 'telephone</i></p><p><b>Useful words:</b> I am <span '
          + 'class="blank"></span> minutes late. · because · the road was closed '
          + '· next time · I telephone.</p><p><b>Sound — the short reason.</b> 🔊 '
          + '<b>Track 3.12</b> Listen. <i>I am twenty minutes late. The road was '
          + 'closed.↘</i> <b>Both flat and both short.</b> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How late is Ammar?',
            options: [{
              t: 'ten minutes',
              ok: false,
              why: 'Less than he says.'
            },
            {
              t: 'twenty minutes',
              ok: true,
              why: 'He says twenty minutes and gives the reason in the same breath.'
            },
            {
              t: 'an hour',
              ok: false,
              why: 'Much more than he says - the lorry had only just been dealt with.'
            }],
            evidence: 'Ammar\'s first line, where he says the time and the reason'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '3.6.2',
      bookRef: 'Unit 3 · 3.6 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Why is he late?',
            model: 'The road was closed at Jaramana',
            minWords: 2,
            rows: 2,
            keys: ['road',
              'closed',
              'jaramana'],
            need: 1
          },
      {
            q: 'What does Abu Yasser ask him to do next time?',
            model: 'Telephone — from the road',
            minWords: 1,
            rows: 2,
            keys: ['telephone',
              'road'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '3.6.3',
      bookRef: 'Unit 3 · 3.6 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One is late. One is the supervisor. Then change places.',
      scene: 'u3-3-6-pair',
      roles: [{
          who: 'a',
          label: 'A'
        },
      {
          who: 'b',
          label: 'B'
        }],
      minWords: 8,
      notePlaceholder: 'Write two lines you said in the role-play…',
      table: {
        title: 'The cards the book gives you',
        head: ['Card 1',
        'Card 2'],
        rows: [['20 minutes · road closed at Jaramana · lorry · 7.15 · Samih',
          '40 minutes · the bus did not come · delivery · 8.00 · Hani']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '3.6.3R',
      bookRef: 'Unit 3 · 3.6 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ I am <span class="blank"></span> '
          + 'minutes late.</td><td>☐ because</td><td>☐ The road was '
          + 'closed.</td><td>☐ next time</td><td>☐ I telephone.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '3.6.4',
      bookRef: 'Unit 3 · 3.6 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of two times you were late. Write it. Time first, then the reason.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>How late</th><th>Why, in five '
          + 'words</th><th>What I do next '
          + 'time</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'How late: 20 minutes Why: the road was closed Next time: I '
              + 'telephone from the road · How late: 45 minutes Why: the bus did '
              + 'not come Next time: I take the earlier bus',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of two times you were late. Write it. Time first, then the reason.',
        grammar: 'Saying you are late',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A late note has four things: how late → why, short → what happened '
          + 'to your job → what you do next time.',
        '⚠ Line three is the one people forget and it is the one the '
          + 'supervisor wants. Who did my job while I was not here?',
        '⚠ Line four is not an apology. It is a plan. Next time I telephone. '
          + 'A plan is believed. I am very sorry is not.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '3.6.4R',
      bookRef: 'Unit 3 · 3.6 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I was minutes late. . Next time I .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I was twenty minutes late. The road was closed at Jaramana. Next '
              + 'time I telephone',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: I was minutes late. . Next time I .',
        grammar: 'Saying you are late',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A late note has four things: how late → why, short → what happened '
          + 'to your job → what you do next time.',
        '⚠ Line three is the one people forget and it is the one the '
          + 'supervisor wants. Who did my job while I was not here?',
        '⚠ Line four is not an apology. It is a plan. Next time I telephone. '
          + 'A plan is believed. I am very sorry is not.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '3.6.5',
      bookRef: 'Unit 3 · 3.6 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note Ammar left on the table. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>FOR ABU YASSER — 14 MARCH</b></p><p><b>I was 25 minutes '
          + 'late.</b> The road was closed at Jaramana.</p><p><b>The lorry:</b> '
          + 'Samih took it at 7.15.</p><p><b>Next time:</b> I telephone from the '
          + 'road.</p><p><b>A.Z.</b></p><h4>Writer\'s box</h4><p><b>A late note '
          + 'has four things:</b> how late → why, short → what happened to your '
          + 'job → what you do next time.</p><p>⚠ <b>Line three is the one people '
          + 'forget and it is the one the supervisor wants.</b> <b><i>Who did my '
          + 'job while I was not here?</i></b></p><p>⚠ <b>Line four is not an '
          + 'apology. It is a plan.</b> <i>Next time I telephone.</i> <b>A plan '
          + 'is believed. <i>I am very sorry</i> is not.</b></p>'
      },
      questions: [{
            q: 'How late was he?',
            model: 'Twenty-five minutes',
            minWords: 1,
            rows: 2,
            keys: ['twenty-five',
              'minutes'],
            need: 1
          },
      {
            q: 'Who took the lorry?',
            model: 'Samih — at 7.15',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What will he do next time?',
            model: 'Telephone from the road',
            minWords: 1,
            rows: 2,
            keys: ['telephone',
              'road'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '3.6.6',
      bookRef: 'Unit 3 · 3.6 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a late note for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['FOR ABU YASSER — 15 MARCH',
      'I was 30 minutes late. The bus did not come'],
      coach: {
        title: 'What to include',
        task: 'Write a late note for your own work (15 words or more).',
        criteria: [{ t: 'A late note has four things: how late → why, short → what '
              + 'happened to your job → what you do next time.' },
            { t: '⚠ Line three is the one people forget and it is the one the '
              + 'supervisor wants. Who did my job while I was not here?' },
            { t: '⚠ Line four is not an apology. It is a plan. Next time I '
              + 'telephone. A plan is believed. I am very sorry is not.' }]
      },
      aiCheck: {
        task: 'Write a late note for your own work (15 words or more).',
        grammar: 'Saying you are late',
        must: ['A late note has four things: how late → why, short → what happened '
          + 'to your job → what you do next time.',
        '⚠ Line three is the one people forget and it is the one the '
          + 'supervisor wants. Who did my job while I was not here?',
        '⚠ Line four is not an apology. It is a plan. Next time I telephone. '
          + 'A plan is believed. I am very sorry is not.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '3.6.6P',
      bookRef: 'Unit 3 · 3.6 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>How '
          + 'late, in minutes</td><td>&nbsp;</td></tr><tr><td>A short '
          + 'reason</td><td>&nbsp;</td></tr><tr><td>Who did the '
          + 'job</td><td>&nbsp;</td></tr><tr><td>A plan for next '
          + 'time</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "I am very very sorry" · (pointing) '
              + 'Here. (reading) "Next time I am careful"',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Saying you are late',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A late note has four things: how late → why, short → what happened '
          + 'to your job → what you do next time.',
        '⚠ Line three is the one people forget and it is the one the '
          + 'supervisor wants. Who did my job while I was not here?',
        '⚠ Line four is not an apology. It is a plan. Next time I telephone. '
          + 'A plan is believed. I am very sorry is not.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '3.6.6R',
      bookRef: 'Unit 3 · 3.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read their next time line. The class says if it is a plan or an apology.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '3.6.7',
      bookRef: 'Unit 3 · 3.6 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a day you were late (<b>20 to 35 words</b>). How late? Why? Who '
  + 'did your job? What do you do now?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['In February I was forty minutes late. The bus did not come and I '
        + 'waited at Mazzeh. Hani opened the store for me. Now I take the bus '
        + 'before it, every day'],
      coach: {
        title: 'What to include',
        task: 'Write about a day you were late (20 to 35 words). How late? Why? Who did '
  + 'your job? What do you do now?',
        criteria: [{ t: 'A late note has four things: how late → why, short → what '
              + 'happened to your job → what you do next time.' },
            { t: '⚠ Line three is the one people forget and it is the one the '
              + 'supervisor wants. Who did my job while I was not here?' },
            { t: '⚠ Line four is not an apology. It is a plan. Next time I '
              + 'telephone. A plan is believed. I am very sorry is not.' }]
      },
      aiCheck: {
        task: 'Write about a day you were late (20 to 35 words). How late? Why? Who '
          + 'did your job? What do you do now?',
        grammar: 'Saying you are late',
        must: ['A late note has four things: how late → why, short → what happened '
          + 'to your job → what you do next time.',
        '⚠ Line three is the one people forget and it is the one the '
          + 'supervisor wants. Who did my job while I was not here?',
        '⚠ Line four is not an apology. It is a plan. Next time I telephone. '
          + 'A plan is believed. I am very sorry is not.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '3.6.7P',
      bookRef: 'Unit 3 · 3.6 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Did you telephone? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Did you telephone? — No. I did not have the number. I have it now',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Did you telephone? '
          + 'Write the answer.',
        grammar: 'Saying you are late',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A late note has four things: how late → why, short → what happened '
          + 'to your job → what you do next time.',
        '⚠ Line three is the one people forget and it is the one the '
          + 'supervisor wants. Who did my job while I was not here?',
        '⚠ Line four is not an apology. It is a plan. Next time I telephone. '
          + 'A plan is believed. I am very sorry is not.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '3.6.7R',
      bookRef: 'Unit 3 · 3.6 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. In how many did somebody telephone? Count them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> the telephone number '
          + 'you would ring if you were late tomorrow (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
