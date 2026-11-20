/* Unit 3 · cycle 3.7 — Review: the shift board.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u3-s07', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 3 · 3.7', part: '3.7',
          section: '7', lesson: 'Review: the shift board', title: 'Review: the shift board' },
  objective: 'Review: the shift board — and one problem to talk about together',
  cards: [
    {
      id: 'c1',
      kind: 'own',
      ref: '3.7.1',
      bookRef: 'Unit 3 · 3.7 · Lesson A · Speaking · Get ready – Unit 3 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 3 quiz',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Say it in '
          + 'English</th><th>✓</th></tr><tr><td><b>3.1</b> The five days you '
          + 'work.</td><td>&nbsp;</td></tr><tr><td><b>3.2</b> 7.15 and 10.30, '
          + 'both ways.</td><td>&nbsp;</td></tr><tr><td><b>3.3</b> Four things '
          + 'you do every day, in '
          + 'order.</td><td>&nbsp;</td></tr><tr><td><b>3.4</b> What one other '
          + 'person does. Remember the '
          + '-s.</td><td>&nbsp;</td></tr><tr><td><b>3.5</b> Ask to swap a '
          + 'day.</td><td>&nbsp;</td></tr><tr><td><b>3.6</b> You are late. What '
          + 'do you say first?</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Write what you would say. Your own words.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['3.2 say a time two ways'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '3.7.2',
      bookRef: 'Unit 3 · 3.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      kind: 'answer',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Review — the six things from this unit</b></p><table '
          + 'class=\'bk\'><tr><th>Cycle</th><th>You can '
          + 'say</th></tr><tr><td><b>3.1</b></td><td><i>Sunday to Thursday. '
          + 'Friday is my day off. Always on '
          + 'Monday.</i></td></tr><tr><td><b>3.2</b></td><td><i>Quarter past '
          + 'seven. Seven fifteen. Both '
          + 'ways.</i></td></tr><tr><td><b>3.3</b></td><td><i>I sign in. I read '
          + 'the board. I check the '
          + 'shelves.</i></td></tr><tr><td><b>3.4</b></td><td><i>He starts at '
          + 'six. He checks the lorry.</i> — <b>with the '
          + '-s</b></td></tr><tr><td><b>3.5</b></td><td><i>Can I swap Thursday? I '
          + 'ask Samih first, then I tell '
          + 'you.</i></td></tr><tr><td><b>3.6</b></td><td><i>I am twenty minutes '
          + 'late. The road was closed. Next time I '
          + 'telephone.</i></td></tr></table><p>⚠ <b>The new thing here: '
          + 'everybody did the right thing and the paper is still wrong.</b> '
          + '<b>Hani asked the right man. Samih agreed. Hani always came.</b> '
          + '<b>And the board is wrong eleven times, because nobody told the '
          + 'supervisor.</b></p><p><b>Useful words:</b> he always asks · he has '
          + 'never once · the men know · the office does not · the office '
          + 'pays</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What is the problem with Hani?',
            options: [{
              t: 'he is always late',
              ok: false,
              why: 'He is never late. He always comes.'
            },
            {
              t: 'he swaps every week and never writes it down',
              ok: true,
              why: 'He asks the right man every time and always comes - but the '
                + 'board never says so, and the office pays from the board.'
            },
            {
              t: 'he cannot read the board',
              ok: false,
              why: 'Reading is not the difficulty; recording is.'
            }],
            evidence: 'the line about the board being wrong eleven times'
          }],
        say: true
      }
    },
    {
      id: 'c3',
      kind: 'answer',
      ref: '3.7.2',
      bookRef: 'Unit 3 · 3.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many times has Hani swapped?',
            model: 'Eleven times',
            minWords: 1,
            rows: 2,
            keys: ['eleven',
              'times'],
            need: 1
          },
      {
            q: 'Why does Samih not complain?',
            model: 'Because Hani always asks him first and always comes',
            minWords: 3,
            rows: 2,
            keys: ['because',
              'hani',
              'always',
              'asks'],
            need: 1
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      kind: 'own',
      ref: '3.7.3',
      bookRef: 'Unit 3 · 3.7 · Lesson A · Speaking · Practise',
      type: 'discuss',
      title: 'Practise',
      instruction: 'Work in pairs. One is Samih. One is Abu Yasser. Say why you are right.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Samih says</th><th>Abu Yasser '
          + 'says</th></tr><tr><td>Hani asks me first, every time. He always '
          + 'comes. ⚠ <b>No shift has ever been short.</b></td><td>The board says '
          + 'Hani on Thursday eleven times and it was Samih. ⚠ <b>The office pays '
          + 'from the board.</b></td></tr></table>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['3.2 say a time two ways'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      kind: 'own',
      ref: '3.7.3R',
      bookRef: 'Unit 3 · 3.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the two sides for the class — books closed.',
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['3.2 say a time two ways'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      kind: 'model',
      ref: '3.7.4',
      bookRef: 'Unit 3 · 3.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of something at your work that everybody knows and no paper says. Tell '
  + 'your partner. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What everybody knows</th><th>What the '
          + 'paper says</th><th>Who finds out, and '
          + 'when</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'What everybody knows: Hani and Samih swap Thursdays. What the '
              + 'paper says: Hani works every Thursday. Who finds out, and when: '
              + 'the office, at the end of the month, when it pays the wrong man '
              + '· What everybody knows: the spare key is at the gate. What the '
              + 'paper says: nothing. Who finds out, and when: the new man, on '
              + 'his first Friday, when the supervisor is away',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of something at your work that everybody knows and no paper '
          + 'says. Tell your partner. Write it.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a day or a time, the DAY and the TIME go in the '
          + 'first two sentences. Everything else can wait.',
        '⚠ If you are asking for something, ask in the last sentence. The '
          + 'reader remembers the last thing.',
        'The shape: who it is to → the day and the time → why → what you are '
          + 'asking for.']
      }
    },
    {
      id: 'c7',
      kind: 'model',
      ref: '3.7.4R',
      bookRef: 'Unit 3 · 3.7 · Lesson A · Speaking · Report – everybody is right',
      type: 'discuss',
      title: 'Report – everybody is right',
      instruction: 'The problem. Hani swapped eleven times. He asked the right man every time. '
  + 'He always came. Nobody wrote it on the board, and the office pays from the '
  + 'board.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Samih is right</th><th>Abu Yasser is '
          + 'right</th><th>So we do this</th></tr><tr><td>Hani does the asking '
          + 'right. ⚠ <b>No shift has ever been short, and that is the thing that '
          + 'matters on the day.</b></td><td>The board has been wrong eleven '
          + 'times. ⚠ <b>The office pays Samih for a day Hani is written down '
          + 'for.</b></td><td>⚠ <b>The swap is not finished until it is on the '
          + 'board.</b> <b>Three steps, in order: ask the other man → he says yes '
          + '→ ONE of you tells the supervisor the same day.</b> <b>Hani tells. '
          + 'It is his swap.</b></td></tr></table>'
      },
      questions: [{
            q: 'Write what you told the class.',
            model: 'The three positions, in full',
            minWords: 2,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'The problem. Hani swapped eleven times. He asked the right man every '
          + 'time. He always came. Nobody wrote it on the board, and the office '
          + 'pays from the board.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether you have named what EACH side is right about. Not who wins, '
          + 'and not a compromise: one sentence for each person\'s reason.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a day or a time, the DAY and the TIME go in the '
          + 'first two sentences. Everything else can wait.',
        '⚠ If you are asking for something, ask in the last sentence. The '
          + 'reader remembers the last thing.',
        'The shape: who it is to → the day and the time → why → what you are '
          + 'asking for.']
      }
    },
    {
      id: 'c8',
      kind: 'own',
      ref: '3.7.5',
      bookRef: 'Unit 3 · 3.7 · Lesson B · Writing · Read – exam practice (A2 Key Reading '
  + 'Part 1, at A1 length)',
      type: 'discuss',
      title: 'Read – exam practice (A2 Key Reading Part 1, at A1 length)',
      instruction: 'Read the five notices. What does each one say? Choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>1</b> <i>SHIFT BOARD — NEW EVERY SUNDAY</i> <b>A</b> The board '
          + 'never changes. <b>B</b> There is a new board every week. <b>C</b> '
          + 'Read it on Thursday.</p><p><b>2</b> <i>SWAP? TELL THE SUPERVISOR THE '
          + 'SAME DAY</i> <b>A</b> Tell him next week. <b>B</b> Do not tell him. '
          + '<b>C</b> Tell him on the day you agree it.</p><p><b>3</b> <i>LATE? '
          + 'TELEPHONE FROM THE ROAD</i> <b>A</b> Come in and explain. <b>B</b> '
          + 'Ring before you arrive. <b>C</b> Say nothing.</p><p><b>4</b> '
          + '<i>BREAK 10.30 — 10.45</i> <b>A</b> Fifteen minutes. <b>B</b> Thirty '
          + 'minutes. <b>C</b> An hour.</p><p><b>5</b> <i>COUNT: EVERY '
          + 'THURSDAY</i> <b>A</b> Once a month. <b>B</b> Every week, on '
          + 'Thursday. <b>C</b> On Monday.</p><h4>Writer\'s box</h4><p><b>Exam '
          + 'practice — A2 Key Writing Part 6, at A1 length.</b> <b>Four '
          + 'sentences, about 30 words.</b></p><p>⚠ <b>In a message about a day '
          + 'or a time, the DAY and the TIME go in the first two sentences.</b> '
          + '<b>Everything else can wait.</b></p><p>⚠ <b>If you are asking for '
          + 'something, ask in the last sentence.</b> <b>The reader remembers the '
          + 'last thing.</b></p><p><b>The shape:</b> who it is to → the day and '
          + 'the time → why → what you are asking for.</p>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['3.2 say a time two ways'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '3.7.6',
      bookRef: 'Unit 3 · 3.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      kind: 'model',
      instruction: 'Write a message asking to swap a day (<b>four sentences, about 30 '
  + 'words</b>). Say the day, who you want to swap with, why, and what you are '
  + 'asking.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['To: Abu Yasser',
      'I am on the morning shift on Thursday. Samih is off that day and he '
        + 'has agreed to swap. My mother is in hospital. Can you put it on the '
        + 'board?'],
      stems: ['Samih is off…',
      'My mother is…',
      'Can you put…'],
      coach: {
        title: 'What to include',
        task: 'Write a message asking to swap a day (four sentences, about 30 words). Say '
  + 'the day, who you want to swap with, why, and what you are asking.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words.' },
            { t: '⚠ In a message about a day or a time, the DAY and the TIME go in '
              + 'the first two sentences. Everything else can wait.' },
            { t: '⚠ If you are asking for something, ask in the last sentence. The '
              + 'reader remembers the last thing.' },
            { t: 'The shape: who it is to → the day and the time → why → what you '
              + 'are asking for.' }]
      },
      aiCheck: {
        task: 'Write a message asking to swap a day (four sentences, about 30 '
          + 'words). Say the day, who you want to swap with, why, and what you '
          + 'are asking.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a day or a time, the DAY and the TIME go in the '
          + 'first two sentences. Everything else can wait.',
        '⚠ If you are asking for something, ask in the last sentence. The '
          + 'reader remembers the last thing.',
        'The shape: who it is to → the day and the time → why → what you are '
          + 'asking for.']
      }
    },
    {
      id: 'c10',
      kind: 'own',
      ref: '3.7.6P',
      bookRef: 'Unit 3 · 3.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is '
  + 'missing. Count the sentences: four.',
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
      ideas: ['3.2 say a time two ways'],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Change books. Point at the line. Read it aloud. Say the one thing '
          + 'that is missing. Count the sentences: four.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether the feedback points at a line and names ONE thing that is '
          + 'missing, which is what the book\'s own feedback box asks for. A '
          + 'judgement with no line pointed at is not feedback.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a day or a time, the DAY and the TIME go in the '
          + 'first two sentences. Everything else can wait.',
        '⚠ If you are asking for something, ask in the last sentence. The '
          + 'reader remembers the last thing.',
        'The shape: who it is to → the day and the time → why → what you are '
          + 'asking for.']
      }
    },
    {
      id: 'c11',
      ref: '3.7.7',
      bookRef: 'Unit 3 · 3.7 · Lesson B · Writing · Write freely – exam practice (A2 Key '
  + 'Writing Part 6, at A1 length)',
      type: 'writer',
      title: 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)',
      kind: 'model',
      instruction: 'Write a message to your supervisor about a swap (<b>four sentences, about 30 '
  + 'words</b>). Say the day, who agreed, why, and ask for it to go on the board.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      passage: {
        title: 'Homework',
        html: '<p>Finish your message. Then write the <b>answer</b> your supervisor '
          + 'would send (20 words or more).</p>'
      },
      model: ['Abu Yasser, I am swapping Thursday with Samih. He agreed this morning. '
        + 'My brother is in hospital that day. Please write it on the board today'],
      stems: ['He agreed this…',
      'My brother is…',
      'Please write it…'],
      coach: {
        title: 'What to include',
        task: 'Write a message to your supervisor about a swap (four sentences, about 30 '
  + 'words). Say the day, who agreed, why, and ask for it to go on the board.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words.' },
            { t: '⚠ In a message about a day or a time, the DAY and the TIME go in '
              + 'the first two sentences. Everything else can wait.' },
            { t: '⚠ If you are asking for something, ask in the last sentence. The '
              + 'reader remembers the last thing.' },
            { t: 'The shape: who it is to → the day and the time → why → what you '
              + 'are asking for.' }]
      },
      aiCheck: {
        task: 'Write a message to your supervisor about a swap (four sentences, '
          + 'about 30 words). Say the day, who agreed, why, and ask for it to go '
          + 'on the board.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a day or a time, the DAY and the TIME go in the '
          + 'first two sentences. Everything else can wait.',
        '⚠ If you are asking for something, ask in the last sentence. The '
          + 'reader remembers the last thing.',
        'The shape: who it is to → the day and the time → why → what you are '
          + 'asking for.']
      }
    },
    {
      id: 'c12',
      ref: '3.7.✓',
      bookRef: 'Unit 3 · 3.7 · Lesson B · Writing · Unit 3 check',
      type: 'scene',
      title: 'Unit 3 check',
      kind: 'own',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u3-3-7'
    }
  ]
});
