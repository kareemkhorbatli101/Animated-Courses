/* Unit 1 · cycle 1.2 — Z, R, E, I, K — how do you spell it?.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u1-s02', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 1 · 1.2', part: '1.2',
          section: '2', lesson: 'Z, R, E, I, K — how do you spell it?', title: 'Z, R, E, I, K — how do you spell it?' },
  objective: 'say the letters, and spell your name',
  cards: [
    {
      id: 'c1',
      kind: 'model',
      ref: '1.2.1',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Get ready',
      type: 'discuss',
      title: 'Get ready',
      instruction: '',
      questions: [{
            q: 'Say the letters you know in English. Your teacher writes them on '
              + 'the board.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which letters are in your name? Say them. Write them here:',
            model: 'Open. Every learner writes the letters of their own name. It is '
              + 'the first thing most of them will ever spell aloud in English '
              + 'and it should be theirs',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '1.2.2',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u1-1-2',
      passage: {
        title: 'Language box',
        html: '<p><b>The letters</b></p><table class=\'bk\'><tr><th>A B C D E F '
          + 'G</th><th>H I J K L M N</th><th>O P Q R S T U</th><th>V W X Y '
          + 'Z</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table><p><b>Asking:</b> '
          + 'How do you spell it? · Again, please. · Slowly, please. · Is it a B '
          + 'or a P?</p><p>⚠ <b>The hard ones.</b> These sound the same to many '
          + 'people. Say them slowly: <b>B / P</b> · <b>G / J</b> · <b>E / I</b> '
          + '· <b>S / X</b>.</p><p><b>Practise:</b> Spell these. Say each letter. '
          + '<i>gate · yard · shift · store · badge</i></p><p><b>Useful '
          + 'words:</b> five letters · the first letter · the last letter · big '
          + 'letter · small letter</p><p><b>Sound — the hard letters.</b> 🔊 '
          + '<b>Track 1.4</b> Listen. Say it. <i>B — P. G — J. E — I. S — X.</i> '
          + 'Say each one four times.</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is the problem?',
            options: [{
              t: 'Ammar is late',
              ok: false,
              why: 'He arrives before seven - Abu Raed tells him he is early, and '
                + 'that it is good.'
            },
            {
              t: 'Abu Raed cannot write the name',
              ok: true,
              why: 'He hears it but cannot spell it, which is why he asks for the letters.'
            },
            {
              t: 'the gate is closed',
              ok: false,
              why: 'The gate is not mentioned as closed; the difficulty is the '
                + 'name, not the gate.'
            }],
            evidence: 'the lines where Abu Raed asks for the name a second time'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '1.2.2',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many letters in Zreik?',
            model: 'Five',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What does Abu Raed write in the book?',
            model: 'He writes the name in Arabic letters',
            minWords: 2,
            rows: 2,
            keys: ['name',
              'arabic',
              'letters'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '1.2.3',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Practise',
      type: 'roleplay',
      title: 'Practise',
      kind: 'own',
      instruction: 'Work in pairs. Read the lines. Say it. Then change places.',
      scene: 'u1-1-2-pair',
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
        rows: [['Your own surname',
          'The name of your street']]
      }
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '1.2.3R',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the lines for the class — books closed.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><td>☐ How do you spell it?</td><td>☐ Again, '
          + 'please.</td><td>☐ Slowly.</td><td>☐ Is it a B or a P?</td><td>☐ '
          + '…letters.</td></tr></table>'
      },
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The letters',
      'Name: AMMAR ZREIK',
      'Job: Storeman'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '1.2.4',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Work in pairs. Ask your partner for four names. Write them. Then check them.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>I wrote</th><th>Right ✓ / Wrong '
          + '✗</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'I wrote: Deeb — ✓ · I wrote: Sibay — ✗ (it is Sibai) · I wrote: '
              + 'Najjar — ✓ · I wrote: Bitar — ✓',
            minWords: 5,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Work in pairs. Ask your partner for four names. Write them. Then check them.',
        grammar: 'The letters',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['A badge has four things: the name → the job → the number → the day '
          + 'you started.',
        '⚠ On a badge the name is in BIG LETTERS, every letter. AMMAR ZREIK.',
        '⚠ Count the letters before you write. Five is five. Say them, then '
          + 'write them, then Check it.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '1.2.4R',
      bookRef: 'Unit 1 · 1.2 · Lesson A · Speaking · Report',
      type: 'discuss',
      title: 'Report',
      instruction: 'Tell the class: I wrote names. are right. The hard one was .',
      questions: [{
            q: 'Write what you told the class.',
            model: 'I wrote four names. Three are right. The hard one was Sibai',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Tell the class: I wrote names. are right. The hard one was .',
        grammar: 'The letters',
        focus: 'Whether the report says who the person is AND what their job is, in '
          + 'two sentences that both have a verb. The verb going missing in the '
          + 'second sentence is the commonest mistake in this unit.',
        must: ['A badge has four things: the name → the job → the number → the day '
          + 'you started.',
        '⚠ On a badge the name is in BIG LETTERS, every letter. AMMAR ZREIK.',
        '⚠ Count the letters before you write. Five is five. Say them, then '
          + 'write them, then Check it.']
      }
    },
    {
      id: 'c8',
      kind: 'model',
      ref: '1.2.5',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Read',
      type: 'discuss',
      title: 'Read',
      instruction: 'Read the card. Then answer.',
      passage: {
        title: 'From the book',
        html: '<p><b>SHAM TRADING — STAFF BADGE</b></p><p><b>Name:</b> AMMAR '
          + 'ZREIK</p><p><b>Job:</b> Storeman</p><p><b>Number:</b> '
          + '41</p><p><b>Start:</b> 4 March</p><h4>Writer\'s box</h4><p><b>A '
          + 'badge has four things:</b> the name → the job → the number → the day '
          + 'you started.</p><p>⚠ On a badge the name is in <b>BIG LETTERS</b>, '
          + 'every letter. AMMAR ZREIK.</p><p>⚠ Count the letters before you '
          + 'write. Five is five. Say them, then write them, then <b>Check '
          + 'it</b>.</p>'
      },
      questions: [{
            q: 'How do you spell the surname?',
            model: 'Z, R, E, I, K',
            minWords: 2,
            rows: 2
          },
      {
            q: 'What is the number?',
            model: '41',
            minWords: 1,
            rows: 2
          },
      {
            q: 'How many letters are in the first name?',
            model: 'Five',
            minWords: 1,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '1.2.6',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write your own badge (<b>15 words or more</b>).',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['Name: SAMIH QASSAR Job: Storeman Number: 38 Start: 4 March',
      'My surname is Qassar. It has six letters'],
      stems: ['It has six…'],
      coach: {
        title: 'What to include',
        task: 'Write your own badge (15 words or more).',
        criteria: [{ t: 'A badge has four things: the name → the job → the number → the '
              + 'day you started.' },
            { t: '⚠ On a badge the name is in BIG LETTERS, every letter. AMMAR ZREIK.' },
            { t: '⚠ Count the letters before you write. Five is five. Say them, '
              + 'then write them, then Check it.' }]
      },
      aiCheck: {
        task: 'Write your own badge (15 words or more).',
        grammar: 'The letters',
        must: ['A badge has four things: the name → the job → the number → the day '
          + 'you started.',
        '⚠ On a badge the name is in BIG LETTERS, every letter. AMMAR ZREIK.',
        '⚠ Count the letters before you write. Five is five. Say them, then '
          + 'write them, then Check it.']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '1.2.6P',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is missing.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Check</th><th>✓ / ✗</th></tr><tr><td>The '
          + 'name is in big letters</td><td>&nbsp;</td></tr><tr><td>The number of '
          + 'letters is right</td><td>&nbsp;</td></tr><tr><td>All four things are '
          + 'there</td><td>&nbsp;</td></tr><tr><td>The sentence has <i>is</i> or '
          + '<i>has</i></td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The letters',
      'Name: AMMAR ZREIK',
      'Job: Storeman'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing.',
        grammar: 'The letters',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['A badge has four things: the name → the job → the number → the day '
          + 'you started.',
        '⚠ On a badge the name is in BIG LETTERS, every letter. AMMAR ZREIK.',
        '⚠ Count the letters before you write. Five is five. Say them, then '
          + 'write them, then Check it.']
      }
    },
    {
      id: 'c11',
      kind: 'own',
      ref: '1.2.6R',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Two students spell their surname for the class. The class writes it. Then '
  + 'they show it.',
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The letters',
      'Name: AMMAR ZREIK',
      'Job: Storeman'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c12',
      ref: '1.2.7',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Write freely',
      type: 'writer',
      title: 'Write freely',
      kind: 'model',
      instruction: 'Write about a name that is hard to spell (<b>20 to 35 words</b>). Whose name '
  + 'is it? How many letters? Which letter is the problem?',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      model: ['My cousin is called Sibai. It is a hard name. People write Sibay with '
        + 'a Y at the end. It is an I. I say it twice now'],
      stems: ['My cousin is…',
      'It is a hard…',
      'People write Sibay…',
      'It is an…'],
      coach: {
        title: 'What to include',
        task: 'Write about a name that is hard to spell (20 to 35 words). Whose name is it? '
  + 'How many letters? Which letter is the problem?',
        criteria: [{ t: 'A badge has four things: the name → the job → the number → the '
              + 'day you started.' },
            { t: '⚠ On a badge the name is in BIG LETTERS, every letter. AMMAR ZREIK.' },
            { t: '⚠ Count the letters before you write. Five is five. Say them, '
              + 'then write them, then Check it.' }]
      },
      aiCheck: {
        task: 'Write about a name that is hard to spell (20 to 35 words). Whose '
          + 'name is it? How many letters? Which letter is the problem?',
        grammar: 'The letters',
        must: ['A badge has four things: the name → the job → the number → the day '
          + 'you started.',
        '⚠ On a badge the name is in BIG LETTERS, every letter. AMMAR ZREIK.',
        '⚠ Count the letters before you write. Five is five. Say them, then '
          + 'write them, then Check it.']
      }
    },
    {
      id: 'c13',
      kind: 'own',
      ref: '1.2.7P',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Respond',
      type: 'discuss',
      title: 'Respond',
      instruction: 'Read your partner\'s work. Ask your partner to spell the name aloud. Write '
  + 'it. Is it the same?',
      questions: [{
            q: 'Write what you asked your partner, and what you liked.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The letters',
      'Name: AMMAR ZREIK',
      'Job: Storeman'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Read your partner\'s work. Ask your partner to spell the name aloud. '
          + 'Write it. Is it the same?',
        grammar: 'The letters',
        focus: 'Whether the reply addresses what the partner actually wrote, and '
          + 'whether the question asked is a real question about that work.',
        must: ['A badge has four things: the name → the job → the number → the day '
          + 'you started.',
        '⚠ On a badge the name is in BIG LETTERS, every letter. AMMAR ZREIK.',
        '⚠ Count the letters before you write. Five is five. Say them, then '
          + 'write them, then Check it.']
      }
    },
    {
      id: 'c14',
      kind: 'own',
      ref: '1.2.7R',
      bookRef: 'Unit 1 · 1.2 · Lesson B · Writing · Share',
      type: 'discuss',
      title: 'Share',
      instruction: 'Three students spell a name. The class writes. Count the right ones on the board.',
      passage: {
        title: 'Homework',
        html: '<p>Finish your writing. Then spell four names from your work, letter '
          + 'by letter, and write the number of letters (20 words or more).</p>'
      },
      questions: [{
            q: 'Write the one word you would put on the work you liked best, and why.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['The letters',
      'Name: AMMAR ZREIK',
      'Job: Storeman'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    }
  ]
});
