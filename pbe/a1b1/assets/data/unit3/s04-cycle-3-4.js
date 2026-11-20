/* Unit 3 · cycle 3.4 — Fadi drives. Majd opens the counter..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u3-s04', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 3 · 3.4', part: '3.4',
          section: '4', lesson: 'Fadi drives. Majd opens the counter.', title: 'Fadi drives. Majd opens the counter.' },
  objective: 'say what another person does every day',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '3.4.1',
      bookRef: 'Unit 3 · 3.4 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say what one person at your work does every day. Three things.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the two lines. Which is correct? Fadi drive the lorry · '
              + 'Fadi drives the lorry',
            minWords: 6,
            rows: 2
          }],
      ideas: ['What HE does, what SHE does'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.4.2',
      bookRef: 'Unit 3 · 3.4 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-4',
      passage: {
        title: 'Language box',
        html: '<p><b>What HE does, what SHE does</b></p><table '
          + 'class=\'bk\'><tr><th>I / you / we</th><th>he / she / '
          + 'it</th></tr><tr><td>I <b>start</b> at seven.</td><td>He '
          + '<b>starts</b> at six.</td></tr><tr><td>I <b>check</b> the '
          + 'shelves.</td><td>He <b>checks</b> the lorry.</td></tr><tr><td>We '
          + '<b>count</b> on Thursday.</td><td>She <b>counts</b> the '
          + 'money.</td></tr><tr><td>I <b>do not</b> drive.</td><td>He <b>does '
          + 'not</b> drive on Friday.</td></tr></table><p>⚠ <b>he / she / it '
          + 'takes -s.</b> <b><i>He start</i> is wrong. <i>He starts</i> is '
          + 'right.</b> <b>This is the one thing to get right in this '
          + 'unit.</b></p><p>⚠ <b>In the – and ? it goes back:</b> he <b>does '
          + 'not</b> start · <b>Does</b> he start?</p><p><b>Practise:</b> Write '
          + 'the verb.</p><p>1 Fadi <span class="blank"></span> (drive) the '
          + 'lorry. 2 Majd <span class="blank"></span> (open) the counter. 3 He '
          + '<span class="blank"></span> (not work) on Friday. 4 <span '
          + 'class="blank"></span> she <span class="blank"></span> (count) the '
          + 'money?</p><p><b>Useful words:</b> He starts… · He checks… · She '
          + 'opens… · earlier than · before the customers</p><p><b>Sound — the -s '
          + 'at the end.</b> 🔊 <b>Track 3.8</b> Listen. Say it. <i>starts</i> /s/ '
          + '· <i>drives</i> /z/ · <i>finishes</i> /ɪz/. Say each one four '
          + 'times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Who starts earliest?',
            options: [{
              t: 'Ammar',
              ok: false,
              why: 'He is at the gate at seven - an hour after somebody else.'
            },
            {
              t: 'Fadi',
              ok: true,
              why: 'He starts at six, an hour before Ammar.'
            },
            {
              t: 'Majd',
              ok: false,
              why: 'Majd opens the counter at eight, the latest of the three.'
            }],
            evidence: 'the line comparing Fadi\'s start with Ammar\'s'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '3.4.2',
      bookRef: 'Unit 3 · 3.4 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What time does Fadi start?',
            model: 'Six o\'clock',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What does Majd do first?',
            model: 'He counts the money',
            minWords: 1,
            rows: 2,
            keys: ['counts',
              'money'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '3.4.3',
      bookRef: 'Unit 3 · 3.4 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. One asks. One says what the person does. Then change places.',
      scene: 'u3-3-4-pair',
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
        rows: [['Fadi · 6.00 · checks the lorry · Majd · opens the counter · 8.00',
          'Samih · 7.00 · counts the back store · Abu Raed · opens the gate · 6.00']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '3.4.3R',
      bookRef: 'Unit 3 · 3.4 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ What does he do?</td><td>☐ He '
          + 'starts…</td><td>☐ He checks…</td><td>☐ earlier than</td><td>☐ before '
          + 'the…</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['What HE does, what SHE does'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '3.4.4',
      bookRef: 'Unit 3 · 3.4 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of two people at your work. Say three things each does. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Name</th><th>He / She…</th><th>He / '
          + 'She…</th><th>He / '
          + 'She…</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'Name: Fadi Saeed He checks the lorry. He drives to Homs. He '
              + 'finishes at six · Name: Nour Mansour She opens the office. She '
              + 'answers the telephone. She writes the sheets',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of two people at your work. Say three things each does. Write it.',
        grammar: 'What HE does, what SHE does',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (3.4) teaches: What HE does, what SHE does. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: What HE does, what SHE does.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '3.4.4R',
      bookRef: 'Unit 3 · 3.4 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: starts at . He / She . Then he / she .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'Fadi starts at six. He checks the lorry. Then he drives to Homs',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: — starts at —. He / She —. Then he / she —. (The '
          + 'dashes are blanks the learner fills in with their own workplace. '
          + 'Judge what they wrote in them, not the blanks.)',
        grammar: 'What HE does, what SHE does',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (3.4) teaches: '
          + 'What HE does, what SHE does. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: What HE does, what SHE does.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '3.4.5',
      bookRef: 'Unit 3 · 3.4 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the page Nour wrote for the office. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>WHO DOES WHAT — BACK STORE AND COUNTER</b></p><p><b>Fadi</b> '
          + 'starts at 6.00. He checks the lorry. He drives to Homs on '
          + 'Wednesday.</p><p><b>Ammar</b> starts at 7.00. He reads the board. He '
          + 'checks the shelves.</p><p><b>Majd</b> starts at 8.00. He counts the '
          + 'money. Then he opens the counter.</p><p><b>Samih</b> starts at 7.00. '
          + 'He counts the back store on Monday.</p><p>⚠ <b>Every line: a name, a '
          + 'time, and what the person does. N.M. 13 March.</b></p><h4>Writer\'s '
          + 'box</h4><p><b>A who-does-what page has three things on every '
          + 'line:</b> the name → the time → what the person does, with '
          + '<b>-s</b>.</p><p>⚠ <b>One person, one line.</b> <b>The same rule as '
          + 'Unit 1.4, and for the same reason.</b></p><p>⚠ <b>Put the time on '
          + 'every line.</b> <b>A page with jobs and no times cannot tell you who '
          + 'is in the yard at half past six.</b></p>'
      },
      questions: [{
            q: 'Who starts earliest?',
            model: 'Fadi — 6.00',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What does Majd do before he opens the counter?',
            model: 'He counts the money',
            minWords: 1,
            rows: 2,
            keys: ['counts',
              'money'],
            need: 1
          },
      {
            q: 'Which day does Samih count?',
            model: 'Monday',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '3.4.6',
      bookRef: 'Unit 3 · 3.4 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a who-does-what page for your own work (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['WHO DOES WHAT — SHAM TRADING',
      'Fadi starts at 6.00. He checks the lorry. He drives to Homs on Wednesday'],
      stems: ['He checks the…',
      'He drives to Homs…',
      'He counts the back…',
      'She opens the office…'],
      meter: {
        label: 'words from this lesson',
        words: ['start',
        'wrong',
        'starts',
        'right',
        'thing',
        'unit',
        'back',
        'practise']
      },
      coach: {
        title: 'What to include',
        task: 'Write a who-does-what page for your own work (15 words or more).',
        criteria: [{ t: 'A who-does-what page has three things on every line: the name → '
              + 'the time → what the person does, with -s.' },
            { t: '⚠ One person, one line. The same rule as Unit 1.4, and for the '
              + 'same reason.' },
            { t: '⚠ Put the time on every line. A page with jobs and no times '
              + 'cannot tell you who is in the yard at half past six.' }]
      },
      aiCheck: {
        task: 'Write a who-does-what page for your own work (15 words or more).',
        grammar: 'What HE does, what SHE does',
        must: ['A who-does-what page has three things on every line: the name → the '
          + 'time → what the person does, with -s.',
        '⚠ One person, one line. The same rule as Unit 1.4, and for the same reason.',
        '⚠ Put the time on every line. A page with jobs and no times cannot '
          + 'tell you who is in the yard at half past six.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '3.4.6P',
      bookRef: 'Unit 3 · 3.4 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>-s '
          + 'on every he / she verb</td><td>&nbsp;</td></tr><tr><td>A time on '
          + 'every line</td><td>&nbsp;</td></tr><tr><td>One person on each '
          + 'line</td><td>&nbsp;</td></tr><tr><td>A name and a day at the '
          + 'end</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "He check the lorry" · (pointing) '
              + 'Here. (reading) "Nour opens the office"',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'What HE does, what SHE does',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback. This cycle (3.4) '
          + 'teaches: What HE does, what SHE does. Judge the language against '
          + 'THAT and against nothing the course has not taught yet.',
        must: ['A who-does-what page has three things on every line: the name → the '
          + 'time → what the person does, with -s.',
        '⚠ One person, one line. The same rule as Unit 1.4, and for the same reason.',
        '⚠ Put the time on every line. A page with jobs and no times cannot '
          + 'tell you who is in the yard at half past six.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '3.4.6R',
      bookRef: 'Unit 3 · 3.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line. The class listens for the -s.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['What HE does, what SHE does'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '3.4.7',
      bookRef: 'Unit 3 · 3.4 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about one person at your work (<b>20 to 35 words</b>). What time do '
  + 'they start? What do they do first? What do they do that nobody else does?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['Fadi starts at six o\'clock, an hour before me. He checks the lorry '
        + 'first. Then he drives to Homs. Nobody else can drive the big lorry'],
      stems: ['Fadi starts at six…',
      'He checks the lorry…',
      'Then he drives…',
      'Nobody else can…'],
      meter: {
        label: 'words from this lesson',
        words: ['start',
        'wrong',
        'starts',
        'right',
        'thing',
        'unit',
        'back',
        'practise']
      },
      coach: {
        title: 'What to include',
        task: 'Write about one person at your work (20 to 35 words). What time do they '
  + 'start? What do they do first? What do they do that nobody else does?',
        criteria: [{ t: 'A who-does-what page has three things on every line: the name → '
              + 'the time → what the person does, with -s.' },
            { t: '⚠ One person, one line. The same rule as Unit 1.4, and for the '
              + 'same reason.' },
            { t: '⚠ Put the time on every line. A page with jobs and no times '
              + 'cannot tell you who is in the yard at half past six.' }]
      },
      aiCheck: {
        task: 'Write about one person at your work (20 to 35 words). What time do '
          + 'they start? What do they do first? What do they do that nobody else '
          + 'does?',
        grammar: 'What HE does, what SHE does',
        must: ['A who-does-what page has three things on every line: the name → the '
          + 'time → what the person does, with -s.',
        '⚠ One person, one line. The same rule as Unit 1.4, and for the same reason.',
        '⚠ Put the time on every line. A page with jobs and no times cannot '
          + 'tell you who is in the yard at half past six.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '3.4.7P',
      bookRef: 'Unit 3 · 3.4 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner: Does anybody else do that? '
  + 'Write the answer.',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: 'Does anybody else do that? — No. Only Fadi has the big licence',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner: Does anybody else do '
          + 'that? Write the answer.',
        grammar: 'What HE does, what SHE does',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (3.4) teaches: What HE does, what SHE does. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: What HE does, what SHE does.',
        'Short enough to say in one breath, at A1.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '3.4.7R',
      bookRef: 'Unit 3 · 3.4 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Read three papers. How many describe a job only one person can do? Count '
  + 'them on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> three people at your '
          + 'work, with a time and two jobs each (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['What HE does, what SHE does'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
