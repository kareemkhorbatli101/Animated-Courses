/* Unit 1 · cycle 1.1 — My name is Ammar. I am the new storeman..

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u1-s01', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 1 · 1.1', part: '1.1',
          section: '1', lesson: 'My name is Ammar. I am the new storeman.', title: 'My name is Ammar. I am the new storeman.' },
  objective: 'say your name and your job',
  study: {
    minutes: 90,
    objective: 'say your name and your job',
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
  worked: {
    task: 'Write what you say on your first day: who you are and what you do.',
    weak: 'I Ammar. storeman.',
    change: ['English needs <i>am</i> in the sentence - <i>I am</i>, not <i>I</i>.',
        'Put a small word before the job: <i>a storeman</i> if there are '
          + 'several, <i>the storeman</i> if there is only one.'],
    better: 'Good morning. My name is Ammar. I am the new storeman.'
  },
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
            rows: 2,
            hint: 'Two sentences is enough: who you are, and what you do. Say the '
              + 'Arabic out loud first - the English is easier when you already '
              + 'know what you mean.'
          },
      {
            q: 'Read the four jobs. Which one is yours? storeman · driver · '
              + 'counter · office',
            minWords: 6,
            rows: 2,
            hint: 'If none of the four is yours, take the closest and say what is '
              + 'different about yours - that answer is better than a tick.'
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Good morning. My name is Samih Qassar. I am the storeman.',
      'I am the storeman. I work in the back store.']
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
          },
        {
            q: 'Listen again. What time is it?',
            options: [{
              t: 'ten to seven',
              ok: true,
              why: 'He reads the clock out loud, and that is why he can tell Ammar '
                + 'he is early.'
            },
            {
              t: 'ten past seven',
              ok: false,
              why: 'The same two words in the other order. *To* seven is before '
                + 'seven; *past* seven is after it - and Abu Raed says Ammar is '
                + 'early.'
            },
            {
              t: 'seven o\'clock exactly',
              ok: false,
              why: 'Seven is the hour the shift starts, which is why *early* means '
                + 'before it. The clock in this scene does not say seven.'
            }],
            evidence: 'Abu Raed\'s last long line, where he reads the clock'
          },
        {
            q: 'Abu Raed says “That is good.” What is good?',
            options: [{
              t: 'that Ammar has come before seven',
              ok: true,
              why: 'He says the time, then that Ammar is early, then that it is '
                + 'good - in that order.'
            },
            {
              t: 'that Ammar is the new storeman',
              ok: false,
              why: 'He does welcome the job - *the new storeman, welcome* - but '
                + '*that is good* comes later, after something else.'
            },
            {
              t: 'that Ammar said his name clearly',
              ok: false,
              why: 'The name is asked for and given at the start. Listen to what '
                + 'Abu Raed has just said when the words *that is good* arrive.'
            }],
            evidence: 'the line immediately before he says it'
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
            need: 1,
            hint: 'It is in his second answer at the gate, and he says one word '
              + 'about it that Abu Raed then repeats back. Both words belong in '
              + 'your answer.'
          },
      {
            q: 'What time is it?',
            model: 'Ten to seven in the morning',
            minWords: 2,
            rows: 2,
            hint: 'A time, said once, in Abu Raed\'s longest line. It is the reason '
              + 'he calls Ammar early.'
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
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['I heard: “Can you spell it, please?” and “Again, please.” They said '
        + 'the name twice.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: I am · you are.',
      'I covered the table and said it from memory.',
      'I did it a second time, in the other role.']
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
          + 'whether it uses this cycle\'s grammar. Not style. Not length. This '
          + 'cycle (1.1) teaches: Grammar — I am · you are. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar — I am · you are.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'english',
        'needs',
        'sentence',
        'ammar',
        'before',
        'words',
        'storeman',
        'driver',
        'only']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: I am · you are.',
      'I used my own names, numbers and places - not the book\'s.',
      'I said the whole thing the task asks for, not just the first part.']
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
        task: 'Tell the class: — This is —. He is / She is the —. (The dashes are '
          + 'blanks the learner fills in with their own workplace. Judge what '
          + 'they wrote in them, not the blanks.)',
        grammar: 'Grammar — I am · you are',
        focus: 'Whether the report says the thing the task asks for, in sentences '
          + 'that each have a verb. A verb going missing in the second sentence '
          + 'is the commonest mistake at this level. This cycle (1.1) teaches: '
          + 'Grammar — I am · you are. Judge the language against THAT and '
          + 'against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar — I am · you are.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'english',
        'needs',
        'sentence',
        'ammar',
        'before',
        'words',
        'storeman',
        'driver',
        'only'],
        example: ['This is Samih. He is the storeman. He starts at seven and he finishes at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: I am · you are.',
      'I stood up, or sat up straight, and said it to the room.',
      'I said it once, slowly, without stopping to correct myself.']
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
            rows: 2,
            hint: 'Two words. It is the answer he gives to the question *and your job?*'
          },
      {
            q: 'What time does Fadi come in?',
            model: 'At 7.10',
            minWords: 1,
            rows: 2,
            hint: 'The gate book, not the dialogue: find Fadi\'s row and read '
              + 'across to the *in* column.'
          },
      {
            q: 'Who is out at 4.05?',
            model: 'Ammar Zreik',
            minWords: 1,
            rows: 2,
            keys: ['ammar',
              'zreik'],
            need: 1,
            hint: 'Read down the *out* column of the gate book for 4.05, then read '
              + 'back along that row to the name. Give both names as they are '
              + 'written.'
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
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'english',
        'needs',
        'sentence',
        'ammar',
        'before',
        'words',
        'storeman']
      },
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
        '⚠ Write the surname too. There are two men called Ammar in this yard.'],
        vocab: ['grammar',
        'english',
        'needs',
        'sentence',
        'ammar',
        'before',
        'words',
        'storeman',
        'driver',
        'only']
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
          + 'judgement with no line pointed at is not feedback. This cycle (1.1) '
          + 'teaches: Grammar — I am · you are. Judge the language against THAT '
          + 'and against nothing the course has not taught yet.',
        must: ['A line in the gate book has five things: the date → the name → the '
          + 'job → the time in → the time out.',
        '⚠ Big letters for names: Ammar Zreik. For the city: Damascus. For '
          + 'the company: Sham Trading.',
        '⚠ Write the surname too. There are two men called Ammar in this yard.'],
        vocab: ['grammar',
        'english',
        'needs',
        'sentence',
        'ammar',
        'before',
        'words',
        'storeman',
        'driver',
        'only'],
        example: ['Line 2: the number is there but not the word. It says “twenty” and '
          + 'it should say “twenty packets”.']
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
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: I am · you are.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
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
      meter: {
        label: 'words from this lesson',
        words: ['grammar',
        'english',
        'needs',
        'sentence',
        'ammar',
        'before',
        'words',
        'storeman']
      },
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
        '⚠ Write the surname too. There are two men called Ammar in this yard.'],
        vocab: ['grammar',
        'english',
        'needs',
        'sentence',
        'ammar',
        'before',
        'words',
        'storeman',
        'driver',
        'only']
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
          + '— ★ I like… —? one question (The dashes are blanks the learner fills '
          + 'in with their own workplace. Judge what they wrote in them, not the '
          + 'blanks.)',
        grammar: 'Grammar — I am · you are',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work. This '
          + 'cycle (1.1) teaches: Grammar — I am · you are. Judge the language '
          + 'against THAT and against nothing the course has not taught yet.',
        mode: 'spoken',
        must: ['Say the whole thing the task asks for - every part of it.',
        'Use this cycle\'s language: Grammar — I am · you are.',
        'Short enough to say in one breath, at A1.'],
        vocab: ['grammar',
        'english',
        'needs',
        'sentence',
        'ammar',
        'before',
        'words',
        'storeman',
        'driver',
        'only'],
        example: ['You wrote that you check the shelves first. I asked: who reads the '
          + 'sheet after you? You said Abu Yasser reads it at four.']
      },
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: I am · you are.',
      'I asked a real question - one I did not already know the answer to.',
      'My question was about what they actually said, not about the topic.']
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
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      example: ['Clear. I liked the times - I knew exactly when he starts and when he finishes.'],
      rubric: ['I said it out loud, not in my head.',
      'I used this cycle\'s language: I am · you are.',
      'I read three other answers before I said anything about one.',
      'What I said named one line, not the whole piece.']
    }
  ]
});
