/* Unit 1 · cycle 1.4 — He is the driver. She is in the office..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u1-s04', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 1 · 1.4', part: '1.4',
          section: '4', lesson: 'He is the driver. She is in the office.', title: 'He is the driver. She is in the office.' },
  objective: 'say who another person is',
  study: {
    minutes: 90,
    objective: 'say who another person is',
    steps: [{
          title: 'Get ready',
          mins: 6,
          why: 'Waking the words up before you need them.',
          todo: 'Answer in one or two words. Nothing here is marked and nothing is wrong.',
          alone: 'Say your answers aloud to yourself, then write them.'
        },
        {
          title: 'Listen and read',
          mins: 12,
          why: 'The lesson itself - everything after this practises what happens here.',
          todo: 'Play it once with the subtitles ON and once with them OFF. Use '
            + '0.6x if the voices are fast. Then answer the question under it.',
          alone: 'Play the scene twice before you look at the question.'
        },
        {
          title: 'Practise',
          mins: 7,
          why: 'Saying the lines yourself, with the other part played for you.',
          todo: 'Pick your role; the engine mutes it and waits for you. Say the '
            + 'line out loud - not in your head. Then swap roles and do it again.',
          alone: 'This is designed for one person: the engine IS your partner.'
        },
        {
          title: 'Perform',
          mins: 5,
          why: 'Doing it without the words in front of you.',
          todo: 'Close the book - the table above - and say the exchange from '
            + 'memory. Press Record yourself and listen back.',
          alone: 'Record yourself, play it back, and mark your own against the table.'
        },
        {
          title: 'Your turn',
          mins: 9,
          why: 'The same language, about YOUR workplace rather than the book\'s.',
          todo: 'Use the real names, numbers and places from your own job. Press '
            + 'Say it and speak your answer; it types itself.',
          alone: 'Say it aloud first, then write. Speaking first is the point of the step.'
        },
        {
          title: 'Report',
          mins: 6,
          why: 'Saying it to a room, which is harder than saying it to one person.',
          todo: 'Stand up if you can. Say it once, slowly. Then write what you said.',
          alone: 'Say it aloud to the empty room anyway - the difficulty is the '
            + 'standing up and the once, not the audience.'
        },
        {
          title: 'Read',
          mins: 7,
          why: 'Meeting the shape of the thing before you have to write one.',
          todo: 'Read the page above the questions, then answer. The answers are IN '
            + 'the page - if you cannot find one, read again rather than guess.',
          alone: 'Cover your answer and read the page again before you check.'
        },
        {
          title: 'Write with help',
          mins: 9,
          why: 'Writing it with the model beside you.',
          todo: 'Look at the model, then write your own about your own work. Use '
            + 'the openers if you are stuck, and watch the word counter.',
          alone: 'Write it, leave it, come back and read it aloud before you check.'
        },
        {
          title: 'Check together',
          mins: 5,
          why: 'Reading somebody else\'s work closely enough to help it.',
          todo: 'Point at a LINE and name ONE thing. \'It is good\' is not feedback.',
          alone: 'Check your own work against the checklist as if it were somebody '
            + 'else\'s, a day later.'
        },
        {
          title: 'Share',
          mins: 3,
          why: 'Seeing how five other people did the same job.',
          todo: 'Put the work where it can be read. Read three. Say one specific thing.',
          alone: 'Compare yours with the model and with the examples on the card.'
        },
        {
          title: 'Write freely',
          mins: 12,
          why: 'The same writing, without the model.',
          todo: 'Write first, check the model afterwards. Looking first turns it '
            + 'into copying.',
          alone: 'Set a timer for ten minutes and do not stop to correct anything.'
        },
        {
          title: 'Respond',
          mins: 5,
          why: 'Answering what somebody actually wrote, which is a skill of its own.',
          todo: 'Read their work, then ask a real question about it - one you do '
            + 'not already know the answer to.',
          alone: 'Ask the question of your own work and answer it honestly.'
        },
        {
          title: 'Share',
          mins: 4,
          why: 'Seeing how five other people did the same job.',
          todo: 'Put the work where it can be read. Read three. Say one specific thing.',
          alone: 'Compare yours with the model and with the examples on the card.'
        }]
  },
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '1.4.1',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say the names of three people at your work. What is each one\'s job?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the four jobs. Which are in the yard, and which are in the '
              + 'office? driver · storeman · accountant · counter',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '1.4.2',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-4',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar — <i>he · she · it</i></b></p><table '
          + 'class=\'bk\'><tr><th>+</th><th>–</th><th>?</th></tr><tr><td>He '
          + '<b>is</b> the driver. He<b>\'s</b>…</td><td>He <b>is not</b> the '
          + 'storeman.</td><td><b>Is</b> he the driver? — Yes, he '
          + 'is.</td></tr><tr><td>She <b>is</b> in the office. '
          + 'She<b>\'s</b>…</td><td>She <b>is not</b> in the '
          + 'yard.</td><td><b>Is</b> she new? — Yes, she is.</td></tr><tr><td>It '
          + '<b>is</b> my badge. It<b>\'s</b>…</td><td>It <b>is not</b> your '
          + 'badge.</td><td><b>Is</b> it the key? — No, it is '
          + 'not.</td></tr></table><p>⚠ <b>he</b> = a man. <b>she</b> = a woman. '
          + '<b>it</b> = a thing. In Arabic a thing can be he or she. In English '
          + 'a thing is <b>it</b>.</p><p><b>Practise:</b> Write <i>he is</i>, '
          + '<i>she is</i> or <i>it is</i>.</p><p>1 Fadi? <span '
          + 'class="blank"></span> the driver. 2 Nour? <span '
          + 'class="blank"></span> in the office. 3 The badge? <span '
          + 'class="blank"></span> on the table. 4 Majd? <span '
          + 'class="blank"></span> on the counter.</p><p><b>Useful words:</b> '
          + 'That man is… · That woman is… · He is good with… · her first day · '
          + 'upstairs / down here</p><p><b>Sound — <i>he\'s / she\'s</i>.</b> 🔊 '
          + '<b>Track 1.8</b> Listen. Say it. <i>He is</i> → <i>he\'s</i>. <i>She '
          + 'is</i> → <i>she\'s</i>. <i>He\'s the driver.</i> <i>She\'s in the '
          + 'office.</i> Say it four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. How many people does Abu Yasser name?',
            options: [{
              t: 'two',
              ok: false,
              why: 'He has named two before he stops for breath - keep listening, '
                + 'he goes on.'
            },
            {
              t: 'three',
              ok: false,
              why: 'Close. One more name comes after the pause.'
            },
            {
              t: 'four',
              ok: true,
              why: 'He names four people, each with a job.'
            }],
            evidence: 'count the people as Abu Yasser names them, one by one'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '1.4.2',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. Who is Fadi?',
            model: 'The driver',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Where is Nour?',
            model: 'In the office, upstairs',
            minWords: 1,
            rows: 2,
            keys: ['office',
              'upstairs'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '1.4.3',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. Read the lines. Say it. Then change places.',
      scene: 'u1-1-4-pair',
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
        rows: [['Fadi · driver · Nour · office · new',
          'Majd · counter · Hala · customer service · not new']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '1.4.3R',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ That man is…</td><td>☐ He is '
          + 'the…</td><td>☐ That woman is…</td><td>☐ She is in the…</td><td>☐ Is '
          + 'she new?</td></tr></table>'
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
      ref: '1.4.4',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of four people at your work. Tell your partner who they are. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Name</th><th>he / she</th><th>Job or '
          + 'place</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'Samih — he — storeman · Rima — she — the office · Hani — he — '
              + 'driver · Lamia — she — the counter',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of four people at your work. Tell your partner who they are. Write it.',
        grammar: 'Grammar — he · she · it',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (1.4) teaches: Grammar — he · she · it. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar — he · she · it.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '1.4.4R',
      bookRef: 'Unit 1 · 1.4 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: is . He is / She is the .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'Rima is in the office. She is the accountant',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — is —. He is / She is the —. (The dashes are blanks '
          + 'the learner fills in with their own workplace. Judge what they wrote '
          + 'in them, not the blanks.)',
        grammar: 'Grammar — he · she · it',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (1.4) teaches: '
          + 'Grammar — he · she · it. Judge the language against THAT and against '
          + 'nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar — he · she · it.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '1.4.5',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the note on the store wall. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>WHO TO ASK — STORE WALL</b></p><p><b>Abu Yasser</b> — he is '
          + 'the supervisor. Ask him about the shelves and the '
          + 'count.</p><p><b>Fadi</b> — he is the driver. Ask him about the lorry '
          + 'and the times.</p><p><b>Majd</b> — he is on the counter. Ask him '
          + 'about the customers.</p><p><b>Nour</b> — she is in the office. Ask '
          + 'her about paper: notes, lists, numbers.</p><p><b>Abu Raed</b> — he '
          + 'is the gate. Ask him about visitors.</p><h4>Writer\'s '
          + 'box</h4><p><b>A who-to-ask note has three things on every line:</b> '
          + 'the name → <i>he is</i> or <i>she is</i> → what to ask '
          + 'about.</p><p>⚠ Use <b>him</b> for a man and <b>her</b> for a woman: '
          + '<i>Ask <b>him</b> about the lorry. Ask <b>her</b> about the '
          + 'lists.</i></p><p>⚠ One person, one line. A line with two people is a '
          + 'line nobody can use.</p>'
      },
      questions: [{
            q: 'Who do you ask about the lorry?',
            model: 'Fadi, the driver',
            minWords: 1,
            rows: 2,
            keys: ['fadi',
              'driver'],
            need: 1
          },
      {
            q: 'What do you ask Nour about?',
            model: 'Paper: notes, lists and numbers',
            minWords: 2,
            rows: 2,
            keys: ['paper',
              'notes',
              'lists',
              'numbers'],
            need: 1
          },
      {
            q: 'Who is the supervisor?',
            model: 'Abu Yasser',
            minWords: 1,
            rows: 2,
            keys: ['abu',
              'yasser'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '1.4.6',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a who-to-ask note for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['WHO TO ASK',
      'Samih — he is the storeman. Ask him about the shelves'],
      stems: ['Ask him about…',
      'Ask her about…'],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'woman',
        'thing',
        'arabic',
        'english',
        'practise',
        'fadi',
        'driver']
      },
      coach: {
        title: 'What to include',
        task: 'Write a who-to-ask note for your own work (15 words or more).',
        criteria: [{ t: 'A who-to-ask note has three things on every line: the name → he '
              + 'is or she is → what to ask about.' },
            { t: '⚠ Use him for a man and her for a woman: Ask him about the '
              + 'lorry. Ask her about the lists.' },
            { t: '⚠ One person, one line. A line with two people is a line nobody can use.' }]
      },
      aiCheck: {
        task: 'Write a who-to-ask note for your own work (15 words or more).',
        grammar: 'Grammar — he · she · it',
        must: ['A who-to-ask note has three things on every line: the name → he is '
          + 'or she is → what to ask about.',
        '⚠ Use him for a man and her for a woman: Ask him about the lorry. '
          + 'Ask her about the lists.',
        '⚠ One person, one line. A line with two people is a line nobody can use.']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '1.4.6P',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / '
          + '✗</th></tr><tr><td><i>he is</i> or <i>she is</i> on every '
          + 'line</td><td>&nbsp;</td></tr><tr><td><i>him</i> for a man, '
          + '<i>her</i> for a woman</td><td>&nbsp;</td></tr><tr><td>One person on '
          + 'each line</td><td>&nbsp;</td></tr><tr><td>Something to ask about on '
          + 'every line</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'Grammar — he · she · it',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (1.4) '
          + 'teaches: Grammar — he · she · it. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        must: ['A who-to-ask note has three things on every line: the name → he is '
          + 'or she is → what to ask about.',
        '⚠ Use him for a man and her for a woman: Ask him about the lorry. '
          + 'Ask her about the lists.',
        '⚠ One person, one line. A line with two people is a line nobody can use.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '1.4.6R',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class says who they would ask for help.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '1.4.7',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about one person at your work (<b>20 to 35 words</b>). Who is he or '
  + 'she? What is the job? What do you ask about?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['Rima is in the office. She is the accountant. She is there every day '
        + 'from eight. I ask her about the invoices and about my hours at the end '
        + 'of the month'],
      stems: ['Rima is in the…',
      'She is the…',
      'She is there…',
      'I ask her…'],
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'woman',
        'thing',
        'arabic',
        'english',
        'practise',
        'fadi',
        'driver']
      },
      coach: {
        title: 'What to include',
        task: 'Write about one person at your work (20 to 35 words). Who is he or she? What '
  + 'is the job? What do you ask about?',
        criteria: [{ t: 'A who-to-ask note has three things on every line: the name → he '
              + 'is or she is → what to ask about.' },
            { t: '⚠ Use him for a man and her for a woman: Ask him about the '
              + 'lorry. Ask her about the lists.' },
            { t: '⚠ One person, one line. A line with two people is a line nobody can use.' }]
      },
      aiCheck: {
        task: 'Write about one person at your work (20 to 35 words). Who is he or '
          + 'she? What is the job? What do you ask about?',
        grammar: 'Grammar — he · she · it',
        must: ['A who-to-ask note has three things on every line: the name → he is '
          + 'or she is → what to ask about.',
        '⚠ Use him for a man and her for a woman: Ask him about the lorry. '
          + 'Ask her about the lists.',
        '⚠ One person, one line. A line with two people is a line nobody can use.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '1.4.7P',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Is he the ? Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '? Is she the accountant? — Yes, she is',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Is he the ? Write the answer.',
        grammar: 'Grammar — he · she · it',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (1.4) teaches: Grammar — he · she · it. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar — he · she · it.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '1.4.7R',
      bookRef: 'Unit 1 · 1.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Put the papers on the wall. Walk and read. Find two people with the same job.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> five people at your '
          + 'work and what you ask each one about (20 words or more).</p>'
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
