/* Unit 5 · cycle 5.7 — Review: a real delivery note.

   Built by tools/pbe_build_unit.py from the series' own pipeline.
   Every question, line, table and model answer is the book's own. */
PBE1.page('u5-s07', {
  book: { source: 'Proactive Business English A1', ref: 'Unit 5 · 5.7', part: '5.7',
          section: '7', lesson: 'Review: a real delivery note', title: 'Review: a real delivery note' },
  objective: 'Review: a real delivery note — and one problem to talk about together',
  cards: [
    {
      id: 'c1',
      ref: '5.7.1',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Get ready – Unit 5 quiz',
      type: 'discuss',
      title: 'Get ready – Unit 5 quiz',
      instruction: '',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>Say it in '
          + 'English</th><th>✓</th></tr><tr><td><b>5.1</b> The four things on '
          + 'every note, in order.</td><td>&nbsp;</td></tr><tr><td><b>5.2</b> '
          + '04/03 from Beirut. Say it, and write it '
          + 'safely.</td><td>&nbsp;</td></tr><tr><td><b>5.3</b> Somebody says '
          + '"twelve". What do you '
          + 'ask?</td><td>&nbsp;</td></tr><tr><td><b>5.4</b> A driver is in a '
          + 'hurry and you have not '
          + 'counted.</td><td>&nbsp;</td></tr><tr><td><b>5.5</b> You cannot tell '
          + 'a one from a seven.</td><td>&nbsp;</td></tr><tr><td><b>5.6</b> The '
          + 'lorry came with nothing. What do you '
          + 'do?</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Write what you would say. Your own words.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c2',
      ref: '5.7.2',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Listen and read',
      type: 'scene',
      title: 'Listen and read',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-7',
      passage: {
        title: 'Language box',
        html: '<p><b>Review — the six things from this unit</b></p><table '
          + 'class=\'bk\'><tr><th>Cycle</th><th>You can '
          + 'say</th></tr><tr><td><b>5.1</b></td><td><i>Name. Date. Quantity. '
          + 'Signature. The last one says the other three are '
          + 'correct.</i></td></tr><tr><td><b>5.2</b></td><td><i>04/03 is 4 March '
          + 'here. Write the month in '
          + 'letters.</i></td></tr><tr><td><b>5.3</b></td><td><i>Twelve what? '
          + 'Twelve boxes, not '
          + 'twelve.</i></td></tr><tr><td><b>5.4</b></td><td><i>I have not '
          + 'counted it yet. Two '
          + 'minutes.</i></td></tr><tr><td><b>5.5</b></td><td><i>Is it a one or a '
          + 'seven? Digit by '
          + 'digit.</i></td></tr><tr><td><b>5.6</b></td><td><i>There is no note. '
          + 'Then I write one, and you sign it.</i></td></tr></table><p>⚠ <b>The '
          + 'new thing here: the driver is right, Ammar is right, and both of '
          + 'them are right about something that costs the other man money.</b> '
          + '<b>The road does close at two. And Ammar did lose a box off his own '
          + 'name last month.</b></p><p><b>Useful words:</b> four more stops · it '
          + 'came off my name · I did not load it · the only two things on the '
          + 'table · a third thing</p>'
      },
      quiz: {
        type: 'quizset',
        title: 'After you listen',
        instruction: 'Choose the answer.',
        items: [{
            q: 'Books closed. Listen. What does the driver want?',
            options: [{
              t: 'to be paid',
              ok: false
            },
            {
              t: 'a signature before the count',
              ok: true,
              why: 'a signature before the count'
            },
            {
              t: 'to leave the pallets outside',
              ok: false
            }]
          }],
        say: true
      }
    },
    {
      id: 'c3',
      ref: '5.7.2',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Listen and read',
      type: 'discuss',
      title: 'Listen and read — the questions',
      instruction: 'Answer from what you heard. Play the scene again if you need to.',
      questions: [{
            q: 'Listen again. How many stops has the driver got left?',
            model: 'Four',
            minWords: 1,
            rows: 2
          },
      {
            q: 'What has happened to Ammar before?',
            model: 'He signed for sixteen last month, got fifteen, and it came off his name',
            minWords: 4,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c4',
      ref: '5.7.3',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Practise',
      type: 'discuss',
      title: 'Practise',
      instruction: 'Work in pairs. One is the driver. One is Ammar. Say why you are right.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The driver says</th><th>Ammar '
          + 'says</th></tr><tr><td>Four more stops and the Homs road closes at '
          + 'two. ⚠ <b>Four minutes at every stop is his whole afternoon, and he '
          + 'did not load the lorry.</b></td><td>Sixteen on the paper and fifteen '
          + 'in the yard last month. ⚠ <b>It came off his name, and a signature '
          + 'cannot be taken back.</b></td></tr></table>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c5',
      ref: '5.7.3R',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Perform',
      type: 'discuss',
      title: 'Perform',
      instruction: 'Two pairs say the two sides for the class — books closed.',
      questions: [{
            q: 'You listened to the other pair. Write the words you heard them use.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c6',
      ref: '5.7.4',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Your turn',
      type: 'discuss',
      title: 'Your turn',
      instruction: 'Think of a time somebody wanted you to be quick and you wanted to be '
  + 'careful. Tell your partner. Write it.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>What they wanted</th><th>What I '
          + 'wanted</th><th>What '
          + 'happened</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>'
      },
      questions: [{
            q: 'Do the task, then write what you said and what you heard.',
            model: 'What they wanted: the customer wanted the bread bagged fast, ten '
              + 'people waiting. What I wanted: to count the change properly. '
              + 'What happened: I counted it, two people left, and the till was '
              + 'right at the end of the day · What they wanted: the engineer '
              + 'wanted the machine started. What I wanted: to check the guard '
              + 'was back on. What happened: I checked it, we lost four minutes, '
              + 'and the guard was not back on',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'Think of a time somebody wanted you to be quick and you wanted to be '
          + 'careful. Tell your partner. Write it.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether the answer answers the question that was actually asked, and '
          + 'whether it uses this cycle\'s grammar. Not style. Not length.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a delivery, the QUANTITY and the DIFFERENCE go '
          + 'first. The paper says 16. I counted 15. Two sentences, two numbers.',
        '⚠ Name the LINE, not just the delivery. A note with four lines on it '
          + 'has four places to be wrong.',
        'The shape: who it is to → what the paper says → what you counted → '
          + 'what you want done.']
      }
    },
    {
      id: 'c7',
      ref: '5.7.4R',
      bookRef: 'Unit 5 · 5.7 · Lesson A · Speaking · Report – everybody is right',
      type: 'discuss',
      title: 'Report – everybody is right',
      instruction: 'The problem. The driver has four more stops and a road that closes at two. '
  + 'Ammar signed for sixteen last month, got fifteen, and it came off his name. '
  + 'Four minutes is real to both of them.',
      passage: {
        title: 'From the book',
        html: '<table class=\'bk\'><tr><th>The driver is right</th><th>Ammar is '
          + 'right</th><th>The third thing</th></tr><tr><td>The road closes at '
          + 'two. ⚠ <b>Four minutes at each of five stops is twenty minutes, and '
          + 'he did not load the lorry — he cannot fix what is wrong inside '
          + 'it.</b></td><td>Sixteen on the paper, fifteen in the yard, off his '
          + 'name. ⚠ <b>A signature is a sentence you cannot take back, which is '
          + '5.1.</b></td><td>⚠ <b>Count the LINES, not the boxes, and sign for '
          + 'the lines you counted.</b> <b>Ammar counts line 1 — the white '
          + 'labels, the line that was short last time — in forty seconds, signs '
          + 'for that line, and writes <i>lines 2 to 4 not counted, driver '
          + 'waiting</i>.</b> <b>The driver leaves in one minute. The office '
          + 'knows exactly what was and was not checked.</b></td></tr></table>'
      },
      questions: [{
            q: 'Write what you told the class.',
            model: 'The three positions, in full · The driver is right because the '
              + 'road closes at two and he did not load it. Ammar is right '
              + 'because he paid for a box last month. So he counts line one, the '
              + 'line that went wrong before, signs for that line, and writes '
              + 'that lines two to four were not counted with the driver waiting',
            minWords: 6,
            rows: 3
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.',
      aiCheck: {
        task: 'The problem. The driver has four more stops and a road that closes '
          + 'at two. Ammar signed for sixteen last month, got fifteen, and it '
          + 'came off his name. Four minutes is real to both of them.',
        grammar: 'Review — the six things from this unit',
        focus: 'Whether you have named what EACH side is right about. Not who wins, '
          + 'and not a compromise: one sentence for each person\'s reason.',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a delivery, the QUANTITY and the DIFFERENCE go '
          + 'first. The paper says 16. I counted 15. Two sentences, two numbers.',
        '⚠ Name the LINE, not just the delivery. A note with four lines on it '
          + 'has four places to be wrong.',
        'The shape: who it is to → what the paper says → what you counted → '
          + 'what you want done.']
      }
    },
    {
      id: 'c8',
      ref: '5.7.5',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Read – exam practice (A2 Key Reading '
  + 'Part 1, at A1 length)',
      type: 'discuss',
      title: 'Read – exam practice (A2 Key Reading Part 1, at A1 length)',
      instruction: 'Read the five notices. What does each one say? Choose A, B or C.',
      passage: {
        title: 'From the book',
        html: '<p><b>1</b> <i>NOT COUNTED IT? DO NOT SIGN IT</i> <b>A</b> Sign and '
          + 'count later. <b>B</b> Count before you sign. <b>C</b> Never sign '
          + 'anything.</p><p><b>2</b> <i>WRITE THE MONTH IN LETTERS</i> <b>A</b> '
          + '04/03 is fine. <b>B</b> Write "4 March". <b>C</b> Do not write '
          + 'dates.</p><p><b>3</b> <i>NO NOTE? WRITE ONE. DRIVER SIGNS TOO.</i> '
          + '<b>A</b> Send the lorry away. <b>B</b> Take the goods and say '
          + 'nothing. <b>C</b> Make your own paper and get it '
          + 'signed.</p><p><b>4</b> <i>NUMBERS: DIGIT BY DIGIT, BOTH WAYS</i> '
          + '<b>A</b> Read it once. <b>B</b> Read theirs and then read yours. '
          + '<b>C</b> Guess the unclear one.</p><p><b>5</b> <i>12 IS NOT A '
          + 'QUANTITY</i> <b>A</b> A number needs a unit. <b>B</b> Twelve is too '
          + 'many. <b>C</b> Do not write numbers.</p><h4>Writer\'s '
          + 'box</h4><p><b>Exam practice — A2 Key Writing Part 6, at A1 '
          + 'length.</b> <b>Four sentences, about 30 words.</b></p><p>⚠ <b>In a '
          + 'message about a delivery, the QUANTITY and the DIFFERENCE go '
          + 'first.</b> <i>The paper says 16. I counted 15.</i> <b>Two sentences, '
          + 'two numbers.</b></p><p>⚠ <b>Name the LINE, not just the '
          + 'delivery.</b> <b>A note with four lines on it has four places to be '
          + 'wrong.</b></p><p><b>The shape:</b> who it is to → what the paper '
          + 'says → what you counted → what you want done.</p>'
      },
      questions: [{
            q: 'Write what you said and what you heard.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Saved. Press “Show me” to put the book\'s answer beside your own.'
    },
    {
      id: 'c9',
      ref: '5.7.6',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Write with help',
      type: 'writer',
      title: 'Write with help',
      instruction: 'Write a message about a short delivery (<b>four sentences, about 30 '
  + 'words</b>). Say the paper number, what you counted, which line, and what you '
  + 'want.',
      minWords: 15,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 15 words.',
          rows: 4
        }],
      model: ['To: the office',
      'Note 4417 came today. The paper says 16 boxes. I counted 15, on line '
        + '1, the white labels. Please ask Beirut for the missing box'],
      coach: {
        title: 'What to include',
        task: 'Write a message about a short delivery (four sentences, about 30 words). Say '
  + 'the paper number, what you counted, which line, and what you want.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words.' },
            { t: '⚠ In a message about a delivery, the QUANTITY and the DIFFERENCE '
              + 'go first. The paper says 16. I counted 15. Two sentences, two '
              + 'numbers.' },
            { t: '⚠ Name the LINE, not just the delivery. A note with four lines '
              + 'on it has four places to be wrong.' },
            { t: 'The shape: who it is to → what the paper says → what you counted '
              + '→ what you want done.' }]
      },
      aiCheck: {
        task: 'Write a message about a short delivery (four sentences, about 30 '
          + 'words). Say the paper number, what you counted, which line, and what '
          + 'you want.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a delivery, the QUANTITY and the DIFFERENCE go '
          + 'first. The paper says 16. I counted 15. Two sentences, two numbers.',
        '⚠ Name the LINE, not just the delivery. A note with four lines on it '
          + 'has four places to be wrong.',
        'The shape: who it is to → what the paper says → what you counted → '
          + 'what you want done.']
      }
    },
    {
      id: 'c10',
      ref: '5.7.6P',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Check together',
      type: 'discuss',
      title: 'Check together',
      instruction: 'Change books. Point at the line. Read it aloud. Say the one thing that is '
  + 'missing. Count the sentences: four.',
      questions: [{
            q: 'You read your partner\'s work. Write the one thing you found.',
            minWords: 6,
            rows: 2
          }],
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
        '⚠ In a message about a delivery, the QUANTITY and the DIFFERENCE go '
          + 'first. The paper says 16. I counted 15. Two sentences, two numbers.',
        '⚠ Name the LINE, not just the delivery. A note with four lines on it '
          + 'has four places to be wrong.',
        'The shape: who it is to → what the paper says → what you counted → '
          + 'what you want done.']
      }
    },
    {
      id: 'c11',
      ref: '5.7.7',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Write freely – exam practice (A2 Key '
  + 'Writing Part 6, at A1 length)',
      type: 'writer',
      title: 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)',
      instruction: 'Write a message to the office about a delivery that was wrong (<b>four '
  + 'sentences, about 30 words</b>). The note number, the two quantities, the '
  + 'line, and what you want done.',
      minWords: 20,
      paras: [{
          label: 'Your answer',
          purpose: 'Write at least 20 words.',
          rows: 5
        }],
      passage: {
        title: 'Homework',
        html: '<p>Finish your message. Then write the <b>reply</b> the office would '
          + 'send (20 words or more).</p>'
      },
      model: ['Note 2208 came on 12 March. The paper says 40 trays, line 2. I counted '
        + '38 and the driver signed to agree. Please take two trays off the '
        + 'invoice'],
      coach: {
        title: 'What to include',
        task: 'Write a message to the office about a delivery that was wrong (four '
  + 'sentences, about 30 words). The note number, the two quantities, the line, '
  + 'and what you want done.',
        criteria: [{ t: 'Exam practice — A2 Key Writing Part 6, at A1 length. Four '
              + 'sentences, about 30 words.' },
            { t: '⚠ In a message about a delivery, the QUANTITY and the DIFFERENCE '
              + 'go first. The paper says 16. I counted 15. Two sentences, two '
              + 'numbers.' },
            { t: '⚠ Name the LINE, not just the delivery. A note with four lines '
              + 'on it has four places to be wrong.' },
            { t: 'The shape: who it is to → what the paper says → what you counted '
              + '→ what you want done.' }]
      },
      aiCheck: {
        task: 'Write a message to the office about a delivery that was wrong (four '
          + 'sentences, about 30 words). The note number, the two quantities, the '
          + 'line, and what you want done.',
        grammar: 'Review — the six things from this unit',
        must: ['Exam practice — A2 Key Writing Part 6, at A1 length. Four sentences, '
          + 'about 30 words.',
        '⚠ In a message about a delivery, the QUANTITY and the DIFFERENCE go '
          + 'first. The paper says 16. I counted 15. Two sentences, two numbers.',
        '⚠ Name the LINE, not just the delivery. A note with four lines on it '
          + 'has four places to be wrong.',
        'The shape: who it is to → what the paper says → what you counted → '
          + 'what you want done.']
      }
    },
    {
      id: 'c12',
      ref: '5.7.✓',
      bookRef: 'Unit 5 · 5.7 · Lesson B · Writing · Unit 5 check',
      type: 'scene',
      title: 'Unit 5 check',
      instruction: 'Listen and read. Each person has their own voice.',
      scene: 'u5-5-7'
    }
  ]
});
