/* Unit 1 · cycle 1.1 — My name is Ammar. I am the new storeman..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u1-s01', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 1 · 1.1', part: '1.1',
          section: '1', lesson: 'My name is Ammar. I am the new storeman.', title: 'My name is Ammar. I am the new storeman.' },
  objective: 'say your name and your job',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '1.1.1',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>In Arabic</th><th>In '
          + 'English</th></tr><tr><td>&nbsp;</td><td>My name '
          + 'is…</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'It is your first day. What do you say? Say it in Arabic. Then '
              + 'say it in English. Your teacher writes it on the board.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Read the four jobs. Which one is yours? storeman · driver · '
              + 'counter · office',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '1.1.2',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-1',
      passage: {
        title: 'Language box',
        html: '<p><b>Grammar — <i>I am · you are</i></b></p><table '
          + 'class=\'bk\'><tr><th>+</th><th>–</th><th>?</th></tr><tr><td>I '
          + '<b>am</b> Ammar. I<b>\'m</b> Ammar.</td><td>I <b>am not</b> the '
          + 'driver.</td><td><b>Am</b> I early? — Yes, you '
          + 'are.</td></tr><tr><td>You <b>are</b> the storeman. '
          + 'You<b>\'re</b>…</td><td>You <b>are not</b> late.</td><td><b>Are</b> '
          + 'you Ammar? — Yes, I am.</td></tr></table><p>⚠ English needs '
          + '<b>am</b> or <b>are</b> in the sentence. Say <i>I am Ammar</i>, not '
          + '<s>I Ammar</s>.</p><p>⚠ <b>a</b> before most words: <i>a storeman, a '
          + 'driver</i>. <b>the</b> when there is only one: <i>the gate, the '
          + 'office</i>.</p><p><b>Practise:</b> Write <i>am</i>, <i>are</i> or '
          + '<i>am not</i>.</p><p>1 I <span class="blank"></span> Ammar. 2 You '
          + '<span class="blank"></span> the supervisor. 3 I <span '
          + 'class="blank"></span> the driver. I am the storeman. 4 <span '
          + 'class="blank"></span> you new? — Yes, I <span '
          + 'class="blank"></span>.</p><p><b>Useful words:</b> Good morning. · My '
          + 'name is… · I am the new… · Welcome. · Thank you.</p><p><b>Sound — '
          + '<i>I\'m</i>.</b> 🔊 <b>Track 1.2</b> Listen. Say it. <i>I am</i> → '
          + '<i>I\'m</i>. <i>I\'m Ammar.</i> <i>I\'m the storeman.</i> Say it '
          + 'four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. Where is Ammar?',
            options: [{
              t: 'in the office',
              ok: false,
              why: 'Nobody is in an office in this scene - the only people '
                + 'speaking are at the gate.'
            },
            {
              t: 'at the gate',
              ok: true,
              why: 'Abu Raed is on the gate and asks for his name there.'
            },
            {
              t: 'at home',
              ok: false,
              why: 'He says it is his first day and he is early. He has arrived, '
                + 'not stayed at home.'
            }],
            evidence: 'the first two lines - who speaks first, and what he asks for'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '1.1.2',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. What is Ammar\'s job?',
            model: 'He is the new storeman',
            minWords: 2,
            rows: 2,
            keys: ['new',
              'storeman'],
            need: 1
          },
      {
            q: 'What time is it?',
            model: 'Ten to seven in the morning',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '1.1.3',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. Read the lines. Say it. Then change places.',
      scene: 'u1-1-1-pair',
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
        rows: [['Fadi Saeed · the driver',
          'Majd Bitar · the counter']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '1.1.3R',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ Good morning.</td><td>☐ My name '
          + 'is…</td><td>☐ I am the new…</td><td>☐ Welcome.</td><td>☐ Thank '
          + 'you.</td></tr></table>'
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
      ref: '1.1.4',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Stand up. Meet three people. Say your name and your job. Write their names here.',
      passage: {
        title: 'From the book',
        html: '<table '
          + 'class=\'bk\'><tr><th>Name</th><th>Job</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'Name: Samih Qassar Job: storeman · Name: Hani Deeb Job: driver · '
              + 'Name: Rima Sibai Job: office',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Stand up. Meet three people. Say your name and your job. Write their '
          + 'names here.',
        grammar: 'Grammar — I am · you are',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A line in the gate book has five things: the date → the name → the '
          + 'job → the time in → the time out.',
        '⚠ Big letters for names: Ammar Zreik. For the city: Damascus. For '
          + 'the company: Sham Trading.',
        '⚠ Write the surname too. There are two men called Ammar in this yard.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '1.1.4R',
      bookRef: 'Unit 1 · 1.1 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: This is . He is / She is the .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'This is Samih Qassar. He is the storeman',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: This is . He is / She is the .',
        grammar: 'Grammar — I am · you are',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A line in the gate book has five things: the date → the name → the '
          + 'job → the time in → the time out.',
        '⚠ Big letters for names: Ammar Zreik. For the city: Damascus. For '
          + 'the company: Sham Trading.',
        '⚠ Write the surname too. There are two men called Ammar in this yard.']
      }
    },
    {
      id: 'c8',
      kind: 'answer',
      ref: '1.1.5',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the line from the gate book. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>GATE BOOK — SHAM TRADING</b></p><table '
          + 'class=\'bk\'><tr><th>Date</th><th>Name</th><th>Job</th><th>In</th><th>Out</th></tr><tr><td>4 '
          + 'March</td><td>Ammar '
          + 'Zreik</td><td>storeman</td><td>6.50</td><td>4.05</td></tr><tr><td>4 '
          + 'March</td><td>Fadi '
          + 'Saeed</td><td>driver</td><td>7.10</td><td>5.30</td></tr></table><h4>Writer\'s '
          + 'box</h4><p><b>A line in the gate book has five things:</b> the date '
          + '→ the name → the job → the time in → the time out.</p><p>⚠ <b>Big '
          + 'letters</b> for names: <b>A</b>mmar <b>Z</b>reik. For the city: '
          + '<b>D</b>amascus. For the company: <b>S</b>ham '
          + '<b>T</b>rading.</p><p>⚠ Write the <b>surname</b> too. There are two '
          + 'men called Ammar in this yard.</p>'
      },
      questions: [{
            q: 'What is Ammar\'s job?',
            model: 'He is a storeman',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What time does Fadi come in?',
            model: 'At 7.10',
            minWords: 1,
            rows: 2
          },
      {
            q: 'Who is out at 4.05?',
            model: 'Ammar Zreik',
            minWords: 1,
            rows: 2,
            keys: ['ammar',
              'zreik'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '1.1.6',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write your own line in the gate book (<b>15 words or more</b>). Use the words below.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['Date: 4 March Name: Samih Qassar Job: storeman In: 7.00 Out: 4.00',
      'My name is Samih Qassar and I am the storeman'],
      coach: {
        title: 'What to include',
        task: 'Write your own line in the gate book (15 words or more). Use the words below.',
        criteria: [{ t: 'A line in the gate book has five things: the date → the name → '
              + 'the job → the time in → the time out.' },
            { t: '⚠ Big letters for names: Ammar Zreik. For the city: Damascus. '
              + 'For the company: Sham Trading.' },
            { t: '⚠ Write the surname too. There are two men called Ammar in this yard.' }]
      },
      aiCheck: {
        task: 'Write your own line in the gate book (15 words or more). Use the words below.',
        grammar: 'Grammar — I am · you are',
        must: ['A line in the gate book has five things: the date → the name → the '
          + 'job → the time in → the time out.',
        '⚠ Big letters for names: Ammar Zreik. For the city: Damascus. For '
          + 'the company: Sham Trading.',
        '⚠ Write the surname too. There are two men called Ammar in this yard.']
      }
    },
    {
      id: 'c10',
      kind: 'model',
      ref: '1.1.6P',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books with your partner. Read. Check it. Tick ✓ or cross ✗.',
      passage: {
        title: 'From the book',
        html: '<h4>How we check — read this once. We use it all year.</h4><p>⚠ '
          + '<b>Not helpful:</b> "Good." · "Bad." · "Many mistakes."</p><p>⚠ '
          + '<b>This is what we do:</b> <b>Point at the line. Read it aloud. Say '
          + 'the one thing that is missing.</b></p><p>Three things. No more. '
          + 'Arabic is fine.</p><p><b>Words you can use:</b> Here. · Read it '
          + 'again. · The surname? · The big letter? · Good.</p><table '
          + 'class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>Big letter '
          + 'for the name and the surname</td><td>&nbsp;</td></tr><tr><td>The job '
          + 'is there</td><td>&nbsp;</td></tr><tr><td>Two times: in and '
          + 'out</td><td>&nbsp;</td></tr><tr><td><i>am</i> or <i>are</i> in the '
          + 'sentence</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            model: '(pointing) Here. (reading) "samih qassar" · (pointing) Here. '
              + '(reading) "In 7.00"',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books with your partner. Read. Check it. Tick ✓ or cross ✗.',
        grammar: 'Grammar — I am · you are',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A line in the gate book has five things: the date → the name → the '
          + 'job → the time in → the time out.',
        '⚠ Big letters for names: Ammar Zreik. For the city: Damascus. For '
          + 'the company: Sham Trading.',
        '⚠ Write the surname too. There are two men called Ammar in this yard.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '1.1.6R',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students read one line before and after. The class says what changed.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '1.1.7',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about your first day (<b>20 to 35 words</b>). Say your name, your job, '
  + 'the time you start and the time you finish.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['My name is Samih Qassar. I am the storeman at Sham Trading. I start at '
        + 'seven o\'clock in the morning. I finish at four o\'clock. Today is my '
        + 'first day'],
      stems: ['My name is…',
      'I am the storeman…',
      'I start at seven…',
      'I finish at four…'],
      coach: {
        title: 'What to include',
        task: 'Write about your first day (20 to 35 words). Say your name, your job, the '
  + 'time you start and the time you finish.',
        criteria: [{ t: 'A line in the gate book has five things: the date → the name → '
              + 'the job → the time in → the time out.' },
            { t: '⚠ Big letters for names: Ammar Zreik. For the city: Damascus. '
              + 'For the company: Sham Trading.' },
            { t: '⚠ Write the surname too. There are two men called Ammar in this yard.' }]
      },
      aiCheck: {
        task: 'Write about your first day (20 to 35 words). Say your name, your '
          + 'job, the time you start and the time you finish.',
        grammar: 'Grammar — I am · you are',
        must: ['A line in the gate book has five things: the date → the name → the '
          + 'job → the time in → the time out.',
        '⚠ Big letters for names: Ammar Zreik. For the city: Damascus. For '
          + 'the company: Sham Trading.',
        '⚠ Write the surname too. There are two men called Ammar in this yard.']
      }
    },
    {
      id: 'c13',
      kind: 'model',
      ref: '1.1.7P',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner one question. Write it: ★ I '
  + 'like… ? one question',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            model: '★ I like the times. ? What is your job number?',
            minWords: 3,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner one question. Write it: '
          + '★ I like… ? one question',
        grammar: 'Grammar — I am · you are',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A line in the gate book has five things: the date → the name → the '
          + 'job → the time in → the time out.',
        '⚠ Big letters for names: Ammar Zreik. For the city: Damascus. For '
          + 'the company: Sham Trading.',
        '⚠ Write the surname too. There are two men called Ammar in this yard.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '1.1.7R',
      bookRef: 'Unit 1 · 1.1 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Put the papers on the wall. Walk and read. Write one word on a paper you like: Good.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then <b>write down</b> the names of four '
          + 'people at your work, with the surname (20 words or more).</p>'
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
